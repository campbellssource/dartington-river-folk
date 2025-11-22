import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">
            Bidwell Monitors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A collaborative monitoring platform for volunteers observing and documenting 
            environmental conditions across the Bidwell Brook catchment.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Help us build a comprehensive picture of our local environment through systematic 
            observation and data collection. Your contributions support research, conservation, 
            and community understanding of the Bidwell Brook ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          <Link 
            href="/locations"
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-blue-500"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-3">
                Record an Observation
              </h3>
              <p className="text-blue-100">
                Select a monitoring location and document your findings
              </p>
            </div>
          </Link>

          <Link 
            href="/volunteer"
            className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-blue-200 hover:border-blue-400"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">
                Register as Monitor
              </h3>
              <p className="text-gray-600">
                Join our community of volunteer observers
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">
            Current Monitoring Focus: Land & Drainage Hotspots
          </h3>
          <p className="text-gray-700 mb-4">
            We&apos;re currently gathering observations about water flow patterns, drainage issues, 
            and land-water interactions across 20 key locations. Your observations help us 
            understand flooding risks and drainage patterns.
          </p>
          <div className="bg-white p-4 rounded border border-blue-100">
            <h4 className="font-semibold text-blue-800 mb-2">What to observe:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Erosion patterns and soil movement</li>
              <li>Sediment deposits and accumulation</li>
              <li>Water staining and flow evidence</li>
              <li>Areas where water pools or collects</li>
              <li>Active water flow during or after rainfall</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h4 className="text-lg font-semibold mb-2 text-green-900">
            Future Monitoring Programs
          </h4>
          <p className="text-gray-600 text-sm">
            As our monitoring community grows, we&apos;ll expand to include observations of aquatic 
            invertebrates, water quality indicators, turbidity measurements, and other ecological 
            parameters. Stay tuned for updates!
          </p>
        </div>
      </main>
    </div>
  );
}
