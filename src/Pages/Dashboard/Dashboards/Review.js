import axios from 'axios';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const { displayName, photoURL } = user;
    const { register, handleSubmit, reset } = useForm();

    const navigation = useNavigate()


    const onSubmit = data => {
        console.log(data)
        axios.post('https://radiant-cove-29383.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire('added successfully')
                    reset()
                }
            })


    }
    return (
        <div className='testimonials'>
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="rate"
                    placeholder="rate"
                    type="number"
                    {...register("rate", { required: true, maxLength: 5 })}
                />
                <br />

                <input
                    className="submit-btn btn  mt-3 upload-btn"
                    type="submit"
                    value="Register"
                />
            </form>
            <div>
                <Link to='/dashboards'><button className='upload-btn'>Go Dashboard</button></Link>

            </div>
        </div>
    );
};

export default Review;