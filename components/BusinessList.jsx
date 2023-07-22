import { useState } from "react";
import BusinessItem from "./BusinessItem";

const BusinessList = ({ data }) => {
  const [count, setCount] = useState(0);
  console.log(data);

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
        {data.length
          ? data.map(
              (business, idx) =>
                idx >= count &&
                idx < count + 3 && (
                  <li key={business.place_id}>
                    <BusinessItem business={business} />
                  </li>
                )
            )
          : null}
      </ul>
    </div>
  );
};

export default BusinessList;
