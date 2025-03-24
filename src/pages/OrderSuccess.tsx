
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Calendar, ArrowRight, Download, Share2 } from 'lucide-react';

const OrderSuccess = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-lg text-gray-600">
                Your event vendors have been successfully booked. Check your email for confirmation details.
              </p>
            </div>
            
            <div className="bg-white border rounded-xl p-6 md:p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Booking Details</h2>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">Confirmed</span>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <p className="text-gray-600 mb-1">Booking Reference</p>
                <p className="font-medium text-lg">#PLE-2024-58472</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div>
                  <p className="text-gray-600 mb-1">Event Date</p>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-planero-pink" />
                    <p className="font-medium">November 15, 2024</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-1">Location</p>
                  <p className="font-medium">Rosewood Venue, San Francisco</p>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-1">Total Amount</p>
                  <p className="font-medium">$5,126.00 (Paid)</p>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-1">Payment Method</p>
                  <p className="font-medium">Credit Card (•••• 3456)</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Booked Vendors</h3>
                
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D" 
                        alt="Photography" 
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">Elegant Events Photography</p>
                        <p className="text-xs text-gray-500">4:00 PM - 9:00 PM</p>
                      </div>
                    </div>
                    <Link to="/vendors/1" className="text-planero-pink hover:text-planero-pink-hover font-medium text-sm flex items-center">
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                  
                  <div className="p-3 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww" 
                        alt="Catering" 
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">Delicious Catering Co.</p>
                        <p className="text-xs text-gray-500">120 guests</p>
                      </div>
                    </div>
                    <Link to="/vendors/2" className="text-planero-pink hover:text-planero-pink-hover font-medium text-sm flex items-center">
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="outline" className="flex-1 gap-2">
                <Download size={16} />
                Download Receipt
              </Button>
              
              <Button variant="outline" className="flex-1 gap-2">
                <Share2 size={16} />
                Share with Team
              </Button>
              
              <Button variant="outline" className="flex-1 gap-2">
                <Calendar size={16} />
                Add to Calendar
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">Need to make changes or have questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-planero-pink hover:bg-planero-pink-hover">
                  Contact Vendors
                </Button>
                
                <Link to="/profile/orders">
                  <Button variant="outline">
                    View All Orders
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
