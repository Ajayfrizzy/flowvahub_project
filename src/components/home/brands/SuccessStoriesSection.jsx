export const SuccessStoriesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Story 1 - Cyan */}
          <div className="bg-cyan-100 rounded-3xl p-8 text-left">
            <div className="text-4xl mb-4">💼</div>
            <p className="text-gray-800 text-sm mb-4 leading-relaxed">
              "Flowva gave us true control of our data and streamlined our entire process."
            </p>
            <div className="flex items-center gap-2">
              <div className="text-xl">😊</div>
              <span className="text-xs text-gray-600">@markustech</span>
            </div>
          </div>

          {/* Story 2 - Yellow */}
          <div className="bg-yellow-100 rounded-3xl p-8 text-left">
            <div className="text-4xl mb-4">🚀</div>
            <p className="text-gray-800 text-sm mb-4 leading-relaxed">
              "We were able to increase our user base by 300% within three months."
            </p>
            <div className="flex items-center gap-2">
              <div className="text-xl">😊</div>
              <span className="text-xs text-gray-600">@sarahstartup</span>
            </div>
          </div>

          {/* Story 3 - Teal */}
          <div className="bg-teal-100 rounded-3xl p-8 text-left">
            <div className="text-4xl mb-4">🎯</div>
            <p className="text-gray-800 text-sm mb-4 leading-relaxed">
              "I love how it kept us relevant with our target market."
            </p>
            <div className="flex items-center gap-2">
              <div className="text-xl">😊</div>
              <span className="text-xs text-gray-600">@alexbrands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
