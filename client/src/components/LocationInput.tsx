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

PLACES SCRIPT
async function initMap(): Promise<void> {
    // Request needed libraries.
    //@ts-ignore
    await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
    // Create the input HTML element, and append it.
    //@ts-ignore
    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();
    //@ts-ignore
    document.body.appendChild(placeAutocomplete);

    // Inject HTML UI.
    const selectedPlaceTitle = document.createElement('p');
    selectedPlaceTitle.textContent = '';
    document.body.appendChild(selectedPlaceTitle);

    const selectedPlaceInfo = document.createElement('pre');
    selectedPlaceInfo.textContent = '';
    document.body.appendChild(selectedPlaceInfo);

    // Add the gmp-placeselect listener, and display the results.
    //@ts-ignore
    placeAutocomplete.addEventListener('gmp-placeselect', async ({ place }) => {
        await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });

        selectedPlaceTitle.textContent = 'Selected Place:';
        selectedPlaceInfo.textContent = JSON.stringify(
            place.toJSON(), replacer null, space  2);
          });
        }
        
        initMap();
*/


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