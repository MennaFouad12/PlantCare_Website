// import React from 'react'

// function AboutUs() {
//   return (
//     <div className=" text-gray-600 px-5 py-10 md:px-20 lg:px-40 m-10">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">About Us</h1>
//         <p className="text-base md:text-lg text-gray-600 w-1/2 mx-auto ">
//           We are passionate about connecting people with the joys and benefits of plants. Our mission is to make it easy for everyone to bring a little green into their lives, no matter where they are.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h2>
//           <p className="text-gray-600">
//             We aim to inspire people to explore the world of plants, bringing beauty, health, and sustainability into their homes and communities.
//           </p>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Values</h2>
//           <p className="text-gray-600">
//             At our core, we value sustainability, education, and accessibility. We believe that plants are essential to our environment and well-being.
//           </p>
//         </div>
//       </div>

//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-green-700 mb-6 relative">
//           Our Team Members
//           <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-28 bg-green-500 mt-3 rounded-lg"></span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
//           {/* Start Team Member 1 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Ahmed Hamdy</h3>
//             <p className="text-gray-500 text-sm">Team Leader</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Ahmed Hamdy is The Team Leader of our project who can handle all the project by himself.
//             </p>
//           </div>
//           {/* End Team Member 1 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 2 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Menna Fouad</h3>
//             <p className="text-gray-500 text-sm">Minister of Foreign Relations</p>
//             <p className="text-gray-600 text-sm mt-2">
//               She is the representative of the team leader and can create all frontend pages by herself.
//             </p>
//           </div>
//           {/* End Team Member 2*/}
          
//           {/* ////////////////////////////////////////////////////// */}

//           {/* Start Team Member 3 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Baher Elgobashi</h3>
//             <p className="text-gray-500 text-sm">The Lost One</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Baher is dedicated to ensuring project continuity and contributing in various areas.
//             </p>
//           </div>

//           {/* End Team Member 3 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 4 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Marwa Samy</h3>
//             <p className="text-gray-500 text-sm">Backend Developer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Marwa is responsible for developing server-side applications.
//             </p>
//           </div>
//           {/* End Team Member 4 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 5 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Mohamed Gamal</h3>
//             <p className="text-gray-500 text-sm">Data Scientist</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Mohamed is responsible for developing server-side applications.
//             </p>
//           </div>
//           {/* End Team Member 5 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Team Member 6 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Mohamed Tarek</h3>
//             <p className="text-gray-500 text-sm">AI Engineer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Mohamed Tarek is focusing on training models and preparing its data. 
//             </p>
//           </div>
//           {/* End Team Member 6 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 7 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Norhan Ayman</h3>
//             <p className="text-gray-500 text-sm">AI Engineer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Norhan is focusing on training models and preparing its data. 
//             </p>
//           </div>
//           {/* End Team Member 7 */}
//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 8 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <img src=".." alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
//             <h3 className="text-xl font-semibold text-green-700 mb-2">Eslam Khairy</h3>
//             <p className="text-gray-500 text-sm">AI Engineer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Eslam is focusing on training models and preparing its data. 
//             </p>
//           </div>
//           {/* End Team Member 8 */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs; 



// import Image1 from "../assets/ahmed hamdy.jpg";
// import Image2 from "../assets/menna.jpg";
// import Image3 from "../assets/baher.jpg";
// import Image4 from "../assets/marwa.jpg";
// import Image5 from "../assets/mohamed gamal.jpg";
// import Image6 from "../assets/mohamed tarek.jpg";
// import Image7 from "../assets/norhan.jpg";
// import Image8 from "../assets/eslam khairy.jpg";


// function AboutUs() {
//   return (
//     <div className="bg-gray-50 text-gray-800 px-5 py-10 md:px-20 lg:px-40 m-10">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">About Us</h1>
//         <p className="text-base md:text-lg text-gray-600">
//           We are passionate about connecting people with the joys and benefits of plants. Our mission is to make it easy for everyone to bring a little green into their lives, no matter where they are.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Mission</h2>
//           <p className="text-gray-600">
//             We aim to inspire people to explore the world of plants, bringing beauty, health, and sustainability into their homes and communities.
//           </p>
//         </div>

//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Values</h2>
//           <p className="text-gray-600">
//             At our core, we value sustainability, education, and accessibility. We believe that plants are essential to our environment and well-being.
//           </p>
//         </div>
//       </div>

//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-green-700 mb-6 relative">
//           Our Team Members
//           <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-28 bg-green-500 mt-3 rounded-lg"></span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {/* Start Team Member 1 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image1} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Ahmed Hamdy</h3>
//             <p className="text-gray-500 text-sm">Team Leader</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Ahmed Hamdy is The Team Leader of our project who can handle all the project by himself.
//             </p>
//           </div>
//           {/* End Team Member 1 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 2 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image2} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Menna Fouad</h3>
//             <p className="text-gray-500 text-sm">Minister of Foreign Relations</p>
//             <p className="text-gray-600 text-sm mt-2">
//               She is the representative of the team leader and can create all frontend pages by herself.
//             </p>
//           </div>
//           {/* End Team Member 2*/}
          
//           {/* ////////////////////////////////////////////////////// */}

//           {/* Start Team Member 3 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            
//             <img src={Image3} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Baher Elgobashi</h3>
//             <p className="text-gray-500 text-sm">The Lost One</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Baher is dedicated to ensuring project continuity and contributing in various areas.
//             </p>
//           </div>

//           {/* End Team Member 3 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 4 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image4} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Marwa Samy</h3>
//             <p className="text-gray-500 text-sm">Backend Developer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Marwa is responsible for developing server-side applications.
//             </p>
//           </div>
//           {/* End Team Member 4 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 5 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image5} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Mohamed Gamal</h3>
//             <p className="text-gray-500 text-sm">Backend Developer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Mohamed is responsible for developing server-side applications.
//             </p>
//           </div>
//           {/* End Team Member 5 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Team Member 6 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image6} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Mohamed Tarek</h3>
//             <p className="text-gray-500 text-sm">AI Engineer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Mohamed Tarek is focusing on training models and preparing its data. 
//             </p>
//           </div>
//           {/* End Team Member 6 */}

//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 7 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image7} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Norhan Ayman</h3>
//             <p className="text-gray-500 text-sm">AI Engineer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Norhan is focusing on training models and preparing its data. 
//             </p>
//           </div>
//           {/* End Team Member 7 */}
//           {/* ////////////////////////////////////////////////////// */}
//           {/* Start Team Member 8 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//           <img src={Image8} alt="Team Member" className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />

//             <h3 className="text-xl font-semibold text-green-700 mb-2">Eslam Khairy</h3>
//             <p className="text-gray-500 text-sm">AI Engineer</p>
//             <p className="text-gray-600 text-sm mt-2">
//               Eslam is focusing on training models and preparing its data. 
//             </p>
//           </div>
//           {/* End Team Member 8 */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs; 




import { motion } from 'framer-motion';
import { FaLeaf, FaUserTie, FaCode, FaRobot } from 'react-icons/fa';
import Image1 from "../assets/ahmed hamdy.jpg";
import Image2 from "../assets/menna.jpg";
import Image3 from "../assets/baher.jpg";
import Image4 from "../assets/marwa.jpg";
import Image5 from "../assets/mohamed gamal.jpg";
import Image6 from "../assets/mohamed tarek.jpg";
import Image7 from "../assets/nourhan.jpg";
import Image8 from "../assets/eslam khairy.jpg";

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

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Hamdy",
    role: "Team Leader",
    description: "Ahmed Hamdy is the Team Leader of our project who can handle all the project by himself.",
    image: Image1,
    icon: <FaUserTie className="text-green-500" />
  },
  {
    id: 2,
    name: "Menna Fouad",
    role: "Minister of Foreign Relations",
    description: "She is the representative of the team leader and can create all frontend pages by herself.",
    image: Image2,
    icon: <FaCode className="text-green-500" />
  },
  {
    id: 3,
    name: "Baher Elgobashi",
    role: "The Lost One",
    description: "Baher is dedicated to ensuring project continuity and contributing in various areas.",
    image: Image3,
    icon: <FaUserTie className="text-green-500" />
  },
  {
    id: 4,
    name: "Marwa Samy",
    role: "Backend Developer",
    description: "Marwa is responsible for developing server-side applications.",
    image: Image4,
    icon: <FaCode className="text-green-500" />
  },
  {
    id: 5,
    name: "Mohamed Gamal",
    role: "Backend Developer",
    description: "Mohamed is responsible for developing server-side applications.",
    image: Image5,
    icon: <FaCode className="text-green-500" />
  },
  {
    id: 6,
    name: "Mohamed Tarek",
    role: "AI Engineer",
    description: "Mohamed Tarek is focusing on training models and preparing its data.",
    image: Image6,
    icon: <FaRobot className="text-green-500" />
  },
  {
    id: 7,
    name: "Norhan Ayman",
    role: "AI Engineer",
    description: "Norhan is focusing on training models and preparing its data.",
    image: Image7,
    icon: <FaRobot className="text-green-500" />
  },
  {
    id: 8,
    name: "Eslam Khairy",
    role: "AI Engineer",
    description: "Eslam is focusing on training models and preparing its data.",
    image: Image8,
    icon: <FaRobot className="text-green-500" />
  }
];

function AboutUs() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 text-gray-800 py-16 px-6 lg:px-12"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center mb-4">
          <FaLeaf className="text-green-600 text-3xl mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">About Our Team</h1>
          <FaLeaf className="text-green-600 text-3xl ml-3" />
        </div>
        <p className="text-lg md:text-xl text-gray-600">
          We are passionate about connecting people with the joys and benefits of plants. Our mission is to make it easy for everyone to bring a little green into their lives.
        </p>
      </motion.div>

      {/* Mission & Values */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500 hover:border-green-600 transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaLeaf className="text-green-600 text-xl" />
            </div>
            <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            We aim to inspire people to explore the world of plants, bringing beauty, health, and sustainability into their homes and communities.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover="hover"
          className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500 hover:border-green-600 transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaLeaf className="text-green-600 text-xl" />
            </div>
            <h2 className="text-2xl font-semibold text-green-700">Our Values</h2>
          </div>
          <p className="text-gray-600">
            At our core, we value sustainability, education, and accessibility. We believe that plants are essential to our environment and well-being.
          </p>
        </motion.div>
      </motion.div>

      {/* Team Members */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          variants={sectionTitleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4 relative inline-block">
            Meet Our Team
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-2 w-32 bg-green-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The talented individuals who make our vision possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="mr-3">
                    {member.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-green-600 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{member.description}</p>
                {/* <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-green-600 font-medium flex items-center text-sm"
                >
                  View profile
                  <span className="ml-1">→</span>
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;