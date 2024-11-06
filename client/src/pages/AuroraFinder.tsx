import React, { useState } from 'react';
import LocationInput from '../components/LocationInput';
import AuroraDisplay from '../components/AuroraDisplay';

const AuroraFinder = () => {
  const [location, setLocation] = useState(null);

  const handleLocationSelected = (locationData) => {
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
