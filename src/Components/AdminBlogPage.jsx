// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Typography,
//   Modal,
//   TextField,
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import { useQueryClient } from '@tanstack/react-query';
// import useMutationBlogPageProduct from '../Hooks/useMutationBlogPageProduct';
// import {
//   addBlogPageProduct,
//   deleteBlogPageProduct,
//   updateBlogPageProduct,
// } from '../Apis/Admin/blog';
// import Loading from './Loading';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   borderRadius: '8px',
//   boxShadow: 24,
//   p: 4,
// };

// export default function AdminBlogPage({ product = null }) {
//   const [open, setOpen] = useState(false);
//   const queryClient = useQueryClient();
//   const isEdit = Boolean(product);

//   const { mutate: saveMutation, isPending } = useMutationBlogPageProduct({
//     mutationFn: (formData) => {
//       if (isEdit) {
//         if (!product?.id) {
//           toast.error('Blog ID is missing! Cannot update.');
//           return;
//         }
//         console.log("Updating blog with ID:", product.id);
//         return updateBlogPageProduct(product.id, formData);
//       }
//       return addBlogPageProduct(formData);
//     },
//     onSuccess: () => {
//       toast.success(isEdit ? 'Blog updated successfully!' : 'Blog added successfully!');
//       queryClient.invalidateQueries(['BlogPageProduct']);
//       handleClose();
//     },
//     onError: (err) => {
//       console.error("❌ Mutation error:", err);
//       toast.error(err?.response?.data?.message || 'Something went wrong!');
//     },
//   });

//   const { mutate: deleteMutation, isPending: isDeleting } = useMutationBlogPageProduct({
//     mutationFn: () => {
//       if (!product?.id) {
//         toast.error('Blog ID is missing! Cannot delete.');
//         return;
//       }
//       console.log("Deleting blog with ID:", product.id);
//       return deleteBlogPageProduct(product.id);
//     },
//     onSuccess: () => {
//       toast.success('Blog deleted successfully!');
//       queryClient.invalidateQueries(['BlogPageProduct']);
//     },
//     onError: (err) => {
//       console.error("❌ Delete error:", err);
//       toast.error(err?.response?.data?.message || 'Delete failed!');
//     },
//   });

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     description: Yup.string().required('Description is required'),
//     image: Yup.mixed().test('fileRequired', 'Image is required', function (value) {
//       if (!isEdit && !value) return false;
//       return true;
//     }),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: product?.name || '',
//       description: product?.description || '',
//       image: null,
//     },
//     validationSchema,
//     enableReinitialize: true,
//     onSubmit: (values) => {
//       console.log("Form values:", values);
//       const formData = new FormData();
//       formData.append('name', values.name);
//       formData.append('description', values.description);
//       if (values.image) {
//         formData.append('imageFile', values.image);
//       }
//       saveMutation(formData);
//     },
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     formik.resetForm();
//   };

//   const handleDelete = () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
//     if (confirmDelete) {
//       console.log("Delete confirmed for blog ID:", product.id);
//       deleteMutation();
//     }
//   };

//   return (
//     <div className="flex gap-3 items-center justify-center">
//       <Button
//         onClick={handleOpen}
//         variant="contained"
//         color={isEdit ? 'success' : 'success'}
//       >
//         {isEdit ? 'Edit' : 'Add Blog'}
//       </Button>
      

//       {isEdit && (
//         <Button
//           onClick={handleDelete}
//           variant="contained"
//           color="error"
//           disabled={isDeleting}
//         >
//           {isDeleting ? <Loading /> : 'Delete'}
//         </Button>
//       )}

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="blog-modal-title"
//         aria-describedby="blog-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="blog-modal-title" variant="h6" gutterBottom>
//             {isEdit ? 'Edit Blog Post' : 'Add New Blog Post'}
//           </Typography>

//           <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
//             <TextField
//               fullWidth
//               label="Name"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               error={formik.touched.name && Boolean(formik.errors.name)}
//               helperText={formik.touched.name && formik.errors.name}
//               margin="normal"
//             />

//             <TextField
//               fullWidth
//               label="Description"
//               name="description"
//               multiline
//               rows={4}
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               error={formik.touched.description && Boolean(formik.errors.description)}
//               helperText={formik.touched.description && formik.errors.description}
//               margin="normal"
//             />

//             <div>
//               <label className="block mb-1">Image</label>
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={(e) => {
//                   const file = e.currentTarget.files[0];
//                   console.log("Selected file:", file);
//                   formik.setFieldValue('image', file);
//                 }}
//               />
//               {formik.touched.image && formik.errors.image && (
//                 <Typography color="error" variant="body2">
//                   {formik.errors.image}
//                 </Typography>
//               )}
//             </div>

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               color="success"
//               disabled={isPending}
//               sx={{ mt: 2 }}
//             >
//               {isPending ? <Loading /> : isEdit ? 'Update' : 'Submit'}
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// }


















































import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import useMutationBlogPageProduct from '../Hooks/useMutationBlogPageProduct';
import {
  addBlogPageProduct,
  deleteBlogPageProduct,
  updateBlogPageProduct,
} from '../Apis/Admin/blog';
import Loading from './Loading';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function AdminBlogPage({ product = null }) {
  const [existingImage, setExistingImage] = useState(product?.image || null);

  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const isEdit = Boolean(product);

  const { mutate: saveMutation, isPending } = useMutationBlogPageProduct({
    mutationFn: (formData) => {
      if (isEdit) {
        if (!product?.id) {
          toast.error('Blog ID is missing! Cannot update.');
          return;
        }
        return updateBlogPageProduct(product.id, formData);
      }
      return addBlogPageProduct(formData);
    },
    onSuccess: () => {
      toast.success(isEdit ? 'Blog updated successfully!' : 'Blog added successfully!');
      queryClient.invalidateQueries(['BlogPageProduct']);
      handleClose();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Something went wrong!');
    },
  });

  const { mutate: deleteMutation, isPending: isDeleting } = useMutationBlogPageProduct({
    mutationFn: () => {
      if (!product?.id) {
        toast.error('Blog ID is missing! Cannot delete.');
        return;
      }
      return deleteBlogPageProduct(product.id);
    },
    onSuccess: () => {
      toast.success('Blog deleted successfully!');
      queryClient.invalidateQueries(['BlogPageProduct']);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Delete failed!');
    },
  });

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.mixed().test('fileRequired', 'Image is required', function (value) {
      if (!isEdit && !value) return false;
      return true;
    }),
  });

  const formik = useFormik({
    initialValues: {
      name: product?.name || '',
      description: product?.description || '',
      image: product?.image || null,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      if (values.image) {
        formData.append('imageFile', values.image);
      }
      saveMutation(formData);
    },

    

  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const handleDelete = () => {
    console.log("Delete triggered for blog ID:", product.id);
    
      deleteMutation();
    
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ bgcolor: '#046C4E' }}
        color="success"
      >
        {isEdit ? 'Edit' : 'Add Blog'}
      </Button>

      {isEdit && (
      <Button
        onClick={handleDelete}
        variant="contained"
        color="error"
        disabled={isDeleting}
      >
        {isDeleting ? <Loading /> : 'Delete'}
      </Button>
)}


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="blog-modal-title"
        aria-describedby="blog-modal-description"
      >
        <Box sx={style}>
          <Typography id="blog-modal-title" variant="h6" gutterBottom>
            {isEdit ? 'Edit Blog Post' : 'Add New Blog Post'}
          </Typography>

          <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              margin="normal"
            />

            <div>
              <label className="block mb-1">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  formik.setFieldValue('image', file);
                }}
              />
              {formik.touched.image && formik.errors.image && (
                <Typography color="error" variant="body2">
                  {formik.errors.image}
                </Typography>
              )}

              {isEdit && !formik.values.image && product?.imageUrl && (
                <Box mt={2}>
                  <Typography variant="body2" color="textSecondary">
                    Current Image:
                  </Typography>
                  <img
                    src={product.imageUrl}
                    alt="Current"
                    style={{
                      width: '100%',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      marginTop: '8px',
                      borderRadius: '4px',
                    }}
                  />
                </Box>
              )}
            </div>



          



            <Button
              type="submit"
              variant="contained"
              fullWidth
            
              disabled={isPending}
              sx={{ mt: 2, bgcolor: '#046C4E' }}
            >
              {isPending ? <Loading /> : isEdit ? 'Update' : 'Submit'}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}










































