import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../../../componatent/Button/PrimaryButton';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-6">
                {
                    servicesData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <div className=" p-10  lg:p-20 ">
                <div className="card card-side grid md:grid-cols-2 gap-5 items-center justify-center ">
                    <figure>
                        <img className='h-[450px] rounded-2xl' src={treatment} alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl md:text-4xl lg:text-5xl font-bold leading-7">Exceptional Dental Care, on Your Terms</h2>
                        <p className='py-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="inline-block">
                            <PrimaryButton>GET STARTED</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;