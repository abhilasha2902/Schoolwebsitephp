// components/Home.js
import React from 'react';
import NavBar from './Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../pages/Home.css'; // Importing the CSS for background styling and additional styles
import Footer from './Footer'; // Import the footer component

const Home = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-page">
      <NavBar />

      {/* Main Content Section */}
      <div className="page-container1">
      
          <h1 className="page-title">RPS INTERNATIONAL SCHOOL</h1>
         
       
      </div>

      {/* Photo Slider Section */}
      <div className="photo-slider">
        <Slider {...sliderSettings}>
        <div>
            <img src={require("../images/slider3.jpg")} alt="School Events" className="slider-image" />
          </div>
          <div>
            <img src={require("../images/slider2.avif")} alt="School Campus" className="slider-image" />
          </div>
          <div>
            <img src={require("../images/slider1.jpg")} alt="Students in Classroom" className="slider-image" />
          </div>
          
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
