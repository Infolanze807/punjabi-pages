import React, { useState } from "react";
import { CardBody, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.jpeg";
import { forgotPassword } from "../../redux/features/authSlice";

function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const resultAction = await dispatch(forgotPassword({ email }));

            if (forgotPassword.fulfilled.match(resultAction)) {
                navigate("/reset-password", { state: { email } });
            } else {
                const errorMsg = resultAction.payload || "Failed to send reset link";
                console.error("API Error:", errorMsg);
            }
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6">
            <div className="bg-white rounded-lg py-6 px-4 sm:px-6 max-w-md w-full mx-auto shadow-md">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <img src={logo} alt="Punjabi Pages" className="w-12 h-12 object-contain" />
                        <Typography
                            variant="h4"
                            className="font-poppins font-bold text-[--second-color] text-lg sm:text-2xl"
                        >
                            Punjabi Pages
                        </Typography>
                    </div>
                    <Typography
                        variant="paragraph"
                        className="text-gray-600 font-inter text-sm sm:text-base"
                    >
                        Enter your email to reset your password
                    </Typography>
                </div>

                <CardBody className="flex flex-col gap-4 p-0 pt-6">
                    <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                        <Input
                            size="md"
                            type="email"
                            placeholder="name@mail.com"
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Button
                            type="submit"
                            className="mt-4 sm:mt-6 bg-[--second-color] hover:bg-orange-600 font-inter"
                            fullWidth
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Reset Password"}
                        </Button>

                        <Typography
                            color="gray"
                            className="text-center text-sm sm:text-base font-inter"
                        >
                            Remember your password?{" "}
                            <Link
                                to="/login"
                                className="font-medium text-[--second-color] hover:text-orange-600"
                            >
                                Sign In
                            </Link>
                        </Typography>
                    </form>
                </CardBody>
            </div>
        </div>
    );

}

export default ForgotPassword;
