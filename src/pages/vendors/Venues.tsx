
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Venues = () => {
  // Mock data for venue vendors
  const venueVendors = [
    {
      id: "1",
      name: "Grand Hyatt Mumbai",
      category: "Luxury Hotel",
      rating: 4.9,
      reviews: 186,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Taj Lands End",
      category: "5-Star Hotel",
      rating: 4.8,
      reviews: 164,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1601331496116-de41a200643d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Juhu Beach Resort",
      category: "Beach Venue",
      rating: 4.7,
      reviews: 142,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1643501929344-e6e1fe34e13e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Royal Garden Banquet",
      category: "Banquet Hall",
      rating: 4.6,
      reviews: 128,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "The Heritage Palace",
      category: "Heritage Property",
      rating: 4.8,
      reviews: 112,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Majestic Lawns",
      category: "Outdoor Venue",
      rating: 4.7,
      reviews: 98,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1530712024539-ecd73dfb1c9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Wedding Venues in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Discover the perfect setting for your special day, from luxury hotels to beachfront properties across Mumbai.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1519741347686-c1e331bd7f18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding venue" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Indoor Venues</h3>
                <p className="text-gray-600 mb-4">
                  Mumbai offers a wide range of indoor venues suitable for weddings throughout the year, especially during monsoon season.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">5-Star Hotels</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Banquet Halls</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Convention Centers</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Community Halls</p>
                  </div>
                </div>
              </div>
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Outdoor Venues</h3>
                <p className="text-gray-600 mb-4">
                  For a breath-taking wedding experience, consider Mumbai's scenic outdoor locations during winter months.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Beach Venues</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Garden Venues</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Rooftop Venues</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Farmhouses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {venueVendors.map((venue) => (
              <VendorCard
                key={venue.id}
                id={venue.id}
                name={venue.name}
                category={venue.category}
                rating={venue.rating}
                reviews={venue.reviews}
                priceRange={venue.priceRange}
                image={venue.image}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Venue Booking Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Book Early</h3>
                <p className="text-gray-600">
                  The best venues in Mumbai get booked 12-18 months in advance, especially during wedding season (November-February).
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Check Inclusions</h3>
                <p className="text-gray-600">
                  Understand what's included in the venue package: catering, decor, sound systems, and accommodation options.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Consider Logistics</h3>
                <p className="text-gray-600">
                  Think about accessibility, parking, proximity to hotels, and transportation for your guests.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to find your dream wedding venue?</h2>
            <p className="text-gray-600 mb-6">Let us help you discover the perfect location for your special day</p>
            <Link to="/event">
              <Button size="lg" className="bg-planero-pink hover:bg-planero-pink-hover">
                Get Venue Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Venues;
