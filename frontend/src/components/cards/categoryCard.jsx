"use client";

import { Card, CardBody, Image } from "@nextui-org/react";

const CategoryCard = ({ image, title, isHots }) => {
  const preventDefaultBehavior = (e) => {
    e.preventDefault();
  };
  return (
    <Card className="mt-6 w-[135px] h-[115px] shadow-sm relative">
      <CardBody className="flex flex-col justify-center items-center">
        {isHots && (
          <div className="absolute top-0 left-0 w-[50px]">
            <Image
              src="./images/material/hots.svg"
              alt="hots"
              radius="none"
              onContextMenu={preventDefaultBehavior}
              style={{ pointerEvents: "none" }}
            />
          </div>
        )}
        <Image
          alt="category-icon"
          src={image}
          loading="lazy"
          className="shadow-none border-none w-[55px]"
          onContextMenu={preventDefaultBehavior}
          style={{ pointerEvents: "none" }}
          radius="none"
        />
        <div className="absolute bottom-[5px] left-[13px]">
          <h3 className="text-[16px] font-semibold text-[#21938D]">{title}</h3>
        </div>
        <div className="absolute bottom-0 right-0 w-[42px]">
          <Image
            src="./images/material/paper.svg"
            alt="paper"
            radius="none"
            onContextMenu={preventDefaultBehavior}
            style={{ pointerEvents: "none" }}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default CategoryCard;
