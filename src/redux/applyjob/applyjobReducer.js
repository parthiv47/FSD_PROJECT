// jobApplicationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  applyjobdata: [],
  userApplyjobs:[],
  applicationError: null,
  applicationLoading: false,
};

const jobApplicationSlice = createSlice({
  name: 'jobApplication',
  initialState,
  reducers: {
    startApplying: (state) => {
      state.applyjobloading = true;
      state.applicationError = null;
     
    },
    appliedjob: (state) => {
      state.loading=false
      
    },
    applySuccess: (state,action) => {
      state.applyjobdata= action.payload;
      state.applyjobloading = false;
      state.applicationError = "";
    },
    applyFailure: (state, action) => {
        state.applyjobloading = true;
        state.applicationError = action.payload;
    },
    clearapplyError: (state, action) => {
      state.applyjobloading = false;
      state.applicationError=""
    },
    deleteSuccess:(state)=>{
      state.applicationError="";
      state.applicationLoading=false
    },
    userApplyjobs: (state,action)=>{
      state.applicationLoading=false;
      state.applicationError="";
      state.userApplyjobs=action.payload;
    }

  
  },
});

export const {
  startApplying,
  applySuccess,
  applyFailure,
  deleteSuccess,
  clearapplyError,
  userApplyjobs


} = jobApplicationSlice.actions;

export default jobApplicationSlice.reducer;
