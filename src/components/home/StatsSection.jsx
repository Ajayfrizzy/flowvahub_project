export const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Users Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left h-90 space-y-12">
            <div className="text-4xl font-bold text-black">10,000+</div>
            <div className="text-black font-semibold text-lg">Users</div>
            <div className="text-sm text-black leading-relaxed">
              Already simplifying their workflow with Flowva
            </div>
            {/* Circular Images Placeholder */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white -ml-2"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white -ml-2"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white -ml-2"></div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left h-90 space-y-12">
            <div className="text-4xl font-bold text-black">200+</div>
            <div className="text-black font-semibold text-lg">Tools</div>
            <div className="text-sm text-black leading-relaxed">
              Curated and organized for you in the library
            </div>
            {/* Square Images with Rounded Corners */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gray-800"></div>
              <div className="w-8 h-8 rounded-md bg-gray-700"></div>
              <div className="w-8 h-8 rounded-md bg-gray-600"></div>
              <div className="w-8 h-8 rounded-md bg-gray-500"></div>
              <div className="w-8 h-8 rounded-md bg-gray-400"></div>
              <span className="text-xs text-black ml-1">and many more</span>
            </div>
          </div>

          {/* Countries Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left h-90 space-y-12">
            <div className="text-4xl font-bold text-black">25+</div>
            <div className="text-black font-semibold text-lg">Countries</div>
            <div className="text-sm text-black leading-relaxed">
              Reviewing tools and building smarter stacks every day
            </div>
            {/* Flag-like Images */}
            <div className="flex items-center gap-1">
              <div className="w-10 h-6 rounded bg-gray-800"></div>
              <div className="w-10 h-6 rounded bg-gray-600"></div>
              <div className="w-10 h-6 rounded bg-gray-500"></div>
              <div className="w-10 h-6 rounded bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
