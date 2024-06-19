import React from "react";
import logo from '../../assets/Images/Logo.png';
import './Footer.scss'

function Footer() {
    return (
        <div className="Footer">
            <img src={logo} alt="logo kasa" />
            <p>© 2020 Kasa. All 
               rights reserved</p>
        </div>
    )
}

export default Footer;