export const HowItWorksBrandsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          HOW IT WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Subscribe Card */}
          <div className="bg-orange-500 rounded-3xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">
              <span className="text-sm font-bold text-orange-500">Step 1</span>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Subscribe
              </h3>
              <p className="text-orange-100 text-sm mb-8">
                Choose your plan and get started in minutes.<br />
                No complicated setup required.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">✅</div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">📝</div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl">🚀</div>
              </div>
            </div>
          </div>

          {/* Launch Features Card */}
          <div className="bg-purple-600 rounded-3xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">
              <span className="text-sm font-bold text-purple-600">Step 2</span>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Launch Features
              </h3>
              <p className="text-purple-100 text-sm mb-8">
                Create compelling campaigns that showcase<br />
                your brand's unique value.
              </p>
              <div className="text-7xl">🚀</div>
            </div>
          </div>

          {/* Engage Users Card */}
          <div className="bg-pink-500 rounded-3xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">
              <span className="text-sm font-bold text-pink-500">Step 3</span>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Engage Users
              </h3>
              <p className="text-pink-100 text-sm mb-8">
                Connect with an active community that's<br />
                genuinely interested in your product.
              </p>
              <div className="text-7xl">📢</div>
            </div>
          </div>

          {/* Track Results Card */}
          <div className="bg-green-600 rounded-3xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">
              <span className="text-sm font-bold text-green-600">Step 4</span>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Track Results
              </h3>
              <p className="text-green-100 text-sm mb-8">
                Monitor performance with detailed analytics<br />
                and optimize your campaigns in real-time.
              </p>
              <div className="text-7xl">📊</div>
            </div>
          </div>
        </div>

        {/* Optional Premium Support */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="bg-teal-600 rounded-3xl p-10 text-left relative overflow-hidden">
            <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1">
              <span className="text-sm font-bold text-teal-600">Step 5</span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-6 mt-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Optional Premium Support
                </h3>
                <p className="text-teal-100 text-sm">
                  Get dedicated assistance from our expert team to maximize your campaign success.
                </p>
              </div>
              <div className="text-6xl">👥</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
