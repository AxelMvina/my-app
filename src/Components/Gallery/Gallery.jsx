import React, { useState } from 'react';
import './Gallery.scss'

const Gallery = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className='Carrousel'>
            <button onClick={prevSlide} className='Carrousel_buttonPrev'>❮</button>
            <img src={pictures[currentIndex]} alt={`photo logement ${currentIndex + 1}`} />
            <div className='Carrousel_index'>
                {currentIndex + 1} / {pictures.length}
            </div>
            <button onClick={nextSlide} className='Carrousel_buttonNext'>❯</button>
        </div>
    );
};



export default Gallery;