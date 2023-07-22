import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import SideNavBar from "@/components/SideNavBar";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import BusinessList from "@/components/BusinessList";
import { getNearby } from "@/services/GlobalApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [businessList, setBusinessList] = useState([]);

  const getNearbyPlace = (category) => {
    getNearby(category, "35.5827712", "-80.8484864").then((res) =>
      setBusinessList(res.data.results)
    );
  };

  useEffect(() => {
    getNearbyPlace("gas_station");
  }, []);

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
