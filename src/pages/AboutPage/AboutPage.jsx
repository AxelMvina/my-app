import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx';
import BannerAboutPage from '../../Components/Banner/BannerAboutPage.jsx';
import DescCollapseAbout from '../../Components/Collapse/DescCollapseAbout.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import './AboutPage.scss'


function AboutPage() {
  return (
    <div className='AboutPage'>
        <Navbar/>
        <BannerAboutPage/>
        <DescCollapseAbout title="Fiabilité" text={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}/>
          
        <DescCollapseAbout title="Respect" text={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}/>
          
        <DescCollapseAbout title="Service" text={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}/>
          
        <DescCollapseAbout title="Sécurité" text={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}/>
          
        <Footer/>
    </div>
  )
}

export default AboutPage;