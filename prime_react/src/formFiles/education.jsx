import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React from "react";

export function Education() {
  const { values, setFieldValue, handleBlur } = useFormikContext();

  const educationOptions = [
    { name: "High School", code: "HS" },
    { name: "Diploma", code: "DP" },
    { name: "Bachelor's Degree", code: "BD" },
    { name: "Master's Degree", code: "MD" },
    { name: "Ph.D.", code: "PHD" },
    { name: "Other", code: "O" },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Highest Education
      </label>
      <Dropdown
        name="education"
        value={educationOptions.find((e) => e.name === values.education)}
        onChange={(e) => setFieldValue("education", e.value.name)}
        onBlur={handleBlur}
        options={educationOptions}
        optionLabel="name"
        placeholder="Select Education"
        className="w-full md:w-13rem lg:w-12rem"
      />
      <ErrorMessage
        name="education"
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
