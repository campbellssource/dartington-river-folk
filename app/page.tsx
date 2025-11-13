import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">
            Bidwell Brook Partnership
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">
            Water/River Observation Survey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Welcome to the river observation survey app. This tool helps volunteers 
            record observations of water and river interactions to understand drainage 
            patterns and potential flooding issues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link 
            href="/volunteer"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200 hover:border-blue-400"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">👤</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Volunteer Registration
              </h3>
              <p className="text-gray-600">
                Register as a volunteer observer
              </p>
            </div>
          </Link>

          <Link 
            href="/locations"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-green-200 hover:border-green-400"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">
                Select Location
              </h3>
              <p className="text-gray-600">
                Choose an observation point (1-20)
              </p>
            </div>
          </Link>

          <Link 
            href="/observe"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200 hover:border-purple-400"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">
                Record Observation
              </h3>
              <p className="text-gray-600">
                Log your findings and evidence
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold mb-3 text-blue-900">
            What to Look For:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Erosion patterns (bare soil, gullies, washouts)</li>
            <li>Sediment deposits (silt or debris accumulated)</li>
            <li>Water staining on surfaces</li>
            <li>Areas where water tends to pool</li>
            <li>Active water flow during or after rainfall</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
