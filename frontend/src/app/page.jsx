// import { Cards } from "@/components/cards";
// import { Finalscore } from "@/components/finalscore";

import MenuBar from "@/components/menu";

// import { Finalscore } from "@/components/finalscore";


const Home = () => {
  return (
    <div className="w-full h-screen p-3 border-black relative">
      <MenuBar className="fixed left-0 right-0 bottom-0" />
      <div className="flex flex-col px-3">
        <div className="w-full flex items-center  -ms-4">
          <img src="/images/logo2.png" />
          <h1 className="font-bold text-3xl text-teal-400">Zenith</h1>
        </div>
        <div className="w-[98%] h-32 rounded-lg bg-gradient-to-r from-teal-200 to-teal-400 mx-auto mt-3 flex">
          <div className=" flex flex-col">
            {/* <h1 className="text-white text-lg font-semibold p-2">
              Join and play to get a wider knowledge insight!
            </h1>
            <button>Get Started</button> */}
          </div>
          <img src="" alt="" />
        </div>
        <div className="flex-col">
          <div className="flex w-full mt-7 items-center">
            <h1 className="font-semibold text-xl">Category</h1>
            <img src="images/right.png" className=" w-4 h-4 ms-auto me-2" />
          </div>
          <div className="flex w-full overflow-auto no-scrollbar p-2">
            <div className="min-w-24 -ms-2 me-2 h-20 rounded-xl bg-gradient-to-l from-teal-200 to-teal-400"></div>
            <div className="min-w-24 me-2 h-20 rounded-xl bg-gradient-to-l from-teal-200 to-teal-400"></div>
            <div className="min-w-24 me-2 h-20 rounded-xl bg-gradient-to-l from-teal-200 to-teal-400"></div>
            <div className="min-w-24 me-2 h-20 rounded-xl bg-gradient-to-l from-teal-200 to-teal-400"></div>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex w-full mt-7 items-center">
            <h1 className="font-semibold text-xl">Popular Quiz</h1>
            <img src="images/right.png" className=" w-4 h-4 ms-auto me-2" />
          </div>
          <div className="flex w-full overflow-auto no-scrollbar p-2">
            <div className="min-w-32 flex-col -ms-2 me-2 h-32 rounded-xl bg-white shadow-md border-t p-2">
              <div className="w-full h-20 rounded-md bg-teal-100"></div>
            </div>
            <div className="min-w-32 flex-col me-2 h-32 rounded-xl bg-white shadow-md border-t p-2">
              <div className="w-full h-20 rounded-md bg-teal-100"></div>
            </div>
            <div className="min-w-32 flex-col me-2 h-32 rounded-xl bg-white shadow-md border-t p-2">
              <div className="w-full h-20 rounded-md bg-teal-100"></div>
            </div>
            <div className="min-w-32 flex-col me-2 h-32 rounded-xl bg-white shadow-md border-t p-2">
              <div className="w-full h-20 rounded-md bg-teal-100"></div>
            </div>
          </div>
        </div>
        <div className="flex-col mb-20">
          <div className="flex w-full mt-7 items-center">
            <h1 className="font-semibold text-xl">Recent</h1>
            <img src="images/right.png" className=" w-4 h-4 ms-auto me-2" />
          </div>
          <div className="flex-col w-full overflow-auto no-scrollbar p-2">
            <div className="w-full flex mb-2 h-16 rounded-md bg-teal-100 shadow-md border-t p-2">
              <div className="w-12 h-12 rounded-md bg-white"></div>
            </div>
            <div className="w-full flex mb-2 h-16 rounded-md bg-teal-100 shadow-md border-t p-2">
              <div className="w-12 h-12 rounded-md bg-white"></div>
            </div>
            <div className="w-full flex mb-2 h-16 rounded-md bg-teal-100 shadow-md border-t p-2">
              <div className="w-12 h-12 rounded-md bg-white"></div>
            </div>
            <div className="w-full flex mb-2 h-16 rounded-md bg-teal-100 shadow-md border-t p-2">
              <div className="w-12 h-12 rounded-md bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <Finalscore.PerfectScore />
    // </div>
  );
};

export default Home;
