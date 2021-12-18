import React from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Profile.css'
const Profile = () => {
    const { user, logOut } = useAuth()
    const { email, displayName, photoURL } = user;
    return (
        <Container style={{ maxWidth: "26rem" }}>
            <Card className="border-0 shadow-lg mt-5 cards">
                <Card.Header as={"h4"} className="text-center border-0 mt-1">Profile</Card.Header>
                <Card.Body className="">
                    <div className="d-flex flex-column align-items-center text-center">
                        {!photoURL ? <img src="https://th.bing.com/th/id/R.3cc1919db5e86dcc286bda89f3da5bbe?rik=HA5%2bYb2LT0VaVg&pid=ImgRaw&r=0&sres=1&sresct=1" alt="..." className="rounded-circle" width="100" style={{ boxShadow: '0 8px 20px -4px #95abbb' }} />
                            :
                            <img src={photoURL} alt="..." className="rounded-circle" width="100" style={{ boxShadow: '0 8px 20px -4px #95abbb' }} />
                        }
                        <div className="mt-3">
                            <h4>{displayName}</h4>
                            <p style={{ height: '34px' }} className="text-secondary mb-1">{email}</p>
                        </div>
                        {user?.email ?
                            <Button className='main-button' onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link href="/login">Login</Nav.Link>}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;