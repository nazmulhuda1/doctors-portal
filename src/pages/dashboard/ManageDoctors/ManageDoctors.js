import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfimationModal from '../../Shared/ConfimationModale/ConfimationModal';
import Loaders from '../../Shared/Loaders';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    // cancle modale
    const closeModal = () => {
        setDeletingDoctor(null)
    }

    const { data: doctors = [], isLoading, refetch } = useQuery({
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
    // delete modal
    const handleDelete = (doctor) => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`doctor ${doctor.name} deleted successfully`)
                }
            })

    };

    // Loading
    if (isLoading) {
        return <Loaders />
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Manage Doctors {doctors.length}</h1>

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
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmationModal" className="btn btn-error btn-sm">delete</label>

                                    </th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor &&
                <ConfimationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingDoctor.name}, it cannot be undone `}
                    successAction={handleDelete}
                    dataModal={deletingDoctor}
                    closeModal={closeModal}
                ></ConfimationModal>
            }
        </div>
    );
};

export default ManageDoctors;