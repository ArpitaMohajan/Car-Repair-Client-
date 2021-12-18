import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {

        const user = { email }
        fetch('https://radiant-cove-29383.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())

            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    console.log(data)

                    setSuccess(true)
                }

            })
    }
    return (
        < div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <div className="row mb-3">
                    <label htmlFor="Your Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnBlur} type="email" name="email" className="form-control" id="inputEmail3" required />
                        <Button variant="success" className='main-button' type="submit">Make Admin</Button>

                    </div>

                </div>
            </form>

            {success && Swal.fire("Make Admin  successfully")}
            <div>
                <Link to='/dashboards'><button className='upload-btn'>Go Dashboard</button></Link>

            </div>
        </div>
    );
};

export default MakeAdmin;