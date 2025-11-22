export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-navy)]">
              Terms of Service
            </h1>

            <div className="prose max-w-none text-[var(--primary-dark)]">
              <p className="mb-4 text-sm text-[var(--secondary-grey)]">
                Last updated: November 2025
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By registering as a volunteer monitor, you agree to these Terms of Service 
                and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                2. Volunteer Responsibilities
              </h2>
              <p className="mb-4">
                As a volunteer monitor, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide accurate and truthful observations</li>
                <li>Document observations during or shortly after rainfall events</li>
                <li>Respect private property and follow all safety guidelines</li>
                <li>Only submit observations you personally made</li>
                <li>Provide photos and videos that you have permission to share</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                3. Safety
              </h2>
              <p className="mb-4">
                You are responsible for your own safety while making observations. Do not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Enter dangerous or flooded areas</li>
                <li>Trespass on private property</li>
                <li>Put yourself at risk in any way</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                4. Content Ownership
              </h2>
              <p className="mb-4">
                You retain ownership of photos and observations you submit. By submitting 
                content, you grant the Bidwell Brook Partnership a non-exclusive license to 
                use, display, and share your observations for research and educational purposes.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                5. Account Termination
              </h2>
              <p className="mb-4">
                We reserve the right to suspend or terminate accounts that violate these 
                terms or submit false information.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                6. Limitation of Liability
              </h2>
              <p className="mb-4">
                The Bidwell Brook Partnership is not liable for any injuries, damages, or 
                losses incurred while participating in volunteer monitoring activities.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                7. Changes to Terms
              </h2>
              <p className="mb-4">
                We may update these terms from time to time. Continued use of the service 
                after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                8. Contact
              </h2>
              <p className="mb-4">
                Questions about these terms? Contact us at{" "}
                <a href="mailto:info@bidwellbrook.org" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                  info@bidwellbrook.org
                </a>
              </p>

              <div className="mt-8 p-6 bg-[var(--secondary-light-grey)]">
                <p className="text-sm">
                  <strong>Note:</strong> This is a placeholder terms of service. A complete, 
                  legally-reviewed terms document should be implemented before launching the 
                  service publicly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
