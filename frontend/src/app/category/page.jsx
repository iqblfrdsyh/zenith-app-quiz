import { Cards } from "@/components/cards";
import { DataCategories } from "@/data/category";
import React from "react";
import Popup from "@/components/popup";
import { Image } from "@nextui-org/react";

const Category = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#C4E8E5] to-[#3FBBB0] z-20"></div>

      <div className="absolute inset-0 flex justify-center items-center z-30">
        <Image src="./images/material/pentol.png" alt="pentol-icon" className="object-cover" />
      </div>

      <div className="relative z-40">
        <div className="w-full h-screen">
          <div className="relative flex justify-center items-center">
            <h2 className="text-center font-bold text-[#2EACA6] text-[26px] z-50 absolute left-0 right-0">
              Category
            </h2>
            <Image
              src="./images/material/header.svg"
              alt="header"
              className="mx-auto w-[270px]"
              radius="none"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 justify-items-center items-center ">
            {DataCategories.map((data) => (
              <Popup
                key={data.id} 
                title={"Sorry"}
                icon={"error"}
                text={"For now can't be click"}
              >
                <Cards.CardCategory
                  image={data.icon}
                  title={data.name}
                  isHots={data.isHots}
                />
              </Popup>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
