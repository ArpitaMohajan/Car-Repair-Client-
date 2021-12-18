import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="text-info">Car Repaire Service Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/home#home" className="text-info">Home</Nav.Link>
                        <Nav.Link href="/services" className="text-info">Services</Nav.Link>
                        <Nav.Link href="/home#contact" className="text-info text-bold" >Contact</Nav.Link>
                        <Nav.Link href="/home#addProducts" className="text-info text-bold" >All Product</Nav.Link>

                        <Nav.Link href="/dashboards" className="text-info text-bold" >Dashboard</Nav.Link>


                        {user?.email ?
                            <Button className='text-info text-bold' onClick={logOut} >Logout</Button> :
                            <Nav.Link className="text-info text-bold" href="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;