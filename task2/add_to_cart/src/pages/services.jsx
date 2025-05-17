import React from 'react'
import { useNavigate}  from 'react-router-dom'
export default function Services() {
     const navigate = useNavigate();
    const Goto=()=>{
        navigate('/')
    }

    return (
        <>
            <h1>service page</h1>
             <button onClick={()=> Goto()} className='bg-black text-white mt-4 mb-4 border border-2 rounded-lg px-2 py-1 hover:bg-transparent hover:border-black hover:text-black cursor-pointer'>Back to Home</button>
             <button onClick={()=> navigate(-1)} className='bg-black text-white mt-4 mb-4 border border-2 rounded-lg px-2 py-1 hover:bg-transparent hover:border-black hover:text-black cursor-pointer'>Go Back</button>

        </>
    )
}
