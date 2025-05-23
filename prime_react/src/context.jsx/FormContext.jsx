import { createContext, useReducer } from "react";
import React from 'react'
import { FormReduce } from "./formReducer";

export const FormContext = createContext();

const initials={
    country:"",
    distrect:"",
    city:""
}

export function FormProvider({ children }) {
      
 const[state,dispatch] = useReducer(FormReduce,initials)
    return (
        <>
            <FormContext.Provider value={{state,dispatch}}>
                {children}
            </FormContext.Provider>
        </>
    )
}
