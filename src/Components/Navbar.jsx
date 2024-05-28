import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="../assets/logo/Logo.png" alt="logo kasa" />
            </div>
            <div className="navbar_link">
            <span className="navbar_link_span">Accueil</span>
            <span className="navbar_link_span">A propos</span>
            </div>
        </nav>
    )
}

export default Navbar;