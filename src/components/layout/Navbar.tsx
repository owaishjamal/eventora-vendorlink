
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-planero-black">
            PlanEro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/vendors" className="text-planero-black hover:text-planero-pink transition-colors link-underline">
              Find Vendors
            </Link>
            <Link to="/venues" className="text-planero-black hover:text-planero-pink transition-colors link-underline">
              Venues
            </Link>
            <Link to="/planning-tools" className="text-planero-black hover:text-planero-pink transition-colors link-underline">
              Planning Tools
            </Link>
            <Link to="/inspirations" className="text-planero-black hover:text-planero-pink transition-colors link-underline">
              Inspirations
            </Link>
            <Link to="/event" className="text-planero-black hover:text-planero-pink transition-colors link-underline">
              Event
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-planero-black hover:text-planero-pink transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-planero-black hover:text-planero-pink transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-planero-pink text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile" className="text-planero-black hover:text-planero-pink transition-colors">
              <User size={20} />
            </Link>
            <Link to="/login" className="btn-secondary">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-planero-black" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/vendors" className="text-planero-black hover:text-planero-pink transition-colors py-2">
              Find Vendors
            </Link>
            <Link to="/venues" className="text-planero-black hover:text-planero-pink transition-colors py-2">
              Venues
            </Link>
            <Link to="/planning-tools" className="text-planero-black hover:text-planero-pink transition-colors py-2">
              Planning Tools
            </Link>
            <Link to="/inspirations" className="text-planero-black hover:text-planero-pink transition-colors py-2">
              Inspirations
            </Link>
            <Link to="/event" className="text-planero-black hover:text-planero-pink transition-colors py-2">
              Event
            </Link>
            <div className="pt-2 flex space-x-4">
              <Link to="/cart" className="text-planero-black hover:text-planero-pink transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-planero-pink text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link to="/profile" className="text-planero-black hover:text-planero-pink transition-colors">
                <User size={20} />
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" className="btn-secondary text-center">
                Log In
              </Link>
              <Link to="/signup" className="btn-primary text-center">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
