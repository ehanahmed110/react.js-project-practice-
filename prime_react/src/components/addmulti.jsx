import { Form, Formik } from "formik";
import React, { useContext } from "react";
import { District } from "../formFiles/district";

import { initialValues } from "../js folder/initaals";
import { validationSchema } from "../js folder/validation";
import { Country } from "../formFiles/country";
import { Casecade } from "./casecade";
import { Button } from "primereact/button";
import { FormContext } from "../context.jsx/FormContext";

export function Addmulti() {
  const { state, dispatch } = useContext(FormContext);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validateYupSchema={validationSchema}
      >
        <Form>
          {state.map((_, index) => (
            <div key={index} className="container mx-auto flex gap-4">
                <Button
            icon="pi pi-times"
            severity="danger"
            className="mt-6"
            onClick={() => dispatch({ type: "REMOVE_ROW", index })}
          />
              <Country index={index} />
              <District index={index} />
              <Casecade index={index} />

            </div>
          ))}
        </Form>
      </Formik>
      <div>
        <Button
          label="Add New Row"
          icon="pi pi-plus"
          onClick={() => dispatch({ type: "ADD_ROW" })}
        />
      </div>
    </>
  );
}
