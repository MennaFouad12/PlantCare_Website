import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';


import { toast } from 'react-toastify';

import Loading from '../Loading';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useMutationCategory from '../../Hooks/useMetationCategory';
import { addCategory, deleteCategory, updateCategory } from '../../Apis/Admin/categories';

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

export default function CategoryBasicModal({ info,category = null }) {

  const [open, setOpen] = React.useState(false);
  const { mutate: addCategoryMutation, isPending: isAdding } = useMutationCategory(addCategory);
  let navigate = useNavigate()
  const { mutate: updateCategoryMutation, isPending: isupdating } = useMutationCategory(updateCategory);
  const { mutate:deleteCategoryMutation, isPending: isdeleting } = useMutationCategory(deleteCategory);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
async function handleadminCategory(values) {
  try {

    if (info !=='add') {
      await updateCategoryMutation(  [values, category.id], {
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
    await addCategoryMutation(values, {
      onSuccess: (data) => {
        toast.success("Category added successfully!");
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


const validationSchema =  Yup.object({
      name: Yup.string().required("Product Name is required"),
    
    })
  

    const formik = useFormik({
      initialValues: {
        name:category?.name || '',
        
      },
      validationSchema,
      onSubmit: handleadminCategory
    });

  if (isAdding||isupdating||isdeleting) {
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
        <Button onClick={handleOpen} sx={{ bgcolor: '#046C4E'}} variant="contained" >
          Add New Category
        </Button>
          {/* <Button onClick={() => navigate('/admin') } sx={{ m: '30px', bgcolor: '#046C4E' }} variant="contained" color="success">
          Go Back to Home
        </Button> */}
        </div>
    ) : (
        <div className="flex justify-center">
          <Button onClick={handleOpen} sx={{ m: '30px', bgcolor: '#046C4E' }} variant="contained" color="success">
            Edit
          </Button>
          <Button onClick={() => deleteCategoryMutation(category.id,{
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
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
                name="name"
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




