// import React from 'react'
// import './body.css'
// import TOP from './Top Section/Top'


// import Activity from './Activity Section/Activity'
// import Listting from './Listting Section/Listting'
// import Sidebar from '../SideBar Section/SideBar'

// const Body = () => {
// return (
//   <div className='flex' >
// <Sidebar></Sidebar>
//     <div className='mainContent'>
//         {/* <TOP/>
      
//         <div className='bottom flex'>
//             <Listting/>
//             <Activity/>
//         </div> */}
//           <Listting/>
//     </div>

//     </div>
// )
// }

// export default Body




import React, { useState } from 'react';
import Sidebar from '../SideBar Section/SideBar'
import { Outlet } from "react-router-dom"
const Body = () => {


  return (
    <div className="flex min-h-screen bg-gray-50">
    
      <Sidebar  />

    
      {/* <div className="flex-1 flex flex-col">
      

        <main className="flex-1 p-6">  <Outlet /></main>
      </div> */}
        <div className="flex-1 flex flex-col md:ml-72"> {/* Add margin-left for space */}
    <main className="flex-1 p-6">
      <Outlet />
    </main>
  </div>
    </div>
  );
};

export default Body;
