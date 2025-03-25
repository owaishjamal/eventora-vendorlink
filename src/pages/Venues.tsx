
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import VenueCard from '@/components/ui/VenueCard';
import { useLocation } from '@/contexts/LocationContext';

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { currentLocation } = useLocation();
  
  // Dummy venue data for different locations
  const allVenues = [
    // Mumbai venues
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
      city: 'Mumbai',
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
      city: 'Mumbai',
    },
    // Delhi venues
    {
      id: 3,
      name: 'The Grand Imperial',
      location: 'Connaught Place, Delhi',
      capacity: '75-350',
      priceRange: '$$$',
      rating: 4.7,
      reviews: 132,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Delhi',
    },
    {
      id: 4,
      name: 'Royal Gardens',
      location: 'Mehrauli, Delhi',
      capacity: '100-400',
      priceRange: '$$$$',
      rating: 4.9,
      reviews: 104,
      image: 'https://images.unsplash.com/photo-1615285445510-68b133ebef5f?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Delhi',
    },
    // Bangalore venues
    {
      id: 5,
      name: 'The Leela Palace',
      location: 'Old Airport Road, Bangalore',
      capacity: '50-300',
      priceRange: '$$$',
      rating: 4.8,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Bangalore',
    },
    {
      id: 6,
      name: 'Taj West End',
      location: 'Race Course Road, Bangalore',
      capacity: '50-250',
      priceRange: '$$$',
      rating: 4.7,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=60',
      featured: false,
      city: 'Bangalore',
    },
    // Hyderabad venues
    {
      id: 7,
      name: 'Taj Falaknuma Palace',
      location: 'Engine Bowli, Hyderabad',
      capacity: '40-150',
      priceRange: '$$$$',
      rating: 4.9,
      reviews: 86,
      image: 'https://images.unsplash.com/photo-1544825477-709d4bff472f?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Hyderabad',
    },
    {
      id: 8,
      name: 'Novotel Hyderabad',
      location: 'HITEC City, Hyderabad',
      capacity: '100-500',
      priceRange: '$$',
      rating: 4.6,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=800&auto=format&fit=crop&q=60',
      featured: false,
      city: 'Hyderabad',
    },
    // Chennai venues
    {
      id: 9,
      name: 'ITC Grand Chola',
      location: 'Guindy, Chennai',
      capacity: '100-600',
      priceRange: '$$$$',
      rating: 4.8,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Chennai',
    },
    {
      id: 10,
      name: 'The Leela Palace Chennai',
      location: 'Adyar Sea Face, Chennai',
      capacity: '75-250',
      priceRange: '$$$',
      rating: 4.7,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60',
      featured: false,
      city: 'Chennai',
    },
    // Kolkata venues
    {
      id: 11,
      name: 'ITC Royal Bengal',
      location: 'New Town, Kolkata',
      capacity: '80-400',
      priceRange: '$$$',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1526786220381-1d21eedf92bf?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Kolkata',
    },
    {
      id: 12,
      name: 'The Oberoi Grand',
      location: 'Jawaharlal Nehru Road, Kolkata',
      capacity: '50-200',
      priceRange: '$$$',
      rating: 4.9,
      reviews: 86,
      image: 'https://images.unsplash.com/photo-1515205244153-0ba456d5bcef?w=800&auto=format&fit=crop&q=60',
      featured: false,
      city: 'Kolkata',
    },
    // Pune venues
    {
      id: 13,
      name: 'Oxford Golf Resort',
      location: 'Bavdhan, Pune',
      capacity: '100-500',
      priceRange: '$$',
      rating: 4.7,
      reviews: 82,
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Pune',
    },
    {
      id: 14,
      name: 'The Westin Pune',
      location: 'Koregaon Park, Pune',
      capacity: '75-300',
      priceRange: '$$$',
      rating: 4.6,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&auto=format&fit=crop&q=60',
      featured: false,
      city: 'Pune',
    },
    // Ahmedabad venues
    {
      id: 15,
      name: 'Courtyard by Marriott',
      location: 'Satellite, Ahmedabad',
      capacity: '50-250',
      priceRange: '$$',
      rating: 4.5,
      reviews: 74,
      image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&auto=format&fit=crop&q=60',
      featured: true,
      city: 'Ahmedabad',
    },
    {
      id: 16,
      name: 'The Grand Bhagwati',
      location: 'S.G. Highway, Ahmedabad',
      capacity: '100-600',
      priceRange: '$$',
      rating: 4.6,
      reviews: 86,
      image: 'https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?w=800&auto=format&fit=crop&q=60',
      featured: false,
      city: 'Ahmedabad',
    },
  ];

  // Filter venues based on location and search term
  const filteredVenues = allVenues.filter(
    venue => 
      venue.city === currentLocation && 
      (venue.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       venue.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get unique areas within the selected city
  const areas = [...new Set(filteredVenues.map(venue => venue.location.split(',')[0]))];

  // Featured venues for the selected city
  const featuredVenues = filteredVenues.filter(venue => venue.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the Perfect Venue in {currentLocation}</h1>
            <p className="text-lg text-gray-600">Discover unique spaces for your dream event</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Input 
                type="text" 
                placeholder={`Search venues or locations in ${currentLocation}...`} 
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
            {areas.map((area, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="rounded-full gap-1"
                onClick={() => setSearchTerm(area)}
              >
                <MapPin size={14} />
                {area}
              </Button>
            ))}
          </div>

          {/* Featured Venues */}
          {searchTerm === '' && featuredVenues.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-6">Featured Venues in {currentLocation}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredVenues.slice(0, 3).map((venue) => (
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
            <h2 className="text-2xl font-semibold mb-6">{searchTerm ? 'Search Results' : `All Venues in ${currentLocation}`}</h2>
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
              <p className="text-lg text-gray-500">
                {searchTerm 
                  ? `No venues found matching "${searchTerm}" in ${currentLocation}` 
                  : `No venues found in ${currentLocation}`}
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

export default Venues;
