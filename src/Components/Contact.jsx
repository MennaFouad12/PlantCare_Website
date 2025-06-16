
// import { useFormik } from 'formik';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as Yup from 'yup';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { useState } from 'react';
// export default function Contact() {

//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState('');
//   async function handleContact(values) {

//     try {
//       setLoading(true)
//       console.log(values);
//       // navigate('/Home')
  
  
//   const response = await axios.post('http://plantcareapi.runasp.net/api/ContactUs/Add', values);
//   console.log("Response Data:", response.data);
  
//   if (response.data ) {
//   setLoading(false)
//     toast.success("contact message sent");
//   setMsg('')

//   }
//     } catch (err) {

//       setLoading(false)
//       toast.error("contact message sent not sent");
//   console.error("Login Error:", err);
//   console.log("Full Error Response:", err?.response);
  
//       setMsg(err?.response?.data?.message)
//     }
//     // Handle login logic here, such as API calls
//   }

//   const validationSchema = Yup.object({
//     name: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),
//     emmail: Yup.string().email('Invalid email format').required('Email is required'),
//     message: Yup.string().min(2, 'min length is 2').max(100, 'max length is 100').required('message is required'),
    
//   });

//   const formik = useFormik({
//     initialValues: {
//         name:'',
//         emmail: '',
//         message: ''
    
//     },
//     validationSchema,
//     onSubmit: handleContact,
//   });

//   return (
    
//       <div className=" container flex flex-col md:flex-row justify-center items-center  mt-10  ">
//         <div>
// <img src={product3}  alt="" />
//         </div>
//         <div className='relative z-10  w-full'>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Login</title>
//       </Helmet>
      
// <motion.div 
//       initial={{ opacity: 0, scale: 0.3 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.7 }}
//     >
     
//       <form className="max-w-md mx-auto " onSubmit={formik.handleSubmit}>
//       <h2 className='text-2xl my-3 text-center text-green-700'>Contact Us</h2>


//       <div className="relative z-0 w-full mb-5 group">
//                     <input onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user name</label>
//                 </div>


//                 {/* alert */}

//                 {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">{formik.errors.name}</span>
//                 </div> : ''}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             id="emmail"
//             name="emmail"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//             value={formik.values.emmail}
//           />
//           <label
//             htmlFor="email"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email address
//           </label>
//         </div>

//         {formik.errors.emmail && formik.touched.emmail && (
//           <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
//             <span className="font-medium">{formik.errors.emmail}</span>
//           </div>
//         )}

   
// <div className='mb-10'>
    
// <label for="message" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Your message</label>
// <textarea id="message" name="message" onBlur={formik.handleBlur} onChange={formik.handleChange}   value={formik.values.message} rows="4" class="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-600 focus:border-green-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600" placeholder="Write your thoughts here..."></textarea>

// </div>
// {formik.errors.message && formik.touched.message && (
//           <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
//             <span className="font-medium">{formik.errors.message}</span>
//           </div>
//         )}
        
//         <div className='text-center mb-2'>
//           <button
//             type="submit"
//             className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//           >
//             send
//           </button>
//         </div>
//         {/* <p className='text-center'>Don't have an account? <Link to="/Register" className='text-green-700 font-medium'>Register</Link></p> 
//         <p className='text-center'><Link to="/ForgetPassword" className='my-3 text-green-700 font-medium'>Forgot password?</Link></p>  */}
//       </form>

//       {/* Additional links */}
     
//     </motion.div>
//     </div>
//     </div>
//   );
// }



import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaPaperPlane, FaUser, FaEnvelope, FaLeaf, FaSpinner } from 'react-icons/fa';
import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  async function handleContact(values) {
    try {
      setLoading(true);
      const response = await axios.post('http://plantcareapi.runasp.net/api/ContactUs/Add', values);
      
      if (response.data) {
        setLoading(false);
        toast.success("Your message has been sent successfully!");
        setMsg('');
        formik.resetForm();
      }
    } catch (err) {
      setLoading(false);
      toast.error("Failed to send message");
      setMsg(err?.response?.data?.message);
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(30, 'Name must be at most 30 characters')
      .required('Name is required'),
    emmail: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must be at most 500 characters')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      emmail: '',
      message: ''
    },
    validationSchema,
    onSubmit: handleContact,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block md:w-1/2 bg-green-100"
        >
          <img 
            src={product3} 
            alt="Plant care" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 p-8 md:p-12"
        >
          <div className="flex items-center justify-center mb-8">
            <FaLeaf className="text-green-600 text-3xl mr-2" />
            <h1 className="text-3xl font-bold text-green-700">PlantCare</h1>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-600 mb-8 text-center">
            Have questions or feedback? We'd love to hear from you!
          </p>
          
          {msg && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded"
            >
              <p>{msg}</p>
            </motion.div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="John Doe"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              {formik.errors.name && formik.touched.name && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="emmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="emmail"
                  name="emmail"
                  className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.emmail && formik.touched.emmail ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="your@email.com"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.emmail}
                />
              </div>
              {formik.errors.emmail && formik.touched.emmail && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.emmail}
                </motion.p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`block w-full px-3 py-2 border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                placeholder="Write your message here..."
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.errors.message && formik.touched.message && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <FaSpinner className="animate-spin h-5 w-5 text-white" />
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="ml-2" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            <p>
              Prefer other ways to reach us?{' '}
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="font-medium text-green-600 hover:text-green-500">
                  Visit our FAQ page
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
