// import React from 'react';
// import { motion } from 'framer-motion';
// // import useQueryBlogPage from '../../Hooks/useQueryBlogPage';
// import useQueryWorkShop from '../../Hooks/useQueryWorkShop';
// import { getWorkShop } from '../../Apis/Admin/workshop';
// // import AdminBlogPage from '../AdminBlogPage';
// import AdminWorkShopModal from '../../Components/WorkShopAdmin/AdminWorkShopModal.jsx';
// import { FiEdit2, FiPlusCircle, FiClock, FiLoader } from 'react-icons/fi';


// function WorkShopAdmin() {
//   const { data, isLoading, isError, refetch } = useQueryWorkShop('WorkShopAdmin', getWorkShop);

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

//   const shimmerAnimation = {
//     initial: { backgroundPosition: '-200% 0' },
//     animate: {
//       backgroundPosition: '200% 0',
//       transition: {
//         duration: 1.5,
//         repeat: Infinity,
//         ease: 'linear'
//       }
//     }
//   };

//   return (
//     <motion.div
//       className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen px-4 py-8 sm:px-6 lg:px-8"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <motion.div
//           className="mb-12 text-center"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h1 className="text-4xl font-bold text-green-600 dark:text-white mb-3">
//             Workshop Managment
//           </h1>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Create, edit, and manage your Workshopwith ease
//           </p>
//         </motion.div>

//         {/* Add New Blog Card */}
//         <motion.div
//           className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-10 border border-gray-200 dark:border-gray-700"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <div className="flex items-center mb-4">
//             <FiPlusCircle className="text-green-500 text-2xl mr-3" />
//             <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
//               Create New Workshop Posts.
//             </h2>
//           </div>
//           <AdminWorkShopModal mode="create" refetch={refetch} />
//         </motion.div>

//         {/* Status Messages */}
//         {isLoading && (
//           <motion.div
//             className="flex flex-col items-center justify-center py-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//               className="mb-4"
//             >
//               <FiLoader className="text-4xl text-green-500" />
//             </motion.div>
//             <p className="text-gray-600 dark:text-gray-300 text-lg">
//               Loading your Workshop Posts...
//             </p>
//           </motion.div>
//         )}

//         {isError && (
//           <motion.div
//             className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8"
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//           >
//             <p className="text-red-600 dark:text-red-300 text-center">
//               Error fetching Workshop posts. Please try again later.
//             </p>
//           </motion.div>
//         )}

//         {!isLoading && !isError && Array.isArray(data) && data.length === 0 && (
//           <motion.div
//             className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <h3 className="text-xl font-medium text-blue-800 dark:text-blue-200 mb-2">
//               No Workshop Posts Found
//             </h3>
//             <p className="text-blue-600 dark:text-blue-300">
//               Get started by creating your first Workshop post above!
//             </p>
//           </motion.div>
//         )}

//         {/* Blog Posts Grid */}
//         <motion.div
//           className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//           variants={container}
//           initial="hidden"
//           animate="show"
//         >
//           {Array.isArray(data) &&
//             data.map((product, index) => (
//               <motion.div
//                 key={product.id || index}
//                 className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
//                 variants={card}
//                 whileHover={{ y: -5 }}
//                 layout
//               >
//                 {/* Content */}
//                 <div className="p-5">
//                   <div className="flex justify-between items-start mb-2">
//                     <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
//                       {product.provider}
//                     </h2>
//                   </div>

//                   <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">
//                     <span className="font-semibold">Description: </span>{product.description}
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
//                     <span className="font-semibold">Location: </span>{product.location}
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
//                     <span className="font-semibold">Date: </span>{product.date}
//                   </p>
//                   <p className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
//                     {product.provider}
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
//                     <span className="font-semibold">Capacity: </span>{product.capacity}
//                   </p>

//                   {/* Edit Button */}
//                   <div className="mt-4">
//                     <AdminWorkShopModal
//                       workshop={product}
//                       refetch={refetch}
//                       className="w-full flex items-center justify-center gap-2"
//                     >
//                       <FiEdit2 />
//                       Edit Workshop
//                     </AdminWorkShopModal>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default WorkShopAdmin;




























import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useQueryWorkShop from '../../Hooks/useQueryWorkShop';
import { getWorkShop } from '../../Apis/Admin/workshop';
import AdminWorkShopModal from '../../Components/WorkShopAdmin/AdminWorkShopModal.jsx';
import { FiEdit2, FiPlusCircle, FiLoader } from 'react-icons/fi';

function WorkShopAdmin() {
  const { data, isLoading, isError, refetch } = useQueryWorkShop('WorkShopAdmin', getWorkShop);

  // Force refetch on mount
  useEffect(() => {
    refetch();
  }, []);


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
          <h1 className="text-4xl font-bold text-green-600 dark:text-white mb-3">
            Workshop Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create, edit, and manage your Workshops with ease
          </p>
        </motion.div>

        {/* Add New Workshop Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-10 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FiPlusCircle className="text-green-500 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Create New Workshop Post
            </h2>
          </div>
          <AdminWorkShopModal mode="create" refetch={refetch} />
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
              Loading your Workshop Posts...
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
              Error fetching Workshop posts. Please try again later.
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
              No Workshop Posts Found
            </h3>
            <p className="text-blue-600 dark:text-blue-300">
              Get started by creating your first Workshop post above!
            </p>
          </motion.div>
        )}

        {/* Workshop Posts Grid */}
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
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                      {product.provider}
                    </h2>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3">
                    <span className="font-semibold">Description: </span>{product.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <span className="font-semibold">Location: </span>{product.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <span className="font-semibold">Date: </span>{product.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <span className="font-semibold">Capacity: </span>{product.capacity}
                  </p>

                  <div className="mt-4">
                    <AdminWorkShopModal
                      workshop={product}
                      refetch={refetch}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <FiEdit2 />
                      Edit Workshop
                    </AdminWorkShopModal>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WorkShopAdmin;
