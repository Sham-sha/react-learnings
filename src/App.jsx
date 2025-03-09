import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ShopAll from "./pages/ShopAll";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop-all" element={<ShopAll />} />
          <Route path="/blog" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
