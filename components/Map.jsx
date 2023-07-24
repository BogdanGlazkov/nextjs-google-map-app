import { useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { UserLocationContext } from "@/context/UserLocationContext";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: 20,
};

const Map = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { lat, lng } = userLocation;
  const onLoad = (marker) => console.log("Marker: ", marker);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        {userLocation ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat, lng }}
            zoom={15}
          >
            <Marker
              icon={{
                url: "/user-location.png",
                scaledSize: { width: 50, height: 50 },
              }}
              onLoad={onLoad}
              position={{ lat, lng }}
            />
          </GoogleMap>
        ) : null}
      </LoadScript>
    </div>
  );
};

export default Map;
