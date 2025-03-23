
import { useSearchParams } from 'react-router-dom';
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
import { Filter, Search, ChevronDown } from 'lucide-react';
import VendorCard from '../components/ui/VendorCard';

const Vendors = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Sample vendor data - in a real app, this would come from an API
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
      name: 'Luxe Catering Co.',
      category: 'Catering',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      rating: 4.9,
      reviewCount: 89,
      startingPrice: '$2,500',
      location: 'Los Angeles, CA',
      featured: true,
    },
    {
      id: 'vendor3',
      name: 'Bloom Florists',
      category: 'Florists',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      rating: 4.7,
      reviewCount: 56,
      startingPrice: '$800',
      location: 'Chicago, IL',
      featured: false,
    },
    {
      id: 'vendor4',
      name: 'Harmony Entertainment',
      category: 'Entertainment',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      rating: 4.6,
      reviewCount: 72,
      startingPrice: '$1,500',
      location: 'Miami, FL',
      featured: false,
    },
    {
      id: 'vendor5',
      name: 'Prestige Beauty',
      category: 'Beauty',
      image: '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      rating: 4.9,
      reviewCount: 112,
      startingPrice: '$350',
      location: 'Seattle, WA',
      featured: true,
    },
    {
      id: 'vendor6',
      name: 'Glorious Gifts',
      category: 'Gifts',
      image: '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
      rating: 4.5,
      reviewCount: 45,
      startingPrice: '$100',
      location: 'Austin, TX',
      featured: false,
    },
  ];

  // Filter vendors if there's a search query
  const filteredVendors = query 
    ? vendors.filter(v => 
        v.name.toLowerCase().includes(query.toLowerCase()) || 
        v.category.toLowerCase().includes(query.toLowerCase()) ||
        v.location.toLowerCase().includes(query.toLowerCase())
      )
    : vendors;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Vendors</h1>
            <p className="text-gray-600">
              {query ? `Search results for "${query}"` : 'Find the perfect vendors for your special event'}
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
                <Filter size={18} />
                <span>Filter</span>
                <ChevronDown size={18} />
              </button>
              <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
                <span>Category</span>
                <ChevronDown size={18} />
              </button>
              <button className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
                <span>Price</span>
                <ChevronDown size={18} />
              </button>
            </div>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search vendors..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-planero-pink/20 focus:border-planero-pink"
                  defaultValue={query}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredVendors.map((vendor) => (
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

export default Vendors;
