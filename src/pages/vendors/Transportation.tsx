
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Transportation = () => {
  // Mock data for transportation vendors
  const transportVendors = [
    {
      id: "1",
      name: "Luxury Rides Mumbai",
      category: "Luxury Cars",
      rating: 4.8,
      reviews: 86,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Royal Carriages",
      category: "Horse Carriages",
      rating: 4.9,
      reviews: 78,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Vintage Auto Collection",
      category: "Vintage Cars",
      rating: 4.7,
      reviews: 62,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Elite Fleet Services",
      category: "Wedding Fleet",
      rating: 4.6,
      reviews: 54,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1609520505218-7421df70a7f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "Decorated Tuk-Tuks",
      category: "Themed Transport",
      rating: 4.8,
      reviews: 46,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1578153251647-297dec045ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Guest Shuttle Service",
      category: "Guest Transportation",
      rating: 4.5,
      reviews: 72,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Wedding Transportation in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Arrive in style with the finest wedding transportation options in Mumbai for you and your guests.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding car" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="bg-planero-light-gray p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Transportation Options for Your Wedding</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">For the Bride & Groom</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Luxury sedans</li>
                    <li>Vintage cars</li>
                    <li>Decorated carriages</li>
                    <li>Limousines</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">For the Family</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Premium SUVs</li>
                    <li>Luxury sedans</li>
                    <li>Executive cars</li>
                    <li>Chauffeur services</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">For the Guests</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Shuttle services</li>
                    <li>Mini coaches</li>
                    <li>Luxury buses</li>
                    <li>Group transportation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {transportVendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                id={vendor.id}
                name={vendor.name}
                category={vendor.category}
                rating={vendor.rating}
                reviews={vendor.reviews}
                priceRange={vendor.priceRange}
                image={vendor.image}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Popular Transportation Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Bridal Car Package</h3>
                <p className="text-gray-600 mb-4">Luxury decorated car with chauffeur for the bride and groom</p>
                <p className="font-semibold">Starting at ₹25,000 per day</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Family Fleet Package</h3>
                <p className="text-gray-600 mb-4">Multiple luxury vehicles for the wedding party and immediate family</p>
                <p className="font-semibold">Starting at ₹75,000 per day</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Guest Shuttle Service</h3>
                <p className="text-gray-600 mb-4">Transportation between venues and hotels for all your guests</p>
                <p className="font-semibold">Starting at ₹45,000 per day</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Need transportation for your wedding?</h2>
            <p className="text-gray-600 mb-6">Let us help you find the perfect transportation options for your special day</p>
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

export default Transportation;
