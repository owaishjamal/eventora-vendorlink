
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { Pencil, Trash2, Plus, ImagePlus, Tag, Check, X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  isPopular: boolean;
  isActive: boolean;
  features: string[];
}

const ManageServices = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);
  const [isAddServiceDialogOpen, setIsAddServiceDialogOpen] = useState(false);
  const [newFeature, setNewFeature] = useState('');
  
  // Mock services data
  const [services, setServices] = useState<Service[]>([
    {
      id: '1',
      name: 'Basic Wedding Photography Package',
      description: 'Full-day coverage with one photographer, 300+ edited digital photos, online gallery.',
      price: '₹35,000',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
      isPopular: true,
      isActive: true,
      features: [
        'One photographer',
        '8 hours coverage',
        '300+ edited digital photos',
        'Online gallery',
        'Photo delivery in 3 weeks'
      ]
    },
    {
      id: '2',
      name: 'Premium Wedding Photography Package',
      description: 'Full-day coverage with two photographers, engagement shoot, 500+ edited digital photos, wedding album.',
      price: '₹75,000',
      image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1580&q=80',
      isPopular: false,
      isActive: true,
      features: [
        'Two photographers',
        '12 hours coverage',
        'Engagement photo session',
        '500+ edited digital photos',
        'Premium wedding album',
        'Photo delivery in 2 weeks'
      ]
    },
    {
      id: '3',
      name: 'Destination Wedding Package',
      description: 'Three-day coverage with two photographers, pre-wedding shoot, 800+ edited digital photos, premium albums, travel included.',
      price: '₹1,50,000',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      isPopular: false,
      isActive: true,
      features: [
        'Two photographers',
        'Three-day coverage',
        'Pre-wedding photo session',
        '800+ edited digital photos',
        'Premium wedding album + parents albums',
        'Travel expenses included',
        'Photo delivery in 4 weeks'
      ]
    }
  ]);

  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    name: '',
    description: '',
    price: '',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    isPopular: false,
    isActive: true,
    features: []
  });

  const handleDeleteService = (id: string) => {
    setServiceToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDeleteService = () => {
    if (serviceToDelete) {
      setServices(services.filter(service => service.id !== serviceToDelete));
      setIsDeleteDialogOpen(false);
      setServiceToDelete(null);
      toast({
        title: "Service deleted",
        description: "The service has been successfully deleted.",
      });
    }
  };

  const handleToggleActive = (id: string) => {
    setServices(services.map(service => 
      service.id === id 
        ? { ...service, isActive: !service.isActive } 
        : service
    ));
    
    toast({
      title: "Service updated",
      description: "Service visibility has been updated.",
    });
  };

  const handleTogglePopular = (id: string) => {
    setServices(services.map(service => 
      service.id === id 
        ? { ...service, isPopular: !service.isPopular } 
        : service
    ));
  };

  const handleInputChange = (field: keyof Omit<Service, 'id'>, value: string | boolean) => {
    setNewService({
      ...newService,
      [field]: value
    });
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewService({
        ...newService,
        features: [...newService.features, newFeature.trim()]
      });
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setNewService({
      ...newService,
      features: newService.features.filter((_, i) => i !== index)
    });
  };

  const handleAddService = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newId = (services.length + 1).toString();
      setServices([...services, { ...newService, id: newId }]);
      setIsLoading(false);
      setIsAddServiceDialogOpen(false);
      setNewService({
        name: '',
        description: '',
        price: '',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        isPopular: false,
        isActive: true,
        features: []
      });
      toast({
        title: "Service added",
        description: "Your new service has been successfully added.",
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
              <h1 className="text-2xl md:text-3xl font-bold">Manage Services</h1>
              <p className="text-gray-500">Create and manage the services you offer</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/vendor-dashboard')}>
                Back to Dashboard
              </Button>
              <Dialog open={isAddServiceDialogOpen} onOpenChange={setIsAddServiceDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus size={16} />
                    Add New Service
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Service</DialogTitle>
                    <DialogDescription>
                      Create a new service to offer to your clients.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Service Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter service name"
                        value={newService.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your service"
                        rows={3}
                        value={newService.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          placeholder="₹25,000"
                          value={newService.price}
                          onChange={(e) => handleInputChange('price', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="active">Status</Label>
                        <div className="flex items-center justify-between h-10 px-3 rounded-md border">
                          <span className="text-sm">Active</span>
                          <Switch
                            checked={newService.isActive}
                            onCheckedChange={(checked) => handleInputChange('isActive', checked)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Service Image</Label>
                      <div className="flex items-center gap-2">
                        <div className="h-20 w-32 rounded-md overflow-hidden border">
                          <img 
                            src={newService.image} 
                            alt="Service preview" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <Button variant="outline" className="gap-2">
                          <ImagePlus size={16} />
                          Upload Image
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Features</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a feature"
                          value={newFeature}
                          onChange={(e) => setNewFeature(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddFeature();
                            }
                          }}
                        />
                        <Button variant="outline" onClick={handleAddFeature}>
                          <Plus size={16} />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {newService.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="gap-1 px-2 py-1">
                            {feature}
                            <X 
                              size={14} 
                              className="cursor-pointer ml-1" 
                              onClick={() => handleRemoveFeature(index)}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={newService.isPopular}
                        onCheckedChange={(checked) => handleInputChange('isPopular', checked)}
                      />
                      <Label htmlFor="popular">Mark as Popular</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddServiceDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddService} disabled={isLoading || !newService.name || !newService.price}>
                      {isLoading ? 'Adding...' : 'Add Service'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <Card key={service.id} className={!service.isActive ? "opacity-70" : ""}>
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-48 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{service.name}</h3>
                        <p className="text-gray-500 mt-1">{service.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1" onClick={() => handleToggleActive(service.id)}>
                          {service.isActive ? (
                            <>
                              <Check size={14} />
                              Active
                            </>
                          ) : (
                            <>
                              <X size={14} />
                              Inactive
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Pencil size={14} />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700" 
                          onClick={() => handleDeleteService(service.id)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="gap-1">
                        <Tag size={12} />
                        {service.price}
                      </Badge>
                      {service.isPopular && (
                        <Badge variant="default" className="bg-yellow-500">Popular</Badge>
                      )}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check size={16} className="text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <CardFooter className="p-0 mt-4 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Switch 
                          checked={service.isPopular} 
                          onCheckedChange={() => handleTogglePopular(service.id)}
                        />
                        <span className="text-sm">Mark as popular</span>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this service? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteService}>
              Delete Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default ManageServices;
