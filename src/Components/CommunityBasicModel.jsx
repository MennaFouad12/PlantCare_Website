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
import useMutationCommunity from '../Hooks/useMutationCommunity';
import { EditPost,deletePost } from '../Apis/community';
import { FiEdit, FiTrash2, FiEye, FiChevronDown, FiSearch } from 'react-icons/fi';
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

export default function CommunityBasicModal({msg}) {
  console.log(msg);

  const [open, setOpen] = React.useState(false);
  const { mutate: updatePost, isPending: isupdating } = useMutationCommunity(EditPost);
  const { mutate: deletePostMutation, isPending: isdeleting } = useMutationCommunity(deletePost);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





async function handleEditPost(values) {
  try {


    await updatePost([values,msg.id], {

          onSuccess: (data) => {

            toast.success("Post updated successfully!");
            setOpen(false);
            formik.resetForm();
          },
          onError: (error) => {
            toast.error(`Error: ${error.response?.data?.message || error.message}`);
          }
        });

  
  } catch (err) {
    console.error("Error updating post:", err);
  }
}

async function handleDelete(id) {
    try {


    await deletePostMutation(id, {

          onSuccess: (data) => {

            toast.success("Post deleted successfully!");
            
          },
          onError: (error) => {
            toast.error(`Error: ${error.response?.data?.message || error.message}`);
          }
        });

  
  } catch (err) {
    console.error("Error deleting post:", err);
  }
}



    const formik = useFormik({
      initialValues: {
        PostContent:msg?.PostContent|| "",
        newImageFile:msg.image?.image|| null,
        },
    
      onSubmit: handleEditPost
    });

  if (isupdating) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loading type="spin" color="#03543F" />
      </div>
    );
  }

  return (
    <div>
    
        <div className="flex justify-center">
        <Button onClick={handleOpen}  color="success">
           <FiEdit className="h-5 w-5" />
        </Button>
          <Button onClick={() => handleDelete(msg.id)}   color="error">
           <FiTrash2 className="h-5 w-5" />
        </Button>
        </div>
    
        
      

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
        


          


            <div className="mb-5">
              <label htmlFor="newImageFile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Image</label>
              <input
                type="file"
                name="newImageFile"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.size > 5000000) { // 5MB size limit
                    toast.error("File size is too large! Max 5MB.");
                    return;
                  }
                  formik.setFieldValue("newImageFile", file);
                }}
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="PostContent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Content</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.PostContent}
                id="PostContent"
                name="PostContent"
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




