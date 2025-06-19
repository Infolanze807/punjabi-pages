import React, { useState } from 'react'
import heroimage from "../../assets/architecture-ancient-monument-world-heritage-day-celebration.jpg";
import { Button, Card, CardBody, IconButton, Input, Typography } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.jpeg"
import SignIn02 from '../LogIn/SignIn02';
import { login } from '../../redux/features/authSlice';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.auth)

    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("form:", formData);
            const result = await dispatch(login(formData)).unwrap();
            console.log("Login successful:", result);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        navigate("/forgot-password");
    };


    return (
        <div>
            <section
                className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimage})`,
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-24 items-center">
                    <div className="text-white">
                        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                            List & Grow Your
                            <span className="text-[--second-color]"> Business</span>
                            With Punjabi Pages!
                        </h1>

                        <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-lg max-w-3xl mx-auto">
                            Connect with authentic Punjabi businesses in your area. From
                            traditional restaurants to modern services
                        </p>
                    </div>
                    <div className="bg-white rounded-lg py-1">
                        <div className="text-center pt-6">
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <img src={logo} alt="Punjabi Pages" className="w-12 h-12" />
                                <Typography variant="h4" className="font-poppins font-bold text-[--second-color]">
                                    Punjabi Pages
                                </Typography>
                            </div>
                            <Typography variant="paragraph" className="text-gray-600 font-inter">
                                Welcome back! Please sign in to your account
                            </Typography>
                        </div>

                        <CardBody className="flex flex-col gap-4 p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Input
                                        size="md"
                                        placeholder="name@mail.com"
                                        name="email"
                                        label="Email Address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        crossOrigin={undefined}
                                    />
                                </div>
                                <div>
                                    <Input
                                        size="md"
                                        label='Password'
                                        placeholder="********"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        type={passwordShown ? "text" : "password"}
                                        icon={
                                            <IconButton
                                                variant="text"
                                                size="sm"
                                                onClick={togglePasswordVisiblity}
                                                className="!absolute right-0.5 -top-1.5 rounded"
                                            >
                                                {passwordShown ? (
                                                    <EyeIcon className="h-4 w-4 text-gray-700" />
                                                ) : (
                                                    <EyeSlashIcon className="h-4 w-4 text-gray-700" />
                                                )}
                                            </IconButton>
                                        }
                                        crossOrigin={undefined}
                                    />
                                </div>

                                <div className="flex items-center justify-end">
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue"
                                        className="font-medium font-inter hover:text-blue-700"
                                        onClick={handleForgotPassword}
                                    >
                                        Forgot password?
                                    </Typography>
                                </div>
                                <Button
                                    type="submit"
                                    className="mt-6 bg-[--second-color] hover:bg-orange-600 font-inter"
                                    fullWidth
                                    disabled={loading}
                                >
                                    {loading ? "Signing in..." : "Sign In"}
                                </Button>

                                {/* Divider */}
                                <div className="flex items-center gap-4 my-4">
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                    <Typography variant="small" color="gray" className="font-inter">
                                        OR
                                    </Typography>
                                    <div className="flex-1 h-px bg-gray-300"></div>
                                </div>

                                {/* Sign Up Link */}
                                <Typography color="gray" className="mt-4 text-center font-inter">
                                    Don't have an account?{" "}
                                    <Link to="/sign-up" className="font-medium text-[--second-color] hover:text-orange-600">
                                        Sign Up
                                    </Link>
                                </Typography>
                            </form>
                        </CardBody>
                    </div>
                </div>
            </section>
            <SignIn02 />
        </div>
    )
}

export default Login