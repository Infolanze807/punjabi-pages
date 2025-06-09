import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/features/authSlice';

const PublicLayout = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // Redirect to dashboard if user is already authenticated
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default PublicLayout; 