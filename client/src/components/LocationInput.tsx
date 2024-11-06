import React, { useRef, useEffect } from 'react';

const LocationInput = ({ onLocationSelected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const location = {
        lat: place.geometry.location.lat(),
        long: place.geometry.location.lng(),
      };
      onLocationSelected(location);
    });
  }, []);

  return <input ref={inputRef} placeholder="Enter your location" />;
};

export default LocationInput;
