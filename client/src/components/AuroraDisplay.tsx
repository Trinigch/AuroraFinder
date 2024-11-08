import React, { useEffect, useState } from 'react';

interface Location {
  lat: number;
  lon: number;
}

interface AuroraData {
  date?: string;
  kp?: number;
}

interface AuroraDisplayProps {
  location: Location | null;
}

const AuroraDisplay: React.FC<AuroraDisplayProps> = ({ location }) => {
  const [auroraData, setAuroraData] = useState<AuroraData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (location) {
      console.log('Fetching aurora data for:', location);  // Verificar que las coordenadas están correctas

      fetch('/api/aurora-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lat: location.lat, lon: location.lon }),
      })
        .then(response => response.json())
      
     
        .then(data => {
          console.log("Received data from server:", data); // Este console.log muestra la respuesta recibida
          setAuroraData(data);
        })
        
        .catch(() => setError('Error fetching aurora data'));
    }
  }, [location]);

  if (error) return <div>{error}</div>;
  if (!auroraData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Aurora Forecast</h2>
      <p><strong>Date:</strong> {auroraData.date || 'N/A'}</p>
      <p><strong>Activity Level (Kp Index):</strong> {auroraData.kp || 'N/A'}</p>
    </div>
  );
};

export default AuroraDisplay;