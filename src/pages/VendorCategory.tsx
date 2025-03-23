
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '../components/ui/pagination';
import { Filter, Search, ChevronDown, Settings } from 'lucide-react';
import VendorCard from '../components/ui/VendorCard';

const VendorCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // Category descriptions - in a real app, this would come from an API
  const categoryInfo = {
    'photography': {
      title: 'Photography',
      description: 'Capture every moment of your special day with our talented photographers.',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      count: 158
    },
    'beauty': {
      title: 'Beauty',
      description: 'Look and feel your best with our professional beauty services.',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      count: 97
    },
    'catering': {
      title: 'Catering',
      description: 'Delight your guests with exceptional food and beverage services.',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      count: 124
    },
    'florists': {
      title: 'Florists',
      description: 'Create a beautiful atmosphere with stunning floral arrangements.',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      count: 86
    },
    'transportation': {
      title: 'Transportation',
      description: 'Arrive in style with our elegant transportation services.',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      count: 52
    },
    'venues': {
      title: 'Venues',
      description: 'Find the perfect location for your dream event.',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      count: 205
    },
    'entertainment': {
      title: 'Entertainment',
      description: 'Keep your guests entertained with our diverse entertainment options.',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      count: 78
    },
    'gifts': {
      title: 'Gifts',
      description: 'Find unique and meaningful gifts for your special occasion.',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      count: 64
    }
  };
  
  // Get category info or provide default if category doesn't exist
  const currentCategory = category ? categoryInfo[category as keyof typeof categoryInfo] : {
    title: 'Category Not Found',
    description: 'Please select a valid category',
    image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
    count: 0
  };
  
  // Sample vendor data - in a real app, this would be filtered by category from an API
  const vendors = [
    {
      id: 'vendor1',
      name: 'Elegance Photography',
      category: 'Photography',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      rating: 4.8,
      reviewCount: 124,
      startingPrice: '$1,200',
      location: 'New York, NY',
      featured: true,
    },
    {
      id: 'vendor2',
      name: 'Capture Moments',
      category: 'Photography',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      rating: 4.7,
      reviewCount: 98,
      startingPrice: '$950',
      location: 'Boston, MA',
      featured: false,
    },
    {
      id: 'vendor3',
      name: 'Frame Perfect',
      category: 'Photography',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      rating: 4.9,
      reviewCount: 156,
      startingPrice: '$1,500',
      location: 'San Francisco, CA',
      featured: true,
    },
    {
      id: 'vendor4',
      name: 'Lens Masters',
      category: 'Photography',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      rating: 4.6,
      reviewCount: 87,
      startingPrice: '$1,100',
      location: 'Chicago, IL',
      featured: false,
    },
    {
      id: 'vendor5',
      name: 'Memory Makers',
      category: 'Photography',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      rating: 4.5,
      reviewCount: 65,
      startingPrice: '$800',
      location: 'Denver, CO',
      featured: false,
    },
    {
      id: 'vendor6',
      name: 'Artistic Visions',
      category: 'Photography',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      rating: 4.7,
      reviewCount: 112,
      startingPrice: '$1,300',
      location: 'Seattle, WA',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Category Hero */}
        <div className="relative h-64 bg-gray-200 overflow-hidden">
          <img 
            src={currentCategory.image} 
            alt={currentCategory.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentCategory.title} Vendors</h1>
              <p className="text-lg md:text-xl max-w-3xl">
                {currentCategory.description}
              </p>
              <div className="text-sm mt-2">
                <span className="font-medium">{currentCategory.count}</span> vendors available
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          {/* Filters and Sort */}
          <div className="bg-white shadow-sm rounded-xl p-4 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
                  <Filter size={18} />
                  <span>Filters</span>
                  <span className="bg-planero-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
                  <Settings size={18} />
                  <span>Sort by: Featured</span>
                  <ChevronDown size={18} />
                </button>
              </div>
              <div className="w-full md:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Search ${currentCategory.title} vendors...`}
                    className="w-full md:w-72 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-planero-pink/20 focus:border-planero-pink"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                id={vendor.id}
                name={vendor.name}
                category={vendor.category}
                image={vendor.image}
                rating={vendor.rating}
                reviewCount={vendor.reviewCount}
                startingPrice={vendor.startingPrice}
                location={vendor.location}
                featured={vendor.featured}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorCategory;
