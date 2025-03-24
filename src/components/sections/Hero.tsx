
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Array of beautiful Indian wedding and event images for the slideshow
const slideImages = [
  "https://images.unsplash.com/photo-1619370823779-c81d4877ad47?w=1920&auto=format&fit=crop&q=80", // Indian wedding
  "https://images.unsplash.com/photo-1604604874768-071e1300a54c?w=1920&auto=format&fit=crop&q=80", // Indian venue
  "https://images.unsplash.com/photo-1592861611647-9ce8b5d49be5?w=1920&auto=format&fit=crop&q=80", // Indian celebration
  "https://images.unsplash.com/photo-1562246230-5d3954e5c2fc?w=1920&auto=format&fit=crop&q=80", // Mumbai cityscape
  "https://images.unsplash.com/photo-1616991936325-2f493068b423?w=1920&auto=format&fit=crop&q=80"  // Indian bride
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
    <section className="relative overflow-hidden h-screen pt-16"> {/* Added pt-16 to prevent overlap with header */}
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
        
        {/* Overlay gradient - Made it darker for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-balance text-white text-shadow-lg">
            Plan your perfect Indian event with the right vendors in Mumbai
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 animate-fade-in delay-100 text-balance">
            Connect with top-rated Mumbai vendors, explore unique venues, and manage all aspects of your event in one easy-to-use platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-200">
            <Link to="/event" className="btn-primary text-center">
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
