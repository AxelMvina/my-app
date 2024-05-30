import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Banner from "./Components/Banner.jsx";
import LocationGrid from "./Components/LocationGrid.jsx";
import Footer from "./Components/Footer.jsx";
import './assets/css/App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <LocationGrid/>
      <Footer/>
    </div>
  );
}

export default App;
