import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/Footer';
import { FaBookOpen, FaChalkboardTeacher, FaUsers, FaStar } from 'react-icons/fa';
import '../index.css';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    class: '',
    email: '',
    phone: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/backend/process_admission.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      try {
        const result = JSON.parse(text);
        if (result.status === 'success') {
          setSuccessMessage('Thank you for contacting us!');
          setTimeout(() => {
            setFormData({
              studentName: '',
              parentName: '',
              class: '',
              email: '',
              phone: ''
            });
            setSuccessMessage('');
          }, 2000);
        } else {
          console.error('Error:', result.message);
        }
      } catch (jsonError) {
        console.error('Non-JSON response received:', text);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NavBar />
      <main className="flex-grow">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center h-[calc(100vh-4rem)] bg-gradient-to-b from-primary-blue to-primary-light overflow-hidden"
        >
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-primary-yellow text-center px-4 hover:scale-105 transition-transform duration-300 relative"
          >
            Welcome to 
            <motion.span
              animate={{ color: ['#FCD34D', '#60A5FA', '#FCD34D'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="block"
            >
              RPS International School
            </motion.span>
          </motion.h1>
        </motion.div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 mb-8">
                At RPS International School, we provide a nurturing environment that fosters academic excellence and personal growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <FaBookOpen className="text-4xl text-primary-blue mb-4" />
                <h3 className="text-xl font-semibold">Quality Education</h3>
                <p className="text-gray-600">We provide quality education in a nurturing environment.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <FaChalkboardTeacher className="text-4xl text-primary-blue mb-4" />
                <h3 className="text-xl font-semibold">Dedicated Teachers</h3>
                <p className="text-gray-600">Our teachers are committed to guiding students.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <FaUsers className="text-4xl text-primary-blue mb-4" />
                <h3 className="text-xl font-semibold">Inclusive Community</h3>
                <p className="text-gray-600">We welcome students from all backgrounds.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
              >
                <FaStar className="text-4xl text-primary-blue mb-4" />
                <h3 className="text-xl font-semibold">Holistic Development</h3>
                <p className="text-gray-600">Focusing on both academic and personal growth.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
                Contact Us for Admissions
              </h2>
              <p className="text-gray-600">
                Take the first step towards your child's bright future. Fill out the form below and we'll get back to you shortly.
              </p>
            </motion.div>

            <motion.form
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="col-span-1">
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent transition duration-200"
                    placeholder="Enter student's full name"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="col-span-1">
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent transition duration-200"
                    placeholder="Enter parent's full name"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
                  Admission for Class *
                </label>
                <select
                  id="class"
                  name="class"
                  required
                  value={formData.class}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent transition duration-200"
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">Kindergarten</option>
                  {[...Array(6)].map((_, i) => (
                    <option key={i + 1} value={`class${i + 1}`}>
                      Class {i + 1}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent transition duration-200"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue focus:border-transparent transition duration-200"
                  placeholder="Enter your phone number"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary-blue text-white py-3 px-6 rounded-md font-medium hover:bg-primary-blue/90 transition duration-200"
              >
                Submit Application
              </motion.button>
            </motion.form>
            {successMessage && (
              <div className="mt-4 text-green-600 text-center">
                {successMessage}
              </div>
            )}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
