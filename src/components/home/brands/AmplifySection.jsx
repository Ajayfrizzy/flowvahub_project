export const AmplifySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
          AMPLIFY YOUR BRAND'S SUCCESS
        </h2>

        {/* Feature Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card 1 - Light Pink */}
          <div className="bg-pink-50 rounded-3xl p-10 text-left relative overflow-hidden min-h-[280px]">
            <h3 className="text-xl font-bold text-black mb-4 leading-snug">
              Engage an active<br />
              community of tech<br />
              enthusiasts
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Connect with users who are actively<br />
              discovering and engaging with tools<br />
              every single day.
            </p>
            <div className="absolute bottom-8 right-8">
              <div className="text-7xl">🎯</div>
            </div>
          </div>

          {/* Card 2 - Purple */}
          <div className="bg-purple-500 rounded-3xl p-10 text-left relative overflow-hidden min-h-[280px]">
            <h3 className="text-xl font-bold text-white mb-4">
              Offer Exclusive Value
            </h3>
            <p className="text-purple-100 text-sm mb-8 leading-relaxed">
              Stand out with special discounts, exclusive<br />
              access to premium features, and limited-<br />
              time offers.
            </p>
            <div className="flex gap-3">
              <div className="w-14 h-14 bg-purple-400 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
              <div className="w-14 h-14 bg-green-400 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎁</span>
              </div>
              <div className="w-14 h-14 bg-blue-400 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">💎</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Yellow */}
          <div className="bg-yellow-100 rounded-3xl p-10 text-left relative overflow-hidden min-h-[280px]">
            <div className="absolute top-5 right-5 bg-yellow-300 px-5 py-2 rounded-full">
              <span className="text-sm font-bold text-black">BOOST</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">
              Boost Your Visibility
            </h3>
            <p className="text-gray-700 text-sm mb-8 leading-relaxed">
              Get featured across our platform to thousands<br />
              of users. Elevate your brand through strategic<br />
              placements and more.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-xl">📊</div>
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-xl">📈</div>
              <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-xl">⭐</div>
            </div>
          </div>

          {/* Card 4 - Black */}
          <div className="bg-black rounded-3xl p-10 text-left relative overflow-hidden min-h-[280px]">
            <h3 className="text-xl font-bold text-white mb-4">
              Measure Your Impact
            </h3>
            <p className="text-gray-300 text-sm mb-10 leading-relaxed">
              Track real results with comprehensive<br />
              analytics. See exactly how your brand<br />
              performs and grows.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-5xl font-bold text-white mb-1">30,000+</div>
                <p className="text-gray-400 text-xs">monthly active users</p>
              </div>
              <span className="text-7xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
