export const StatsSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Users Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left h-64">
            <div className="text-4xl font-bold text-indigo-600 mb-3">10,000+</div>
            <div className="text-gray-900 font-semibold text-lg mb-3">Users</div>
            <div className="text-sm text-gray-500 mb-4 leading-relaxed">
              Already simplifying their workflow with Flowva
            </div>
            {/* Circular Images Placeholder */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-red-400 border-2 border-white -ml-2"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white -ml-2"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white -ml-2"></div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left h-64">
            <div className="text-4xl font-bold text-indigo-600 mb-3">200+</div>
            <div className="text-gray-900 font-semibold text-lg mb-3">Tools</div>
            <div className="text-sm text-gray-500 mb-4 leading-relaxed">
              Curated and organized for you in the library
            </div>
            {/* Square Images with Rounded Corners */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-400 to-purple-400"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-pink-400 to-red-400"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-400 to-cyan-400"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-green-400 to-emerald-400"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-yellow-400 to-orange-400"></div>
              <span className="text-xs text-gray-500 ml-1">and many more</span>
            </div>
          </div>

          {/* Countries Card */}
          <div className="bg-white p-8 rounded-xl shadow-md text-left h-64">
            <div className="text-4xl font-bold text-indigo-600 mb-3">25+</div>
            <div className="text-gray-900 font-semibold text-lg mb-3">Countries</div>
            <div className="text-sm text-gray-500 mb-4 leading-relaxed">
              Reviewing tools and building smarter stacks every day
            </div>
            {/* Flag-like Images */}
            <div className="flex items-center gap-1">
              <div className="w-10 h-6 rounded bg-gradient-to-r from-red-500 to-white"></div>
              <div className="w-10 h-6 rounded bg-gradient-to-r from-blue-500 to-yellow-400"></div>
              <div className="w-10 h-6 rounded bg-gradient-to-r from-green-500 to-white"></div>
              <div className="w-10 h-6 rounded bg-gradient-to-r from-purple-500 to-pink-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
