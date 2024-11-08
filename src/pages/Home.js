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
        <div className="content-overlay">
          <h1 className="page-title">RPS International School</h1>
          <p className="page-description">
            We offer quality education, state-of-the-art facilities, and an excellent faculty team.
          </p>
        </div>
      </div>

      {/* Photo Slider Section */}
      <div className="photo-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src="/images/rpshome3.png" alt="School Campus" className="slider-image" />
          </div>
          <div>
            <img src="/images/rpshome2.webp" alt="Students in Classroom" className="slider-image" />
          </div>
          <div>
            <img src="/images/rpshome4.jpg" alt="School Events" className="slider-image" />
          </div>
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
