import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Images/Logo.png';
import './Navbar.scss'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="logo Kasa"/>
            </div>
            <div className="navbar_link">
                <span className="navbar_link_span">
                    <NavLink to="/">Accueil</NavLink>
                </span>
                <span className="navbar_link_span">
                    <NavLink to="/About">A propos</NavLink>
                </span>
            </div>
        </nav>
    )
}

export default Navbar;