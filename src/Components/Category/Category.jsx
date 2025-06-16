import React from 'react';
import { motion } from 'framer-motion';
import useQueryCategory from '../../Hooks/useQueryCategory';
import { getAdminCategories } from '../../Apis/Admin/categories';
import CategoryBasicModal from './CategoryBasicModel';
import { FiEdit2, FiPlusCircle, FiClock, FiLoader } from 'react-icons/fi';
const Categories = () => {
  const { data: response = {}, isLoading, isError, error } = useQueryCategory('category', getAdminCategories);
  const categories = response?.data || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="seound-page text-center px-4 py-10 bg-white dark:bg-gray-900 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div >
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        🌿 Categories
      </motion.h1>

      {/* <div className="mb-6 ms-5">
        <CategoryBasicModal info="add" />
      </div> */}
          <motion.div
                className="bg-white lg:mx-36 dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-14 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <FiPlusCircle className="text-green-500 text-2xl mr-3" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Create New Category
                  </h2>
                </div>
              <CategoryBasicModal info="add" />
              </motion.div>
</div>
      <motion.div
        className="flex flex-wrap gap-10 justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-4 text-center hover:shadow-xl transition-all duration-300"
            variants={card}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
            }}
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category.name}</h2>
            <p>{category.id}</p>
            
            <CategoryBasicModal info="update" category={category} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Categories;

