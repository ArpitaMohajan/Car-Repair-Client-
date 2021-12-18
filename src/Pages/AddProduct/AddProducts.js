import React, { useEffect, useState } from 'react';

import './AddProducts.css'
import AllProduct from './AllProduct';
const AddProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (

        <div >

            <h2 className='text-info mt-5'>All Product</h2>
            <div className='service-container'>
                {
                    products.map(product => <AllProduct
                        key={product.id}
                        product={product}

                    ></AllProduct>)
                }
            </div>

        </div>
    );
};

export default AddProducts;