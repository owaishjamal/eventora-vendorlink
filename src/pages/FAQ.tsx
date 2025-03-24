
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Search } from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      id: 'general',
      label: 'General',
      questions: [
        {
          question: 'What is PlanEro?',
          answer: 'PlanEro is a comprehensive wedding and event planning platform based in Mumbai, India. We connect couples with top-rated vendors, venues, and planning tools to make organizing your special day stress-free and enjoyable.'
        },
        {
          question: 'Is PlanEro only for weddings?',
          answer: 'While our primary focus is on Indian weddings, PlanEro can be used to plan various types of events including engagements, anniversaries, corporate events, birthdays, and other celebrations throughout Mumbai and surrounding areas.'
        },
        {
          question: 'Is PlanEro available in other cities besides Mumbai?',
          answer: 'Currently, PlanEro is focused on serving the Mumbai metropolitan area, including Navi Mumbai and Thane. We have plans to expand to other major Indian cities in the future. Stay tuned for announcements!'
        },
        {
          question: 'How do I get started with PlanEro?',
          answer: 'Simply create a free account, then you can start exploring vendors, venues, and using our planning tools. Our event wizard can help guide you through the process based on your specific needs and budget.'
        }
      ]
    },
    {
      id: 'couples',
      label: 'For Couples',
      questions: [
        {
          question: 'Is it free to use PlanEro as a couple?',
          answer: 'Yes, using PlanEro is completely free for couples planning their events. You can create an account, browse vendors, use planning tools, and manage your event details at no cost.'
        },
        {
          question: 'How do I contact vendors through PlanEro?',
          answer: 'Once you\'ve found a vendor you\'re interested in, you can send them a message directly through our platform. You\'ll be notified when they respond, and you can continue the conversation until you decide to book their services.'
        },
        {
          question: 'Can I book vendors directly through PlanEro?',
          answer: 'Yes, you can book and pay for many vendors directly through our platform. This provides you with secure payment processing and booking guarantees. Some vendors may require in-person meetings before finalizing bookings for customized services.'
        },
        {
          question: 'What if I need to cancel a booking?',
          answer: 'Cancellation policies vary by vendor. When you book through PlanEro, the specific cancellation terms are clearly displayed before you confirm your booking. We recommend reviewing these carefully before proceeding.'
        }
      ]
    },
    {
      id: 'vendors',
      label: 'For Vendors',
      questions: [
        {
          question: 'How can I list my business on PlanEro?',
          answer: 'To list your business on PlanEro, click on "Join as Vendor" and complete the registration process. You\'ll need to provide details about your services, pricing, portfolio, and business information. Once approved, your listing will be visible to couples.'
        },
        {
          question: 'What are the fees for vendors?',
          answer: 'PlanEro offers various subscription plans for vendors based on your business needs. You can view our pricing plans on the Vendor Pricing page. We also charge a small commission on bookings made through our platform.'
        },
        {
          question: 'How does PlanEro ensure quality vendors?',
          answer: 'We have a thorough vetting process for all vendors joining our platform. This includes verification of business licenses, checking reviews from previous clients, and evaluating the quality of services provided. We also continuously monitor vendor ratings and feedback from couples.'
        },
        {
          question: 'How quickly will I receive payments for bookings?',
          answer: 'Payments for confirmed bookings are processed within 5-7 business days after the event is completed. For certain services requiring advance payments, a portion of the payment will be released as per the terms agreed upon.'
        }
      ]
    },
    {
      id: 'payments',
      label: 'Payments & Billing',
      questions: [
        {
          question: 'What payment methods are accepted?',
          answer: 'PlanEro accepts all major credit and debit cards, UPI payments, net banking, and wallet payments for transactions in India. International payments can be made via credit cards and PayPal.'
        },
        {
          question: 'Are there any hidden fees when booking vendors?',
          answer: 'No, PlanEro is completely transparent about all costs. The price you see is inclusive of our service fees. Any additional charges specific to vendors (like travel fees or overtime) will be clearly mentioned before you confirm your booking.'
        },
        {
          question: 'Can I get a refund if I\'m not satisfied with a vendor\'s service?',
          answer: 'PlanEro has a Vendor Guarantee Program that protects your bookings. If a vendor fails to deliver services as promised, you may be eligible for a partial or full refund depending on the circumstances. Please contact our support team within 48 hours of the event to report any issues.'
        },
        {
          question: 'How do I get an invoice for my payments?',
          answer: 'Invoices are automatically generated and sent to your registered email address after each successful payment. You can also access all your invoices in the Billing section of your account dashboard.'
        }
      ]
    }
  ];

  // Filter FAQ items based on search query
  const filterFAQs = () => {
    if (!searchQuery.trim()) return faqCategories;
    
    return faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(
        qa => qa.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
              qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  };

  const filteredFAQs = filterFAQs();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about planning your event in Mumbai with PlanEro
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for answers..." 
                className="pl-10 pr-4 py-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* FAQ Content */}
          {filteredFAQs.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="general">
                <TabsList className="w-full justify-start overflow-x-auto pb-2">
                  {filteredFAQs.map(category => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {filteredFAQs.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((qa, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                          <AccordionTrigger className="text-left font-medium px-4">
                            {qa.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 text-gray-600">
                            {qa.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No results found for "{searchQuery}"</p>
              <Button 
                variant="link" 
                className="mt-2"
                onClick={() => setSearchQuery('')}
              >
                Clear search
              </Button>
            </div>
          )}

          {/* Contact Support */}
          <div className="max-w-2xl mx-auto mt-16 bg-gray-50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary">Contact Support</Button>
              </Link>
              <Link to="/help">
                <Button variant="outline">Visit Help Center</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
