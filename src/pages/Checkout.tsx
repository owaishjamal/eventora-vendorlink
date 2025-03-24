
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Building, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h1>
            <p className="text-gray-600">Complete your booking with just a few more steps</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    
                    <Tabs defaultValue="credit-card">
                      <TabsList className="grid grid-cols-2 mb-6">
                        <TabsTrigger value="credit-card" className="flex items-center gap-2">
                          <CreditCard size={16} />
                          Credit Card
                        </TabsTrigger>
                        <TabsTrigger value="bank-transfer" className="flex items-center gap-2">
                          <Building size={16} />
                          Bank Transfer
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="credit-card" className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" required placeholder="1234 5678 9012 3456" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" required placeholder="MM/YY" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" required placeholder="123" />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="bank-transfer" className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-md">
                          <p className="text-sm text-blue-700">
                            You'll receive bank transfer instructions after clicking "Complete Booking"
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="accountName">Account Holder Name</Label>
                          <Input id="accountName" required />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" required />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="zip">Zip Code</Label>
                          <Input id="zip" required />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex items-start space-x-2 mb-6">
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
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Complete Booking"}
                </Button>
              </form>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="sticky top-28">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">Order Summary</h3>
                  
                  <div className="mb-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D" 
                            alt="Photography" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Elegant Events Photography</p>
                          <p className="text-xs text-gray-500">Photography</p>
                        </div>
                      </div>
                      <span>$1,200</span>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdGVyaW5nfGVufDB8fDB8fHww" 
                            alt="Catering" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Delicious Catering Co.</p>
                          <p className="text-xs text-gray-500">Catering</p>
                        </div>
                      </div>
                      <span>$3,500</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>$4,700.00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Fee</span>
                      <span>$50.00</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span>$376.00</span>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>$5,126.00</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-md flex items-start gap-3">
                    <ShieldCheck className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <div className="text-sm text-gray-600">
                      <p className="font-medium text-gray-800 mb-1">Secure Booking Guarantee</p>
                      <p>Your payment is protected with our secure payment system and vendor verification.</p>
                    </div>
                  </div>
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

export default Checkout;
