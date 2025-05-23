import { ErrorMessage, useFormikContext } from "formik";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

export function District() {
  // const [selectdistrict, setSelectdistrict] = useState([]);
  //  const { values, setFieldValue, handleBlur } = useFormikContext();
   const {state,dispatch} = useContext(FormContext);
      const selected = formState[index].country;
  const district = [
    { name: "Lahore" },
    { name: "Karachi" },
    { name: "Faisalabad" },
    { name: "Rawalpindi" },
    { name: "Multan" },
    { name: "Gujranwala" },
    { name: "Peshawar" },
    { name: "Quetta" },
    { name: "Sialkot" },
    { name: "Hyderabad" },
    { name: "Bahawalpur" },
    { name: "Sargodha" },
    { name: "Abbottabad" },
    { name: "Dera Ghazi Khan" },
    { name: "Sukkur" },
    { name: "Muzaffarabad" },
    { name: "Mardan" },
    { name: "Swat" },
    { name: "Mirpur" },
    { name: "Khairpur" },
  ];
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Domicile District
        </label>
        <Dropdown
          name="district"
          // value={district.find(d => d.name === values.district)}
          // onChange={(e) => setFieldValue("district",e.value.name)}
          value={selected}
          onChange={(e) =>
        dispatch({
          type: "UPDATE_FIELD",
          index,
          field: "country",
          value: e.value.name
        })
      }
          onBlur={handleBlur}
          options={district}
          optionLabel="name"
          placeholder="Select District"
          className="w-full md:w-13rem lg:w-12rem"
        />

        <ErrorMessage
          name="district"
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </>
  );
}
