import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/features/authSlice';
import { Header } from '../components/Navbar/Header';
import { Footer } from '../components/Footer/Footer';

const PublicLayout = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // Redirect to dashboard if user is already authenticated
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PublicLayout; 