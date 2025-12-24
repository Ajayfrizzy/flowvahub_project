import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2 } from 'lucide-react';

export const HeroSection = ({ activeTab, setActiveTab }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-8 bg-gray-100 rounded-full p-5">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                activeTab === 'users'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black'
              }`}
            >
              <Users size={20} />
              For users
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                activeTab === 'brands'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black'
              }`}
            >
              <Building2 size={20} />
              For brands
            </button>
          </div>

          {/* Content for Users */}
          {activeTab === 'users' && (
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                YOUR SMART SPACE TO<br />
                MANAGE YOUR DIGITAL LIFE<br />
                AND BE REWARDED
              </h1>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-colors mb-12"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Start Earning Today
              </Link>

              {/* Moving Images Placeholder */}
              <div className="my-12 space-y-4 overflow-hidden">
                <div className="flex gap-4 animate-scroll-left">
                  {[...Array(20)].map((_, i) => (
                    <div key={`left-${i}`} className="shrink-0 w-24 h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">Tool {i + 1}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[...Array(20)].map((_, i) => (
                    <div key={`left-dup-${i}`} className="shrink-0 w-24 h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold">Tool {i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 animate-scroll-right">
                  {[...Array(20)].map((_, i) => (
                    <div key={`right-${i}`} className="shrink-0 w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">Tool {i + 21}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[...Array(20)].map((_, i) => (
                    <div key={`right-dup-${i}`} className="shrink-0 w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">Tool {i + 21}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-black max-w-3xl mx-auto">
                Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
              </p>
            </div>
          )}

          {/* Content for Brands */}
          {activeTab === 'brands' && (
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">TECH</span><br />
                PROFESSIONALS WHO ACTUALLY ENGAGE
              </h1>

              {/* Powered by Brand Marketing text */}
              <p className="text-xs text-gray-400 mb-8">Powered By Organic Brand Marketing</p>

              {/* Brand Logos */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-40 h-24 flex items-center justify-center border border-gray-100">
                  <span className="text-3xl font-bold" style={{ color: '#00B87C' }}>Brevo</span>
                </div>
                <div className="bg-orange-500 rounded-2xl shadow-lg p-6 w-40 h-24 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Jotform</span>
                </div>
                <div className="bg-indigo-600 rounded-2xl shadow-lg p-6 w-40 h-24 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">monday</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-6 mb-16">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">f</div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">📷</div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">P</div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">in</div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">W</div>
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">📌</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
