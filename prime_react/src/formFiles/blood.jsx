import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

export function Blood() {
  // const [selectblood, setSelectblood] = useState([]);
  const {values,setFieldValue,handleBlur} = useFormikContext();
  const blood = [
    { name: "O+ Positive" },
    { name: "O- Negative" },
    { name: "AB+ Positive" },
    { name: "AB- Negative" },
    { name: "A+ Positive" },
    { name: "A- Negative" },
    { name: "B+ Positive" },
    { name: "B- Negative" },
  ];
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Blood Group
        </label>
        <Dropdown
          name="blood"
          value={blood.find(b =>b.name === values.blood)}
          onChange={(e) => setFieldValue("blood",e.value.name)}
          onBlur={handleBlur}
          options={blood}
          optionLabel="name"
          placeholder="Select Blood Group"
          className="w-full md:w-13rem lg:w-12rem"
        />

        <ErrorMessage
          name="blood"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
