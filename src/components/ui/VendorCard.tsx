
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  location: string;
  featured?: boolean;
}

const VendorCard = ({
  id,
  name,
  category,
  image,
  rating,
  reviewCount,
  startingPrice,
  location,
  featured = false,
}: VendorCardProps) => {
  return (
    <Link 
      to={`/vendors/${id}`}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover" 
        />
        {featured && (
          <div className="absolute top-3 left-3 bg-planero-pink text-white text-xs font-medium px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white text-planero-black text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{reviewCount} reviews</span>
        </div>
        
        <div className="text-gray-600 text-sm mb-3">
          {location}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-500">Starting at</span>
            <div className="font-bold text-planero-pink">{startingPrice}</div>
          </div>
          <button className="px-3 py-1 bg-planero-cream text-planero-black text-sm font-medium rounded-lg hover:bg-planero-cream/80 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
