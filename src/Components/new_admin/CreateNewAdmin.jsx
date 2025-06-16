










// import React, { useState } from 'react';
// import axios from 'axios';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// function AdminManagement() {
//   const [showModal, setShowModal] = useState(false);
//   const [newAdmin, setNewAdmin] = useState({ name: '', email: '', password: '' });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const queryClient = useQueryClient();

//   // Fetch Admins
// const { data, isLoading, isError } = useQuery({
//   queryKey: ['admins'],
//   queryFn: async () => {
//     const token = localStorage.getItem('userToken'); 
//     const res = await axios.get(`http://plantcareapi.runasp.net/api/Admin/get-admins`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   },
// });


//   // // Add Admin
//   // const addAdminMutation =  useMutation({
//   //   mutationFn: (admin) => {
//   //     const token = localStorage.getItem('userToken');
//   //     return axios.post(`http://plantcareapi.runasp.net/api/Admin/add-admin`, admin, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });
//   //   },
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(['admins']);
//   //     closeModal();
//   //   },
//   //   onError: () => setError('Failed to add admin.'),
//   // });


//   // const addAdminMutation = useMutation({
//   //   mutationFn: async (admin) => {
//   //     const token = localStorage.getItem('userToken');
      
//   //       const response = await axios.post(`http://plantcareapi.runasp.net/api/Admin/add-admin`, admin, {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       });
//   //       return response.data;
      
//   //   },
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(['admins']);
//   //     closeModal();
//   //   },
//   //   onError: (error) => setError(error.message),
//   // });
  
  


//   // Add Admin 

//   const addAdminMutation = useMutation({
//     mutationFn: async (admin) => {
//       const token = localStorage.getItem('userToken');
  
      
//       const nameParts = admin.name.trim().split(' ');
//       const firstName = nameParts[0];
//       const lastName = nameParts.slice(1).join(' ') || ' ';
  
//       const payload = {
//         firstName,
//         lastName,
//         email: admin.email,
//         password: admin.password,
//       };
  
//       console.log("Sending admin payload:", payload);
  
//       try {
//         const response = await axios.post(
//           'http://plantcareapi.runasp.net/api/Admin/add-admin',
//           payload,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//         return response.data;
//       } catch (error) {
//         console.error("API Error:", error.response?.data);
//         throw error;
//       }
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admins']);
//       closeModal();
//     },
//     onError: (error) => {
//       console.error("Mutation error:", error);
//       setError(error.response?.data?.message || error.message);
//     },
//   });
  
  
  
  
  
  



//   // Edit Admin

//   // const editAdminMutation = useMutation({
//   //   mutationFn: ({ id, admin }) => {
//   //     const token = localStorage.getItem('userToken');
  
//   //     if (!admin) {
//   //       throw new Error("Admin object is undefined.");
//   //     }
  
//   //     const name = admin.name ?? '';
//   //     const nameParts = name.trim().split(' ');
//   //     const firstName = nameParts[0] || '';
//   //     const lastName = nameParts.slice(1).join(' ') || '';
  
//   //     const payload = {
//   //       firstName,
//   //       lastName,
//   //       email: admin.email ?? '',
//   //       password: admin.password ?? '',
//   //     };
  
//   //     return axios.put(
//   //       `http://plantcareapi.runasp.net/api/Admin/edit-admin/${id}`,
//   //       payload,
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //           'Content-Type': 'application/json',
//   //         },
//   //       }
//   //     );
//   //   },
//   //   onSuccess: () => {
//   //     // queryClient.invalidateQueries(['admins']);
//   //     queryClient.invalidateQueries(['admins'])
//   //     closeModal();
//   //   },
//   //   // onError: (error) => {
//   //   //   console.error("Mutation error:", error);
//   //   //   setError('Failed to update admin.');
//   //   // },
//   // });
  



//   // const editAdminMutation = useMutation({
//   //   mutationFn: async ({ id, admin }) => {
//   //     const token = localStorage.getItem('userToken');
  
//   //     const name = admin.name ?? '';
//   //     const nameParts = name.trim().split(' ');
//   //     const firstName = nameParts[0] || '';
//   //     const lastName = nameParts.slice(1).join(' ') || '';
  
//   //     const payload = {
//   //       firstName,
//   //       lastName,
//   //       email: admin.email ?? '',
//   //       password: admin.password ?? '',
//   //     };
  
//   //     return await axios.put(
//   //       `http://plantcareapi.runasp.net/api/Admin/edit-admin/${id}`,
//   //       payload,
//   //       {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //           'Content-Type': 'application/json',
//   //         },
//   //       }
//   //     );
//   //   },
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(['admins']);
//   //     closeModal(); // ✅ Make sure modal closes here
//   //   },
//   //   onError: (error) => {
//   //     console.error("Edit error:", error);
//   //     setError(error?.response?.data?.message || 'Failed to update admin.');
//   //   },
//   // });






//   const editAdminMutation = useMutation({
//     mutationFn: async ({ id, admin }) => {
//       const token = localStorage.getItem('userToken');
  
//       const name = admin.name ?? '';
//       const nameParts = name.trim().split(' ');
//       const firstName = nameParts[0] || '';
//       const lastName = nameParts.slice(1).join(' ') || '';
  
//       const payload = {
//         firstName,
//         lastName,
//         email: admin.email ?? '',
//         password: admin.password ?? '',
//       };
  
//       try {
//         const response = await axios.put(
//           `http://plantcareapi.runasp.net/api/Admin/edit-admin/${id}`,
//           payload,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//         return response.data; // ✅ Ensure success is properly detected
//       } catch (error) {
//         console.error("Edit API Error:", error.response?.data);
//         throw error; // ✅ Ensures onError runs
//       }
//     },
//     onSuccess: (data) => {
//       queryClient.invalidateQueries(['admins']);
//       closeModal(); // ✅ Only close modal if successful
//     },
//     onError: (error) => {
//       console.error("Edit error:", error);
//       setError(error?.response?.data?.message || 'Failed to update admin.');
//     },
//   });
  
  
  
  

//   // Delete Admin
//   const deleteAdminMutation = useMutation({
//     mutationFn: (id) => {
//       const token = localStorage.getItem('userToken');
//       return axios.delete(`http://plantcareapi.runasp.net/api/Admin/delete-admin/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     },
//     onSuccess: () => queryClient.invalidateQueries(['admins']),
//     onError: () => console.log('Failed to delete admin')
    
//   });

//   const handleSaveAdmin = () => {
//     if (!validateInputs()) return;

//     const payload = { name: newAdmin.name, email: newAdmin.email, password: newAdmin.password };

//     if (isEditing) {
//       editAdminMutation.mutate({ id: editId, admin: payload });
//     } else {
//       addAdminMutation.mutate(payload);
//     }
//   };

//   const handleEditAdmin = (admin) => {
//     //setNewAdmin({ name: admin.name, email: admin.email, password: admin.password });
//     setNewAdmin({
//       name: `${admin.firstName} ${admin.lastName}`.trim(),
//       email: admin.email,
//       password: '', // don’t prefill passwords
//     });
    
//     setEditId(admin.id);
//     setIsEditing(true);
//     setShowModal(true);
//   };

//   const handleDeleteAdmin = (id) => {
//     // if (window.confirm('Are you sure you want to delete this admin?')) {
//     //   
//     // }


//     deleteAdminMutation.mutate(id);
//   };

//   // const validateInputs = () => {
//   //   if (!newAdmin.name.trim()) {
//   //     setError('Name is required.');
//   //     return false;
//   //   }
//   //   if (!newAdmin.email.includes('@')) {
//   //     setError('Email must contain "@" symbol.');
//   //     return false;
//   //   }
//   //   if (newAdmin.password.length < 8) {
//   //     setError('Password must be at least 8 characters long.');
//   //     return false;
//   //   }
//   //   setError('');
//   //   return true;
//   // };


//   const validateInputs = () => {
//     if (!newAdmin || typeof newAdmin !== 'object') {
//       setError('Admin data is missing.');
//       return false;
//     }
  
//     const name = newAdmin.name ?? '';
//     const email = newAdmin.email ?? '';
//     const password = newAdmin.password ?? '';
  
//     if (typeof name !== 'string' || name.trim() === '') {
//       setError('Name is required.');
//       return false;
//     }
  
//     if (typeof email !== 'string' || !email.includes('@')) {
//       setError('Email must contain "@" symbol.');
//       return false;
//     }
  
//     if (typeof password !== 'string' || password.length < 8) {
//       setError('Password must be at least 8 characters long.');
//       return false;
//     }
  
//     setError('');
//     return true;
//   };
  
//   const closeModal = () => {
//     setNewAdmin({ name: '', email: '', password: '' });
//     setShowModal(false);
//     setIsEditing(false);
//     setEditId(null);
//     setError('');
//   };

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Admin Management</h1>

//       <div className="flex justify-end mb-4">
//         <button
//           onClick={() => {
//             setNewAdmin({ name: '', email: '', password: '' });
//             setShowModal(true);
//             setIsEditing(false);
//           }}
//           className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
//         >
//           + Add Admin
//         </button>
//       </div>

//       {isLoading ? (
//         <p className="text-center">Loading...</p>
//       ) : isError ? (
//         <p className="text-center text-red-500">Failed to fetch admins.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded shadow-md">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2">ID</th>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data?.map((admin) => (
//                 <tr key={admin.id} className="border-t">
//                   <td className="px-4 py-2">{admin.id}</td>
//                   <td className="px-4 py-2">{admin.firstName}<span> </span>{admin.lastName}</td>
//                   <td className="px-4 py-2">{admin.email}</td>
//                   <td className="px-4 py-2 space-x-2">
//                     <button
//                       onClick={() => handleEditAdmin(admin)}
//                       className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteAdmin(admin.id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {data?.length === 0 && (
//                 <tr>
//                   <td colSpan="4" className="text-center py-6 text-gray-400">
//                     No admins found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">{isEditing ? 'Edit Admin' : 'Add Admin'}</h2>
//               <button onClick={closeModal} className="text-gray-500 text-xl">
//                 &times;
//               </button>
//             </div>

//             {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={newAdmin.name}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={newAdmin.email}
//                 onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Password"
//                   value={newAdmin.password}
//                   onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
//                 >
//                   {showPassword ? 'Hide' : 'Show'}
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={closeModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveAdmin}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminManagement;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { FiEdit, FiTrash2, FiEye, FiEyeOff, FiPlus, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// function AdminManagement() {
//   const [showModal, setShowModal] = useState(false);
//   const [newAdmin, setNewAdmin] = useState({ 
//     name: '', 
//     email: '', 
//     password: '',
//     confirmPassword: '' 
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('All');

//   const queryClient = useQueryClient();

//   // Fetch Admins
//   const { data: admins, isLoading, isError } = useQuery({
//     queryKey: ['admins'],
//     queryFn: async () => {
//       const token = localStorage.getItem('userToken'); 
//       const res = await axios.get(`http://plantcareapi.runasp.net/api/Admin/get-admins`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return res.data;
//     },
//   });

//   // Filter admins based on search term
//   const filteredAdmins = admins?.filter(admin => {
//     const matchesSearch = 
//       `${admin.firstName} ${admin.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       admin.email.toLowerCase().includes(searchTerm.toLowerCase());
    
//     return matchesSearch;
//   });

//   // Add Admin 
//   const addAdminMutation = useMutation({
//     mutationFn: async (admin) => {
//       const token = localStorage.getItem('userToken');
  
//       const nameParts = admin.name.trim().split(' ');
//       const firstName = nameParts[0];
//       const lastName = nameParts.slice(1).join(' ') || ' ';
  
//       const payload = {
//         firstName,
//         lastName,
//         email: admin.email,
//         password: admin.password,
//       };
  
//       const response = await axios.post(
//         'http://plantcareapi.runasp.net/api/Admin/add-admin',
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admins']);
//       closeModal();
//     },
//     onError: (error) => {
//       setError(error.response?.data?.message || 'Failed to add admin.');
//     },
//   });

//   // Edit Admin
//   const editAdminMutation = useMutation({
//     mutationFn: async ({ id, admin }) => {
//       const token = localStorage.getItem('userToken');
  
//       const nameParts = admin.name.trim().split(' ');
//       const firstName = nameParts[0] || '';
//       const lastName = nameParts.slice(1).join(' ') || '';
  
//       const payload = {
//         firstName,
//         lastName,
//         email: admin.email,
//         password: admin.password,
//       };
  
//       const response = await axios.put(
//         `http://plantcareapi.runasp.net/api/Admin/edit-admin/${id}`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admins']);
//       closeModal();
//     },
//     onError: (error) => {
//       setError(error.response?.data?.message || 'Failed to update admin.');
//     },
//   });

//   // Delete Admin
//   const deleteAdminMutation = useMutation({
//     mutationFn: (id) => {
//       const token = localStorage.getItem('userToken');
//       return axios.delete(`http://plantcareapi.runasp.net/api/Admin/delete-admin/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     },
//     onSuccess: () => queryClient.invalidateQueries(['admins']),
//     onError: (error) => {
//       setError(error.response?.data?.message || 'Failed to delete admin.');
//     }
//   });

//   const handleSaveAdmin = () => {
//     if (!validateInputs()) return;

//     const payload = { 
//       name: newAdmin.name, 
//       email: newAdmin.email, 
//       password: newAdmin.password 
//     };

//     if (isEditing) {
//       editAdminMutation.mutate({ id: editId, admin: payload });
//     } else {
//       addAdminMutation.mutate(payload);
//     }
//   };

//   const handleEditAdmin = (admin) => {
//     setNewAdmin({
//       name: `${admin.firstName} ${admin.lastName}`.trim(),
//       email: admin.email,
//       password: '',
//       confirmPassword: ''
//     });
//     setEditId(admin.id);
//     setIsEditing(true);
//     setShowModal(true);
//   };

//   const handleDeleteAdmin = (id) => {
//     if (window.confirm('Are you sure you want to delete this admin?')) {
//       deleteAdminMutation.mutate(id);
//     }
//   };

//   const validateInputs = () => {
//     if (!newAdmin.name.trim()) {
//       setError('Name is required.');
//       return false;
//     }
  
//     if (!newAdmin.email.includes('@')) {
//       setError('Please enter a valid email address.');
//       return false;
//     }
  
//     if (newAdmin.password.length < 8) {
//       setError('Password must be at least 8 characters long.');
//       return false;
//     }
  
//     if (!isEditing && newAdmin.password !== newAdmin.confirmPassword) {
//       setError('Passwords do not match.');
//       return false;
//     }
  
//     setError('');
//     return true;
//   };

//   const closeModal = () => {
//     setNewAdmin({ name: '', email: '', password: '', confirmPassword: '' });
//     setShowModal(false);
//     setIsEditing(false);
//     setEditId(null);
//     setError('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <Helmet>
//         <title>Admin Management</title>
//       </Helmet>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">Admin Management</h1>
//             <p className="text-gray-600 mt-2">
//               {filteredAdmins?.length || 0} {filteredAdmins?.length === 1 ? 'admin' : 'admins'} found
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
//             <div className="relative w-full sm:w-64">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search admins..."
//                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <button
//               onClick={() => {
//                 setNewAdmin({ name: '', email: '', password: '', confirmPassword: '' });
//                 setShowModal(true);
//                 setIsEditing(false);
//               }}
//               className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//             >
//               <FiPlus className="mr-2" />
//               Add Admin
//             </button>
//           </div>
//         </div>

//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         ) : isError ? (
//           <div className="bg-red-50 border-l-4 border-red-500 p-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">Failed to load admins. Please try again.</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredAdmins?.map((admin, index) => (
//                     <motion.tr
//                       key={admin.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="hover:bg-gray-50"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
//                             <span className="text-blue-600 font-medium">
//                               {admin.firstName?.charAt(0)}{admin.lastName?.charAt(0)}
//                             </span>
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {admin.firstName} {admin.lastName}
//                             </div>
//                             <div className="text-sm text-gray-500">ID: {admin.id}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{admin.email}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <div className="flex justify-end space-x-2">
//                           <button
//                             onClick={() => handleEditAdmin(admin)}
//                             className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
//                             title="Edit admin"
//                           >
//                             <FiEdit className="h-5 w-5" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteAdmin(admin.id)}
//                             className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
//                             title="Delete admin"
//                           >
//                             <FiTrash2 className="h-5 w-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </motion.tr>
//                   ))}
//                   {filteredAdmins?.length === 0 && (
//                     <tr>
//                       <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
//                         No admins found matching your criteria
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.2 }}
//               className="bg-white rounded-xl shadow-xl w-full max-w-md"
//             >
//               <div className="flex justify-between items-center border-b border-gray-200 p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {isEditing ? 'Edit Admin' : 'Add Admin'}
//                 </h2>
//                 <button
//                   onClick={closeModal}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FiX className="h-6 w-6" />
//                 </button>
//               </div>

//               <div className="p-6 space-y-4">
//                 {error && (
//                   <div className="bg-red-50 border-l-4 border-red-500 p-4">
//                     <div className="flex">
//                       <div className="flex-shrink-0">
//                         <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <p className="text-sm text-red-700">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="First and Last Name"
//                     value={newAdmin.name}
//                     onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="email@example.com"
//                     value={newAdmin.email}
//                     onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? 'text' : 'password'}
//                       placeholder={isEditing ? 'Leave blank to keep current' : 'At least 8 characters'}
//                       value={newAdmin.password}
//                       onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                     >
//                       {showPassword ? <FiEyeOff /> : <FiEye />}
//                     </button>
//                   </div>
//                 </div>

//                 {!isEditing && (
//                   <div>
//                     <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                       Confirm Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         id="confirmPassword"
//                         type={showConfirmPassword ? 'text' : 'password'}
//                         placeholder="Confirm your password"
//                         value={newAdmin.confirmPassword}
//                         onChange={(e) => setNewAdmin({ ...newAdmin, confirmPassword: e.target.value })}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                       >
//                         {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-xl">
//                 <button
//                   type="button"
//                   onClick={handleSaveAdmin}
//                   disabled={addAdminMutation.isLoading || editAdminMutation.isLoading}
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
//                 >
//                   {addAdminMutation.isLoading || editAdminMutation.isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : isEditing ? 'Update Admin' : 'Add Admin'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// export default AdminManagement;















// import React, { useState } from 'react';
// import axios from 'axios';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { FiEdit, FiTrash2, FiEye, FiEyeOff, FiPlus, FiX, FiSearch } from 'react-icons/fi';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// function AdminManagement() {
//   const [showModal, setShowModal] = useState(false);
//   const [newAdmin, setNewAdmin] = useState({ 
//     name: '', 
//     email: '', 
//     password: '',
//     confirmPassword: '' 
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const queryClient = useQueryClient();

//   // Fetch Admins
//   const { data: admins, isLoading, isError } = useQuery({
//     queryKey: ['admins'],
//     queryFn: async () => {
//       const token = localStorage.getItem('userToken'); 
//       const res = await axios.get(`http://plantcareapi.runasp.net/api/Admin/get-admins`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return res.data;
//     },
//   });

//   // Filter admins based on search term
//   const filteredAdmins = admins?.filter(admin => {
//     const fullName = `${admin.firstName} ${admin.lastName}`.toLowerCase();
//     return (
//       fullName.includes(searchTerm.toLowerCase()) ||
//       admin.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   // Add Admin 
//   const addAdminMutation = useMutation({
//     mutationFn: async (admin) => {
//       const token = localStorage.getItem('userToken');
  
//       const nameParts = admin.name.trim().split(' ');
//       const firstName = nameParts[0];
//       const lastName = nameParts.slice(1).join(' ') || ' ';
  
//       const payload = {
//         firstName,
//         lastName,
//         email: admin.email,
//         password: admin.password,
//       };
  
//       const response = await axios.post(
//         'http://plantcareapi.runasp.net/api/Admin/add-admin',
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admins']);
//       closeModal();
//       toast.success('Admin added successfully!');
//     },
//     onError: (error) => {
//       setError(error.response?.data?.message || 'Failed to add admin.');
//     },
//   });

//   // Edit Admin
//   const editAdminMutation = useMutation({
//     mutationFn: async ({ id, admin }) => {
//       const token = localStorage.getItem('userToken');
  
//       const nameParts = admin.name.trim().split(' ');
//       const firstName = nameParts[0] || '';
//       const lastName = nameParts.slice(1).join(' ') || '';
  
//       const payload = {
//         firstName,
//         lastName,
//         email: admin.email,
//         password: admin.password,
//       };
  
//       const response = await axios.put(
//         `http://plantcareapi.runasp.net/api/Admin/edit-admin/${id}`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admins']);
//       closeModal();
//       toast.success('Admin updated successfully!');
//     },
//     onError: (error) => {
//       setError(error.response?.data?.message || 'Failed to update admin.');
//     },
//   });

//   // Delete Admin
//   const deleteAdminMutation = useMutation({
//     mutationFn: (id) => {
//       const token = localStorage.getItem('userToken');
//       return axios.delete(`http://plantcareapi.runasp.net/api/Admin/delete-admin/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(['admins']);
//       toast.success('Admin deleted successfully!');
//     },
//     onError: (error) => {
//       setError(error.response?.data?.message || 'Failed to delete admin.');
//     }
//   });

//   const handleSaveAdmin = () => {
//     if (!validateInputs()) return;

//     const payload = { 
//       name: newAdmin.name, 
//       email: newAdmin.email, 
//       password: newAdmin.password 
//     };

//     if (isEditing) {
//       editAdminMutation.mutate({ id: editId, admin: payload });
//     } else {
//       addAdminMutation.mutate(payload);
//     }
//   };

//   const handleEditAdmin = (admin) => {
//     setNewAdmin({
//       name: `${admin.firstName} ${admin.lastName}`.trim(),
//       email: admin.email,
//       password: '',
//       confirmPassword: ''
//     });
//     setEditId(admin.id);
//     setIsEditing(true);
//     setShowModal(true);
//   };

//   const handleDeleteAdmin = (id) => {
//     if (window.confirm('Are you sure you want to delete this admin?')) {
//       deleteAdminMutation.mutate(id);
//     }
//   };

//   const validateInputs = () => {
//     if (!newAdmin.name.trim()) {
//       setError('Name is required.');
//       return false;
//     }
  
//     if (!newAdmin.email.includes('@')) {
//       setError('Please enter a valid email address.');
//       return false;
//     }
  
//     if (!isEditing && newAdmin.password.length < 8) {
//       setError('Password must be at least 8 characters long.');
//       return false;
//     }
  
//     if (!isEditing && newAdmin.password !== newAdmin.confirmPassword) {
//       setError('Passwords do not match.');
//       return false;
//     }
  
//     setError('');
//     return true;
//   };

//   const closeModal = () => {
//     setNewAdmin({ name: '', email: '', password: '', confirmPassword: '' });
//     setShowModal(false);
//     setIsEditing(false);
//     setEditId(null);
//     setError('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <Helmet>
//         <title>Admin Management</title>
//       </Helmet>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800">Admin Management</h1>
//             <p className="text-gray-600 mt-2">
//               {filteredAdmins?.length || 0} {filteredAdmins?.length === 1 ? 'admin' : 'admins'} found
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
//             <div className="relative flex items-center w-full sm:w-64">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search admins..."
//                 className="pl-10 pr-4 py-2  border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <button
//               onClick={() => {
//                 setNewAdmin({ name: '', email: '', password: '', confirmPassword: '' });
//                 setShowModal(true);
//                 setIsEditing(false);
                
//               }}
//               className="flex w-fit  items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md"
//             >
//               <FiPlus className="mr-2" />
//               Add Admin
//             </button>
//           </div>
//         </div>

//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//           </div>
//         ) : isError ? (
//           <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700">Failed to load admins. Please try again.</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
//             <div className="overflow-x-auto">
//               <table className="min-w-full  divide-y divide-gray-200">
//                 <thead className="bg-green-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
//                       Name
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-green-800 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredAdmins?.map((admin, index) => (
//                     <motion.tr
//                       key={admin.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="hover:bg-green-50 transition-colors"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
//                             <span className="text-green-600 font-medium">
//                               {admin.firstName?.charAt(0)}{admin.lastName?.charAt(0)}
//                             </span>
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {admin.firstName} {admin.lastName}
//                             </div>
//                             <div className="text-xs text-gray-500">ID: {admin.id}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{admin.email}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <div className="flex justify-end space-x-2">
//                           <button
//                             onClick={() => handleEditAdmin(admin)}
//                             className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-100"
//                             title="Edit admin"
//                           >
//                             <FiEdit className="h-5 w-5" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteAdmin(admin.id)}
//                             className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-100"
//                             title="Delete admin"
//                           >
//                             <FiTrash2 className="h-5 w-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </motion.tr>
//                   ))}
//                   {filteredAdmins?.length === 0 && (
//                     <tr>
//                       <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
//                         No admins found matching your criteria
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>


            
//           </div>

// //           <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
// //   <div className="overflow-x-auto">
// //     <div className="min-w-[600px] md:w-full"> {/* This ensures table has minimum width on small screens */}
// //       <table className="w-full divide-y divide-gray-200">
// //         <thead className="bg-green-50">
// //           <tr>
// //             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
// //               Name
// //             </th>
// //             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
// //               Email
// //             </th>
// //             <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-green-800 uppercase tracking-wider">
// //               Actions
// //             </th>
// //           </tr>
// //         </thead>
// //         <tbody className="bg-white divide-y divide-gray-200">
// //           {filteredAdmins?.map((admin, index) => (
// //             <motion.tr
// //               key={admin.id}
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.05 }}
// //               className="hover:bg-green-50 transition-colors"
// //             >
// //               <td className="px-6 py-4 whitespace-nowrap">
// //                 <div className="flex items-center">
// //                   <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
// //                     <span className="text-green-600 font-medium">
// //                       {admin.firstName?.charAt(0)}{admin.lastName?.charAt(0)}
// //                     </span>
// //                   </div>
// //                   <div className="ml-4">
// //                     <div className="text-sm font-medium text-gray-900">
// //                       {admin.firstName} {admin.lastName}
// //                     </div>
// //                     <div className="text-xs text-gray-500">ID: {admin.id}</div>
// //                   </div>
// //                 </div>
// //               </td>
// //               <td className="px-6 py-4 whitespace-nowrap">
// //                 <div className="text-sm text-gray-900">{admin.email}</div>
// //               </td>
// //               <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                 <div className="flex justify-end space-x-2">
// //                   <button
// //                     onClick={() => handleEditAdmin(admin)}
// //                     className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-100"
// //                     title="Edit admin"
// //                   >
// //                     <FiEdit className="h-5 w-5" />
// //                   </button>
// //                   <button
// //                     onClick={() => handleDeleteAdmin(admin.id)}
// //                     className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-100"
// //                     title="Delete admin"
// //                   >
// //                     <FiTrash2 className="h-5 w-5" />
// //                   </button>
// //                 </div>
// //               </td>
// //             </motion.tr>
// //           ))}
// //           {filteredAdmins?.length === 0 && (
// //             <tr>
// //               <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
// //                 No admins found matching your criteria
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   </div>
// // </div>


          
//         )}

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.2 }}
//               className="bg-white rounded-xl shadow-xl w-full max-w-md"
//             >
//               <div className="flex justify-between items-center border-b border-gray-200 p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {isEditing ? 'Edit Admin' : 'Add Admin'}
//                 </h2>
//                 <button
//                   onClick={closeModal}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FiX className="h-6 w-6" />
//                 </button>
//               </div>

//               <div className="p-6 space-y-4">
//                 {error && (
//                   <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
//                     <div className="flex items-center">
//                       <div className="flex-shrink-0">
//                         <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <p className="text-sm text-red-700">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="First and Last Name"
//                     value={newAdmin.name}
//                     onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="email@example.com"
//                     value={newAdmin.email}
//                     onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       type={showPassword ? 'text' : 'password'}
//                       placeholder={isEditing ? 'Leave blank to keep current' : 'At least 8 characters'}
//                       value={newAdmin.password}
//                       onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                     >
//                       {showPassword ? <FiEyeOff /> : <FiEye />}
//                     </button>
//                   </div>
//                 </div>

//                 {!isEditing && (
//                   <div>
//                     <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
//                       Confirm Password
//                     </label>
//                     <div className="relative">
//                       <input
//                         id="confirmPassword"
//                         type={showConfirmPassword ? 'text' : 'password'}
//                         placeholder="Confirm your password"
//                         value={newAdmin.confirmPassword}
//                         onChange={(e) => setNewAdmin({ ...newAdmin, confirmPassword: e.target.value })}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                       >
//                         {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-xl">
//                 <button
//                   type="button"
//                   onClick={handleSaveAdmin}
//                   disabled={addAdminMutation.isLoading || editAdminMutation.isLoading}
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
//                 >
//                   {addAdminMutation.isLoading || editAdminMutation.isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : isEditing ? 'Update Admin' : 'Add Admin'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// export default AdminManagement;













import React, { useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FiEdit, FiTrash2, FiEye, FiEyeOff, FiPlus, FiX, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

function AdminManagement() {
  const [showModal, setShowModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ 
    name: '', 
    email: '', 
    password: '',
    confirmPassword: '' 
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const queryClient = useQueryClient();

  // Fetch Admins
  const { data: admins, isLoading, isError } = useQuery({
    queryKey: ['admins'],
    queryFn: async () => {
      const token = localStorage.getItem('userToken'); 
      const res = await axios.get(`http://plantcareapi.runasp.net/api/Admin/get-admins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  // Filter admins based on search term
  const filteredAdmins = admins?.filter(admin => {
    const fullName = `${admin.firstName} ${admin.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Add Admin 
  const addAdminMutation = useMutation({
    mutationFn: async (admin) => {
      const token = localStorage.getItem('userToken');
  
      const nameParts = admin.name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ') || ' ';
  
      const payload = {
        firstName,
        lastName,
        email: admin.email,
        password: admin.password,
      };
  
      const response = await axios.post(
        'http://plantcareapi.runasp.net/api/Admin/add-admin',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admins']);
      closeModal();
      toast.success('Admin added successfully!');
    },
    onError: (error) => {
      setError(error.response?.data?.message || 'Failed to add admin.');
      toast.error(error.response?.data?.message || 'Failed to add admin.');
    },
  });

  // Edit Admin
  const editAdminMutation = useMutation({
    mutationFn: async ({ id, admin }) => {
      const token = localStorage.getItem('userToken');
  
      const nameParts = admin.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
  
      const payload = {
        firstName,
        lastName,
        email: admin.email,
        password: admin.password,
      };
  
      const response = await axios.put(
        `http://plantcareapi.runasp.net/api/Admin/edit-admin/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admins']);
      closeModal();
      toast.success('Admin updated successfully!');
    },
    onError: (error) => {
      setError(error.response?.data?.message || 'Failed to update admin.');
      toast.error(error.response?.data?.message || 'Failed to update admin.');
    },
  });

  // Delete Admin
  const deleteAdminMutation = useMutation({
    mutationFn: (id) => {
      const token = localStorage.getItem('userToken');
      return axios.delete(`http://plantcareapi.runasp.net/api/Admin/delete-admin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['admins']);
      toast.success('Admin deleted successfully!');
    },
    onError: (error) => {
      setError(error.response?.data?.message || 'Failed to delete admin.');
      toast.error(error.response?.data?.message || 'Failed to delete admin.');
    }
  });

  const handleSaveAdmin = () => {
    if (!validateInputs()) return;

    const payload = { 
      name: newAdmin.name, 
      email: newAdmin.email, 
      password: newAdmin.password 
    };

    if (isEditing) {
      editAdminMutation.mutate({ id: editId, admin: payload });
    } else {
      addAdminMutation.mutate(payload);
    }
  };

  const handleEditAdmin = (admin) => {
    setNewAdmin({
      name: `${admin.firstName} ${admin.lastName}`.trim(),
      email: admin.email,
      password: '',
      confirmPassword: ''
    });
    setEditId(admin.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteAdmin = (id) => {
    
      deleteAdminMutation.mutate(id);
    
  };

  const validateInputs = () => {
    if (!newAdmin.name.trim()) {
      setError('Name is required.');
      toast.error('Name is required.');
      return false;
    }
  
    if (!newAdmin.email.includes('@')) {
      setError('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      return false;
    }
  
    if (!isEditing && newAdmin.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      toast.error('Password must be at least 8 characters long.');
      return false;
    }
  
    if (!isEditing && newAdmin.password !== newAdmin.confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return false;
    }
  
    setError('');
    return true;
  };

  const closeModal = () => {
    setNewAdmin({ name: '', email: '', password: '', confirmPassword: '' });
    setShowModal(false);
    setIsEditing(false);
    setEditId(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Helmet>
        <title>Admin Management</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Management</h1>
            <p className="text-gray-600 mt-2">
              {filteredAdmins?.length || 0} {filteredAdmins?.length === 1 ? 'admin' : 'admins'} found
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
            <div className="relative flex items-center w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search admins..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                setNewAdmin({ name: '', email: '', password: '', confirmPassword: '' });
                setShowModal(true);
                setIsEditing(false);
              }}
              className="flex w-fit items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md"
            >
              <FiPlus className="mr-2" />
              Add Admin
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : isError ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">Failed to load admins. Please try again.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-green-800 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAdmins?.map((admin, index) => (
                    <motion.tr
                      key={admin.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-green-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 font-medium">
                              {admin.firstName?.charAt(0)}{admin.lastName?.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {admin.firstName} {admin.lastName}
                            </div>
                            <div className="text-xs text-gray-500">ID: {admin.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{admin.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleEditAdmin(admin)}
                            className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-100"
                            title="Edit admin"
                          >
                            <FiEdit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteAdmin(admin.id)}
                            className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-100"
                            title="Delete admin"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                  {filteredAdmins?.length === 0 && (
                    <tr>
                      <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                        No admins found matching your criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="flex justify-between items-center border-b border-gray-200 p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {isEditing ? 'Edit Admin' : 'Add Admin'}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="First and Last Name"
                    value={newAdmin.name}
                    onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={newAdmin.email}
                    onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder={isEditing ? 'Leave blank to keep current' : 'At least 8 characters'}
                      value={newAdmin.password}
                      onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                {!isEditing && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={newAdmin.confirmPassword}
                        onChange={(e) => setNewAdmin({ ...newAdmin, confirmPassword: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-xl">
                <button
                  type="button"
                  onClick={handleSaveAdmin}
                  disabled={addAdminMutation.isLoading || editAdminMutation.isLoading}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                >
                  {addAdminMutation.isLoading || editAdminMutation.isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : isEditing ? 'Update Admin' : 'Add Admin'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default AdminManagement;