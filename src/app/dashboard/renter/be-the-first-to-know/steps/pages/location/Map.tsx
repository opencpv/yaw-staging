import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

type Props = {};

const Map = (props: Props) => {
  return (
    <MapContainer
      className="h-[50vh] w-full rounded-3xl"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

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
