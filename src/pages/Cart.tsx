
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Simulated cart data
interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  date?: string;
  location?: string;
  guests?: number;
  time?: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const vendorId = searchParams.get('vendor');
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching cart data
    const fetchCart = () => {
      // Simulate network request
      setTimeout(() => {
        // Sample data
        let items: CartItem[] = [
          {
            id: "1",
            name: "Elegant Events Photography",
            category: "Photography",
            price: 1200,
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
            date: "2024-11-15",
            location: "Rosewood Venue",
            guests: 120,
            time: "4:00 PM - 9:00 PM"
          }
        ];
        
        // If a vendor was just added, add it to the cart
        if (vendorId) {
          const newVendors: Record<string, CartItem> = {
            "2": {
              id: "2",
              name: "Delicious Catering Co.",
              category: "Catering",
              price: 3500,
              image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww",
              date: "2024-11-15",
              location: "Rosewood Venue",
              guests: 120
            },
            "3": {
              id: "3",
              name: "Bloom & Petal Florists",
              category: "Flowers & Decor",
              price: 1800,
              image: "https://images.unsplash.com/photo-1523694576729-96ddc44e0e11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3Jpc3R8ZW58MHx8MHx8fDA%3D",
              date: "2024-11-15",
              location: "Rosewood Venue"
            }
          };
          
          if (newVendors[vendorId]) {
            items.push(newVendors[vendorId]);
          }
        }
        
        setCartItems(items);
        setLoading(false);
      }, 800);
    };
    
    fetchCart();
  }, [vendorId]);
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + 50; // $50 service fee
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart</h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-gray-400">Loading cart...</div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any vendors or services yet.</p>
              <Button 
                onClick={() => navigate('/vendors')}
                className="bg-planero-pink hover:bg-planero-pink-hover"
              >
                Find Vendors
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/4">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{item.name}</h3>
                              <p className="text-planero-pink text-sm">{item.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-lg">${item.price.toLocaleString()}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            {item.date && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar size={14} />
                                <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                              </div>
                            )}
                            
                            {item.time && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock size={14} />
                                <span>{item.time}</span>
                              </div>
                            )}
                            
                            {item.location && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin size={14} />
                                <span>{item.location}</span>
                              </div>
                            )}
                            
                            {item.guests && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Users size={14} />
                                <span>{item.guests} guests</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4 flex justify-between items-center">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 px-2 h-8"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 size={16} className="mr-1" />
                              Remove
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="h-8"
                            >
                              Edit Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/vendors')}
                    className="gap-2"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${calculateSubtotal().toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span>$50.00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span>${calculateTax().toFixed(2)}</span>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-planero-pink hover:bg-planero-pink-hover"
                    onClick={() => navigate('/checkout')}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By proceeding, you agree to our <Link to="/terms" className="underline">Terms of Service</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>
                  </p>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
