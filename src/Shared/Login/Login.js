import React, { useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;

        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <Container>

            {!isLoading && <form onSubmit={handleLoginSubmit}>
                {/* <h3 className="text-primary">Please{isLogin ? 'Login' : 'Register'} </h3> */}
                <div className="row mb-3 p-5">
                    <label htmlFor="Your Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnChange} type="email" name="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="Your Password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnChange} type="password" className="form-control" id="inputPassword3" name="password" required />
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">

                        {/* <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" /> */}

                        <Link to='/register'>New User? Please Registered</Link>
                        <br />
                        <br />
                        <button type="submit" className="btn btn-primary upload-btn">Login</button>

                    </div>
                </div>

                {/* <div className="row mb-3 text-danger">
                    {error}
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button> */}
            </form >}
            {
                isLoading && <Spinner animation="border" variant="secondary" />

            }
            {
                user?.email && <Alert variant="success">user registered successfully</Alert>
            }
            {
                authError && <Alert variant="danger">{authError}</Alert>
            }
            <p>---------------------</p>
            <button className='upload-btn' onClick={handleGoogleSignIn}>Google Sign in</button>
        </Container>
    );
};

export default Login;
