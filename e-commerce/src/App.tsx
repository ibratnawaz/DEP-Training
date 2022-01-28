import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";
import Book from "./pages/Book";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/orders" element={"my orders"} />
          <Route path="/cart" element={"my cart"} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
