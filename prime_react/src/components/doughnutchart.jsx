import { Chart } from "primereact/chart";
import React from "react";

export function Doughnutchart() {
  const chartData = {
    labels: ["yellow","blue","green"],
    datasets: [
      {
        data: [100, 200, 60],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const chartOptions = {
    plugins: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "top",
         labels: {
          color: '#495057' // optional, legend text color
        }
      },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <Chart
          type="doughnut"
          data={chartData}
          options={chartOptions}
          className="w-full md:w-96 h-[300px]"
        />
      </div>
    </>
  );
}
