import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
//import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import React, { useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useField } from "formik";
import { BTFTKDefaultValues } from "@/store/dashboard/BTFTKStepsStore";
import { useLocalStorage } from "@uidotdev/usehooks";

type Props = {};

const debounce = (func: any, delay: number) => {
  let timeoutId: any;
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Function to change the map view
const ChangeView = ({ center }: { center: any }) => {
  const map = useMap();
  map.flyTo(center, map.getZoom(), { animate: true });
  return null;
};

// Map placeholder
function MapPlaceholder() {
  return (
    <p>
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  );
}

const Map = (props: Props) => {
  const [center, setCenter] = useState([5.614818, -0.205874]); // Initial center set to Accra
  const [markerPosition, setMarkerPosition] = useState([5.614818, -0.205874]); // Initial marker position set to Accra
  const [suggestions, setSuggestions] = useState([]);
  const [tooltip, setTooltip] = useState("Accra");
  const inputRef = useRef<HTMLInputElement>(null);

  const [field, meta, helpers] = useField("location");

  const [BTFTKCreationSteps, setBTFTKCreationSteps] = useLocalStorage<
    typeof BTFTKDefaultValues
  >("btftk-creation-steps");

  const handleInputChange = async () => {
    const location = inputRef?.current?.value;
    if (!location) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${location}&countrycodes=GH`,
      );

      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const debouncedHandleInputChange = debounce(handleInputChange, 300); // 300 milliseconds debounce delay

  const handleSuggestionClick = (lat: any, lon: any, display_name: any) => {
    const truncatedName = display_name.split(",").slice(0, 2).join("");
    const newCenter = [parseFloat(lat), parseFloat(lon)];
    setCenter(newCenter);
    setMarkerPosition(newCenter);
    setTooltip(truncatedName + "...");
    setSuggestions([]);
    if (!field.value.includes(truncatedName)) {
      helpers.setValue([...field.value, truncatedName]);
      setBTFTKCreationSteps({
        ...BTFTKCreationSteps,
        location: [...field.value, truncatedName] as any,
      });
    }
    inputRef.current!.value = "";
  };

  const handleRemoveLocation = (location: string) => {
    helpers.setValue(field.value.filter((s: string) => s !== location));
    setBTFTKCreationSteps({
      ...BTFTKCreationSteps,
      location: field.value.filter((s: string) => s !== location) as any,
    });
  };

  return (
    <>
      <div className="absolute bottom-40 left-1/2 z-[99999] mx-auto flex w-full max-w-md -translate-x-1/2 flex-col gap-3 rounded-3xl bg-white p-5 px-14 shadow-lg">
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute bottom-full left-0 right-0 z-10 overflow-y-auto rounded-t-md border bg-white">
            {suggestions.map((suggestion: any) => (
              <li
                key={suggestion.place_id}
                onClick={() =>
                  handleSuggestionClick(
                    suggestion.lat,
                    suggestion.lon,
                    suggestion.display_name,
                  )
                }
                className="cursor-pointer p-4 hover:bg-gray-50"
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
        <input
          type="text"
          placeholder="Search location"
          ref={inputRef}
          onChange={debouncedHandleInputChange}
          className="w-full rounded-md border bg-gray-100 p-2 placeholder:text-xs placeholder:text-shade-200 focus:outline-none"
        />

        {/* Selected locations */}
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
          {field.value.length > 0 &&
            field.value.map((location: string) => (
              <motion.li
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex max-w-[95px] items-center gap-1 rounded-full border px-2 py-1 text-xs text-shade-300"
                key={location}
              >
                <span
                  className="truncate"
                  title={location.split(",").slice(0, 2).join("")}
                >
                  {location.split(",").slice(0, 2).join("")}
                </span>
                <button onClick={() => handleRemoveLocation(location)}>
                  <LiaTimesSolid
                    size={10}
                    className="shrink-0 text-shade-500"
                  />
                </button>
              </motion.li>
            ))}
        </ul>
      </div>

      <MapContainer
        className="h-[300px] w-full rounded-3xl border-x-2"
        center={[5.614818, -0.205874]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeView center={center} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          riseOnHover
          draggable
          position={markerPosition as any}
          icon={customIcon}
        >
          <Popup>{tooltip}</Popup>
        </Marker>
      </MapContainer>
      <MapPlaceholder />
    </>
  );
};

const customIcon = L.icon({
  iconUrl: "/assets/images/map-pin-icon.png",
  iconSize: [38, 48],
  iconAnchor: [19, 38], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // point from which the popup should open relative to the iconAnchor
});

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
