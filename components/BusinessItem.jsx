import React from "react";
import Image from "next/image";

const BusinessItem = ({ business }) => {
  const { name, vicinity, rating, photos } = business;
  const photoRef = photos ? photos[0]?.photo_reference : "";
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  return (
    <div className="flex items-center gap-3 p-3 mb-4 border-b-[1px] border-purple-300">
      <Image
        className="rounded-xl object-cover w-[100px] h-[100px]"
        src={
          photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${GOOGLE_API_KEY}`
            : "/placeholder.jpg"
        }
        alt="Business Image"
        width={90}
        height={90}
      />
      <div>
        <h3 className="text-[20px] font-semibold">{name}</h3>
        <p className="text-[15px] text-gray-500">{vicinity}</p>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
