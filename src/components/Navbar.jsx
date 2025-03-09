import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/shop-all" className="nav-link">Shop All</Link></li>
          <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
          <li><Link to="/" className="nav-link brand"><strong>Mocom📱</strong></Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;