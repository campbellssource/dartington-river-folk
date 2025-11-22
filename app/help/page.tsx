import Link from "next/link";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-navy)]">
              Help & Support
            </h1>

            <div className="prose max-w-none text-[var(--primary-dark)]">
              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    How do I become a volunteer monitor?
                  </h3>
                  <p className="mb-2">
                    Visit our{" "}
                    <Link href="/signup" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                      signup page
                    </Link>{" "}
                    to create an account. Registration takes less than 2 minutes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    When should I make observations?
                  </h3>
                  <p className="mb-2">
                    The best time to observe is during or shortly after heavy or prolonged 
                    rainfall. We&apos;ll send you email notifications when conditions are ideal.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    What should I look for?
                  </h3>
                  <p className="mb-2">
                    Look for evidence of water flow and drainage patterns, including:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Erosion patterns and soil movement</li>
                    <li>Sediment deposits</li>
                    <li>Water staining on surfaces</li>
                    <li>Areas where water pools</li>
                    <li>Active water flow</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    How do I record an observation?
                  </h3>
                  <p className="mb-2">
                    1. Visit the{" "}
                    <Link href="/locations" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                      locations page
                    </Link>{" "}
                    and select a location<br />
                    2. Fill out the observation form with details<br />
                    3. Upload photos or videos (recommended)<br />
                    4. Submit your observation
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    Can I visit any location?
                  </h3>
                  <p className="mb-2">
                    We have 20 designated observation locations. While you can visit any of 
                    them, please respect private property and follow all safety guidelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    Is it safe to make observations during heavy rain?
                  </h3>
                  <p className="mb-2">
                    Safety is your top priority. Never put yourself at risk. Avoid flooded 
                    areas, fast-flowing water, and dangerous conditions. Observations shortly 
                    after rain are just as valuable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    How will my observations be used?
                  </h3>
                  <p className="mb-2">
                    Your observations help us understand drainage patterns and flood risks in 
                    the community. The data will inform infrastructure improvements and flood 
                    prevention strategies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    Can I edit or delete my observations?
                  </h3>
                  <p className="mb-2">
                    Once backend functionality is implemented, you&apos;ll be able to edit your 
                    observations within 24 hours of submission and delete them if needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)]">
                    How do I stop receiving email notifications?
                  </h3>
                  <p className="mb-2">
                    You can manage your notification preferences in your{" "}
                    <Link href="/account" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                      account settings
                    </Link>{" "}
                    once backend functionality is available.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[var(--secondary-light-grey)]">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-navy)]">
                  Still Need Help?
                </h2>
                <p className="mb-4">
                  If you couldn&apos;t find the answer to your question, please contact us:
                </p>
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@bidwellbrook.org" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                    info@bidwellbrook.org
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a 
                    href="https://bidwellbrook.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--link-color)] hover:text-[var(--link-hover)]"
                  >
                    bidwellbrook.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
