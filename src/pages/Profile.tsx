
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import { UserCircle, Package, CreditCard, LogOut, Calendar, Check, ShoppingCart, MapPin, Clock } from 'lucide-react';

const Profile = () => {
  const { tab = 'account' } = useParams<{ tab?: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isUpdating, setIsUpdating] = useState(false);
  
  const updateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1000);
  };
  
  const handleLogout = () => {
    // Simulate logout
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    
    // Redirect to home page
    navigate('/');
  };
  
  // Mock order data
  const orders = [
    {
      id: "PLE-2024-58472",
      date: "November 15, 2024",
      status: "Confirmed",
      total: "$5,126.00",
      location: "Rosewood Venue, San Francisco",
      vendors: [
        {
          name: "Elegant Events Photography",
          category: "Photography",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          name: "Delicious Catering Co.",
          category: "Catering",
          image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww"
        }
      ]
    },
    {
      id: "PLE-2024-43651",
      date: "August 22, 2024",
      status: "Completed",
      total: "$3,780.00",
      location: "Golden Gate Park, San Francisco",
      vendors: [
        {
          name: "Bay Area DJs",
          category: "Entertainment",
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGp8ZW58MHx8MHx8fDA%3D"
        },
        {
          name: "Sweet Treats Bakery",
          category: "Cake & Desserts",
          image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNha2UlMjBzaG9wfGVufDB8fDB8fHww"
        }
      ]
    }
  ];
  
  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      name: "Personal Credit Card",
      last4: "3456",
      expiry: "08/27",
      type: "visa",
      default: true
    },
    {
      id: 2,
      name: "Business Credit Card",
      last4: "7890",
      expiry: "12/25",
      type: "mastercard",
      default: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 lg:w-80">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-planero-pink/10 text-planero-pink font-medium text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-xl">Jane Doe</h2>
                    <p className="text-gray-500">jane.doe@example.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border rounded-xl overflow-hidden">
                <Link 
                  to="/profile/account" 
                  className={`flex items-center gap-3 p-3 transition hover:bg-gray-50 ${tab === 'account' ? 'bg-gray-50 border-l-4 border-planero-pink pl-2' : ''}`}
                >
                  <UserCircle className={`w-5 h-5 ${tab === 'account' ? 'text-planero-pink' : 'text-gray-500'}`} />
                  <span className={tab === 'account' ? 'font-medium' : ''}>Account</span>
                </Link>
                
                <Link 
                  to="/profile/orders" 
                  className={`flex items-center gap-3 p-3 transition hover:bg-gray-50 ${tab === 'orders' ? 'bg-gray-50 border-l-4 border-planero-pink pl-2' : ''}`}
                >
                  <Package className={`w-5 h-5 ${tab === 'orders' ? 'text-planero-pink' : 'text-gray-500'}`} />
                  <span className={tab === 'orders' ? 'font-medium' : ''}>My Orders</span>
                </Link>
                
                <Link 
                  to="/profile/payment" 
                  className={`flex items-center gap-3 p-3 transition hover:bg-gray-50 ${tab === 'payment' ? 'bg-gray-50 border-l-4 border-planero-pink pl-2' : ''}`}
                >
                  <CreditCard className={`w-5 h-5 ${tab === 'payment' ? 'text-planero-pink' : 'text-gray-500'}`} />
                  <span className={tab === 'payment' ? 'font-medium' : ''}>Payment Methods</span>
                </Link>
                
                <button
                  className="w-full flex items-center gap-3 p-3 transition hover:bg-gray-50 text-left"
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5 text-gray-500" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {tab === 'account' && 'Account Information'}
                    {tab === 'orders' && 'My Orders'}
                    {tab === 'payment' && 'Payment Methods'}
                  </CardTitle>
                  <CardDescription>
                    {tab === 'account' && 'Manage your account details and preferences'}
                    {tab === 'orders' && 'Track and manage your bookings'}
                    {tab === 'payment' && 'Manage your payment methods'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {tab === 'account' && (
                    <form onSubmit={updateProfile} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="Jane" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main St" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" defaultValue="San Francisco" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" defaultValue="CA" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">Zip Code</Label>
                          <Input id="zipCode" defaultValue="94105" />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Change Password</Label>
                        <Input id="password" type="password" placeholder="Leave blank to keep current password" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="Leave blank to keep current password" />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          className="bg-planero-pink hover:bg-planero-pink-hover"
                          disabled={isUpdating}
                        >
                          {isUpdating ? "Updating..." : "Update Profile"}
                        </Button>
                      </div>
                    </form>
                  )}
                  
                  {tab === 'orders' && (
                    <div className="space-y-8">
                      {orders.map((order, index) => (
                        <div key={index} className="border rounded-xl overflow-hidden">
                          <div className="bg-gray-50 p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">Order #{order.id}</h3>
                                <span 
                                  className={`text-xs px-2 py-0.5 rounded-full ${
                                    order.status === 'Confirmed' 
                                      ? 'bg-green-100 text-green-700' 
                                      : 'bg-blue-100 text-blue-700'
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </div>
                              <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                <div className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  <span>{order.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  <span>{order.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{order.total}</p>
                            </div>
                          </div>
                          
                          <div className="p-4">
                            <p className="font-medium mb-3">Booked Vendors:</p>
                            
                            <div className="space-y-3">
                              {order.vendors.map((vendor, vIndex) => (
                                <div key={vIndex} className="flex items-center gap-3">
                                  <img 
                                    src={vendor.image} 
                                    alt={vendor.name} 
                                    className="w-12 h-12 object-cover rounded"
                                  />
                                  <div>
                                    <p className="font-medium">{vendor.name}</p>
                                    <p className="text-xs text-gray-500">{vendor.category}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-4 flex flex-wrap gap-2">
                              <Button size="sm" variant="outline" className="gap-1">
                                <ShoppingCart size={14} />
                                <span>View Order</span>
                              </Button>
                              {order.status === 'Confirmed' && (
                                <Button size="sm" variant="outline" className="gap-1">
                                  <Clock size={14} />
                                  <span>Modify</span>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {tab === 'payment' && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {paymentMethods.map((method) => (
                          <div key={method.id} className="border rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-8 rounded flex items-center justify-center ${
                                method.type === 'visa' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {method.type === 'visa' ? 'VISA' : 'MC'}
                              </div>
                              <div>
                                <p className="font-medium">{method.name}</p>
                                <p className="text-sm text-gray-500">•••• {method.last4} | Expires {method.expiry}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              {method.default && (
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                                  <Check size={12} />
                                  Default
                                </span>
                              )}
                              <div className="space-x-2">
                                <Button size="sm" variant="ghost">Edit</Button>
                                <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700 hover:bg-red-50">Remove</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="gap-2">
                        <CreditCard size={16} />
                        Add Payment Method
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
