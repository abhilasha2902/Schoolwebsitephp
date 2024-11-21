import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
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
        const response = await fetch('/React/process_admission.php', {
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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-grow"
      >
        {/* Hero Section */}
        <motion.div 
          className="relative bg-gradient-to-r from-primary-blue via-blue-600 to-primary-blue py-20 text-white overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -ml-20 -mb-20"
          />
          
          <div className="container mx-auto px-4 relative">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-center"
            >
              <div className="w-full md:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <i className="fas fa-envelope text-2xl mb-3"></i>
                  <p>info@rpsschool.com</p>
                </motion.div>
              </div>
              <div className="w-full md:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <i className="fas fa-phone text-2xl mb-3"></i>
                  <p>+123-456-7890</p>
                </motion.div>
              </div>
              <div className="w-full md:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <i className="fas fa-map-marker-alt text-2xl mb-3"></i>
                  <p>123, School Lane, Education City</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Admission Form Section */}
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
                Admission Enquiry
              </h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you shortly.
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
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  className="col-span-1"
                >
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

                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  className="col-span-1"
                >
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
                  {[...Array(12)].map((_, i) => (
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
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary-blue text-white py-3 px-6 rounded-md font-medium hover:bg-primary-blue/90 transition duration-200 mt-6"
              >
                Submit Enquiry
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[400px] bg-gray-200"
        >
          {/* Add your Google Maps or other map component here */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600">Map will be displayed here</p>
          </div>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Contact;
