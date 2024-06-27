import React from "react";

import './Footer.scss'

function Footer({logo, title}) {
    return (
        <div className="Footer">
            <img src={logo} alt="logo kasa" />
            <p>{title}</p>
        </div>
    )
}

export default Footer;