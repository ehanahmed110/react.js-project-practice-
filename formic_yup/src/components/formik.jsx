import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




export function MyForm() {
          const Validation = Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
        });
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Formik & Yup Form</h1>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={Validation}
          onSubmit={(values,action) => {
            console.log(values);
            action.resetForm();
          }}
          
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <Field
                name="name"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <Field
                name="password"
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

