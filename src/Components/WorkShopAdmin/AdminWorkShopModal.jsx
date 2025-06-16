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

import useMutationWorkShop from '../../Hooks/useMutationWorkShop';
import {
  addWorkShop,
  updateWorkShop,
  deleteWorkShop,
} from '../../Apis/Admin/workshop';
import Loading from '../Loading';

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

export default function AdminWorkShopModal({ workshop = null, refetch }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const isEdit = Boolean(workshop);

  const { mutate: saveMutation, isPending } = useMutationWorkShop({
    mutationFn: (formData) => {
      if (isEdit) {
        if (!workshop?.id) {
          toast.error('Workshop ID is missing! Cannot update.');
          return;
        }
        return updateWorkShop(workshop.id, formData);
      }
      return addWorkShop(formData);
    },
    onSuccess: async (data) => {
      toast.success('Workshop added successfully!');
      queryClient.setQueryData(['workshops'], (old) => [...(old || []), data]);
      handleClose();
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Something went wrong!');
    },
  });

  const { mutate: deleteMutation, isPending: isDeleting } = useMutationWorkShop({
    mutationFn: () => {
      if (!workshop?.id) {
        toast.error('Workshop ID is missing! Cannot delete.');
        return;
      }
      return deleteWorkShop(workshop.id);
    },
    onSuccess: async () => {
      toast.success('Workshop deleted successfully!');
      if (refetch) await refetch();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || 'Delete failed!');
    },
  });

  const validationSchema = Yup.object({
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required'),
    date: Yup.string().required('Date is required'),
    provider: Yup.string().required('Provider is required'),
    capacity: Yup.number().required('Capacity is required').min(1, 'Capacity must be at least 1'),
  });

  const formik = useFormik({
    initialValues: {
      description: workshop?.description || '',
      location: workshop?.location || '',
      date: workshop?.date || '',
      provider: workshop?.provider || '',
      capacity: workshop?.capacity || '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('description', values.description);
      formData.append('location', values.location);
      formData.append('date', values.date);
      formData.append('provider', values.provider);
      formData.append('capacity', values.capacity);

      console.log("Submitting formData:", Object.fromEntries(formData.entries()));

      saveMutation(formData);
    }
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const handleDelete = () => {
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
        {isEdit ? 'Edit ' : 'Add Workshop'}
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
        aria-labelledby="workshop-modal-title"
        aria-describedby="workshop-modal-description"
      >
        <Box sx={style}>
          <Typography id="workshop-modal-title" variant="h6" gutterBottom>
            {isEdit ? 'Edit Workshop' : 'Add New Workshop'}
          </Typography>

          <form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="datetime-local"
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Provider"
              name="provider"
              value={formik.values.provider}
              onChange={formik.handleChange}
              error={formik.touched.provider && Boolean(formik.errors.provider)}
              helperText={formik.touched.provider && formik.errors.provider}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Capacity"
              name="capacity"
              type="number"
              value={formik.values.capacity}
              onChange={formik.handleChange}
              error={formik.touched.capacity && Boolean(formik.errors.capacity)}
              helperText={formik.touched.capacity && formik.errors.capacity}
              margin="normal"
            />
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
















