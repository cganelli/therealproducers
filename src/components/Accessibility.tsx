// Accessibility page providing the site's WCAG commitment details (src/components/Accessibility.tsx).
import React from 'react';

const Accessibility = () => {
  return (
    <section className="pt-28 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card bg-white shadow-xl border border-stone-200">
          <div className="card-body space-y-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="badge badge-neutral text-xs uppercase tracking-wide">Accessibility Statement</p>
                <h1 className="text-4xl font-bold text-stone-900 mt-3">Our Commitment</h1>
                <p className="text-stone-600 mt-3 leading-relaxed">
                  The Real Producers is committed to making our website accessible and usable for everyone. We believe in
                  providing an inclusive experience that allows all users to access our content, regardless of their abilities
                  or the assistive technologies they use.
                </p>
              </div>
              <div className="rounded-lg bg-stone-100 px-4 py-3 text-sm text-stone-700 border border-stone-200">
                <p className="font-semibold">Contact for accessibility support</p>
                <p>Email: <a className="link link-primary" href="mailto:viviana@playafilms.com">viviana@playafilms.com</a></p>
                <p>Response time: within 5 business days</p>
              </div>
            </div>

            <div className="divider" />

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-stone-900">Conformance Status</h2>
                <p className="text-stone-700 leading-relaxed">
                  The Web Content Accessibility Guidelines (WCAG) 2.2 defines requirements for designers and developers to improve
                  accessibility for people with disabilities. Our goal is to maintain substantial conformance with WCAG 2.2 Level AA.
                  We view accessibility as an ongoing effort and perform regular reviews to ensure we are meeting these standards.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-stone-900">Assessment Approach</h2>
                <ul className="space-y-3 text-stone-700 leading-relaxed list-disc list-inside">
                  <li><span className="font-semibold">Automated Audits:</span> Continuous testing using industry-standard tools and AI-assisted accessibility reviews to identify code-level barriers.</li>
                  <li><span className="font-semibold">Manual Verification:</span> Regular manual keyboard-only testing to ensure functional flow, navigation, and the absence of keyboard traps.</li>
                  <li><span className="font-semibold">Code-Level Review:</span> Ongoing analysis against WCAG 2.2 AA criteria to ensure long-term compliance.</li>
                </ul>
              </div>
            </div>

            <div className="divider" />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-stone-900">Measures We Take</h2>
                <ul className="space-y-3 text-stone-700 leading-relaxed list-disc list-inside">
                  <li><span className="font-semibold">Keyboard Navigation:</span> All pages are designed to be navigable via keyboard with clearly visible focus indicators.</li>
                  <li><span className="font-semibold">Semantic Structure:</span> Proper use of HTML5 landmarks, hierarchical headings, and descriptive labels to assist assistive technologies.</li>
                  <li><span className="font-semibold">Visual Standards:</span> Color contrast ratios that meet or exceed 4.5:1 for all text elements.</li>
                  <li><span className="font-semibold">Alternative Text:</span> Meaningful alt text for non-text content to ensure context is preserved for screen reader users.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-stone-900">Third-Party Content</h2>
                <p className="text-stone-700 leading-relaxed">
                  Our site may contain links to third-party platforms (like onehome.com or similar). While we strive to work with
                  accessible partners and monitor the content we integrate, the accessibility of third-party sites is outside of our
                  direct control.
                </p>
              </div>
            </div>

            <div className="divider" />

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Feedback</h2>
              <p className="text-stone-700 leading-relaxed">
                If you encounter a barrier on this site, we want to hear from you so we can work to address it:
              </p>
              <ul className="space-y-2 text-stone-700 leading-relaxed list-disc list-inside">
                <li><span className="font-semibold">Email:</span> <a className="link link-primary" href="mailto:viviana@playafilms.com">viviana@playafilms.com</a></li>
                <li><span className="font-semibold">Response Time:</span> We aim to respond to accessibility-related feedback within 5 business days.</li>
              </ul>
            </div>

            <div className="divider" />

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">Updates to This Statement</h2>
              <p className="text-stone-700 leading-relaxed">
                We review and update this accessibility statement regularly to reflect our ongoing efforts. This statement was last
                updated in January 2026 following a review against WCAG 2.2 standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
