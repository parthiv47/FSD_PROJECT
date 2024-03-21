
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from './routes/route';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';
import SignUp from './pages/SignUp';

import Header from './components/Header';

import AdminDashboard from './components/AdminDashboard';
import Login from './pages/Login';
import AppLyJob from './components/ApplyJob';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobPostById, getAllPostJobs, getAlljobposts } from './redux/postJobs/postJobsActions';
import { getUserDetail } from './redux/user/userActions';
import Postedjob from './components/PostedJob';




function App() {
  

  
const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.jwtToken)
       dispatch(getUserDetail())
    
    dispatch(getAlljobposts())
   
   
 
  },[dispatch])
  return (
     <>
     <Header/>
      <Routes>

        <Route path="/"element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/applyjob" element={<AppLyJob />} />
        <Route path="/findjob" element={<AllPosts />} />
        <Route path="/creatpost" element={<CreatePost />} />
        <Route path="/employeedashboard/:id" element={<AdminDashboard/>} />
        
      </Routes>
      </>
  );
}

 export default App;
// <Route path="/" element={<AllPosts />} />