import React from 'react'
import { useState,useEffect } from 'react'

export function ProductList() {
    
const [data, setData] = useState([]);
  const [loding,setLoding] = useState(false);//for loading show 
   useEffect(()=>{
     GetData();
     setLoding(true);
},[])

  async function GetData(){
    const url = "http://localhost:3000/products";
     let response =await fetch(url);
     response =await response.json();
     //console.log(response)
     setData(response);
     setLoding(false);
  }
    return (
        <>
           <h1>fetch Data from API</h1>
      <ul>
        {
          !loding ?
        data && data.map((products)=>(
          <li key={products.id}>{products.title}</li>
        ))
        : <h1>Loding.........</h1>
      }
        
      </ul>  
        </>
    )
}
