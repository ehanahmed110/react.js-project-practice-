import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'

export function UserList() {
const url = "http://localhost:3000/users";
const [data, setData] = useState([]);
const navigate = useNavigate();
  const [loding,setLoding] = useState(false);//for loading show 
   useEffect(()=>{
     GetData();
     setLoding(true);
},[])

  async function GetData(){
     let response =await fetch(url);
     response =await response.json();
     //console.log(response)
     setData(response);
     setLoding(false);
  };
  async function DeleteUser(id){
     let response = await fetch(url+"/"+id,{
      method:'delete'
     });
     response = await response.json();
     if(response){
      alert('user deleted');
      GetData();
     }
  };
   function EditUser(id){
      navigate('/edit')
   }

    return (
        <>
           <h1 className="text-xl">This is the User List Page</h1>;
      <ul>
        {
          !loding ?
        data && data.map((user)=>(
          <ul className='flex space-x-6 space-y-8' key={user.id}>
             <li key={user.id}></li>
             <li>{user.name}</li>
             <li>{user.last}</li>
             <li>{user.email}</li>
             <li><button onClick={()=>DeleteUser(user.id)} className='cursor-pointer border py-1 px-2 rounded-lg'>DELETE</button></li>
             <li><button onClick={()=>EditUser(user.id)} className='cursor-pointer border py-1 px-2 rounded-lg'>Edit</button></li>

          </ul>
         
        ))
        : <h1>Loding.........</h1>
      }
        
      </ul>  
        </>
    )
}
