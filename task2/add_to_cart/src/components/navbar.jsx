// /src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Navbar() {
  const { state } = useContext(CartContext);

  return (
    <nav className="container mx-auto bg-gray-500 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-bold uppercase">Shopping Cart</h1>
      <Link to="/" className="text-lg font-bold">Home</Link>
      <Link to="/cart" className="relative text-3xl">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {state.cart.length}
        </span>
      </Link>
    </nav>
  );
}

