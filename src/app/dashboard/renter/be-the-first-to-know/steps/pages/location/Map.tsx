import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
//import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import React, { useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

type Props = {};

// Function to change the map view
const ChangeView = ({ center }: { center: any }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const Map = (props: Props) => {
  const [center, setCenter] = useState([5.614818, -0.205874]); // Initial center set to Accra
  const [markerPosition, setMarkerPosition] = useState([5.614818, -0.205874]); // Initial marker position set to Accra
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = async () => {
    const location = inputRef?.current?.value;
    if (!location) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${location}&countrycodes=GH&limit=5`,
      );

      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleSuggestionClick = (lat: any, lon: any) => {
    const newCenter = [parseFloat(lat), parseFloat(lon)];
    setCenter(newCenter);
    setMarkerPosition(newCenter);
    setSuggestions([]);
    inputRef.current!.value = "";
  };

  return (
    <>
      <div className="absolute bottom-40 left-1/2 z-[99999] mx-auto grid w-full max-w-md -translate-x-1/2 place-items-center rounded-xl bg-white p-5 px-14 shadow-lg ">
        <div className="absolute bottom-full left-0 right-0 z-10 overflow-y-auto border bg-white">
          {suggestions.map((suggestion: any) => (
            <div
              key={suggestion.place_id}
              onClick={() =>
                handleSuggestionClick(suggestion.lat, suggestion.lon)
              }
              className="cursor-pointer p-4 hover:bg-gray-50"
            >
              {suggestion.display_name}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search location"
          ref={inputRef}
          onChange={handleInputChange}
          className="w-full rounded-md border bg-gray-100 p-2 placeholder:text-shade-200 focus:outline-none"
        />
      </div>

      <MapContainer
        className="h-[60vh] w-full rounded-3xl border-x-2"
        center={[5.614818, -0.205874]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeView center={center} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition as any}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

//const customIcon = L.icon({
//  iconUrl: 'path/to/your/custom-icon.png', // URL to your custom icon image
//  iconSize: [38, 38], // size of the icon
//  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
//  popupAnchor: [0, -38] // point from which the popup should open relative to the iconAnchor
//});

export default Map;

// const search = new GeoSearchControl({
//   provider: new OpenStreetMapProvider(),
//   showMarker: false,
//   autoClose: true,
//   searchLabel: 'Search for location',
//   keepResult: true,
// });

// const MapWithSearch = (props: Props) => {
//   const map = useMap();
//   map.addControl(search);

//   search.on('search:locationfound', (e: any) => {
//     map.flyTo(e.latlng);
//   });

//   return (
//     <Map {...props} />
//   );
// };

// export default MapWithSearch;
