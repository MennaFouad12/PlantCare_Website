
// import { useFormik } from 'formik';
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
// export default function ResetCode() {

//   let navigate = useNavigate()
    

//   async function handleResetPassword(values) {
//     navigate('/ResetPassword')
//     console.log(values);
//     // Handle login logic here, such as API calls
//   }

 

// let formik2 = useFormik({
//     initialValues: {
//         resetCode: '',

//     },
   
//     onSubmit: handleResetPassword
// })


//   return (
    
//     <div className="container mt-10 flex flex-col md:flex-row justify-center items-center   ">
//     <div>
// <img src={product3}  alt="" />
//     </div>
//         <div className='relative z-10  w-full'>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Reset Code</title>
//       </Helmet>
      
// <motion.div 
//       initial={{ opacity: 0, scale: 0.3 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.7 }}
//     >
     
     
//      <form className="max-w-md mx-auto" onSubmit={formik2.handleSubmit}>
//      <h2 className='text-2xl my-3 text-center text-green-700'>Reset code</h2>

// <div className="relative z-0 w-full mb-5 group">
//     <input type="text" onBlur={formik2.handleBlur} onChange={formik2.handleChange} value={formik2.values.resetCode} id="resetCode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//     <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">reset code</label>
// </div>

// {/* alert */}

// {formik2.errors.resetCode && formik2.touched.resetCode ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//     <span className="font-medium">{formik2.errors.resetCode}</span>
// </div> : ''}




// <div className='text-center mt-10'>
// <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">

// ResetCode
// </button>
// {/* {loading ? <i className='fas fa-spin fa-spinner text-white'></i> : 'ResetCode'} */}
// </div>
// </form>

//       {/* Additional links */}
     
//     </motion.div>
//     </div>
//     </div>
//   );
// }
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
// import axios from 'axios';

// export default function ResetCode() {
//   let navigate = useNavigate();
// let [msg, setMsg] = useState('')
//       let [loading, setLoading] = useState(false)
//   async function handleResetPassword(values) {
//     console.log(values);
//     values.email = localStorage.getItem('email');
//     console.log(values);
//     // Navigate to the ResetPassword route after form submission
  


//     try {
//       setLoading(true)
//       let { data } = await axios.post('http://plantcareapi.runasp.net/api/Account/verify-code', values)
//       console.log(data);
//       if (data.message === 'Code verified successfully.') {
//           setLoading(false)
//           setMsg('')
          
//           navigate('/ResetPassword');
//       }
//   } catch (err) {
//       setLoading(false)
//       console.error("Error:", err);
//   console.log("Full Error Response:", err?.response.data?.message);

//       setMsg(err?.response?.data?.message)

//   }
//   }

//   const formik2 = useFormik({
//     initialValues: {
//       verificationCode: '',
//     },
//     onSubmit: (values) => {
//       handleResetPassword(values); // Call your handler function
//     },
//   });

//   return (
//     <div className="container mt-10 flex flex-col md:flex-row justify-center items-center">
//       <div>
//         <img src={product3} alt="" />
//       </div>
//       <div className="relative z-10 w-full">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Reset Code</title>
//         </Helmet>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.3 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <form className="max-w-md mx-auto" onSubmit={formik2.handleSubmit}>
//             <h2 className="text-2xl my-3 text-center text-green-700">Reset code</h2>

//             <div className="relative z-0 w-full mb-5 group">
//               <input
//                 type="text"
//                 onBlur={formik2.handleBlur}
//                 onChange={formik2.handleChange}
//                 value={formik2.values.verificationCode}
//                 id="verificationCode"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//                 placeholder=" "
//               />
//               <label
//                 htmlFor="verificationCode"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Reset Code
//               </label>
//             </div>

//             {/* Alert */}
//             {formik2.errors.verificationCode && formik2.touched.verificationCode ? (
//               <div
//                 className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
//                 role="alert"
//               >
//                 <span className="font-medium">{formik2.errors.verificationCode}</span>
//               </div>
//             ) : null}

//             <div className="text-center mt-10">
//               <button
//                 type="submit"
//                 className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//               >
                
//                 {loading ? <i className='fas fa-spin fa-spinner text-white'></i> : 'ResetCode'}
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }










import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaKey, FaLeaf, FaSpinner, FaArrowRight } from 'react-icons/fa';
import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
import axios from 'axios';

export default function ResetCode() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleResetPassword(values) {
    try {
      setLoading(true);
      values.email = localStorage.getItem('email');
      const { data } = await axios.post('http://plantcareapi.runasp.net/api/Account/verify-code', values);
      
      if (data.message === 'Code verified successfully.') {
        setLoading(false);
        setMsg('');
        navigate('/ResetPassword');
      }
    } catch (err) {
      setLoading(false);
      setMsg(err?.response?.data?.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      verificationCode: '',
    },
    validate: values => {
      const errors = {};
      if (!values.verificationCode) {
        errors.verificationCode = 'Verification code is required';
      } else if (values.verificationCode.length < 6) {
        errors.verificationCode = 'Code must be at least 6 characters';
      }
      return errors;
    },
    onSubmit: handleResetPassword,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Code</title>
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
          className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
        >
          <div className="flex items-center justify-center mb-8">
            <FaLeaf className="text-green-600 text-3xl mr-2" />
            <h1 className="text-3xl font-bold text-green-700">PlantCare</h1>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Enter Verification Code</h2>
          <p className="text-gray-600 mb-6 text-center">
            We've sent a 6-digit code to your email. Please enter it below.
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
            {/* Verification Code Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaKey className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="verificationCode"
                  name="verificationCode"
                  className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.verificationCode && formik.touched.verificationCode ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="123456"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.verificationCode}
                  maxLength="6"
                />
              </div>
              {formik.errors.verificationCode && formik.touched.verificationCode && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.verificationCode}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
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
                    Verify Code
                    <FaArrowRight className="ml-2" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            <p>
              Didn't receive a code?{' '}
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => navigate('/ForgetPassword')}
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Resend code
                </button>
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}