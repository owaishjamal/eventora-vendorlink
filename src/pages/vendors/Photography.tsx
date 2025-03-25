
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Photography = () => {
  // Mock data for photography vendors
  const photographers = [
    {
      id: "1",
      name: "Elegant Moments Photography",
      category: "Photography",
      rating: 4.9,
      reviews: 156,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Wedding Stories Mumbai",
      category: "Photography",
      rating: 4.8,
      reviews: 134,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Mumbai Memories",
      category: "Photography",
      rating: 4.7,
      reviews: 98,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Candid Captures",
      category: "Photography",
      rating: 4.6,
      reviews: 87,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "Eternal Frames",
      category: "Photography",
      rating: 4.8,
      reviews: 112,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Lens Craft Studio",
      category: "Photography",
      rating: 4.5,
      reviews: 76,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Wedding Photographers in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Capture your special moments with the best wedding photographers in Mumbai. Browse through portfolios, reviews, and pricing.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding photography" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="bg-planero-light-gray p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Why choose a professional wedding photographer?</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Capture once-in-a-lifetime moments with professional expertise</li>
                <li>Experience in handling different lighting conditions and venues</li>
                <li>High-quality equipment and backup gear</li>
                <li>Post-processing skills to enhance your photographs</li>
                <li>Creative direction to showcase your wedding's unique story</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {photographers.map((photographer) => (
              <VendorCard
                key={photographer.id}
                id={photographer.id}
                name={photographer.name}
                category={photographer.category}
                rating={photographer.rating}
                reviews={photographer.reviews}
                priceRange={photographer.priceRange}
                image={photographer.image}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Popular Photography Packages in Mumbai</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Pre-Wedding Shoot</h3>
                <p className="text-gray-600 mb-4">Perfect for engagement announcements and save-the-dates</p>
                <p className="font-semibold">Starting at ₹25,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Full Wedding Coverage</h3>
                <p className="text-gray-600 mb-4">Complete coverage of all ceremonies and events</p>
                <p className="font-semibold">Starting at ₹75,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Cinematic Wedding Film</h3>
                <p className="text-gray-600 mb-4">Stunning highlight videos of your special day</p>
                <p className="font-semibold">Starting at ₹50,000</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">Let us help you find the perfect photographer for your wedding</p>
            <Link to="/event">
              <Button size="lg" className="bg-planero-pink hover:bg-planero-pink-hover">
                Get Personalized Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photography;
