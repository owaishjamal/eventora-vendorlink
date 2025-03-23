
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VendorCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
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
  location, 
  featured = false 
}: VendorCardProps) => {
  return (
    <Link 
      to={`/vendors/${id}`}
      className={`group block rounded-xl overflow-hidden card-hover bg-white ${
        featured ? 'ring-2 ring-planero-pink' : ''
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 left-3 bg-planero-pink text-white text-xs font-semibold py-1 px-3 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm text-planero-pink font-medium">{category}</span>
            <h3 className="font-semibold text-lg mt-1 group-hover:text-planero-pink transition-colors">{name}</h3>
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star size={16} className="fill-amber-400 stroke-amber-400" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="mx-1 text-sm text-gray-400">·</span>
          <span className="text-sm text-gray-600">{reviewCount} reviews</span>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{location}</p>
      </div>
    </Link>
  );
};

export default VendorCard;
