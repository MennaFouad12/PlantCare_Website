import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import useMutationProduct from '../Hooks/useMutationProduct';
import { toast } from 'react-toastify';
import { addProduct, deleteProduct, updateProduct } from '../Apis/Admin/products';
import Loading from './Loading';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

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

export default function AdminBasicModal({ info,product = null }) {

  const [open, setOpen] = React.useState(false);
  const { mutate: addProductMutation, isPending: isAdding } = useMutationProduct(addProduct);
  let navigate = useNavigate()
  const { mutate: updateProductMutation, isPending: isupdating } = useMutationProduct(updateProduct);
  const { mutate:deleteProductMutation, isPending: isdeleting } = useMutationProduct(deleteProduct);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
async function handleadminproducts(values) {
  try {

    const formattedValues = {
      ...values,
      Price: values.Price ? parseFloat(values.Price) : null,
      Quantity: values.Quantity ? parseInt(values.Quantity) : null,
      CategoryId: values.CategoryId || null
    };
    if (info !=='add') {
      await updateProductMutation(  [formattedValues, product.id], {
        onSuccess: (data) => {
          toast.success("Product updated successfully!");
          setOpen(false);
          formik.resetForm();
        },
        onError: (error) => {
          toast.error(`Error: ${error.response?.data?.message || error.message}`);
        }
      });
    }else{
    await addProductMutation(values, {
      onSuccess: (data) => {
        toast.success("Product added successfully!");
        setOpen(false);
        formik.resetForm();
      },
      onError: (error) => {
        toast.error(`Error: ${error.response?.data?.message || error.message}`);
      }
      
    });
  }
  } catch (err) {
    console.error("Error adding product:", err);
  }
}


const validationSchema = info === 'add'
  ? Yup.object({
      Name: Yup.string().required("Product Name is required"),
      Description: Yup.string().required("Description is required"),
      Price: Yup.number().required("Price is required").positive("Price must be a positive number"),
      Quantity: Yup.number().required("Quantity is required").min(1, "Quantity must be at least 1"),
      CategoryId: Yup.string().required("Category is required"),
    })
  : Yup.object({
      Name: Yup.string(),
      Description: Yup.string(),
      Price: Yup.number().positive("Price must be a positive number"),
      Quantity: Yup.number().min(1, "Quantity must be at least 1"),
      CategoryId: Yup.string(),
    });

    const formik = useFormik({
      initialValues: {
        Name: product?.name || '',
        Description: product?.description || '',
        Price: product?.price ? String(product.price) : '', // Convert to string
        Quantity: product?.quantity ? String(product.quantity) : '', // Convert to string
        image: product?.image || null, // Use null instead of empty string
        CategoryId: product?.categoryId ? String(product.categoryId) : '', // Convert to string
      },
      validationSchema,
      onSubmit: handleadminproducts
    });

  if (isAdding) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loading type="spin" color="#03543F" />
      </div>
    );
  }

  return (
    <div>
      {info === 'add' ? (
        <div className="flex justify-center">
        <Button onClick={handleOpen} sx={{   bgcolor: '#046C4E' }} variant="contained" color="success">
          Add New Product
        </Button>
          {/* <Button onClick={() => navigate('/admin') } sx={{ m: '30px'  , bgcolor: '#046C4E'}} variant="contained" color="success">
          Go Back to Home
        </Button> */}
        </div>
      ) : (
        <div className="flex justify-center">
          <Button onClick={handleOpen} sx={{ m: '30px' , bgcolor: '#046C4E'}} variant="contained" color="success">
            Edit
          </Button>
          <Button onClick={() => deleteProductMutation(product.id,{
        onSuccess: (data) => {
          toast.success("Product deleted successfully!");
          
        },
        onError: (error) => {
          toast.error(`Error: ${error.response?.data?.message || error.message}`);
        }
      })}  sx={{ m: '30px' }} variant="contained" color="error">
            Delete
          </Button>
        </div>
      )}

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Name}
                id="Name"
                name="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Description</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.Description}
                id="Description"
                name="Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
              <input
                type="number"
                onChange={formik.handleChange}
                value={formik.values.Price}
                id="Price"
                name="Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="Quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Quantity</label>
              <input
                type="number"
                onChange={formik.handleChange}
                value={formik.values.Quantity}
                id="Quantity"
                name="Quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.size > 5000000) { // 5MB size limit
                    toast.error("File size is too large! Max 5MB.");
                    return;
                  }
                  formik.setFieldValue("image", file);
                }}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="CategoryId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.CategoryId}
                id="CategoryId"
                name="CategoryId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>

            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}




