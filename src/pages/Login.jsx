import React, { useEffect, useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Box, Container, Typography, Avatar, createTheme, ThemeProvider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/user/userActions';
import { clearError } from '../redux/user/userReducer';
import toast from 'react-hot-toast';


const defaultTheme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const [loading,SetLoading]=useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
   const User =useSelector((state)=>state.user)
   console.log(User.error)
  useEffect(()=>{
    if(User.user)
    {
      toast.success("login successfully")
      navigate("/")
     
    }
    else if(User.error)
    {
     toast.error("Invalid crediantls")
      dispatch(clearError());
      SetLoading(false);
    }
  },[dispatch,User.user,User.error,navigate])

  const handleChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.email || !user.password) {
      setErrors({
        email: user.email ? '' : 'Email is required',
        password: user.password ? '' : 'Password is required',
      });
      return;
    }
    SetLoading(true)
    dispatch(login(user))
    
    setUser({
      email: '',
      password: '',
    });
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
              display: 'flex',
              flexDirection: 'column',
              marginTop: '2rem',
              alignItems: 'center',
              padding: '20px',
              backgroundColor: 'white',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={!!errors.password}
                    helperText={errors.password}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               >
               {loading  ? "loging.." :" Login"}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signup" className="text-center" variant="body1">
                    Not Registered? SignUp
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
