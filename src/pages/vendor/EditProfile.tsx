
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock vendor data
  const [vendorData, setVendorData] = useState({
    name: 'Mumbai Moments Photography',
    email: 'contact@mumbaimoments.com',
    phone: '+91 9876543210',
    address: '123 Film Street, Andheri West, Mumbai',
    description: 'We specialize in capturing beautiful wedding moments across Mumbai and beyond. Our team has over 10 years of experience in wedding photography and videography.',
    category: 'photography',
    website: 'www.mumbaimoments.com',
    instagram: 'mumbai_moments',
    founded: '2012',
    team: '8 photographers, 4 videographers',
    coverageAreas: 'Mumbai, Pune, Goa',
    languages: 'Hindi, English, Marathi'
  });

  const handleInputChange = (field: string, value: string) => {
    setVendorData({
      ...vendorData,
      [field]: value
    });
  };

  const handleSave = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
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
              <h1 className="text-2xl md:text-3xl font-bold">Edit Profile</h1>
              <p className="text-gray-500">Update your business information</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/vendor-dashboard')}>
              Back to Dashboard
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>Your business logo or photo</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60" alt="Profile" />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Upload New Image</Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Cover Photo</CardTitle>
                  <CardDescription>Your business banner image</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                      alt="Cover" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button variant="outline" className="w-full">Change Cover Photo</Button>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>Edit your vendor profile details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Business Name</Label>
                        <Input 
                          id="name" 
                          value={vendorData.name} 
                          onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select 
                          defaultValue={vendorData.category}
                          onValueChange={(value) => handleInputChange('category', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="photography">Photography</SelectItem>
                            <SelectItem value="videography">Videography</SelectItem>
                            <SelectItem value="beauty">Beauty & Makeup</SelectItem>
                            <SelectItem value="catering">Catering</SelectItem>
                            <SelectItem value="venue">Venue</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                            <SelectItem value="decoration">Decoration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={vendorData.email} 
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          value={vendorData.phone} 
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        value={vendorData.address} 
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Business Description</Label>
                      <Textarea 
                        id="description" 
                        rows={4} 
                        value={vendorData.description} 
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input 
                          id="website" 
                          value={vendorData.website} 
                          onChange={(e) => handleInputChange('website', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input 
                          id="instagram" 
                          value={vendorData.instagram} 
                          onChange={(e) => handleInputChange('instagram', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="founded">Year Founded</Label>
                        <Input 
                          id="founded" 
                          value={vendorData.founded} 
                          onChange={(e) => handleInputChange('founded', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="team">Team Size</Label>
                        <Input 
                          id="team" 
                          value={vendorData.team} 
                          onChange={(e) => handleInputChange('team', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverageAreas">Coverage Areas</Label>
                      <Input 
                        id="coverageAreas" 
                        value={vendorData.coverageAreas} 
                        onChange={(e) => handleInputChange('coverageAreas', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages</Label>
                      <Input 
                        id="languages" 
                        value={vendorData.languages} 
                        onChange={(e) => handleInputChange('languages', e.target.value)}
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => navigate('/vendor-dashboard')}>
                        Cancel
                      </Button>
                      <Button onClick={handleSave} disabled={isLoading}>
                        {isLoading ? 'Saving...' : 'Save Changes'}
                      </Button>
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

export default EditProfile;
