import React, { useContext } from 'react';
import { toast } from 'react-toastify'
import { AuthContext } from '../../Contexts/AuthProvider';


const BookingModal = ({ product, setProduct }) => {

    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, resalePrice } = product;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const cname = form.name.value
        const email = form.email.value
        const phone = form.phone.value

        const booking = {
            productName: name,
            customer: cname,
            price: resalePrice,
            email,
            phone,
        }

        console.log(booking);

        fetch('https://assignment-twelve-server-nine.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null)
                    toast.success('booking confirmed')
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input type="text" disabled value={resalePrice} className="input w-full input-bordered " />

                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input type="number" name='phone' placeholder="Phone Number" className="input w-full input-bordered" />

                        <br />

                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;