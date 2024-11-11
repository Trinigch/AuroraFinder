// src/components/GeoapifyAutocomplete.tsx
import React, { useState, useEffect } from 'react';
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import axios from 'axios';

interface Location {
    lat: number;
    lon: number;
}

const GeoapifyAutocomplete: React.FC = () => {
    const [location, setLocation] = useState<Location | null>(null);
    const [apiKey, setApiKey] = useState<string | null>(null);

    useEffect(() => {
        const fetchApiKey = async () => {
            try {
                const response = await axios.get('/api/geoapify-key');
                setApiKey(response.data.apiKey);
            } catch (error) {
                console.error('Failed to retrieve Geoapify API key:', error);
            }
        };

        fetchApiKey();
    }, []);

    if (!apiKey) {
        return <p>Loading API Key...</p>;
    }

    const handlePlaceSelect = (value: any) => {
        if (value && value.properties) {
            setLocation({
                lat: value.properties.lat,
                lon: value.properties.lon,
            });
        }
    };

    return (
        <div>
            {apiKey && (
                <GeoapifyContext apiKey={apiKey}>
                    <GeoapifyGeocoderAutocomplete
                        placeholder="Enter address here"
                        placeSelect={handlePlaceSelect}
                    />
                </GeoapifyContext>
            )}
            {location && (
                <div>
                    <h3>Selected Location:</h3>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lon}</p>
                </div>
            )}
        </div>
    );
};

export default GeoapifyAutocomplete;