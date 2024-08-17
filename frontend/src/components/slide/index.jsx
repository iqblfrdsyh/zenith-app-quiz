import {ScrollShadow} from "@nextui-org/react";

const SlideCard = {
    Category: () => {
        const categories = [
            "images/math.png",
            "images/social.png",
            "images/logic.png",
        ];

        return (
            <div className="flex-col">
                <div className="flex w-full mt-7 items-center">
                    <h1 className="font-semibold text-xl">Category</h1>
                    <img src="images/right.png" className="w-3 h-3 ms-auto me-2" alt="arrow right" />
                </div>
                <ScrollShadow orientation="horizontal" className="w-full no-scrollbar">
                    <div className="flex w-full p-1">
                        {categories.map((src, index) => (
                            <div key={index} className="min-w-28 me-2 flex items-center justify-center">
                                <img src={src} alt={`category-${index}`} className="object-cover" />
                            </div>
                        ))}
                    </div>
                </ScrollShadow>
            </div>
        );
    },
    Popular: () => {
        const populars = [
        { src: "images/algo.jpg", title: "Algorithm", questions: "20 Questions" },
        { src: "images/trigo.jpg", title: "Trigonometry", questions: "20 Questions" },
        { src: "images/histori.jpg", title: "Historical", questions: "20 Questions" },
    ];
        return (
        <div className="flex-col">
            <div className="flex w-full mt-7 items-center">
                <h1 className="font-semibold text-xl">Popular Quiz</h1>
                <img src="images/right.png" className="w-3 h-3 ms-auto me-2" alt="arrow right" />
            </div>
            <ScrollShadow orientation="horizontal" className="w-full no-scrollbar">
                <div className="flex w-full p-1">
                    {populars.map((item, index) => (
                        <div key={index} className="min-w-32 flex-col me-2 h-32 rounded-xl bg-white shadow-md border-t p-2">
                            <img src={item.src} alt={`populars-${index}`} className="object-cover rounded-md h-20"/>
                            <h1 className="text-xs font-semibold mt-1 ms-1">{item.title}</h1>
                            <h5 className="text-[9px] text-gray-500 ms-1">{item.questions}</h5>
                        </div>
                    ))}
                </div>
            </ScrollShadow>
        </div>
    );
    },
    Recent: () => {
        const recents = [
            { src: "images/science.png", title: "Science", questions: "20 Questions", status: "Complete" },
            { src: "images/trigonometri.png", title: "Trigonometry", questions: "20 Questions", status: "Complete" },
            { src: "images/statistika.png", title: "Statistic", questions: "20 Questions", status: "Complete" },
            { src: "images/geometri.png", title: "Geometry", questions: "20 Questions", status: "Complete" },
        ];

        return (
            <div className="flex-col mb-20">
                <div className="flex w-full mt-7 items-center">
                    <h1 className="font-semibold text-xl">Recent</h1>
                    <img src="images/right.png" className="w-3 h-3 ms-auto me-2" alt="arrow right" />
                </div>
                <div className="flex-col w-full overflow-auto no-scrollbar p-2">
                    {recents.map((item, index) => (
                        <div key={index} className="w-full flex mb-2 h-16 rounded-md bg-teal-50 shadow-md border-t p-2 items-center">
                            <div className="w-12 h-12 rounded-md bg-white border flex items-center justify-center">
                                <img src={item.src} alt={item.title} className="rounded-md w-10 h-10 object-cover" />
                            </div>
                            <div className="flex flex-col justify-center ms-3">
                                <h1 className="text-sm font-semibold">{item.title}</h1>
                                <h5 className="text-xs text-gray-500">{item.questions}</h5>
                            </div>
                            <div className="ms-auto me-2">
                                <button className="text-xs font-semibold text-teal-600">{item.status}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },

};

export { SlideCard };