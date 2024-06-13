import React from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import LocationGrid from "../../components/LocationGrid.jsx";
import Footer from "../../components/Footer.jsx";
import './Home.scss';
import background from "../../assets/Images/bannerHome.png";

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Banner image={background} title="Chez vous, partout et ailleurs" />
      <LocationGrid/>
      <Footer/>
    </div>
  );
}

export default Home;
