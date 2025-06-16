
// import { Helmet } from 'react-helmet'
// import product1 from '../assets/product1.png';
// import QuantityInput from './QuantityButtons';
// import { Link} from 'react-router-dom';
// import { deleteCartApi, getCartApi, updateCartApi } from '../Apis/cart';
// import Loading from './Loading';
// import empcart from '../assets/group_852_2x.png'
// import useQueryCart from '../Hooks/useQueryCart';
// import axios from 'axios';
// import useMutationCart from '../Hooks/useMutationCart';

// export default function Cart() {

//   let { data, isLoading, isError, error } = useQueryCart('cart', getCartApi)

//    let { mutate: deletemutate,isPending:isLoading2 , data2, status2}=useMutationCart(deleteCartApi)
//    let { mutate: updatemutate,isPending:isLoading3, data3, status3 }=useMutationCart(updateCartApi)
//   console.log(data);

  

//   if (isLoading||isLoading3||isLoading2 ){
//     return(<div className='flex justify-center items-center'> <Loading  type="spin" color="#03543F" />
//     </div>
//     )
//   }
//   if (!data?.items?.length) {
//     return (<>
//       <img src={empcart} className='mx-auto md:w-50 w-96' alt="" />
//     </>)
//   }
// // useEffect(() => {
// //   callgetcartApi()
// // }, [])
//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>cart</title>

//       </Helmet>
  
 
//       <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
//         <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//           <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
//           <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
//             <div className="mx-auto w-full text-center flex-none lg:max-w-2xl xl:max-w-4xl">
//               <div className="space-y-6 text-center">
//                 {/* {data?.items.map((item, index) => (
//                   <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//                     <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//                       <a href="#" className="shrink-0 md:order-1">
//                         <img className="h-20 w-20 dark:hidden"  src={`http://plantcareapi.runasp.net${item.productImageUrl}`} alt="imac image" />

//                       </a>
//                       <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
//                       <div className="flex items-center justify-between md:order-3 md:justify-end">

//                         <div>
//                           <div className="flex items-center">
//                             <QuantityInput quantity={item.quantity}  onQuantityChange={(newQuantity) =>{
//                              console.log("New quantity:", newQuantity);
//     updatemutate({ id: item.id, quantity: newQuantity })}
//   }></QuantityInput>
//                           </div>
//                         </div>
//                         <div className="text-end md:order-4 md:w-32">
//                           <p className="text-base font-bold text-gray-900 dark:text-white">  {item.unitPrice}$</p>
//                         </div>
//                       </div>
//                       <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                         <div>
//                           <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}</a>

//                         </div>
                       

//                       </div>
//                       <button type="button" onClick={() => deletemutate(item.id)} className="inline-flex w-full min-w-0 flex-1 space-y-4 md:order-3 md:max-w-md items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
//                           <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
//                           </svg>
//                           Remove
//                         </button>
//                     </div>
//                   </div>
//                 ))} */}

// <table className="min-w-full text-left text-sm text-gray-500 dark:text-gray-400 mt-6">
//   <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
//     <tr>
//       <th className="px-6 py-3">Image</th>
//       <th className="px-6 py-3">Product</th>
//       <th className="px-6 py-3">Quantity</th>
//       <th className="px-6 py-3">Unit Price</th>
//       <th className="px-6 py-3">Total Price</th>
//       <th className="px-6 py-3">Remove</th>
//     </tr>
//   </thead>
//   <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//     {data?.items.map((item, index) => (
//       <tr key={index}>
//         <td className="px-6 py-4">
//           <img
//             className="h-16 w-16 object-cover rounded"
//             src={`http://plantcareapi.runasp.net${item.productImageUrl}`}
//             alt={item.name}
//           />
//         </td>
//         <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.productName}</td>
//         <td className="px-6 py-4">
//           <QuantityInput
//             quantity={item.quantity}
//             onQuantityChange={(newQuantity) =>
//               updatemutate({ id: item.id, quantity: newQuantity })
//             }
//           />
//         </td>
//         <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">${item.unitPrice}</td>
//         <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//           ${(item.unitPrice * item.quantity).toFixed(2)}
//         </td>
//         <td className="px-6 py-4">
//           <button
//             type="button"
//             onClick={() => deletemutate(item.id)}
//             className="text-red-600 hover:underline dark:text-red-500"
//           >
//             Remove
//           </button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>

               
//               </div>
//               <button
//                                     type="submit"
//                                     className="text-white mt-10 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                                 >
//                                     create order
//                                 </button>
//             </div>
//             {/* <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//               <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//                 <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
//                 <div className="space-y-4">
//                   <div className="space-y-2">
//                     <dl className="flex items-center justify-between gap-4">
//                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
//                       <dd className="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
//                     </dl>
//                     <dl className="flex items-center justify-between gap-4">
//                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
//                       <dd className="text-base font-medium text-green-600">-$299.00</dd>
//                     </dl>
//                     <dl className="flex items-center justify-between gap-4">
//                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
//                       <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
//                     </dl>
//                     <dl className="flex items-center justify-between gap-4">
//                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
//                       <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
//                     </dl>
//                   </div>
//                   <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
//                     <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
//                     <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
//                   </dl>
//                 </div>
//                 <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>
//                 <div className="flex items-center justify-center gap-2">
//                   <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
//                   <a href="#" title className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
//                     <Link to="/Payment" className='text-green-600'>
//                   Pay
//                   </Link>
//                     <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
      
//             </div> */}
//           </div>
//         </div>
//       </section> 

//     </div>
//   )

// }

import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import empcart from '../assets/group_852_2x.png';
import Loading from './Loading';
import QuantityInput from './QuantityButtons';
import { deleteCartApi, getCartApi, updateCartApi } from '../Apis/cart';
import useQueryCart from '../Hooks/useQueryCart';
import useMutationCart from '../Hooks/useMutationCart';

export default function Cart() {
  const { data, isLoading, isError } = useQueryCart('cart', getCartApi);
  const { mutate: deletemutate, isPending: isLoading2 } = useMutationCart(deleteCartApi);
  const { mutate: updatemutate, isPending: isLoading3 } = useMutationCart(updateCartApi);

  let navigate = useNavigate()

  if (isLoading || isLoading2 || isLoading3) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loading type="spin" color="#03543F" />
      </div>
    );
  }

  if (!data?.items?.length) {
    return (
      <div className="py-20">
        <img src={empcart} className="mx-auto md:w-50 w-72" alt="Empty cart" />
      </div>
    );
  }

  const total = data.items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white sm:text-2xl mb-8">
            Shopping Cart
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="px-4 py-3 text-sm text-left">Image</th>
                  <th className="px-4 py-3 text-sm text-left">Product</th>
                  <th className="px-4 py-3 text-sm text-left">Quantity</th>
                  <th className="px-4 py-3 text-sm text-left">Unit Price</th>
                  <th className="px-4 py-3 text-sm text-left">Total</th>
                  <th className="px-4 py-3 text-sm text-left">Remove</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {data.items.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3">
                      <img
                        className="w-16 h-16 rounded object-cover"
                        src={`http://plantcareapi.runasp.net${item.productImageUrl}`}
                        alt={item.productName}
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-900  font-medium">
                      {item.productName}
                    </td>
                    <td className="px-4 py-3 flex   ">
                      <QuantityInput
                        quantity={item.quantity}
                        onQuantityChange={(newQuantity) =>
                          updatemutate({ id: item.id, quantity: newQuantity })
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-white font-semibold">
                      {item.unitPrice}
                    </td>
                    <td className="px-4 py-3 text-gray-900 dark:text-white font-semibold">
                      {(item.unitPrice * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => deletemutate(item.id)}
                        className="text-red-600 hover:underline dark:text-red-500"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Total: ${total.toFixed(2)}
            </div>
            <button
              type="button"
              onClick={() => navigate('/Payment')}
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700"
            >
              Create Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
