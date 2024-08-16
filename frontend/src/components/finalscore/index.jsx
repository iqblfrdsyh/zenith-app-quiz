const Finalscore = {
    PerfectScore: () => {
        return (
            <div className="fixed inset-0 bg-[url('/images/bg.png')] flex">
                <div className="bg-white w-full mx-8 h-600 mt-8 mb-10 rounded-xl flex flex-col items-center">
                    <img className="mt-8" src="images/sokeren.png" width={200}/>
                    <h6 className="text-xs mt-3">Your Score</h6>
                    <h3 className="font-bold text-lg mt-3 text-teal-400">17 / 25</h3>
                    <h1 className="text-2xl mt-1 text-teal-400 font-bold">Congratulation!!</h1>
                    <h3 className="text-xs text-gray-600 mt-1 font-medium">Great job! You have done well~</h3>
                    <div className="flex bg-gray-300 px-2 rounded-lg items-center mt-6">
                        <img src="images/Crystal.png" className="m-1 ms-0" width={20}  alt="" />
                        <h6 className="text-xs font-bold text-gray-800 m-1 -ms-0.5">200 Points</h6>
                    </div>
                    <div className="flex flex-col mt-auto mb-10 h-20 justify-between">
                        <div className="bg-teal-400 w-56 h-8 rounded-full flex justify-center items-center font-bold text-xs text-white">Play Again</div>
                        <div className="bg-gray-200 w-56 h-8 rounded-full flex justify-center items-center font-bold text-xs text-gray-800">Back to Home</div>
                    </div>
                </div>
            </div>
        );
    },
    GreatScore: () => {
        return (
            <div className="fixed inset-0 bg-[url('/images/bg.png')] flex">
                <div className="bg-white w-full mx-8 h-600 mt-8 mb-10 rounded-xl flex flex-col items-center">
                    <img className="mt-8" src="images/depresi.png" width={200}/>
                    <h6 className="text-xs mt-3">Your Score</h6>
                    <h3 className="font-bold text-lg mt-3 text-red-600">8 / 25</h3>
                    <h1 className="text-2xl mt-1 text-red-600 font-bold">Nice Try!</h1>
                    <h3 className="text-xs text-gray-600 mt-1 font-medium">Great job, don't give up</h3>
                    <div className="flex bg-gray-300 px-2 rounded-lg items-center mt-6">
                        <img src="images/Crystal.png" className="m-1 ms-0" width={20}  alt="" />
                        <h6 className="text-xs font-bold text-gray-800 m-1 -ms-0.5">50 Points</h6>
                    </div>
                    <div className="flex flex-col mt-auto mb-10 h-20 justify-between">
                        <div className="bg-teal-400 w-56 h-8 rounded-full flex justify-center items-center font-bold text-xs text-white">Play Again</div>
                        <div className="bg-gray-200 w-56 h-8 rounded-full flex justify-center items-center font-bold text-xs text-gray-800">Back to Home</div>
                    </div>
                </div>
            </div>
        );
    },
};

export { Finalscore };
