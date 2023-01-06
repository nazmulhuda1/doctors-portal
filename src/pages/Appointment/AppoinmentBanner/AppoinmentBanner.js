
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png'

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header
            style={{
                background: `url(${bgChair})`,
                backgroundSize: 'cover',
                objectFit: 'cover',
                backgroundPosition: 'center'
            }}
            className='my-6 lg:py-20 py-10'>
            <div className="hero ">
                <div className="hero-content items-center flex-col lg:flex-row-reverse justify-around">
                    <img src={chair} alt="dentist chair" className="md:max-w-md max-w-xs rounded-lg shadow-2xl " />
                    <div className='mr-6 sm:w-full'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;