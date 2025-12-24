import { Link } from 'react-router-dom';

export const BrandsCTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          START YOUR CAMPAIGN
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Join thousands of brands that trust Flowva for organic growth
        </p>
        <div className="text-8xl mb-10">🤝</div>
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};
