
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import VenueCard from '@/components/ui/VenueCard';

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy venue data
  const venues = [
    {
      id: 1,
      name: 'Grand Ballroom Hotel',
      location: 'New York, NY',
      capacity: '50-500',
      price: '$$$',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsbHJvb218ZW58MHx8MHx8fDA%3D',
      featured: true,
    },
    {
      id: 2,
      name: 'Riverside Gardens',
      location: 'Chicago, IL',
      capacity: '100-300',
      price: '$$',
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
      featured: false,
    },
    {
      id: 3,
      name: 'Mountain View Lodge',
      location: 'Denver, CO',
      capacity: '50-150',
      price: '$$$',
      rating: 4.7,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1470217957101-da7150b9b681?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBsb2RnZXxlbnwwfHwwfHx8MA%3D%3D',
      featured: true,
    },
    {
      id: 4,
      name: 'Ocean View Beach Club',
      location: 'Miami, FL',
      capacity: '75-250',
      price: '$$$$',
      rating: 4.9,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww',
      featured: true,
    },
    {
      id: 5,
      name: 'Historic Downtown Loft',
      location: 'Nashville, TN',
      capacity: '25-100',
      price: '$$',
      rating: 4.6,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1651943760935-c11beda8fefe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZnQlMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D',
      featured: false,
    },
    {
      id: 6,
      name: 'Vineyard Estates',
      location: 'Napa Valley, CA',
      capacity: '50-200',
      price: '$$$',
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1601565960311-8a7f4e1ab709?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbmV5YXJkJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      featured: true,
    },
    {
      id: 7,
      name: 'Urban Art Gallery',
      location: 'Seattle, WA',
      capacity: '30-120',
      price: '$$',
      rating: 4.7,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
      featured: false,
    },
    {
      id: 8,
      name: 'Rustic Barn Retreat',
      location: 'Austin, TX',
      capacity: '75-175',
      price: '$$',
      rating: 4.8,
      reviews: 91,
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFybiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the Perfect Venue</h1>
            <p className="text-lg text-gray-600">Discover unique spaces for your events</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder="Search venues or locations..." 
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
              <h2 className="text-2xl font-semibold mb-6">Featured Venues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {venues
                  .filter(venue => venue.featured)
                  .slice(0, 3)
                  .map((venue) => (
                    <VenueCard 
                      key={venue.id}
                      name={venue.name}
                      location={venue.location}
                      capacity={venue.capacity}
                      price={venue.price}
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
            <h2 className="text-2xl font-semibold mb-6">{searchTerm ? 'Search Results' : 'All Venues'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVenues.map((venue) => (
                <VenueCard 
                  key={venue.id}
                  name={venue.name}
                  location={venue.location}
                  capacity={venue.capacity}
                  price={venue.price}
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
