import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Menu,
    X,
    User,
    PlusSquare,
} from "lucide-react";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            name: "My Profile",
            path: "/dashboard",
            icon: <User className="w-4 h-4" />,
        },
        {
            name: "Add Profile",
            path: "/addProfile",
            icon: <PlusSquare className="w-4 h-4" />,
        },
    ];


    return (
        <>
            <button
                className="md:hidden fixed top-4 left-4 z-30 p-2 bg-blue-600 text-white rounded-md shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <aside
                className={`fixed top-0 left-0 w-64 bg-[#f9fafb] shadow-lg
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:shadow-none
        z-20 flex flex-col `}
            >
                {/* <div className="p-6 border-b border-gray-200 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                        P
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-blue-700">Punjabi Pages</h2>
                        <p className="text-sm text-gray-500">Dashboard</p>
                    </div>
                </div> */}

                <div className="flex-1 flex flex-col px-5 pt-6">
                    <nav className="space-y-2">
                        {navItems.map(({ name, path, icon }) => (
                            <NavLink
                                to={path}
                                end
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-blue-50"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {icon}
                                {name}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="p-4 text-center text-sm text-gray-400 border-t border-gray-200">
                    © 2025 Punjabi Pages
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