import React from 'react';
import { motion } from 'framer-motion';
import AdminBasicModal from '../AdminBasicModal';
import useQueryProduct from '../../Hooks/useQueryProduct';
import { getAdminProducts } from '../../Apis/Admin/products';
import { FiEdit2, FiPlusCircle, FiClock, FiLoader } from 'react-icons/fi';
import Sidebar from '../SideBar Section/SideBar'
const Seound_page = () => {
  const { data = [], isLoading, isError } = useQueryProduct('product', getAdminProducts);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="seound-page  text-center px-4 py-10 bg-white dark:bg-gray-900 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >


      
      <motion.h1
        className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🌿 Product Dashboard
      </motion.h1>

      {/* <div className="mb-8">
        <AdminBasicModal info="add" />
      </div> */}
            <motion.div
                className="bg-white lg:mx-28 dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-10 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <FiPlusCircle className="text-green-500 text-2xl mr-3" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Create New Product
                  </h2>
                </div>
                <AdminBasicModal info="add" />
              </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {data.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700  shadow-lg w-72 p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
            variants={card}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
              y: -5,
            }}
          >
            <img
              src={`http://plantcareapi.runasp.net${product.image}`}
              alt={product.name}
              className="w-full h-40 object-cover  mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.description}</p>
            <h3 className="text-green-600 dark:text-green-400 font-bold text-md ">{product.price}$</h3>

            <AdminBasicModal info="update" product={product} />
          </motion.div>
        ))}
      </motion.div>
      
    </motion.div>
  );




};

export default Seound_page;







