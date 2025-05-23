import React from "react";
import { InputText } from "primereact/inputtext";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Button } from "primereact/button";
import { Gender } from "../formFiles/gender";
import { Relegion } from "../formFiles/relegion";
import { Blood } from "../formFiles/blood";
import { Nationality } from "../formFiles/nationality";
import { District } from "../formFiles/district";
import { Marital } from "../formFiles/marital";
import { initialValues } from "../js folder/initaals";
import { validationSchema } from "../js folder/validation";

export function FormComponent() {
  return (
    <>
      <div className="container mx-auto bg-[0101010] shadow-lg p-6">
        <h1 className="text-center capitalize font-bold text-4xl mt-2 mb-8">
          Form with Validation
        </h1>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            console.log("submitted values", values);
            alert("form submitted");
            action.resetForm();
          }}
        >
          <Form className="space-y-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Field name="F_name">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <InputText {...field} placeholder="Enter your first name" />
                    <ErrorMessage
                      name="F_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <Field name="L_name">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <InputText {...field} placeholder="Enter your name" />

                    <ErrorMessage
                      name="L_name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <InputText {...field} placeholder="Enter your name" />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <Field name="cnic">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CNIC
                    </label>
                    <InputText
                      {...field}
                      placeholder="Enter your Cnic"
                      type="number"
                    />

                    <ErrorMessage
                      name="cnic"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>
            </div>
            {/* ------------------- */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Field name="father">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Father Name
                    </label>
                    <InputText {...field} placeholder="Your Father name" />

                    <ErrorMessage
                      name="father"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <Field name="F_cnic">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Father CNIC
                    </label>
                    <InputText
                      {...field}
                      placeholder="Father CNIC"
                      type="number"
                    />

                    <ErrorMessage
                      name="F_cnic"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <Field name="occupation">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Father Occupation
                    </label>
                    <InputText {...field} placeholder="Father Occupation" />

                    <ErrorMessage
                      name="occupation"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <Field name="income">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Father Income
                    </label>
                    <InputText
                      {...field}
                      placeholder="Father Income"
                      type="number"
                    />

                    <ErrorMessage
                      name="income"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>
            </div>
            {/* ------------------------ */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <Gender />
              </div>
              <div>
                <Relegion />
              </div>
              <div>
                <Blood />
              </div>

              <Field name="birth">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <InputText
                      {...field}
                      placeholder="Date Of Birth"
                      type="date"
                    />

                    <ErrorMessage
                      name="birth"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>
            </div>
            {/* ----------------------------- */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Field name="contact">
                {({ field }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <InputText
                      {...field}
                      placeholder="Your Contact Number"
                      type="number"
                    />

                    <ErrorMessage
                      name="contact"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </Field>

              <div>
                <Nationality />
              </div>
              <div>
                <District />
              </div>
              <div>
                <Marital />
              </div>
            </div>
            {/* -------------------- */}
            <Field name="adress">
              {({ field }) => (
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Postal Adress
                  </label>
                  <InputText
                    className="w-full"
                    {...field}
                    placeholder="Your Adress"
                  />
                  <ErrorMessage
                    name="adress"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}
            </Field>

            {/* ------------ */}
            <Button label="Submit" type="submit" />
          </Form>
        </Formik>
      </div>
      {/* <InputText placeholder='Enter your name'/> */}
    </>
  );
}
