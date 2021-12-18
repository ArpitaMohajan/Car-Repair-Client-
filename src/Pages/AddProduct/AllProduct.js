import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './AllProduct.css'
const AllProduct = ({ product }) => {
    const { user } = useAuth()
    const { _id, name, price, description, img } = product;
    return (
        <div className='service pb-3  '>
            <div className="contain">
                <img src={img} alt="" />
                <h3 >{name}</h3>
                <h5>Price:{price}</h5>
                <p className='px-3 text-start'>{description}</p>


                {/* <Link to={`/detailing/${_id}`}>
                    <button className="btn btn-warning">Book Now</button>
                </Link> */}
                {/* <Link to={`/detailing/${_id}`}>
                    <button className="btn btn-info project-button">Book Now</button>
                </Link> */}
                {user?.payment ? <Button className="btn btn-info  project-button" onClick={price} variant="light">Paid</Button> :
                    <Link to={`/payment/${_id}`}> <Button className="btn btn-info project-button">Book Now</Button></Link>}
            </div>
        </div>
    );
};

export default AllProduct;