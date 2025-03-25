
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, MessageSquare, Calendar, Settings, Users, Package, Star, BarChart2, Edit, PlusCircle } from 'lucide-react';

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for bookings
  const recentBookings = [
    { id: 1, client: 'Sharma Family', event: 'Wedding', date: '2023-10-15', status: 'confirmed', amount: '₹85,000' },
    { id: 2, client: 'Patel Family', event: 'Engagement', date: '2023-10-28', status: 'pending', amount: '₹45,000' },
    { id: 3, client: 'Singh Family', event: 'Anniversary', date: '2023-11-05', status: 'confirmed', amount: '₹65,000' },
    { id: 4, client: 'Gupta Family', event: 'Wedding', date: '2023-11-20', status: 'confirmed', amount: '₹95,000' }
  ];
  
  // Mock data for upcoming events
  const upcomingEvents = [
    { id: 1, client: 'Sharma Family', event: 'Wedding', date: '2023-10-15', location: 'Grand Hyatt, Mumbai' },
    { id: 2, client: 'Singh Family', event: 'Anniversary', date: '2023-11-05', location: 'Taj Lands End, Mumbai' },
    { id: 3, client: 'Gupta Family', event: 'Wedding', date: '2023-11-20', location: 'JW Marriott, Juhu' }
  ];
  
  // Mock data for revenue chart
  const revenueData = [
    { name: 'Jan', revenue: 325000 },
    { name: 'Feb', revenue: 450000 },
    { name: 'Mar', revenue: 520000 },
    { name: 'Apr', revenue: 480000 },
    { name: 'May', revenue: 600000 },
    { name: 'Jun', revenue: 750000 },
    { name: 'Jul', revenue: 850000 },
    { name: 'Aug', revenue: 920000 },
    { name: 'Sep', revenue: 980000 },
    { name: 'Oct', revenue: 870000 },
    { name: 'Nov', revenue: 790000 },
    { name: 'Dec', revenue: 680000 }
  ];
  
  // Mock data for messages
  const recentMessages = [
    { id: 1, sender: 'Ananya Sharma', message: 'Hi, I\'m interested in your photography services for a wedding in December.', date: '2h ago', read: false },
    { id: 2, sender: 'Rahul Patel', message: 'Thanks for the quote. Can we discuss the package details?', date: '5h ago', read: true },
    { id: 3, sender: 'Priya Singh', message: 'What dates do you have available in November?', date: '1d ago', read: true }
  ];

  // Mock data for services
  const services = [
    {
      id: 1,
      name: 'Basic Wedding Photography Package',
      description: 'Full-day coverage with one photographer, 300+ edited digital photos, online gallery.',
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      bookings: 12,
      isPopular: true
    },
    {
      id: 2,
      name: 'Premium Wedding Photography Package',
      description: 'Full-day coverage with two photographers, engagement shoot, 500+ edited digital photos, wedding album.',
      price: '₹75,000',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1580&q=80',
      bookings: 8,
      isPopular: false
    },
    {
      id: 3,
      name: 'Destination Wedding Package',
      description: 'Three-day coverage with two photographers, pre-wedding shoot, 800+ edited digital photos, premium albums, travel included.',
      price: '₹1,50,000',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      bookings: 3,
      isPopular: false
    }
  ];

  // Format currency for Indian Rupees
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60" alt="Vendor" />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Vendor Dashboard</h1>
                <p className="text-gray-500">Welcome back, Mumbai Moments Photography</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/vendor/settings">
                <Button variant="outline" className="gap-2">
                  <Settings size={16} />
                  Settings
                </Button>
              </Link>
              <Link to="/vendor/edit-profile">
                <Button className="gap-2">
                  <Edit size={16} />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                    <h3 className="text-2xl font-bold mt-1">₹9,80,000</h3>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <ArrowUpRight size={16} className="mr-1" /> +12% from last month
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart2 size={24} className="text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Bookings</p>
                    <h3 className="text-2xl font-bold mt-1">24</h3>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <ArrowUpRight size={16} className="mr-1" /> +8% from last month
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar size={24} className="text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Review Rating</p>
                    <h3 className="text-2xl font-bold mt-1">4.8/5</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Based on 156 reviews
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star size={24} className="text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Your monthly revenue for the year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis 
                            tickFormatter={(value) => 
                              new Intl.NumberFormat('en-IN', { 
                                notation: 'compact',
                                compactDisplay: 'short',
                                currency: 'INR'
                              }).format(value)
                            } 
                          />
                          <Tooltip 
                            formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                          />
                          <Bar dataKey="revenue" fill="#FF6B6B" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your scheduled events for the next 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                          <div className="bg-gray-100 text-gray-700 rounded-lg h-12 w-12 flex items-center justify-center font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{event.client}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar size={14} className="mr-1" />
                              {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Package size={14} className="mr-1" />
                              {event.event}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Details</Button>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline">View All Events</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Your most recent booking inquiries and confirmations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Client</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Event</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Amount</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-500">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentBookings.map((booking) => (
                            <tr key={booking.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">{booking.client}</td>
                              <td className="py-3 px-4">{booking.event}</td>
                              <td className="py-3 px-4">{new Date(booking.date).toLocaleDateString('en-IN')}</td>
                              <td className="py-3 px-4">{booking.amount}</td>
                              <td className="py-3 px-4">
                                <Badge variant={booking.status === 'confirmed' ? 'default' : 'outline'}>
                                  {booking.status}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <Button variant="ghost" size="sm">View</Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Manage all your booking requests and confirmed events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500 py-8">Bookings content will be implemented here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Stay in touch with your clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMessages.map((message) => (
                      <div key={message.id} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <Avatar>
                          <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{message.sender}</h4>
                            <span className="text-xs text-gray-500">{message.date}</span>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{message.message}</p>
                        </div>
                        {!message.read && (
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline">View All Messages</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="services">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Services & Packages</CardTitle>
                    <CardDescription>Manage what you offer to clients</CardDescription>
                  </div>
                  <Link to="/vendor/services">
                    <Button className="gap-2">
                      <PlusCircle size={16} />
                      Manage Services
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <Card key={service.id} className="overflow-hidden">
                        <div className="aspect-video relative">
                          <img 
                            src={service.image} 
                            alt={service.name} 
                            className="w-full h-full object-cover"
                          />
                          {service.isPopular && (
                            <Badge className="absolute top-2 right-2 bg-yellow-500">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-lg mb-1">{service.name}</h3>
                          <p className="text-gray-500 text-sm mb-2 line-clamp-2">{service.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold">{service.price}</span>
                            <span className="text-sm text-gray-500">{service.bookings} bookings</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Understand your business performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8">
                    <div className="rounded-lg border p-6 aspect-video bg-center bg-cover" style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80')`
                    }}>
                      <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm text-white">
                        <h3 className="text-2xl font-bold mb-2">Detailed Analytics Coming Soon</h3>
                        <p className="mb-4">We're working on comprehensive analytics features to help you grow your business.</p>
                        <Button variant="outline" className="text-white border-white hover:text-black hover:bg-white">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorDashboard;
