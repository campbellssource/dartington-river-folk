"use client";

import Link from "next/link";

export default function AccountPage() {
  // Mock user data - would come from authentication in real app
  const mockUser = {
    name: "John Smith",
    email: "john.smith@example.com",
    joinedDate: "2025-11-01",
    observationCount: 5,
    locationsVisited: 3,
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-light-grey)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--primary-navy)]">
            My Account
          </h1>

          {/* Overview Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-lg p-6">
              <div className="text-4xl font-bold text-[var(--primary-accent)] mb-2">
                {mockUser.observationCount}
              </div>
              <div className="text-sm text-[var(--secondary-grey)]">
                Observations Made
              </div>
            </div>
            <div className="bg-white shadow-lg p-6">
              <div className="text-4xl font-bold text-[var(--primary-accent)] mb-2">
                {mockUser.locationsVisited}
              </div>
              <div className="text-sm text-[var(--secondary-grey)]">
                Locations Visited
              </div>
            </div>
            <div className="bg-white shadow-lg p-6">
              <div className="text-4xl font-bold text-[var(--primary-accent)] mb-2">
                {new Date(mockUser.joinedDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
              </div>
              <div className="text-sm text-[var(--secondary-grey)]">
                Member Since
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Observations */}
              <div className="bg-white shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-navy)]">
                  Recent Observations
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[var(--primary-accent)] pl-4 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-[var(--primary-navy)]">Location 5</h3>
                      <span className="text-sm text-[var(--secondary-grey)]">Nov 20, 2025</span>
                    </div>
                    <p className="text-sm text-[var(--primary-dark)]">
                      Observed significant water flow during heavy rain event...
                    </p>
                  </div>
                  <div className="border-l-4 border-[var(--primary-accent)] pl-4 py-2">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-[var(--primary-navy)]">Location 12</h3>
                      <span className="text-sm text-[var(--secondary-grey)]">Nov 18, 2025</span>
                    </div>
                    <p className="text-sm text-[var(--primary-dark)]">
                      Evidence of water staining and pooling after recent rainfall...
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/studies/heavy-rain/observations"
                      className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-semibold text-sm"
                    >
                      View all observations →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Password Setup Section */}
              <div className="bg-[var(--secondary-light-grey)] border-l-4 border-[var(--button-primary)] p-6">
                <h2 className="text-xl font-semibold mb-3 text-[var(--primary-navy)]">
                  💡 Set a Password for Faster Login
                </h2>
                <p className="text-[var(--primary-dark)] mb-4">
                  You&apos;re currently logging in with magic links. Setting a password gives you more login options while keeping magic links available.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-[var(--secondary-grey)]">
                    <strong>Benefits:</strong>
                  </p>
                  <ul className="text-sm text-[var(--secondary-grey)] list-disc list-inside space-y-1">
                    <li>Faster login when you&apos;re in a hurry</li>
                    <li>No need to check your email every time</li>
                    <li>Magic links still work if you forget your password</li>
                  </ul>
                  <button
                    disabled
                    className="mt-4 px-6 py-2 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm disabled:opacity-50"
                  >
                    Set Password (Coming Soon)
                  </button>
                </div>
              </div>

              {/* Account Information */}
              <div className="bg-white shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--primary-navy)]">
                  Account Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-[var(--primary-dark)]">
                      Name
                    </label>
                    <p className="text-[var(--primary-dark)]">{mockUser.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-[var(--primary-dark)]">
                      Email
                    </label>
                    <p className="text-[var(--primary-dark)]">{mockUser.email}</p>
                  </div>
                  <div className="pt-4">
                    <button
                      disabled
                      className="px-6 py-2 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm disabled:opacity-50"
                    >
                      Edit Profile (Coming Soon)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-[var(--primary-navy)]">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/observe"
                    className="block w-full py-2 px-4 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase font-semibold text-sm text-center"
                  >
                    Make Observation
                  </Link>
                  <Link
                    href="/studies/heavy-rain/locations"
                    className="block w-full py-2 px-4 bg-gray-200 text-[var(--primary-dark)] hover:bg-gray-300 transition-colors uppercase font-semibold text-sm text-center"
                  >
                    View Locations
                  </Link>
                  <Link
                    href="/studies/heavy-rain/observations"
                    className="block w-full py-2 px-4 bg-gray-200 text-[var(--primary-dark)] hover:bg-gray-300 transition-colors uppercase font-semibold text-sm text-center"
                  >
                    View Observations
                  </Link>
                </div>
              </div>

              {/* Settings */}
              <div className="bg-white shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-[var(--primary-navy)]">
                  Settings
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <label className="flex items-center cursor-not-allowed opacity-50">
                      <input type="checkbox" disabled checked className="mr-2" />
                      <span>Email notifications</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center cursor-not-allowed opacity-50">
                      <input type="checkbox" disabled className="mr-2" />
                      <span>Heavy rain alerts</span>
                    </label>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <button
                      disabled
                      className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-semibold text-sm disabled:opacity-50"
                    >
                      Download my data
                    </button>
                  </div>
                  <div>
                    <button
                      disabled
                      className="text-red-500 hover:text-red-700 font-semibold text-sm disabled:opacity-50"
                    >
                      Delete account
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-xs text-[var(--secondary-grey)]">
                  Settings functionality requires backend implementation
                </p>
              </div>

              {/* Contribution Milestone */}
              <div className="bg-gradient-to-br from-[var(--primary-accent-light)] to-[var(--primary-light)] text-white p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Keep Contributing!
                </h3>
                <p className="text-sm mb-3">
                  You&apos;re making a difference! Your observations help us understand 
                  our local water systems.
                </p>
                <div className="text-xs opacity-90">
                  Next milestone: 10 observations
                </div>
              </div>
            </div>
          </div>

          {/* GDPR Notice */}
          <div className="mt-8 bg-blue-50 border border-blue-200 p-4 text-sm">
            <p className="text-[var(--primary-dark)]">
              You have the right to access, correct, or delete your personal data. 
              See our{" "}
              <Link href="/privacy" className="text-[var(--link-color)] hover:text-[var(--link-hover)]">
                Privacy Policy
              </Link>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
