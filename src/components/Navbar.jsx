import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navItems = [
    {
      name: 'Hub',
      links: [
        { name: 'DISCOVER', path: '/discover' },
        { name: 'LIBRARY', path: '/library' },
        { name: 'REWARD', path: '/rewards' }
      ]
    },
    {
      name: 'Company',
      links: []
    },
    {
      name: 'Support',
      links: [
        { name: 'FAQS', path: '/faqs' },
        { name: 'CONTACT-US', path: '/contact-us' }
      ]
    },
    {
      name: 'Community',
      links: [
        { name: 'AFFILIATE', path: '/affiliate' },
        { name: 'INFLUENCER', path: '/influencer' },
        { name: 'REFER TO EARN', path: '/refer' }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Flowva
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                  
                  {item.links.length > 0 && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[180px] border border-gray-100">
                      {item.links.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={20} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
