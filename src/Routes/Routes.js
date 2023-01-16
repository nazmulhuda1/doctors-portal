import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddDoctor from "../pages/dashboard/AddDoctor/AddDoctor";
import AllUser from "../pages/dashboard/AllUser/AllUser";
import ManageDoctors from "../pages/dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../pages/dashboard/MyAppointment/MyAppointment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews/Reviews";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from '../Routes/PrivateRoute'
import AdminRoute from "./AdminRoute";

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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor> </AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute>
            },
        ]
    }
])
export default router;