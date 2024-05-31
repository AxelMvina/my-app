import React from "react";
import {Link} from "react-router-dom";

function Apartment() {
    return (
        <div className="Apartment">
            <Link to="/Location">
            <h2 className="Apartment_p">Titre de la <br/> location</h2>
            </Link>
        </div>
    )
}

export default Apartment;