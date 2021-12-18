import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useAuth()
    if (loading) {
        return (
            <div className="text-center">

            </div>
        );
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivateRoute;
