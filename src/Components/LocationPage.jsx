import React from 'react'
import Navbar from './Navbar';
import DescCollapseAbout from './DescCollapseAbout';
import Footer from './Footer';
import imgtest from '../assets/Images/IMG2.png';

function LocationPage() {
  return (
    <div className='LocationPage'>
        <Navbar/>
        <div className='LocationPage_carrousel'>
            <img src={imgtest} alt="" />
        </div>
        <div className='LocationPage_container'>
            <div className='LocationPage_title'>
                <h2>Cozy loft on the Canal Saint-Martin</h2>
                <h3>Paris, Île-de-France</h3>
                <div className='LocationPage_title_tag'>
                    <p>Cozy</p>
                    <p>Canal</p>
                    <p>Paris 10</p>
                </div>
            </div>
            <div className='LocationPage_owner'>
                <div className='LocationPage_owner_content'>
                    <h4>Alexandre <br />Dumas</h4>
                    <span className='LocationPage_owner_content_badge'></span>
                </div>
                <div className='LocationPage_owner_stars'>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>
            </div>
        </div>
        <div className='LocationPage_desccollapse'>
            <DescCollapseAbout title="Description">
                <p>Phasellus porttitor metus ornare justo vehicula cursus. Donec eu sem placerat, accumsan est nec, convallis lorem. Morbi tempus sed nunc eu ultrices. Duis vitae interdum felis. Nulla tincidunt at orci ut tempus. Nulla ultricies augue non velit consectetur, in auctor orci sollicitudin. Nunc hendrerit nulla in elit aliquam interdum. Curabitur massa metus, euismod quis pharetra ac, commodo vel orci. Cras quis magna tempor, suscipit sapien sed, ullamcorper lorem.</p>
            </DescCollapseAbout>
            <DescCollapseAbout title="Equipements">
                <p></p>
            </DescCollapseAbout>
        </div>
        <Footer/>
    </div>
  )
}

export default LocationPage;