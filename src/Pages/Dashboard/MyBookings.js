import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Shared/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email} `

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Bookings</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.customer}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td>{booking.phone}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button
                                            className='btn btn-primary btn-sm'
                                        >pay</button></Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;