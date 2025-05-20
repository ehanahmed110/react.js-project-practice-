import { CascadeSelect } from "primereact/cascadeselect";
import React from "react";
import { useState } from "react";

export function Casecade() {
    const [selectedCity,setSelectedCity] = useState('');
    // const countries = () =>{

    // }

  return (
    <>
      <div>
        <CascadeSelect
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
        //   options={countries}
          optionLabel="cname"
          optionGroupLabel="name"
          optionGroupChildren={["states", "cities"]}
          className="w-full md:w-14rem"
          breakpoint="767px"
          placeholder="Select a City"
          style={{ minWidth: "14rem" }}
        />
      </div>
    </>
  );
}
