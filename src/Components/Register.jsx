
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
// import axios from 'axios';
// export default function Register() {
//   let navigate = useNavigate()

//   let [msg, setMsg] = useState('')
//     let [loading, setLoading] = useState(false)
//     function handleRegister(values) {
//       setLoading(true)
//       console.log(values);
//       axios.post('http://plantcareapi.runasp.net/api/Account/Register', values)
//           .then(({ data }) => {
//             console.log(data);
//               if (data.message === 'Done') {
//                   setLoading(false)
//                   setMsg('')
                 
                  
//                   navigate('/Login')
//               }

//           })
//           .catch((err) => {
//               setLoading(false)
//               setMsg(err?.response?.data?.message)
//           })
//   }



//   let validationSchema = Yup.object({
//     firstName: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),
//     lastName: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),
//     username: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),
//     email: Yup.string().email().required('email is required'),
//     password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/).required('password is required'),
//     confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'rePassword must be one of the following values password field').required('repassword is required'),
  
// })

// let formik = useFormik({
//     initialValues: {
//       firstName: '',
//         lastName: '',
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
        
//     },
//     validationSchema,
//     onSubmit: handleRegister
// })


//   return (
    
//     <div className="container mt-10 flex flex-col md:flex-row justify-center items-center   ">
//     <div>
// <img src={product3}  alt="" />
//     </div>
//         <div className='relative z-10  w-full'>
//         <Helmet>
//         <meta charSet="utf-8" />
//         <title>Register</title>
       
//       </Helmet>
      
// <motion.div 
//       initial={{ opacity: 0, scale: 0.3 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.7 }}
//     >
     
      
//       {msg ? <div className=" p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                 <span className="font-medium">{msg}</span>
//             </div> : ''}
//        <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
//        <h2 className='text-2xl my-3 text-center text-green-700'>Register Now:</h2>
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input onBlur={formik.handleBlur} value={formik.values.username} onChange={formik.handleChange} type="text" id="username" name='username' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name</label>
//                 </div>


//                 {/* alert */}

//                 {formik.errors.username && formik.touched.username ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">{formik.errors.username}</span>
//                 </div> : ''}

//                 <div className="relative z-0 w-full mb-5 group">
//                     <input onBlur={formik.handleBlur} value={formik.values.firstName} onChange={formik.handleChange} type="text" id="firstName" name='firstName' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//                 </div>


//                 {/* alert */}

//                 {formik.errors.firstName && formik.touched.firstName  ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">{formik.errors.firstName }</span>
//                 </div> : ''}



//                 <div className="relative z-0 w-full mb-5 group">
//                     <input onBlur={formik.handleBlur} value={formik.values.lastName} onChange={formik.handleChange} type="text" id="lastName" name='lastName' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//                 </div>


//                 {/* alert */}

//                 {formik.errors.lastName && formik.touched.lastName ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">{formik.errors.lastName}</span>
//                 </div> : ''}




//                 <div className="relative z-0 w-full mb-5 group">
//                     <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} id="email" name='email' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//                 </div>

//                 {/* alert */}

//                 {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">{formik.errors.email}</span>
//                 </div> : ''}

//                 <div className="relative z-0 w-full mb-5 group">
//                     <input onBlur={formik.handleBlur} type="password" value={formik.values.password} onChange={formik.handleChange} id="password" name='password' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//                 </div>


//                 {/* alert */}

//                 {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">password must begin with capital letter , min is 5,max is 10 </span>
//                 </div> : ''}



//                 <div className="relative z-0 w-full mb-5 group">
//                     <input onBlur={formik.handleBlur} type="password" id="confirmPassword" name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
//                     <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//                 </div>


//                 {/* alert */}

//                 {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//                     <span className="font-medium">{formik.errors.confirmPassword}</span>
//                 </div> : ''}




//                 <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
//                 {loading ? <i className='fas fa-spin fa-spinner text-white'></i> : 'Submit'}
//                 </button>
//                 {/* {loading ? <i className='fas fa-spin fa-spinner text-white'></i> : 'Submit'} */}
//             </form>

      
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
import { FaUser, FaEnvelope, FaLock, FaLeaf, FaSpinner } from 'react-icons/fa';
import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
import axios from 'axios';

export default function Register() {
  let navigate = useNavigate();
  let [msg, setMsg] = useState('');
  let [loading, setLoading] = useState(false);

  function handleRegister(values) {
    setLoading(true);
    axios.post('http://plantcareapi.runasp.net/api/Account/Register', values)
      .then(({ data }) => {
        if (data.message === 'Done') {
          setLoading(false);
          setMsg('');
          navigate('/Login');
        }
      })
      .catch((err) => {
        setLoading(false);
        setMsg(err?.response?.data?.message);
      });
  }

  let validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .max(10, 'First name must be at most 10 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .max(10, 'Last name must be at most 10 characters')
      .required('Last name is required'),
    username: Yup.string()
      .min(2, 'Username must be at least 2 characters')
      .max(10, 'Username must be at most 10 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password'),
  });

  let formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: handleRegister
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Your Account</h2>
          
          {msg && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded"
            >
              <p>{msg}</p>
            </motion.div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Username Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.username && formik.touched.username ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="yourusername"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>
              {formik.errors.username && formik.touched.username && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.username}
                </motion.p>
              )}
            </motion.div>

            {/* Name Fields */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`block w-full px-3 py-2 border ${formik.errors.firstName && formik.touched.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="John"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {formik.errors.firstName}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`block w-full px-3 py-2 border ${formik.errors.lastName && formik.touched.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="Doe"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {formik.errors.lastName}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                  placeholder="your@email.com"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              {formik.errors.email && formik.touched.email && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Password Fields */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="••••••••"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                {formik.errors.password && formik.touched.password && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {formik.errors.password}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.confirmPassword && formik.touched.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                    placeholder="••••••••"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                </div>
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {formik.errors.confirmPassword}
                  </motion.p>
                )}
              </div>
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
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaSpinner className="animate-spin h-5 w-5 text-white" />
                  </motion.div>
                ) : (
                  'Create Account'
                )}
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            <p>
              Already have an account?{' '}
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
        </motion.div>
      </motion.div>
    </div>
  );
}
