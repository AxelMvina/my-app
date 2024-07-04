import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import DescCollapseAbout from '../../Components/Collapse/DescCollapseAbout';
import Footer from '../../Components/Footer/Footer';
import Logements from "../../assets/Data/Data.json";
import Gallery from '../../Components/Gallery/Gallery.jsx'
import Rating from '../../Components/Rating/Rating';
import Tag from '../../Components/Tag/Tag';
import OwnerContent from '../../Components/OwnerContent/OwnerContent';
import logo from '../../assets/Images/Logo.png';
import './LocationPage.scss';

// Fonction pour trouver un logement par son ID
const findLocationByID = (id) => {
    return Logements.find((logement) => logement.id === id);
}

function LocationPage() {
    const { id } = useParams(); // Récupération de l'ID depuis les paramètres d'URL
    const logement = findLocationByID(id); // Recherche du logement correspondant à l'ID

    // Vérifie si le logement n'est pas trouvé, redirige vers la page d'erreur
    if (!logement) {
        return <Navigate to="/ErrorPage" />;
    }

    // Destructuration des propriétés nécessaires depuis l'objet logement
    const { tags, pictures, equipments, title, location, host, rating, description } = logement;

    return (
        <div className='LocationPage'>
            <div className="App_main">
                <Navbar />

                <Gallery pictures={pictures}/>

                <div className='LocationPage_container'>
                    <div className='LocationPage_title'>
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                        <Tag tags={tags} />
                    </div>

                    <div className='LocationPage_owner'>
                        <OwnerContent host={host} /> 
                        <div className='LocationPage_owner_stars'>
                            <Rating rating={rating} />
                        </div>
                    </div>
                </div>

                <div className='LocationPage_desccollapse'>
                    <DescCollapseAbout title="Description" text={description} />

                    <DescCollapseAbout
                        title="Équipements"
                        text={equipments.map((equipment, index) => (
                            <p key={index} className="collapse_content_eguipments">{equipment}</p>
                        ))}
                    />
                </div>
            </div>
            <Footer title="© 2020 Kasa. All 
               rights reserved" 
               logo={logo}/>
        </div>
    );
}

export default LocationPage;
