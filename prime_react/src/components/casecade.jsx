import { CascadeSelect } from "primereact/cascadeselect";
import React from "react";
import { useState } from "react";

export function Casecade() {
    const [selectedCity,setSelectedCity] = useState(null);
    const countries = [
  {
    "name": "USA",
    "states": [
      {
        "name": "California",
        "cities": [
          { "cname": "Los Angeles", "code": "LA" },
          { "cname": "San Diego", "code": "SD" }
        ]
      },
      {
        "name": "Texas",
        "cities": [
          { "cname": "Houston", "code": "HOU" },
          { "cname": "Dallas", "code": "DAL" }
        ]
      }
    ]
  },
  {
    "name": "India",
    "states": [
      {
        "name": "Maharashtra",
        "cities": [
          { "cname": "Mumbai", "code": "MUM" },
          { "cname": "Nagpur", "code": "NAG" }
        ]
      },
      {
        "name": "Karnataka",
        "cities": [
          { "cname": "Bangalore", "code": "BLR" },
          { "cname": "Mysore", "code": "MYS" }
        ]
      }
    ]
  },
  {
    "name":"Pakistan",
    "states":[
      {
        "name":"Punjab",
        "cities":[
          {
            "cname":"Gujranwala","code":"GUJ"
          },
            {
            "cname":"Lahore","code":"LHR"
          },
            {
            "cname":"Faislabad","code":"FSD"
          },
            {
            "cname":"Islamabad","code":"ISL"
          },
        ]
      }
    ]
  }
]

  return (
    <>
      <div>
        <CascadeSelect
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={countries}
          optionLabel="cname"
          optionGroupLabel="name"
          optionGroupChildren={["states", "cities"]}
          className="w-full md:w-14rem h-[35px] flex items-center !rounded-none mt-5"
          breakpoint="767px"
          placeholder="Select a City"
          style={{ minWidth: "14rem" }}
        />
      </div>
    </>
  );
}
