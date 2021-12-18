import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
// import './Detailing.css'
const Details = () => {
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



    const { serviceId } = useParams()
    const navigate = useNavigate();
    const onSubmit = data => {


        console.log(data)
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire("Confirmed!", "", "success");
                    reset()
                }
                console.log(res)
            })
    };
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setBookingDetail(data))
    }, [])

    return (
        <div>
            <Row>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Col md={6} xs={12} className="pr-md-4">
                        <h1 className='ins'>This is About Detail page:{serviceId}</h1>
                        <h2>This:{bookingDetail.name}</h2>
                        <h3>This:${bookingDetail.price}</h3>
                        <img width="25%" src={bookingDetail?.img} alt="" />
                        <p ><h2 className="bold ins ">Description:</h2>{bookingDetail.description}</p>
                        <input className="in" type="submit" value="Submit" />

                    </Col>
                </form>
            </Row>

        </div >
    );
};
export default Details;