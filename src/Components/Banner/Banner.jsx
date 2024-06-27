import React from "react";
import './Banner.scss'


function Banner({image, title}) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            {title !== undefined &&
                <h1>{title}</h1>
            }
        </div>
    )
    
}

export default Banner;