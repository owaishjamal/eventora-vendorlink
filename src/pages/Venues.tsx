
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import VenueCard from '@/components/ui/VenueCard';

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy venue data - Mumbai-focused
  const venues = [
    {
      id: 1,
      name: 'The Taj Mahal Palace',
      location: 'Colaba, Mumbai',
      capacity: '50-500',
      priceRange: '$$$',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&auto=format&fit=crop&q=60',
      featured: true,
    },
    {
      id: 2,
      name: 'Juhu Beach Resort',
      location: 'Juhu, Mumbai',
      capacity: '100-300',
      priceRange: '$$',
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1583267575071-e00fb968e1d2?w=800&auto=format&fit=crop&q=60',
      featured: false,
    },
    {
      id: 3,
      name: 'The Grand Hyatt',
      location: 'Santacruz, Mumbai',
      capacity: '50-150',
      priceRange: '$$$',
      rating: 4.7,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1554222413-74c586ada270?w=800&auto=format&fit=crop&q=60',
      featured: true,
    },
    {
      id: 4,
      name: 'Marine Palace Banquets',
      location: 'Marine Drive, Mumbai',
      capacity: '75-250',
      priceRange: '$$$$',
      rating: 4.9,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60',
      featured: true,
    },
    {
      id: 5,
      name: 'Powai Lakeview Hall',
      location: 'Powai, Mumbai',
      capacity: '25-100',
      priceRange: '$$',
      rating: 4.6,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60',
      featured: false,
    },
    {
      id: 6,
      name: 'Bandra Bandstand Resort',
      location: 'Bandra, Mumbai',
      capacity: '50-200',
      priceRange: '$$$',
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60',
      featured: true,
    },
    {
      id: 7,
      name: 'Andheri Celebration Hall',
      location: 'Andheri, Mumbai',
      capacity: '30-120',
      priceRange: '$$',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1519011985187-444d62641929?w=800&auto=format&fit=crop&q=60',
      featured: false,
    },
    {
      id: 8,
      name: 'Mahalaxmi Wedding Palace',
      location: 'Mahalaxmi, Mumbai',
      capacity: '75-175',
      priceRange: '$$',
      rating: 4.8,
      reviews: 91,
      image: 'https://images.unsplash.com/photo-1505944357431-27579db47f79?w=800&auto=format&fit=crop&q=60',
      featured: true,
    },
  ];

  // Filter venues based on search term
  const filteredVenues = venues.filter(
    venue => venue.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             venue.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get unique locations
  const locations = [...new Set(venues.map(venue => venue.location.split(',')[0]))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the Perfect Venue in Mumbai</h1>
            <p className="text-lg text-gray-600">Discover unique spaces for your dream event</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder="Search venues or locations in Mumbai..." 
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

          {/* Location Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {locations.map((location, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="rounded-full gap-1"
                onClick={() => setSearchTerm(location)}
              >
                <MapPin size={14} />
                {location}
              </Button>
            ))}
          </div>

          {/* Featured Venues */}
          {searchTerm === '' && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">Featured Venues in Mumbai</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {venues
                  .filter(venue => venue.featured)
                  .slice(0, 3)
                  .map((venue) => (
                    <VenueCard 
                      key={venue.id}
                      id={venue.id.toString()}
                      name={venue.name}
                      location={venue.location}
                      capacity={venue.capacity}
                      priceRange={venue.priceRange}
                      rating={venue.rating}
                      reviews={venue.reviews}
                      image={venue.image}
                    />
                  ))}
              </div>
            </div>
          )}

          {/* All Venues */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">{searchTerm ? 'Search Results' : 'All Venues in Mumbai'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVenues.map((venue) => (
                <VenueCard 
                  key={venue.id}
                  id={venue.id.toString()}
                  name={venue.name}
                  location={venue.location}
                  capacity={venue.capacity}
                  priceRange={venue.priceRange}
                  rating={venue.rating}
                  reviews={venue.reviews}
                  image={venue.image}
                />
              ))}
            </div>
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No venues found matching "{searchTerm}"</p>
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

export default Venues;
