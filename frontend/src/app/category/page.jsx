import { Cards } from "@/components/cards";
import { DataCategories } from "@/data/category";
import React from "react";
import "@/styles/category.css"

const Category = () => {
  return (
    <>
      <h2 className="text-center font-bold text-[#2EACA6] text-[32px] pt-3">
        Category
      </h2>
      <div className="mx-5 grid grid-cols-2 justify-items-center items-center ">
        {DataCategories.map((data) => (
          <Cards.CardCategory
            key={data.id}
            image={data.icon}
            title={data.name}
          />
        ))}
      </div>
    </>
  );
};

export default Category;
