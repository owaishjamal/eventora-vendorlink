
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

interface SearchOption {
  id: string;
  category: string;
  name: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

const SearchDialog = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Search options - Focusing on Mumbai venues, vendors and services
  const searchOptions: SearchOption[] = [
    {
      id: 'venue-1',
      category: 'Venues',
      name: 'The Taj Mahal Palace',
      path: '/venues/1',
      description: 'Luxury hotel venue in Colaba, Mumbai',
      icon: <MapPin className="h-4 w-4" />
    },
    {
      id: 'venue-2',
      category: 'Venues',
      name: 'Juhu Beach Resort',
      path: '/venues/2',
      description: 'Beachfront venue in Juhu, Mumbai',
      icon: <MapPin className="h-4 w-4" />
    },
    {
      id: 'vendor-1',
      category: 'Vendors',
      name: 'Mumbai Moments Photography',
      path: '/vendors/photography',
      description: 'Top-rated photographers in Mumbai',
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'vendor-2',
      category: 'Vendors',
      name: 'Bollywood Beats Entertainment',
      path: '/vendors/entertainment',
      description: 'Wedding entertainment services in Mumbai',
      icon: <Users className="h-4 w-4" />
    },
    {
      id: 'page-1',
      category: 'Pages',
      name: 'Budget Calculator',
      path: '/planning-tools/budget-calculator',
      description: 'Plan your Mumbai wedding budget',
      icon: <Calendar className="h-4 w-4" />
    },
    {
      id: 'page-2',
      category: 'Pages',
      name: 'Wedding Checklist',
      path: '/planning-tools/wedding-checklist',
      description: 'Mumbai wedding planning checklist',
      icon: <Calendar className="h-4 w-4" />
    }
  ];

  // Filter options based on search query
  const filteredOptions = searchQuery.length > 0
    ? searchOptions.filter(option => 
        option.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchOptions;

  // Group options by category
  const groupedOptions = filteredOptions.reduce<Record<string, SearchOption[]>>((acc, option) => {
    if (!acc[option.category]) {
      acc[option.category] = [];
    }
    acc[option.category].push(option);
    return acc;
  }, {});

  const handleSelect = (option: SearchOption) => {
    navigate(option.path);
    setOpen(false);
    setSearchQuery('');
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search for venues, vendors, or planning tools in Mumbai..." 
        value={searchQuery}
        onValueChange={setSearchQuery}
      />
      <CommandList>
        <CommandEmpty>No results found in Mumbai.</CommandEmpty>
        {Object.entries(groupedOptions).map(([category, options]) => (
          <CommandGroup key={category} heading={category}>
            {options.map((option) => (
              <CommandItem 
                key={option.id} 
                onSelect={() => handleSelect(option)}
                className="flex items-center gap-2 py-2"
              >
                {option.icon}
                <div>
                  <p>{option.name}</p>
                  {option.description && <p className="text-xs text-muted-foreground">{option.description}</p>}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
