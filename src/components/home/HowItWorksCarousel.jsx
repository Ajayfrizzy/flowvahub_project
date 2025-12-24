import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export const HowItWorksCarousel = () => {
  const [howItWorksIndex, setHowItWorksIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Sign up & Connect',
      description: 'Set up your workspace in minutes'
    },
    {
      number: 2,
      title: 'Organize & Track',
      description: 'Add your tools, subscriptions, and stacks.'
    },
    {
      number: 3,
      title: 'Earn & Enjoy',
      description: 'Check in, try new tools, and watch as your coins grow.'
    }
  ];

  // Auto-play effect for How It Works carousel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setHowItWorksIndex((prev) => (prev + 1) % howItWorksSteps.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying, howItWorksSteps.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SIMPLE, REWARDING, CALM</h2>
        </div>

        <div className="flex gap-4 items-stretch mb-8">
          {howItWorksSteps.map((step, index) => {
            const isActive = index === howItWorksIndex;
            return (
              <div
                key={step.number}
                onClick={() => {
                  setHowItWorksIndex(index);
                  setIsPlaying(false); // Pause when manually clicking
                }}
                className={`cursor-pointer transition-all duration-300 rounded-2xl p-8 ${
                  isActive 
                    ? 'flex-[2] bg-indigo-600 text-white shadow-xl' 
                    : 'flex-1 bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6 ${
                  isActive ? 'bg-white text-indigo-600' : 'bg-white/50 text-gray-900'
                }`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                {isActive && <p className="text-white/90">{step.description}</p>}
              </div>
            );
          })}
        </div>

        {/* Dots Navigation with Play/Pause */}
        <div className="flex justify-center items-center gap-6">
          {/* Dots */}
          <div className="flex gap-3">
            {howItWorksSteps.map((_, index) => {
              const isActive = index === howItWorksIndex;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setHowItWorksIndex(index);
                    setIsPlaying(false); // Pause when manually clicking dot
                  }}
                  className={`transition-all duration-300 ${
                    isActive 
                      ? 'bg-white border-2 border-gray-800 w-8 h-3 rounded-full' 
                      : 'bg-gray-800 w-3 h-3 rounded-full hover:bg-gray-600'
                  }`}
                />
              );
            })}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
};
