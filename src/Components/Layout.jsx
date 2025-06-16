
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { Component } from "./Navbar";
function Layout(){
    return(
        <>
       
       <Component></Component>
       <div className="my-12">
        <Outlet />
        </div>
        <Footer/>
        </>
    );
}

export default Layout;