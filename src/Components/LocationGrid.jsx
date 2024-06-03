import React from "react";
import Apartment from "./Apartment.jsx";
import Logements from "../assets/logements/Logements.json";

function LocationGrid() {
    return (
        <div className="grid">
            <Apartment Logements={Logements}/>
        </div>
    )
}

export default LocationGrid;