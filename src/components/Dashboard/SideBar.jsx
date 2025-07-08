import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg';
import {
    Menu,
    X,
    User,
    PlusSquare,
} from "lucide-react";
import { Typography } from "@material-tailwind/react";
import { logout } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const navItems = [
        {
            name: "My Business",
            path: "/dashboard",
            icon: <User className="w-4 h-4" />,
        },
        {
            name: "Add Business",
            path: "/addProfile",
            icon: <PlusSquare className="w-4 h-4" />,
        },
    ];

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };


    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-30 p-2 bg-blue-600 text-white rounded-md shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <aside
                className={`fixed top-0 left-0 w-64 bg-white border-r border-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:static md:z-auto`}
            >
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 md:hidden">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Punjabi Pages" className="w-10 h-10 rounded-xl object-cover shadow-sm border-2 border-white" />
                        <div>
                            <Typography variant="h5" className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Punjabi Pages
                            </Typography>
                            <p className="text-xs text-gray-500">Dashboard</p>
                        </div>
                    </div>

                    {/* Close button for mobile */}
                    {/* <button
            onClick={onClose}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}
                </div>

                <nav className="flex-1 flex flex-col px-5 pt-6 space-y-2">
                    <div className="mb-4">
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
                            Navigation
                        </h3>
                        {navItems.map(({ name, path, icon }) => (
                            <NavLink
                                to={path}
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 mb-2 rounded-xl transition-all duration-200 text-sm font-medium relative
                                    ${isActive
                                        ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                <span className={`text-lg transition-colors duration-200 ${'isActive' ? 'text-blue-600' : 'text-gray-400'
                                    }`}>
                                    {icon}
                                </span>
                                <span className="text-md">{name}</span>
                                {({ isActive }) => isActive && (
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"></div>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </nav>
                <div className="p-4 px-5 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
                    >
                        <IoLogOutOutline className="text-lg text-gray-400 group-hover:text-red-500 transition-colors duration-200" />
                        <span className="font-medium text-sm">Sign Out</span>
                    </button>

                    <div className="mt-4 pt-4 border-t border-gray-100 pl-4">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>© 2025 Punjabi Pages</span>
                        </div>
                    </div>
                </div>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SideBar;