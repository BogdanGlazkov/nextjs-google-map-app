import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-3 bg-purple-100 p-3 rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 p-2 cursor-pointer rounded-lg text-purple-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        className="bg-transparent text-purple-700 w-full outline-none text-[17px] placeholder-purple-400"
        type="text"
        placeholder="Search"
        onKeyDown={(e) => e.key === "Enter" && console.log(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
