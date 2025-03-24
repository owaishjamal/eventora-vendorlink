
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const BudgetCalculator = () => {
  const [totalBudget, setTotalBudget] = useState(1000000); // 10 Lakh INR default
  const [categories, setCategories] = useState([
    { name: 'Venue & Catering', percentage: 45, color: '#FF6B6B' },
    { name: 'Decoration & Flowers', percentage: 15, color: '#4ECDC4' },
    { name: 'Photography & Videography', percentage: 10, color: '#FFD166' },
    { name: 'Attire & Jewelry', percentage: 10, color: '#F9F871' },
    { name: 'Music & Entertainment', percentage: 7, color: '#6B5CA5' },
    { name: 'Invitations', percentage: 3, color: '#FF9E9E' },
    { name: 'Gifts & Favors', percentage: 5, color: '#54BAB9' },
    { name: 'Miscellaneous', percentage: 5, color: '#9ADCFF' },
  ]);

  const handleBudgetChange = (value: number) => {
    setTotalBudget(value);
  };

  const handlePercentageChange = (index: number, newPercentage: number) => {
    const newCategories = [...categories];
    
    // Calculate the change in percentage
    const oldPercentage = newCategories[index].percentage;
    const delta = newPercentage - oldPercentage;
    
    // If increasing percentage, reduce from others proportionally
    if (delta > 0) {
      const otherCategories = newCategories.filter((_, i) => i !== index);
      const totalOtherPercentage = otherCategories.reduce((sum, cat) => sum + cat.percentage, 0);
      
      newCategories.forEach((cat, i) => {
        if (i !== index) {
          cat.percentage -= (delta * cat.percentage) / totalOtherPercentage;
        }
      });
    } 
    // If decreasing percentage, add to others proportionally
    else if (delta < 0) {
      const otherCategories = newCategories.filter((_, i) => i !== index);
      const totalOtherPercentage = otherCategories.reduce((sum, cat) => sum + cat.percentage, 0);
      
      newCategories.forEach((cat, i) => {
        if (i !== index) {
          cat.percentage += (Math.abs(delta) * cat.percentage) / totalOtherPercentage;
        }
      });
    }
    
    newCategories[index].percentage = newPercentage;
    
    // Round all percentages to one decimal place and adjust to ensure 100%
    let totalPercentage = 0;
    newCategories.forEach(cat => {
      cat.percentage = Math.round(cat.percentage * 10) / 10;
      totalPercentage += cat.percentage;
    });
    
    if (totalPercentage !== 100) {
      const diff = 100 - totalPercentage;
      newCategories[newCategories.length - 1].percentage += diff;
    }
    
    setCategories(newCategories);
  };

  // Create data for pie chart
  const chartData = categories.map(cat => ({
    name: cat.name,
    value: Math.round(totalBudget * cat.percentage / 100),
    percentage: cat.percentage,
    color: cat.color
  }));

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
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Indian Wedding Budget Calculator</h1>
            <p className="text-lg text-gray-600">Plan your Mumbai wedding budget with our easy-to-use calculator</p>
          </div>

          {/* Budget Slider */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Total Wedding Budget</CardTitle>
              <CardDescription>Adjust your total budget using the slider below</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-center mb-2">{formatCurrency(totalBudget)}</h3>
                <Slider 
                  defaultValue={[totalBudget]} 
                  max={10000000} 
                  step={100000}
                  min={500000}
                  onValueChange={(value) => handleBudgetChange(value[0])}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>₹5 Lakh</span>
                  <span>₹1 Crore</span>
                </div>
              </div>
              
              <div className="text-center">
                <Input
                  type="number"
                  value={totalBudget}
                  onChange={(e) => handleBudgetChange(Number(e.target.value))}
                  className="max-w-xs mx-auto text-center font-bold"
                />
              </div>
            </CardContent>
          </Card>

          {/* Budget Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Budget Distribution</CardTitle>
                <CardDescription>Adjust the percentage allocation for each category</CardDescription>
              </CardHeader>
              <CardContent>
                {categories.map((category, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <label className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
                        {category.name}
                      </label>
                      <span className="font-medium">{category.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Slider
                        value={[category.percentage]}
                        min={0}
                        max={80}
                        step={0.5}
                        onValueChange={(value) => handlePercentageChange(index, value[0])}
                        className="flex-grow"
                      />
                      <div className="w-24 text-right font-medium">
                        {formatCurrency(Math.round(totalBudget * category.percentage / 100))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visual Breakdown</CardTitle>
                <CardDescription>See your budget allocation at a glance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [formatCurrency(value), 'Budget']}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips for Mumbai Weddings */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mumbai Wedding Budget Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Seasonal Pricing</h3>
                  <p className="text-gray-600">November to February is wedding season in Mumbai. Venues typically charge 15-25% more during this period. Consider a summer or monsoon wedding for better rates.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Location Matters</h3>
                  <p className="text-gray-600">Venues in South Mumbai and Bandra are typically more expensive. Consider venues in suburban areas like Powai or Thane for better value.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Catering Costs</h3>
                  <p className="text-gray-600">Mumbai catering costs vary widely. Budget ₹1,200-3,500 per plate depending on menu complexity and location.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Transportation</h3>
                  <p className="text-gray-600">Factor in Mumbai's traffic. Consider providing transportation or choosing venues near metro stations for guest convenience.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="btn-primary">Download Budget Plan</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetCalculator;
