import { useState } from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);

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

  const testimoniesPerPage = 3;
  const totalTestimonyPages = Math.ceil(testimonials.length / testimoniesPerPage);
  const currentTestimonies = testimonials.slice(testimonyIndex * testimoniesPerPage, (testimonyIndex + 1) * testimoniesPerPage);

  const cardColors = ['bg-green-100', 'bg-pink-100', 'bg-blue-100'];

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[4rem] font-bold text-black mb-4">JOIN A GROWING COMMUNITY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-3xl font-semibold items-start">
          {currentTestimonies.map((testimonial, index) => (
            <div key={index} className={`${cardColors[index % 3]} p-8 rounded-xl shadow-lg h-auto`}>
                  <p className="text-black mb-6 italic">&quot;{testimonial.testimony}&quot;</p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-black text-black" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.occupation}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalTestimonyPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonyIndex(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === testimonyIndex ? 'bg-black w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
