import React, { useReducer } from 'react'
import { createContext } from "react";

const initail = {

}

function Reducer(state,action){

}
export const TodoContext = createContext();

export function Todocontext({children}) {
    const [state,dispatch] = useReducer(Reducer,initail);

    return (
        <>
            <TodoContext.Provider value={{}}>
                 {children}
            </TodoContext.Provider>
        </>
    )
}
