import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaSpinner, FaChevronDown } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const postVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
  }
};

const loadingVariants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const descriptionVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function Blog() {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleDescription = (index) => {
    setExpandedPosts(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  async function getBlog() {
    return await axios.get(`http://plantcareapi.runasp.net/api/Blog`);
  }

  const { isLoading, isError, data, isFetching } = useQuery({
    queryKey: ["blogProducts"],
    queryFn: getBlog,
  });

  if (isLoading || isFetching) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          variants={loadingVariants}
          animate="spin"
          className="text-green-600 text-4xl"
        >
          <FaSpinner />
        </motion.div>
      </motion.div>
    );
  }

  if (isError) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-4">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Content</h2>
          <p className="text-gray-600">We couldn't fetch the blog posts. Please try again later.</p>
          <button 
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  const posts = data?.data;
  if (!Array.isArray(posts)) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-4">
          <div className="text-yellow-500 text-5xl mb-4">🌱</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Posts Found</h2>
          <p className="text-gray-600">Check back later for new plant care articles!</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaLeaf className="text-green-600 text-3xl mr-2" />
            <h1 className="text-4xl font-bold text-gray-800">Plant Care Blog</h1>
            <FaLeaf className="text-green-600 text-3xl ml-2" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest tips, tricks, and stories about plant care from our community
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 max-w-4xl mx-auto"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={postVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md border border-gray-100 hover:border-green-200 transition-all duration-300 w-full"
            >
              <div className="flex flex-col md:flex-row">
                <div className="p-4 md:w-1/3">
                  <motion.img 
                    className="w-full h-auto object-contain max-h-48 rounded-lg"
                    src={`http://plantcareapi.runasp.net${post.image}`} 
                    alt={post.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Plant Care
                    </span>
                    <span className="text-gray-400 text-sm ml-auto">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="font-bold text-xl mb-3 text-gray-800">{post.name}</h2>
                  
                  <AnimatePresence>
                    {expandedPosts[index] && (
                      <motion.p
                        variants={descriptionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="text-gray-600 mb-4"
                      >
                        {post.description || "No description available"}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDescription(index)}
                    className="text-green-600 font-medium flex items-center"
                  >
                    <FaChevronDown 
                      className={`mr-2 transition-transform duration-300 ${expandedPosts[index] ? 'rotate-180' : ''}`} 
                    />
                    {expandedPosts[index] ? 'Hide' : 'Show'} Description
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Blog;