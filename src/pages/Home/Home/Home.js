import React from 'react';
import Helmet from '../../Shared/Helmet';
import HomeBanner from '../HomeBanner/HomeBanner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <Helmet title={'Home'}>
            <div className="mx-5">
                <HomeBanner />
                <InfoCards />
                <Services />
                <MakeAppointment />
                <Testimonials />
            </div>
        </Helmet>
    );
};

export default Home;