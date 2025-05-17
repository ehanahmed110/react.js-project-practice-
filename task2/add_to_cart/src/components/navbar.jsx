// /src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const[open,setopen]=useState(false);

  return (
    <>
    <nav className=" mx-auto bg-gray-500 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold uppercase">Shopping Cart</h1>
        <div className="md:flex hidden gap-x-6">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <Link to="/about" className="text-lg font-bold">About Us</Link>
            <Link to="/service" className="text-lg font-bold">Servces</Link>
            <Link to="/contact" className="text-lg font-bold">Contact</Link>

        </div>
       <div className="flex space-x-3">
      <Link to="/cart" className="relative text-3xl">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {state.cart.length}
        </span>
      </Link>
      <button onClick={()=>{setopen(!open)}} className="md:hidden mt-2 cursor-pointer text-xl">{(open)?<FaTimes/>:<FaBars/>}</button>
      
       </div>
    </nav>
    {/* -----mobile-menue */}
    {open && (
       <div >
          <ul className="md:hidden  gap-y-2 flex  flex-col p-4 bg-gray-500">
              <li className="text-lg font-bold bg-gray-400 p-2 hover:bg-gray-300"><Link to="/">Home</Link></li>
              <li className="text-lg font-bold bg-gray-400 p-2 hover:bg-gray-300"><Link to="/about">About Us</Link> </li>
              <li className="text-lg font-bold bg-gray-400 p-2 hover:bg-gray-300"><Link to="/service">Servces</Link></li>
              <li className="text-lg font-bold bg-gray-400 p-2 hover:bg-gray-300"><Link to="/contact">Contact</Link></li>
         </ul>
        </div>
    )}
   
     </>
  );
}

