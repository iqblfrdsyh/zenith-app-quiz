import { SlideCard } from "@/components/slide";
import { Button } from "@nextui-org/react";

const Home = () => {
  
  return (
    <div className="w-full h-full p-3 bg-gradient-to-b from-white to-teal-200 relative">
      <div className="flex flex-col px-3">
        <div className="w-full flex items-center -ms-4">
          <img src="/images/logo2.png" />
          <h1 className="font-bold text-3xl text-teal-500">Zenith</h1>
        </div>
        <div className="w-[98%] h-32 rounded-lg bg-[url('/images/bg-head.png')] bg-cover mx-auto mt-3 flex items-end">
          <div className="my-auto">
            <h1 className="text-white w-40 text-[14px] font-semibold ps-4 pb-2">
              Join and play to get a wider knowledge insight!
            </h1>
            <Button className="bg-white ms-4 w-20 text-[10px] rounded-md h-6 font-semibold text-teal-600">
              Get Started
            </Button>
          </div>
          <img src="images/header.png" className="w-44 h-24 -ms-5" />
        </div>
        <SlideCard.Category />
        <SlideCard.Popular />
        <SlideCard.Recent />

      </div>
    </div>
  );
};

export default Home;
