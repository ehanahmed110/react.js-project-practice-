import { ErrorMessage, useFormikContext } from 'formik';
import { Dropdown } from 'primereact/dropdown'
import React, { useContext, useState } from 'react'
import { FormContext } from '../context.jsx/FormContext';

export function Country() {
    // const { values, setFieldValue, handleBlur } = useFormikContext();
    const {state,dispatch} = useContext(FormContext);
    const selected = formState[index].country;
    const countries = [
        { name: "Afghanistan", code: "AF" },
        { name: "Argentina", code: "AR" },
        { name: "Australia", code: "AU" },
        { name: "Bangladesh", code: "BD" },
        { name: "Brazil", code: "BR" },
        { name: "Canada", code: "CA" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Italy", code: "IT" },
        { name: "Japan", code: "JP" },
        { name: "Kenya", code: "KE" },
        { name: "Malaysia", code: "MY" },
        { name: "Mexico", code: "MX" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands", code: "NL" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nigeria", code: "NG" },
        { name: "Pakistan", code: "PK" },
        { name: "Philippines", code: "PH" },
        { name: "Russia", code: "RU" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "South Africa", code: "ZA" },
        { name: "South Korea", code: "KR" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Turkey", code: "TR" },
        { name: "United Arab Emirates", code: "AE" },
        { name: "United Kingdom", code: "GB" },
        { name: "United States", code: "US" },
        { name: "Vietnam", code: "VN" }
    ];


    return (
        <>
            <div>
                 <label className="block text-sm font-medium text-gray-700">
          Countries
        </label>
                <Dropdown 
                value={selected}
                // value={countries.find((c) => c.name === values.country)}
                    // onChange={(e) => setFieldValue("country",e.value.name)}
                     onChange={(e) =>
        dispatch({
          type: "UPDATE_FIELD",
          index,
          field: "country",
          value: e.value.name
        })
      }
                     options={countries}
                     onBlur={handleBlur}
                     optionLabel="name"
                    name='country'
                    placeholder="Select a Country" className="w-full md:w-14rem" />
                    <ErrorMessage
                              name="country"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
            </div>
        </>
    )
}
