import { useState } from 'react'
import reactLogo from './assets/react.svg'
import WorkShopAdmin from './Components/WorkShopAdmin/WorkShopAdmin'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Community from './Components/Community/Community'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import Layout from './Components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Register from './Components/Register'
import ForgetPassword from './Components/ForgetPassword'

import ResetCode from './Components/ResetCode'
import ResetPassword from './Components/ResetPassword'
import OurProducts from './Components/OurProducts'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Card'

import Payment from './Components/Payment'
import Contact from './Components/Contact'
import PlantModel from './Components/PlantModel'
import Chatbot from './Components/Chatbot'
import Workshops from './Components/Workshops'
import Blog from './Components/Blog'
import UploadForm from './Components/UploadForm'
import Body from './Components/Body Section/Body'
import Listting  from './Components/Body Section/Listting Section/Listting'
import Seound_page from './Components/Seound_page/Seound_page'
import AdminManagement from './Components/new_admin/CreateNewAdmin'
import Order from './Components/Order/order'
import UpdatedActivity from './Components/Activity/activity'
import { Cat } from 'lucide-react'
import Categories from './Components/Category/Category'
import CreateNewAdmin from './Components/new_admin/CreateNewAdmin';

import Blogpage from './Components/Blogs_page/BloPage'

function App() {
  
  const routers = createBrowserRouter([
  // Main Website Routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "Home", element: <Home /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "Community", element: <Community /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "ForgetPassword", element: <ForgetPassword /> },
      { path: "ResetCode", element: <ResetCode /> },
      { path: "ResetPassword", element: <ResetPassword /> },
      { path: "Products", element: <OurProducts /> },
      { path: "Cart", element: <Cart /> },
      { path: "Payment", element: <Payment /> },
      { path: "Details/:id", element: <ProductDetails /> },
      { path: "PlantModel", element: <PlantModel /> },
      { path: "Chatbot", element: <Chatbot /> },
      { path: "UploadForm", element: <UploadForm /> },
      { path: "Blog", element: <Blog /> },
      { path: "ourblogs", element: <Blogpage /> },
      { path: "Workshops", element: <Workshops /> },
      { path: "ContactUs", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  // Admin Panel Routes
  {
    path: "/admin",
    element: <Body />, // admin layout
    children: [
      { index: true, element:<Listting></Listting> },
      { path: "adminproducts", element: <Seound_page /> },
      { path: "categories", element: <Categories /> },
      { path: "accmangement", element: <AdminManagement /> },
      { path: "order", element: <Order /> },
      { path: "activity", element: <UpdatedActivity /> },
      { path: "createnewadmin", element: <CreateNewAdmin /> },
      { path: "Blogpage", element: <Blogpage /> },
      { path: "WorkShopAdmin", element: <WorkShopAdmin /> },
    ],
  },
]);

  
  return (
     <RouterProvider router={routers}>

     </RouterProvider>

      
    
  )
}

export default App
