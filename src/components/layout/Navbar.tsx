
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User, MapPin } from 'lucide-react';
import SearchDialog from '@/components/ui/SearchDialog';
import { useLocation } from '@/contexts/LocationContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { currentLocation, setCurrentLocation, cities } = useLocation();

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
      isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white/80 backdrop-blur-md py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-planero-black">
            PlanEro
          </Link>

          {/* Location Selector */}
          <div className="hidden md:flex items-center ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 bg-white">
                  <MapPin size={16} />
                  <span>{currentLocation}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40 bg-white">
                {cities.map((city) => (
                  <DropdownMenuItem 
                    key={city} 
                    className={`cursor-pointer ${city === currentLocation ? 'bg-planero-light-gray' : ''}`}
                    onClick={() => setCurrentLocation(city)}
                  >
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

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
            <button 
              className="text-planero-black hover:text-planero-pink transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
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
          <div className="md:hidden flex items-center">
            {/* Mobile Location Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="mr-2 flex items-center gap-1 bg-white">
                  <MapPin size={14} />
                  <span className="text-sm">{currentLocation}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 bg-white">
                {cities.map((city) => (
                  <DropdownMenuItem 
                    key={city} 
                    className={`cursor-pointer ${city === currentLocation ? 'bg-planero-light-gray' : ''}`}
                    onClick={() => setCurrentLocation(city)}
                  >
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button 
              className="text-planero-black" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              <button 
                className="text-planero-black hover:text-planero-pink transition-colors"
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
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

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} setOpen={setIsSearchOpen} />
    </header>
  );
};

export default Navbar;
