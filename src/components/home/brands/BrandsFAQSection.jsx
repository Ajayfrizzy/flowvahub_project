import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const BrandsFAQSection = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const faqs = [
    {
      question: "How quickly can I start with Flowva?",
      answer: "You can get started immediately after signing up. Our onboarding process takes less than 5 minutes, and you can launch your first campaign right away."
    },
    {
      question: "How does the subscription work?",
      answer: "Choose from our flexible monthly plans - Basic, Pro, or Enterprise. You can upgrade, downgrade, or cancel at any time. No long-term commitments required."
    },
    {
      question: "Can I get a demo first?",
      answer: "Absolutely! Contact our team to schedule a personalized demo. We'll walk you through the platform and answer all your questions."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll retain access until the end of your current billing period."
    },
    {
      question: "Can I target specific types of users?",
      answer: "Yes! Our advanced targeting allows you to reach specific user segments based on interests, behavior, location, and tool preferences."
    },
    {
      question: "What is optional premium support?",
      answer: "Premium support includes dedicated account management, priority response times, strategic consultation, and custom campaign optimization."
    }
  ];

  const toggleFaq = (index) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter(i => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
          NEED ANSWERS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 cursor-pointer transition-all"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-start gap-3">
                {openFaqs.includes(index) ? (
                  <ChevronDown size={20} className="text-black mt-1 shrink-0" />
                ) : (
                  <ChevronRight size={20} className="text-black mt-1 shrink-0" />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-black mb-2">{faq.question}</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqs.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
