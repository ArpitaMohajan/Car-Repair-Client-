import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import './Detailing.css'
const Detailing = ({ order }) => {
    const { _id, email, name, price, address, img } = order;
    const [bookingDetail, setBookingDetail] = useState({})
    const { register, handleSubmit, reset } = useForm()

    const { user } = useAuth()

    const initialInfo = { prodName: user.displayName, email: user.email, price: user.price }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }



    const { productId } = useParams()
    const navigate = useNavigate();
    const onSubmit = data => {

        console.log(data)
        axios.post('https://radiant-cove-29383.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {

                    reset()
                    Swal.fire("Confirmed!", "", "success");
                }
                console.log(res)
            })
    };
    useEffect(() => {
        fetch(`https://radiant-cove-29383.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setBookingDetail(data))
    }, []);

    return (
        <div className='add-detail'>
            <Row>
                <h1 className='ins'>This is About Detail page:{productId}</h1>

                <Col md={6} xs={12} className="pr-md-4">
                    <h2>This:{bookingDetail.name}</h2>
                    <h3>This:{bookingDetail.price}</h3>
                    <img width="25%" src={bookingDetail?.img} alt="" />
                    <p ><h2 className="bold ins">Description:</h2>{bookingDetail.description}</p>

                </Col>
                <Col md={6} xs={12} className="pr-md-4">
                    <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 80 })} placeholder="name" defaultValue={user.displayName} onBlur={handleOnBlur} />

                        <input {...register("email")} placeholder="email" defaultValue={user.email} onBlur={handleOnBlur} />

                        <input {...register("address")} placeholder="address" onBlur={handleOnBlur} />


                        <input type="number" {...register("phone number")} placeholder="phone number" onBlur={handleOnBlur} />

                        <input type="number" {...register("price")} placeholder="price" defaultValue={user.price} />

                        <input {...register("img")} placeholder="img" />


                        <input className="in" type="submit" value="Submit" />

                    </form>
                    <Link to={`/payment/${_id}`}>
                        <Button className="btn btn-info project-button">Book Now</Button></Link>
                </Col>
            </Row>

        </div>
    );
};
export default Detailing;