import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const { data: appointmentOption = [], refetch } = useQuery({
        queryKey: ['appointmentOpptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOpptions?date=${date}`)
            .then(res => res.json())
    });



    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOpptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOPtion(data))
    // }, []);
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
                    refetch={refetch}
                ></BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;