import React, { useState } from 'react'

export function UserAdd() {
    const [name,setName] = useState('');
    const [last,setLast] = useState('');
    const [email,setMail] = useState('');
    
async function AddUser(){
   const url = "http://localhost:3000/users";
   let response = await fetch(url,{
    method:'post',
    body:JSON.stringify({name,last,email})
   });
   response = await response.json();
   if(response){
    alert("new user add")
   }
 }
    return (
        <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
               <h1 className="text-2xl font-semibold mb-6 text-center text-blue-600">
                 Add User
               </h1>
        <form action="#" className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setLast(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setMail(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
              onClick={AddUser}
            >
              Submit
            </button>
        </form>
    </div>
        
        </>
    )
}
