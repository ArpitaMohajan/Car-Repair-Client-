

import React, { useEffect, useState } from "react";


import '../Test.css'
import Testimonial from "./Testimonial";


const Testimonials = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div className="testimonials">
            <h2 className='text-primary mt-5'>Review</h2>
            <div className='service-container'>
                {
                    products.map(product => <Testimonial
                        key={product.id}
                        product={product}

                    ></Testimonial>)
                }
            </div>

        </div>
    );
};

export default Testimonials;