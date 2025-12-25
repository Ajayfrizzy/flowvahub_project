export const WhySubscribeSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          WHY SUBSCRIBE TO FLOWVA?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {/* Trusted by Leading Products */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-black mb-6 leading-tight">
              TRUSTED BY LEADING PRODUCTS WITH ORGANIC MARKETING SUCCESS
            </h3>
          </div>

          {/* Purple and Pink Cards*/}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="bg-purple-500 rounded-3xl p-6 sm:p-8 text-left">
              <div className="text-3xl sm:text-4xl mb-4">💎</div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Premium Value</h4>
              <p className="text-purple-100 text-xs sm:text-sm">
                Access exclusive features and rewards
              </p>
            </div>
            <div className="bg-pink-500 rounded-3xl p-6 sm:p-8 text-left">
              <div className="text-3xl sm:text-4xl mb-4">🎁</div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-2">Special Offers</h4>
              <p className="text-pink-100 text-xs sm:text-sm">
                Get amazing deals and discounts
              </p>
            </div>
          </div>
        </div>

        {/* Four Cards Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {/* Orange Card */}
          <div className="bg-orange-500 rounded-3xl p-10 text-left">
            <div className="text-5xl mb-4">📱</div>
            <h4 className="text-xl font-bold text-white mb-3">
              All-in-one platform
            </h4>
            <p className="text-orange-100 text-sm">
              Manage everything from a single dashboard
            </p>
          </div>

          {/* Blue Card */}
          <div className="bg-blue-500 rounded-3xl p-10 text-left">
            <div className="text-5xl mb-4">🌐</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Global Reach
            </h4>
            <p className="text-blue-100 text-sm">
              Connect with audiences worldwide
            </p>
          </div>

          {/* Pink Card */}
          <div className="bg-pink-500 rounded-3xl p-10 text-left">
            <div className="text-5xl mb-4">💖</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Authentic Engagement
            </h4>
            <p className="text-pink-100 text-sm">
              Build real connections with your audience
            </p>
          </div>

          {/* Green Card */}
          <div className="bg-green-500 rounded-3xl p-10 text-left">
            <div className="text-5xl mb-4">📊</div>
            <h4 className="text-xl font-bold text-white mb-3">
              Data-Driven Insights
            </h4>
            <p className="text-green-100 text-sm">
              Make informed decisions with analytics
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="space-y-5">
            <div className="text-5xl font-bold text-black mb-2">1200+</div>
            <div className="border-b-2 border-gray-200 py-4"></div>
            <p className="text-gray-600 text-sm">Active Brands</p>
          </div>
          <div className="space-y-5">
            <div className="text-5xl font-bold text-black mb-2">35M+</div>
            <div className="border-b-2 border-gray-200 py-4"></div>
            <p className="text-gray-600 text-sm">Monthly Impressions</p>
          </div>
          <div className="space-y-5">
            <div className="text-5xl font-bold text-black mb-2">4200+</div>
            <div className="border-b-2 border-gray-200 py-4"></div>
            <p className="text-gray-600 text-sm">Successful Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};
