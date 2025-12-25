import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center bg-gray-800 p-8 sm:p-12 md:p-15 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto rounded-b-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-4 border border-purple-400 rounded-2xl">
            <div className="flex flex-col sm:flex-row gap-2 p-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 hover:bg-black hover:text-white flex items-center justify-center gap-2 rounded-full transition ease-in-out cursor-pointer whitespace-nowrap"
              >
                Submit
                <Send size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </form>
          <p className="text-gray-400 text-xs sm:text-sm">
            10,000+ end their week inspired. Join Friday Flow.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center md:text-left">
            {/* Logo */}
            <div className='space-y-4 sm:space-y-6 col-span-2 md:col-span-3 lg:col-span-1'>
              <h3 className="text-xl sm:text-2xl font-bold">Flowva</h3>
              <p className="text-gray-400 max-w-xs mx-auto md:mx-0 text-sm">
                The smart way to manage your digital life and get rewarded
              </p>
            <p className="text-gray-500 text-xs sm:text-sm">© 2025 Flowva</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Hub</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/discover" className="hover:text-white transition-colors">Discover</Link></li>
                <li><Link to="/library" className="hover:text-white transition-colors">Library</Link></li>
                <li><Link to="/rewards" className="hover:text-white transition-colors">Rewards</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="https://www.flowvahub.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Community</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/affiliate" className="hover:text-white transition-colors">Affiliate</Link></li>
                <li><Link to="/influencer" className="hover:text-white transition-colors">Influencer</Link></li>
                <li><Link to="/referral" className="hover:text-white transition-colors">Referral</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
                <li><a href="https://docs.google.com/document/d/12S_rqEERUuq_NrS2WKoG7pt_pAQqy9Q37BLxGOTMKQs/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="https://www.facebook.com/share/1DKr8atT1i/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Facebook size={20} className="sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a href="https://x.com/FlowvaHub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Twitter size={20} className="sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">X (formerly twitter)</span>
            </a>
            <a href="https://www.instagram.com/flowvahub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Instagram size={20} className="sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/flowva/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://www.tiktok.com/@flowva.hub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="hidden sm:inline">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
