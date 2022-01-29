import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import Book from "./pages/Book";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
