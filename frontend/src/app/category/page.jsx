"use client";

import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import { Cards } from "@/components/cards";
import { getAllData } from "@/libs/api-libs";
import ButtonPopup from "@/components/buttonPopup";

const imageMapping = {
  Math: "./images/icons/math.svg",
  Logical: "./images/icons/logical.svg",
  Science: "./images/icons/science.svg",
  History: "./images/icons/history.svg",
  Art: "./images/icons/art&culture.svg",
  Geography: "./images/icons/geography.svg",
  Sport: "./images/icons/sport.svg",
  Tech: "./images/icons/technology.svg",
};

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllData("categories");
        setCategories(response?.datas);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#C4E8E5] to-[#3FBBB0] z-20"></div>

      <div className="absolute inset-0 flex justify-center items-center z-30">
        <Image
          src="./images/material/pentol.png"
          alt="pentol-icon"
          className="object-cover"
        />
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
            {categories?.map((data) => (
              <ButtonPopup
                key={data.id}
                title={"Sorry"}
                icon={"error"}
                text={"For now can't be click"}
              >
                <Cards.CardCategory
                  image={
                    imageMapping[data.title] || "./images/icons/technology.svg"
                  }
                  title={data.title}
                  isHots={data.isHots}
                />
              </ButtonPopup>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
