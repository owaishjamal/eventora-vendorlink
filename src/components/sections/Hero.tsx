
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Array of beautiful event images for the slideshow
const slideImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&auto=format&fit=crop&q=80"
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
        setNextSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
        setIsTransitioning(false);
      }, 1000); // Match this duration with the CSS transition
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen">
      {/* Slideshow background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Current slide with fade-out animation */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${slideImages[currentSlide]})` }}
        ></div>
        
        {/* Next slide with fade-in animation */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slideImages[nextSlide]})` }}
        ></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-balance text-white text-shadow-lg">
            Plan your perfect event with the right vendors
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-fade-in delay-100 text-balance">
            Connect with top-rated vendors, explore unique venues, and manage all aspects of your event in one easy-to-use platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
            <Link to="/get-started" className="btn-primary text-center">
              Start Planning
            </Link>
            <Link to="/vendor-signup" className="btn-secondary text-center">
              Join as Vendor
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setNextSlide((index + 1) % slideImages.length);
                setIsTransitioning(false);
              }, 1000);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
