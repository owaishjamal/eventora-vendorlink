
import { createContext, useContext, useState, ReactNode } from 'react';

// List of Tier 1 cities in India
export const TIER_1_CITIES = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
];

type LocationContextType = {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
  cities: string[];
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLocation, setCurrentLocation] = useState('Mumbai');

  const value = {
    currentLocation,
    setCurrentLocation,
    cities: TIER_1_CITIES,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
