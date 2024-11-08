import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';
import AuroraDisplay from '../components/AuroraDisplay';
import Location from '../interfaces/Location'

const AuroraFinder: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);

  const handleLocationSelected = (locationData: Location) => {
    setLocation(locationData);
  };

  return (
    <div>
      <h1>Aurora Finder</h1>
      <LocationInput onLocationSelected={handleLocationSelected} />
      <AuroraDisplay location={location} />
    </div>
  );
};

export default AuroraFinder;