import {ErrorMessage,useFormik } from 'formik'
import React from 'react'
import { FormSchema } from './validation';

const initial={
    name:'',
    email:'',
    password:'',
    confirm_password:'',
}
export function Formic() {
   const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initial,
        validationSchema:FormSchema,
        onSubmit:(values,action) => {
            console.log(values);
            action.resetForm();
        }
        
    })
     
    return (
        <>
         <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-8 space-y-5"
>
  {/* Name */}
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Your Name
    </label>
    <input
      name="name"
      type="text"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.name && touched.name ? (
      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
    ) : null}
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email Address
    </label>
    <input
      name="email"
      type="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.email && touched.email ? (
      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
    ) : null}
  </div>

  {/* Password */}
  <div>
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
      Password
    </label>
    <input
      name="password"
      type="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.password && touched.password ? (
      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
    ) : null}
  </div>

  {/* Confirm Password */}
  <div>
    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
      Confirm Password
    </label>
    <input
      name="confirm_password"
      type="password"
      value={values.confirm_password}
      onChange={handleChange}
      onBlur={handleBlur}
      className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {errors.confirm_password && touched.confirm_password ? (
      <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
    ) : null}
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-200"
  >
    Submit
  </button>
</form>

        </>
    )
}
