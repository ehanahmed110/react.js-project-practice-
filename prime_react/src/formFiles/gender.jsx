import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

export function Gender() {
  // const [selectGender, setSelectGender] = useState([]);
    const { values, setFieldValue, handleBlur } = useFormikContext();
  const Gender = [
    { name: "Male", code: "M" },
    { name: "Female", code: "F" },
    { name: "Other", code: "O" },
  ];
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <Dropdown
          name="gender"
           value={Gender.find((g) => g.name === values.gender)}
           onChange={(e) => setFieldValue("gender",e.value.name)}
          options={Gender}
          onBlur={handleBlur}
          optionLabel="name"
          // optionValue="code"
          placeholder="Select Gender"
          className="w-full md:w-13rem lg:w-12rem"
        />
        <ErrorMessage
          name="gender"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
