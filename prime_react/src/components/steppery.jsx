import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { ErrorMessage, Field, Formik,Form } from "formik";
import { InputText } from "primereact/inputtext";
import { initialValues } from "../js folder/initaals";
import { validationSchema } from "../js folder/validation";
import { Gender } from "../formFiles/gender";
import { Relegion } from "../formFiles/relegion";
import { Blood } from "../formFiles/blood";
import { Nationality } from "../formFiles/nationality";
import { District } from "../formFiles/district";
import { Education } from "../formFiles/education";
import { ModeOfStudy } from "../formFiles/studymode";

export default function BasicDemo() {
  const stepperRef = useRef(null);

  return (
    <div className="card flex justify-content-center">
        <Formik
        initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values,actions)=>{
                    console.log("values"+values);
                    actions.resetForm();
                }}
        >
        <Form> 
      <Stepper ref={stepperRef} style={{ flexBasis: "56rem" }} className="">
        <StepperPanel header="Header I" >
          <div className="flex flex-column h-12rem shadow-lg">
            <div className=" surface-border border-round surface-ground flex-auto font-medium p-4 flex justify-center items-center flex-col">
              <h1 className="text-center text-3xl capitalize mb-6 font-bold">
                Basic Information
              </h1>
              
                  <div className="grid md:grid-cols-3  gap-4">
                    <Field name="F_name">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            First Name
                          </label>
                          <InputText
                            {...field}
                            placeholder="Enter your first name"
                            
                          />
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

                    <Field name="father">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Father Name
                          </label>
                          <InputText
                            {...field}
                            placeholder="Your Father name"
                          />

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
                          <InputText
                            {...field}
                            placeholder="Father Occupation"
                          />

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
                    {/* <div>
                      <Marital />
                    </div> */}
                  </div>
            </div>
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Header II">
          <div className="flex flex-column h-12rem shadow-lg">
            <div className="surface-border border-round surface-ground flex-auto flex flex-col justify-center items-center font-medium p-4">
              <h1 className="text-center text-3xl capitalize mb-8 font-bold">
                Accadmic Information
              </h1>
             
                  <div className="grid md:grid-cols-3  gap-4">
                    <div>
                      <Education />
                    </div>

                    <Field name="study">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Program Name
                          </label>
                          <InputText
                            {...field}
                            placeholder="Program name"
                            type="text"
                          />

                          <ErrorMessage
                            name="study"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="institute">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Institute Name
                          </label>
                          <InputText
                            {...field}
                            placeholder="Institute name"
                            type="text"
                          />

                          <ErrorMessage
                            name="institute"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="start">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Starting Date
                          </label>
                          <InputText
                            {...field}
                            placeholder="Start Date"
                            type="date"
                          />

                          <ErrorMessage
                            name="start"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="end">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Closing Date
                          </label>
                          <InputText
                            {...field}
                            placeholder="End Date"
                            type="date"
                          />

                          <ErrorMessage
                            name="end"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>

                    <Field name="marks">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Your Marks
                          </label>
                          <InputText
                            {...field}
                            placeholder="Marks/cgpa/Grade/Percentage"
                            type="text"
                          />

                          <ErrorMessage
                            name="marks"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="roll">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Your Roll No
                          </label>
                          <InputText
                            {...field}
                            placeholder="Enter Roll NO"
                            type="text"
                          />

                          <ErrorMessage
                            name="roll"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <div>
                      <ModeOfStudy />
                    </div>
                    <Button label="Save" 
                    pt={{
                        root:{className:"!h-[32px] !w-[100px] !rounded-none !mt-6"}
                    }}
                    />
                  </div>
                
            </div>
          </div>
          <div className="flex pt-4 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              onClick={() => stepperRef.current.nextCallback()}
            />
          </div>
        </StepperPanel>
        <StepperPanel header="Header III">
          <div className="flex flex-column h-12rem shadow-lg">
            <div className=" surface-border border-round surface-ground flex-auto flex flex-col justify-center items-center font-medium p-4">
              <h1 className="text-center text-3xl capitalize mb-6 font-bold ">
                Work Experience
              </h1>
             
                  <div className="grid md:grid-cols-3  gap-4">
                    <Field name="job">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Current Job Title
                          </label>
                          <InputText
                            {...field}
                            placeholder="Current Job Title"
                            type="text"
                          />

                          <ErrorMessage
                            name="job"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="company">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Company Name
                          </label>
                          <InputText
                            {...field}
                            placeholder="Company Name"
                            type="text"
                          />

                          <ErrorMessage
                            name="company"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="experien">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Years of Experience
                          </label>
                          <InputText
                            {...field}
                            placeholder="Experience"
                            type="text"
                          />

                          <ErrorMessage
                            name="experien"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>

                    <Field name="CurrentSallery">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Current Sallery
                          </label>
                          <InputText
                            {...field}
                            placeholder="Current Sallery"
                            type="text"
                          />

                          <ErrorMessage
                            name="CurrentSallery"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="expectSallery">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Expect Sallery
                          </label>
                          <InputText
                            {...field}
                            placeholder="Expect Sallery"
                            type="text"
                          />

                          <ErrorMessage
                            name="expectSallery"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                    <Field name="altercontect">
                      {({ field }) => (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Alternate Contact
                          </label>
                          <InputText
                            {...field}
                            placeholder="Alternate Contact"
                            type="text"
                          />

                          <ErrorMessage
                            name="altercontect"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className="mb-4 mt-4 col-span-3">
                    <Field name="adress">
                      {({ field }) => (
                        <div className="w-full">
                          <label className="block text-sm font-medium text-gray-700">
                            Your Postal Adress
                          </label>
                          <InputText
                            {...field}
                            placeholder="Your Adress"
                            className="!w-full block"
                            style={{display:'block',width:"100%"}}
                          />
                          <ErrorMessage
                            name="adress"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      )}
                    </Field>
                  </div>
                  <Button label="Submit" type="submit"
                  pt={{
                    root:{className:"w-full"}
                  }}
                  />
               
            </div>
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              onClick={() => stepperRef.current.prevCallback()}
            />
          </div>
        </StepperPanel>
      </Stepper>
      </Form>
        </Formik>
    </div>
  );
}
