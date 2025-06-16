// import React from 'react';
// import { motion } from 'framer-motion';
// import useQueryBlogPage from '../../Hooks/useQueryBlogPage';
// import { getBlogPageProducts } from '../../Apis/Admin/blog';
// import AdminBlogPage from '../AdminBlogPage';


// function Blogpage() {
//   const { data, isLoading, isError } = useQueryBlogPage('BlogPageProduct', getBlogPageProducts);

//   console.log("Blog Page Data:", data); // Debugging

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const card = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     show: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: 'easeOut' },
//     },
//   };

//   return (
//     <motion.div
//       className="seound-page text-center px-4 py-10 bg-white dark:bg-gray-900 min-h-screen"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.h1
//         className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         Admin Blog Page
//       </motion.h1>

//       {/* Form to Add New Blog */}
//       <div className="mb-8">
//         <AdminBlogPage mode="create" />
//       </div>

//       {/* Status Messages */}
//       {isLoading && <p className="text-gray-500">Loading blog posts...</p>}
//       {isError && <p className="text-red-500">Error fetching blog posts.</p>}
//       {!isLoading && !isError && Array.isArray(data) && data.length === 0 && (
//         <p className="text-gray-500">No blog posts found.</p>
//       )}

//       {/* Blog Posts */}
//       <motion.div
//         className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         {Array.isArray(data) &&
//           data.map((product, index) => (
//             <motion.div
//               key={product.id || index}
//               className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
//               variants={card}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
//                 y: -5,
//               }}
//             >
//               <img
//                 src={`http://plantcareapi.runasp.net${product.image}`}
//                 alt={product.name}
//                 className="w-full h-[250px] object-cover rounded-md mb-3"
//               />
//               <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h2>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.description}</p>

//               {/* Edit Blog */}
//               <AdminBlogPage mode="edit" product={product} />
//             </motion.div>
//           ))}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Blogpage;




import React from 'react';
import { motion } from 'framer-motion';
import useQueryBlogPage from '../../Hooks/useQueryBlogPage';
import { getBlogPageProducts } from '../../Apis/Admin/blog';
import AdminBlogPage from '../AdminBlogPage';
import { FiEdit2, FiPlusCircle, FiClock, FiLoader } from 'react-icons/fi';

function Blogpage() {
  const { data, isLoading, isError } = useQueryBlogPage('BlogPageProduct', getBlogPageProducts);

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
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const shimmerAnimation = {
    initial: { backgroundPosition: '-200% 0' },
    animate: { 
      backgroundPosition: '200% 0',
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen px-4 py-8 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Blog Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create, edit, and manage your blog posts with ease
          </p>
        </motion.div>

        {/* Add New Blog Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-10 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FiPlusCircle className="text-green-500 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Create New Blog Post
            </h2>
          </div>
          <AdminBlogPage mode="create" />
        </motion.div>

        {/* Status Messages */}
        {isLoading && (
          <motion.div
            className="flex flex-col items-center justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="mb-4"
            >
              <FiLoader className="text-4xl text-green-500" />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Loading your blog posts...
            </p>
          </motion.div>
        )}

        {isError && (
          <motion.div
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p className="text-red-600 dark:text-red-300 text-center">
              Error fetching blog posts. Please try again later.
            </p>
          </motion.div>
        )}

        {!isLoading && !isError && Array.isArray(data) && data.length === 0 && (
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-xl font-medium text-blue-800 dark:text-blue-200 mb-2">
              No Blog Posts Found
            </h3>
            <p className="text-blue-600 dark:text-blue-300">
              Get started by creating your first blog post above!
            </p>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {Array.isArray(data) &&
            data.map((product, index) => (
              <motion.div
                key={product.id || index}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
                variants={card}
                whileHover={{ y: -5 }}
                layout
              >
                {/* Image with shimmer loading effect */}
                <div className="relative overflow-hidden h-48 w-full">
                  {isLoading ? (
                    <motion.div
                      className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                      variants={shimmerAnimation}
                      initial="initial"
                      animate="animate"
                    />
                  ) : (
                    <img
                      src={`http://plantcareapi.runasp.net${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <FiClock className="mr-1.5" />
                    <span>Last updated: {new Date(product.updatedAt || Date.now()).toLocaleDateString()}</span>
                  </div>

                  {/* Edit Button */}
                  <div className="mt-4">
                    <AdminBlogPage 
                      mode="edit" 
                      product={product} 
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <FiEdit2 />
                      Edit Post
                    </AdminBlogPage>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Blogpage;