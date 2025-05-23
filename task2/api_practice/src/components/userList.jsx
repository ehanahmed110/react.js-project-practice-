import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect,useRef } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '../context/userContext';
import { FETCH_USER_SUCCESS, FETCH_USERS_ERROR, SET_LOADING,SET_SEARCH_TERM } from '../js-folder/type';
import Spinner from './spinner';
import {useReactToPrint} from 'react-to-print';
import { InputText } from 'primereact/inputtext';
import { contentRef } from 'react-to-print';


export default function UserList() {
  
  const { state,dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  //for print-----------------
  const componentRef = useRef();

  const HandlePrint = useReactToPrint ({
       contentRef : componentRef
     
  }) 
   


const url = "http://localhost:3000/users";

   useEffect(()=>{
     GetData();
 
    },[])


    //for display data
  async function GetData(){
    dispatch({type:SET_LOADING});
    try{
    const response =  await axios.get(url);
    dispatch({type: FETCH_USER_SUCCESS,payload:response.data});
    }catch (error) {
      dispatch({ type: FETCH_USERS_ERROR, payload: error.message });
    }

  };

   // for delete user
  async function DeleteUser(id){
    try{
      const response = await axios.delete(`${url}/${id}`);
       if(response.data){
         alert('user deleted');
         GetData();
       }
    } catch (error) {
    console.error('Delete error:', error);
    alert('Failed to delete user');
  }
  
  };
   function EditUser(id){
      navigate(`/edit/${id}`)
   }

   const flteredUser = state.users.filter((user)=>
   user.name.toLowerCase().includes(state.searchTerm.toLowerCase())||
   user.last.toLowerCase().includes(state.searchTerm.toLowerCase())||
   user.email.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

    return (
        <>
     <h1 className="text-2xl font-semibold mb-6 text-center text-blue-600 mt-4">User Table (Sorting + Filtering)</h1>
       {/* ✅ Search input */}
      
      <div className="max-w-4xl mx-auto mb-4">
        <span className="p-input-icon-left mb-3">
           <i className="pi pi-search" />
        <input
          type="text"
          placeholder="Search by name, last name, or email"
          value={state.searchTerm}
          onChange={(e) =>
            dispatch({ type: SET_SEARCH_TERM, payload: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        /></span>
      </div>
      {/* ---------------print button---------------- */}
      <div className='flex justify-end items-end px-50'>
  <button className=' border bg-black text-white rounded-lg px-4 py-2 cursor-pointer' onClick={HandlePrint}>Print</button>
      </div>

<div className="max-w-4xl mx-auto" ref={componentRef}>
  <div className="grid grid-cols-5 font-bold border-b pb-2 mb-2">
    <div>First Name</div>
    <div>Last Name</div>
    <div>Email</div>
    <div>Actions</div>
  </div>

  {
    state.loading ? (
      <Spinner/>
    ):
    (
       flteredUser.length>0 ? (
        flteredUser.map((user) =>(
          <div key={user.id} className="grid grid-cols-5 items-center border-b py-2">
          <div>{user.name}</div>
          <div>{user.last}</div>
          <div>{user.email}</div>
          <div className="space-x-2">
            <button
              onClick={() => DeleteUser(user.id)}
              className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
            <button
              onClick={() => EditUser(user.id)}
              className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              Edit
            </button>
          </div>
        </div>
        ))
       ):(
        <p className="text-center text-gray-600">No users found</p>
       )
    ) 
  }
</div>
 
        </>
    )
}
