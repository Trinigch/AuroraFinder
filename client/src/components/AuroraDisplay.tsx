import React, { useEffect, useState } from 'react';

const AuroraDisplay = ({ location }) => {
  const [auroraData, setAuroraData] = useState(null);
  const [error, setError] = useState(null);

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
      <p>Probability: {auroraData.probability?.value}%</p>
    </div>
  );
};

export default AuroraDisplay;
