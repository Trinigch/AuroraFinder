import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';
import AuroraDisplay from '../components/AuroraDisplay';

interface Location {
  lat: number;
  lon: number; 
}

const AuroraFinder: React.FC = () => {

  const exampleLocation: Location = { lat: 64.8378, lon: -147.7164 };
  const [location, setLocation] = useState<Location | null>(exampleLocation);
  //const [location, setLocation] = useState<Location | null>(null);

  const handleLocationSelected = (locationData: Location) => {
    setLocation(locationData);
  };

  return (
    <div>
      <h1>Aurora Finder</h1>
      <LocationInput onLocationSelected={handleLocationSelected} />
      {location ? (
        <AuroraDisplay location={location} />
      ) : (
        <p>set location to see level of aurora</p>
      )}
    </div>
  );
};

export default AuroraFinder;