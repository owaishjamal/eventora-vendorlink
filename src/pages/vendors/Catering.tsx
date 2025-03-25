
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Catering = () => {
  // Mock data for catering vendors
  const caterers = [
    {
      id: "1",
      name: "Royal Indian Caterers",
      category: "Full-Service Catering",
      rating: 4.8,
      reviews: 142,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Mumbai Flavors",
      category: "Multi-Cuisine",
      rating: 4.9,
      reviews: 156,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Spice Route",
      category: "Indian Cuisine",
      rating: 4.7,
      reviews: 124,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Gourmet Celebrations",
      category: "Luxury Catering",
      rating: 4.9,
      reviews: 98,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1635321596835-2be407a860e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "Vegetarian Delights",
      category: "Vegetarian",
      rating: 4.6,
      reviews: 87,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Mumbai Street Food Co.",
      category: "Fusion Cuisine",
      rating: 4.7,
      reviews: 102,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Wedding Caterers in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Delight your guests with exquisite culinary experiences from Mumbai's finest wedding caterers.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Catering service" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="bg-planero-light-gray p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Mumbai's Diverse Culinary Offerings</h2>
              <p className="text-gray-600 mb-4">
                Mumbai is known for its diverse culinary scene, offering everything from traditional Indian cuisine to international flavors. Our caterers specialize in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">North Indian</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">South Indian</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">Gujarati</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">Maharashtrian</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">Continental</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">Chinese</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">Thai</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="font-medium">Fusion</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {caterers.map((caterer) => (
              <VendorCard
                key={caterer.id}
                id={caterer.id}
                name={caterer.name}
                category={caterer.category}
                rating={caterer.rating}
                reviews={caterer.reviews}
                priceRange={caterer.priceRange}
                image={caterer.image}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Popular Catering Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Cocktail Reception</h3>
                <p className="text-gray-600 mb-4">Light appetizers and drinks for pre-wedding events</p>
                <p className="font-semibold">Starting at ₹1,200 per person</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Full Wedding Feast</h3>
                <p className="text-gray-600 mb-4">Complete multi-course meal with multiple cuisines</p>
                <p className="font-semibold">Starting at ₹2,500 per person</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Themed Food Stations</h3>
                <p className="text-gray-600 mb-4">Interactive food stations with live cooking demonstrations</p>
                <p className="font-semibold">Starting at ₹1,800 per person</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Looking for the perfect caterer?</h2>
            <p className="text-gray-600 mb-6">Let us help you find catering services that match your taste and budget</p>
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

export default Catering;
