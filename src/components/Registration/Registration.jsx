import React, { useState } from 'react'
import heroimage from "../../assets/architecture-ancient-monument-world-heritage-day-celebration.jpg";
import { Button, CardBody, IconButton, Input, Option, Select, Typography } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom';
import BussinessMen from '../../assets/BussinessMen.jpg'
import Registration02 from './Registration02';
import Registration03 from './Registration03';
import Registration04 from './Registration04';

const Registration = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        bussinessName: "",
        password: "",
        category: null,
    })


    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)
    const toggleConfirmPasswordVisiblity = () => setConfirmPasswordShown((cur) => !cur)

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
                    <div className='bg-white rounded-lg py-5'>
                        <Typography variant="h4" className="font-poppins font-bold text-[--second-color] text-center">
                            Sign Up
                        </Typography>
                        <CardBody className="flex flex-col gap-4 p-6">
                            <form className="space-y-5">
                                <div>
                                    <Input
                                        size="md"
                                        label='Name'
                                        placeholder="John Deo"
                                        name="name"
                                        variant="outlined"
                                        // value={formData.name}
                                        // onChange={handleInputChange}
                                        className=""
                                        crossOrigin={undefined}
                                    />
                                </div>
                                <div>
                                    <Input
                                        size="md"
                                        label='Email Address'
                                        placeholder="name@mail.com"
                                        name="email"
                                        variant="outlined"
                                        // value={formData.email}
                                        // onChange={handleInputChange}
                                        className=""
                                        crossOrigin={undefined}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Input
                                            size="md"
                                            label='Bussiness Name'
                                            placeholder="Bussiness Name"
                                            name="bussinessName"
                                            variant="outlined"
                                            // value={formData.bussinessName}
                                            // onChange={handleInputChange}
                                            className=""
                                            crossOrigin={undefined}
                                        />
                                    </div>
                                    <div>
                                        <Select
                                            size="md"
                                            label="Bussiness Category"
                                            variant="outlined"
                                            placeholder="Select Option"
                                        // value={formData.category}
                                        // onChange={handleSelectChange}
                                        >
                                            <Option value="customer">Customer</Option>
                                            <Option value="business_owner">Business Owner</Option>
                                            <Option value="service_provider">Service Provider</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <Input
                                        size="md"
                                        label='Phone Number'
                                        placeholder="+61 400 000 000"
                                        name="phone"
                                        variant="outlined"
                                        type="number"
                                        // value={formData.phone}
                                        // onChange={handleInputChange}
                                        crossOrigin={undefined}
                                    />
                                </div>
                                <div>
                                    <Input
                                        size="md"
                                        label="Password"
                                        placeholder="********"
                                        name="password"
                                        variant="outlined"
                                        // value={formData.password}
                                        // onChange={handleInputChange}
                                        type={passwordShown ? "text" : "password"}
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
                                        crossOrigin={undefined}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="mt-6 bg-[--second-color] hover:bg-orange-600 font-inter"
                                    fullWidth
                                >
                                    Create Account
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
                </div>
            </section>
            <Registration02 />
            <Registration03 />
            <Registration04 />
        </div>
    )
}

export default Registration