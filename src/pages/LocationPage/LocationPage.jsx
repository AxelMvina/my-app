import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import DescCollapseAbout from '../../Components/Collapse/DescCollapseAbout';
import Footer from '../../Components/Footer/Footer';
import Logements from "../../assets/Data/Data.json";
import './LocationPage.scss';

// Fonction pour trouver un logement par son ID
const findLocationByID = (id) => {
    return Logements.find((logement) => logement.id === id);
}

function LocationPage() {
    const { id } = useParams(); // Récupération de l'ID depuis les paramètres d'URL
    const logement = findLocationByID(id); // Recherche du logement correspondant à l'ID


    // État pour gérer l'index de l'image courante dans le carrousel
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Vérifie si le logement n'est pas trouvé, redirige vers la page d'erreur
    if (!logement) {
        return <Navigate to="/Error404" />;
    }

    // Destructuration des propriétés nécessaires depuis l'objet logement
    const { tags, pictures, equipments, title, location, host, rating, description } = logement;

    // Fonction pour passer à l'image précédente dans le carrousel
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    // Fonction pour passer à l'image suivante dans le carrousel
    const nextSlide = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    // Fonction pour afficher les étoiles de notation
    const renderStars = (rating) => {
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, index) => (
            <span key={index} className="star">
                {index < rating ? "★" : "☆"}
            </span>
        ));
    };

    return (
        <div className='LocationPage'>
            <Navbar />

            <div className='LocationPage_carrousel'>
                <button onClick={prevSlide} className='LocationPage_carrousel_buttonPrev'>❮</button>
                <img src={pictures[currentIndex]} alt={`photo logement ${currentIndex + 1}`} />
                <div className='LocationPage_carrousel_index'>
                    {currentIndex + 1} / {pictures.length}
                </div>
                <button onClick={nextSlide} className='LocationPage_carrousel_buttonNext'>❯</button>
            </div>

            <div className='LocationPage_container'>
                <div className='LocationPage_title'>
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                    <div className='LocationPage_title_tag'>
                        {tags.map((tag, index) => (
                            <p key={index}>{tag}</p>
                        ))}
                    </div>
                </div>

                <div className='LocationPage_owner'>
                    <div className='LocationPage_owner_content'>
                        <h4>{host.name}</h4>
                        <img className='LocationPage_owner_content_badge' src={host.picture} alt='Photo du propriétaire' />
                    </div>
                    <div className='LocationPage_owner_stars'>
                        {renderStars(rating)}
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

            <Footer />
        </div>
    );
}

export default LocationPage;
