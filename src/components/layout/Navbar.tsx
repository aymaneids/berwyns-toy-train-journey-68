
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Explore', path: '/explore' },
    { name: 'Contact', path: '/contact' },
    { name: 'Find Us', path: '/find-us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out",
        scrolled ? "bg-cream/95 shadow-md backdrop-blur-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 z-50"
            aria-label="Cell-Toys Collectibles"
          >
            <Gamepad2 className="h-8 w-8 text-purple-600" />
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-gray-800">Cell-Toys</span>
              <span className="text-xs text-gray-700 -mt-1">Collectibles</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                  isActive(item.path)
                    ? "text-purple-600"
                    : "text-gray-800 hover:text-purple-600"
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-bottom-right transition-transform duration-300 ease-out",
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>

          {/* Mobile Navigation Menu */}
          <div
            className={cn(
              "fixed inset-0 bg-cream bg-paper-texture flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div className="flex flex-col space-y-4 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-5 py-3 text-lg font-medium transition-colors",
                    isActive(item.path)
                      ? "text-purple-600"
                      : "text-gray-800 hover:text-purple-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
