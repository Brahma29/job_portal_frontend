import { Avatar, Box, Checkbox, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LockClockOutlined from '@mui/icons-material/LockClockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUpAction } from '../redux/actions/userAction';
import { Link, useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .required('First Name is required'),
  lastName: yup
    .string('Enter your last name')
    .required('Last Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEmployer, setIsEmployer] = useState('0');
  const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);
  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo.role === 1) {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    }
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      //  alert(JSON.stringify(values, null, 2));
      let newValues = { ...values, role: isEmployer };
      console.log({ newValues });
      dispatch(userSignUpAction(newValues));
      actions.resetForm();
    },
  });

  const CheckBoxLabel = { inputProps: { 'aria-label': 'I am an employer' } };
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: 'auto',
          paddingY: 10,
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
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', mb: 3 }}>
              <LockClockOutlined />
            </Avatar>
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="firstName"
              name="firstName"
              label="firstName"
              type="firstName"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="lastName"
              name="lastName"
              label="lastName"
              type="lastName"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={{ mb: 2 }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                alignSelf: 'start',
                mb: 1,
              }}
            >
              <Checkbox
                name="role"
                {...CheckBoxLabel}
                onChange={(e) => setIsEmployer(e.target.checked ? '1' : '0')}
                size="small"
              />
              <Typography>I am an employer</Typography>
            </Box>
            <Typography
              component="span"
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                alignSelf: 'start',
                mb: 1,
              }}
            >
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
            <Button fullWidth variant="contained" type="submit">
              Register
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SignUp;
