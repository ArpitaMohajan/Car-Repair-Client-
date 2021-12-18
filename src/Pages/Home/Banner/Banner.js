import React from 'react';
import Typical from 'react-typical'
import './Banner.css'
const Banner = () => {
    return (
        <div className="header-container ">
            <div className="">
                <div className="row d-flex header align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h3 className="title">
                            HERE IS OUR  <br /> CAR REPAIR SYSTEM
                        </h3>

                        <div className="profile-details-role">
                            <span className="primary-text title">
                                {""}
                                <h4>
                                    {""}
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "  YOU CAN ALSO REPAIR YOUR CAR", 1000,
                                            "Fixing Car For Over 25 Years", 1000,


                                        ]}

                                    >

                                    </Typical>


                                </h4>


                            </span>
                        </div>

                        <div className='profile-options'>


                            <button className="btn highlighted-btn btn-info ">
                                {""}

                                About   {""}</button>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;