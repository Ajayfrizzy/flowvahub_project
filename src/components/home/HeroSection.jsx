import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2 } from 'lucide-react';

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tab Navigation */}
          <div className="inline-flex items-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'users'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users size={20} />
              For users
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === 'brands'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Building2 size={20} />
              For brands
            </button>
          </div>

          {/* Content for Users */}
          {activeTab === 'users' && (
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                YOUR SMART SPACE TO<br />
                MANAGE YOUR DIGITAL LIFE<br />
                AND BE REWARDED
              </h1>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors mb-12"
              >
                Start Earning Today
                <ArrowRight size={20} />
              </Link>

              {/* Moving Images Placeholder */}
              <div className="my-12 space-y-4">
                <div className="flex gap-4 animate-scroll-left overflow-hidden">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex-shrink-0 w-24 h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">Tool {i}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 animate-scroll-right overflow-hidden">
                  {[9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
                    <div key={i} className="flex-shrink-0 w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">Tool {i}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
              </p>
            </div>
          )}

          {/* Content for Brands */}
          {activeTab === 'brands' && (
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                GROW YOUR BRAND<br />
                WITH ENGAGED USERS<br />
                WHO LOVE TOOLS
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Connect with thousands of active users discovering and reviewing tools every day. Get featured where decisions are made.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Partner With Us
                <ArrowRight size={20} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
