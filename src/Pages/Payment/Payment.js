
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkoutform from './Checkoutform';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk)


const Payment = () => {
    const booking = useLoaderData()


    const { productName, price } = booking



    return (
        <div>
            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for {productName}</p>
            <div className='w-96 my-12'>
                {/* <Elements stripe={stripePromise}>
                    <Checkoutform
                        booking={booking}
                    />
                </Elements> */}
                <Elements stripe={stripePromise}>
                    <Checkoutform
                        booking={booking}
                    >
                    </Checkoutform>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;