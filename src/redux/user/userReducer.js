// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  user: null,
  userRole: null,
  isLoading: false,
  error: null,
};

// Create a user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.userRole = action.payload.role;
      state.error = "";
    },
    adduser: (state, action) => {
        state.isLoading = false;
    },
    userRequest: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    userFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    },
    clearError: (state) => {
      state.error = null;
      state.isLoading = false;
    },
    userLogout: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = null;
      state.userRole = null;
    },
  },
});

// Export the actions and reducer
export const {
  userSuccess,
  userRequest,
  userFail,
  clearError,
  userLogout,
  adduser
} = userSlice.actions;
export default  userSlice.reducer;

