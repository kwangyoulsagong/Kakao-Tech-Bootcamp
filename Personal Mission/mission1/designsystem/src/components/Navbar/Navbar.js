import React from "react";
import "./Navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-header">
                <span className="navbar-title">이름</span>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar