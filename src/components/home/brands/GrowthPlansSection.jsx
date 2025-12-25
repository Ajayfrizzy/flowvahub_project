import { Check } from 'lucide-react';

export const GrowthPlansSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          GROWTH PLANS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-5">Basic</div>
              <div className="text-4xl font-bold text-black mb-2">$30/Month</div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold mb-6 hover:bg-blue-500 hover:text-black transition-colors">
              Get Started
            </button>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Perfect for startups testing the waters with brand engagement.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>1 campaign per month</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>Email support</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>Basic targeting</span>
              </li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-purple-600 rounded-3xl p-8 relative transform md:scale-105 shadow-2xl">
            <div className="absolute top-6 right-2 transform -translate-y-1/2">
              <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-3 rounded-bl-2xl rounded-tr-2xl">
                MOST POPULAR
              </span>
            </div>
            <div className="mb-6">
              <div className="text-sm text-purple-200 mb-5">Pro</div>
              <div className="text-4xl font-bold text-white mb-5">$75/Month</div>
            </div>
            <button className="w-full bg-white text-purple-600 py-3 rounded-full font-semibold mb-6 hover:bg-yellow-500 hover:text-black transition-colors">
              Get Started
            </button>
            <p className="text-sm text-purple-100 mb-6 text-center">
              Ideal for growing brands looking to maximize reach and engagement.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white">
                <Check size={18} className="text-yellow-400" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Check size={18} className="text-yellow-400" />
                <span>5 campaigns per month</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Check size={18} className="text-yellow-400" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Check size={18} className="text-yellow-400" />
                <span>Advanced targeting</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Check size={18} className="text-yellow-400" />
                <span>A/B testing</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Check size={18} className="text-yellow-400" />
                <span>Custom branding</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-5">Enterprise</div>
              <div className="text-4xl font-bold text-black mb-2">$150/Month</div>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-full font-semibold mb-6 hover:bg-blue-500 hover:text-black transition-colors">
              Get Started
            </button>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Comprehensive solution for established brands seeking maximum impact.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>Real-time analytics</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>Unlimited campaigns</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>AI-powered targeting</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>White-label options</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-black" />
                <span>API access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
