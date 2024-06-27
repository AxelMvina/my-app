import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import logo from '../../assets/Images/Logo.png';
import "./ErrorPage.scss"

function Error() {
    return (
        <div className="ErrorPage">
            <Navbar/>
            <h1>404</h1>
            <p className="ErrorPage_p">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="ErrorPage_a">Retourner sur la page d’accueil</Link>
            <Footer title="© 2020 Kasa. All 
                rights reserved" 
                logo={logo}/>
        </div>
    )
    
}

export default Error;

