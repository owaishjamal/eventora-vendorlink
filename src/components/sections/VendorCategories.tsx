
import CategoryButton from '../ui/CategoryButton';
import { Camera, User, Music, Utensils, Flower, Car, Home, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorCategories = () => {
  const categories = [
    { 
      name: 'Photography', 
      icon: <Camera className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/photography' 
    },
    { 
      name: 'Beauty', 
      icon: <User className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/beauty' 
    },
    { 
      name: 'Catering', 
      icon: <Utensils className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/catering' 
    },
    { 
      name: 'Florists', 
      icon: <Flower className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/florists' 
    },
    { 
      name: 'Transportation', 
      icon: <Car className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/transportation' 
    },
    { 
      name: 'Venues', 
      icon: <Home className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/venues' 
    },
    { 
      name: 'Entertainment', 
      icon: <Music className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/entertainment' 
    },
    { 
      name: 'Gifts', 
      icon: <Gift className="w-6 h-6 text-planero-gray group-hover:text-planero-pink transition-colors" />, 
      link: '/vendors/category/gifts' 
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build your vendor team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through top-rated professionals in every category to create your perfect event team.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {categories.map((category, index) => (
            <CategoryButton 
              key={index}
              name={category.name}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/vendors" 
            className="inline-flex items-center text-planero-pink hover:text-planero-pink-hover font-medium"
          >
            View all vendor categories
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VendorCategories;
