import { useContext, useEffect, useState } from "react";
import BusinessItem from "./BusinessItem";
import ShimmerEffectItem from "./ShimmerEffectItem";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const BusinessList = ({ data }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { selectedBusiness, setSelectedBusiness } = useContext(
    SelectedBusinessContext
  );

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setLoading(true);
    setCount(0);
  }, [data]);

  return (
    <div>
      <h3 className="text-[20px] font-bold my-3 flex items-center justify-between">
        Top Nearby Places
        <span className="flex">
          {count > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 rounded-lg cursor-pointer"
              onClick={() => setCount(count - 3)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          ) : null}
          {count < data.length - 3 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 rounded-lg cursor-pointer"
              onClick={() => setCount(count + 3)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          ) : null}
        </span>
      </h3>
      <ul>
        {data.length && !loading
          ? data.map(
              (business, idx) =>
                idx >= count &&
                idx < count + 3 && (
                  <li
                    className={`cursor-pointer ${
                      selectedBusiness?.name === business.name
                        ? "bg-purple-200"
                        : null
                    }`}
                    key={idx.toString()}
                    onClick={() => setSelectedBusiness(business)}
                  >
                    <BusinessItem business={business} />
                  </li>
                )
            )
          : null}
      </ul>
      {loading
        ? [1, 2, 3].map((el) => <ShimmerEffectItem key={el.toString()} />)
        : null}
    </div>
  );
};

export default BusinessList;
