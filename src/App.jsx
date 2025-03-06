import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings";
import Props from "./pages/Props";
import Reg from "./pages/Reg";
import ContextApi from "./pages/ContextApi";
import Problem6 from "./pages/Problem6";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/props" element={<Props />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/context-api" element={<ContextApi />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/problem6" element={<Problem6/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
