import React, { useEffect, useState } from 'react';

interface Location {
  lat: number;
  long: number;
}

interface AuroraData {
  probability?: {
    value: number;
    // Add other properties if needed
  };
  // Define other properties as needed based on API response structure
}

interface AuroraDisplayProps {
  location: Location | null;
}

const AuroraDisplay: React.FC<AuroraDisplayProps> = ({ location }) => {
  const [auroraData, setAuroraData] = useState<AuroraData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (location) {
      fetch(`/api/aurora-data?lat=${location.lat}&long=${location.long}`)
        .then(response => response.json())
        .then(data => setAuroraData(data))
        .catch(() => setError('Error fetching aurora data'));
    }
  }, [location]);

  if (error) return <div>{error}</div>;
  if (!auroraData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Aurora Forecast</h2>
      {auroraData.probability ? (
        <p>Probability: {auroraData.probability.value}%</p>
      ) : (
        <p>Probability data not available</p>
      )}
    </div>
  );
};

export default AuroraDisplay;