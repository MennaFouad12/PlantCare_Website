// import React, { useState, useEffect } from 'react'

import React from "react";
import { useState ,  useEffect} from "react";

import { motion } from "framer-motion";

import { Helmet } from 'react-helmet';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import QuantityInput from './QuantityButtons';
import DisabledAccordion from './Accordian';
import { Component } from './SideBar';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../Apis/products';
import Loading from './Loading';
import useMutationCart from '../Hooks/useMutationCart';
import { addToCartApi, getCartApi, updateCartApi } from '../Apis/cart';
import useQueryCart from '../Hooks/useQueryCart';
import { toast } from 'react-toastify';
export default function ProductDetails() {
    

    let { id } = useParams()
    console.log(id)
    let [src,setSrc] = useState('')
    let [msg, setMsg] = useState('')
    let [loading, setloading] = useState(false)
    let [product, setProduct] = useState({})
    const { data, isLoading, isError, error } = useQueryCart('cart', getCartApi);
       let { mutate: updatemutate,isPending:isLoading3, data3, status3 }=useMutationCart(updateCartApi);
       const { mutate: addmutate, status: statusAdd } = useMutationCart(addToCartApi);
    const isInCart = data?.items?.some(item => item.productId == id);
    let orderitem;
    if (isInCart) {
      orderitem = data?.items?.find(item => item.productId ==id);
    }
    function changeSrc(e)
    {
      setSrc( e.target.src);
    }
    async function getSingleProductApi() {
      let data = await getSingleProducts(id)
      if (data) {
          setProduct(data)
          setMsg('')
          setloading(false)

      }
      else {
          setMsg(data?.message)
          setloading(false)
      }
  }
  if (loading)
    return <Loading></Loading>

if (msg)
    return <h2 className='text-red-700 font-bold'>{msg}</h2>
    useEffect(() => {
        if (statusAdd === 'success') {
          toast.success("Product added to cart");
        }
      }, [statusAdd]);
useEffect(()=>{
  getSingleProductApi()
},[id])

    return (
    <div className='container' >

        <div className='row-tw items-center flex flex-wrap justify-between'>
                <Helmet>
        <meta charSet="utf-8" />
        <title>Details</title>
       
      </Helmet>
            <div className="md:w-1/4 p-3">
            <img src={`http://plantcareapi.runasp.net${product.image}`}className='w-full ' alt="" />
            <ul className='flex gap-2 relative justify-center my-2'>
               <li  ><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}  onClick={changeSrc} className='cursor-pointer shadow-lg' width={70} src={product1} alt="" /></li>
               <li   ><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}  onClick={changeSrc} className='cursor-pointer shadow-lg' width={70} src={product1} alt="" /></li>
               <li   ><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}  onClick={changeSrc} className='cursor-pointer shadow-lg' width={70} src={product2} alt="" /></li>
            </ul>
            </div>
           <div className="md:w-2/4 p-3">
           <p className='text-zinc-400 my-5 font-medium'>{product.categoryName}</p>
           <h3 className='line-clamp-1 my-5 font-bold'>{product.name}</h3>
           <p className='font-medium my-5'>
            {product.description}
            </p>
         
           <div className='flex justify-between my-5'>
            
            <span className='font-semibold'>{product.price} $</span>
            {/* <span> <i className='fas fa-star text-yellow-600'></i> {product?.ratingsAverage}</span> */}
           </div >
           <div className='  flex justify-start my-5'>
            {orderitem&&
           <QuantityInput  quantity={orderitem.quantity}  onQuantityChange={(newQuantity) =>{
                             console.log("New quantity:", newQuantity);
    updatemutate({ id: orderitem.id, quantity: newQuantity })}
  }  ></QuantityInput>}
           {isInCart?<button  className='btn block w-fit bg-gray-500 text-white mx-6 p-2 rounded'>In Cart</button>:
           <button onClick={() =>addmutate(product.id) } className='btn block w-fit bg-green-700 text-white mx-6 p-2 rounded'>Add To cart</button>
}
           </div>
           </div>
           
        </div>

<h2 className='my-10 font-bold fa-xl'>Product Descreption</h2>
<DisabledAccordion></DisabledAccordion>
{/* <DisabledAccordion></DisabledAccordion>
<DisabledAccordion></DisabledAccordion> */}


        </div>
    )
}
