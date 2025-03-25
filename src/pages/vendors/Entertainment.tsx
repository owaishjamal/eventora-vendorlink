
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/ui/VendorCard';
import { Link } from 'react-router-dom';

const Entertainment = () => {
  // Mock data for entertainment vendors
  const entertainers = [
    {
      id: "1",
      name: "Bollywood Beats",
      category: "DJ & Music",
      rating: 4.9,
      reviews: 124,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Mumbai Music Band",
      category: "Live Band",
      rating: 4.8,
      reviews: 92,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Magic Moments",
      category: "Magicians",
      rating: 4.7,
      reviews: 68,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "4",
      name: "Rhythm Dancers",
      category: "Dance Troupe",
      rating: 4.9,
      reviews: 86,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1504609813442-a9924e2e4b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "5",
      name: "Classical Ensemble",
      category: "Traditional Music",
      rating: 4.8,
      reviews: 72,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1511864841613-9a87cc44d54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "6",
      name: "Fun Photo Booth",
      category: "Interactive Entertainment",
      rating: 4.6,
      reviews: 64,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1577997719878-55ca570b7e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Wedding Entertainment in Mumbai</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Keep your guests entertained with Mumbai's finest performers, musicians, and interactive experiences.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Wedding entertainment" 
                className="w-full md:w-64 h-48 object-cover rounded-lg mt-4 md:mt-0"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Music & Dance</h3>
                <p className="text-gray-600 mb-4">
                  From traditional Indian music to contemporary DJs, music sets the mood for your celebration.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">DJs & Sound Systems</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Live Bands</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Classical Musicians</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Dance Performances</p>
                  </div>
                </div>
              </div>
              <div className="bg-planero-light-gray p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Interactive Entertainment</h3>
                <p className="text-gray-600 mb-4">
                  Give your guests memorable experiences with interactive entertainment options.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Photo Booths</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Magicians</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Caricature Artists</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-medium">Game Stations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {entertainers.map((entertainer) => (
              <VendorCard
                key={entertainer.id}
                id={entertainer.id}
                name={entertainer.name}
                category={entertainer.category}
                rating={entertainer.rating}
                reviews={entertainer.reviews}
                priceRange={entertainer.priceRange}
                image={entertainer.image}
              />
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6">Popular Entertainment Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Sangeet Night Package</h3>
                <p className="text-gray-600 mb-4">DJ with sound system, dance floor, and lighting setup</p>
                <p className="font-semibold">Starting at ₹45,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-planero-light-gray">
                <h3 className="font-bold text-lg mb-2">Full Entertainment Suite</h3>
                <p className="text-gray-600 mb-4">DJ, live performances, photo booth, and interactive stations</p>
                <p className="font-semibold">Starting at ₹1,25,000</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Traditional Music</h3>
                <p className="text-gray-600 mb-4">Classical musicians for ceremonies and cocktail hours</p>
                <p className="font-semibold">Starting at ₹35,000</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to book entertainment for your wedding?</h2>
            <p className="text-gray-600 mb-6">Let us help you find the perfect entertainment options to wow your guests</p>
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

export default Entertainment;
