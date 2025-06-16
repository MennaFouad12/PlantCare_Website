
// import { useFormik } from 'formik';
// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
// import { useAuth } from './context/Auth.context';
// import { useQueryClient } from '@tanstack/react-query';
// import { auth } from '../Context/AuthContext';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { use } from 'react';


// export default function Login() {
//   let navigate = useNavigate()
//   // const { isLogin, setLogin } = useAuth();
//   let {setLogin}=useContext(auth)


  

//   let [msg, setMsg] = useState('')
//   let [loading, setLoading] = useState(false)
//   const queryclient = useQueryClient()



//  async function handleLogin(values) {
//     try {
//       setLoading(true)
//       console.log(values);
//       // navigate('/Home')
  
  
//   const response = await axios.post('http://plantcareapi.runasp.net/api/Account/Login', values);
//   console.log("Response Data:", response.data);
  
//   if (response.data.token) {
//   setLoading(false)
//   setMsg('')

// let tokendata = jwtDecode(response.data.token)
// console.log(tokendata)
// if (tokendata['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
//   navigate('/admin')
// }
// else{
//   navigate('/Home')
// }
//   localStorage.setItem('userToken', response.data.token)
//   console.log(localStorage.getItem('userToken'));
  

//   setLogin(jwtDecode(response.data.token))
//   }
  
//     } catch (err) {
//       setLoading(false)
      
//   console.error("Login Error:", err);
//   console.log("Full Error Response:", err?.response);
  
//       setMsg(err?.response?.data)
//       console.log(msg);
//     }
//   }

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string()
//       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/, 'Password must be more than 8 characters long and start with a capital letter')
//       .required('Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: handleLogin,
//   });
//   useEffect(() => {
//     if (localStorage.getItem('userToken')) {
//       let tokendata = jwtDecode(localStorage.getItem('userToken'))
//       if (tokendata['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
//         navigate('/admin')
//       }
//       else{
//         navigate('/Home')
//       }
//     }
//   },[])

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
//      {/* {msg ? <div className=" p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//         <span className="font-medium">{msg}</span>
//       </div> : ''} */}
//       <form className="max-w-md mx-auto bg-gray-100 shadow-md " onSubmit={formik.handleSubmit}>
//       <h2 className='text-2xl my-3 text-center text-gray-600'>Login Now:</h2>
//        {msg ? <div className=" p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
//         <span className="font-medium">{msg}</span>
//       </div> : ''}
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             id="email"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           <label
//             htmlFor="email"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email address
//           </label>
//         </div>

//         {formik.errors.email && formik.touched.email && (
//           <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
//             <span className="font-medium">{formik.errors.email}</span>
//           </div>
//         )}

//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="password"
//             id="password"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           <label
//             htmlFor="password"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Password
//           </label>
//         </div>

//         {formik.errors.password && formik.touched.password && (
//           <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
//             <span className="font-medium">{formik.errors.password}</span>
//           </div>
//         )}

//         <div className='text-center mb-2'>
//           <button
//             type="submit"
//             className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//           >
//             {loading ? <i className='fas fa-spin fa-spinner text-white'></i> : 'Login'}
          
//           </button>
//         </div>
//         <p className='text-center'>Don't have an account? <Link to="/Register" className='text-green-700 font-medium'>Register</Link></p> 
//         <p className='text-center'><Link to="/ForgetPassword" className='my-3 text-green-700 font-medium'>Forgot password?</Link></p> 
//       </form>

//       {/* Additional links */}
     
//     </motion.div>
//     </div>
//     </div>
//   );
// }






import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaLock, FaEnvelope, FaLeaf, FaSpinner } from 'react-icons/fa';
import product3 from '../assets/1a82a500f4ba080d51fa5c39978c9812.jpg';
import { useAuth } from './context/Auth.context';
import { useQueryClient } from '@tanstack/react-query';
import { auth } from '../Context/AuthContext';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  let navigate = useNavigate();
  let { setLogin } = useContext(auth);
  let [msg, setMsg] = useState('');
  let [loading, setLoading] = useState(false);
  const queryclient = useQueryClient();

  async function handleLogin(values) {
    try {
      setLoading(true);
      const response = await axios.post('http://plantcareapi.runasp.net/api/Account/Login', values);
      
      if (response.data.token) {
        setLoading(false);
        setMsg('');
        let tokendata = jwtDecode(response.data.token);
        
        localStorage.setItem('userToken', response.data.token);
        setLogin(tokendata);
        
        if (tokendata['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
          navigate('/admin');
        } else {
          navigate('/Home');
        }
      }
    } catch (err) {
      setLoading(false);
      setMsg(err?.response?.data);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/, 'Password must be more than 8 characters long and start with a capital letter')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      let tokendata = jwtDecode(localStorage.getItem('userToken'));
      if (tokendata['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin') {
        navigate('/admin');
      } else {
        navigate('/Home');
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Welcome Back</h2>
          
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

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
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
            </motion.div>

            <div className="flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm"
              >
                <Link to="/ForgetPassword" className="font-medium text-green-600 hover:text-green-500">
                  Forgot password?
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaSpinner className="animate-spin h-5 w-5 text-white" />
                  </motion.div>
                ) : (
                  'Sign in'
                )}
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            <p>
              Don't have an account?{' '}
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/Register" className="font-medium text-green-600 hover:text-green-500">
                  Register here
                </Link>
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}