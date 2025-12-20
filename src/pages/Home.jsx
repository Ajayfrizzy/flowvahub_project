import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Globe, Gift, CheckCircle } from 'lucide-react';

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-6">
              For users • For brands
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              YOUR SMART SPACE TO<br />
              MANAGE YOUR DIGITAL LIFE<br />
              AND BE REWARDED
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Turn productivity into rewards with a calm, smart space that organizes your tools, and keeps you in control.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Earning Today
              <ArrowRight size={20} />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Users</div>
              <div className="text-sm text-gray-500 mt-2">Already simplifying their workflow with Flowva</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-gray-600">Tools</div>
              <div className="text-sm text-gray-500 mt-2">Curated and organized for you in the library</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
              <div className="text-sm text-gray-500 mt-2">Reviewing tools and building smarter stacks every day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EVERYTHING IN ONE PLACE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Organize your tools</h3>
              <p className="text-gray-600">
                Keep your apps, subscriptions, and tech stack in one simple space.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Discover what works</h3>
              <p className="text-gray-600">
                Find new tools tailored to your workflow, curated for freelancers and remote workers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Rewarded</h3>
              <p className="text-gray-600">
                Earn perks, gift cards and cashback just for staying productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">ORGANIZE, DISCOVER, AND EARN ON THE GO.</h2>
          <p className="text-xl mb-8 opacity-90">Download</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apple App Store
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Google Play Store
              <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded">⌛ Coming soon</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <CheckCircle className="text-green-500 mb-4" size={32} />
              <h3 className="font-semibold mb-2">QUICK DAILY CHECK-INS</h3>
              <p className="text-gray-600 text-sm">Stay on top of your tools with minimal effort</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Globe className="text-indigo-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">DISCOVER TOOLS ANYWHERE</h3>
              <p className="text-gray-600 text-sm">Access curated tools from any device</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Gift className="text-purple-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">NEVER MISS A REWARD</h3>
              <p className="text-gray-600 text-sm">Automatic tracking of your earnings</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold mb-2">SIMPLE, REWARDING, CALM</h3>
              <p className="text-gray-600 text-sm">A peaceful way to manage your digital life</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Sign up & Connect</h3>
              <p className="text-gray-600">Set up your workspace in minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Organize & Track</h3>
              <p className="text-gray-600">Add your tools, subscriptions, and tasks.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Earn & Enjoy</h3>
              <p className="text-gray-600">Get rewarded for your productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already earning rewards for their productivity.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Earning Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};
