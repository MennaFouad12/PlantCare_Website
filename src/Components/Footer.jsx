// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           {/* Logo or Brand Name */}
//           <div className="text-xl font-bold">Leaf && Root</div>

//           {/* Navigation Links */}
          

//           {/* Copyright */}
//           <div className="mt-4 md:mt-0 text-gray-400">
//             © {new Date().getFullYear()} BrandName. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Start Fisrt Column */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p className="text-sm">
                We are committed to providing <br/> the best Service for your Plant.
              </p>
            </div>

            {/* End Fisrt Column */}

            {/* //////////////////////////////////////////////////////////// */} 

            {/* Start Second Column */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul className="text-sm">
                
                <li><Link to="/AboutUs" className="hover:underline">About Us</Link></li>
                <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
                
              </ul>
            </div>

            {/* End Second Column */}

            {/* //////////////////////////////////////////////////////////// */}
            
            {/* Start Third Column */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <p className="text-sm">123 Green Street, Plant City</p>
              <p className="text-sm">Email: info@plants.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            {/* End Third Column */}
  
            {/* //////////////////////////////////////////////////////////// */}
            
            {/* Start Fourth Column */}
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/20vwxpww2m/" className="hover:text-gray-400" target="_blank" >Facebook</a>
                <a href="#twitter" className="hover:text-gray-400">Twitter</a>
                <a href="https://www.instagram.com/s._wg/" className="hover:text-gray-400"   target="_blank" >Instagram</a> 
                </div>
            </div>
          </div>
          {/* End Fourth Column */}
          {/* //////////////////////////////////////////////////////////// */}
            
            {/* Start Year and CopyRight Row */}
          <div className="text-center border-t border-gray-500 pt-4 mt-8">
            <p className="text-sm">&copy; {new Date().getFullYear()} Plant Services. All rights reserved.</p>
          </div>
        </div>
        {/* End Year and CopyRight Row */}
      </footer>
    );
}

export default Footer;
