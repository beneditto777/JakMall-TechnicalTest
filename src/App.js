import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import HomePage from "./pages/homePage";
import Cart from "./pages/cart";
import Delivery from "./pages/delivery";
import Payment from "./pages/payment";
import Finish from "./pages/finish";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
