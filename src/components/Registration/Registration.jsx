import React, { useState } from 'react'
import heroimage from "../../assets/architecture-ancient-monument-world-heritage-day-celebration.jpg";
import { Button, CardBody, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"
import { Link, useNavigate } from 'react-router-dom';
import BussinessMen from '../../assets/BussinessMen.jpg'
import logo from "../../assets/logo.jpeg"
import Registration02 from './Registration02';
import Registration03 from './Registration03';
import Registration04 from './Registration04';
import { useDispatch, useSelector } from 'react-redux';
import { register, verifyEmail } from '../../redux/features/authSlice';

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.auth);
    const [step, setStep] = useState("register");
    const [registeredEmail, setRegisteredEmail] = useState("");

    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");

    const [passwordShown, setPasswordShown] = useState(false)
    const [formErrors, setFormErrors] = useState({});
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        password: "",
        category: null,
    })



    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)
    const toggleConfirmPasswordVisiblity = () => setConfirmPasswordShown((cur) => !cur)

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: "" }); // Clear error on input
    };

    const handleSelectChange = (val) => {
        setFormData({ ...formData, category: val });
        setFormErrors({ ...formErrors, category: "" });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            errors.email = "Enter a valid email address";
        }
        if (!formData.businessName?.trim()) {
            errors.businessName = "Business name is required";
        }
        if (!formData.category) {
            errors.category = "Category is required";
        }
        if (!formData.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!/^[0-9]{10,15}$/.test(formData.phone.trim())) {
            errors.phone = "Enter a valid phone number (10–15 digits)";
        }
        if (!formData.password) {
            errors.password = "Password is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await dispatch(register(formData)).unwrap();
                setRegisteredEmail(formData.email);
                setStep("verify");
                // navigate("/dashboard");
            } catch (err) {
                console.error("Registration failed:", err);
            }
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        if (!otp.trim()) {
            setOtpError("OTP is required");
            return;
        }

        const verifyData = {
            email: registeredEmail,
            otp
        }
        try {
            await dispatch(verifyEmail(verifyData)).unwrap();
            // setRegisteredEmail(formData.email);
            // setStep("verify");
            navigate("/dashboard");
        } catch (err) {
            console.error("Registration failed:", err);
        }
    }

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
                    {step === "register" ? (
                        <div className="bg-white rounded-lg py-5">
                            <div className="text-center pt-6">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <img src={logo} alt="Punjabi Pages" className="w-12 h-12" />
                                    <Typography variant="h4" className="font-poppins font-bold text-[--second-color]">
                                        Punjabi Pages
                                    </Typography>
                                </div>
                                <Typography variant="paragraph" className="text-gray-600 font-inter">
                                    Welcome back! Please sign Up to your account
                                </Typography>
                            </div>
                            <CardBody className="flex flex-col gap-4 p-6">
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className='relative'>
                                        <Input
                                            size="md"
                                            label="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            error={!!formErrors.name}
                                        />
                                        {formErrors.name && <Typography variant="small" color="red" className='text-[9px] absolute -bottom-3.5 right-0.5'>{formErrors.name}</Typography>}
                                    </div>

                                    <div className='relative'>
                                        <Input
                                            size="md"
                                            label="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            error={!!formErrors.email}
                                        />
                                        {formErrors.email && <Typography variant="small" color="red" className='text-[9px] absolute -bottom-3.5 right-0.5'>{formErrors.email}</Typography>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className='relative'>
                                            <Input
                                                size="md"
                                                label="Business Name"
                                                name="businessName"
                                                value={formData.bussinessName}
                                                onChange={handleInputChange}
                                                error={!!formErrors.bussinessName}
                                            />
                                            {formErrors.businessName && <Typography variant="small" color="red" className='text-[9px] absolute -bottom-0.3 right-0.5'>{formErrors.bussinessName}</Typography>}
                                        </div>

                                        <div className='relative'>
                                            <Select
                                                size="md"
                                                label="Business Category"
                                                value={formData.category}
                                                onChange={handleSelectChange}
                                                error={!!formErrors.category}
                                            >
                                                <Option value="customer">Customer</Option>
                                                <Option value="business_owner">Business Owner</Option>
                                                <Option value="service_provider">Service Provider</Option>
                                            </Select>
                                            {formErrors.category && <Typography variant="small" color="red" className='text-[9px] absolute -bottom-0.3 right-0.5'>{formErrors.category}</Typography>}
                                        </div>
                                    </div>

                                    <div className='relative'>
                                        <Input
                                            size="md"
                                            label="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            error={!!formErrors.phone}
                                        />
                                        {formErrors.phone && <Typography variant="small" color="red" className='text-[9px] absolute -bottom-3.5 right-0.5'>{formErrors.phone}</Typography>}
                                    </div>

                                    <div className='relative'>
                                        <Input
                                            size="md"
                                            label="Password"
                                            name="password"
                                            type={passwordShown ? "text" : "password"}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            error={!!formErrors.password}
                                            icon={
                                                <IconButton
                                                    variant="text"
                                                    size="sm"
                                                    onClick={togglePasswordVisiblity}
                                                    className="!absolute right-1 -top-1.5 rounded"
                                                >
                                                    {passwordShown ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}
                                                </IconButton>
                                            }
                                        />
                                        {formErrors.password && <Typography variant="small" color="red" className='text-[9px] absolute -bottom-3.5 right-0.5'>{formErrors.password}</Typography>}
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-6 bg-[--second-color] hover:bg-orange-600 font-inter"
                                        fullWidth
                                        disabled={loading}
                                    >
                                        {loading ? "Creating Account..." : "Create Account"}
                                    </Button>
                                    <div className="flex items-center gap-4 my-4">
                                        <div className="flex-1 h-px bg-gray-300"></div>
                                        <Typography variant="small" color="gray" className="font-inter">
                                            OR
                                        </Typography>
                                        <div className="flex-1 h-px bg-gray-300"></div>
                                    </div>

                                    <Typography color="gray" className="mt-4 text-center font-inter">
                                        Already have an account?{" "}
                                        <Link to="/login" className="font-medium text-[--second-color] hover:text-orange-700">
                                            Sign In
                                        </Link>
                                    </Typography>
                                </form>
                            </CardBody>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center min-h-[80vh] px-4">
                            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <img src={logo} alt="Punjabi Pages" className="w-12 h-12" />
                                    <Typography variant="h4" className="font-poppins font-bold text-[--second-color]">
                                        Punjabi Pages
                                    </Typography>
                                </div>
                                <Typography
                                    variant="paragraph"
                                    className="text-center text-sm text-gray-600 mb-6"
                                >
                                    We've sent a 6-digit verification code to your email.
                                </Typography>
                                <CardBody className="flex flex-col gap-16 p-0">
                                    <form onSubmit={handleVerifyOtp} className="space-y-10">
                                        <div className="relative mt-3">
                                            <Input
                                                size="lg"
                                                label="OTP"
                                                type="number"
                                                value={otp}
                                                onChange={(e) => {
                                                    setOtp(e.target.value);
                                                    setOtpError("");
                                                }}
                                                error={!!otpError}
                                                className="focus:outline-none"
                                            />
                                            {otpError && (
                                                <Typography variant="small" color="red" className="text-xs absolute -bottom-4 right-0">
                                                    {otpError}
                                                </Typography>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            className="bg-[--second-color] hover:bg-orange-600 transition-all duration-200 font-medium text-white"
                                            fullWidth
                                        >
                                            Verify
                                        </Button>
                                    </form>

                                    <div className="flex justify-center">
                                        <Typography variant="small" color="gray" className="text-sm">
                                            Didn’t receive the code?{" "}
                                            <button
                                                type="button"
                                                // onClick={handleResendOtp}
                                                className="text-[--second-color] hover:underline font-medium"
                                            >
                                                Resend OTP
                                            </button>
                                        </Typography>
                                    </div>
                                </CardBody>
                            </div>
                        </div>

                    )}
                </div>
            </section>
            <Registration02 />
            <Registration03 />
            <Registration04 />
        </div>
    )
}

export default Registration