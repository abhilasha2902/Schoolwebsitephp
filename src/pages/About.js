import React, { useState } from 'react';
import NavBar from './Navbar';
import './About.css';

// Import images directly from src

import image2 from '../images/rpspic.jpeg';
import image3 from '../images/rpspic2.jpeg';  // New image 3
import image4 from '../images/rpspic4.jpeg';  // New image 4
import image1 from '../images/3682a327-1554-4a11-8d03-6d156d1b1149.jpeg';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4, ]; // Added new images

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="about-container">
      <NavBar />
      <div className="about-content">
        <h2 className="page-title">About RPS International School</h2>
        <p className="about-text">
          RPS International School was inaugurated on 16th February 2020 with the vision to provide quality education to young children in a nurturing and supportive environment. Our school caters primarily to children under the 6th standard, focusing on building a strong educational foundation during these formative years. Our mission is to ensure that every child, regardless of their background, has access to the tools, resources, and guidance necessary to succeed in their educational journey.
        </p>
        <p className="about-text">
          At RPS International School, we believe that every child deserves the opportunity to thrive, both academically and socially. Our dedicated and highly qualified teachers work tirelessly to create an enriching learning experience that goes beyond textbooks. They are not only educators but mentors, guiding our students with passion and commitment.
        </p>
        <p className="about-text">
          We take great pride in making education accessible to all. The school provides textbooks, uniforms, and other necessary materials at minimal costs, ensuring that students from economically disadvantaged backgrounds can also enjoy the same quality education as their peers. This initiative is part of our commitment to making education inclusive and equitable for all families, regardless of their financial situation.
        </p>
        <p className="about-text">
          Under the leadership of our Director, Khushboo, RPS International School is striving to create an educational space where children from all walks of life can build a bright future. Khushboo's dedication to serving the underprivileged is truly remarkable. She is wholeheartedly committed to ensuring that students, particularly those from low-income families, receive a quality education that empowers them to break barriers and achieve success. Through her leadership, the school has become a place of hope and opportunity for many young learners.
        </p>
        <p className="about-text">
          As we continue to grow, our focus remains on providing the best possible educational experience. We believe in the power of education to transform lives, and we are proud to be part of this journey alongside our students, parents, and community. At RPS International School, every child matters, and we are dedicated to helping them reach their fullest potential.
        </p>
      </div>

      <div className="slideshow-container">
        <div className="slideshow">
          <img 
            src={images[currentImageIndex]} 
            alt={`School Image ${currentImageIndex + 1}`} 
            className="slideshow-image" 
          />
        </div>
        <button className="prev" onClick={prevImage}>❮</button>
        <button className="next" onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default About;
