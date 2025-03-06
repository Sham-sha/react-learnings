import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div> <Link to="/">Home</Link> </div>
      <div> <Link to="/about">About</Link> </div>
      <div> <Link to="/dashboard">Dashboard</Link> </div>
      <div> <Link to="/settings">Settings</Link> </div>
      <div> <Link to="/props">Props</Link> </div>
      <div> <Link to="/reg">Reg</Link> </div>
      <div> <Link to="/context-api">Context API</Link> </div> 
      <div> <Link to="/problem6">Problem_6</Link> </div> 

    </div>
  );
}

export default Navbar;
