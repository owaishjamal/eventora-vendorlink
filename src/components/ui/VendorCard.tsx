
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface VendorCardProps {
  id?: string;
  name: string;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
  priceRange: string;
}

const VendorCard = ({ 
  id = "1", 
  name, 
  image, 
  category, 
  priceRange,
  rating,
  reviews
}: VendorCardProps) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAddingToCart(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAddingToCart(false);
      
      toast({
        title: "Added to cart",
        description: `${name} has been added to your cart.`,
        duration: 3000,
      });
    }, 600);
  };

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
        <div className="text-sm text-gray-500 font-medium">{category}</div>
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
          <div className="price-indicator font-medium">{priceRange}</div>
        </div>
        
        <div className="flex gap-2 mt-3">
          <Link 
            to={`/vendors/${id}`}
            className="flex-1 text-center text-planero-pink hover:text-planero-pink-hover font-medium text-sm py-2 border border-planero-pink rounded-full transition-colors"
          >
            View Details
          </Link>
          <Button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="btn-primary rounded-full px-3"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
