
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Bell, Lock, User, Globe, CreditCard, Mail } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    bookingAlerts: true,
    messageAlerts: true,
    marketingEmails: false,
    profileVisibility: 'public',
    currency: 'inr',
    language: 'en',
  });

  const handleSwitchChange = (field: string) => {
    setSettings({
      ...settings,
      [field]: !settings[field as keyof typeof settings]
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setSettings({
      ...settings,
      [field]: value
    });
  };

  const handleSave = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings updated",
        description: "Your settings have been successfully updated.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Account Settings</h1>
              <p className="text-gray-500">Manage your account preferences</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/vendor-dashboard')}>
              Back to Dashboard
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2 pt-2">
                    <div className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900">
                      <Bell className="h-5 w-5" />
                      <span className="text-sm font-medium">Notifications</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors">
                      <Lock className="h-5 w-5" />
                      <span className="text-sm font-medium">Security</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors">
                      <CreditCard className="h-5 w-5" />
                      <span className="text-sm font-medium">Billing</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors">
                      <Globe className="h-5 w-5" />
                      <span className="text-sm font-medium">Preferences</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors">
                      <User className="h-5 w-5" />
                      <span className="text-sm font-medium">Account</span>
                    </div>
                  </nav>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Settings
                  </CardTitle>
                  <CardDescription>Control how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Email Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Booking Notifications</Label>
                          <p className="text-sm text-gray-500">
                            Receive email when you get a new booking
                          </p>
                        </div>
                        <Switch
                          checked={settings.bookingAlerts}
                          onCheckedChange={() => handleSwitchChange('bookingAlerts')}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Message Notifications</Label>
                          <p className="text-sm text-gray-500">
                            Receive email when you get a new message
                          </p>
                        </div>
                        <Switch
                          checked={settings.messageAlerts}
                          onCheckedChange={() => handleSwitchChange('messageAlerts')}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Marketing Emails</Label>
                          <p className="text-sm text-gray-500">
                            Receive emails about new features and promotions
                          </p>
                        </div>
                        <Switch
                          checked={settings.marketingEmails}
                          onCheckedChange={() => handleSwitchChange('marketingEmails')}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Display Settings
                  </CardTitle>
                  <CardDescription>Control how your profile appears to others</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="profileVisibility">Profile Visibility</Label>
                        <Select 
                          defaultValue={settings.profileVisibility}
                          onValueChange={(value) => handleSelectChange('profileVisibility', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="unlisted">Unlisted</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select 
                          defaultValue={settings.currency}
                          onValueChange={(value) => handleSelectChange('currency', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                            <SelectItem value="usd">US Dollar ($)</SelectItem>
                            <SelectItem value="eur">Euro (€)</SelectItem>
                            <SelectItem value="gbp">British Pound (£)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select 
                          defaultValue={settings.language}
                          onValueChange={(value) => handleSelectChange('language', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="hi">Hindi</SelectItem>
                            <SelectItem value="mr">Marathi</SelectItem>
                            <SelectItem value="ta">Tamil</SelectItem>
                            <SelectItem value="te">Telugu</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline" onClick={() => navigate('/vendor-dashboard')}>
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save Settings'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
