import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';
import AuroraDisplay from '../components/AuroraDisplay';

interface Location {
  lat: number;
  long: number;
}

const AuroraFinder: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const handleLocationSelected = (locationData: Location) => {
    setLocation(locationData);
  };

  return (
    <div>
      <h1>Aurora Finder</h1>
      <div>
      <LocationInput onLocationSelected={handleLocationSelected} />
      </div>
      <div>
      <AuroraDisplay location={location} />
      </div>
    </div>
  );
};

export default AuroraFinder;