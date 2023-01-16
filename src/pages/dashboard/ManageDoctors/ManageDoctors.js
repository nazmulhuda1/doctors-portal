import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loaders from '../../Shared/Loaders';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    // Loading
    if (isLoading) {
        return <Loaders />
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Manage Doctors</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={doctor.image} alt='doctor' />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                            <div className="text-sm opacity-50">{doctor.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {doctor.specialty}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;