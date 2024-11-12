 import React, { useState } from 'react';
//import { fetchAuroraData } from '../services/auroraService';
//import AuroraDataComponent from './AuroraDataComponent';
import AuroraDisplay from './AuroraDisplay';
import Location from '../interfaces/Location';

const LocationInput: React.FC = () => {
    const [lat, setLat] = useState<number | null>(null);
    const [long, setLong] = useState<number | null>(null);
    //const [auroraData, setAuroraData] = useState(null);
    const [locationData, setLocationData] = useState<Location | null>(null);

    const handleFetchData = async () => {
        if (lat === null || long === null) {
            alert("Please enter a valid latitude and longitude.");
            return;
        }
        try {
            let convertToLocation: Location = {lat: lat, lon: long}
            await setLocationData(convertToLocation);
            
        } catch (error) {
            console.error("Failed to fetch aurora data.");
        }
    };

    return (
        <>
        <div>
            <h3>Enter Location</h3>
            <input
                type="number"
                placeholder="Latitude"
                value={lat ?? ""}
                onChange={(e) => setLat(parseFloat(e.target.value))}
            />
            <input
                type="number"
                placeholder="Longitude"
                value={long ?? ""}
                onChange={(e) => setLong(parseFloat(e.target.value))}
            />
            <button onClick={handleFetchData}>Get Aurora Data</button>

            {/* Display the fetched aurora data */}
            {locationData && <AuroraDisplay location={locationData}/>}
        </div>
        </>
    );
};

export default LocationInput;
