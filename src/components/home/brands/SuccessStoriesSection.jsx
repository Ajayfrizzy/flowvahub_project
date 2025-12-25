export const SuccessStoriesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-5">
          Success Stories
        </h2>
        <h3 className="text-2xl font-semibold text-center text-gray-400 mb-12">Tools That Found Their Audience with Flowva</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Story 1 - Cyan */}
          <div className="bg-cyan-500 rounded-3xl p-8">
            <p className="text-gray-800 text-3xl mb-4 font-semibold">
              Flowva gave us true control of our data and streamlined our entire process.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">@markustech</span>
            </div>
          </div>

          {/* Story 2 - Yellow */}
          <div className="bg-yellow-500 rounded-3xl p-8">
            <p className="text-3xl mb-4 font-semibold">
              We were able to increase our user base by 300% within three months.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">@sarahstartup</span>
            </div>
          </div>

          {/* Story 3 - Teal */}
          <div className="bg-teal-500 rounded-3xl p-8">
            <p className="text-3xl mb-4 font-semibold">
              I love how it kept us relevant with our target market.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold">@alexbrands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
