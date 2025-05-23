import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

export function Relegion() {
  // const [selectrelegion, setSelectrelegion] = useState([]);
  const { values, setFieldValue, handleBlur } = useFormikContext();
  const relegion = [{ name: "Islam" }, { name: "Other" }];

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Relegion
        </label>
        <Dropdown
          name="relegion"
          value={relegion.find(d => d.name === values.relegion)}
          onChange={(e) => setFieldValue("relegion",e.value.name)}
          options={relegion}
          onBlur={handleBlur}
          optionLabel="name"
          placeholder="Select Relegion"
          className="w-full md:w-13rem lg:w-12rem"
        />

        <ErrorMessage
          name="relegion"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
