import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getAllData } from "@/libs/api-libs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const [data, setData] = useState({
    quizzes: 0,
    categories: 0,
    topics: 0,
    users: 0,
    achievements: 0,
  });
  const datas = [
    {
      title: "Quizzes",
      data: data.quizzes,
    },
    {
      title: "Categories",
      data: data.categories,
    },
    {
      title: "Topics",
      data: data.topics,
    },
    {
      title: "Users",
      data: data.users,
    },
    {
      title: "Achievements",
      data: data.achievements,
    },
  ];

  const fetchData = async () => {
    try {
      const response = await getAllData("totalData");
      setData({
        quizzes: response.data[0].quizzes,
        categories: response.data[0].category,
        topics: response.data[0].topics,
        users: response.data[0].users,
        achievements: response.data[0].achievements,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: ["Quizzes", "Categories", "Topics", "Users", "Achievements"],
    datasets: [
      {
        label: "Count",
        data: [
          data.quizzes,
          data.categories,
          data.topics,
          data.users,
          data.achievements,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4  sm:gap-6 md:gap-8">
        {datas.map((x, i) => (
          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow z-10"
            key={i + 1}
          >
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">
              {x.title}
            </h2>
            <p className="text-2xl sm:text-3xl font-bold">{x.data}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow">
        <div className="relative h-64">
          <Bar
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charts;
