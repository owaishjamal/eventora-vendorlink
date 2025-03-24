
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import VendorCard from '@/components/ui/VendorCard';

const FindVendors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy vendor data
  const vendors = [
    {
      id: 1,
      name: 'Elegant Events Photography',
      category: 'Photography',
      rating: 4.8,
      reviews: 122,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Delicious Catering Co.',
      category: 'Catering',
      rating: 4.7,
      reviews: 98,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww',
    },
    {
      id: 3,
      name: 'Bloom & Petal Florists',
      category: 'Flowers & Decor',
      rating: 4.9,
      reviews: 87,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1523694576729-96ddc44e0e11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3Jpc3R8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 4,
      name: 'Rhythmic Beats Entertainment',
      category: 'Music & Entertainment',
      rating: 4.6,
      reviews: 65,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGp8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 5,
      name: 'Sweet Treats Bakery',
      category: 'Cakes & Desserts',
      rating: 4.9,
      reviews: 112,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNha2UlMjBzaG9wfGVufDB8fDB8fHww',
    },
    {
      id: 6,
      name: 'Event Planners Extraordinaire',
      category: 'Event Planning',
      rating: 4.7,
      reviews: 76,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBwbGFubmVyfGVufDB8fDB8fHww',
    },
    {
      id: 7,
      name: 'Premier Transportation',
      category: 'Transportation',
      rating: 4.6,
      reviews: 54,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1599278015165-295eb5a9048b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpbW91c2luZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 8,
      name: 'Bella Bridal Boutique',
      category: 'Attire & Accessories',
      rating: 4.8,
      reviews: 91,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1494342588466-00e4a7383fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJyaWRhbCUyMHNob3B8ZW58MHx8MHx8fDA%3D',
    },
  ];

  // Filter vendors based on search term
  const filteredVendors = vendors.filter(
    vendor => vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              vendor.category.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Vendors</h1>
            <p className="text-lg text-gray-600">Discover the perfect vendors for your event</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder="Search vendors..." 
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
              <p className="text-lg text-gray-500">No vendors found matching "{searchTerm}"</p>
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
