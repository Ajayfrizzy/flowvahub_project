import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, ChevronDown, Compass, BookOpen, Gift, HelpCircle, Mail, Users, TrendingUp, Link as LinkIcon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-black">
              Flowva
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">{navItems.map((item) => (
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
                                className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-xl hover:bg-gray-50 transition-all group min-w-[180px]"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                              >
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

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
                >
                  <LayoutDashboard size={20} />
                  <span className="hidden lg:inline">Dashboard</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={20} />
                  <span className="hidden lg:inline">Sign Out</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-black transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-black text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.links.length > 0 && (
                    <>
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.name}
                            to={link.path}
                            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                          >
                            <Icon size={20} />
                            <span className="font-medium">{link.name}</span>
                          </Link>
                        );
                      })}
                    </>
                  )}
                </div>
              ))}

              {/* Divider */}
              <div className="border-t border-gray-200 my-2"></div>

              {/* Auth Buttons */}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LayoutDashboard size={20} />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left w-full"
                  >
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center justify-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
