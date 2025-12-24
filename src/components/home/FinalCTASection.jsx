import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            STAY PRODUCTIVE.<br />
            GET REWARDED.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Turn your tools, subscriptions, and daily habits into<br />
            rewards all in one calm space
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Unlock Rewards Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
