import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashboardsHeader = () => {
    const { logOut } = useAuth()
    return (
        <>
            <Navbar expand="lg" className="shadow-lg">
                <Container>
                    <Navbar.Brand className="nav-logo" href="#home">
                        Car Repair
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link>
                                <button onClick={logOut} className="logout-btn">
                                    Log Out
                                </button>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default DashboardsHeader;