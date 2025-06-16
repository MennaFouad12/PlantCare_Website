// import React, { useState, useEffect } from 'react';
// // import './activity.css';

// const UpdatedActivity = () => {
//   // بيانات النشاط (كمثال)
//   const [userActions, setUserActions] = useState([
//     { id: 1, userName: 'Ahmed Ali', actionTime: '10 minutes ago' },
//     { id: 2, userName: 'Sara Mohamed', actionTime: '30 minutes ago' },
//     { id: 3, userName: 'Omar Hassan', actionTime: '1 hour ago' },
//     { id: 4, userName: 'Mona Adel', actionTime: '2 hours ago' },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refreshActionTimes();
//     }, 60000); 

//     return () => clearInterval(interval);
//   }, []);

//   const refreshActionTimes = () => {
//     setUserActions((prevActions) =>
//       prevActions.map((action) => ({
//         ...action,
//         actionTime: generateRandomTime(),
//       }))
//     );
//   };

//   const generateRandomTime = () => {
//     const timeOptions = ['10 minutes ago', '30 minutes ago', '1 hour ago', '2 hours ago', 'Just now'];
//     return timeOptions[Math.floor(Math.random() * timeOptions.length)];
//   };

//   return (
//     <div className="activityContainer">
//       <h1>Recent User Activity</h1>
//       <div className="dataTableWrapper">
//         <table className="activityTable">
//           <thead>
//             <tr>
//               <th>User Name</th>
//               <th>Action Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userActions.map((action) => (
//               <tr key={action.id}>
//                 <td>{action.userName}</td>
//                 <td>{action.actionTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UpdatedActivity;




// import React, { useState, useEffect } from 'react';

// const UpdatedActivity = () => {
//   const [userActions, setUserActions] = useState([
//     { id: 1, userName: 'Ahmed Ali', actionTime: '10 minutes ago' },
//     { id: 2, userName: 'Sara Mohamed', actionTime: '30 minutes ago' },
//     { id: 3, userName: 'Omar Hassan', actionTime: '1 hour ago' },
//     { id: 4, userName: 'Mona Adel', actionTime: '2 hours ago' },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refreshActionTimes();
//     }, 60000); // Every minute

//     return () => clearInterval(interval);
//   }, []);

//   const refreshActionTimes = () => {
//     setUserActions((prevActions) =>
//       prevActions.map((action) => ({
//         ...action,
//         actionTime: generateRandomTime(),
//       }))
//     );
//   };

//   const generateRandomTime = () => {
//     const timeOptions = ['Just now', '10 minutes ago', '30 minutes ago', '1 hour ago', '2 hours ago'];
//     return timeOptions[Math.floor(Math.random() * timeOptions.length)];
//   };

//   return (
//     <div className="w-full p-4">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
//         Recent User Activity
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-green-400 text-black">
//               <th className="py-3 px-4 text-sm font-semibold border border-gray-200">User Name</th>
//               <th className="py-3 px-4 text-sm font-semibold border border-gray-200">Action Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userActions.map((action) => (
//               <tr key={action.id} className="even:bg-gray-100">
//                 <td className="py-3 px-4 text-center border border-gray-200">{action.userName}</td>
//                 <td className="py-3 px-4 text-center border border-gray-200">{action.actionTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UpdatedActivity;














// import React from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';

// // Axios instance (optional, but useful for scaling)
// const fetchUserActions = async () => {
//   const response = await axios.get('http://plantcareapi.runasp.net/api/RecentUserActivity/recent-user-activity');
//   return response.data;
// };

// const UpdatedActivity = () => {
//   const { data: userActions = [], isLoading, isError, refetch } = useQuery({
//     queryKey: ['userActions'],
//     queryFn: fetchUserActions,
//     // refetchInterval: 60000, // Auto refetch every 60 seconds
//   });

//   if (isLoading) return <div className="p-4 text-center">Loading user activity...</div>;
//   if (isError) return <div className="p-4 text-center text-red-500">Failed to load user activity.</div>;

//   return (
//     <div className="w-full p-4">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
//         Recent User Activity
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-green-400 text-black">
//               <th className="py-3 px-4 text-sm font-semibold border border-gray-200">User Name</th>
//               <th className="py-3 px-4 text-sm font-semibold border border-gray-200">Action Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userActions.map((action) => (
//               <tr key={action.id} className="even:bg-gray-100">
//                 <td className="py-3 px-4 text-center border border-gray-200">{action.userName}</td>
//                 <td className="py-3 px-4 text-center border border-gray-200">{action.actionTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UpdatedActivity;































// import React from 'react';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';

// // Updated fetch function with Authorization header
// const fetchUserActions = async () => {
//   const token = localStorage.getItem('userToken');
//   if (!token) throw new Error('No auth token found');

//   const response = await axios.get(
//     'http://plantcareapi.runasp.net/api/RecentUserActivity/recent-user-activity',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };





// const UpdatedActivity = () => {
//   const { data: userActions = [], isLoading, isError } = useQuery({
//     queryKey: ['userActions'],
//     queryFn: fetchUserActions,
//     // Uncomment if you want auto-refresh:
//     // refetchInterval: 60000,
//   });
// console.log(userActions)
//   if (isLoading) return <div className="p-4 text-center">Loading user activity...</div>;
//   if (isError) return <div className="p-4 text-center text-red-500">Failed to load user activity.</div>;

//   return (
//     <div className="w-full p-4">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
//         Recent User Activity
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-green-400 text-black">
//               <th className="py-3 px-4 text-sm font-semibold border border-gray-200">User Name</th>
//               <th className="py-3 px-4 text-sm font-semibold border border-gray-200">Action Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userActions.map((action) => (
//               <tr key={action.id} className="even:bg-gray-100">
//                 <td className="py-3 px-4 text-center border border-gray-200">{action.name}</td>
//                 <td className="py-3 px-4 text-center border border-gray-200">{action.timeAgo}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UpdatedActivity;



import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FiClock, FiUser } from 'react-icons/fi';

const fetchUserActions = async () => {
  const token = localStorage.getItem('userToken');
  if (!token) throw new Error('No auth token found');

  const response = await axios.get(
    'http://plantcareapi.runasp.net/api/RecentUserActivity/recent-user-activity',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const UpdatedActivity = () => {
  const { data: userActions = [], isLoading, isError } = useQuery({
    queryKey: ['userActions'],
    queryFn: fetchUserActions,
  });
    function getFirstLetters(str) {
    const words = str.split(' ');
    if (words.length !== 2) {
        return "String should contain exactly 2 words";
    }
    return words[0][0] + words[1][0];
}

  if (isLoading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );

  if (isError) return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 text-center text-red-500 bg-red-50 rounded-lg"
    >
      Failed to load user activity.
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center"
      >
        <FiClock className="mr-2 text-green-500" />
        Recent User Activity
      </motion.h1>

      <div className="grid gap-4 md:gap-6">
        {userActions.map((action, index) => (
          <motion.div
            key={action.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-4 md:p-5 flex items-start">
            <div className="flex-shrink-0 me-3 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-medium">
                              {getFirstLetters(action.name)}
                            </span>
                            </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {action.name}
                  </h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">
                    {new Date(action.lastActivityTime).toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {action.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {userActions.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-10 text-gray-500"
        >
          No recent activity found
        </motion.div>
      )}
    </div>
  );
};

export default UpdatedActivity;