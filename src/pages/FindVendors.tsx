
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import VendorCard from '@/components/ui/VendorCard';
import { useLocation } from '@/contexts/LocationContext';

const FindVendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { currentLocation } = useLocation();
  
  // Dummy vendor data with location information
  const allVendors = [
    {
      id: 1,
      name: 'Elegant Events Photography',
      category: 'Photography',
      rating: 4.8,
      reviews: 122,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
      location: 'Mumbai',
    },
    {
      id: 2,
      name: 'Delicious Catering Co.',
      category: 'Catering',
      rating: 4.7,
      reviews: 98,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww',
      location: 'Delhi',
    },
    {
      id: 3,
      name: 'Bloom & Petal Florists',
      category: 'Flowers & Decor',
      rating: 4.9,
      reviews: 87,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1523694576729-96ddc44e0e11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3Jpc3R8ZW58MHx8MHx8fDA%3D',
      location: 'Bangalore',
    },
    {
      id: 4,
      name: 'Rhythmic Beats Entertainment',
      category: 'Music & Entertainment',
      rating: 4.6,
      reviews: 65,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGp8ZW58MHx8MHx8fDA%3D',
      location: 'Mumbai',
    },
    {
      id: 5,
      name: 'Sweet Treats Bakery',
      category: 'Cakes & Desserts',
      rating: 4.9,
      reviews: 112,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNha2UlMjBzaG9wfGVufDB8fDB8fHww',
      location: 'Hyderabad',
    },
    {
      id: 6,
      name: 'Event Planners Extraordinaire',
      category: 'Event Planning',
      rating: 4.7,
      reviews: 76,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmVyfGVufDB8fDB8fHww',
      location: 'Chennai',
    },
    {
      id: 7,
      name: 'Premier Transportation',
      category: 'Transportation',
      rating: 4.6,
      reviews: 54,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1599278015165-295eb5a9048b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpbW91c2luZXxlbnwwfHwwfHx8MA%3D%3D',
      location: 'Kolkata',
    },
    {
      id: 8,
      name: 'Bella Bridal Boutique',
      category: 'Attire & Accessories',
      rating: 4.8,
      reviews: 91,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1494342588466-00e4a7383fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJyaWRhbCUyMHNob3B8ZW58MHx8MHx8fDA%3D',
      location: 'Pune',
    },
    {
      id: 9,
      name: 'Divine Decor',
      category: 'Flowers & Decor',
      rating: 4.7,
      reviews: 83,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGRlY29yfGVufDB8fDB8fHww',
      location: 'Delhi',
    },
    {
      id: 10,
      name: 'City Lights Photography',
      category: 'Photography',
      rating: 4.9,
      reviews: 114,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
      location: 'Bangalore',
    },
    {
      id: 11,
      name: 'Bangalore Sound Systems',
      category: 'Music & Entertainment',
      rating: 4.5,
      reviews: 78,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGolMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D',
      location: 'Bangalore',
    },
    {
      id: 12,
      name: 'South Indian Delicacies',
      category: 'Catering',
      rating: 4.8,
      reviews: 96,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1610508500445-a4592435e27e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      location: 'Chennai',
    },
    {
      id: 13,
      name: 'Ahmedabad Floral Art',
      category: 'Flowers & Decor',
      rating: 4.6,
      reviews: 62,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1576014126869-48c537b13f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D',
      location: 'Ahmedabad',
    },
    {
      id: 14,
      name: 'Hyderabad Heritage Cars',
      category: 'Transportation',
      rating: 4.7,
      reviews: 68,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww',
      location: 'Hyderabad',
    },
    {
      id: 15,
      name: 'Mumbai Tasty Treats',
      category: 'Cakes & Desserts',
      rating: 4.8,
      reviews: 104,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2V8ZW58MHx8MHx8fDA%3D',
      location: 'Mumbai',
    },
    {
      id: 16,
      name: 'Kolkata Fashion House',
      category: 'Attire & Accessories',
      rating: 4.7,
      reviews: 89,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwd2VkZGluZyUyMGRyZXNzfGVufDB8fDB8fHww',
      location: 'Kolkata',
    },
  ];

  // Filter vendors based on location and search term
  const filteredVendors = allVendors.filter(
    vendor => 
      vendor.location === currentLocation && 
      (vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       vendor.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categories = [
    'Photography', 'Catering', 'Flowers & Decor', 'Music & Entertainment', 
    'Cakes & Desserts', 'Event Planning', 'Transportation', 'Attire & Accessories'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Vendors in {currentLocation}</h1>
            <p className="text-lg text-gray-600">Discover the perfect vendors for your event in {currentLocation}</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder={`Search vendors in ${currentLocation}...`} 
                className="pl-10 pr-4 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter size={18} />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="rounded-full"
                onClick={() => setSearchTerm(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Vendors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVendors.map((vendor) => (
              <VendorCard 
                key={vendor.id}
                name={vendor.name}
                category={vendor.category}
                rating={vendor.rating}
                reviews={vendor.reviews}
                priceRange={vendor.priceRange}
                image={vendor.image}
              />
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">
                {searchTerm 
                  ? `No vendors found matching "${searchTerm}" in ${currentLocation}` 
                  : `No vendors found in ${currentLocation}`}
              </p>
              <Button 
                variant="link" 
                className="mt-2"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindVendors;
