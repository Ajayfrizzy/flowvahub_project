import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { question: "What is Flowvahub?", answer: "Your answer here" },
    { question: "Is my data secure with Flowva?", answer: "Your answer here" },
    { question: "How does team collaboration work?", answer: "Your answer here" },
    { question: "How do Smart Tool Recommendations work?", answer: "Your answer here" },
    { question: "Can I cancel my subscription anytime?", answer: "Your answer here" },
    { question: "Can I manage all my subscriptions in one place?", answer: "Your answer here" },
    { question: "Do you offer mobile apps?", answer: "Your answer here" },
    { question: "What if I need help getting started?", answer: "Your answer here" },
    { question: "Can I connect with other tech professionals on Flowva?", answer: "Your answer here" },
    { question: "What rewards can I earn with Flowva?", answer: "Your answer here" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">NEED ANSWERS?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
