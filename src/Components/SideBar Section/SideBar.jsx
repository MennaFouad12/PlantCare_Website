 
// import React from 'react';
// import './sidebar.css';
// import logo from '../../Assets/logo.png';
// import { IoMdSpeedometer } from 'react-icons/io';
// import { MdDeliveryDining, MdOutlineExplore } from 'react-icons/md';
// import { BsTrophy } from 'react-icons/bs';
// import { AiOutlinePieChart } from 'react-icons/ai';
// import { BiTrendingUp } from 'react-icons/bi';
// import { MdOutlinePermContactCalendar } from 'react-icons/md';
// import { BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className='sideBar grid'>
//       <div className='logoDiv flex'>
//         <img src={logo} alt="Logo" />
//         <h2>
//           <span className="green-text">Leaf&</span><span className="black-text">Root</span>
//         </h2>
//       </div>

//       <div className="menuDiv">
//         <h3 className="divTitle">QUICK MENU</h3>
//         <ul className="menulists grid">
//           <li className="listitem">
//             <Link to="/admin" className='menulink flex'>
//               <IoMdSpeedometer className="icon" />
//               <span className="smallText">Dashboard</span>
//             </Link>
//           </li>

//           <li className="listitem">
//             <Link to="/adminproducts" className='menulink flex'>
//               <IoMdSpeedometer className="icon" />
//               <span className="smallText">Products</span>
//             </Link>
//           </li>
//           <li className="listitem">
//             <Link to="/categories" className='menulink flex'>
//               <IoMdSpeedometer className="icon" />
//               <span className="smallText">Categories</span>
//             </Link>
//           </li>

//           <li className="listitem">
//             <Link to="/accmangement" className="menulink flex">
//               <MdOutlineExplore className="icon" />
//               <span className="smallText">Account Management</span>
//             </Link>
//           </li>

//           {/* ✅ تعديل الـ Order ليعمل كـ Link */}
//           <li className="listitem">
//             <Link to="/order" className='menulink flex'>
//               <MdDeliveryDining className="icon" />
//               <span className="smallText">Order</span>
//             </Link>
//           </li>

//           <li className="listitem">
//             <Link to="/activity" className='menulink flex'>
//               <BsTrophy className="icon" />
//               <span className="smallText">Activity</span>
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="SettingsDiv">
//         <h3 className="divTitle">SETTINGS</h3>
//         <ul className="menulists grid">
//           <li className="listitem">
//           <Link to="/Blogpage" className='menulink flex'>  {/* ✅ تعديل الرابط إلى /blogs */} 
//               <AiOutlinePieChart className="icon" />
//               <span className="smallText">Blogs</span>
//             </Link>
//           </li>
//           <li className="listitem">
//             <a href="#" className='menulink flex'>
//               <BiTrendingUp className="icon" />
//               <span className="smallText">Trends</span>
//             </a>
//           </li>
//           <li className="listitem">
//             <a href="#" className='menulink flex'>
//               <MdOutlinePermContactCalendar className="icon" />
//               <span className="smallText">Contacts</span>
//             </a>
//           </li>
//           <li className="listitem">
//             <a href="#" className='menulink flex'>
//               <BsCreditCard2Front className="icon" />
//               <span className="smallText">Billings</span>
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="sideBarCard">
//         <BsQuestionCircle className='icon' />
//         <div className="cardContent">
//           <div className="circle1"></div>
//           <div className="circle2"></div>

//           <h3>Help Center</h3>
//           <p>Having trouble with the page? Please contact us for more questions.</p>

//           <button className="btn">Go to help center</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





// import React from 'react';
// import logo from '../../Assets/logo.png';
// import { IoMdSpeedometer } from 'react-icons/io';
// import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
// import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs';
// import { AiOutlinePieChart } from 'react-icons/ai';
// import { BiTrendingUp } from 'react-icons/bi';
// import { FaTags, FaBox } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-white border-r p-4 flex flex-col justify-between">
//       <div>
//         {/* Logo */}
//         <div className="flex items-center mb-6 px-2">
//           <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
//           <h2 className="text-xl font-semibold">
//             <span className="text-[#679436]">Leaf&</span>
//             <span className="text-black">Root</span>
//           </h2>
//         </div>

//         {/* QUICK MENU */}
//         <div className="mb-6">
//           <h3 className="text-sm font-semibold text-gray-800 mb-3">QUICK MENU</h3>
//           <ul className="space-y-3 text-sm">
//             <li>
//               <Link to="/admin" className="flex items-center text-gray-400 hover:text-green-600">
//                 <IoMdSpeedometer className="mr-2" /> Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link to="/adminproducts" className="flex items-center text-gray-400 hover:text-green-600">
//                 <FaBox className="mr-2" /> Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/categories" className="flex items-center text-gray-400 hover:text-green-600">
//                 <FaTags className="mr-2" /> Categories
//               </Link>
//             </li>
//             <li>
//               <Link to="/accmangement" className="flex items-center text-green-700 font-medium">
//                 <MdOutlineExplore className="mr-2" /> Account Management
//               </Link>
//             </li>
//             <li>
//               <Link to="/order" className="flex items-center text-gray-400 hover:text-green-600">
//                 <MdDeliveryDining className="mr-2" /> Order
//               </Link>
//             </li>
//             <li>
//               <Link to="/activity" className="flex items-center text-gray-400 hover:text-green-600">
//                 <BsTrophy className="mr-2" /> Activity
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* SETTINGS */}
//         <div>
//           <h3 className="text-sm font-semibold text-gray-800 mb-3">SETTINGS</h3>
//           <ul className="space-y-3 text-sm">
//             <li>
//               <Link to="/Blogpage" className="flex items-center text-gray-400 hover:text-green-600">
//                 <AiOutlinePieChart className="mr-2" /> Blogs
//               </Link>
//             </li>
//             <li>
//               <a href="#" className="flex items-center text-gray-400 hover:text-green-600">
//                 <BiTrendingUp className="mr-2" /> Trends
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center text-gray-400 hover:text-green-600">
//                 <MdOutlinePermContactCalendar className="mr-2" /> Contacts
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center text-gray-400 hover:text-green-600">
//                 <BsCreditCard2Front className="mr-2" /> Billings
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Help Center */}
//       <div className="bg-green-100 p-4 rounded-xl text-center relative mt-6">
//         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white border border-green-600 rounded-full w-8 h-8 flex items-center justify-center">
//           <BsQuestionCircle className="text-green-600 text-xl" />
//         </div>
//         <p className="mt-5 font-semibold text-sm">Help Center</p>
//         <p className="text-xs text-gray-600 mt-1">
//           Having trouble? Please reach out for support.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;







// import React from 'react';
// import logo from '../../Assets/logo.png';
// import { IoMdSpeedometer } from 'react-icons/io';
// import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
// import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs';
// import { AiOutlinePieChart } from 'react-icons/ai';
// import { BiTrendingUp } from 'react-icons/bi';
// import { FaTags, FaBox } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="min-h-screen flex ">
//     <div className="w-72 h-screen bg-white border-r shadow-lg p-6 flex flex-col  rounded-tr-3xl rounded-br-3xl">
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-3 mb-8 px-2">
//           <img src={logo} alt="Logo" className="w-10 h-10" />
//           <h2 className="text-2xl font-bold">
//             <span className="text-[#679436]">Leaf&</span>
//             <span className="text-black">Root</span>
//           </h2>
//         </div>

//         {/* QUICK MENU */}
//         <div className="mb-8">
//           <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4 px-2">Quick Menu</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link to="/admin" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
//                 <IoMdSpeedometer className="text-lg" /> Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link to="/admin/adminproducts" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
//                 <FaBox className="text-lg" /> Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/categories" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
//                 <FaTags className="text-lg" /> Categories
//               </Link>
//             </li>
//             <li>
//               <Link to="/accmangement" className="flex items-center gap-3 bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg">
//                 <MdOutlineExplore className="text-lg" /> Account Management
//               </Link>
//             </li>
//             <li>
//               <Link to="/order" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
//                 <MdDeliveryDining className="text-lg" /> Order
//               </Link>
//             </li>
//             <li>
//               <Link to="/activity" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
//                 <BsTrophy className="text-lg" /> Activity
//               </Link>
//             </li>
//               <li>
//               <Link to="/Blogpage" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
//                 <AiOutlinePieChart className="text-lg" /> Blogs
//               </Link>
//             </li>
//           </ul>
//         </div>

      
//       </div>

    
// <div className="relative mt-6 ">
//   <div className="bg-green-100 pt-8 pb-5 px-5 rounded-2xl text-center shadow-sm">
//     {/* Floating Icon */}
//     <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border border-green-600 rounded-full w-10 h-10 flex items-center justify-center shadow">
//       <BsQuestionCircle className="text-green-600 text-xl" />
//     </div>
    
//     <p className="font-bold text-sm text-gray-800">Help Center</p>
//     <p className="text-xs text-gray-600 mt-1 leading-snug">
//       Having trouble? Reach out for support.
//     </p>
//     <button className="mt-4 px-4 py-1 text-xs bg-green-700 text-white rounded-full hover:bg-green-800 transition-all">
//       Go to help center
//     </button>
//   </div>
// </div>

//     </div>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore } from 'react-icons/md';
import { BsTrophy, BsQuestionCircle } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaTags, FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; // Hamburger icon
import { IoMdClose } from 'react-icons/io'; // Close icon
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon - Mobile only */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow-md p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoMdClose className="text-xl" /> : <FiMenu className="text-xl" />}
      </button>

      {/* Sidebar - Hidden on small, visible on md+ */}
      <div
        
         className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r shadow-lg p-6 flex flex-col rounded-tr-3xl rounded-br-3xl transform transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 `}

   
      >
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-bold">
              <span className="text-[#046C4E]">Leaf&</span>
              <span className="text-black">Root</span>
            </h2>
          </div>

          {/* QUICK MENU */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4 px-2">
              Quick Menu
            </h3>
            {/* <ul className="space-y-2 text-sm">
              <li>
                <Link to="/admin" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
                  <IoMdSpeedometer className="text-lg" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/adminproducts" 
                className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg"
              
                >
                  <FaBox className="text-lg" /> Products
                </Link>
              </li>
              <li>
                <Link to="/admin/categories" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
                  <FaTags className="text-lg" /> Categories
                </Link>
              </li>
              <li>
                <Link to="/admin/accmangement" className="flex items-center gap-3 bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-lg">
                  <MdOutlineExplore className="text-lg" /> Account Management
                </Link>
              </li>
              <li>
                <Link to="/admin/order" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
                  <MdDeliveryDining className="text-lg" /> Order
                </Link>
              </li>
              <li>
                <Link to="/admin/activity" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
                  <BsTrophy className="text-lg" /> Activity
                </Link>
              </li>
              <li>
                <Link to="/admin/Blogpage" className="flex items-center gap-3 text-gray-400 hover:bg-green-100 hover:text-green-700 transition-all px-4 py-2 rounded-lg">
                  <AiOutlinePieChart className="text-lg" /> Blogs
                </Link>
              </li>
            </ul> */}
<ul className="space-y-2 text-sm">
  <li>
    <NavLink
      to="/admin"
       end
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <IoMdSpeedometer className="text-lg" /> Dashboard
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/admin/adminproducts"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <FaBox className="text-lg" /> Products
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/admin/categories"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <FaTags className="text-lg" /> Categories
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/admin/accmangement"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <MdOutlineExplore className="text-lg" /> Account Management
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/admin/order"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <MdDeliveryDining className="text-lg" /> Order
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/admin/activity"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <BsTrophy className="text-lg" /> Activity
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/admin/Blogpage"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <AiOutlinePieChart className="text-lg" /> Blogs
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/admin/WorkShopAdmin"
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
          isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-400 hover:bg-green-100 hover:text-green-700"
        }`
      }
    >
      <BsTrophy className="text-lg" /> WorkShop
    </NavLink>
  </li>
</ul>

            
          </div>
        </div>

        {/* Help Center */}
        <div className="relative mt-6">
          <div className="bg-green-100 pt-8 pb-5 px-5 rounded-2xl text-center shadow-sm">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white border border-green-600 rounded-full w-10 h-10 flex items-center justify-center shadow">
              <BsQuestionCircle className="text-green-600 text-xl" />
            </div>
            <p className="font-bold text-sm text-gray-800">Help Center</p>
            <p className="text-xs text-gray-600 mt-1 leading-snug">
              Having trouble? Reach out for support.
            </p>
            <button className="mt-4 px-4 py-1 text-xs bg-green-700 text-white rounded-full hover:bg-green-800 transition-all">
              Go to help center
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


