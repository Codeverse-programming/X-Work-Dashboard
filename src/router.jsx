import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx';
import Post from './Pages/Post/Post.jsx';
import Users from './Pages/Users/Users.jsx';
import Otp from './Pages/OTP/Otp.jsx';


export const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/post', element: <Post /> },
    { path: '/users', element: <Users /> },
    { path: '/otp', element: <Otp /> },
])