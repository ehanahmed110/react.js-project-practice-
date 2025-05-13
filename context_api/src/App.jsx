import React from 'react'
import { useState } from 'react'
import { CollegeComponent } from './collegeComponent'
import { subjectcontext } from './contextData'

function App() {
  const [subject, setSubject] = useState('')

  return (
    <>
    <div className='bg-amber-300 p-10'>
      <h1 className='text-4xl'>Contet API</h1>
     
      <subjectcontext.Provider value={subject}>
        <div className='flex gap-x-6'>
           <div className=''>
              <select className='border p-2 cursor-pointer' value={subject} onChange={(event)=>setSubject(event.target.value)}>
                    <option value=''>Select Subject</option>
                    <option value='Math'>Math</option>
                    <option value='Histort'>History</option>
                    <option value='English'>English</option>
               </select>
           </div>
           <div>
               <button className='border p-2 cursor-pointer' onClick={()=>setSubject('')}>Clear</button>
           </div>
        </div>
       
        
      <CollegeComponent/>
      </subjectcontext.Provider>
      
      </div>
    </>
  )
}

export default App
