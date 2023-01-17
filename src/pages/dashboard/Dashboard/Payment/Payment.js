import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loaders from '../../../Shared/Loaders';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, patient, price, appointmentDate, slot } = booking;
    if (navigation.state === "loading") {
        return <Loaders></Loaders>
    }
    const stripePromise = loadStripe(process.env.REACT_APP_strips_pk)
    console.log(stripePromise);
    return (
        <div className='w-96 border p-5 rounded-xl shadow'>
            <div>
                <h3 className='text-lg font-bold text-success mb-3'>Hello, {patient} </h3>
                <h5 className="text-xl font-bold mb-3">Payment for {treatment}</h5>
                <p className="text-lg text-gray-600 mb-3">Please pay <strong>${price}</strong> for your appointment on <span className='text-yellow-500'> {appointmentDate}</span> at {slot}</p>
            </div>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;