// import React, { useEffect, useState } from 'react';
// import Service from './Service';
// // import './Service.css'
// const Services = () => {
//     const [services, setServices] = useState([]);
//     useEffect(() => {
//         fetch('https://radiant-cove-29383.herokuapp.com/services')
//             .then(res => res.json())
//             .then(data => setServices(data))
//     }, [])
//     return (
//         <div id="services">
//             <h2 className="text-primary mt-5">Our Product</h2>
//             <div className="service-container">
//                 {
//                     services.map(service => <Service
//                         key={service.id}
//                         service={service}

//                     ></Service>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Services;

import React, { useEffect, useState } from 'react';
import Service from './Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://radiant-cove-29383.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Services.length :{services.length}</h2>
            <div id="services">
                <h2 className="text-primary mt-5">Our Product</h2>
                <div className="service-container">

                    {services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;