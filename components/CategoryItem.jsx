import Image from "next/image";
import React from "react";

const CategoryItem = ({ category }) => {
  const { id, name, value, icon } = category;
  return (
    <div className="flex flex-col items-center bg-purple-100 p-3 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer">
      <Image src={icon} alt={name} width={35} height={35} />
      <h3 className="text-[12px] text-purple-700">{name}</h3>
    </div>
  );
};

export default CategoryItem;
