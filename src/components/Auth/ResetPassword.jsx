import React, { useEffect, useState } from "react";
import { CardBody, Input, Button, Typography, IconButton } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { resetPassword } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function ResetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email;
    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [newPasswordShown, setNewPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setNewPasswordShown(!newPasswordShown);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
    };


    useEffect(() => {
        if (email) {
            setFormData((prev) => ({
                ...prev,
                email,
            }));
        }
    }, [email]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { email, otp, newPassword, confirmPassword } = formData;

        if (!email || !otp || !newPassword || !confirmPassword) {
            toast.error("Please fill in all fields.");
            setLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const resultAction = await dispatch(resetPassword({ email, otp, newPassword }));
            if (resetPassword.fulfilled.match(resultAction)) {
                navigate("/login");
            } else {
                // toast.error(resultAction.payload || "Failed to reset password.");
            }
        } catch (err) {
            // toast.error("Unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6">
            <div className="bg-white rounded-lg py-6 px-4 sm:px-6 max-w-md w-full shadow-md">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <img src={logo} alt="Punjabi Pages" className="w-12 h-12 object-contain" />
                        <Typography variant="h4" className="font-poppins font-bold text-[--second-color] text-lg sm:text-2xl">
                            Punjabi Pages
                        </Typography>
                    </div>
                    <Typography variant="paragraph" className="text-gray-600 font-inter text-sm sm:text-base">
                        Enter your details to reset your password
                    </Typography>
                </div>

                <CardBody className="flex flex-col gap-4 p-0 pt-6">
                    <form className="space-y-6 sm:space-y-6" onSubmit={handleSubmit}>
                        <Input
                            size="md"
                            label="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@mail.com"
                            crossOrigin={undefined}
                            disabled
                        />

                        <Input
                            size="md"
                            label="OTP"
                            name="otp"
                            maxLength={6}
                            inputMode="numeric"
                            value={formData.otp}
                            onChange={(e) => {
                                const onlyDigits = e.target.value.replace(/\D/g, ""); // remove non-digits
                                setFormData((prev) => ({ ...prev, otp: onlyDigits }));
                            }}
                            placeholder="Enter OTP"
                            crossOrigin={undefined}
                        />
                        <Input
                            size="md"
                            label="New Password"
                            name="newPassword"
                            type={newPasswordShown ? "text" : "password"}
                            value={formData.newPassword}
                            onChange={handleChange}
                            placeholder="********"
                            icon={
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    onClick={toggleNewPasswordVisibility}
                                    className="!absolute right-0.5 -top-1.5 rounded"
                                >
                                    {newPasswordShown ? (
                                        <EyeIcon className="h-4 w-4 text-gray-700" />
                                    ) : (
                                        <EyeSlashIcon className="h-4 w-4 text-gray-700" />
                                    )}
                                </IconButton>
                            }
                            crossOrigin={undefined}
                        />

                        <Input
                            size="md"
                            label="Confirm Password"
                            name="confirmPassword"
                            type={confirmPasswordShown ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="********"
                            icon={
                                <IconButton
                                    variant="text"
                                    size="sm"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="!absolute right-0.5 -top-1.5 rounded"
                                >
                                    {confirmPasswordShown ? (
                                        <EyeIcon className="h-4 w-4 text-gray-700" />
                                    ) : (
                                        <EyeSlashIcon className="h-4 w-4 text-gray-700" />
                                    )}
                                </IconButton>
                            }
                            crossOrigin={undefined}
                        />

                        <Button
                            type="submit"
                            className="mt-6 bg-[--second-color] hover:bg-orange-600 font-inter"
                            fullWidth
                            disabled={loading}
                        >
                            {loading ? "Resetting..." : "Reset Password"}
                        </Button>

                        <Typography color="gray" className="mt-4 text-center font-inter">
                            Remembered your password?{" "}
                            <Link to="/login" className="font-medium text-[--second-color] hover:text-orange-600">
                                Sign In
                            </Link>
                        </Typography>
                    </form>
                </CardBody>
            </div>
        </div>
    );
}

export default ResetPassword;
