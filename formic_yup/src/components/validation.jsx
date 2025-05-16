import React from 'react';
import * as Yup from 'yup';


export const FormSchema = Yup.object({
    name : Yup.string().min(2,'at-least 2 charecters').required('name is required'),
    email : Yup.string().email('invalid email').required('email is requiered'),
    password : Yup.string().min(6,'at-least 6 charecters').required('password is required'),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'),null],'password must match')
})