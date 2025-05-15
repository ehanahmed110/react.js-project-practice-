import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import { ProductList } from "./components/ProductList";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

