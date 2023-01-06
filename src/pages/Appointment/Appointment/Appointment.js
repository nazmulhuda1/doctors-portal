import React, { useState } from 'react';
import Helmet from '../../Shared/Helmet'
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <Helmet title={'Appointment'}>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointment
                selectedDate={selectedDate}
            />
        </Helmet>
    );
};

export default Appointment;