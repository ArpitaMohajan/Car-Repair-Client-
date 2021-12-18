import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading, admin } = useAuth()

    if (loading) {
        return (
            <div className="text-center">
                <img src="https://th.bing.com/th/id/R.fd5a137d4cc43657449836c511c422e1?rik=wHeSUkbbLd210Q&pid=ImgRaw&r=0" alt="" />
            </div>
        );
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};


export default AdminRoute;