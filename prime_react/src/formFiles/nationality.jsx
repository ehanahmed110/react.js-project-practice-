import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

export function Nationality() {
  // const [selectnationality, setSelectnationality] = useState([]);
   const { values, setFieldValue, handleBlur } = useFormikContext();
  const nationality = [
    { name: "Pakistan" },
    { name: "India" },
    { name: "Bangladesh" },
    { name: "Sri Lanka" },
    { name: "Nepal" },
    { name: "China" },
    { name: "Japan" },
    { name: "United States" },
    { name: "United Kingdom" },
    { name: "Germany" },
    { name: "France" },
    { name: "Canada" },
    { name: "Australia" },
    { name: "Saudi Arabia" },
    { name: "United Arab Emirates" },
  ];
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nationality
        </label>
        <Dropdown
          name="nation"
          value={nationality.find(d => d.name === values.nation)}
         onChange={(e) => setFieldValue("nation",e.value.name)}
          options={nationality}
          onBlur={handleBlur}
          optionLabel="name"
          placeholder="Select Nationality"
          className="w-full md:w-13rem lg:w-12rem"
        />

        <ErrorMessage
          name="nation"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
