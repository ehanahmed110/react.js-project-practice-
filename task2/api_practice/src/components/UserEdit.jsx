import axios from "axios";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { ValidationSchema } from "../js-folder/validation";

export function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  const url = `http://localhost:3000/users/${id}`;

  useEffect(() => {
    async function FetchUser() {
      try {
        const response = await axios.get(url);
        const user = response.data;
        setInitialValues({
          name: user.name,
          last: user.last,
          email: user.email,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    FetchUser();
  }, [url]);

  // for update -----

  const handleSubmit = async (values) => {
    try {
      const response = await axios.put(url, values);
      if (response) {
        alert("User updated successfully");
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };
  

  return (
    <>
      <h1 className="text-2xl text-center my-4">Edit User</h1>

      {
        initialValues ? (
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="max-w-md mx-auto space-y-4 p-4 border rounded">
              {/* First Name */}
              <Field
                name="name"
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />

              {/* Last Name */}
              <Field
                name="last"
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="last"
                component="div"
                className="text-red-500 text-sm"
              />

              {/* Email */}
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Update User
              </button>
            </Form>
          </Formik>
        ) : (
          <p className="text-center text-gray-600">Loading user data...</p>
        )
      }
    </>
  );
}
