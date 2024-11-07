import AuroraDisplay from "../components/AuroraDisplay";
import LocationInput from "../components/LocationInput";
import { useState } from 'react';
const Find = () => {
    // Handler to be called when a location is selected
    
    const [long, setLong] = useState(0);
    const [lat, setLat] = useState(0);

    const handleLocationSelected = (locationData: { lat: number, long: number }) => {
        // Save the location data to the user profile or app state
        setLat(locationData.lat);
        setLong(locationData.long);
        console.log("Selected location:", locationData);
    };

    
    return (
        <>
            <div id="place-picker-box">
                <div id="place-picker-container">
                    {/* Pass handleLocationSelected as the required onLocationSelected prop */}
                    <LocationInput onLocationSelected={handleLocationSelected} />
                </div>
            </div>
            <div className='container'>
                <AuroraDisplay location={{lat, long}}/>
            </div>
        </>
    );
}

export default Find;
