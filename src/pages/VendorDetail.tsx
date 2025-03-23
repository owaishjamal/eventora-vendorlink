
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Calendar, Clock, MapPin, Star, Heart, Share2, ChevronRight, Users, DollarSign, Check } from 'lucide-react';

const VendorDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the vendor data based on the ID
  // For now, we'll use sample data
  const vendor = {
    id: 'vendor1',
    name: 'Elegance Photography',
    category: 'Photography',
    images: [
      '/lovable-uploads/a7321801-53a4-4199-8cc8-2774d33e88fa.png',
      '/lovable-uploads/5542d9cc-b700-412d-b1e3-2021f8e5f663.png',
    ],
    rating: 4.8,
    reviewCount: 124,
    startingPrice: '$1,200',
    location: 'New York, NY',
    description: 'Capturing your special moments with artistic flair and attention to detail. Our team of professional photographers specializes in wedding photography, engagement shoots, and event coverage.',
    packages: [
      {
        name: 'Basic Package',
        price: '$1,200',
        includes: [
          '6 hours of coverage',
          '1 photographer',
          'Online gallery',
          '100 edited photos',
        ]
      },
      {
        name: 'Premium Package',
        price: '$2,500',
        includes: [
          '10 hours of coverage',
          '2 photographers',
          'Online gallery',
          'Engagement shoot',
          '300 edited photos',
          'Printed album',
        ]
      },
      {
        name: 'Luxury Package',
        price: '$3,800',
        includes: [
          'Full day coverage',
          '2 photographers',
          'Drone footage',
          'Online gallery',
          'Engagement shoot',
          '500 edited photos',
          'Printed album',
          'Video highlights',
        ]
      }
    ],
    features: [
      'Professional photographers',
      'High-resolution images',
      'Quick turnaround time',
      'Custom editing',
      'Print release',
      'Online gallery',
    ],
    reviews: [
      {
        author: 'Sarah M.',
        date: 'June 15, 2023',
        rating: 5,
        content: 'Absolutely amazing! The team captured our wedding day perfectly. Every special moment was documented beautifully.'
      },
      {
        author: 'Michael T.',
        date: 'May 3, 2023',
        rating: 4,
        content: 'Great photographers with an eye for detail. Very professional and accommodating to our requests.'
      },
      {
        author: 'Jessica R.',
        date: 'April 12, 2023',
        rating: 5,
        content: 'Elegance Photography went above and beyond our expectations. The photos are stunning and capture the emotion of our day.'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 bg-gray-200 overflow-hidden">
          <img 
            src={vendor.images[0]} 
            alt={vendor.name} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-planero-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                {vendor.category}
              </span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm">{vendor.rating} ({vendor.reviewCount} reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{vendor.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{vendor.location}</span>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-8">
          {/* Action Bar */}
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
            <button className="px-6 py-3 bg-planero-pink hover:bg-planero-pink-hover text-white font-medium rounded-lg transition-colors">
              Add to Cart
            </button>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About {vendor.name}</h2>
                <p className="text-gray-700 mb-6">{vendor.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">What we offer</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {vendor.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-planero-pink mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Packages */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {vendor.packages.map((pkg, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-planero-pink hover:shadow-md transition-all">
                      <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-2xl font-bold text-planero-pink mb-4">{pkg.price}</p>
                      <ul className="space-y-2 mb-4">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <Check className="w-4 h-4 text-planero-pink mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-2 bg-planero-pink hover:bg-planero-pink-hover text-white font-medium rounded-lg transition-colors text-sm">
                        Select Package
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Reviews</h2>
                  <button className="text-planero-pink hover:text-planero-pink-hover font-medium flex items-center">
                    See all reviews
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {vendor.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium">{review.author}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-28">
                <h3 className="text-xl font-bold mb-4">Book {vendor.name}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="font-medium">{vendor.startingPrice}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium">{vendor.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Average booking</div>
                      <div className="font-medium">50-150 guests</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Availability</div>
                      <div className="font-medium">Check calendar</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <div className="text-sm text-gray-500">Response time</div>
                      <div className="font-medium">Within 24 hours</div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-planero-pink hover:bg-planero-pink-hover text-white font-medium rounded-lg transition-colors mb-3">
                  Check Availability
                </button>
                <button className="w-full py-3 bg-white border border-planero-pink text-planero-pink hover:bg-planero-pink/5 font-medium rounded-lg transition-colors">
                  Message Vendor
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDetail;
