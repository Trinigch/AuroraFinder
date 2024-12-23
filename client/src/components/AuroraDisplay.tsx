import React, { useEffect, useState } from 'react';

interface Location {
  lat: number;
  lon: number;
}

interface AuroraData {
  probability?: {
    calculated: {
      value: number;
    }
  },
  ace: {
    colour: {
      kp: string;
    }
  }
  // Add other properties if needed
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
      fetch(`/api/aurora/aurora-data?lat=${location.lat}&long=${location.lon}`)
        .then(response => response.json())
        .then(data => setAuroraData(data))
        .catch(() => setError('Error fetching aurora data'));
    }
  }, [location]);

  if (error) return <div>{error}</div>;
  if (!auroraData) return <div>Loading...</div>;

  return (
    <div>
      <div className='find-container'>
      <h2>Aurora Forecast</h2>
      <p>Intenstity: {auroraData.ace.colour.kp}</p>
      {auroraData.probability ? (
        <p>Probability: {auroraData.probability?.calculated.value}%</p>
      ) : (
        <p>Probability data not available</p>
      )}
      </div>
      <div className='fig-container'>
        <img className='find-img-aurora' src='http://auroramax.phys.ucalgary.ca/recent/recent_1080p.jpg' alt='a view of auroras from canada' />
        <figcaption>A view of auroras in Canada</figcaption>
      </div>
    </div>
  );
};

export default AuroraDisplay;