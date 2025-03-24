
import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from "@/hooks/use-toast";

const VendorSignup = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "We've received your vendor application! Our team will review it and get back to you soon.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Vendor Network</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reach more clients and grow your business by joining the PlanEro marketplace
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-gray-600">Complete the vendor application with your business details</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                <p className="text-gray-600">Our team will review your application within 48 hours</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Start Booking</h3>
                <p className="text-gray-600">Set up your profile and start receiving booking requests</p>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Vendor Application</CardTitle>
                <CardDescription>
                  Fill out the form below to apply as a vendor on PlanEro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Business Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input id="businessName" required placeholder="Your business name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="vendorType">Vendor Type</Label>
                        <Select required>
                          <SelectTrigger id="vendorType">
                            <SelectValue placeholder="Select vendor type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="photography">Photography</SelectItem>
                            <SelectItem value="catering">Catering</SelectItem>
                            <SelectItem value="flowers">Flowers & Decor</SelectItem>
                            <SelectItem value="music">Music & Entertainment</SelectItem>
                            <SelectItem value="cakes">Cakes & Desserts</SelectItem>
                            <SelectItem value="planning">Event Planning</SelectItem>
                            <SelectItem value="venue">Venue</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessDescription">Business Description</Label>
                      <Textarea 
                        id="businessDescription" 
                        required
                        placeholder="Tell us about your business, services, and what makes you unique" 
                        rows={4}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website">Website (Optional)</Label>
                        <Input id="website" type="url" placeholder="https://yourbusiness.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram (Optional)</Label>
                        <Input id="instagram" placeholder="@yourbusiness" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Primary Service Location</Label>
                      <Input id="location" required placeholder="City, State" />
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-semibold">Pricing & Availability</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="priceRange">Price Range</Label>
                        <Select required>
                          <SelectTrigger id="priceRange">
                            <SelectValue placeholder="Select price range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="$">$ - Budget-friendly</SelectItem>
                            <SelectItem value="$$">$$ - Mid-range</SelectItem>
                            <SelectItem value="$$$">$$$ - Premium</SelectItem>
                            <SelectItem value="$$$$">$$$$ - Luxury</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="availability">Typical Availability</Label>
                        <Select required>
                          <SelectTrigger id="availability">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays Only</SelectItem>
                            <SelectItem value="weekends">Weekends Only</SelectItem>
                            <SelectItem value="all">All Days</SelectItem>
                            <SelectItem value="limited">Limited/Seasonal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox id="terms" required />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-700 leading-snug"
                      >
                        I agree to the <a href="/terms" className="text-planero-pink underline">Terms of Service</a> and <a href="/privacy" className="text-planero-pink underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-planero-pink hover:bg-planero-pink-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorSignup;
