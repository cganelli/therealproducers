// Privacy & Terms page describing data practices and site terms for The Real Producers (src/components/Privacy.tsx).
import React from 'react';

const Privacy = () => {
  return (
    <section className="pt-28 pb-16 bg-stone-50 min-h-screen px-6 sm:px-10 lg:px-14 xl:px-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="card bg-white shadow-xl border border-stone-200">
          <div className="card-body space-y-8 px-4 sm:px-6 lg:px-10">
            <div>
              <p className="badge badge-neutral text-xs uppercase tracking-wide">Policy</p>
              <h1 className="text-4xl font-bold text-stone-900 mt-3">Privacy Policy</h1>
              <p className="text-stone-600 mt-3 leading-relaxed">
                The Real Producers collects only the contact information you submit—your name, email, and phone number—so we can
                respond to your inquiries. We do not sell or share your information with third parties. Listing views are embedded
                from onehome.com. onehome.com’s collection, use, and handling of information is governed by its own privacy policy.
              </p>
              <p className="text-stone-600 mt-3 leading-relaxed">
                By submitting a lead form, you consent to be contacted by our team regarding your request. You can reach us at{' '}
                <a className="link link-primary" href="mailto:viviana@playafilms.com">viviana@playafilms.com</a> to update or delete
                your information.
              </p>
            </div>

            <div className="divider" />

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Information We Collect</h2>
              <ul className="list-disc list-inside text-stone-700 leading-relaxed space-y-2">
                <li>Lead forms: name, email, phone.</li>
                <li>Optional message content you provide.</li>
                <li>No payment data or sensitive personal information is collected.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-stone-700 leading-relaxed space-y-2">
                <li>Respond to your property inquiries and service requests.</li>
                <li>Schedule showings and provide market information you request.</li>
                <li>Maintain records of communications related to your inquiry.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Sharing</h2>
              <p className="text-stone-700 leading-relaxed">
                We do not sell or share your personal information with third parties. We may share limited details with service
                providers only as needed to respond to your request (for example, scheduling a showing) and only with your consent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Listings via onehome.com</h2>
              <p className="text-stone-700 leading-relaxed">
                Listings displayed through the onehome.com frame do not require you to submit personal information to view them.
                No PII is transmitted to view listings.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Retention & Security</h2>
              <p className="text-stone-700 leading-relaxed">
                We retain lead details only as long as needed to respond or as required by law. We use reasonable administrative
                and technical safeguards to protect the information you provide.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Your Choices</h2>
              <p className="text-stone-700 leading-relaxed">
                You can request that we update or delete your submitted contact information by emailing{' '}
                <a className="link link-primary" href="mailto:viviana@playafilms.com">viviana@playafilms.com</a>.
              </p>
            </div>

            <div className="divider" />

            <div>
              <p className="badge badge-neutral text-xs uppercase tracking-wide">Terms</p>
              <h2 className="text-3xl font-bold text-stone-900 mt-3">Terms & Conditions</h2>
              <p className="text-stone-700 mt-3 leading-relaxed">
                By using this site, you agree to use it only for lawful purposes related to evaluating real estate services and
                listings. All content is provided for informational purposes only and is not a guarantee of availability, pricing,
                or outcomes.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-stone-900">Permitted Use</h3>
              <ul className="list-disc list-inside text-stone-700 leading-relaxed space-y-2">
                <li>View property information and submit lead forms for legitimate inquiries.</li>
                <li>No automated scraping, bulk downloads, or misuse of contact information.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-stone-900">No Professional Advice</h3>
              <p className="text-stone-700 leading-relaxed">
                Information on this site is provided “as is” without warranties. Always verify property details and consult with a
                licensed professional before making decisions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-stone-900">Links & Third Parties</h3>
              <p className="text-stone-700 leading-relaxed">
                We may link to third-party sites (e.g., onehome.com). We are not responsible for their content or practices; review
                their terms and privacy policies separately.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-stone-900">Contact & Updates</h3>
              <p className="text-stone-700 leading-relaxed">
                For questions about these Terms or our Privacy Policy, contact us at{' '}
                <a className="link link-primary" href="mailto:viviana@playafilms.com">viviana@playafilms.com</a>. We may update these
                terms from time to time; continued use of the site constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
