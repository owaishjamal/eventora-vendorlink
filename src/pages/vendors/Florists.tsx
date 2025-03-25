
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Florists = () => {
  // Mock data for florist vendors
  const florists = [
    {
      id: "1",
      name: "Bloom & Blossom",
      category: "Wedding Florist",
      rating: 4.9,
      reviews: 112,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1523694576729-96ddc44e0e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Mumbai Flower Market",
      category: "Wholesale & Retail",
      rating: 4.7,
      reviews: 86,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Floral Symphony",
      category: "Luxury Floral Design",
      rating: 4.8,
      reviews: 94,
      priceRange: "$$$$",
      image: "https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Exotic Petals",
      category: "Imported Flowers",
      rating: 4.6,
      reviews: 72,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1593016602584-1288c6e16dbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "Traditional Garlands",
      category: "Indian Wedding Flowers",
      rating: 4.9,
      reviews: 128,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1599731316321-fbc320ae323c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Eco Flower Studio",
      category: "Sustainable Floristry",
      rating: 4.7,
      reviews: 64,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Top Wedding Florists in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Transform your wedding venue with stunning floral arrangements from Mumbai's best florists.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding flowers" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Traditional Indian Wedding Flowers</h3>
                <p className="text-gray-600 mb-4">
                  From marigold garlands to jasmine hair adornments, traditional flowers play a significant role in Indian weddings.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Marigold</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Jasmine</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Rose</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Lotus</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Orchids</span>
                </div>
              </div>
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Contemporary Floral Designs</h3>
                <p className="text-gray-600 mb-4">
                  Modern wedding decor often incorporates exotic flowers and innovative arrangements for a sophisticated look.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Centerpieces</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Hanging Installations</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Flower Walls</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Bouquets</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">Venue Decor</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {florists.map((florist) => (
              <VendorCard
                key={florist.id}
                id={florist.id}
                name={florist.name}
                category={florist.category}
                rating={florist.rating}
                reviews={florist.reviews}
                priceRange={florist.priceRange}
                image={florist.image}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Popular Floral Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Essential Flowers</h3>
                <p className="text-gray-600 mb-4">Bridal bouquet, groom's boutonniere, and basic venue decoration</p>
                <p className="font-semibold">Starting at ₹35,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Complete Floral Decor</h3>
                <p className="text-gray-600 mb-4">Full venue decoration, mandap, entrance, stage, and table arrangements</p>
                <p className="font-semibold">Starting at ₹1,25,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Premium Selection</h3>
                <p className="text-gray-600 mb-4">Imported flowers, custom installations, and personalized designs</p>
                <p className="font-semibold">Starting at ₹2,50,000</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to bring your floral vision to life?</h2>
            <p className="text-gray-600 mb-6">Let us help you find the perfect florist for your wedding day</p>
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

export default Florists;
