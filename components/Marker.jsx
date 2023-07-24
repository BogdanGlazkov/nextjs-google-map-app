import { useContext } from "react";
import { InfoBox, MarkerF } from "@react-google-maps/api";
import { BusinessListContext } from "@/context/BusinessListContext";

const Marker = ({ userLocation }) => {
  const { businessList, setBusinessList } = useContext(BusinessListContext);
  return (
    <div>
      <MarkerF
        icon={{
          url: "/user-location.png",
          scaledSize: { width: 50, height: 50 },
        }}
        position={userLocation}
      />
      {businessList &&
        businessList.map(
          (business, idx) =>
            idx < 5 && (
              <MarkerF
                key={idx.toString()}
                position={business.geometry.location}
                icon={{
                  url: "/location-pin.png",
                  scaledSize: { width: 50, height: 50 },
                }}
              >
                <InfoBox position={business.geometry.location}>
                  <div className="bg-purple-400 text-white p-1 rounded-lg w-[75px] opacity-80">
                    <h3 className="">{business.name}</h3>
                  </div>
                </InfoBox>
              </MarkerF>
            )
        )}
    </div>
  );
};

export default Marker;
