import { Link } from 'react-router-dom';

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-linear-to-br from-indigo-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black text-white p-12 rounded-3xl text-center shadow-2xl space-y-20">
          <h2 className="text-4xl font-bold leading-normal">
            STAY PRODUCTIVE.<br />
            GET REWARDED.
          </h2>
          <p className="text-xl opacity-90">
            Turn your tools, subscriptions, and daily habits into<br />
            rewards all in one calm space
          </p>
          <Link
            to="/signup"
            className="bg-white text-black px-8 py-4 rounded-full md:text-lg sm:text-sm font-semibold hover:bg-pink-300 hover:text-white transition-colors">
            Unlock Rewards Now
          </Link>
        </div>
      </div>
    </section>
  );
};
