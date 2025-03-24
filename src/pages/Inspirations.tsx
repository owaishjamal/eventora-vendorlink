
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Share2, Bookmark, ExternalLink } from 'lucide-react';

const Inspirations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'holiday', name: 'Holiday Party' },
    { id: 'baby', name: 'Baby Shower' },
  ];
  
  const inspirations = [
    {
      id: 1,
      title: 'Elegant Garden Wedding',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      likes: 245,
      categories: ['wedding'],
      saved: false,
    },
    {
      id: 2,
      title: 'Modern Corporate Event Setup',
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww',
      likes: 128,
      categories: ['corporate'],
      saved: true,
    },
    {
      id: 3,
      title: 'Rustic Barn Wedding',
      image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFybiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D',
      likes: 312,
      categories: ['wedding'],
      saved: false,
    },
    {
      id: 4,
      title: 'Colorful Birthday Party',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D',
      likes: 189,
      categories: ['birthday'],
      saved: false,
    },
    {
      id: 5,
      title: 'Minimalist Wedding Theme',
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D',
      likes: 276,
      categories: ['wedding'],
      saved: true,
    },
    {
      id: 6,
      title: 'Winter Holiday Party',
      image: 'https://images.unsplash.com/photo-1482575832494-7f2a9b8d468f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbGlkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D',
      likes: 154,
      categories: ['holiday'],
      saved: false,
    },
    {
      id: 7,
      title: 'Elegant Baby Shower',
      image: 'https://images.unsplash.com/photo-1544709446-0659bca2bc82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMHNob3dlcnxlbnwwfHwwfHx8MA%3D%3D',
      likes: 208,
      categories: ['baby'],
      saved: false,
    },
    {
      id: 8,
      title: 'Tech Conference Setup',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
      likes: 132,
      categories: ['corporate'],
      saved: true,
    },
    {
      id: 9,
      title: 'Beachside Wedding',
      image: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      likes: 298,
      categories: ['wedding'],
      saved: false,
    },
    {
      id: 10,
      title: 'Children\'s Birthday Celebration',
      image: 'https://images.unsplash.com/photo-1611048268516-e7c1e899ad06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBiaXJ0aGRheXxlbnwwfHwwfHx8MA%3D%3D',
      likes: 176,
      categories: ['birthday'],
      saved: false,
    },
    {
      id: 11,
      title: 'Holiday Office Party',
      image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwaG9saWRheSUyMHBhcnR5fGVufDB8fDB8fHww',
      likes: 143,
      categories: ['holiday', 'corporate'],
      saved: false,
    },
    {
      id: 12,
      title: 'Gender Reveal Baby Shower',
      image: 'https://images.unsplash.com/photo-1623184505322-33cb261cc035?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VuZGVyJTIwcmV2ZWFsfGVufDB8fDB8fHww',
      likes: 215,
      categories: ['baby'],
      saved: true,
    },
  ];
  
  // Filter inspirations based on the active filter
  const filteredInspirations = activeFilter === 'all' 
    ? inspirations 
    : inspirations.filter(inspiration => inspiration.categories.includes(activeFilter));

  const [savedItems, setSavedItems] = useState<number[]>(
    inspirations.filter(item => item.saved).map(item => item.id)
  );

  const toggleSave = (id: number) => {
    if (savedItems.includes(id)) {
      setSavedItems(savedItems.filter(itemId => itemId !== id));
    } else {
      setSavedItems([...savedItems, id]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Event Inspirations</h1>
            <p className="text-lg text-gray-600">
              Discover beautiful ideas to make your event unique and memorable
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <Button 
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"} 
                className={`rounded-full ${activeFilter === filter.id ? "bg-planero-pink hover:bg-planero-pink-hover" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </Button>
            ))}
          </div>

          {/* Inspirations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredInspirations.map((inspiration) => (
              <Card key={inspiration.id} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={inspiration.image} 
                    alt={inspiration.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                      onClick={() => toggleSave(inspiration.id)}
                    >
                      <Bookmark 
                        size={16} 
                        className={savedItems.includes(inspiration.id) ? "fill-planero-pink text-planero-pink" : ""} 
                      />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <Share2 size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg mb-1">{inspiration.title}</h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-gray-500 hover:text-planero-pink"
                    >
                      <Heart size={18} />
                      <span className="ml-1 text-xs">{inspiration.likes}</span>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-wrap gap-1">
                      {inspiration.categories.map((category, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                      ))}
                    </div>
                    <Button variant="link" size="sm" className="p-0 h-auto">
                      <ExternalLink size={14} className="mr-1" />
                      <span className="text-xs">View</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInspirations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No inspirations found for this category</p>
              <Button 
                variant="link" 
                className="mt-2"
                onClick={() => setActiveFilter('all')}
              >
                View all inspirations
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {filteredInspirations.length > 0 && (
            <div className="text-center mt-10">
              <Button variant="outline">Load More Inspirations</Button>
            </div>
          )}

          {/* Create your own inspiration */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-3">Have an event idea to share?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Share your own event inspirations with our community and help others create memorable experiences
            </p>
            <Button>Share Your Inspiration</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inspirations;
