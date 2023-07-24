import { useContext } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { UserLocationContext } from "@/context/UserLocationContext";
import Marker from "./Marker";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: 20,
};

const Map = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { lat, lng } = userLocation;

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        {userLocation ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat, lng }}
            zoom={14}
          >
            <Marker userLocation={userLocation} />
          </GoogleMap>
        ) : null}
      </LoadScript>
    </div>
  );
};

export default Map;
