import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";
import { calculateDistance } from "@/services/DistanceCalculator";

const BusinessToast = ({ userLocation }) => {
  const { lat, lng } = userLocation;
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (selectedBusiness.name) {
      const { lat: bLat, lng: bLng } = selectedBusiness.geometry.location;
      setDistance(calculateDistance(bLat, bLng, lat, lng).toFixed(1));
      console.log(1, distance);
    }
  }, [selectedBusiness]);

  return (
    <>
      {selectedBusiness ? (
        <div className="fixed bottom-5 right-5 z-10 flex items-center gap-5 bg-purple-400 opacity-90 p-4 rounded-2xl text-white">
          <div>
            <h2 className="font-semibold text-[20px]">
              {selectedBusiness.name}
            </h2>
            <p>{distance} km away</p>
          </div>
          <div className="bg-purple-300 p-4 rounded-xl cursor-pointer hover:scale-105 transition-all">
            <Image src="/send.png" alt="Nav" width={20} height={20} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BusinessToast;
