// import LocationInput from "../components/LocationInput";
import React, { useState, useRef } from 'react';
import '@googlemaps/extended-component-library/place_picker.js';
import '@googlemaps/extended-component-library/overlay_layout.js';
import { AdvancedMarker, Map, Pin, APIProvider } from '@vis.gl/react-google-maps';
import { PlacePicker } from '@googlemaps/extended-component-library/react';
import { PlacePicker as TPlacePicker } from '@googlemaps/extended-component-library/place_picker.js';
import { OverlayLayout as TOverlayLayout } from '@googlemaps/extended-component-library/overlay_layout.js';
import LocationInput from '../components/LocationInput';

const Find = () => {

    return(
        <>
            <section>
                
                <div className='container'>
                    <h3>Your Areas Aurora Data</h3>
                    <img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" alt='todays aurora data as an img from NOAA' width={400} height={400}/>
                    <p>Aurora intensity: </p>
                </div>
            </section>
        </>


{/* 

            <form className="form" onSubmit={handleFormSubmit}>
                <label htmlFor="city">City:</label><br/>
                <input 
                    type="text" 
                    id="city" 
                    name="city"
                    onChange={handleInputChange}
                /> <br/>
                <label htmlFor="State">State:</label><br/>
                <input type="text" id="state" name="state"/><br/>
                <input type="submit" className="submitButton">Submit</input>
            </form> */}
    );
}


export default Find;




/*

                  <PlacePicker
                  className="CollegePicker"
                  ref={pickerRef}
                  forMap="gmap"
                  country={['us', 'ca']}
                  type="university"
                  placeholder="Enter a college in the US or Canada"
                  onPlaceChange={() => {
                    if (!pickerRef.current?.value) {
                      setCollege(undefined);
                    } else {
                      setCollege(pickerRef.current?.value);
                    }
                  }}
                />

                */