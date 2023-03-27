import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { userSignInAction } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  title: yup.string('Enter job title').required('Job title is required'),
  description: yup
    .string('Enter job description')
    .required('Job description is required'),
  location: yup
    .string('Enter job location')
    .required('Job location is required'),
  salary: yup
    .string('Please enter salary for the job')
    .required('Salary is required'),
});

const CreateJobForm = () => {
  //   const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      location: '',
      salary: '',
      jobType: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      //  alert(JSON.stringify(values, null, 2));
      //   dispatch(userSignInAction(values));
      //   actions.resetForm();
    },
  });

  return (
    <>
      <Box
        sx={{
          height: '81vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography sx={{ mb: 2 }} variant="h5">
              Post a new job
            </Typography>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="title"
              label="Title"
              name="title"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Job Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="description"
              label="Description"
              name="description"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Job Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="salary"
              label="salary"
              name="salary"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Job Salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.salary && Boolean(formik.errors.salary)}
              helperText={formik.touched.salary && formik.errors.salary}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="location"
              label="location"
              name="location"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Job Location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
            />
            <TextField
              sx={{ mb: 2 }}
              fullWidth
              id="jobType"
              name="jobType"
              label="Job Type"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Job Type"
              value={formik.values.jobType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.jobType && Boolean(formik.errors.jobType)}
              helperText={formik.touched.jobType && formik.errors.jobType}
            />
            <Button fullWidth variant="contained" type="submit">
              Create
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateJobForm;
