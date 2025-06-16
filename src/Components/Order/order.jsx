// // import { Helmet } from 'react-helmet';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion'; 
// // import Loading from '../Loading';
// // import useQueryOrder from '../../Hooks/useQueryOrder';
// // import { deleteOrder, getorder } from '../../Apis/Admin/order';
// // import useMutationOrder from '../../Hooks/useMutationOrder';
// // import { toast } from 'react-toastify';



// // export default function Order() {
// //   const { data, isLoading, isError } = useQueryOrder('order', getorder);
// //     const { mutate:deleteCategoryMutation, isPending: isdeleting } = useMutationOrder(deleteOrder);
    
  

// // console.log(data);
// //   let navigate = useNavigate()

// //   if (isLoading ) {
// //     return (
// //       <div className="flex justify-center items-center h-60">
// //         <Loading type="spin" color="#03543F" />
// //       </div>
// //     );
// //   }

  

// //   return (
// //     <div>
// //       <Helmet>
// //         <meta charSet="utf-8" />
// //         <title>Order</title>
// //       </Helmet>

      


// // <section className="bg-white py-12 antialiased dark:bg-gray-900">
// //   <motion.div
// //     initial={{ opacity: 0, y: 50 }}
// //     animate={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 0.6, ease: "easeOut" }}
// //     className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
// //   >
// //     <motion.h2
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ delay: 0.2 }}
// //       className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-10"
// //     >
// //       🧾 Order Management
// //     </motion.h2>

// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ delay: 0.4 }}
// //       className="overflow-x-auto shadow ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg"
// //     >
// //       <table className="min-w-full table-auto divide-y divide-gray-200 dark:divide-gray-700">
// //         <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm uppercase font-medium tracking-wider">
// //           <tr>
// //             <th className="px-6 py-4 text-left">Username</th>
// //             <th className="px-6 py-4 text-left">Payment Date</th>
// //             <th className="px-6 py-4 text-left">Shipping Date</th>
// //             <th className="px-6 py-4 text-left">Payment Method</th>
// //             <th className="px-6 py-4 text-left">Total Price</th>
// //             <th className="px-6 py-4 text-left">City</th>
// //             <th className="px-6 py-4 text-left">Phone Number</th>
// //             <th className="px-6 py-4 text-left">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 text-sm">
// //           {data.map((item, index) => (
// //             <motion.tr
// //               key={index}
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 * index }}
// //               className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
// //             >
// //               <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.name}</td>
// //               <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.paymentDate}</td>
// //               <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{item.shippingDate}</td>
// //               <td className="px-6 py-4 text-gray-900 dark:text-white font-semibold">{item.paymentMethod}</td>
// //               <td className="px-6 py-4 text-green-600 dark:text-green-400 font-semibold">${item.totalPrice}</td>
// //               <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{item.city}</td>
// //               <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{item.phoneNumber}</td>
// //               <td className="px-6 py-4">
// //                 <button
// //                   onClick={() =>
// //                     deleteCategoryMutation(item.id, {
// //                       onSuccess: () => toast.success("Order deleted successfully!"),
// //                       onError: (error) =>
// //                         toast.error(`Error: ${error.response?.data?.message || error.message}`)
// //                     })
// //                   }
// //                   className="inline-flex items-center px-3 py-1.5 bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-500/10 dark:text-red-400 rounded-lg transition"
// //                 >
// //                   🗑️ Remove
// //                 </button>
// //               </td>
// //             </motion.tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </motion.div>
// //   </motion.div>
// // </section>
// //     </div>
// //   );
// // }





// // import { Helmet } from 'react-helmet';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { FiEdit, FiTrash2, FiEye, FiChevronDown, FiSearch } from 'react-icons/fi';
// // import { BsCreditCard, BsCash, BsGraphUp, BsBoxSeam } from 'react-icons/bs';
// // import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// // import { useState, useEffect } from 'react';
// // import Loading from '../Loading';
// // import useQueryOrder from '../../Hooks/useQueryOrder';
// // import { deleteOrder, getorder } from '../../Apis/Admin/order';
// // import useMutationOrder from '../../Hooks/useMutationOrder';
// // import { toast } from 'react-toastify';

// // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

// // export default function OrderDashboard() {
// //   const { data: allOrders = [], isLoading, isError } = useQueryOrder('order', getorder);
// //   const { mutate: deleteOrderMutation, isPending: isDeleting } = useMutationOrder(deleteOrder);
// //   const navigate = useNavigate();
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [filteredOrders, setFilteredOrders] = useState([]);
// //   const [statusFilter, setStatusFilter] = useState('All');

// //   // Prepare chart data
// //   const prepareChartData = () => {
// //     // Order trends by month
// //     const monthlyData = allOrders.reduce((acc, order) => {
// //       const month = new Date(order.paymentDate).toLocaleString('default', { month: 'short' });
// //       if (!acc[month]) {
// //         acc[month] = { name: month, orders: 0, revenue: 0 };
// //       }
// //       acc[month].orders += 1;
// //       acc[month].revenue += order.totalPrice;
// //       return acc;
// //     }, {});

// //     // Payment method distribution
// //     const paymentMethods = allOrders.reduce((acc, order) => {
// //       const method = order.paymentMethod || 'Unknown';
// //       acc[method] = (acc[method] || 0) + 1;
// //       return acc;
// //     }, {});

// //     // Status distribution
// //     const statusDistribution = allOrders.reduce((acc, order) => {
// //       acc[order.status] = (acc[order.status] || 0) + 1;
// //       return acc;
// //     }, {});

// //     return {
// //       monthlyTrends: Object.values(monthlyData),
// //       paymentMethods: Object.entries(paymentMethods).map(([name, value]) => ({ name, value })),
// //       statusDistribution: Object.entries(statusDistribution).map(([name, value]) => ({ name, value }))
// //     };
// //   };

// //   const chartData = prepareChartData();

// //   useEffect(() => {
// //     let results = allOrders;
    
// //     if (searchTerm) {
// //       results = results.filter(order => 
// //         order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         order.phoneNumber.includes(searchTerm) ||
// //         order.city.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //     }
    
// //     if (statusFilter !== 'All') {
// //       results = results.filter(order => order.status === statusFilter);
// //     }
    
// //     setFilteredOrders(results);
// //   }, [searchTerm, statusFilter, allOrders]);

// //   if (isLoading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <Loading type="spin" color="#03543F" />
// //       </div>
// //     );
// //   }

// //   if (isError) {
// //     return (
// //       <div className="flex justify-center items-center h-screen">
// //         <p className="text-red-500">Error loading orders. Please try again.</p>
// //       </div>
// //     );
// //   }

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure you want to delete this order?')) {
// //       deleteOrderMutation(id, {
// //         onSuccess: () => toast.success("Order deleted successfully!"),
// //         onError: (error) => toast.error(`Error: ${error.response?.data?.message || error.message}`)
// //       });
// //     }
// //   };

// //   // Calculate summary statistics
// //   const totalOrders = allOrders.length;
// //   const totalRevenue = allOrders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
// //   const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;
// //   const pendingOrders = allOrders.filter(order => order.status === 'Pending').length;

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
// //       <Helmet>
// //         <meta charSet="utf-8" />
// //         <title>Order Management</title>
// //       </Helmet>

// //       <section className="py-8 antialiased">
// //         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* Dashboard Header */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
// //           >
// //             <div>
// //               <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
// //                 📊 Order Dashboard
// //               </h1>
// //               <p className="text-gray-600 dark:text-gray-400 mt-1">
// //                 {filteredOrders.length} orders found
// //               </p>
// //             </div>
          
// //           </motion.div>

// //           {/* Stats Cards */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-gray-500 dark:text-gray-400">Total Orders</p>
// //                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{totalOrders}</h3>
// //                 </div>
// //                 <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
// //                   <BsBoxSeam className="text-xl" />
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
// //                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">${totalRevenue}</h3>
// //                 </div>
// //                 <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
// //                   <BsGraphUp className="text-xl" />
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-gray-500 dark:text-gray-400">Avg. Order Value</p>
// //                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">${avgOrderValue}</h3>
// //                 </div>
// //                 <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
// //                   <BsGraphUp className="text-xl" />
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.div 
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.4 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-gray-500 dark:text-gray-400">Pending Orders</p>
// //                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{pendingOrders}</h3>
// //                 </div>
// //                 <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
// //                   <BsGraphUp className="text-xl" />
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Charts Section */}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// //             {/* Monthly Order Trends */}
// //             <motion.div 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.3 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Order Trends</h3>
// //               <div className="h-64">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <BarChart data={chartData.monthlyTrends}>
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="name" />
// //                     <YAxis />
// //                     <Tooltip />
// //                     <Legend />
// //                     <Bar dataKey="orders" fill="#8884d8" name="Orders" />
// //                     <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>

// //             {/* Payment Methods Distribution */}
// //             <motion.div 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.4 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Payment Methods</h3>
// //               <div className="h-64">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <PieChart>
// //                     <Pie
// //                       data={chartData.paymentMethods}
// //                       cx="50%"
// //                       cy="50%"
// //                       labelLine={false}
// //                       outerRadius={80}
// //                       fill="#8884d8"
// //                       dataKey="value"
// //                       nameKey="name"
// //                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// //                     >
// //                       {chartData.paymentMethods.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                       ))}
// //                     </Pie>
// //                     <Tooltip />
// //                     <Legend />
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>

// //             {/* Order Status Distribution */}
// //             <motion.div 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Order Status</h3>
// //               <div className="h-64">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <PieChart>
// //                     <Pie
// //                       data={chartData.statusDistribution}
// //                       cx="50%"
// //                       cy="50%"
// //                       labelLine={false}
// //                       outerRadius={80}
// //                       fill="#8884d8"
// //                       dataKey="value"
// //                       nameKey="name"
// //                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
// //                     >
// //                       {chartData.statusDistribution.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                       ))}
// //                     </Pie>
// //                     <Tooltip />
// //                     <Legend />
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>

// //             {/* Revenue by City */}
// //             <motion.div 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.6 }}
// //               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
// //             >
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Revenue by City</h3>
// //               <div className="h-64">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <BarChart
// //                     data={Object.values(
// //                       allOrders.reduce((acc, order) => {
// //                         const city = order.city || 'Unknown';
// //                         if (!acc[city]) {
// //                           acc[city] = { name: city, revenue: 0 };
// //                         }
// //                         acc[city].revenue += order.totalPrice;
// //                         return acc;
// //                       }, {})
// //                     ).sort((a, b) => b.revenue - a.revenue).slice(0, 5)}
// //                   >
// //                     <CartesianGrid strokeDasharray="3 3" />
// //                     <XAxis dataKey="name" />
// //                     <YAxis />
// //                     <Tooltip />
// //                     <Legend />
// //                     <Bar dataKey="revenue" fill="#FF8042" name="Revenue ($)" />
// //                   </BarChart>
// //                 </ResponsiveContainer>
// //               </div>
// //             </motion.div>
// //           </div>

// //           {/* Order Table */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.7 }}
// //             className="bg-white dark:bg-gray-800 shadow-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
// //           >
// //             <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// //               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Order List</h3>
// //               <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
// //                 <div className="relative w-full sm:w-64">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FiSearch className="text-gray-400" />
// //                   </div>
// //                   <input
// //                     type="text"
// //                     placeholder="Search by name, phone, or city..."
// //                     className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="relative w-full sm:w-40">
// //                   <select 
// //                     className="appearance-none pl-3 pr-8 py-2 w-full border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
// //                     value={statusFilter}
// //                     onChange={(e) => setStatusFilter(e.target.value)}
// //                   >
// //                     <option value="All">All Statuses</option>
// //                     <option value="Pending">Pending</option>
// //                     <option value="Shipped">Shipped</option>
// //                     <option value="Delivered">Delivered</option>
// //                     <option value="Cancelled">Cancelled</option>
// //                   </select>
// //                   <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto">
// //               <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
// //                 <thead className="bg-gray-50 dark:bg-gray-700">
// //                   <tr>
// //                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Customer
// //                     </th>
// //                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Contact
// //                     </th>
// //                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Order Dates
// //                     </th>
// //                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Payment
// //                     </th>
// //                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Location
// //                     </th>
// //                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Status
// //                     </th>
// //                     <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                       Actions
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
// //                   {filteredOrders.map((order, index) => (
// //                     <motion.tr
// //                       key={order.id}
// //                       initial={{ opacity: 0, y: 10 }}
// //                       animate={{ opacity: 1, y: 0 }}
// //                       transition={{ delay: 0.1 * index }}
// //                       className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
// //                     >
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="flex items-center">
// //                           <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
// //                             <span className="text-green-600 dark:text-green-400 font-medium">
// //                               {order.name?.charAt(0) || 'C'}
// //                             </span>
// //                           </div>
// //                           <div className="ml-4">
// //                             <div className="text-sm font-medium text-gray-900 dark:text-white">{order.name}</div>
// //                             <div className="text-sm text-gray-500 dark:text-gray-400">ID: {order.id}</div>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="text-sm text-gray-900 dark:text-white">{order.phoneNumber}</div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="text-sm text-gray-900 dark:text-white">
// //                           <div>Paid: {order.paymentDate}</div>
// //                           <div>Ship: {order.shippingDate}</div>
// //                         </div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="flex items-center">
// //                           {order.paymentMethod === 'Card' ? (
// //                             <BsCreditCard className="text-blue-500 mr-2" />
// //                           ) : (
// //                             <BsCash className="text-yellow-500 mr-2" />
// //                           )}
// //                           <div>
// //                             <div className="text-sm font-medium text-gray-900 dark:text-white">{order.paymentMethod}</div>
// //                             <div className="text-sm text-green-600 dark:text-green-400 font-semibold">${order.totalPrice}</div>
// //                           </div>
// //                         </div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <div className="text-sm text-gray-900 dark:text-white">
// //                           <div>{order.city}, {order.governate}</div>
// //                           <div className="text-xs text-gray-500 dark:text-gray-400">{order.streetAddress}</div>
// //                         </div>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap">
// //                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
// //                           ${order.status === 'Shipped' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
// //                             order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
// //                             order.status === 'Cancelled' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
// //                             'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'}`}>
// //                           {order.status}
// //                         </span>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                         <div className="flex justify-end space-x-2">
                        
                        
// //                           <button 
// //                             onClick={() => handleDelete(order.id)}
// //                             disabled={isDeleting}
// //                             className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/30"
// //                             title="Delete order"
// //                           >
// //                             <FiTrash2 className="h-5 w-5" />
// //                           </button>
// //                         </div>
// //                       </td>
// //                     </motion.tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //               {filteredOrders.length === 0 && (
// //                 <div className="text-center py-8">
// //                   <p className="text-gray-500 dark:text-gray-400">No orders found matching your criteria</p>
// //                 </div>
// //               )}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }










// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FiEdit, FiTrash2, FiEye, FiChevronDown, FiSearch } from 'react-icons/fi';
// import { BsCreditCard, BsCash, BsGraphUp, BsBoxSeam } from 'react-icons/bs';
// import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { useState, useEffect } from 'react';
// import Loading from '../Loading';
// import useQueryOrder from '../../Hooks/useQueryOrder';
// import { deleteOrder, getorder } from '../../Apis/Admin/order';
// import useMutationOrder from '../../Hooks/useMutationOrder';
// import { toast } from 'react-toastify';

// // Green theme color palette
// const COLORS = ['#065F46', '#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0'];
// const CHART_COLORS = ['#065F46', '#059669', '#10B981', '#34D399', '#6EE7B7'];

// export default function OrderDashboard() {
//   const { data: allOrders = [], isLoading, isError } = useQueryOrder('order', getorder);
//   const { mutate: deleteOrderMutation, isPending: isDeleting } = useMutationOrder(deleteOrder);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [statusFilter, setStatusFilter] = useState('All');

//   // Prepare chart data
//   const prepareChartData = () => {
//     const monthlyData = allOrders.reduce((acc, order) => {
//       const month = new Date(order.paymentDate).toLocaleString('default', { month: 'short' });
//       if (!acc[month]) {
//         acc[month] = { name: month, orders: 0, revenue: 0 };
//       }
//       acc[month].orders += 1;
//       acc[month].revenue += order.totalPrice;
//       return acc;
//     }, {});

//     const paymentMethods = allOrders.reduce((acc, order) => {
//       const method = order.paymentMethod || 'Unknown';
//       acc[method] = (acc[method] || 0) + 1;
//       return acc;
//     }, {});

//     const statusDistribution = allOrders.reduce((acc, order) => {
//       acc[order.status] = (acc[order.status] || 0) + 1;
//       return acc;
//     }, {});

//     return {
//       monthlyTrends: Object.values(monthlyData),
//       paymentMethods: Object.entries(paymentMethods).map(([name, value]) => ({ name, value })),
//       statusDistribution: Object.entries(statusDistribution).map(([name, value]) => ({ name, value }))
//     };
//   };

//   const chartData = prepareChartData();

//   useEffect(() => {
//     let results = allOrders;
    
//     if (searchTerm) {
//       results = results.filter(order => 
//         order.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.phoneNumber?.includes(searchTerm) ||
//         order.city?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
    
//     if (statusFilter !== 'All') {
//       results = results.filter(order => order.status === statusFilter);
//     }
    
//     setFilteredOrders(results);
//   }, [searchTerm, statusFilter, allOrders]);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
//         <Loading type="spin" color="#065F46" />
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
//         <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md text-center border border-emerald-100 dark:border-gray-700">
//           <div className="text-red-500 dark:text-red-400 text-5xl mb-4">⚠️</div>
//           <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Error Loading Orders</h2>
//           <p className="text-gray-600 dark:text-gray-300 mb-6">Please try again later</p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-md"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this order?')) {
//       deleteOrderMutation(id, {
//         onSuccess: () => toast.success("Order deleted successfully!"),
//         onError: (error) => toast.error(`Error: ${error.response?.data?.message || error.message}`)
//       });
//     }
//   };

//   // Calculate summary statistics
//   const totalOrders = allOrders.length;
//   const totalRevenue = allOrders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
//   const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;
//   const pendingOrders = allOrders.filter(order => order.status === 'Pending').length;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Order Management</title>
//       </Helmet>

//       <section className="py-8 antialiased">
//         <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Dashboard Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
//           >
//             <div>
//               <motion.h1 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2"
//               >
//                 <span className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
//                   📊
//                 </span>
//                 <span>Order Dashboard</span>
//               </motion.h1>
//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-gray-600 dark:text-gray-400 mt-1"
//               >
//                 {filteredOrders.length} orders found
//               </motion.p>
//             </div>
//           </motion.div>

//           {/* Stats Cards */}
//           <div
//           className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 mb-8"
//           //  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
//            >
//             {/* Total Orders */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400">Total Orders</p>
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{totalOrders}</h3>
//                 </div>
//                 <div className="p-3 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
//                   <BsBoxSeam className="text-xl" />
//                 </div>
//               </div>
              // <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              //   <div 
              //     className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
              //     style={{ width: `${Math.min(100, (totalOrders / 500) * 100)}%` }}
              //   />
              // </div>
//             </motion.div>

//             {/* Total Revenue */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">${totalRevenue.toLocaleString()}</h3>
//                 </div>
//                 <div className="p-3 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
//                   <BsGraphUp className="text-xl" />
//                 </div>
//               </div>
              // <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              //   <div 
              //     className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
              //     style={{ width: `${Math.min(100, (totalRevenue / 100000) * 100)}%` }}
              //   />
              // </div>
//             </motion.div>

//             {/* Average Order Value */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400">Avg. Order Value</p>
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">${avgOrderValue}</h3>
//                 </div>
//                 <div className="p-3 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
//                   <BsCreditCard className="text-xl" />
//                 </div>
//               </div>
//               <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
//                   style={{ width: `${Math.min(100, (avgOrderValue / 500) * 100)}%` }}
//                 />
//               </div>
//             </motion.div>

//             {/* Pending Orders */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400">Pending Orders</p>
//                   <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{pendingOrders}</h3>
//                 </div>
//                 <div className="p-3 rounded-full bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
//                   <BsGraphUp className="text-xl" />
//                 </div>
//               </div>
              // <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              //   <div 
              //     className="h-full bg-gradient-to-r from-amber-400 to-amber-600" 
              //     style={{ width: `${Math.min(100, (pendingOrders / totalOrders) * 100)}%` }}
              //   />
              // </div>
//             </motion.div>
//           </div>

//           {/* Charts Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//             {/* Monthly Order Trends */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Monthly Order Trends</h3>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={chartData.monthlyTrends}>
//                     <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
//                     <XAxis 
//                       dataKey="name" 
//                       axisLine={false} 
//                       tickLine={false} 
//                       tick={{ fill: '#6B7280' }} 
//                     />
//                     <YAxis 
//                       axisLine={false} 
//                       tickLine={false} 
//                       tick={{ fill: '#6B7280' }} 
//                     />
//                     <Tooltip 
//                       contentStyle={{
//                         background: '#FFFFFF',
//                         border: '1px solid #E5E7EB',
//                         borderRadius: '0.5rem',
//                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                       }}
//                     />
//                     <Bar 
//                       dataKey="orders" 
//                       name="Orders" 
//                       radius={[4, 4, 0, 0]}
//                     >
//                       {chartData.monthlyTrends.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
//                       ))}
//                     </Bar>
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>

//             {/* Payment Methods Distribution */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Payment Methods</h3>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={chartData.paymentMethods}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                       nameKey="name"
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                     >
//                       {chartData.paymentMethods.map((entry, index) => (
//                         <Cell 
//                           key={`cell-${index}`} 
//                           fill={CHART_COLORS[index % CHART_COLORS.length]} 
//                         />
//                       ))}
//                     </Pie>
//                     <Tooltip 
//                       contentStyle={{
//                         background: '#FFFFFF',
//                         border: '1px solid #E5E7EB',
//                         borderRadius: '0.5rem',
//                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                       }}
//                     />
//                     <Legend 
//                       layout="vertical" 
//                       verticalAlign="middle" 
//                       align="right" 
//                       wrapperStyle={{
//                         paddingLeft: '20px'
//                       }}
//                     />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>

//             {/* Order Status Distribution */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Order Status</h3>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={chartData.statusDistribution}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                       nameKey="name"
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                     >
//                       {chartData.statusDistribution.map((entry, index) => (
//                         <Cell 
//                           key={`cell-${index}`} 
//                           fill={CHART_COLORS[index % CHART_COLORS.length]} 
//                         />
//                       ))}
//                     </Pie>
//                     <Tooltip 
//                       contentStyle={{
//                         background: '#FFFFFF',
//                         border: '1px solid #E5E7EB',
//                         borderRadius: '0.5rem',
//                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                       }}
//                     />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>

//             {/* Revenue by City */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//             >
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Revenue by City</h3>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={Object.values(
//                       allOrders.reduce((acc, order) => {
//                         const city = order.city || 'Unknown';
//                         if (!acc[city]) {
//                           acc[city] = { name: city, revenue: 0 };
//                         }
//                         acc[city].revenue += order.totalPrice;
//                         return acc;
//                       }, {})
//                     ).sort((a, b) => b.revenue - a.revenue).slice(0, 5)}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
//                     <XAxis 
//                       dataKey="name" 
//                       axisLine={false} 
//                       tickLine={false} 
//                       tick={{ fill: '#6B7280' }} 
//                     />
//                     <YAxis 
//                       axisLine={false} 
//                       tickLine={false} 
//                       tick={{ fill: '#6B7280' }} 
//                     />
//                     <Tooltip 
//                       contentStyle={{
//                         background: '#FFFFFF',
//                         border: '1px solid #E5E7EB',
//                         borderRadius: '0.5rem',
//                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                       }}
//                     />
//                     <Bar 
//                       dataKey="revenue" 
//                       name="Revenue ($)" 
//                       radius={[4, 4, 0, 0]}
//                     >
//                       {Object.values(
//                         allOrders.reduce((acc, order) => {
//                           const city = order.city || 'Unknown';
//                           if (!acc[city]) {
//                             acc[city] = { name: city, revenue: 0 };
//                           }
//                           acc[city].revenue += order.totalPrice;
//                           return acc;
//                         }, {})
//                       ).sort((a, b) => b.revenue - a.revenue).slice(0, 5).map((entry, index) => (
//                         <Cell 
//                           key={`cell-${index}`} 
//                           fill={CHART_COLORS[index % CHART_COLORS.length]} 
//                         />
//                       ))}
//                     </Bar>
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </motion.div>
//           </div>

//           {/* Order Table */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//             className="bg-white dark:bg-gray-800 shadow-sm rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
//           >
//             <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Order List</h3>
//               <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//                 <div className="relative w-full sm:w-64">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FiSearch className="text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Search by name, phone, or city..."
//                     className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                   />
//                 </div>
//                 <div className="relative w-full sm:w-40">
//                   <select 
//                     className="appearance-none pl-3 pr-8 py-2 w-full border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                   >
//                     <option value="All">All Statuses</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Shipped">Shipped</option>
//                     <option value="Delivered">Delivered</option>
//                     <option value="Cancelled">Cancelled</option>
//                   </select>
//                   <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
//                 </div>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                 <thead className="bg-gray-50 dark:bg-gray-700">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Customer
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Contact
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Order Dates
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Payment
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Location
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//                   {filteredOrders.map((order, index) => (
//                     <motion.tr
//                       key={order.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.1 * index }}
//                       className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
//                             <span className="text-emerald-600 dark:text-emerald-400 font-medium">
//                               {order.name?.charAt(0) || 'C'}
//                             </span>
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900 dark:text-white">{order.name}</div>
//                             <div className="text-sm text-gray-500 dark:text-gray-400">ID: {order.id}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900 dark:text-white">{order.phoneNumber}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900 dark:text-white">
//                           <div>Paid: {order.paymentDate}</div>
//                           <div>Ship: {order.shippingDate}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           {order.paymentMethod === 'Card' ? (
//                             <BsCreditCard className="text-blue-500 mr-2" />
//                           ) : (
//                             <BsCash className="text-yellow-500 mr-2" />
//                           )}
//                           <div>
//                             <div className="text-sm font-medium text-gray-900 dark:text-white">{order.paymentMethod}</div>
//                             <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">${order.totalPrice}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900 dark:text-white">
//                           <div>{order.city}, {order.governate}</div>
//                           <div className="text-xs text-gray-500 dark:text-gray-400">{order.streetAddress}</div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                           ${order.status === 'Shipped' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 
//                             order.status === 'Pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' : 
//                             order.status === 'Cancelled' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
//                             'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'}`}>
//                           {order.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <div className="flex justify-end space-x-2">
                        
//                           <button 
//                             onClick={() => handleDelete(order.id)}
//                             disabled={isDeleting}
//                             className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
//                             title="Delete order"
//                           >
//                             <FiTrash2 className="h-5 w-5" />
//                           </button>
//                         </div>
//                       </td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//               {filteredOrders.length === 0 && (
//                 <div className="text-center py-12">
//                   <div className="text-gray-400 dark:text-gray-500 mb-4">
//                     <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                   </div>
//                   <p className="text-gray-500 dark:text-gray-400">No orders found matching your criteria</p>
//                   <button 
//                     onClick={() => {
//                       setSearchTerm('');
//                       setStatusFilter('All');
//                     }}
//                     className="mt-4 px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
//                   >
//                     Clear filters
//                   </button>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }




















import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEdit, FiTrash2, FiEye, FiChevronDown, FiSearch } from 'react-icons/fi';
import { BsCreditCard, BsCash, BsGraphUp, BsBoxSeam } from 'react-icons/bs';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import Loading from '../Loading';
import useQueryOrder from '../../Hooks/useQueryOrder';
import { deleteOrder, getorder } from '../../Apis/Admin/order';
import useMutationOrder from '../../Hooks/useMutationOrder';
import { toast } from 'react-toastify';

// Green theme color palette
const COLORS = ['#065F46', '#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0'];
const CHART_COLORS = ['#065F46', '#059669', '#10B981', '#34D399', '#6EE7B7'];

export default function OrderDashboard() {
  const { data: allOrders = [], isLoading, isError } = useQueryOrder('order', getorder);
  const { mutate: deleteOrderMutation, isPending: isDeleting } = useMutationOrder(deleteOrder);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  // Prepare chart data
  const prepareChartData = () => {
    const monthlyData = allOrders.reduce((acc, order) => {
      const month = new Date(order.paymentDate).toLocaleString('default', { month: 'short' });
      if (!acc[month]) {
        acc[month] = { name: month, orders: 0, revenue: 0 };
      }
      acc[month].orders += 1;
      acc[month].revenue += order.totalPrice;
      return acc;
    }, {});

    const paymentMethods = allOrders.reduce((acc, order) => {
      const method = order.paymentMethod || 'Unknown';
      acc[method] = (acc[method] || 0) + 1;
      return acc;
    }, {});

    const statusDistribution = allOrders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});

    return {
      monthlyTrends: Object.values(monthlyData),
      paymentMethods: Object.entries(paymentMethods).map(([name, value]) => ({ name, value })),
      statusDistribution: Object.entries(statusDistribution).map(([name, value]) => ({ name, value }))
    };
  };

  const chartData = prepareChartData();

  useEffect(() => {
    let results = allOrders;
    
    if (searchTerm) {
      results = results.filter(order => 
        order.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.phoneNumber?.includes(searchTerm) ||
        order.city?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== 'All') {
      results = results.filter(order => order.status === statusFilter);
    }
    
    setFilteredOrders(results);
  }, [searchTerm, statusFilter, allOrders]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Loading type="spin" color="#065F46" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="bg-white dark:bg-gray-800 p-4 md:p-8 rounded-xl shadow-lg max-w-md w-full mx-auto text-center border border-emerald-100 dark:border-gray-700 ">
          <div className="text-red-500 dark:text-red-400 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Error Loading Orders</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Please try again later</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = (id) => {
  
      deleteOrderMutation(id, {
        onSuccess: () => toast.success("Order deleted successfully!"),
        onError: (error) => toast.error(`Error: ${error.response?.data?.message || error.message}`)
      });
    
  };

  // Calculate summary statistics
  const totalOrders = allOrders.length;
  const totalRevenue = allOrders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);
  const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;
  const pendingOrders = allOrders.filter(order => order.status === 'Pending').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order Management</title>
      </Helmet>

  <section className="py-4 antialiased">
  <div className="mx-auto px-2 sm:px-4">
    {/* Dashboard Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-between items-start mb-4 gap-2"
    >
      <div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2"
        >
          <span className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
            📊
          </span>
          <span>Order Dashboard</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-400"
        >
          {filteredOrders.length} orders found
        </motion.p>
      </div>
    </motion.div>

    {/* Stats Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 mb-4 md:max-w-md lg:max-w-xl xl:max-w-full">
      {/* Total Orders */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white  dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">Total Orders</p>
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{totalOrders}</h3>
          <div className="p-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
            <BsBoxSeam className="text-base" />
          </div>
        </div>
                      <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
                  style={{ width: `${Math.min(100, (totalOrders / 500) * 100)}%` }}
                />
              </div>
      </motion.div>

      {/* Total Revenue */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">Total Revenue</p>
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">${totalRevenue.toLocaleString()}</h3>
          <div className="p-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
            <BsGraphUp className="text-base" />
          </div>
        </div>
              <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
                  style={{ width: `${Math.min(100, (totalRevenue / 500) * 100)}%` }}
                />
              </div>
      </motion.div>

      {/* Average Order Value */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">Avg. Order Value</p>
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">${avgOrderValue}</h3>
          <div className="p-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
            <BsCreditCard className="text-base" />
          </div>
        </div>
              <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
                  style={{ width: `${Math.min(100, (avgOrderValue / 500) * 100)}%` }}
                />
              </div>
      </motion.div>

      {/* Pending Orders */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">Pending Orders</p>
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{pendingOrders}</h3>
          <div className="p-2 rounded-full bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
            <BsGraphUp className="text-base" />
          </div>
        </div>
              <div className="mt-4 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600" 
                  style={{ width: `${Math.min(100, (pendingOrders / 500) * 100)}%` }}
                />
              </div>
      </motion.div>
    </div>

    {/* Charts Section - Two columns on larger screens */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-4 justify-center mx-auto">
      {/* Monthly Order Trends */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white md:max-w-md lg:max-w-xl dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Monthly Order Trends</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData.monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 10 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 10 }} 
              />
              <Tooltip 
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px'
                }}
              />
              <Bar 
                dataKey="orders" 
                name="Orders" 
                radius={[4, 4, 0, 0]}
              >
                {chartData.monthlyTrends.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Payment Methods Distribution */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white  md:max-w-md lg:max-w-xl dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Payment Methods</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData.paymentMethods}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.paymentMethods.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={CHART_COLORS[index % CHART_COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px'
                }}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                wrapperStyle={{
                  fontSize: '10px',
                  paddingTop: '10px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Order Status Distribution */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white md:max-w-md lg:max-w-xl dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Order Status</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData.statusDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.statusDistribution.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={CHART_COLORS[index % CHART_COLORS.length]} 
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Revenue by City */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white md:max-w-md lg:max-w-xl dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Revenue by City</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={Object.values(
                allOrders.reduce((acc, order) => {
                  const city = order.city || 'Unknown';
                  if (!acc[city]) {
                    acc[city] = { name: city, revenue: 0 };
                  }
                  acc[city].revenue += order.totalPrice;
                  return acc;
                }, {})
              ).sort((a, b) => b.revenue - a.revenue).slice(0, 5)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 10 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6B7280', fontSize: 10 }} 
              />
              <Tooltip 
                contentStyle={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px'
                }}
              />
              <Bar 
                dataKey="revenue" 
                name="Revenue ($)" 
                radius={[4, 4, 0, 0]}
              >
                {Object.values(
                  allOrders.reduce((acc, order) => {
                    const city = order.city || 'Unknown';
                    if (!acc[city]) {
                      acc[city] = { name: city, revenue: 0 };
                    }
                    acc[city].revenue += order.totalPrice;
                    return acc;
                  }, {})
                ).sort((a, b) => b.revenue - a.revenue).slice(0, 5).map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={CHART_COLORS[index % CHART_COLORS.length]} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>

    {/* Order Table with all columns */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-white md:max-w-md lg:max-w-xl xl:max-w-full dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Order List</h3>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400 text-sm" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-9 pr-3 py-2 w-full text-xs border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative flex-1">
            <select 
              className="appearance-none pl-3 pr-8 py-2 w-full text-xs border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Shipped">Shipped</option>
              
            </select>
            <FiChevronDown className="absolute right-2 top-2.5 text-gray-400 text-sm" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Customer
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                Contact
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                Order Dates
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Payment
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell">
                Location
              </th>
              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-3 py-2 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {filteredOrders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                        {order.name?.charAt(0) || 'C'}
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-xs font-medium text-gray-900 dark:text-white truncate max-w-[100px]">{order.name}</div>
                      <div className="text-2xs text-gray-500 dark:text-gray-400">ID: {order.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-xs text-gray-900 dark:text-white truncate max-w-[100px]">{order.phoneNumber}</div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap hidden md:table-cell">
                  <div className="text-xs text-gray-900 dark:text-white space-y-1">
                    <div>Paid: {new Date(order.paymentDate).toLocaleDateString()}</div>
                    <div>Ship: {order.shippingDate ? new Date(order.shippingDate).toLocaleDateString() : 'N/A'}</div>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    {order.paymentMethod === 'Card' ? (
                      <BsCreditCard className="text-blue-500 mr-1 text-sm" />
                    ) : (
                      <BsCash className="text-yellow-500 mr-1 text-sm" />
                    )}
                    <div className="text-xs text-gray-900 dark:text-white">{order.paymentMethod}</div>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap hidden lg:table-cell">
                  <div className="text-xs text-gray-900 dark:text-white">
                    <div>{order.city}, {order.governate}</div>
                    <div className="text-2xs text-gray-500 dark:text-gray-400 truncate max-w-[120px]">{order.streetAddress}</div>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-2xs leading-4 font-semibold rounded-full 
                    ${order.status === 'Shipped' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 
                      order.status === 'Pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' : 
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                    {order.status}
                  </span>
                </td>
                <td className=" py-3 whitespace-nowrap text-center  font-medium">
                  
                
                
                    <button 
                      onClick={() => handleDelete(order.id)}
                      disabled={isDeleting}
                      className="text-red-600 text-center hover:text-red-800 dark:text-red-400 dark:hover:text-red-300  rounded hover:bg-red-50 dark:hover:bg-red-900/30"
                      title="Delete order"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className="text-center py-6">
            <div className="text-gray-400 dark:text-gray-500 mb-2">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">No orders found matching your criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('All');
              }}
              className="mt-2 px-2 py-1 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}