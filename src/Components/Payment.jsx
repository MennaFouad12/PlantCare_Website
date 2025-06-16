// import React from 'react'
// import { motion } from 'framer-motion';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ImageUploader from './ImageUploader';
// import BasicModal from './BasicModel';
// export default function Payment() {
//   async function handleLogin(values) {
//     console.log(values);
//     // Handle login logic here, such as API calls
//   }

//   const validationSchema = Yup.object({
//     firstname: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),
//     lastname: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),

//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string()
//       .matches(/^[A-Z][a-zA-Z0-9]{5,10}$/, 'Password must be 6-10 characters long and start with a capital letter')
//       .required('Password is required'),
//     phone: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/).required('phone is required'),
//     promocode: Yup.string().matches(/^[1-9]{6}$/, 'promocode must be 6 numbers')
//   });

//   const formik = useFormik({
//     initialValues: {
//       firstname: '',
//       lastname: '',
//       email: '',
//       phone: '',
//       promocode: '',
//     },
//     validationSchema,
//     onSubmit: handleLogin,
//   });
//   return (
//     <div className="w-full flex justify-center items-center mt-10 px-0">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.3 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//       >

// <form className="w-full " onSubmit={formik.handleSubmit}>
//           <h2 className='text-2xl my-3 font-semibold mb-5  text-center text-green-700'>Checkout</h2>
          

            




//               <div>
//                 <div className="relative z-0 w-full mb-5 group">
//                   <input
//                     type="tel"
//                     id="phone"
//                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//                     placeholder=" "
//                     onBlur={formik.handleBlur}
//                     onChange={formik.handleChange}
//                     value={formik.values.phone}
//                   />
//                   <label
//                     htmlFor="phone"
//                     className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                   >
//                     phone
//                   </label>
//                 </div>

//                 {formik.errors.phone && formik.touched.phone && (
//                   <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
//                     <span className="font-medium">{formik.errors.phone}</span>
//                   </div>
//                 )}
//               </div>
//               <div>

//                 <select id="countries" name="countries" onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.country} className="block py-2.5 px-0 w-full mb-5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer">
//                   <option selected>Choose a country</option>
//                   <option value="US">United States</option>
//                   <option value="CA">Canada</option>
//                   <option value="FR">France</option>
//                   <option value="DE">Germany</option>
//                 </select>
//               </div>
//               <div>

//                 <select id="governate" name="governate" onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.governate} className="block py-2.5 px-0 w-full mb-5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer">
//                   <option selected>Choose a country</option>
//                   <option value="US">United States</option>
//                   <option value="CA">Canada</option>
//                   <option value="FR">France</option>
//                   <option value="DE">Germany</option>
//                 </select>
//               </div>


//               <div className="relative z-0 w-full mb-5 group">
//                 <input
//                   type="text"
//                   id="address"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//                   placeholder=" "
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.address}
//                 />
//                 <label
//                   htmlFor="address"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   address
//                 </label>
//               </div>

//               {formik.errors.address && formik.touched.address && (
//                 <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
//                   <span className="font-medium">{formik.errors.address}</span>
//                 </div>
//               )}





//               <div>
//                 <label className='text-gray-700 ' > Select Payment Method</label>
//                 <div class="flex items-center mb-4 mt-5">
//                   <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//                   <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">cridet card</label>
//                 </div>
//                 <div class="flex items-center">
//                   <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//                   <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">Cash</label>
//                 </div>

//               </div>

//               <div className='text-center mb-2'>
//                 {/* <button
//                                     type="submit"
//                                     className="text-white mt-10 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                                 >
//                                   pay
//                                 </button> */}
//                 <BasicModal></BasicModal>
//               </div>
          

          
//         </form>
        
//         {/* Additional links */}

//       </motion.div>


//     </div>
//   )
// }



// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import BasicModal from './BasicModel';
// import axios from 'axios';




// export default function Payment() {
//   const formRef = useRef();
//   let [msg, setMsg] = useState('')
//   let [loading, setLoading] = useState(false)
//   async function handleOrder(values) {
//     try {
//       setLoading(true)
//       console.log(values);
//       // navigate('/Home')
  
//       const token = localStorage.getItem('userToken');
//   const response = await axios.post('http://plantcareapi.runasp.net/api/Order/CreateOrder', values,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });
//   console.log("Response Data:", response.data);
//   if(response.data){
//     setLoading(false)
//     setMsg('')

//   }
//     } catch (err) {
//       setLoading(false)
      
//   console.error("Login Error:", err);
//   console.log("Full Error Response:", err?.response);
  
//       setMsg(err?.response?.data?.message)
//     }
    

    
//   }

//   const validationSchema = Yup.object({
//     phoneNumber: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/).required('Phone is required'),
//     streetAddress: Yup.string().required('Address is required'),
//     city: Yup.string().required('City is required'),
//     governate: Yup.string().required('Governate is required'),
//     paymentMethod: Yup.string().required('Payment method is required')
//   });

//   const formik = useFormik({
//     initialValues: {
//       phoneNumber: '',
//       streetAddress: '',
//       city: '',
//       governate: '',
//       paymentMethod: 'cash', // Set default value
//     },
//     validationSchema,
//     onSubmit: handleOrder,
//   });

//   return (
//     <div className="container w-full md:w-1/2 flex justify-center items-center mt-10 px-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.3 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//         className="w-full"
//       >
//         <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
//           {/* Phone Input */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//               placeholder=" "
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               value={formik.values.phoneNumber}
//             />
//             <label
//               htmlFor="phoneNumber"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Phone
//             </label>
//           </div>

//           {/* City Dropdown */}
//           <div className="w-full mb-5">
//             <select
//               id="city"
//               name="city"
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               value={formik.values.city}
//               className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             >
//               <option value="">Choose a city</option>
//               <option value="New York">New York</option>
//               <option value="London">London</option>
//               <option value="Cairo">Cairo</option>
//             </select>
//           </div>

//           {/* Governate Dropdown */}
//           <div className="w-full mb-5">
//             <select
//               id="governate"
//               name="governate"
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               value={formik.values.governate}
//               className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             >
//               <option value="">Choose a governate</option>
//               <option value="California">California</option>
//               <option value="Texas">Texas</option>
//               <option value="Giza">Giza</option>
//             </select>
//           </div>

//           {/* Address Input */}
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               id="streetAddress"
//               name="streetAddress"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
//               placeholder=" "
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange}
//               value={formik.values.streetAddress}
//             />
//             <label
//               htmlFor="streetAddress"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Address
//             </label>
//           </div>

//           {/* Payment Method */}
//           <div className="w-full mb-5">
//             <label className='text-gray-700'>Select Payment Method</label>
            
//             <div className="flex items-center mb-4 mt-5">
//               <input
//                 id="credit-card"
//                 type="radio"
//                 name="paymentMethod"
//                 value="credit-card"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 checked={formik.values.paymentMethod === 'credit-card'}
//                 className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
//               />
//               <label htmlFor="credit-card" className="ms-2 text-sm font-medium text-gray-500">
//                 Credit card
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="Cash"
//                 type="radio"
//                 name="paymentMethod"
//                 value="Cash"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 checked={formik.values.paymentMethod === 'Cash'}
//                 className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
//               />
//               <label htmlFor="Cash" className="ms-2 text-sm font-medium text-gray-500">
//                 Cash
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className='text-center mb-2 w-full'>
//             <BasicModal 
//               formRef={formRef} 
//               isValid={formik.isValid}
//               isSubmitting={formik.isSubmitting}
//             />
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }






import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPhone, FaMapMarkerAlt, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import BasicModal from './BasicModel';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Payment() {
  const formRef = useRef();
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
const[orderdata,setOrderdata]=useState({})
  async function handleOrder(values) {
    try {
      setLoading(true);
      const token = localStorage.getItem('userToken');
      const response = await axios.post(
        'http://plantcareapi.runasp.net/api/Order/CreateOrder', 
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
     
      if(response.data){
          console.log("order Response Data:", response.data);
        setOrderdata(response.data)
        setLoading(false);
        setMsg('');
        toast.success('Order placed successfully!');
      }
    } catch (err) {
      setLoading(false);
      setMsg(err?.response?.data?.message);
      toast.error('Failed to place order');
    }
  }

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^(002)?01[0-25][0-9]{8}$/, 'Please enter a valid Egyptian phone number')
      .required('Phone number is required'),
    streetAddress: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    governate: Yup.string().required('Governate is required'),
    paymentMethod: Yup.string().required('Payment method is required')
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      streetAddress: '',
      city: '',
      governate: '',
      paymentMethod: 'Cash',
    },
    validationSchema,
    onSubmit: handleOrder,
  });

  const cities = [
    { value: 'Cairo', label: 'Cairo' },
    { value: 'Alexandria', label: 'Alexandria' },
    { value: 'Giza', label: 'Giza' },
    { value: 'Luxor', label: 'Luxor' },
    { value: 'Aswan', label: 'Aswan' },
  ];

  const governates = [
    { value: 'Cairo', label: 'Cairo' },
    { value: 'Alexandria', label: 'Alexandria' },
    { value: 'Giza', label: 'Giza' },
    { value: 'Sharqia', label: 'Sharqia' },
    { value: 'Dakahlia', label: 'Dakahlia' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white rounded-xl shadow-lg overflow-hidden p-8"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Complete Your Order</h2>
        
        {msg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded"
          >
            <p>{msg}</p>
          </motion.div>
        )}

        <form ref={formRef} onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Phone Input */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                placeholder="01XXXXXXXXX"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />
            </div>
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-sm text-red-600"
              >
                {formik.errors.phoneNumber}
              </motion.p>
            )}
          </motion.div>

          {/* City and Governate */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <select
                id="city"
                name="city"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.city}
                className={`block w-full px-3 py-2 border ${formik.errors.city && formik.touched.city ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
              >
                <option value="">Select City</option>
                {cities.map(city => (
                  <option key={city.value} value={city.value}>{city.label}</option>
                ))}
              </select>
              {formik.errors.city && formik.touched.city && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.city}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="governate" className="block text-sm font-medium text-gray-700 mb-1">
                Governate
              </label>
              <select
                id="governate"
                name="governate"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.governate}
                className={`block w-full px-3 py-2 border ${formik.errors.governate && formik.touched.governate ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
              >
                <option value="">Select Governate</option>
                {governates.map(gov => (
                  <option key={gov.value} value={gov.value}>{gov.label}</option>
                ))}
              </select>
              {formik.errors.governate && formik.touched.governate && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-sm text-red-600"
                >
                  {formik.errors.governate}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Address Input */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                className={`block w-full pl-10 pr-3 py-2 border ${formik.errors.streetAddress && formik.touched.streetAddress ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500`}
                placeholder="123 Main St"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
              />
            </div>
            {formik.errors.streetAddress && formik.touched.streetAddress && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-sm text-red-600"
              >
                {formik.errors.streetAddress}
              </motion.p>
            )}
          </motion.div>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            
            <div className="space-y-3">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 border rounded-lg cursor-pointer ${formik.values.paymentMethod === 'credit-card' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
                onClick={() => formik.setFieldValue('paymentMethod', 'credit-card')}
              >
                <div className={`p-2 rounded-full mr-3 ${formik.values.paymentMethod === 'credit-card' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  <FaCreditCard className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Credit Card</h3>
                  <p className="text-sm text-gray-500">Pay with your credit card</p>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formik.values.paymentMethod === 'credit-card'}
                  onChange={formik.handleChange}
                  className="ml-auto h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`flex items-center p-4 border rounded-lg cursor-pointer ${formik.values.paymentMethod === 'Cash' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
                onClick={() => formik.setFieldValue('paymentMethod', 'Cash')}
              >
                <div className={`p-2 rounded-full mr-3 ${formik.values.paymentMethod === 'Cash' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  <FaMoneyBillWave className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Cash on Delivery</h3>
                  <p className="text-sm text-gray-500">Pay when you receive your order</p>
                </div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash"
                  checked={formik.values.paymentMethod === 'Cash'}
                  onChange={formik.handleChange}
                  className="ml-auto h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
              </motion.div>
            </div>
            {formik.errors.paymentMethod && formik.touched.paymentMethod && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-sm text-red-600"
              >
                {formik.errors.paymentMethod}
              </motion.p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <BasicModal 
              formRef={formRef} 
              isValid={formik.isValid}
              isSubmitting={formik.isSubmitting}
              data={orderdata}
            />
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}