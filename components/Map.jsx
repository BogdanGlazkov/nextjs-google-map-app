import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: 20,
};
const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const onLoad = (marker) => console.log("Marker: ", marker);
  return (
    <div>
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker onLoad={onLoad} position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
