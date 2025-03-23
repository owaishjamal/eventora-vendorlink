
import { useState } from 'react';
import VenueCard from '../ui/VenueCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedVenues = () => {
  // Venue filter categories
  const [activeFilter, setActiveFilter] = useState('featured');
  
  const venueFilters = [
    { id: 'featured', name: 'As Featured In' },
    { id: 'historic', name: 'Historic Hotspots' },
    { id: 'intimate', name: 'Keep It Intimate' },
    { id: 'unique', name: 'Unique Spaces' },
    { id: 'picturesque', name: 'Picturesque Places' },
    { id: 'zoos', name: 'Zoos & Aquariums' },
  ];
  
  // Sample venue data
  const venues = [
    {
      id: 'venue1',
      name: 'The Foundry',
      image: '/lovable-uploads/af363121-1ec9-4ec8-9488-75c557dcc610.png',
      location: 'Urban Loft',
      city: 'Long Island City',
      state: 'NY',
      capacity: '0-300',
      priceRange: '$$$',
    },
    {
      id: 'venue2',
      name: 'Inn at Perry Cabin',
      image: '/lovable-uploads/2a04ff2f-3a7b-4017-a382-d82925490e03.png',
      location: 'Waterfront',
      city: 'St Michaels',
      state: 'MD',
      capacity: '0-300',
      priceRange: '$$$$',
    },
    {
      id: 'venue3',
      name: 'Kualoa Ranch',
      image: '/lovable-uploads/38eb6dc9-5234-47f2-9d62-cc4bdadceeb2.png',
      location: 'Landscape',
      city: 'Kaneohe',
      state: 'HI',
      capacity: '0-300',
      priceRange: '$$',
    },
    {
      id: 'venue4',
      name: 'Timberline Lodge',
      image: '/lovable-uploads/3a9ecd17-4d6e-46a6-89ac-fc5e8304f00e.png',
      location: 'Mountain Top',
      city: 'Government Camp',
      state: 'OR',
      capacity: '0-300',
      priceRange: '$$$',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-planero-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find an unforgettable venue</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From greenhouses and mountain tops to aquariums and historic landmarks, get married at one of our most out-of-the-ordinary wedding venues.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {venueFilters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-planero-black text-white'
                  : 'bg-white text-planero-black border border-gray-200 hover:border-planero-black/20'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Venues Grid with Navigation */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue) => (
              <VenueCard
                key={venue.id}
                id={venue.id}
                name={venue.name}
                image={venue.image}
                location={venue.location}
                city={venue.city}
                state={venue.state}
                capacity={venue.capacity}
                priceRange={venue.priceRange}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow hidden md:block">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow hidden md:block">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* See More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/venues" 
            className="btn-primary inline-block"
          >
            See more unforgettable venues
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
