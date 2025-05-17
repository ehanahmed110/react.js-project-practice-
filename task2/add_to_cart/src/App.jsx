import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import { Home } from "./pages/home";
import About from "./pages/about";
import Service from "./pages/services";
import Contact from "./pages/contact";
import { Layout } from "./pages/layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

