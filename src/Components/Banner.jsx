import React from "react";


function Banner({image, title}) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1>{title}</h1>
        </div>
    )
    
}

export default Banner;