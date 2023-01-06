import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews/Reviews";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from '../Routes/PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    }
])
export default router;