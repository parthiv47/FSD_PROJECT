// jobpostsMiddleware.js

import axios from 'axios';
import { startPosting, postSuccess, postFailure, updatePostjob, clearPostError, deletePostjob, employerPostJobs } from './postReducer';
import { addpost } from './postReducer';

// Replace this with your actual API base URL


// Add Post Job Middleware
export const addPostJob = (postData) => async (dispatch) => {
  try {
    dispatch(startPosting());
    const response = await axios.post("http://localhost:8090/api/v1/jobposts", postData);
    dispatch(addpost());
  } catch (error) {
    dispatch(postFailure(error.response.data.message));
  }
};

// Update Job Post by ID Middleware
export const updateJobPostById = (postId, updatedData) => async (dispatch) => {
  try {
    dispatch(startPosting());
    const response = await axios.put(`http://localhost:8090/api/v1/jobposts/${postId}`, updatedData);
    dispatch(updatePostjob());
  } catch (error) {
    dispatch(postFailure(error.response.data.message));
  }
};

// Delete Job Post by ID Middleware
export const deleteJobPostById = (postId) => async (dispatch) => {
  try {
    dispatch(startPosting());
    const response = await axios.delete(`http://localhost:8090/api/v1/jobposts/${postId}`);
    dispatch(deletePostjob());
  } catch (error) {
    dispatch(postFailure(error.response.data.message));
  }
};

// Get All Post Jobs Middleware
export const getAlljobposts = () => async (dispatch) => {
  try {
    dispatch(startPosting());
    const response = await axios.get('http://localhost:8090/api/v1/jobposts/all');
    console.log(response.data)
    dispatch(postSuccess(response.data));
  } catch (error) {
    dispatch(postFailure(error.response.data.message));
  }
};

export const getAllJobPostById = (id) => async (dispatch) => {
    try {
      dispatch(startPosting());
      const response = await axios.get(`http://localhost:8090/api/v1/jobposts/${id}`);
      dispatch(employerPostJobs(response.data));
    } catch (error) {
      dispatch(postFailure(error.response.data.message));
    }
  };