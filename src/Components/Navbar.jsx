import React from "react";
import logo from '../assets/Images/Logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
            <img src={logo} alt="logo Kasa"/>
            </div>
            <div className="navbar_link">
            <span className="navbar_link_span">Accueil</span>
            <span className="navbar_link_span">A propos</span>
            </div>
        </nav>
    )
}

export default Navbar;