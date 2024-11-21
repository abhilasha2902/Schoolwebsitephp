import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaBookOpen, FaChalkboardTeacher, FaUsers, FaStar } from 'react-icons/fa';

import image2 from '../images/rpspic.jpeg';
import image3 from '../images/rpspic2.jpeg';
import image4 from '../images/rpspic4.jpeg';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [ image2, image3, image4];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="min-h-screen bg-primary-light">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold text-primary-blue text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About RPS International School
        </motion.h1>

        <div className="space-y-6 text-lg">
          <motion.p 
            className="text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            RPS International School was inaugurated on 16th February 2020 with the vision to provide quality education to young children in a nurturing and supportive environment. Our school caters primarily to children under the 6th standard, focusing on building a strong educational foundation during these formative years. Our mission is to ensure that every child, regardless of their background, has access to the tools, resources, and guidance necessary to succeed in their educational journey.
          </motion.p>

          <motion.div 
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaChalkboardTeacher className="text-3xl text-primary-blue" />
            <div>
              <h3 className="font-semibold text-xl">Dedicated Teachers</h3>
              <p className="text-gray-800">
                At RPS International School, we believe that every child deserves the opportunity to thrive, both academically and socially. Our dedicated and highly qualified teachers work tirelessly to create an enriching learning experience that goes beyond textbooks. They are not only educators but mentors, guiding our students with passion and commitment.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaUsers className="text-3xl text-primary-blue" />
            <div>
              <h3 className="font-semibold text-xl">Inclusive Community</h3>
              <p className="text-gray-800">
                We take great pride in making education accessible to all. The school provides textbooks, uniforms, and other necessary materials at minimal costs, ensuring that students from economically disadvantaged backgrounds can also enjoy the same quality education as their peers. This initiative is part of our commitment to making education inclusive and equitable for all families, regardless of their financial situation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaStar className="text-3xl text-primary-blue" />
            <div>
              <h3 className="font-semibold text-xl">Leadership and Vision</h3>
              <p className="text-gray-800">
                Under the leadership of our Director, Khushboo, RPS International School is striving to create an educational space where children from all walks of life can build a bright future. Khushboo's dedication to serving the underprivileged is truly remarkable. She is wholeheartedly committed to ensuring that students, particularly those from low-income families, receive a quality education that empowers them to break barriers and achieve success. Through her leadership, the school has become a place of hope and opportunity for many young learners.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaBookOpen className="text-3xl text-primary-blue" />
            <div>
              <h3 className="font-semibold text-xl">Commitment to Excellence</h3>
              <p className="text-gray-800">
                As we continue to grow, our focus remains on providing the best possible educational experience. We believe in the power of education to transform lives, and we are proud to be part of this journey alongside our students, parents, and community. At RPS International School, every child matters, and we are dedicated to helping them reach their fullest potential.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative mt-12 mb-8 max-w-4xl mx-auto">
          <img 
            src={images[currentImageIndex]} 
            alt={`School Image ${currentImageIndex + 1}`} 
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
            onClick={prevImage}
          >
            ❮
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
