import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated } from '../redux/features/authSlice';
import logo from "../assets/logo.jpeg";


const PrivateLayout = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <>
            <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b">
                {/* Logo + App Name */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Punjabi Pages" className="w-12 h-12 object-contain" />
                    <span className="text-2xl font-bold text-[--main-color]">
                        Punjabi Pages
                    </span>
                </div>

                {/* User Info + Logout Button */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-800 font-medium text-sm">
                        Welcome, {user?.name || 'User'}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="">
                <Outlet />
            </main>
        </>
    );
};

export default PrivateLayout;
