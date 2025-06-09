import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/features/authSlice';
// import { Header } from '../components/Navbar/Header';
// import { Footer } from '../components/Footer/Footer';

const PrivateLayout = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default PrivateLayout; 