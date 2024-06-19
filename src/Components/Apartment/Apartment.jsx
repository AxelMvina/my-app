import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './Apartment.scss'

function Apartment({ Logements }) {
    return (
        <div className="div_Apartment">
            {Logements.map((Logement) => (
                <div className="Apartment" key={Logement.id}>
                    <Link to={`/Location/${Logement.id}`}>
                        <img src={Logement.cover} alt={Logement.title}/>
                        <h2 className="Apartment_p">{Logement.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

Apartment.propTypes = {
    Logements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Apartment;