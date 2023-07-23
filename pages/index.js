import { useEffect, useState, useContext } from "react";
import { Inter } from "next/font/google";
import { UserLocationContext } from "@/context/UserLocationContext";
import SideNavBar from "@/components/SideNavBar";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import BusinessList from "@/components/BusinessList";
import { getNearby } from "@/services/GlobalApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [businessList, setBusinessList] = useState([]);
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const getNearbyPlace = (category) => {
    getNearby(category, userLocation?.lat, userLocation?.lng).then((res) =>
      setBusinessList(res.data.results)
    );
  };

  useEffect(() => {
    if (userLocation) {
      getNearbyPlace("gas_station");
    }
  }, [userLocation]);

  return (
    <main className="flex">
      <SideNavBar />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 px-6 md:px-10 w-full mt-10">
        <div>
          <SearchBar />
          <CategoryList
            setSelectedCategory={(category) => getNearbyPlace(category)}
          />
          <BusinessList data={businessList} />
        </div>
        <div>Google Map</div>
      </section>
    </main>
  );
}
