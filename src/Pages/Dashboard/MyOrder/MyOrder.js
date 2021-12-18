import React, { useState } from 'react';
import { Alert, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Sidebar from '../Dashboards/Sidebar';

const MyOrder = ({ order }) => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const [success, setSuccess] = useState(false)
    const { _id, email, name, price, address, img } = order;
    const handleDelete = id => {
        const url = `https://radiant-cove-29383.herokuapp.com/dltOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire('Are You sure want to delete?')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
    }
    return (


        <div className="order pb-3 ">
            <img className="w-50" src={img} className="w-50" alt="" srcset="" />
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>Price:$ {price}</h4>
            <Link to={`/myOrders/${_id}`}></Link>
            <Button className="btn btn-info project-button" onClick={() => handleDelete(order._id)} >Delete</Button>

            {user?.payment ? <Button className="btn btn-info  project-button" onClick={price} variant="light">Paid</Button> :
                <Link to={`/payment/${_id}`}>  <Button className="btn btn-info  project-button">Payment</Button></Link>}
            {
                success && <Alert variant="success">Successfully purchse</Alert>
            }
        </div>

    );
};

export default MyOrder;