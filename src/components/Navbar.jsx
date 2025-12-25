import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, ChevronDown, Compass, BookOpen, Gift, HelpCircle, Mail, Users, TrendingUp, Link as LinkIcon } from 'lucide-react';

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
        { name: 'DISCOVER', path: '/discover', icon: Compass },
        { name: 'LIBRARY', path: '/library', icon: BookOpen },
        { name: 'REWARD', path: '/rewards', icon: Gift }
      ]
    },
    {
      name: 'Company',
      links: []
    },
    {
      name: 'Support',
      links: [
        { name: 'FAQS', path: '/faqs', icon: HelpCircle },
        { name: 'CONTACT-US', path: '/contact-us', icon: Mail }
      ]
    },
    {
      name: 'Community',
      links: [
        { name: 'AFFILIATE', path: '/affiliate', icon: Users },
        { name: 'INFLUENCER', path: '/influencer', icon: TrendingUp },
        { name: 'REFER TO EARN', path: '/refer', icon: LinkIcon }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-black">
              Flowva
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <button 
                    className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors font-medium"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                  
                  {item.links.length > 0 && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                        <div className="flex gap-6">
                          {item.links.map((link) => {
                            const Icon = link.icon;
                            return (
                              <Link
                                key={link.name}
                                to={link.path}
                                className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-xl hover:bg-gray-50 transition-all group min-w-[180px]">
                                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Icon size={28} className="text-white" />
                                </div>
                                <span className="text-base font-semibold text-gray-700 group-hover:text-black transition-colors">
                                  {link.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
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
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
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
