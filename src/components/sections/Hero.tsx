
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-planero-cream to-white pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-balance">
            Plan your perfect event with the right vendors
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 animate-fade-in delay-100 text-balance">
            Connect with top-rated vendors, explore unique venues, and manage all aspects of your event in one easy-to-use platform.
          </p>
          
          <div className="mb-10 animate-fade-in delay-150">
            <SearchBar />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
            <Link to="/get-started" className="btn-primary text-center">
              Start Planning
            </Link>
            <Link to="/vendor-signup" className="btn-secondary text-center">
              Join as Vendor
            </Link>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-xl animate-scale-in delay-300">
          <img 
            src="/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png" 
            alt="Event planning" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
