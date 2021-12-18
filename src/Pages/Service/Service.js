import React from 'react';

import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, image } = service
    console.log(service)
    return (
        <div className="service pb-3">
            <div>
                <img src={`data:image/png;base64,${image}`} alt="" />
                <h3>Name:{name}</h3>
                <p className="px-3">Description:{description}</p>
                {/* <Link to={`/detail/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link> */}
            </div>
            <Link to='/dashboards'><button className='upload-btn'>Go Dashboard</button></Link>

        </div>




    );
};

export default Service;