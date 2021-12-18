import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Jy6FeHBfbB6jcm8WkpUe6YFs6EzJ6FZj053lNvCsVNwg7uqYnKEZRYFHGZCI6pO4OwgTdDouon21HMTcJippuuQ00QMqGtnRz')
const Payment = () => {
    const { productId } = useParams();
    const [pro, setPro] = useState({})
    useEffect(() => {
        fetch(`https://radiant-cove-29383.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setPro(data))

    }, [productId])
    return (
        <div>
            <h3>Please Payment For: {pro.name} for {pro.price}</h3>
            {pro?.price && <Elements stripe={stripePromise}>
                <CheckOutForm
                    pro={pro}
                />
            </Elements>}

        </div>

    );
};

export default Payment;