
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorPricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '₹3,999',
      billing: 'per month',
      description: 'Perfect for new vendors looking to establish their presence',
      features: [
        'List 5 services or products',
        '10 leads per month',
        'Basic analytics',
        'Standard customer support',
        'Profile listing in 1 category',
      ],
      notIncluded: [
        'Featured in search results',
        'Direct messaging with clients',
        'Marketing tools',
        'Booking management',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹7,999',
      billing: 'per month',
      description: 'Ideal for established vendors looking to grow',
      features: [
        'List 15 services or products',
        '50 leads per month',
        'Advanced analytics',
        'Priority customer support',
        'Profile listing in 3 categories',
        'Featured in search results',
        'Direct messaging with clients',
      ],
      notIncluded: [
        'Marketing tools',
        'Booking management',
      ],
      cta: 'Upgrade Now',
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹14,999',
      billing: 'per month',
      description: 'For top-tier vendors seeking maximum exposure',
      features: [
        'Unlimited services or products',
        'Unlimited leads',
        'Comprehensive analytics & reports',
        '24/7 dedicated support',
        'Profile listing in all categories',
        'Featured in search results',
        'Direct messaging with clients',
        'Advanced marketing tools',
        'Booking & calendar management',
      ],
      notIncluded: [],
      cta: 'Go Premium',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vendor Pricing Plans</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan to showcase your services to couples planning their special day in Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${plan.popular ? 'border-planero-pink shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-32 bg-planero-pink text-white text-center text-sm py-1 rounded-full font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center pb-8 ${plan.popular ? 'pt-8' : 'pt-6'}`}>
                  <h3 className="text-lg font-medium text-gray-500">{plan.name}</h3>
                  <CardTitle className="text-4xl font-bold mt-2">{plan.price}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.billing}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-600 mb-6">{plan.description}</p>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check size={18} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-gray-400">
                        <X size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/vendor-signup" className="w-full">
                    <Button 
                      variant={plan.popular ? "default" : "outline"} 
                      className={`w-full ${plan.popular ? 'bg-planero-pink hover:bg-planero-pink-hover' : ''}`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How do I get started as a vendor?</h3>
                <p className="text-gray-600">
                  Getting started is easy! Choose a plan that fits your needs, complete your vendor profile with details about your services, upload high-quality photos, and start receiving inquiries from couples in Mumbai.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan later?</h3>
                <p className="text-gray-600">
                  Yes, you can change your plan at any time. If you upgrade mid-billing cycle, we'll prorate the difference. Downgrades will take effect at the start of your next billing period.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What are leads and how do they work?</h3>
                <p className="text-gray-600">
                  Leads are potential clients who have expressed interest in your services by viewing your profile, saving your listing, or contacting you directly. Each plan comes with a specific number of actionable leads per month.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer any discounts for annual payments?</h3>
                <p className="text-gray-600">
                  Yes! Save 20% when you choose annual billing for any of our plans. This option will be available during the checkout process.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">Still have questions about our vendor plans?</p>
              <Link to="/contact">
                <Button variant="outline">Contact Sales Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VendorPricing;
