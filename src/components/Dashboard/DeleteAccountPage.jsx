import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteAccount } from "../../redux/features/authSlice";

const DeleteAccountPage = () => {
    const [password, setPassword] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.auth); // assuming `auth` slice

    const handleDelete = async () => {
        try {
            const resultAction = await dispatch(deleteAccount({ data: { password } }));

            if (deleteAccount.fulfilled.match(resultAction)) {
                navigate("/"); // go to home or login
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
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                            placeholder="Enter your password"
                        />
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
