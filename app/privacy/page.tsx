export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-navy)]">
              Privacy Policy
            </h1>

            <div className="prose max-w-none text-[var(--primary-dark)]">
              <p className="mb-4 text-sm text-[var(--secondary-grey)]">
                Last updated: November 2025
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                When you register as a volunteer monitor, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Your name and email address</li>
                <li>Optional: Your organization/affiliation</li>
                <li>Optional: Your previous monitoring experience</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Send you observation requests when monitoring is needed</li>
                <li>Attribute observations to their observer</li>
                <li>Communicate about the project and study results</li>
                <li>Manage your account and preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                3. Data Sharing
              </h2>
              <p className="mb-4">
                We do not sell or share your personal information with third parties. 
                Observation data may be shared publicly (with your name) as part of our 
                research findings, but your email address remains private.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                4. Your Rights (GDPR Compliance)
              </h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of email communications</li>
                <li>Download your data</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                5. Data Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect 
                your personal data against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                6. Cookies
              </h2>
              <p className="mb-4">
                We use essential cookies to maintain your login session. We do not use 
                tracking or advertising cookies.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                7. Contact
              </h2>
              <p className="mb-4">
                For privacy-related questions or to exercise your rights, contact us at{" "}
                <a href="mailto:info@bidwellbrook.org" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                  info@bidwellbrook.org
                </a>
              </p>

              <div className="mt-8 p-6 bg-[var(--secondary-light-grey)]">
                <p className="text-sm">
                  <strong>Note:</strong> This is a placeholder privacy policy. A complete, 
                  legally-reviewed privacy policy should be implemented before collecting 
                  real user data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
