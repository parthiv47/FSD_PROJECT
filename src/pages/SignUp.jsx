import React, { useEffect, useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Box, Container, Typography, Avatar, createTheme, ThemeProvider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/user/userActions';
import toast from 'react-hot-toast';
import { clearError } from '../redux/user/userReducer';

const defaultTheme = createTheme();

export default function SignUp() {

  const dispatch=useDispatch();
  const [loading,SetLoading]=useState(false);
  const navigate=useNavigate();
  const initial={
    name: '',
    email: '',
    contactNumber: '',
    password: '',
    role: '',
  }
  const [user, setUser] = useState(initial);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const User =useSelector((state)=>state.user)

  console.log(User.user)
  useEffect(()=>{
    if(User.user)
    {
      toast.success("Signin successfully")
      navigate("/login")
     
    }
    else if(User &&  User.error)
    {
     toast.error(User.error)
      dispatch(clearError());
      SetLoading(false);
    }
  },[dispatch,User.user,User.error,navigate])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(user);
      dispatch(signup(user));
     
     setUser(initial)

      // Add your form submission logic here, e.g., dispatching an action
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!user.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
      isValid = false;
    }

    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (!user.role.trim()) {
      newErrors.role = 'Role is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              marginTop: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              marginTop: '2rem',
              backgroundColor: 'white',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={user.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                    autoComplete="tel"
                    value={user.contactNumber}
                    onChange={handleChange}
                    error={!!errors.contactNumber}
                    helperText={errors.contactNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={user.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth error={!!errors.role}>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={user.role}
                      label="Role"
                      onChange={handleChange}
                      name="role"
                    >
                      <MenuItem value="">Select Role</MenuItem>
                      <MenuItem value="Jobseeker">Jobseeker</MenuItem>
                      <MenuItem value="Employer">Employer</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              {loading  ? "Signing.." :" Signup"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signup" className='text-center' variant="body1" >
                    All Ready Account? Login
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
