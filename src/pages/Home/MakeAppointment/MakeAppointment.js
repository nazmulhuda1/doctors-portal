import React from 'react';
import PrimaryButton from '../../../componatent/Button/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="  px-10 py-16 lg:px-0 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-around">
                    <img src={doctor} alt="" className=" mx-auto -mt-32 mb-0 hidden lg:block lg:w-4/5 lg:h-[500px] rounded-lg " />
                    <div className='lg:pr-10'>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className=" text-white text-3xl md:text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;