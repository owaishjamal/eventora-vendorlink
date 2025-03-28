
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface VenueCardProps {
  id?: string;
  name: string;
  image: string;
  location: string;
  city?: string;
  state?: string;
  capacity: string;
  priceRange: string;
  rating?: number;
  reviews?: number;
}

const VenueCard = ({ 
  id = "1", 
  name, 
  image, 
  location, 
  city = "", 
  state = "", 
  capacity, 
  priceRange,
  rating,
  reviews
}: VenueCardProps) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <div className="text-sm text-gray-500">{city || state ? `${city}, ${state}` : location}</div>
        <h3 className="font-semibold text-lg mt-1 group-hover:text-planero-pink transition-colors">{name}</h3>
        
        {rating && reviews && (
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Star size={16} className="fill-amber-400 stroke-amber-400" />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
            <span className="mx-1 text-sm text-gray-400">·</span>
            <span className="text-sm text-gray-600">{reviews} reviews</span>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-sm text-gray-600">
            <span>{capacity} Guests</span>
            <span className="mx-1">·</span>
            <span className="price-indicator">{priceRange}</span>
          </div>
        </div>
        
        <Link 
          to={`/venues/${id}`}
          className="block text-center text-planero-pink hover:text-planero-pink-hover font-medium text-sm mt-3 py-2 border border-planero-pink rounded-full transition-colors"
        >
          Explore venue
        </Link>
      </div>
    </div>
  );
};

export default VenueCard;
