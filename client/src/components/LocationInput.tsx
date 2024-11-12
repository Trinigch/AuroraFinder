import React, { useEffect, useRef } from 'react';

interface LocationInputProps {
  onLocationSelected: (location: { lat: number; lon: number }) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationSelected }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedPlaceTitleRef = useRef<HTMLParagraphElement | null>(null);
  const selectedPlaceInfoRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    async function initMap() {
      // Request the Places library
      //@ts-ignore
      await google.maps.importLibrary("places") as google.maps.PlacesLibrary;

      // Create the input element with Place Autocomplete
      //@ts-ignore
      const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();
      
      if (containerRef.current) {
        containerRef.current.appendChild(placeAutocomplete);
      }

      // Set up event listener for place selection
      //@ts-ignore
      placeAutocomplete.addEventListener('gmp-placeselect', async ({ place }) => {
        await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });

        // Display place information in the UI (optional), ensuring refs are not null
        if (selectedPlaceTitleRef.current && selectedPlaceInfoRef.current) {
          console.log("place",selectedPlaceTitleRef.current.textContent)
          selectedPlaceTitleRef.current.textContent = 'Selected Place:';
          selectedPlaceInfoRef.current.textContent = JSON.stringify(
            place.toJSON(), null, 2
          );
        }

        // Extract location data and send to parent component
        const location = {
          lat: place.location.lat(),
          lon: place.location.lng()
        };
        onLocationSelected(location);
      });
    }

    initMap();
  }, [onLocationSelected]);

  return (
    <>
    <div>
      <div>
        {/* Container for the Google Places input */}
        <div ref={containerRef}></div>
      
        {/* Optional UI for displaying selected place details */}
        <p ref={selectedPlaceTitleRef}></p>
        <pre ref={selectedPlaceInfoRef}></pre>
      </div>
      <p>Please input your address to find out your chances of seeing an aurora tonight</p>
      <p>Please make sure you are logged in before inputting your information</p>
    </div>
    </>
  );
};

export default LocationInput;




/* PLACES HTML
<!DOCTYPE html>
<html>
  <head>
    <title>
      Simple Places Autocomplete
    </title>
    <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6">
    </script>
    <style>
      body {
        padding: 25px;
        background-color: #f0f1f3;
        font-family: "Arial", sans-serif;
      }

      #place-picker-box {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #place-picker-container {
        text-align: left;
      }
    </style>
  </head>
  <body>
    <gmpx-api-loader key="AIzaSyBGKhm8H3QrRWbVG8CdkWo-k4muPiHtWEY" solution-channel="GMP_GE_placepicker_v1">
    </gmpx-api-loader>
    <div id="place-picker-box">
      <div id="place-picker-container">
        <gmpx-place-picker placeholder="Enter an address"></gmpx-place-picker>
      </div>
    </div>
  </body>
</html>

/* MAPS PLUS PLACE IN CASE WE DECIDE TO USE MAPPING AS WELL
<!DOCTYPE html>
<html>
  <head>
    <title>Maps and Places Autocomplete</title>
    <script>
      async function init() {
        await customElements.whenDefined('gmp-map');

        const map = document.querySelector('gmp-map');
        const marker = document.querySelector('gmp-advanced-marker');
        const placePicker = document.querySelector('gmpx-place-picker');
        const infowindow = new google.maps.InfoWindow();

        map.innerMap.setOptions({
          mapTypeControl: false
        });

        placePicker.addEventListener('gmpx-placechange', () => {
          const place = placePicker.value;

          if (!place.location) {
            window.alert(
              "No details available for input: '" + place.name + "'"
            );
            infowindow.close();
            marker.position = null;
            return;
          }

          if (place.viewport) {
            map.innerMap.fitBounds(place.viewport);
          } else {
            map.center = place.location;
            map.zoom = 17;
          }

          marker.position = place.location;
          infowindow.setContent(
            `<strong>${place.displayName}</strong><br>
             <span>${place.formattedAddress}</span>
          `);
          infowindow.open(map.innerMap, marker);
        });
      }

      document.addEventListener('DOMContentLoaded', init);
    </script>
    <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6">
    </script>
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .place-picker-container {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <gmpx-api-loader key="AIzaSyBGKhm8H3QrRWbVG8CdkWo-k4muPiHtWEY" solution-channel="GMP_GE_mapsandplacesautocomplete_v1">
    </gmpx-api-loader>
    <gmp-map center="40.749933,-73.98633" zoom="13" map-id="DEMO_MAP_ID">
      <div slot="control-block-start-inline-start" class="place-picker-container">
        <gmpx-place-picker placeholder="Enter an address"></gmpx-place-picker>
      </div>
      <gmp-advanced-marker></gmp-advanced-marker>
    </gmp-map>
  </body>
</html>
*/