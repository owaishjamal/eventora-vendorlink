
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Invitations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Perfect Wedding Invitations</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from hundreds of customizable designs in your style and budget for Indian weddings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Traditional wedding invitation" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Traditional Indian</h3>
                <p className="text-gray-600 mb-4">
                  Classic designs featuring traditional Indian motifs and patterns
                </p>
                <Link to="/planning-tools/invitations/traditional">
                  <Button variant="outline" className="w-full">View Designs</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1524048824421-51d2958dc634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern wedding invitation" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Modern Fusion</h3>
                <p className="text-gray-600 mb-4">
                  Contemporary designs blending modern aesthetics with Indian elements
                </p>
                <Link to="/planning-tools/invitations/modern">
                  <Button variant="outline" className="w-full">View Designs</Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital wedding invitation" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Digital Invites</h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly digital invitations with RSVP tracking and QR codes
                </p>
                <Link to="/planning-tools/invitations/digital">
                  <Button variant="outline" className="w-full">View Designs</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-planero-cream rounded-xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Make Your Invitations Truly Unique</h2>
              <p className="text-gray-700 mb-8">
                All our designs can be fully customized with your colors, photos, and wording. Perfect for Mumbai weddings and all Indian ceremonies.
              </p>
              <Button size="lg">Start Designing Now</Button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Invitation Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-planero-pink/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-planero-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Online RSVP Tracking</h3>
                  <p className="text-gray-600">
                    Track responses easily with digital RSVP management
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-planero-pink/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-planero-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">QR Code Integration</h3>
                  <p className="text-gray-600">
                    Add QR codes linking to your wedding website
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-planero-pink/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-planero-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Multiple Indian Languages</h3>
                  <p className="text-gray-600">
                    Create bilingual invitations in English and regional languages
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-planero-pink/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-planero-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Premium Printing Options</h3>
                  <p className="text-gray-600">
                    High-quality printing with luxurious paper and finishing options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Invitations;
