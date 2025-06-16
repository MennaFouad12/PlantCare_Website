import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCalendarAlt, FaStore, FaSeedling } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import Image1 from "../assets/workshop1.jpeg";
import Image2 from "../assets/workshop2.jpeg";
import Image3 from "../assets/workshop3.jpeg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
  }
};

const sectionTitleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const products = [
  {
    id: 1,
    name: 'Self-Watering Planters',
    description: 'Innovative planters with a built-in water reservoir to keep plants hydrated for days.',
    image: Image1,
    icon: <FaLeaf className="text-green-500 text-2xl" />
  },
  {
    id: 2,
    name: 'Indoor Plant Soil Mix',
    description: 'Specially formulated soil mix for indoor plants, providing essential nutrients.',
    image: Image2,
    icon: <FaSeedling className="text-green-500 text-2xl" />
  },
  {
    id: 3,
    name: 'Organic Fertilizer',
    description: 'A slow-release organic fertilizer that helps plants grow healthily.',
    image: Image3,
    icon: <FaLeaf className="text-green-500 text-2xl" />
  },
];

const branches = [
  {
    id: 1,
    name: 'Green Thumb Branch',
    location: 'Downtown, City Center',
    openingDate: 'Opens March 2024',
    icon: <FaStore className="text-green-500 text-2xl" />
  },
  {
    id: 2,
    name: 'Urban Jungle Branch',
    location: 'Northside Mall',
    openingDate: 'Opens May 2024',
    icon: <FaStore className="text-green-500 text-2xl" />
  },
];

function Workshops() {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState(() => {
    // Load initial state from localStorage
    const saved = localStorage.getItem('registeredEvents');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    fetch('http://plantcareapi.runasp.net/api/WorkShop/get-all-workshops')
      .then((res) => res.json())
      .then((data) => {
        const workshopsWithIcons = data.map(workshop => ({
          ...workshop,
          icon: <FaCalendarAlt className="text-green-600 text-2xl" />
        }));
        setEvents(workshopsWithIcons);
      })
      .catch((error) => {
        console.error('Error fetching workshops:', error);
      });
  }, []);

  useEffect(() => {
    // Save registeredEvents to localStorage whenever it changes
    localStorage.setItem('registeredEvents', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  const handleRegister = (eventId) => {
    setRegisteredEvents(prev => ({
      ...prev,
      [eventId]: true
    }));
  };

  const handleCancel = (eventId) => {
    setRegisteredEvents(prev => {
      const updated = { ...prev };
      delete updated[eventId];
      return updated;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 text-gray-800 px-6 py-12 md:px-20 lg:px-32"
    >
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center mb-4">
          <FaLeaf className="text-green-600 text-3xl mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">Workshops and Events</h1>
          <FaLeaf className="text-green-600 text-3xl ml-3" />
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest products, new branch openings, and events related to agricultural seeds.
        </p>
      </motion.div>

      {/* Products Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.h2 
          variants={sectionTitleVariants}
          className="text-2xl font-bold text-green-700 mb-8 flex items-center"
        >
          <FaSeedling className="mr-3" />
          Available Products
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4">{product.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Branches Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-20"
      >
        <motion.h2 
          variants={sectionTitleVariants}
          className="text-2xl font-bold text-green-700 mb-8 flex items-center"
        >
  
        </motion.h2>
      
      </motion.div>

      {/* Events Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={sectionTitleVariants}
          className="text-2xl font-bold text-green-700 mb-8 flex items-center"
        >
          <FaCalendarAlt className="mr-3" />
          Upcoming Events
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4">{event.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-1">{event.provider}</h3>
                  <p className="text-gray-600 mb-3"> About : {event.description}</p>
                  <p className="text-gray-600 mb-3">Location : {event.location}</p>
                  <p className="text-gray-600 mb-3"> Suitable Number : {event.capacity}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRegister(event.id)}
                      className={`px-6 py-2 rounded-lg text-white transition-colors ${
                        registeredEvents[event.id] 
                          ? 'bg-gray-400 hover:bg-gray-500' 
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                      disabled={registeredEvents[event.id]}
                    >
                      {registeredEvents[event.id] ? 'Registered' : 'Register Now'}
                    </motion.button>
                    {registeredEvents[event.id] && (
                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCancel(event.id)}
                        className="px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-colors text-sm"
                      >
                        Cancel
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Workshops;