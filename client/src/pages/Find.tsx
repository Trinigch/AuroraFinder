import LocationInput from "../components/LocationInput";

const Find = () => {
    // Handler to be called when a location is selected
    const handleLocationSelected = (locationData: { lat: number, long: number }) => {
        // Save the location data to the user profile or app state
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
        </>
    );
}

export default Find;
