import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export const NeedAnswerSection = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (index) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  const faqs = [
    { question: "What is Flowvahub?", answer: "Flowvahub is your productivity sidekick — helping you discover new tools, manage subscriptions, and earn rewards for staying productive." },
    { question: "Is my data secure with Flowva?", answer: "Absolutely. Your data is private and never sold. You decide what to share, and it’s only used to improve your experience." },
    { question: "How does team collaboration work?", answer: "Teams can share recommendations, optimize workflows together, view analytics, and manage shared subscriptions from a single dashboard. (Note: Rewards are not included for Teams.)" },
    { question: "How do Smart Tool Recommendations work?", answer: "The more you use our platform, the better it understands your workflow — giving you smarter, more relevant tool suggestions over time." },
    { question: "Can I cancel my subscription anytime?", answer: "Yes. You can cancel your Pro or Team plan anytime. You’ll keep access until the end of your billing cycle, and you can always downgrade to our Free plan." },
    { question: "Can I manage all my subscriptions in one place?", answer: "Yes! Flowva tracks all your subscriptions in one place — sending renewal alerts, monitoring spending, and helping you save money." },
    { question: "Do you offer mobile apps?", answer: "Yes 😃 Our iOS and Android apps are launching soon, so you can manage subscriptions, get recommendations, earn rewards, and stay connected anywhere." },
    { question: "What if I need help getting started?", answer: "We provide onboarding guides, tutorials, and email support. Pro users get priority support, while Teams and Organizations receive dedicated onboarding and training." },
    { question: "Can I connect with other tech professionals on Flowva?", answer: "Yes! Flowva has an active community of tech enthusiasts, freelancers, and remote professionals. You can connect with others, discuss tools, get feedback, and collaborate with like-minded users, all while discovering new ways to optimize your workflow." },
    { question: "What rewards can I earn with Flowva?", answer: "All users earn basic rewards by using Flowva, with extra perks for Premium. Rewards come from completing simple tasks — trying recommended tools or sharing feedback — and can be redeemed for gift cards, cash, or community perks.”" }
  ];

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">NEED ANSWERS?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center gap-3 p-6 text-left hover:bg-gray-50 transition-all duration-200"
              >
                <span className="transition-transform duration-300">
                  {openFaqs.includes(index) ? (
                    <ChevronDown size={20} className="fill-black" />
                  ) : (
                    <ChevronRight size={20} className="fill-black" />
                  )}
                </span>
                <span className="font-semibold text-black">{faq.question}</span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaqs.includes(index) ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                {openFaqs.includes(index) && (
                  <div className="px-6 pb-6 text-black">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
