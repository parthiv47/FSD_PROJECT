import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user/userReducer.js'
import jobApplicationSlice from './applyjob/applyjobReducer.js'
import postJobsSlice from './postJobs/postReducer.js'

export const store = configureStore({
    reducer:{
        user:userSlice,
        applyPost:jobApplicationSlice,
        postJobs:postJobsSlice
    }
})