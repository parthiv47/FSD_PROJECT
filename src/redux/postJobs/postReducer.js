// postJobsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posting: false,
  postError: null,
  employerJobPosts: null,
  jobPosts:null,
};

const postJobsSlice = createSlice({
  name: 'PostJobs',
  initialState,
  reducers: {
    startPosting: (state) => {
      state.posting = true;
      state.postError = null;
    },
    postSuccess: (state, action) => {
      state.posting = false;
      state.postSuccess = true;
      state.jobPosts= action.payload; 
    },
    postFailure: (state, action) => {
      state.posting = false;
      state.postError = action.payload;
    },
    updatePostjob: (state) => {
      state.posting = false;
      state.postError = null;
    },
    addpost:(state)=>{
        state.loading=false;
    },
    clearPostError: (state) => {
      state.posting = false;
      state.postError = "";
    },
    deletePostjob: (state) => {
      state.posting = false;
      state.postError = "";
    },
    employerPostJobs: (state, action) => {
      state.posting = false;
      state.postSuccess = true;
      state.employerJobPosts = action.payload;
    },
  },
});

export const {
  startPosting,
  postSuccess,
  postFailure,
  updatePostjob,
  clearPostError,
  deletePostjob,
  employerPostJobs,
  addpost
} = postJobsSlice.actions;

export default postJobsSlice.reducer;
