// import React, { useEffect, useState } from 'react';
// import './listing.css';
// import { BsArrowRightShort } from 'react-icons/bs';

// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import img from '../../../Assets/Plant_2.png';
// import img1 from '../../../Assets/Plant_3.png';
// import img2 from '../../../Assets/Plant_4.png';
// import img3 from '../../../Assets/Plant_5.png';
// import user1 from '../../../Assets/User_3.png';
// import user2 from '../../../Assets/User_1.png';
// import user3 from '../../../Assets/User_2.png';
// import user4 from '../../../Assets/User_3.png';
// import { getProducts } from '../../../Apis/products';


// const Listting  = () => {
//   const navigate = useNavigate(); // Initialize navigate function
//   const [allProducts, setAllProducts] = useState([]);
//       const [msg2, setMsg2] = useState('');
//   const [loading2, setLoading2] = useState(false);

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
//   useEffect(() => {
//     getProductsApi();
//   }, []);
//   return (
//     <div className="lisitingSection">
//     {/* // <div className="listingSection"> */}

//       {/* Heading Section */}
//       <div className="heading flex">
//         <h1>My Listing</h1>
//         {/* Navigate to Products page when "See All" button is clicked */}
//         <button className="btn flex" onClick={() => navigate('/products')}>
//           See All <BsArrowRightShort className="icon" />
//         </button>
//       </div>

//       {/* Listings Section */}
//       <div className="secContainer flex">
//         {
//           allProducts.slice(0, 4).map((product) => (
//               <div key={product.id} className="singleItem">
//           {/* <AiOutlineHeart className="icon" /> */}
//           <img       src={`http://plantcareapi.runasp.net${product.image}`}  alt={product.name} />
//           <h3>{product.name}</h3>
//         </div>
//           ))
      
// }
      
//       </div>

//       {/* Sellers Section */}
//       <div className="sellers flex">
//         {/* Top Sellers Section */}
//         <div className="topSellers">
//           <div className="heading flex">
//             <h3>Top Sellers</h3>
//             {/* Navigate to Products page when "See All" button is clicked */}
//             <button className="btn flex" onClick={() => navigate('/activity')}>
//               See All <BsArrowRightShort className="icon" />
//             </button>
//           </div>
//           <div className="card flex">
//             <div className="users">
//               <img src={user1} alt="Users" />
//               <img src={user2} alt="Users" />
//               <img src={user3} alt="Users" />
//               <img src={user4} alt="Users" />
//             </div>
//             <div className="cardText">
//               <span>
//                 17 plants sold <br />
//                 <small>
//                   9 sellers <span className="date">7 Days</span>
//                 </small>
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Featured Sellers Section */}
//         <div className="featuredSellers">
//           <div className="heading flex">
//             <h3>Featured Sellers</h3>
//             {/* Navigate to Products page when "See All" button is clicked */}
//             <button className="btn flex" onClick={() => navigate('/orders')}>
//               See All <BsArrowRightShort className="icon" />
//             </button>
//           </div>
//           <div className="card flex">
//             <div className="users">
//               <img src={user4} alt="Users" />
//               <img src={user2} alt="Users" />
//               <img src={user3} alt="Users" />
//               <img src={user1} alt="Users" />
//             </div>
//             <div className="cardText">
//               <span>
//                 50 plants sold <br />
//                 <small>
//                   33 sellers <span className="date">1 Month</span>
//                 </small>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listting;





import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs';
import { auth } from '../../../Context/AuthContext';
import { getProducts } from '../../../Apis/products';

import img from '../../../Assets/User_1.png';
import img2 from '../../../Assets/Plant_1.png';
import video from '../../../Assets/video.mp4';
import user1 from '../../../Assets/User_3.png';
import user2 from '../../../Assets/User_1.png';
import user3 from '../../../Assets/User_2.png';
import user4 from '../../../Assets/User_3.png';
import { jwtDecode } from 'jwt-decode';
import { useQuery } from '@tanstack/react-query';
const fetchUserActions = async () => {
  const token = localStorage.getItem('userToken');
  if (!token) throw new Error('No auth token found');

  const response = await axios.get(
    'http://plantcareapi.runasp.net/api/RecentUserActivity/recent-user-activity',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
const Listting = () => {
    const { data: userActions = [], isLoading, isError } = useQuery({
      queryKey: ['userActions'],
      queryFn: fetchUserActions,
      // Uncomment if you want auto-refresh:
      // refetchInterval: 60000,
    });
    console.log(userActions);
  const navigate = useNavigate();
  const { setLogin } = useContext(auth);
  const [showLogout, setShowLogout] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
let tokendata = jwtDecode(localStorage.getItem('userToken'));
console.log(tokendata);
  // const userId = tokendata['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  const toggleLogout = () => setShowLogout(!showLogout);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/Login');
  };

  

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (data) setAllProducts(data);
    };
    fetchProducts();
  }, []);

  const activities = [
    { img: user2, name: 'Ahmed Hamdy', time: '10 min ago' },
    { img: user3, name: 'Menna', time: '15 min ago' },
    { img: user4, name: 'Baher', time: '20 min ago' },
    { img: user3, name: 'Mohameed', time: '30 min ago' },
    { img: user4, name: 'Islam', time: '35 min ago' },
    { img: user4, name: 'NoUrhan', time: '40 min ago' },
  ];
  function getFirstLetters(str) {
    const words = str.split(' ');
    if (words.length !== 2) {
        return "String should contain exactly 2 words";
    }
    return words[0][0] + words[1][0];
}

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className=" text-xl lg:text-3xl  font-bold">Welcome to Leaf&Root.</h1>
          <p className="text-gray-600">Hello <span className='font-bold text-green-700'>{tokendata.FullName
}</span> , Welcome back!</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Dashboard"
              className="border rounded-lg pl-10 pr-4 py-2 focus:outline-none"
            />
            <BiSearchAlt className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <AiOutlineMessage className="text-xl" />
          <MdOutlineNotificationsNone className="text-xl" />
          <div onClick={toggleLogout} className="cursor-pointer">
            
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-medium">
                              {getFirstLetters(tokendata.FullName)}
                            </span>
                            </div>
          </div>
          {showLogout && (
            <button onClick={handleLogout} className="bg-green-600 text-white px-3 py-1 rounded-lg">Logout</button>
          )}
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Card */}
        {/* <div className="col-span-2 relative bg-green-100 rounded-xl overflow-hidden p-6">
          <h2 className="text-2xl font-semibold">Create and sell extraordinary products</h2>
          <p className="mt-1 mb-4 text-gray-700">The world's fast growing industry today are natural made products!</p>
          <div className="space-x-4">
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg">Explore More</button>
            <button className="border border-green-700 text-green-700 px-4 py-2 rounded-lg">Top Sellers</button>
          </div>
          <video className="absolute right-4 bottom-4 w-32 h-20 object-cover rounded-lg" src={video} autoPlay muted loop />
        </div> */}

        <div className="col-span-2 relative rounded-xl overflow-hidden h-64">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src={video}
    autoPlay
    muted
    loop
  />

  {/* Overlay */}
  <div className="relative z-10 bg-black/50 w-full h-full p-6 text-white">
    <h2 className="text-2xl font-semibold">Create and sell extraordinary products</h2>
    <p className="mt-1 mb-4">The world's fast growing industry today are natural made products!</p>
    <div className="space-x-4">
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Explore More</button>
      <button className="border border-white text-white px-4 py-2 rounded-lg">Top Sellers</button>
    </div>
  </div>
</div>


        {/* Orders Card */}
        <div className="bg-green-50 p-4 rounded-xl flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">My State</h3>
            <div className="mt-2 space-y-1">
              <p>Today: <strong>4 Orders</strong></p>
              <p>This Month: <strong>240 Orders</strong></p>
            </div>
            <div
              onClick={() => navigate('/admin/order')}
              className="mt-4 text-green-700 flex items-center cursor-pointer font-medium"
            >
              Go to my orders <BsArrowRightShort className="ml-1" />
            </div>
          </div>
          <img src={img2} alt="Plant" className="w-20 h-24" />
        </div>
      </div>

      {/* Listings */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Listing</h2>
          <button onClick={() => navigate('/admin/adminproducts')} className="text-green-700 flex items-center">See All <BsArrowRightShort /></button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allProducts.slice(0, 4).map(product => (
            <div key={product.id} className="border p-4 rounded-xl text-center">
              <img src={`http://plantcareapi.runasp.net${product.image}`} alt={product.name} className="h-32 mx-auto object-cover" />
              <p className="mt-2 font-medium">{product.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sellers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[{
          title: 'Top Sellers',
          count: '17 plants',
          users: [user1, user2, user3, user4],
          sellers: '9 sellers',
          time: '7 Days',
          route: '/activity'
        }, {
          title: 'Featured Sellers',
          count: '50 plants',
          users: [user4, user2, user3, user1],
          sellers: '33 sellers',
          time: '1 Month',
          route: '/orders'
        }].map((card, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{card.title}</h3>
              <button onClick={() => navigate(card.route)} className="text-green-700 flex items-center">See All <BsArrowRightShort /></button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {card.users.map((u, i) => (
                  <img key={i} src={u} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                ))}
              </div>
              <div>
                <p className="font-medium">{card.count} sold</p>
                <small>{card.sellers} <span className="text-gray-500">({card.time})</span></small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          <button onClick={() => navigate('/admin/activity')} className="text-green-700 flex items-center">See All <BsArrowRightShort /></button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {userActions.slice(0, 6).map((activity, i) => (
            <div key={i} className="flex items-center justify-between bg-white p-4 rounded-xl shadow">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 font-medium">
                              {getFirstLetters(activity.name)}
                            </span>
                            </div>
                <div>
                  <p className="font-medium">{activity.name}</p>
                  <small className="text-gray-500">Ordered a new plant</small>
                </div>
              </div>
              <span className="text-sm text-gray-400">{activity.timeAgo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listting;











