import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
// import { cash, onlinepayment } from '../Apis/payment';
// import useMutationCart from '../Hooks/useMutationCart';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// export default function BasicModal({onSubmit }) {
//   console.log(onSubmit);
//     let [flag, setflag] = React.useState(false)
//     // let { mutate, data } = useMutationCart(onlinepayment)
//     // let { mutate: mutateCash, data: dataCash } = useMutationCart(cash)

//     // function handleSubmit(shippingAddress) {//الباراميتر دا شايل القيم اللي حطتها فالفورم عشان بتتبعت تلقائي لما بعمل سابميت

//     //     //mutate بتاخد مني باراميتر واحد فلو عاوزه ابعت كذا حاجه هبعتها فشكل اوبجكت
//     //     if (flag)
//     //         mutate({ cartid, shippingAddress })
//     //     else
//     //         mutateCash({ cartid, shippingAddress })
//     // }
//     // if (data?.data?.status === 'success') {
//     //     window.location.href = data?.data?.session?.url
//     // }
//     // // console.log(dataCash)
//     // if (dataCash?.data?.status === 'success') {
//     //     toast('All is done')
//     // }
//     // let formik = useFormik({
//     //     initialValues: {
//     //         details: '',
//     //         phone: '',
//     //         city: '',
//     //     },

//     //     onSubmit: handleSubmit
//     // })
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () =>{ 
//       onSubmit()
//       setOpen(true)
//     };
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             {/* <Button onClick={() => { handleOpen(); setflag(!flag) }} sx={{ m: '30px' }} variant='contained' color='success'  >Pay Online</Button> */}
//             <Button type='submit' onClick={handleOpen} sx={{ m: '30px' }} variant='contained' color='success'  >Pay Cash</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography> */}


// <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//                  <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
//                  <div className="space-y-4">
//                    <div className="space-y-2">
//                      <dl className="flex items-center justify-between gap-4">
//                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
//                        <dd className="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
//                      </dl>
//                      <dl className="flex items-center justify-between gap-4">
//                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
//                        <dd className="text-base font-medium text-green-600">-$299.00</dd>
//                      </dl>
//                      <dl className="flex items-center justify-between gap-4">
//                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
//                        <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
//                      </dl>
//                      <dl className="flex items-center justify-between gap-4">
//                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
//                        <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
//                      </dl>
//                    </div>
//                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
//                      <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
//                      <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
//                    </dl>
//                  </div>
//                  <a href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>
//                  <div className="flex items-center justify-center gap-2">
//                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
//                    <a href="#" title className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
//                      <Link to="/Payment" className='text-green-600'>
//                    Pay
//                    </Link>
//                      <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" />
//                      </svg>
//                    </a>
//                  </div>
//                </div>
      
//              </div>


//                 </Box>
//             </Modal>
//         </div>
//     );
// }


export default function BasicModal({ formRef, isValid, isSubmitting,data }) {
  const [open, setOpen] = React.useState(false);
function getArraySize(arr) {
  return Array.isArray(arr) ? arr.length : 0;
}



  const handleOpen = () => {
    if (isValid) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        type="button"
        onClick={handleOpen}
        disabled={!isValid || isSubmitting}
        sx={{ m: '30px' }} 
        variant='contained' 
        color='success'
      >
        {isSubmitting ? 'Processing...' : 'Pay '}
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6">
            
            <p className="text-xl font-semibold text-gray-900">Order confirmed!</p>
            <p>Your order has been successfully submitted.</p>



            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
               <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                 <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
                 <div className="space-y-4">
                   <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">order items</dt>
                       <dd className="text-base font-medium text-gray-900 dark:text-white">{getArraySize(data.orderItems)}</dd>
                     </dl>
                     <dl className="flex items-center justify-between gap-4">
                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Total price</dt>
                       <dd className="text-base font-medium text-gray-900 dark:text-white">{data.totalPrice}</dd>
                     </dl>
                     <dl className="flex items-center justify-between gap-4">
                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Payment Date
</dt>
                       <dd className="text-base font-medium text-green-600">{data.paymentDate}</dd>
                     </dl>
                     <dl className="flex items-center justify-between gap-4">
                       <dt className="text-base font-normal text-gray-500 dark:text-gray-400">shippingDate
</dt>
                       <dd className="text-base font-medium text-gray-900 dark:text-white">{data.shippingDate}</dd>
                     </dl>
                     
                   </div>
              
                 </div>
                 
               </div>
      
             </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
