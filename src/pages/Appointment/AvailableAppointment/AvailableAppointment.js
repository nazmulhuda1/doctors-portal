import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOPtion] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOPtion(data))
    }, []);
    return (
        <div className='py-20'>
            <div className="appointment_title text-center ">
                <h1 className='text-2xl text-secondary font-bold pb-5'>Available Services on {format(selectedDate, 'PP')}</h1>
                <p className='text-xl text-gray-400 text-semibold'>Please select a service.</p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {
                    appointmentOption.map(option => <AppointmentOptions
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;