import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Helmet from '../pages/Shared/Helmet';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    return (
        <Helmet title={'Home'}>
            <Navbar />
            <Outlet />
            <Footer />
        </Helmet>
    );
};

export default Main;