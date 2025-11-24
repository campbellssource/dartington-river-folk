"use client";

import Link from "next/link";

export default function HeavyRainStudyPage() {
  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-[var(--secondary-grey)] mb-4">
            <Link href="/studies" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
              Studies
            </Link>
            {" / Heavy Rain Monitoring Survey"}
          </div>

          {/* Header */}
          <div className="bg-white shadow-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--primary-navy)]">
                  Heavy Rain Monitoring Survey
                </h1>
                <div className="flex items-center gap-4 text-sm">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 font-semibold">
                    Active Study
                  </span>
                  <span className="text-[var(--secondary-grey)]">Autumn 2025</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-[var(--primary-dark)] mb-6">
              Investigating how informal drainage systems interact with formal drainage infrastructure 
              during heavy rain events in the Dartington and Totnes area.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-[var(--secondary-light-grey)] p-4">
                <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">20</div>
                <div className="text-sm text-[var(--secondary-grey)]">Observation Sites</div>
              </div>
              <div className="bg-[var(--secondary-light-grey)] p-4">
                <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">TQ9</div>
                <div className="text-sm text-[var(--secondary-grey)]">Postcode Area</div>
              </div>
              <div className="bg-[var(--secondary-light-grey)] p-4">
                <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">Autumn</div>
                <div className="text-sm text-[var(--secondary-grey)]">Study Period</div>
              </div>
              <div className="bg-[var(--secondary-light-grey)] p-4">
                <div className="text-2xl font-bold text-[var(--primary-accent)] mb-1">🌧️</div>
                <div className="text-sm text-[var(--secondary-grey)]">Heavy Rain Events</div>
              </div>
            </div>
          </div>

          {/* Study Focus */}
          <div className="bg-white shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-navy)]">Study Focus</h2>
            <p className="text-[var(--primary-dark)] mb-4">
              This community science study aims to understand how water moves through our local landscape 
              during and after heavy rainfall. We&apos;re particularly interested in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--primary-dark)] mb-6">
              <li>How agricultural land and natural spaces drain during heavy rain</li>
              <li>Where informal drainage connects to formal sewer systems</li>
              <li>Patterns of surface water runoff and accumulation</li>
              <li>Evidence of erosion, sediment movement, and water staining</li>
              <li>Potential flood risk areas and drainage bottlenecks</li>
            </ul>
            <p className="text-[var(--primary-dark)]">
              Your observations will help local authorities and environmental organizations make informed 
              decisions about flood prevention and water management strategies.
            </p>
          </div>

          {/* What We're Looking For */}
          <div className="bg-white shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-navy)]">What We&apos;re Looking For</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--primary-accent)]">When to Observe</h3>
                <ul className="space-y-2 text-[var(--primary-dark)]">
                  <li>• During heavy rain events</li>
                  <li>• Within 2-3 hours after rain stops</li>
                  <li>• We&apos;ll notify you when conditions are right</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[var(--primary-accent)]">What to Document</h3>
                <ul className="space-y-2 text-[var(--primary-dark)]">
                  <li>• Active water flow and pooling</li>
                  <li>• Erosion patterns and sediment deposits</li>
                  <li>• Water staining on surfaces</li>
                  <li>• Photos and videos of evidence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link
              href="/studies/heavy-rain/locations"
              className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)] group-hover:text-[var(--primary-accent)]">
                View Locations
              </h3>
              <p className="text-[var(--primary-dark)]">
                Explore the 20 observation sites on an interactive map with detailed information about each location.
              </p>
            </Link>

            <Link
              href="/studies/heavy-rain/observations"
              className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-navy)] group-hover:text-[var(--primary-accent)]">
                Browse Observations
              </h3>
              <p className="text-[var(--primary-dark)]">
                View observations from volunteer monitors, filter by location, and see what others have documented.
              </p>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[var(--primary-accent-light)] to-[var(--primary-light)] text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Contribute?</h3>
            <p className="mb-6">
              Join our volunteer monitors and help us understand water drainage patterns in the Dartington area. 
              Your observations make a real difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="inline-block px-6 py-3 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm"
              >
                Become a Monitor
              </Link>
              <Link
                href="/observe"
                className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors uppercase font-semibold text-sm border border-white/30"
              >
                Make an Observation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
