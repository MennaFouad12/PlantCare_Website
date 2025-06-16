// // import { Link, NavLink } from 'react-router-dom';
// // import { useState } from 'react';
// // import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
// // import img1 from '../assets/WhatsApp Image 2024-12-12 at 13.01.41_6562a973.ico'

// // import { Dropdown, DropdownItem } from "flowbite-react";
// // export function Component() {
// //   let { isLogin, setLogin } = useState(true);
// //   return (
// //     <Navbar className=' mb-20 shadow-lg fixed top-0 z-50 w-full flex items-center'>
// //       <NavbarBrand as={Link} href="https://flowbite-react.com">
// //         <img src={img1} className="mr-3 h-6 sm:h-9 ml-0" alt="Flowbite React Logo" />
// //         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leaf&Root</span>
// //       </NavbarBrand>
// //       <NavbarToggle />
// //       <NavbarCollapse>
// // {isLogin ?
// //         <NavLink to="/" className={({ isActive }) =>
// //           `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //         }>Home</NavLink>

// //         <Dropdown
// //           label="Dropdown"
// //           inline
// //           className="text-md text-gray-500 hover:text-green-500 font-medium"
// //           dismissOnClick={false}
// //         >
// //           <DropdownItem >
// //             <NavLink to="/Community" className={({ isActive }) =>
// //               `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //             }>

// //               Comunity

// //             </NavLink>
// //           </DropdownItem>
// //           <DropdownItem >
// //             <NavLink to="/Chatbot" className={({ isActive }) =>
// //               `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //             }>

// //               Chatbot

// //             </NavLink>
// //           </DropdownItem>
// //           <DropdownItem >
// //             <NavLink to="/PlantModel" className={({ isActive }) =>
// //               `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //             }>

// //               Plant Model

// //             </NavLink>
// //           </DropdownItem>
// //           <DropdownItem >
// //             <NavLink to="/Workshops" className={({ isActive }) =>
// //               `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //             }>

// //               WorkShops

// //             </NavLink>
// //           </DropdownItem>
// //         </Dropdown>
// //         <NavLink to="/AboutUs" className={({ isActive }) =>
// //           `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //         }>About Us</NavLink>

// //         <NavLink to="/Products" className={({ isActive }) =>
// //           `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //         }>Products</NavLink>
// //     <NavLink to="/Login" onClick={() => setLogin(!isLogin)} className={({ isActive }) =>
// //           `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //         }>sign out</NavLink>
// //         <NavLink to="/Cart" className={({ isActive }) =>
// //           `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //         }>  <i className='fas fa-cart-shopping fa-xl ms-10'></i></NavLink>
// //       :
// //       <NavLink to="/egister" onClick={() => setLogin(!isLogin)} className={({ isActive }) =>
// //         `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
// //       }>register</NavLink>
// //       </NavbarCollapse>
// //     </Navbar>
// //   );
// // }
// import { Link, NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
// import img1 from '../assets/WhatsApp Image 2024-12-12 at 13.01.41_6562a973.ico';
// import { Dropdown, DropdownItem } from "flowbite-react";

// export function Component() {
//   const [isLogin, setLogin] = useState(true);

//   return (
//     <Navbar className='mb-20 shadow-lg fixed top-0 z-50 w-full flex items-center'>
//       <NavbarBrand as={Link} href="https://flowbite-react.com">
//         <img src={img1} className="mr-3 h-6 sm:h-9 ml-0" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leaf&Root</span>
//       </NavbarBrand>
//       <NavbarToggle />
//       <NavbarCollapse>
//         {isLogin ? (
//           <>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               Home
//             </NavLink>

//             <Dropdown
//               label="Dropdown"
//               inline
//               className="text-md text-gray-500 hover:text-green-500 font-medium"
//               dismissOnClick={false}
//             >
//               <DropdownItem>
//                 <NavLink
//                   to="/Community"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Community
//                 </NavLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <NavLink
//                   to="/Chatbot"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Chatbot
//                 </NavLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <NavLink
//                   to="/PlantModel"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Plant Model
//                 </NavLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <NavLink
//                   to="/Workshops"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Workshops
//                 </NavLink>
//               </DropdownItem>
//             </Dropdown>

//             <NavLink
//               to="/AboutUs"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               About Us
//             </NavLink>

//             <NavLink
//               to="/Products"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               Products
//             </NavLink>

//             <NavLink
//               to="/Login"
//               onClick={() => setLogin(false)} // Log out and update state
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               Sign Out
//             </NavLink>

//             <NavLink
//               to="/Cart"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               <i className='fas fa-cart-shopping fa-xl ms-10'></i>
//             </NavLink>
//           </>
//         ) : (
//           <>
            
//             <ul className='flex gap-8'>
//               <li>  <a href="https://www.facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-green-500"
//                 onClick={(e) => e.stopPropagation()}>  <i className='fab fa-facebook-f'></i></a></li>
//               <li>  <a href="https://www.twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-green-500"
//                 onClick={(e) => e.stopPropagation()}>  <i className='fab fa-twitter'></i></a></li>
//               <li > <a href="https://www.google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-green-500"
//                 onClick={(e) => e.stopPropagation()}>  <i className='fab fa-google'></i></a></li>
//               <li>  <a href="https://www.youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-green-500"
//                 onClick={(e) => e.stopPropagation()}>  <i className='fab fa-youtube'></i></a></li>
//             </ul>
//           </>
//         )}
//       </NavbarCollapse>
//     </Navbar>
//   );
// }
// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
// import img1 from "../assets/WhatsApp Image 2024-12-12 at 13.01.41_6562a973.ico";
// import { Dropdown, DropdownItem } from "flowbite-react";

// export function Component() {
//   const [isLogin, setLogin] = useState(true); // Correctly declare state

//   return (
//     <Navbar className="mb-20 shadow-lg fixed top-0 z-50 w-full flex items-center">
//       <NavbarBrand as={Link} href="https://flowbite-react.com">
//         <img src={img1} className="mr-3 h-6 sm:h-9 ml-0" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           Leaf&Root
//         </span>
//       </NavbarBrand>
//       <NavbarToggle />
//       <NavbarCollapse>
//         {isLogin ? (
//           <>
//             {/* Navigation links for logged-in users */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               Home
//             </NavLink>
//             <Dropdown
//               label="Dropdown"
//               inline
//               className="text-md text-gray-500 hover:text-green-500 font-medium"
//               dismissOnClick={false}
//             >
//               <DropdownItem>
//                 <NavLink
//                   to="/Community"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Community
//                 </NavLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <NavLink
//                   to="/Chatbot"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Chatbot
//                 </NavLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <NavLink
//                   to="/PlantModel"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Plant Model
//                 </NavLink>
//               </DropdownItem>
//               <DropdownItem>
//                 <NavLink
//                   to="/Workshops"
//                   className={({ isActive }) =>
//                     `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//                   }
//                 >
//                   Workshops
//                 </NavLink>
//               </DropdownItem>
//             </Dropdown>
//             <NavLink
//               to="/AboutUs"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/Products"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               Products
//             </NavLink>
//             <NavLink
//               to="/Login"
//               onClick={() => setLogin(false)} // Log out functionality
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               Sign Out
//             </NavLink>
//             <NavLink
//               to="/Cart"
//               className={({ isActive }) =>
//                 `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
//               }
//             >
//               <i className="fas fa-cart-shopping fa-xl ms-10"></i>
//             </NavLink>
//           </>
//         ) : (
//           <>
//             {/* Social icons for non-logged-in users */}
//             <ul className="flex gap-8">
//               <li>
//                 <a
//                   href="https://www.facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-green-500"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-green-500"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.google.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-green-500"
//                 >
//                   <i className="fab fa-google"></i>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.youtube.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-500 hover:text-green-500"
//                 >
//                   <i className="fab fa-youtube"></i>
//                 </a>
//               </li>
//             </ul>
//           </>
//         )}
//       </NavbarCollapse>
//     </Navbar>
//   );
// }
import { Link, NavLink } from "react-router-dom";
 // Import the context
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Dropdown, DropdownItem } from "flowbite-react";
import img1 from "../assets/WhatsApp Image 2024-12-12 at 13.01.41_6562a973.ico";

import { useContext } from "react";
import { auth } from "../Context/AuthContext";

export function Component() {
  const { isLogin, setLogin } = useContext(auth); // Use the auth context
  console.log(isLogin);
  function logout() {
    localStorage.removeItem('userToken')
  
    setLogin(null)

    
    navigate('/Login')
}
  return (
    <Navbar className="mb-20 shadow-lg fixed top-0 z-50 w-full flex items-center">
      <NavbarBrand as={Link} href="/">
        <img src={img1} className="mr-3 h-6 sm:h-9 ml-0" alt="Leaf&Root Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leaf&Root</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {isLogin ? (
          <>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
              }
            >
              Home
            </NavLink>
            <Dropdown
              label="Dropdown"
              inline
              className="text-md text-gray-500 hover:text-green-500 font-medium"
              dismissOnClick={false}
            >
              <DropdownItem>
                <NavLink
                  to="/Community"
                  className={({ isActive }) =>
                    `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
                  }
                >
                  Community
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
                  }
                >
                  Blog
                </NavLink>
                
              </DropdownItem>
              <DropdownItem>
              


              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to="/Chatbot"
                  className={({ isActive }) =>
                    `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
                  }
                >
                  Chatbot
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to="/PlantModel"
                  className={({ isActive }) =>
                    `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
                  }
                >
                  Plant Model
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to="/Workshops"
                  className={({ isActive }) =>
                    `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
                  }
                >
                  Workshops
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink
                  to="/UploadForm"
                  className={({ isActive }) =>
                    `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
                  }
                >
                  light
                </NavLink>
              </DropdownItem>
            </Dropdown>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/ContactUs"
              className={({ isActive }) =>
                `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
              }
            >
              contact Us
            </NavLink>

          

            <NavLink
              to="/Login"
              onClick={logout} // Log out
              className={({ isActive }) =>
                `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
              }
            >
              Sign Out
            </NavLink>

            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                `text-md ${isActive ? "text-green-500 font-bold" : "text-gray-500"} hover:text-green-500`
              }
            >
              <i className="fas fa-cart-shopping fa-xl ms-10"></i>
            </NavLink>
          </>
        ) : (
          <>
            {/* Social Icons */}
            <ul className="flex gap-8">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}



