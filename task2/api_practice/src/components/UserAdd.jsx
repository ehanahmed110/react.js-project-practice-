import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ValidationSchema } from "../js-folder/validation";

export function UserAdd() {
  const navigate = useNavigate();

  const handleSubmit =async (values,action)=>{
    try{
       const response = await axios.post("http://localhost:3000/users",values);
       if(response){
        alert("New user added");
        action.resetForm();
        navigate('/');
       }
    } catch(error){
      console.error("Axios error:", error);
      alert("Failed to add user");;
    }
  
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Add User
        </h1>
        <Formik
          initialValues={{ name: "", last: "", email: "" }}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* ✅ First Name */}
            <Field
              name="name"
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
            {/* ✅ Last Name */}
            <Field
              name="last"
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="last"
              component="div"
              className="text-red-500 text-sm"
            />
            {/* ✅ Email */}
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
            {/* ✅ Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
