
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Registry = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Registry</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Give your guests one place to browse your registry with cash funds, experiences, and gifts from top stores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1561486008-2cfef92b8b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Registry gifts" 
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">One Registry for Everything</h2>
              <p className="text-gray-600 mb-6">
                Create a universal registry that includes items from any store, experiences, cash funds for your honeymoon, and charitable donations.
              </p>
              <Button className="w-full md:w-auto">Create Your Registry</Button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Registry Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Add Items From Anywhere</h3>
                <p className="text-gray-600">
                  Add gifts from any online store with our universal registry tool
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Group Gifting</h3>
                <p className="text-gray-600">
                  Allow guests to contribute to big-ticket items together
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Cash Funds</h3>
                <p className="text-gray-600">
                  Create cash funds for honeymoon, home down payment, or anything else
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Create Your Registry?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              It only takes a few minutes to set up your perfect wedding registry
            </p>
            <Link to="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Registry;
