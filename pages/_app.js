import { useEffect, useState, createContext } from "react";
import "@/styles/globals.css";
import { UserLocationContext } from "@/context/UserLocationContext";

export default function App({ Component, pageProps }) {
  const [userLocation, setUserLocation] = useState([]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) =>
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <Component {...pageProps} />
    </UserLocationContext.Provider>
  );
}
