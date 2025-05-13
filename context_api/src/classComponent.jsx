import React from 'react'
import { Student } from './student'

export function ClassComponent() {
    

    return (
        <>
            <div className='bg-yellow-300 p-8'>
                <h1 className='text-4xl'>Class Components</h1>
                <Student/>
            </div>
        </>
    )
}
