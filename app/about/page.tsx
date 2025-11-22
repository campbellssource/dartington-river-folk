import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-navy)]">
              About the Project
            </h1>

            <div className="prose prose-lg max-w-none text-[var(--primary-dark)]">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-navy)]">
                Bidwell Brook Partnership
              </h2>
              <p className="mb-4">
                The Bidwell monitors project is an initiative of the Bidwell Brook Partnership, 
                bringing together volunteers to observe and document water drainage patterns in the 
                Dartington and Totnes area of Devon.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                Current Study: Heavy Rain Monitoring
              </h2>
              <p className="mb-4">
                Our Autumn 2025 study focuses on understanding the interactions between informal 
                drainage systems (agricultural land and natural spaces) and formal drainage systems 
                that route runoff into the combined sewer system.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary-navy)]">
                Why This Matters
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Understanding flood risks in our community</li>
                <li>Identifying drainage system vulnerabilities</li>
                <li>Informing future infrastructure improvements</li>
                <li>Building community resilience to extreme weather</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                How You Can Help
              </h2>
              <p className="mb-4">
                We need volunteer monitors who can visit designated locations during or shortly 
                after heavy rainfall events to document evidence of water flow, drainage patterns, 
                and potential issues.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary-navy)]">
                What We Look For
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Erosion patterns and soil movement</li>
                <li>Sediment deposits and accumulation</li>
                <li>Water staining indicating past flow</li>
                <li>Areas where water pools or accumulates</li>
                <li>Active water flow and drainage patterns</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                Study Area
              </h2>
              <p className="mb-4">
                Our study focuses on 20 designated observation locations in the Dartington and 
                Totnes area (postcode TQ9), Devon, UK. Each location has been carefully selected 
                based on its potential for drainage system interactions.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-[var(--primary-navy)]">
                Future Studies
              </h2>
              <p className="mb-4">
                As our monitoring community grows, we plan to expand our observations to include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Aquatic invertebrate surveys (twice per year)</li>
                <li>Turbidity measurements at high-turbidity locations</li>
                <li>Water quality indicators</li>
                <li>Other ecological parameters</li>
              </ul>

              <div className="mt-8 p-6 bg-[var(--secondary-light-grey)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">
                  Get Involved
                </h3>
                <p className="mb-4">
                  Ready to join our community of volunteer monitors?
                </p>
                <Link
                  href="/signup"
                  className="inline-block px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
                >
                  Become a Monitor
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">
                  Learn More
                </h3>
                <p className="mb-2">
                  Visit the{" "}
                  <a
                    href="https://bidwellbrook.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link-color)] hover:text-[var(--link-hover)]"
                  >
                    Bidwell Brook Partnership website
                  </a>{" "}
                  for more information about our work.
                </p>
                <p>
                  Questions?{" "}
                  <Link href="/help" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
