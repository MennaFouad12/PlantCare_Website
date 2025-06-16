import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';

import { toast } from 'react-toastify';

import Loading from '../Loading';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import useMutationCommunity from '../../Hooks/useMutationCommunity';

import { FiEdit, FiTrash2, FiEye, FiChevronDown, FiSearch } from 'react-icons/fi';
import { deleteComment, EditComment } from '../../Apis/community';
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

export default function CommentBasicModal({Comment}) {


  const [open, setOpen] = React.useState(false);
  const { mutate: updateComment, isPending: isUpdatingComment } = useMutationCommunity(EditComment);
  const { mutate: deleteCommentMutation, isPending: isDeletingComment } = useMutationCommunity(deleteComment);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





async function handleEditComment(values) {
  try {


    await updateComment([values,Comment.id], {

          onSuccess: (data) => {

            toast.success("Comment updated successfully!");
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


    await deleteCommentMutation(id, {

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
        newCommentText:Comment?.comment|| "",
    
        },
    
      onSubmit: handleEditComment
    });

  // if (isupdating) {
  //   return (
  //     <div className="flex justify-center items-center h-60">
  //       <Loading type="spin" color="#03543F" />
  //     </div>
  //   );
  // }

  return (
    <div>
    
        <div className="flex justify-center">
        <Button onClick={handleOpen}  color="success">
           <FiEdit className="h-5 w-5" />
        </Button>
          <Button onClick={() => handleDelete(Comment.id)}   color="error">
           <FiTrash2 className="h-5 w-5" />
        </Button>
        </div>
    
        
      

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
        


          


            
            <div className="mb-5">
              <label htmlFor="newCommentText" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">enter new comment</label>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.newCommentText}
                id="newCommentText"
                name="newCommentText"
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




