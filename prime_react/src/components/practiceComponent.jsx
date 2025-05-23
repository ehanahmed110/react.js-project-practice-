import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";
import { Knob } from "primereact/knob";
import { Chart } from "primereact/chart";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";

export function PracticeComponent() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [knob, setKnob] = useState("");

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  const chartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [200, 300, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <div className="flex justify-center ">
        <FloatLabel>
          <InputText
          pt={{
            root:{
                className:'border-2 border-red-500 rounded-lg w-full'
            }
          }}
            id="username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </FloatLabel>
      </div>
      {/* --------------- */}
      <div>
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
      </div>
      {/* ------------- */}
      <div>
        <Knob value={knob} onChange={(e) => setKnob(e.value)} strokeWidth={9} />
        <Knob value={50} readOnly />
      </div>
      {/* ------------------- */}
      <div>
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className="w-full h-[300px]"
        />
      </div>
      {/* ------------------ */}
      <div>
        <Rating
          value={value}
          onChange={(e) => setValue(e.value)}
          cancel={false}
        />
      </div>
      <Button label="ADD"
      pt={{
        root:{
            className:"!bg-black !text-red-500 "
        },
      }}
       />
       <Button 
       label="disabled"
       disabled
       pt={{
        root:{
           className:"!bg-gray-900  !cursor-not-allowed"
        },
        label:{className:"text-red-500"}
       }}
       />
       {/* -------------------------- */}
      
    </>
  );
}
