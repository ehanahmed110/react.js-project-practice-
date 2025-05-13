import React, { useContext } from 'react'
import { subjectcontext } from './contextData'

export function Subject() {
    const subject=useContext(subjectcontext);

    return (
        <>
           <div className='bg-blue-900 p-8'>
            <h1 className='text-4xl'>subject:{subject}</h1>
            </div> 
        </>
    )
}
