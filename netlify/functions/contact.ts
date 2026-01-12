// Netlify Function: handles contact form submissions with validation and spam mitigation.
import type { Handler } from '@netlify/functions';

type RateEntry = { count: number; resetAt: number };
const rateStore = new Map<string, RateEntry>();

const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX ?? 5); // requests per window
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 10 * 60 * 1000); // default 10 minutes
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SEND_TO = process.env.CONTACT_TO_EMAIL ?? 'viviana@playafilms.com';
const SEND_FROM = process.env.CONTACT_FROM_EMAIL ?? 'no-reply@therealproducers.com';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  company?: string; // honeypot
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

const MAX_LENGTHS = {
  name: 120,
  email: 200,
  phone: 40,
  message: 2000
};

const getClientIp = (headers: Record<string, string | undefined>) => {
  const forwarded = headers['x-forwarded-for'] ?? headers['client-ip'] ?? headers['x-nf-client-connection-ip'];
  if (!forwarded) return 'unknown';
  return forwarded.split(',')[0]?.trim() || 'unknown';
};

const checkRateLimit = (ip: string) => {
  const now = Date.now();
  const entry = rateStore.get(ip);
  if (!entry || entry.resetAt < now) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.max(0, Math.ceil((entry.resetAt - now) / 1000));
    return { ok: false, retryAfter };
  }
  entry.count += 1;
  return { ok: true };
};

const sendEmail = async (payload: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  budget?: string;
  timeline?: string;
  message?: string;
}) => {
  if (!SENDGRID_API_KEY) {
    return { ok: false, error: 'Email service not configured (SENDGRID_API_KEY missing).' };
  }

  const contentLines = [
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Property Type: ${payload.propertyType}`,
    `Budget: ${payload.budget || 'N/A'}`,
    `Timeline: ${payload.timeline || 'N/A'}`,
    '',
    'Message:',
    payload.message || '(none)'
  ];

  const body = {
    personalizations: [{ to: [{ email: SEND_TO }] }],
    from: { email: SEND_FROM },
    subject: 'New Contact Submission - The Real Producers',
    content: [
      {
        type: 'text/plain',
        value: contentLines.join('\n')
      }
    ]
  };

  const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!resp.ok) {
    const text = await resp.text();
    return { ok: false, error: `Email send failed (${resp.status}): ${text}` };
  }

  return { ok: true };
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body: ContactPayload;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON payload' }) };
  }

  // Honeypot check (spam mitigation)
  if (body.company && body.company.trim().length > 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Spam detected' }) };
  }

  // Basic rate limiting per IP (best-effort, per-instance)
  const clientIp = getClientIp(event.headers);
  const rate = checkRateLimit(clientIp);
  if (!rate.ok) {
    return {
      statusCode: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(rate.retryAfter ?? 60)
      },
      body: JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' })
    };
  }

  const errors: Record<string, string> = {};
  const trim = (v?: string) => (v ?? '').trim();

  const firstName = trim(body.firstName);
  const lastName = trim(body.lastName);
  const email = trim(body.email);
  const phone = trim(body.phone);
  const propertyType = trim(body.propertyType);
  const budget = trim(body.budget);
  const timeline = trim(body.timeline);
  const message = trim(body.message);

  const within = (value: string, max: number) => value.length <= max;

  if (!firstName) errors.firstName = 'First name is required.';
  else if (!within(firstName, MAX_LENGTHS.name)) errors.firstName = 'First name is too long.';

  if (!lastName) errors.lastName = 'Last name is required.';
  else if (!within(lastName, MAX_LENGTHS.name)) errors.lastName = 'Last name is too long.';

  if (!email) errors.email = 'Email is required.';
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Enter a valid email.';
  else if (!within(email, MAX_LENGTHS.email)) errors.email = 'Email is too long.';

  if (!phone) errors.phone = 'Phone is required.';
  else if (!PHONE_REGEX.test(phone)) errors.phone = 'Enter a valid phone number.';
  else if (!within(phone, MAX_LENGTHS.phone)) errors.phone = 'Phone is too long.';

  if (!propertyType) errors.propertyType = 'Select a property type.';
  if (budget && budget.length > 50) errors.budget = 'Budget is too long.';
  if (timeline && timeline.length > 50) errors.timeline = 'Timeline is too long.';
  if (message && !within(message, MAX_LENGTHS.message)) errors.message = 'Message is too long.';

  if (Object.keys(errors).length > 0) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ errors })
    };
  }

  const emailResult = await sendEmail({
    firstName,
    lastName,
    email,
    phone,
    propertyType,
    budget,
    timeline,
    message
  });

  if (!emailResult.ok) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to send message. Please try again later.' })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ok: true })
  };
};
