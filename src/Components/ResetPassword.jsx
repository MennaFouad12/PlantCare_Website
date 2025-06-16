
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
// import axios from 'axios';
// export default function ResetPassword() {


    
//   let navigate = useNavigate()
//     let [msg, setMsg] = useState('')
//       let [loading, setLoading] = useState(false)
//   async function handleNewPassword(values) {
    
//     console.log(values);
//     values.email = localStorage.getItem('email');
//     console.log(values);

//     try {
//       setLoading(true)
//       let { data } = await axios.post('http://plantcareapi.runasp.net/api/Account/reset-password', values)
//       console.log(data);
//       if (data.message === 'Password changed successfully.') {
//           setLoading(false)
//           setMsg('')
//           localStorage.removeItem('email');
          
//           navigate('/Login')
//       }
//   } catch (err) {
//       setLoading(false)
//       console.error("Error:", err);
//   console.log("Full Error Response:", err?.response.data?.message);

//       setMsg(err?.response?.data?.message)

//   }
//     // Handle login logic here, such as API calls
//   }



//   let validationSchema = Yup.object({
    
//     newPassword: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/).required('password is required'),
// })

// let formik = useFormik({
//     initialValues: {
//         newPassword: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       handleNewPassword(values); // Call your handler function
//     },
// })


//   return (
    
//     <div className=" container mt-10 flex flex-col md:flex-row justify-center items-center   ">
//     <div>
// <img src={product3}  alt="" />
//     </div>
//         <div className='relative z-10  w-full'>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Reset Password</title>
//       </Helmet>
      
// <motion.div 
//       initial={{ opacity: 0, scale: 0.3 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.7 }}
//     >
     
     
//      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
//      <h2 className='text-2xl my-3 text-center text-green-700'>Reset Password</h2>



// <div className="relative z-0 w-full mb-5 group">
//     <input onBlur={formik.handleBlur} type="password" value={formik.values.newPassword} onChange={formik.handleChange} id="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//     <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">newPassword</label>
// </div>


// {/* alert */}

// {formik.errors.newPassword && formik.touched.newPassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//     <span className="font-medium">{formik.errors.newPassword}</span>
// </div> : ''}

// <div className='text-center'>
// <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//     login
// </button>
// </div>
// </form>

//       {/* Additional links */}
     
//     </motion.div>
//     </div>
//     </div>
//   );
// }




import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaLock, FaLeaf, FaSpinner, FaCheck } from 'react-icons/fa';
import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
import axios from 'axios';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleNewPassword(values) {
    try {
      setLoading(true);
      values.email = localStorage.getItem('email');
      const { data } = await axios.post('http://plantcareapi.runasp.net/api/Account/reset-password', values);
      
      if (data.message === 'Password changed successfully.') {
        setLoading(false);
        setMsg('');
        setSuccess(true);
        localStorage.removeItem('email');
        
        // Auto-navigate after 2 seconds
        setTimeout(() => navigate('/Login'), 2000);
      }
    } catch (err) {
      setLoading(false);
      setMsg(err?.response?.data?.message);
    }
  }

  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
      )
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: '',
    },
    validationSchema,
    onSubmit: handleNewPassword,
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
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

          {success ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-green-600 text-3xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Password Reset Successful!</h2>
              <p className="text-gray-600 mb-6">
                You will be redirected to the login page shortly.
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 }}
                className="h-1 bg-green-200 rounded-full"
              >
                <div className="h-full bg-green-600 rounded-full"></div>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Create New Password</h2>
              <p className="text-gray-600 mb-6 text-center">
                Enter your new password below
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
                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.newPassword && formik.touched.newPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                      placeholder="••••••••"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.newPassword}
                    />
                  </div>
                  {formik.errors.newPassword && formik.touched.newPassword && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {formik.errors.newPassword}
                    </motion.p>
                  )}
                  <p className="mt-2 text-xs text-gray-500">
                    Password must contain at least 8 characters, including uppercase, lowercase, number and special character
                  </p>
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
                      'Reset Password'
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
                  Remember your password?{' '}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/Login" className="font-medium text-green-600 hover:text-green-500">
                      Sign in
                    </Link>
                  </motion.span>
                </p>
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}