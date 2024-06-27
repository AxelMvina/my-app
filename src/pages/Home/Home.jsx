import React from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import './Home.scss';
import background from "../../assets/Images/BannerHomePage.png";
import Apartment from "../../Components/Apartment/Apartment.jsx";
import Logements from "../../assets/Data/Data.json";
import logo from '../../assets/Images/Logo.png';


function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Banner image={background} title="Chez vous, partout et ailleurs" />
      <div className="grid">
            <Apartment Logements={Logements}/>
      </div>
      <Footer title="© 2020 Kasa. All 
               rights reserved" 
               logo={logo}/>
    </div>
  );
}

export default Home;
