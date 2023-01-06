import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../componatent/Button/PrimaryButton';


const HomeBanner = () => {
    return (
        <div class="hero banner_bg py-14">
            <div className="hero-content flex-col gap-5 items-center justify-center lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl w-1/2" alt='img' />
                <div className='p-5'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;