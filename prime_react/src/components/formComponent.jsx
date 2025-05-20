import { InputText } from 'primereact/inputtext'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export function FormComponent() {
    

    return (
        <>
            <h1>Form with Validation</h1>
            
            <Formik>
                <Form className='space-y-4'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                     <div>
                       <label className="block text-sm font-medium text-gray-700">First Name</label>
                       <InputText name='F_name' placeholder='Enter your name'/>
                       
                       <ErrorMessage name="F_name" component="div" 
                         className="text-red-500 text-sm mt-1"
                       />
                     </div>
                      <div>
                       <label className="block text-sm font-medium text-gray-700">Last Name</label>
                       <InputText name='L_name' placeholder='Enter your name'/>
                       
                       <ErrorMessage name="L_name" component="div" 
                         className="text-red-500 text-sm mt-1"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700">Email</label>
                       <InputText name='email' placeholder='Enter your name'/>
                       
                       <ErrorMessage name="email" component="div" 
                         className="text-red-500 text-sm mt-1"
                       />
                     </div>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3'>
                       <div>
                       <label className="block text-sm font-medium text-gray-700"></label>
                       <InputText name='email' placeholder='Enter your name'/>
                       
                       <ErrorMessage name="email" component="div" 
                         className="text-red-500 text-sm mt-1"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700"></label>
                       <InputText name='email' placeholder='Enter your name'/>
                       
                       <ErrorMessage name="email" component="div" 
                         className="text-red-500 text-sm mt-1"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700"></label>
                       <InputText name='email' placeholder='Enter your name'/>
                       
                       <ErrorMessage name="email" component="div" 
                         className="text-red-500 text-sm mt-1"
                       />
                     </div>
                    </div>

                </Form>
            </Formik>
                {/* <InputText placeholder='Enter your name'/> */}
        </>
    )
}
