import { useFormikContext, ErrorMessage } from "formik";
import { Dropdown } from "primereact/dropdown";
import React from "react";

export function ModeOfStudy() {
  const { values, setFieldValue, handleBlur } = useFormikContext();

  const modes = [
    { name: "Regular", code: "REG" },
    { name: "Distance", code: "DIS" },
    { name: "Online", code: "ONL" },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Mode of Study
      </label>
      <Dropdown
        name="modeOfStudy"
        value={modes.find((m) => m.name === values.modeOfStudy)}
        onChange={(e) => setFieldValue("modeOfStudy", e.value.name)}
        onBlur={handleBlur}
        options={modes}
        optionLabel="name"
        placeholder="Select Mode"
        className="w-full md:w-13rem lg:w-12rem"
      />
      <ErrorMessage
        name="modeOfStudy"
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}
