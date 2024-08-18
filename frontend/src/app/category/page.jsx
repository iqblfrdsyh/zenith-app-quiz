import { Cards } from "@/components/cards";
import { DataCategories } from "@/data/category";
import React from "react";
import "@/styles/category.css";
import Popup from "@/components/popup";

const Category = () => {
  return (
    <>
      <h2 className="text-center font-bold text-[#2EACA6] text-[32px] pt-3">
        Category
      </h2>
      <div className="mx-5 grid grid-cols-2 justify-items-center items-center ">
        {DataCategories.map((data) => (
          <Popup title={"Sorry"} icon={"error"} text={"For now can't be click"}>
            <Cards.CardCategory
              key={data.id}
              image={data.icon}
              title={data.name}
              isHots={data.isHots}
            />
          </Popup>
        ))}
      </div>
    </>
  );
};

export default Category;
