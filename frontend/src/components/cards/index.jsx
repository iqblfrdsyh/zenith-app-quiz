import { Card, CardBody, Image } from "@nextui-org/react";

const Cards = {
  CardAchievement: () => {
    return <div>card achievement</div>;
  },
  CardRecent: () => {
    return <div>card recent</div>;
  },
  CardCategory: ({ image, title }) => {
    return (
      <Card className="mt-6 w-[150px] h-[125px] shadow-sm">
        <CardBody className="flex flex-col justify-center items-center">
          <Image
            alt="math-icon"
            src={image}
            loading="lazy"
            className="shadow-none border-none w-[60px]"
          />
          <h3 className="text-[18px] font-semibold text-[#21938D]">{title}</h3>
        </CardBody>
      </Card>
    );
  },
};

export { Cards };
