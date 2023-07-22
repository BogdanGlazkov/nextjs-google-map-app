import { useEffect, useState } from "react";
import { CategoryListData } from "@/assets/data";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(CategoryListData);
  }, []);

  return (
    <div>
      <h2 className="text-[20px] my-3 font-bold">
        Select your favorite category
      </h2>
      <ul className="flex gap-6 mb-5">
        {category
          ? category.map((item, idx) => (
              <li key={idx}>
                <CategoryItem category={item} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default CategoryList;
