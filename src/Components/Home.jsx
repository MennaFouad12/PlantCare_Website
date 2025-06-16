
// import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image1 from "../assets/home1.jpeg";
// import Image2 from "../assets/home2.jpeg";
// import Image3 from "../assets/home3.jpeg";
// import Image4 from "../assets/home4.jpeg";
// import Image5 from "../assets/about.png";
// import Image6 from "../assets/home.png";
// import { useEffect, useState } from "react";
// import { getProducts } from '../Apis/products';
// import { useAuth } from './context/Auth.context';
// import useQueryCart from "../Hooks/useQueryCart";
// import { addToCartApi, deleteCartApi, getCartApi } from "../Apis/cart";
// import useMutationCart from "../Hooks/useMutationCart";
// import { Link } from "react-router-dom";
// import { motion } from 'framer-motion';
// import { toast } from "react-toastify";
// const faqs = [
//     { question: "My flowers are falling off or dying?", answer: "This could be due to overwatering, lack of sunlight, or nutrient deficiencies." },
//     { question: "How do I choose a plant?", answer: "Choose plants based on the light and climate conditions in your space." },
//     { question: "What causes leaves to become pale?", answer: "Pale leaves can be a sign of inadequate lighting or nutrient deficiencies." },
//     { question: "How do I change the pots?", answer: "To change pots, gently remove the plant, loosen the roots, and place it in a slightly larger pot with fresh soil." },
//     { question: "What causes brown crispy leaves?", answer: "Brown crispy leaves are usually due to underwatering or low humidity." },
//     { question: "Why are gnats flying around my plant?", answer: "Gnats are often attracted to moist soil. Let the top inch of soil dry out between waterings." },
//   ];
    


// // const Images = [Image1, Image2, Image3, Image4];

// function Home() {


//   const [allProducts, setAllProducts] = useState([]);
//       const [msg2, setMsg2] = useState('');
//   const [loading2, setLoading2] = useState(false);
// const { data, isLoading, isError, error } = useQueryCart('cart', getCartApi);
// const { mutate: addmutate, status: statusAdd } = useMutationCart(addToCartApi);
//   const { mutate: deletemutate, status: statusDelete } = useMutationCart(deleteCartApi);

//     async function getProductsApi() {
//     setLoading2(true);
//     let data = await getProducts();

//     if (data) {
//       setAllProducts(data);
//       setFilteredProducts(data);
//       setMsg2('');
//     } else {
//       setMsg2(data?.message);
//     }
//     setLoading2(false);
//   }
//     // Slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3, // Display three slides at once
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024, // At tablet size
//                 settings: {
//                     slidesToShow: 2, // Show 2 slides at a time on medium screens
//                 }
//             },
//             {
//                 breakpoint: 640, // At mobile size
//                 settings: {
//                     slidesToShow: 1, // Show 1 slide at a time on small screens
//                 }
//             }
//         ]
//     };
//       useEffect(() => {
//         if (statusAdd === 'success') {
//           toast.success("Product added to cart");
//         }
//       }, [statusAdd]);
    
//       useEffect(() => {
//         if (statusDelete === 'success') {
//           toast.info(" Product removed from cart");
//         }
//       }, [statusDelete]);
//   useEffect(() => {
//     getProductsApi();
//   }, []);
//     return (
//         <div className="bg-green-50 text-gray-800 ">
//             <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
//       {/* Left Text Content */}
//       <div className="md:w-1/2 space-y-6 text-center md:text-left">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//           Plants will make <br /> your life better
//         </h1>
//         <p className="text-gray-600 md:max-w-sm">
//           Create incredible plant design for your offices or apartments. Add freshness to your new ideas.
//         </p>
//         <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 inline-flex items-center justify-center">
//           Explore
//           <span className="ml-2">→</span>
//         </button>
//       </div>

//       {/* Right Image Content */}
//       <div className="md:w-1/2 flex justify-center relative">
//         <img
//           src={Image6} // Replace with the actual URL of your plant image
//           alt="Plant in a pot"
//           className="w-full max-w-xs md:max-w-md object-cover"
//         />

        
//       </div>
//     </div>
//             {/* ////////////////////////////////////////////////////////////////////////////////////// */}

//             {/* Start Our Features */}

            
//             <section id="features" className="py-10 sm:py-16 px-4">
//                 <div className="container mx-auto text-center">
//                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12  relative">
//                         Our Features
//                         <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-1 w-28 bg-green-500 mt-3 rounded-lg"></span>
//                     </h3>
//                     <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
//                         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//                             <h4 className="text-lg sm:text-xl font-semibold mb-2">Plant Diagnosis</h4>
//                             <p className="text-sm sm:text-base">
//                                 Quickly diagnose plant diseases with our AI-powered tool.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//                             <h4 className="text-lg sm:text-xl font-semibold mb-2">Water Reminder</h4>
//                             <p className="text-sm sm:text-base">
//                                 Never forget to water your plants with our reminder system.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//                             <h4 className="text-lg sm:text-xl font-semibold mb-2">Workshops </h4>
//                             <p className="text-sm sm:text-base">
//                                 Learn more with our curated workshops and book recommendations.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//                             <h4 className="text-lg sm:text-xl font-semibold mb-2">Toxicity Information</h4>
//                             <p className="text-sm sm:text-base">
//                                 Identify plants that may be harmful to pets or children.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//                             <h4 className="text-lg sm:text-xl font-semibold mb-2">Chatbot Support</h4>
//                             <p className="text-sm sm:text-base">
//                                 Get instant advice on plant care from our chatbot assistant.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//                             <h4 className="text-lg sm:text-xl font-semibold mb-2">Shop for Supplies</h4>
//                             <p className="text-sm sm:text-base">
//                                 Find the best tools and plants suitable to your needs.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* End Our Features */}

//             {/* ////////////////////////////////////////////////////////////////////////////////////// */}



//              {/* Start AboutUs Section */}
//              <div className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-white">
//       {/* Left Image Section */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="relative max-w-xs md:max-w-sm">
//           <img
//             src={Image5}
//             alt="Plant Care"
//             className="w-full h-auto object-cover rounded-lg shadow-lg  p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
//           />
          
//         </div>
//       </div>

//       {/* Right Text Section */}
//       <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left  p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105" >
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//           Who we really are & why choose us
//         </h2>
//         <p className="text-gray-600 mb-6">
//           We have over 4000+ unbiased reviews and our customers trust our plant process and delivery service every time.
//         </p>
//         <ul className="space-y-2 text-gray-600">
//           <li className="flex items-center">
//             <span className="text-green-600">&#10003;</span>
//             <span className="ml-2">We always deliver on time.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-600">&#10003;</span>
//             <span className="ml-2">We give you guides to protect and care for your plants.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-600">&#10003;</span>
//             <span className="ml-2">We always come over for a check-up after sale.</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-600">&#10003;</span>
//             <span className="ml-2">100% money back guaranteed.</span>
//           </li>
//         </ul>
//         <a
//           href="."
//           className="inline-block mt-6 px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md font-semibold"
//         >
//           Shop Now &rarr;
//         </a>
//       </div>
//     </div>


      
//     <div className="bg-gray-100 text-black p-10 m-5">
//   <h1 className="text-center text-2xl md:text-3xl font-bold mb-12 text-gray-800">
//     Steps to Start Your Plants Off Right
//   </h1>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     {/* Step 1 */}
//     <div className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//       <div className="absolute -top-4 -left-4 bg-green-700 hover:bg-green-800 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
//         01
//       </div>
//       <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-2">Choose Plant</h2>
//       <p className="text-sm md:text-base">We have several different types of plants you can choose from.</p>
//     </div>

//     {/* Step 2 */}
//     <div className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//       <div className="absolute -top-4 -left-4 bg-green-700 hover:bg-green-800 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
//         02
//       </div>
//       <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-2">Place an Order</h2>
//       <p className="text-sm md:text-base">Once your order is set, we move to the next step, which is shipping.</p>
//     </div>

//     {/* Step 3 */}
//     <div className="relative bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//       <div className="absolute -top-4 -left-4 bg-green-700 hover:bg-green-800 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
//         03
//       </div>
//       <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-2">Get Plants Delivered</h2>
//       <p className="text-sm md:text-base">Our delivery process is easy, you receive the plant directly to your door.</p>
//     </div>
//   </div>
// </div>



            
//             {/* End AboutUs Section */}

//             {/* Start Most Sold Proucts */}
            

//         <div className="bg-green-50 text-gray-800 min-h-screen">
//       <div id="product-slider" className="py-16 px-4">
//         <div className="container mx-auto text-center">
//           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative inline-block">
//             Most Sold Products
//             <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] h-1 w-28 bg-green-500 mt-3 rounded-lg"></span>
//           </h3>
        


//           <Slider {...settings} className="space-x-4 my-9">
//   {allProducts.map((product, index) => {
//     const isInCart = data?.items?.some(item => item.productId === product.id); // move const here
//     return (
//         <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 shadow-md flex flex-col p-2">
//       <Link key={product.id} to={`/Details/${product?.id}`}>
//         <motion.div
//           className="product p-2 cursor-pointer"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           whileHover={{
//             scale: 1.05,
//             boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
//             y: -5,
//           }}
//         >
//           <img 
//             src={`http://plantcareapi.runasp.net${product.image}`} 
//             className="h-60" 
//             alt={product.name} 
//           />
//           <h2 className="font-bold">{product.name}</h2>
//           <div className="flex justify-between my-3">
//             <h3 className="font-semibold">{product.price}$</h3>
//             <button
//               className={`btn bg-slate-200 ${isInCart ? 'text-green-700' : 'text-white'} p-2 rounded`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (isInCart) {
//                   const item = data?.items?.find(item => item.productId === product.id);
//                   if (item) {
//                     deletemutate(item.id);
//                   }
//                 } else {
//                   addmutate(product.id);
//                 }
//               }}
//             >
//               <i className="fa-solid fa-cart-shopping"></i>
//             </button>
//           </div>
//         </motion.div>
//       </Link>
//       </div>
//     );
//   })}
// </Slider>

//         </div>
//       </div>
//       </div>

//         {/* End Most Sold Proucts */}



        






            
            
//              {/* ////////////////////////////////////////////////////////////////////////////////////// */}
//              {/* Start Faqs Questions */}
//              <div className="p-8 md:p-16 bg-gray-100">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
//         Some common questions we are often asked
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
//         {faqs.map((faq, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//             <input type="checkbox" id={`faq-${index}`} className="hidden peer" />
//             <label htmlFor={`faq-${index}`} className="flex items-center justify-between cursor-pointer">
//               <p className="text-gray-800 font-semibold">{faq.question}</p>
//               <span className="text-green-600 text-xl">+</span>
//             </label>
//             <div className="max-h-0 overflow-hidden peer-checked:max-h-full peer-checked:mt-2 transition-all duration-300">
//               <p className="text-gray-600">{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* End Faqs Questions */}


//     {/* //////////////////////////////////////////////////// */}



//             {/* ////////////////////////////////////////////////////////////////////////////////////// */}
//             {/* Start Community in Home */}

//             <div className="container mx-auto px-4 py-8">
//     {/* Hero Section */}
//     <div className="text-center mb-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 relative inline-block">
//             Community
//             <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-1 w-28 bg-green-500 mt-3 rounded-lg"></span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 mb-12">Connect and start chat with people to get gain new information about plants</p>
//     </div>

//     {/* Community Posts Section */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Start First Community Post */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Care for Succulents</h2>
//             <p className="text-gray-600">Share your tips and tricks for caring for succulents. Let’s help each other grow beautiful plants!</p>
//         </div>
//         {/* End First Community Post */}

//         {/* ////////////////////////////////////////////////////////////// */}
//         {/* Start Second Community Post */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">Indoor Plant Lighting Guide</h2>
//             <p className="text-gray-600">Discuss the best lighting options for indoor plants and how to optimize growth!</p>
//         </div>
//         {/* End Second Community Post */}
//         {/* ////////////////////////////////////////////////////////////// */}
//         {/* Start Third Community Post */}
//         <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">Garden Inspirations</h2>
//             <p className="text-gray-600">Share pictures of your gardens, big or small, and get inspired by others’ creativity!</p>
//         </div>
//         {/* End Third Community Post */}
//         {/* ////////////////////////////////////////////////////////////// */}
//     </div>
// </div>



//             {/* End Community in Home */}

//             {/* ////////////////////////////////////////////////////////////////////////////////////// */}



//             </div>
        
//     );
// }

// export default Home;






import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../assets/home1.jpeg";
import Image2 from "../assets/home2.jpeg";
import Image3 from "../assets/home3.jpeg";
import Image4 from "../assets/home4.jpeg";
import Image5 from "../assets/about.png";
import Image6 from "../assets/home.png";
import { useEffect, useState } from "react";
import { getProducts } from '../Apis/products';
import { useAuth } from './context/Auth.context';
import useQueryCart from "../Hooks/useQueryCart";
import { addToCartApi, deleteCartApi, getCartApi } from "../Apis/cart";
import useMutationCart from "../Hooks/useMutationCart";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { toast } from "react-toastify";

const faqs = [
  { 
    question: "My flowers are falling off or dying?", 
    answer: "This could be due to overwatering, lack of sunlight, or nutrient deficiencies." 
  },
  { 
    question: "How do I choose a plant?", 
    answer: "Choose plants based on the light and climate conditions in your space." 
  },
  { 
    question: "What causes leaves to become pale?", 
    answer: "Pale leaves can be a sign of inadequate lighting or nutrient deficiencies." 
  },
  { 
    question: "How do I change the pots?", 
    answer: "To change pots, gently remove the plant, loosen the roots, and place it in a slightly larger pot with fresh soil." 
  },
  { 
    question: "What causes brown crispy leaves?", 
    answer: "Brown crispy leaves are usually due to underwatering or low humidity." 
  },
  { 
    question: "Why are gnats flying around my plant?", 
    answer: "Gnats are often attracted to moist soil. Let the top inch of soil dry out between waterings." 
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [msg2, setMsg2] = useState('');
  const [loading2, setLoading2] = useState(false);
  const { data, isLoading, isError, error } = useQueryCart('cart', getCartApi);
  const { mutate: addmutate, status: statusAdd } = useMutationCart(addToCartApi);
  const { mutate: deletemutate, status: statusDelete } = useMutationCart(deleteCartApi);

  async function getProductsApi() {
    setLoading2(true);
    let data = await getProducts();

    if (data) {
      setAllProducts(data);
      setMsg2('');
    } else {
      setMsg2(data?.message);
    }
    setLoading2(false);
  }

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    if (statusAdd === 'success') {
      toast.success("Product added to cart");
    }
  }, [statusAdd]);

  useEffect(() => {
    if (statusDelete === 'success') {
      toast.info("Product removed from cart");
    }
  }, [statusDelete]);

  useEffect(() => {
    getProductsApi();
  }, []);

  return (
    <div className="bg-green-50 text-gray-800">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white"
      >
        <motion.div 
          variants={fadeIn}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Plants will make <br /> your life better
          </h1>
          <p className="text-gray-600 md:max-w-sm text-lg">
            Create incredible plant design for your offices or apartments. Add freshness to your new ideas.
          </p>


          <Link to="/Blog">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 inline-flex items-center justify-center text-lg font-medium shadow-md"
          >
            Explore
            <span className="ml-2">→</span>
          </motion.button>
          </Link>
          
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="md:w-1/2 flex justify-center relative mt-8 md:mt-0"
        >
          <motion.img
            src={Image6}
            alt="Plant in a pot"
            className="w-full max-w-xs md:max-w-md object-cover rounded-lg "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        id="features" 
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto text-center">
          <motion.h3 
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold mb-16 relative inline-block"
          >
            Our Features
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-2 w-32 bg-green-500 rounded-full"></span>
          </motion.h3>
          
          <motion.div 
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Plant Diagnosis",
                description: "Quickly diagnose plant diseases with our AI-powered tool.",
                icon: "🔍"
              },
              {
                title: "Water Reminder",
                description: "Never forget to water your plants with our reminder system.",
                icon: "⏰"
              },
              {
                title: "Workshops",
                description: "Learn more with our curated workshops and book recommendations.",
                icon: "📚"
              },
              {
                title: "Toxicity Information",
                description: "Identify plants that may be harmful to pets or children.",
                icon: "⚠️"
              },
              {
                title: "Chatbot Support",
                description: "Get instant advice on plant care from our chatbot assistant.",
                icon: "💬"
              },
              {
                title: "Shop for Supplies",
                description: "Find the best tools and plants suitable to your needs.",
                icon: "🛒"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-green-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-white"
      >
        <motion.div 
          variants={fadeIn}
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        >
          <div className="relative max-w-xs md:max-w-sm">
            <motion.img
              src={Image5}
              alt="Plant Care"
              className="w-full h-auto object-cover rounded-xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          className="w-full md:w-1/2 md:pl-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who we really are & why choose us
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We have over 4000+ unbiased reviews and our customers trust our plant process and delivery service every time.
          </p>
          <ul className="space-y-4 text-gray-600 mb-8">
            {[
              "We always deliver on time.",
              "We give you guides to protect and care for your plants.",
              "We always come over for a check-up after sale.",
              "100% money back guaranteed."
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <span className="text-green-600 text-xl mr-3">✓</span>
                <span className="text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>

          <Link to="/Products">
          <motion.a
            href="."
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg shadow-md"
          >
            Shop Now &rarr;
          </motion.a>
            
          </Link>
         
        </motion.div>
      </motion.div>

      {/* Steps Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Steps to Start Your Plants Off Right
          </h1>
          <p className="text-xl text-gray-600">
            Follow these simple steps to begin your plant journey
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              step: "01",
              title: "Choose Plant",
              description: "We have several different types of plants you can choose from."
            },
            {
              step: "02",
              title: "Place an Order",
              description: "Once your order is set, we move to the next step, which is shipping."
            },
            {
              step: "03",
              title: "Get Plants Delivered",
              description: "Our delivery process is easy, you receive the plant directly to your door."
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-green-500"
            >
              <div className="absolute -top-6 left-6 bg-green-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
                {step.step}
              </div>
              <h2 className="text-xl font-semibold text-green-800 mb-4 mt-6">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Products Slider */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50"
      >
        <div className="container mx-auto text-center">
          <motion.h3 
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold mb-16 relative inline-block"
          >
            Most Sold Products
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] h-2 w-32 bg-green-500 rounded-full"></span>
          </motion.h3>

          <motion.div variants={fadeIn}>
            <Slider {...settings} className="px-4">
              {allProducts.map((product) => {
                const isInCart = data?.items?.some(item => item.productId === product.id);
                return (
                  <div key={product.id} className="px-2">
                    <Link to={`/Details/${product?.id}`}>
                      <motion.div
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={`http://plantcareapi.runasp.net${product.image}`} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            alt={product.name} 
                          />
                        </div>
                        <div className="p-6">
                          <h2 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h2>
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-green-700 text-lg">${product.price}</h3>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`p-3 rounded-full ${isInCart ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} hover:bg-green-200 transition-colors`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (isInCart) {
                                  const item = data?.items?.find(item => item.productId === product.id);
                                  if (item) deletemutate(item.id);
                                } else {
                                  addmutate(product.id);
                                }
                              }}
                            >
                              <i className="fa-solid fa-cart-shopping"></i>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <motion.div 
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Some common questions we are often asked
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <input 
                type="checkbox" 
                id={`faq-${index}`} 
                className="hidden peer" 
              />
              <label 
                htmlFor={`faq-${index}`} 
                className="flex items-center justify-between p-6 cursor-pointer"
              >
                <p className="text-lg font-semibold text-gray-800">{faq.question}</p>
                <motion.span 
                  className="text-green-600 text-2xl transition-transform duration-300 peer-checked:rotate-45"
                  whileHover={{ scale: 1.2 }}
                >
                  +
                </motion.span>
              </label>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-96 peer-checked:py-4 peer-checked:px-6 transition-all duration-500">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Community Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="container mx-auto">
          <motion.div 
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect and chat with fellow plant lovers to share knowledge and get inspiration
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "How to Care for Succulents",
                description: "Share your tips and tricks for caring for succulents. Let's help each other grow beautiful plants!",
                icon: "🌵"
              },
              {
                title: "Indoor Plant Lighting Guide",
                description: "Discuss the best lighting options for indoor plants and how to optimize growth!",
                icon: "💡"
              },
              {
                title: "Garden Inspirations",
                description: "Share pictures of your gardens, big or small, and get inspired by others' creativity!",
                icon: "🌸"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{post.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-6">{post.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-600 font-medium flex items-center"
                >
                  Join discussion
                  <span className="ml-2">→</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;