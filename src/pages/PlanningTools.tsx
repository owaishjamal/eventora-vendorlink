
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CheckCircle, CalendarDays, DollarSign, Users, Clipboard, HeartHandshake } from 'lucide-react';

const PlanningTools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Planning Tools</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay organized and on track with our comprehensive suite of event planning tools
            </p>
          </div>

          <Tabs defaultValue="checklist" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="checklist">Checklist</TabsTrigger>
              <TabsTrigger value="budget">Budget Tracker</TabsTrigger>
              <TabsTrigger value="guest">Guest Manager</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="checklist" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clipboard className="h-5 w-5 text-planero-pink" />
                    Event Checklist
                  </CardTitle>
                  <CardDescription>
                    Keep track of all your event planning tasks with our comprehensive checklist
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-3">12+ Months Before</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Decide on your budget</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Choose the date and time of your event</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Book your venue</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Create a guest list</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-3">8-10 Months Before</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Book your caterer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Hire a photographer/videographer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Book entertainment/music</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold mb-3">4-6 Months Before</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Order invitations and stationery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Arrange transportation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                          <span>Book accommodations for out-of-town guests</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button>Create Custom Checklist</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="budget" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-planero-pink" />
                    Budget Tracker
                  </CardTitle>
                  <CardDescription>
                    Manage and track your event budget easily with our budget planning tool
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold">Total Budget</h3>
                        <span className="text-xl font-bold">$20,000</span>
                      </div>
                      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-planero-pink" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span>$13,000 spent</span>
                        <span>$7,000 remaining</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-medium">V</span>
                          </div>
                          <div>
                            <p className="font-medium">Venue</p>
                            <p className="text-sm text-gray-500">Grand Ballroom</p>
                          </div>
                        </div>
                        <span className="font-semibold">$7,500</span>
                      </div>

                      <div className="flex justify-between items-center p-3 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-sm font-medium">C</span>
                          </div>
                          <div>
                            <p className="font-medium">Catering</p>
                            <p className="text-sm text-gray-500">Delicious Catering Co.</p>
                          </div>
                        </div>
                        <span className="font-semibold">$3,200</span>
                      </div>

                      <div className="flex justify-between items-center p-3 border-b">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 text-sm font-medium">P</span>
                          </div>
                          <div>
                            <p className="font-medium">Photography</p>
                            <p className="text-sm text-gray-500">Elegant Events Photography</p>
                          </div>
                        </div>
                        <span className="font-semibold">$2,300</span>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button>Create Budget Plan</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guest" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-planero-pink" />
                    Guest Manager
                  </CardTitle>
                  <CardDescription>
                    Organize your guest list, track RSVPs, and manage seating arrangements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg flex-1">
                        <h3 className="font-semibold mb-2">Guest Count</h3>
                        <div className="flex items-end gap-8">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-planero-pink">150</p>
                            <p className="text-sm text-gray-500">Invited</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-green-500">87</p>
                            <p className="text-sm text-gray-500">Confirmed</p>
                          </div>
                          <div className="text-center">
                            <p className="text-3xl font-bold text-red-500">12</p>
                            <p className="text-sm text-gray-500">Declined</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg flex-1">
                        <h3 className="font-semibold mb-2">Response Rate</h3>
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: '66%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm mt-2">
                          <span>66% responded</span>
                          <span>51 pending</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Recent Responses</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <div>
                            <p className="font-medium">John & Sarah Smith</p>
                            <p className="text-sm text-gray-500">2 guests</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Attending</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <div>
                            <p className="font-medium">Michael Johnson</p>
                            <p className="text-sm text-gray-500">1 guest</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Attending</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-2 bg-white rounded">
                          <div>
                            <p className="font-medium">Emily Davis</p>
                            <p className="text-sm text-gray-500">1 guest</p>
                          </div>
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">Declined</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button>Manage Guest List</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-planero-pink" />
                    Event Timeline
                  </CardTitle>
                  <CardDescription>
                    Create a detailed schedule for your event day to keep everything running smoothly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative border-l-2 border-planero-pink pl-6 py-2 ml-4 space-y-8">
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-planero-pink"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">4:00 PM</p>
                        <h3 className="font-semibold text-lg">Guest Arrival</h3>
                        <p className="text-gray-600">Guests begin to arrive and are greeted by staff</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-planero-pink"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">4:30 PM</p>
                        <h3 className="font-semibold text-lg">Ceremony Begins</h3>
                        <p className="text-gray-600">Formal ceremony starts with processional</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-planero-pink"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">5:30 PM</p>
                        <h3 className="font-semibold text-lg">Cocktail Hour</h3>
                        <p className="text-gray-600">Guests enjoy appetizers and drinks in the garden</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-planero-pink"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">6:30 PM</p>
                        <h3 className="font-semibold text-lg">Dinner Service</h3>
                        <p className="text-gray-600">Guests are seated for dinner in the main hall</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-planero-pink"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">8:00 PM</p>
                        <h3 className="font-semibold text-lg">Dancing & Entertainment</h3>
                        <p className="text-gray-600">Dance floor opens with first dances</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button>Create Custom Timeline</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Need Help Planning Your Event?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="gap-2" size="lg">
                <HeartHandshake size={18} />
                Connect with a Planner
              </Button>
              <Button variant="outline" size="lg">
                Browse Planning Guides
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningTools;
