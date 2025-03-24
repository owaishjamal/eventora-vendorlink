
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, Check, PenSquare, Users, Wallet } from 'lucide-react';
import VendorCard from '@/components/ui/VendorCard';

type EventForm = {
  eventType: string;
  date: string;
  location: string;
  guests: string;
  budget: string;
  preferences: string[];
}

const EventPlanner = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [eventForm, setEventForm] = useState<EventForm>({
    eventType: '',
    date: '',
    location: '',
    guests: '',
    budget: '',
    preferences: []
  });
  
  // Simulated recommended vendors based on form inputs
  const recommendedVendors = [
    {
      id: "1",
      name: "Elegant Events Photography",
      category: "Photography",
      rating: 4.8,
      reviews: 122,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      name: "Delicious Catering Co.",
      category: "Catering",
      rating: 4.7,
      reviews: 98,
      priceRange: "$$",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww",
    },
    {
      id: "3",
      name: "Bloom & Petal Florists",
      category: "Flowers & Decor",
      rating: 4.9,
      reviews: 87,
      priceRange: "$$$",
      image: "https://images.unsplash.com/photo-1523694576729-96ddc44e0e11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3Jpc3R8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field: keyof EventForm, value: string) => {
    setEventForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Perfect Event</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tell us about your event and we'll recommend the perfect vendors for you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 1 ? 'bg-planero-pink text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <PenSquare size={18} />
                  </div>
                  <span className="text-sm mt-2">Event Type</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-planero-pink' : 'bg-gray-200'}`}></div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 2 ? 'bg-planero-pink text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <CalendarDays size={18} />
                  </div>
                  <span className="text-sm mt-2">Details</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 3 ? 'bg-planero-pink' : 'bg-gray-200'}`}></div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 3 ? 'bg-planero-pink text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Wallet size={18} />
                  </div>
                  <span className="text-sm mt-2">Budget</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${currentStep >= 4 ? 'bg-planero-pink' : 'bg-gray-200'}`}></div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= 4 ? 'bg-planero-pink text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    <Check size={18} />
                  </div>
                  <span className="text-sm mt-2">Recommendations</span>
                </div>
              </div>
            </div>

            {/* Step 1: Event Type */}
            {currentStep === 1 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>What type of event are you planning?</CardTitle>
                  <CardDescription>
                    Select the type of event to get personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Wedding', 'Birthday', 'Corporate Event', 'Anniversary', 'Baby Shower', 'Graduation'].map(type => (
                      <Button
                        key={type}
                        variant={eventForm.eventType === type ? "default" : "outline"}
                        className="h-24 flex flex-col justify-center"
                        onClick={() => handleInputChange('eventType', type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button 
                      onClick={handleNext} 
                      disabled={!eventForm.eventType}
                      className="bg-planero-pink hover:bg-planero-pink-hover"
                    >
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Event Details */}
            {currentStep === 2 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Tell us about your event details</CardTitle>
                  <CardDescription>
                    This helps us recommend the right vendors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Event Date</Label>
                        <Input 
                          id="date" 
                          type="date" 
                          value={eventForm.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          placeholder="City, State" 
                          value={eventForm.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select 
                        value={eventForm.guests} 
                        onValueChange={(value) => handleInputChange('guests', value)}
                      >
                        <SelectTrigger id="guests">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 guests</SelectItem>
                          <SelectItem value="51-100">51-100 guests</SelectItem>
                          <SelectItem value="101-200">101-200 guests</SelectItem>
                          <SelectItem value="201-500">201-500 guests</SelectItem>
                          <SelectItem value="500+">500+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button 
                      onClick={handleNext} 
                      disabled={!eventForm.date || !eventForm.location || !eventForm.guests}
                      className="bg-planero-pink hover:bg-planero-pink-hover"
                    >
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Budget */}
            {currentStep === 3 && (
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>What's your budget for this event?</CardTitle>
                  <CardDescription>
                    This helps us find vendors that match your budget
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select 
                        value={eventForm.budget} 
                        onValueChange={(value) => handleInputChange('budget', value)}
                      >
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="$">$ - Economy (Under $5,000)</SelectItem>
                          <SelectItem value="$$">$$ - Moderate ($5,000 - $15,000)</SelectItem>
                          <SelectItem value="$$$">$$$ - Luxury ($15,000 - $30,000)</SelectItem>
                          <SelectItem value="$$$$">$$$$ - Premium (Above $30,000)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>What's most important to you?</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {['Quality', 'Price', 'Availability', 'Experience', 'Reviews', 'Style'].map(pref => (
                          <Button
                            key={pref}
                            type="button"
                            variant={eventForm.preferences.includes(pref) ? "default" : "outline"}
                            onClick={() => {
                              if (eventForm.preferences.includes(pref)) {
                                setEventForm(prev => ({
                                  ...prev,
                                  preferences: prev.preferences.filter(p => p !== pref)
                                }));
                              } else {
                                setEventForm(prev => ({
                                  ...prev,
                                  preferences: [...prev.preferences, pref]
                                }));
                              }
                            }}
                            className="h-12"
                          >
                            {pref}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button 
                      onClick={handleNext} 
                      disabled={!eventForm.budget}
                      className="bg-planero-pink hover:bg-planero-pink-hover"
                    >
                      Get Recommendations
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Recommendations */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Your Event Summary</CardTitle>
                    <CardDescription>
                      Here's a summary of your event details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6">
                      <div>
                        <div className="text-sm text-gray-500">Event Type</div>
                        <div className="font-medium">{eventForm.eventType}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Date</div>
                        <div className="font-medium">{eventForm.date}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-medium">{eventForm.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Guests</div>
                        <div className="font-medium">{eventForm.guests}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="font-medium">{eventForm.budget}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Preferences</div>
                        <div className="font-medium">{eventForm.preferences.join(', ')}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={handleBack}>
                        Edit Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Recommended Vendors for Your Event</h2>
                  
                  <Tabs defaultValue="all">
                    <TabsList className="mb-6">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="venues">Venues</TabsTrigger>
                      <TabsTrigger value="catering">Catering</TabsTrigger>
                      <TabsTrigger value="photography">Photography</TabsTrigger>
                      <TabsTrigger value="decor">Decor</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recommendedVendors.map((vendor, index) => (
                          <VendorCard 
                            key={index}
                            id={vendor.id}
                            name={vendor.name}
                            category={vendor.category}
                            rating={vendor.rating}
                            reviews={vendor.reviews}
                            image={vendor.image}
                            priceRange={vendor.priceRange}
                          />
                        ))}
                      </div>
                      
                      <div className="text-center mt-10">
                        <p className="text-gray-600 mb-4">Looking for more options?</p>
                        <Button 
                          onClick={() => navigate('/vendors')}
                          className="bg-planero-pink hover:bg-planero-pink-hover"
                        >
                          Browse All Vendors
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="venues" className="animate-fade-in">
                      <div className="flex justify-center items-center h-40">
                        <p className="text-gray-500">Check back soon for venue recommendations!</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="catering" className="animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <VendorCard 
                          id="2"
                          name="Delicious Catering Co."
                          category="Catering"
                          rating={4.7}
                          reviews={98}
                          image="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww"
                          priceRange="$$"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="photography" className="animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <VendorCard 
                          id="1"
                          name="Elegant Events Photography"
                          category="Photography"
                          rating={4.8}
                          reviews={122}
                          image="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D"
                          priceRange="$$$"
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="decor" className="animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <VendorCard 
                          id="3"
                          name="Bloom & Petal Florists"
                          category="Flowers & Decor"
                          rating={4.9}
                          reviews={87}
                          image="https://images.unsplash.com/photo-1523694576729-96ddc44e0e11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3Jpc3R8ZW58MHx8MHx8fDA%3D"
                          priceRange="$$$"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventPlanner;
