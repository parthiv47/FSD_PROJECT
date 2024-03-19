// Assuming you have userSlice.js with userRequest, userSuccess, and userFail actions defined

// Import necessary modules
import axios from 'axios';
import { userRequest, userSuccess, userFail, userLogout, adduser } from './userReducer';

// Define the login thunk
export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(userRequest());

    // Set up the Axios request configuration
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Make the HTTP request to the login endpoint
    const response = await axios.post(
      'http://localhost:8090/api/v1/auth/login',
      credentials,
      config
    );

    // Extract the userToken from the response
    const userToken = response.data.jwtToken;

    // Set the Authorization header for future requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;

    // Store the userToken in localStorage
    localStorage.setItem('jwtToken',userToken);

    // Dispatch the userSuccess action with the received data
    dispatch(userSuccess(response.data));

  } catch (error) {
    // Dispatch the userFail action with the error message
    dispatch(userFail(error.response.data.message));
  }
};

// Define the logout thunk
export const logout = () => async (dispatch) => {
  try {
    

    // Remove the userToken from localStorage
    localStorage.removeItem('jwtToken');

    // Dispatch the userLogout action
    dispatch(userLogout());

  } catch (error) {
    // Handispatchdle any errors if neede
    dispatch(userFail(error.response.data.message));
  }
};

// Define the getUserDetail thunk
export const getUserDetail = () => async (dispatch) => {
  try {
    dispatch(userRequest());

    

    // Make the Axios API call
    const userToken = localStorage.getItem("jwtToken")
    console.log("userToken: " + userToken);
    const response = await axios.get("http://localhost:8090/api/v1/auth/userdetails" );

    // Dispatch the userSuccess action with the received data
    dispatch(userSuccess(response.data));
  } catch (error) {
    // Dispatch the userFail action with the error message
    dispatch(userFail(error.response ? error.response.data.message : 'Unknown error occurred'));
  }
};

export const signup=(data)=>async(dispatch)=>{
try {

    const response=await axios.post("http://localhost:8090/api/v1/auth/signup",data)
   console.log(response.data)
    dispatch(adduser());
} catch (error) {
    
    dispatch(userFail(error.response.data.message));
}

}

