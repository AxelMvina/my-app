import React from "react";
import background from "../assets/Images/IMG1.png";

function Banner() {
    return (
        <div className="banner" style={{ backgroundImage: `url(${background})` }}>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
    
}

export default Banner;