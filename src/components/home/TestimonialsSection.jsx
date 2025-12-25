import { useState, useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      testimony: "Flowvahub is my new sidekick. It keeps my apps in line, my subs in check, and still finds a way to pay me in rewards.",
      rating: 5,
      name: "Ummaratu M.",
      occupation: "Freelancer & Virtual Assistant"
    },
    {
      testimony: "Didn't even realise how much I was drowning in scattered tools until I saw Flowvahub. The idea of getting rewarded just for organizing my stack? That's the kind of motivation I need.",
      rating: 5,
      name: "Adewale O.",
      occupation: "Freelancer & Digital Creator"
    },
    {
      testimony: "The ultimate dashboard for freelancers and techies. Flowvahub is nothing but amazing!",
      rating: 5,
      name: "Lois E.",
      occupation: "Social media manager"
    },
    {
      testimony: "My favorite feature is subscription management — it helps me avoid wasting money and makes sure every penny counts.",
      rating: 5,
      name: "Stella R.",
      occupation: "Trainee at Digital Witch Community"
    },
    {
      testimony: "Flowvahub makes finding tools effortless. Instead of wasting hours jumping between sites, I just open Discover Tools everything's clear, organized, and right there.",
      rating: 5,
      name: "Uchechukwu P.",
      occupation: "Freelancer"
    },
    {
      testimony: "Amazing platform for managing my digital workspace efficiently.",
      rating: 5,
      name: "Sarah K.",
      occupation: "Content Creator"
    },
    {
      testimony: "Best tool discovery platform I've ever used!",
      rating: 5,
      name: "Michael T.",
      occupation: "Software Developer"
    },
    {
      testimony: "Love how easy it is to track all my subscriptions in one place.",
      rating: 5,
      name: "Jessica L.",
      occupation: "Marketing Manager"
    },
    {
      testimony: "The rewards system is genius! Getting paid for productivity is a game changer.",
      rating: 5,
      name: "David R.",
      occupation: "Entrepreneur"
    }
  ];

  const testimoniesPerPage = isMobile ? 1 : 3;
  const totalTestimonyPages = Math.ceil(testimonials.length / testimoniesPerPage);
  const currentTestimonies = testimonials.slice(testimonyIndex * testimoniesPerPage, (testimonyIndex + 1) * testimoniesPerPage);

  const cardColors = ['bg-green-100', 'bg-pink-100', 'bg-blue-100'];

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - next
      if (testimonyIndex < totalTestimonyPages - 1) {
        setTestimonyIndex(testimonyIndex + 1);
      }
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right - previous
      if (testimonyIndex > 0) {
        setTestimonyIndex(testimonyIndex - 1);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] font-bold text-black mb-4">JOIN A GROWING COMMUNITY</h2>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {currentTestimonies.map((testimonial, index) => {
            const colorIndex = isMobile ? testimonyIndex % 3 : index % 3;
            return (
              <div key={index} className={`${cardColors[colorIndex]} p-6 sm:p-8 rounded-xl shadow-lg h-auto`}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black mb-4 sm:mb-6 italic">&quot;{testimonial.testimony}&quot;</p>
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-black text-black" />
                  ))}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.occupation}</p>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {[...Array(totalTestimonyPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonyIndex(index)}
              className={`h-3 rounded-full transition-all cursor-pointer ${
                index === testimonyIndex ? 'bg-black w-8' : 'bg-gray-300 w-3'
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
