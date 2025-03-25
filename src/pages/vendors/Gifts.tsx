
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Gifts = () => {
  // Mock data for gift vendors
  const giftVendors = [
    {
      id: "1",
      name: "Elegant Favors",
      category: "Wedding Favors",
      rating: 4.8,
      reviews: 92,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1544221505-3777cf9687d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Mumbai Gift Baskets",
      category: "Custom Gift Baskets",
      rating: 4.7,
      reviews: 86,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Traditional Treasures",
      category: "Indian Gifts",
      rating: 4.9,
      reviews: 78,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Luxury Hampers",
      category: "Premium Gifts",
      rating: 4.8,
      reviews: 64,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1505932794655-147c61923065?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "Sweet Memories",
      category: "Edible Gifts",
      rating: 4.6,
      reviews: 52,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Personalized Keepsakes",
      category: "Customized Gifts",
      rating: 4.7,
      reviews: 68,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Wedding Gifts & Favors in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Find the perfect wedding favors, return gifts, and special items to thank your guests.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding gifts" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="bg-planero-light-gray p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Wedding Gift Traditions in Indian Culture</h2>
              <p className="text-gray-600 mb-4">
                Gift-giving plays an important role in Indian weddings, with various customs across different communities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Return Gifts</h3>
                  <p className="text-sm text-gray-600">Traditional gifts given to guests as a token of appreciation for attending the wedding.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Wedding Favors</h3>
                  <p className="text-sm text-gray-600">Small gifts or mementos given to guests as a reminder of the special day.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Family Gifts</h3>
                  <p className="text-sm text-gray-600">Special gifts exchanged between the families of the bride and groom.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {giftVendors.map((vendor) => (
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
            <h2 className="text-2xl font-bold mb-6">Popular Gift Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Traditional Gifts</h3>
                <p className="text-gray-600 mb-4">Silver items, traditional decor, spiritual gifts, and cultural artifacts</p>
                <p className="font-semibold">Starting at ₹500 per gift</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Luxury Gift Packages</h3>
                <p className="text-gray-600 mb-4">Premium hampers, gourmet treats, and high-end personalized items</p>
                <p className="font-semibold">Starting at ₹2,000 per gift</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Personalized Favors</h3>
                <p className="text-gray-600 mb-4">Custom items with the couple's names, wedding date, or personalized messages</p>
                <p className="font-semibold">Starting at ₹350 per gift</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Looking for the perfect wedding gifts?</h2>
            <p className="text-gray-600 mb-6">Let us help you find unique and meaningful gifts for your wedding</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/event">
                <Button size="lg" className="bg-planero-pink hover:bg-planero-pink-hover w-full sm:w-auto">
                  Get Personalized Recommendations
                </Button>
              </Link>
              <Link to="/planning-tools/registry">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Create Your Registry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gifts;
