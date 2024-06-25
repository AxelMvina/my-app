import React from 'react';
import './Rating.scss';

// Fonction pour afficher les étoiles de notation
const Rating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className="Rating">
            {Array.from({ length: totalStars }, (_, index) => (
                <span key={index} className="star">
                    {index < rating ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
};


export default Rating;