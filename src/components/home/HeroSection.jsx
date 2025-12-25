import { Link } from 'react-router-dom';
import { Users, Building2, ArrowUpRight } from 'lucide-react';

export const HeroSection = ({ activeTab, setActiveTab }) => {
  const cards = [
    {
      id: 1,
      emoji: '🎯',
      title: 'Targeted Reach',
      description: 'Connect with tech-savvy users who matter',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-200'
    },
    {
      id: 2,
      emoji: '📊',
      title: 'Real Analytics',
      description: 'Track every metric that matters to your brand',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      emoji: '🚀',
      title: 'Fast Growth',
      description: 'Scale your brand faster with engaged users',
      color: 'blue',
      gradient: 'from-pink-500 to-pink-200'
    },
    {
      id: 4,
      emoji: '💎',
      title: 'Premium Value',
      description: 'Get more value from every campaign dollar',
      color: 'green',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-6 sm:mb-8 bg-gray-100 rounded-full p-2 sm:p-5">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all cursor-pointer w-full sm:w-auto ${
                activeTab === 'users'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black'
              }`}
            >
              <Users size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">For users</span>
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all cursor-pointer w-full sm:w-auto ${
                activeTab === 'brands'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black'
              }`}
            >
              <Building2 size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">For brands</span>
            </button>
          </div>

          {/* Content for Users */}
          {activeTab === 'users' && (
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-2">
                YOUR SMART SPACE TO<br className="hidden sm:block" />
                MANAGE YOUR DIGITAL LIFE<br className="hidden sm:block" />
                AND BE REWARDED
              </h1>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors mb-8 sm:mb-12"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Start Earning Today
              </Link>

              {/* Moving Images Placeholder */}
              <div className="my-8 sm:my-12 space-y-3 sm:space-y-4 overflow-hidden">
                <div className="flex gap-3 sm:gap-4 animate-scroll-left">
                  {[...Array(20)].map((_, i) => (
                    <div key={`left-${i}`} className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-xs sm:text-sm">Tool {i + 1}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[...Array(20)].map((_, i) => (
                    <div key={`left-dup-${i}`} className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-xs sm:text-sm">Tool {i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4 animate-scroll-right">
                  {[...Array(20)].map((_, i) => (
                    <div key={`right-${i}`} className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-xs sm:text-sm">Tool {i + 21}</span>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[...Array(20)].map((_, i) => (
                    <div key={`right-dup-${i}`} className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-xs sm:text-sm">Tool {i + 21}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto px-4">
                Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
              </p>
            </div>
          )}

          {/* Content for Brands */}
          {activeTab === 'brands' && (
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 leading-tight px-2">
                CONNECT WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">TECH</span><br className="hidden sm:block" />
                PROFESSIONALS WHO ACTUALLY ENGAGE
              </h1>

              {/* Free Trial Button */}
              <button className="bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition duration-200 ease-in-out mb-10 sm:mb-16 cursor-pointer">
                Start Your 3-days Free Trial
              </button>

              {/* Flip Cards Marquee */}
              <div className="w-full overflow-hidden mb-10 sm:mb-16 p-4 sm:p-7">
                <div className="flex gap-4 sm:gap-6 animate-marquee-cards">{/* Original cards */}
                  {cards.map((card, index) => (
                    <div 
                      key={`original-${card.id}`} 
                      className="group perspective w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0"
                    >
                      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                        {/* Front */}
                        <div className={`absolute w-full h-full backface-hidden bg-linear-to-br ${card.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-xl`}>
                          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{card.emoji}</div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                        </div>
                        {/* Back */}
                        <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-${card.color}-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-xl`}>
                          <a 
                            href="#" 
                            className={`inline-flex items-center gap-2 text-${card.color}-600 font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 hover:text-${card.color}-700 border-2 border-${card.color}-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-${card.color}-50 transition-colors`}
                          >
                            Learn More <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
                          </a>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Cards for seamless loop */}
                  {cards.map((card, index) => (
                    <div 
                      key={`duplicate-${card.id}`} 
                      className="group perspective w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0"
                    >
                      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                        {/* Front */}
                        <div className={`absolute w-full h-full backface-hidden bg-linear-to-br ${card.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-xl`}>
                          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{card.emoji}</div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{card.title}</h3>
                        </div>
                        {/* Back */}
                        <div className={`absolute w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-${card.color}-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-xl`}>
                          <a 
                            href="#" 
                            className={`inline-flex items-center gap-2 text-${card.color}-600 font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 hover:text-${card.color}-700 border-2 border-${card.color}-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full hover:bg-${card.color}-50 transition-colors`}
                          >
                            Learn More <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
                          </a>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trusted Brands Section */}
              <div className="max-w-6xl mx-auto text-center px-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
                  Trusted by 20+ forward-thinking brands
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
                  Join companies already reaching 10,000+ remote workers and freelancers actively discovering and organizing their digital tools
                </p>

                {/* Brand Logos */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                  {/* Brand 1 - Slack */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">#</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Slack</span>
                  </div>

                  {/* Brand 2 - Notion */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-black to-gray-800 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">N</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Notion</span>
                  </div>

                  {/* Brand 3 - Trello */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">T</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Trello</span>
                  </div>

                  {/* Brand 4 - Asana */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">A</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Asana</span>
                  </div>

                  {/* Brand 5 - Zoom */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">Z</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Zoom</span>
                  </div>

                  {/* Brand 6 - Figma */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-white">F</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
