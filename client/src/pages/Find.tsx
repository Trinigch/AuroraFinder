import AuroraDisplay from "../components/AuroraDisplay";
import LocationInput from "../components/NewLocationInput";
import { useState } from 'react';
import Location from "../interfaces/Location";
import GeoapifyAutocomplete from '../components/GeoApify';

const Find = () => {

    // Handler to be called when a location is selected
    const [location, setLocation] = useState<Location | null>(null);

    //const [long, setLong] = useState(-73.9352);
    //const [lat, setLat] = useState(40.7128);

    /*
    const handleLocationSelected = (locationData: { lat: number, long: number }) => {
        // Save the location data to the user profile or app state
        setLat(locationData.lat);
        setLong(locationData.long);
        console.log("Selected location:", locationData);
    };
    */
    const handlePlaceSelect = (value: any) => {
        if (value && value.properties) {
            setLocation({
                lat: value.properties.lat,
                lon: value.properties.lon,
            });
        }
    };

    
    return (
        <>
            <div id="place-picker-box">
                <div id="place-picker-container">
                    <GeoapifyAutocomplete />
                    {/* Pass handleLocationSelected as the required onLocationSelected prop */}
                    <LocationInput />
                </div>
            </div>
            <div className='container'>
                <AuroraDisplay location={location}/>
            </div>
        </>
    );
}

export default Find;
