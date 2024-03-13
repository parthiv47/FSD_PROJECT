
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

function App() {
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
        <Route path="/employeedashboard" element={<AdminDashboard/>} />
      </Routes>
      </>
  );
}

 export default App;
// <Route path="/" element={<AllPosts />} />