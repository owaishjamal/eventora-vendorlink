
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
  category: string;
  timeframe: string;
}

const WeddingChecklist = () => {
  // Initial checklist data with Indian wedding specific tasks
  const initialChecklist: ChecklistItem[] = [
    // 10-12 Months Before
    { id: '1', task: 'Set a budget for your wedding', completed: false, category: 'Planning', timeframe: '10-12 months' },
    { id: '2', task: 'Decide on wedding date (check with pandit for auspicious dates)', completed: false, category: 'Planning', timeframe: '10-12 months' },
    { id: '3', task: 'Book venue for wedding ceremony and reception', completed: false, category: 'Venue', timeframe: '10-12 months' },
    { id: '4', task: 'Start creating guest list', completed: false, category: 'Planning', timeframe: '10-12 months' },
    { id: '5', task: 'Book pandit or officiant', completed: false, category: 'Ceremony', timeframe: '10-12 months' },
    { id: '6', task: 'Begin researching vendors (photographer, caterer, etc.)', completed: false, category: 'Vendors', timeframe: '10-12 months' },
    { id: '7', task: 'Book a wedding planner if desired', completed: false, category: 'Planning', timeframe: '10-12 months' },
    
    // 8-9 Months Before
    { id: '8', task: 'Start shopping for wedding outfits (bride and groom)', completed: false, category: 'Attire', timeframe: '8-9 months' },
    { id: '9', task: 'Book photographer and videographer', completed: false, category: 'Vendors', timeframe: '8-9 months' },
    { id: '10', task: 'Book caterer and decide on menu', completed: false, category: 'Food', timeframe: '8-9 months' },
    { id: '11', task: 'Book decorators', completed: false, category: 'Decor', timeframe: '8-9 months' },
    { id: '12', task: 'Begin planning mehendi and sangeet events', completed: false, category: 'Events', timeframe: '8-9 months' },
    
    // 6-7 Months Before
    { id: '13', task: 'Book entertainment (DJ, band, performers for sangeet)', completed: false, category: 'Entertainment', timeframe: '6-7 months' },
    { id: '14', task: 'Arrange accommodations for out-of-town guests', completed: false, category: 'Guests', timeframe: '6-7 months' },
    { id: '15', task: 'Plan and book honeymoon', completed: false, category: 'Honeymoon', timeframe: '6-7 months' },
    { id: '16', task: 'Order wedding invitations', completed: false, category: 'Stationery', timeframe: '6-7 months' },
    { id: '17', task: 'Select and book mehendi artist', completed: false, category: 'Beauty', timeframe: '6-7 months' },
    
    // 4-5 Months Before
    { id: '18', task: 'Finalize wedding outfits and accessories', completed: false, category: 'Attire', timeframe: '4-5 months' },
    { id: '19', task: 'Schedule trials with makeup artist and hairstylist', completed: false, category: 'Beauty', timeframe: '4-5 months' },
    { id: '20', task: 'Choose wedding jewelry', completed: false, category: 'Attire', timeframe: '4-5 months' },
    { id: '21', task: 'Select outfits for bridal party', completed: false, category: 'Attire', timeframe: '4-5 months' },
    { id: '22', task: 'Send out save-the-dates', completed: false, category: 'Stationery', timeframe: '4-5 months' },
    
    // 2-3 Months Before
    { id: '23', task: 'Mail wedding invitations', completed: false, category: 'Stationery', timeframe: '2-3 months' },
    { id: '24', task: 'Arrange transportation for wedding day', completed: false, category: 'Logistics', timeframe: '2-3 months' },
    { id: '25', task: 'Plan pre-wedding rituals (haldi, etc.)', completed: false, category: 'Events', timeframe: '2-3 months' },
    { id: '26', task: 'Confirm all vendor arrangements', completed: false, category: 'Vendors', timeframe: '2-3 months' },
    { id: '27', task: 'Purchase wedding rings', completed: false, category: 'Jewelry', timeframe: '2-3 months' },
    
    // 1 Month Before
    { id: '28', task: 'Confirm final guest count', completed: false, category: 'Guests', timeframe: '1 month' },
    { id: '29', task: 'Create seating chart for reception', completed: false, category: 'Planning', timeframe: '1 month' },
    { id: '30', task: 'Final fitting for wedding outfits', completed: false, category: 'Attire', timeframe: '1 month' },
    { id: '31', task: 'Prepare welcome bags for out-of-town guests', completed: false, category: 'Guests', timeframe: '1 month' },
    
    // 1-2 Weeks Before
    { id: '32', task: 'Confirm final timeline with all vendors', completed: false, category: 'Logistics', timeframe: '1-2 weeks' },
    { id: '33', task: 'Prepare payment envelopes for vendors', completed: false, category: 'Logistics', timeframe: '1-2 weeks' },
    { id: '34', task: 'Pack for honeymoon', completed: false, category: 'Honeymoon', timeframe: '1-2 weeks' },
    { id: '35', task: 'Finalize wedding day emergency kit', completed: false, category: 'Logistics', timeframe: '1-2 weeks' },
    
    // 1 Day Before
    { id: '36', task: 'Attend rehearsal if applicable', completed: false, category: 'Ceremony', timeframe: '1 day' },
    { id: '37', task: 'Get good night\'s sleep', completed: false, category: 'Self-care', timeframe: '1 day' },
    
    // Wedding Day
    { id: '38', task: 'Eat breakfast', completed: false, category: 'Self-care', timeframe: 'Day of' },
    { id: '39', task: 'Allow plenty of time for hair and makeup', completed: false, category: 'Beauty', timeframe: 'Day of' },
    { id: '40', task: 'Enjoy your special day!', completed: false, category: 'Celebration', timeframe: 'Day of' },
  ];

  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);

  const timeframes = ['10-12 months', '8-9 months', '6-7 months', '4-5 months', '2-3 months', '1 month', '1-2 weeks', '1 day', 'Day of'];

  const toggleCompleted = (id: string) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const getProgressPercentage = (timeframe: string) => {
    const itemsInTimeframe = checklist.filter(item => item.timeframe === timeframe);
    const completedItems = itemsInTimeframe.filter(item => item.completed);
    return itemsInTimeframe.length > 0 
      ? Math.round((completedItems.length / itemsInTimeframe.length) * 100) 
      : 0;
  };

  const getOverallProgress = () => {
    const completedItems = checklist.filter(item => item.completed);
    return Math.round((completedItems.length / checklist.length) * 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Indian Wedding Checklist</h1>
            <p className="text-lg text-gray-600">Keep track of all your wedding planning tasks</p>
          </div>

          {/* Overall Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Planning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Overall Completion</span>
                  <span className="text-sm font-medium">{getOverallProgress()}%</span>
                </div>
                <Progress value={getOverallProgress()} className="h-2" />
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {timeframes.map(timeframe => (
                  <div key={timeframe} className="space-y-1">
                    <div className="text-xs font-medium">{timeframe}</div>
                    <Progress value={getProgressPercentage(timeframe)} className="h-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Checklist Tabs */}
          <Tabs defaultValue="10-12 months">
            <TabsList className="flex flex-wrap mb-6">
              {timeframes.map(timeframe => (
                <TabsTrigger key={timeframe} value={timeframe} className="text-xs md:text-sm">
                  {timeframe}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {timeframes.map(timeframe => (
              <TabsContent key={timeframe} value={timeframe}>
                <Card>
                  <CardHeader>
                    <CardTitle>{timeframe} Before Wedding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {checklist
                        .filter(item => item.timeframe === timeframe)
                        .map(item => (
                          <div 
                            key={item.id} 
                            className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <Checkbox 
                              id={item.id} 
                              checked={item.completed}
                              onCheckedChange={() => toggleCompleted(item.id)}
                              className="mt-1"
                            />
                            <div className="flex-grow">
                              <label 
                                htmlFor={item.id}
                                className={`cursor-pointer ${item.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
                              >
                                {item.task}
                              </label>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Indian Wedding Specific Tips */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Mumbai Wedding Planning Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Monsoon Considerations</h3>
                  <p className="text-gray-600">If your wedding falls during Mumbai's monsoon season (June-September), always have a backup indoor venue.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Traffic Planning</h3>
                  <p className="text-gray-600">Mumbai traffic can be unpredictable. Schedule extra buffer time between venues and consider providing transportation for guests.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Permits</h3>
                  <p className="text-gray-600">Check if your venue requires permits for late-night events, loud music, or fireworks, which are common for Mumbai weddings.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Local Vendors</h3>
                  <p className="text-gray-600">Mumbai has specialty markets like Crawford Market for decorations and Zaveri Bazaar for jewelry. Visit 3-4 months before your wedding.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button className="btn-primary">Download Checklist</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WeddingChecklist;
