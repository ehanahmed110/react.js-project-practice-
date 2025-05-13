import React from 'react'
import { Subject } from './subject'

export function Student() {
    

    return (
        <>
            <div className='bg-purple-500 p-7'>
                <h1 className='text-4xl'>student component</h1>
                <Subject/>
            </div>
        </>
    )
}
