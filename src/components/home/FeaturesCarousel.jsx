import { useState } from 'react';
import { Smartphone, Globe, Gift } from 'lucide-react';

export const FeaturesCarousel = () => {
  const [featuresIndex, setFeaturesIndex] = useState(0);

  const features = [
    {
      icon: <Smartphone className="text-indigo-600" size={48} />,
      title: 'Organize your tools',
      description: 'Keep your apps, subscriptions, and tech stack in one simple space.'
    },
    {
      icon: <Globe className="text-indigo-600" size={48} />,
      title: 'Discover what works',
      description: 'Find new tools tailored to your workflow, curated for freelancers and remote workers.'
    },
    {
      icon: <Gift className="text-indigo-600" size={48} />,
      title: 'Get Rewarded',
      description: 'Earn perks, gift cards and cashback just for staying productive.'
    }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">EVERYTHING IN ONE PLACE</h2>
        </div>
        
        <div className="relative h-[550px] flex items-center justify-center mx-12 mb-16" style={{ perspective: '2000px' }}>
          <div className="relative w-full flex items-center justify-center">
            {features.map((feature, index) => {
              const position = index - featuresIndex;
              const isActive = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;
              const isVisible = Math.abs(position) <= 1;
              
              return (
                <div
                  key={index}
                  onClick={() => setFeaturesIndex(index)}
                  className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
                    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transform: isActive
                      ? 'translateX(0) translateZ(0px) scale(1.1)'
                      : isLeft
                      ? 'translateX(-95%) translateZ(-100px) scale(0.85)'
                      : isRight
                      ? 'translateX(95%) translateZ(-100px) scale(0.85)'
                      : 'translateX(0) scale(0.7)',
                    zIndex: isActive ? 40 : 20,
                    transformStyle: 'preserve-3d',
                    filter: isActive ? 'brightness(1)' : 'brightness(0.9)'
                  }}
                >
                  <div
                    className={`bg-white rounded-3xl transition-all duration-700 ${
                      isActive 
                        ? 'w-[420px] h-[480px] p-8 shadow-2xl' 
                        : 'w-[380px] h-[450px] p-6 shadow-xl opacity-80'
                    }`}
                  >
                    {/* Icon/Image Section */}
                    <div className={`flex justify-center items-center mb-6 transition-all ${
                      isActive ? 'h-56' : 'h-48'
                    }`}>
                      <div className="relative">
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 flex justify-center items-center">
                          <div className={`rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 transition-all ${
                            isActive ? 'w-48 h-48' : 'w-40 h-40'
                          }`}></div>
                        </div>
                        {/* Main Icon */}
                        <div className="relative z-10 flex justify-center items-center">
                          <div className={`transition-all ${isActive ? 'scale-125' : 'scale-100'}`}>
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Text Section */}
                    <div className="text-center">
                      <h3 className={`font-bold mb-3 transition-all ${
                        isActive ? 'text-2xl' : 'text-xl'
                      }`}>{feature.title}</h3>
                      <p className={`text-gray-600 transition-all ${
                        isActive ? 'text-base leading-relaxed' : 'text-sm'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setFeaturesIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === featuresIndex ? 'bg-indigo-600 w-10 h-3' : 'bg-gray-400 w-3 h-3 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
