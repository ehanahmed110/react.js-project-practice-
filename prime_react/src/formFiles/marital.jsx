import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

export function Marital() {
  // const [selectmerital, setSelectmerital] = useState([]);
   const { values, setFieldValue, handleBlur } = useFormikContext();
  const marital = [{ name: "Married" }, { name: "UnMarried" }];
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Marital Status
        </label>
        <Dropdown
          name="married"
          value={marital.find(d => d.name === values.married)}
          onChange={(e) => setFieldValue("married",e.value.name)}
          options={marital}
           onBlur={handleBlur}
          optionLabel="name"
          placeholder="Select Status"
          className="w-full md:w-13rem lg:w-12rem"
        />

        <ErrorMessage
          name="married"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
