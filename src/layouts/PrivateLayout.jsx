import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectIsAuthenticated } from '../redux/features/authSlice';
import logo from "../assets/logo.jpeg";
import SideBar from '../components/Dashboard/SideBar';

const PrivateLayout = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // const handleLogout = () => {
    //     dispatch(logout());
    //     navigate('/');
    // };

    return (
        <div className="h-screen flex flex-col">

            {/* Header - sticky to the top */}
            <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between border-b sticky top-0 z-30">
                {/* Logo + App Name */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Punjabi Pages" className="w-12 h-12 object-contain" />
                    <span className="text-2xl font-bold text-[--main-color]">
                        Punjabi Pages
                    </span>
                </div>

                {/* User Info + Logout */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-800 font-medium text-sm">
                        Welcome, {user?.name || 'User'}
                    </span>
                    {/* <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition duration-200"
                    >
                        Logout
                    </button> */}
                </div>
            </header>
            {/* Sidebar - sticky to the left */}
            <div className="flex-1 flex overflow-auto">
                <SideBar />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PrivateLayout;
