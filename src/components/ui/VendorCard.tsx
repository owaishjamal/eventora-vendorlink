
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VendorCardProps {
  id?: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  priceRange: string;
  location?: string;
  featured?: boolean;
}

const VendorCard = ({ 
  id = "1", 
  name, 
  category, 
  image, 
  rating, 
  reviews, 
  priceRange,
  location = "New York, NY", 
  featured = false 
}: VendorCardProps) => {
  return (
    <div className="group rounded-xl overflow-hidden card-hover bg-white">
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
          <span className="text-sm text-gray-600">{reviews} reviews</span>
        </div>
        
        <p className="text-sm text-gray-500 mt-1">{location}</p>
        <p className="text-sm font-medium mt-1">{priceRange}</p>
        
        <Link 
          to={`/cart?vendor=${id}`}
          className="block text-center text-planero-pink hover:text-planero-pink-hover font-medium text-sm mt-3 py-2 border border-planero-pink rounded-full transition-colors"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default VendorCard;
