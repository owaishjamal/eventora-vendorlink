
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';
import { useLocation } from '@/contexts/LocationContext';

const Beauty = () => {
  const { currentLocation } = useLocation();

  // Mock data for beauty vendors with location information
  const allBeautyVendors = [
    // Mumbai vendors
    {
      id: "1",
      name: "Glamour by Priya",
      category: "Bridal Makeup",
      rating: 4.9,
      reviews: 128,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Mumbai",
    },
    {
      id: "2",
      name: "Mumbai Makeovers",
      category: "Hair & Makeup",
      rating: 4.7,
      reviews: 104,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Mumbai",
    },
    // Delhi vendors
    {
      id: "3",
      name: "Delhi Glamour Studio",
      category: "Bridal Makeup",
      rating: 4.8,
      reviews: 118,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Delhi",
    },
    {
      id: "4",
      name: "Royal Beauty Parlour",
      category: "Beauty Services",
      rating: 4.6,
      reviews: 92,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Delhi",
    },
    // Bangalore vendors
    {
      id: "5",
      name: "Bangalore Bridal Studio",
      category: "Bridal Makeup",
      rating: 4.9,
      reviews: 126,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1630001778319-e7dbae45c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Bangalore",
    },
    {
      id: "6",
      name: "Beauty & Beyond",
      category: "Hair & Makeup",
      rating: 4.7,
      reviews: 94,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Bangalore",
    },
    // Hyderabad vendors
    {
      id: "7",
      name: "Hyderabad Makeover Artists",
      category: "Bridal Makeup",
      rating: 4.8,
      reviews: 106,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Hyderabad",
    },
    {
      id: "8",
      name: "Pearl City Beauty",
      category: "Hair & Makeup",
      rating: 4.5,
      reviews: 82,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Hyderabad",
    },
    // Chennai vendors
    {
      id: "9",
      name: "Chennai Bridal House",
      category: "Bridal Makeup",
      rating: 4.8,
      reviews: 98,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Chennai",
    },
    {
      id: "10",
      name: "Traditional Beauty Parlour",
      category: "Mehendi Artist",
      rating: 4.7,
      reviews: 94,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Chennai",
    },
    // Kolkata vendors
    {
      id: "11",
      name: "Kolkata Beauty Lounge",
      category: "Hair & Makeup",
      rating: 4.6,
      reviews: 88,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1562935057-3ec98d2f3e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Kolkata",
    },
    {
      id: "12",
      name: "Bengali Bridal Studio",
      category: "Bridal Makeup",
      rating: 4.9,
      reviews: 116,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      location: "Kolkata",
    },
  ];

  // Filter beauty vendors based on selected location
  const beautyVendors = allBeautyVendors.filter(vendor => vendor.location === currentLocation);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Bridal Beauty Services in {currentLocation}</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Look your best on your special day with {currentLocation}'s finest makeup artists, hairstylists, and beauty professionals.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bridal makeup" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Bridal Makeup</h3>
                <p className="text-gray-600">Professional makeup services for brides and bridal party members</p>
              </div>
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Mehendi Artists</h3>
                <p className="text-gray-600">Traditional and modern designs for bridal mehendi and guests</p>
              </div>
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Hair Styling</h3>
                <p className="text-gray-600">Customized hairstyles to complement your wedding look</p>
              </div>
            </div>
          </div>
          
          {beautyVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {beautyVendors.map((vendor) => (
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
          ) : (
            <div className="text-center py-8 mb-12">
              <p className="text-lg text-gray-500">No beauty vendors found in {currentLocation} at the moment.</p>
            </div>
          )}
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Beauty Packages for Your Wedding</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Pre-Wedding Glow</h3>
                <p className="text-gray-600 mb-4">Facials, skincare, and beauty treatments before your big day</p>
                <p className="font-semibold">Starting at ₹15,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Complete Bridal Package</h3>
                <p className="text-gray-600 mb-4">Makeup, hair, mehendi, and more for all ceremonies</p>
                <p className="font-semibold">Starting at ₹50,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Family Beauty Package</h3>
                <p className="text-gray-600 mb-4">Beauty services for bride, mother, and bridesmaids</p>
                <p className="font-semibold">Starting at ₹35,000</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to book your beauty services?</h2>
            <p className="text-gray-600 mb-6">Let us help you find the perfect beauty professionals for your wedding in {currentLocation}</p>
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

export default Beauty;
