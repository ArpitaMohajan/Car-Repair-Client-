import { isAdmin } from '@firebase/util';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import './Sidebar.css'
const Sidebar = () => {
    const { logOut, admin } = useAuth()
    return (
        <div>

            <Row className='w-100' sticky="right">
                <Col className='shadow-lg sidebar' md={2} sm={12}>
                    <div className='mt-4 text-center'>
                        <ul>

                            <>
                                <li>
                                    <i className='fas fa-user mx-2 ' />
                                    <Link to="/dashboards/profile">Profile</Link>
                                </li>
                                <li>
                                    <i className='fas fa-clipboard-list mx-2' />
                                    <Link to="/dashboards/myOrders">My Orders</Link>
                                </li>
                                <li>
                                    <i className='fas fa-user mx-2 ' />
                                    <Link to="/dashboards/review">Review</Link>
                                </li>


                            </>






                            {
                                admin && (
                                    <>

                                        <li>
                                            <i className='fas fa-user-plus mx-2'></i>
                                            <Link to="/dashboards/makeAdmin">
                                                Make Admin
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='fas fa-plus mx-2'></i>
                                            <Link to="/dashboards/addProduct">
                                                Add Service
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='fas fa-plus mx-2'></i>
                                            <Link to="/dashboards/manageOrder">
                                                Manage Order
                                            </Link>
                                        </li>


                                        <li>
                                            <i className='fas fa-cog mx-2'></i>
                                            <Link to="/dashboards/payment">
                                                Payment
                                            </Link>
                                        </li>

                                    </>
                                )
                            }
                        </ul>

                    </div>
                    <div style={{ marginTop: "50vh" }} className="text-center back-btn">
                        <Link to="/">
                            <Button variant="info" className="main-button">
                                Back Home
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col md={10} sm={12}>
                    <Outlet />
                </Col>
            </Row>

        </div>
    );
};

export default Sidebar;