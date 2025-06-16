// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// import { addToCartApi, deleteCartApi, getCartApi } from '../Apis/cart';
// import  useMutationCart  from '../Hooks/useMutationCart';
// import { toast } from 'react-toastify';
// import useQueryCart from '../Hooks/useQueryCart';
// // FeaturedProducts =>Home,products
// export default function Products({product}) {


//   // let { mutate: addmutate, data, status }= useMutationCart(addToCartApi);
//   let { data, isLoading, isError, error } = useQueryCart('cart', getCartApi)
//   let { mutate: addmutate, data3, status }=useMutationCart(addToCartApi)
//   let { mutate: deletemutate, data2, status2 }=useMutationCart(deleteCartApi)
//   if(data2){
//     console.log(data2);
//   }

//   const localStorageKey = `shoppingFlag_${product.id}`;
  
//   // Initialize state based on local storage value
//   const [flag, setFlag] = useState(() => {
//     const savedFlag = localStorage.getItem(localStorageKey);
//     return savedFlag === 'true'; // localStorage stores values as strings
//   });
  




  
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, flag);
//   }, [flag, localStorageKey]);
  
//   // Show toast when add succeeds
//   useEffect(() => {
//     if (status === 'success') {
//       toast.success("Product added to cart");
//     }
  
    
  

//   }, [status]);
  

  
//   useEffect(() => {
//     if (status2 === 'success') {
//       toast.success("Product removed from cart");
//     }
//   }, [status2]);
  
//   // Show toast when delete succeeds
//   // useEffect(() => {
//   //   if (status2 === 'success') {
//   //     toast.info("Product removed from cart");
//   //   }else{
//   //     toast.error("Failed to remove product from cart");
//   //   }
//   // }, [status2]);
// return(
// <Link to={`/Details/${product?.id}`} >
//       <div className="product p-2 cursor-pointer ">
       
//           <img   src={`http://plantcareapi.runasp.net${product.image}`}  className='w-full sm:h-40 md:h-60' alt="" />
//           <h2 className='font-bold'>{product.name}</h2>
//           <div className='flex justify-between my-3'>
//             <h3 className='font-semibold'>{product.price}</h3>
//             <button  className={ `btn bg-slate-200 ${flag ?'text-green-700': 'text-white'}  p-2 rounded`}  onClick={(event)=>{
//               event.preventDefault();
//               setFlag(prevFlag => {
//                 const newFlag = !prevFlag;
//                 if (newFlag) {
//                   addmutate(product.id);
//                 } else {
                
                  
//                   if(data?.items?.length){
//                   const item= data?.items?.find(item => item.productId === product.id);  
//                   console.log(item);
//                   deletemutate(item.id);
//                   }
//                 }
//                 return newFlag;
//               });
            
//               }}><i class="fa-solid fa-cart-shopping"></i></button>
//           </div>
    
        
//       </div>
//    </Link>

  
// )
  





  





// }



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCartApi, deleteCartApi, getCartApi } from '../Apis/cart';
import useMutationCart from '../Hooks/useMutationCart';
import { toast } from 'react-toastify';
import useQueryCart from '../Hooks/useQueryCart';
import { motion } from 'framer-motion';
export default function Products({ product }) {
  const { data, isLoading, isError, error } = useQueryCart('cart', getCartApi);
  const { mutate: addmutate, status: statusAdd } = useMutationCart(addToCartApi);
  const { mutate: deletemutate, status: statusDelete } = useMutationCart(deleteCartApi);

  // Check if product is already in cart
  const isInCart = data?.items?.some(item => item.productId === product.id);

  useEffect(() => {
    if (statusAdd === 'success') {
      toast.success("Product added to cart");
    }
  }, [statusAdd]);

  useEffect(() => {
    if (statusDelete === 'success') {
      toast.info(" Product removed from cart");
    }
  }, [statusDelete]);

  return (
    <Link to={`/Details/${product?.id}`}>
      <motion.div  className="product p-2 cursor-pointer" initial={{ opacity: 0, y: 50 } }
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
        y: -5,
      }}
      
      
      >
        <img 
          src={`http://plantcareapi.runasp.net${product.image}`} 
          className="w-full sm:h-40 md:h-60" 
          alt={product.name} 
        />
        <h2 className="font-bold">{product.name}</h2>
        <div className="flex justify-between my-3">
          <h3 className="font-semibold">{product.price}$</h3>
          <button
            className={`btn bg-slate-200 ${isInCart ? 'text-green-700' : 'text-white'} p-2 rounded`}
            onClick={(e) => {
              e.preventDefault();

              if (isInCart) {
                const item = data?.items?.find(item => item.productId === product.id);
                if (item) {
                  deletemutate(item.id);
                }
              } else {
                addmutate(product.id);
              }
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </motion.div>
    </Link>
  );
}




