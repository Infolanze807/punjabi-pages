import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteAccount, logout } from "../../redux/features/authSlice";

const DeleteAccountPage = () => {
    const [password, setPassword] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.auth); // assuming `auth` slice

    const handleDelete = async () => {
        try {
            const resultAction = await dispatch(deleteAccount({ data: { password } }));

            if (deleteAccount.fulfilled.match(resultAction)) {
                dispatch(logout());
                navigate("/login"); // go to home or login
            }
        } catch (err) {
            toast.error("Something went wrong while deleting the account.");
        } finally {
            setShowConfirm(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8">
                <h2 className="text-xl font-semibold text-red-600 mb-4">Delete Account</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Enter your password to confirm account deletion. This action cannot be undone.
                </p>
                <form
                    className="space-y-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setShowConfirm(true);
                    }}
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    // Eye OFF (visible)
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.065.165-2.087.47-3.04m3.07-1.55A9.953 9.953 0 0112 3c5.523 0 10 4.477 10 10 0 1.194-.21 2.34-.59 3.4M9.88 9.88a3 3 0 104.24 4.24" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M3 3l18 18" />
                                    </svg>
                                ) : (
                                    // Eye ON (hidden)
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.269 2.943 9.542 7-1.273 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all disabled:opacity-50"
                        >
                            {loading ? "Deleting..." : "Delete Account"}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="text-sm text-gray-600 hover:underline"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm shadow-lg text-center">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Are you sure?</h3>
                        <p className="text-sm text-gray-600 mb-6">
                            This will permanently delete your account.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleDelete}
                                disabled={loading}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
                            >
                                {loading ? "Deleting..." : "Yes, Delete"}
                            </button>
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteAccountPage;
