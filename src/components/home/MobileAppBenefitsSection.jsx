import { CheckCircle, Globe, Gift } from 'lucide-react';

export const MobileAppBenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mobile App Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">ORGANIZE, DISCOVER, AND EARN ON THE GO.</h2>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-6">
              Download
            </button>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                Apple App Store
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center justify-between">
                Google Play Store
                <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded">⌛ Coming soon</span>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <button className="bg-indigo-100 text-indigo-600 px-6 py-3 rounded-lg font-semibold mb-6">
              Benefits
            </button>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="font-medium text-gray-900">QUICK DAILY CHECK-INS</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                <span className="font-medium text-gray-900">DISCOVER TOOLS ANYWHERE</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                <span className="font-medium text-gray-900">NEVER MISS A REWARD</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
