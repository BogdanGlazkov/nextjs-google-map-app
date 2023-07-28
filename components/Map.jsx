import { useContext } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { UserLocationContext } from "@/context/UserLocationContext";
import Marker from "./Marker";
import BusinessToast from "./BusinessToast";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const containerStyle = {
  width: "100%",
  height: "100vh",
  borderRadius: 20,
};

const Map = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );
  const { lat, lng } = userLocation;

  return (
    <div className="relative">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        {userLocation ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={
              selectedBusiness?.name
                ? selectedBusiness.geometry.location
                : { lat, lng }
            }
            zoom={14}
          >
            <Marker userLocation={userLocation} />
          </GoogleMap>
        ) : null}
      </LoadScript>

      {selectedBusiness ? <BusinessToast userLocation={userLocation} /> : null}
    </div>
  );
};

export default Map;
