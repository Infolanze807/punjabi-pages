"use client"

import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, CardHeader, Typography, Input, Checkbox, Button, IconButton } from "@material-tailwind/react"
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"
import logo from "../../assets/logo.jpeg"

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)

  const handleInputChange = () => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = () => {
    e.preventDefault()
    console.log("Login form submitted:", formData)
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}

        {/* Login Card */}
        <Card className="shadow-2xl border-0">
        <div className="text-center pt-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Punjabi Pages" className="w-12 h-12" />
            <Typography variant="h4" className="font-poppins font-bold text-[--main-color]">
              Punjabi Pages
            </Typography>
          </div>
          <Typography variant="paragraph" className="text-gray-600 font-inter">
            Welcome back! Please sign in to your account
          </Typography>
        </div>

          <CardBody className="flex flex-col gap-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                  Email Address
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
              </div>

              {/* Password Input */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                  Password
                </Typography>
                <Input
                  size="lg"
                  placeholder="********"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <IconButton
                      variant="text"
                      size="sm"
                      onClick={togglePasswordVisiblity}
                      className="!absolute right-1 top-1 rounded"
                    >
                      {passwordShown ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}
                    </IconButton>
                  }
                  crossOrigin={undefined}
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  label={
                    <Typography color="blue-gray" className="flex font-medium font-inter">
                      Remember me
                    </Typography>
                  }
                  crossOrigin={undefined}
                />
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue"
                  className="font-medium font-inter hover:text-blue-700"
                >
                  Forgot password?
                </Typography>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="mt-6 bg-[--main-color] hover:bg-blue-700 font-inter" fullWidth>
                Sign In
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
                <Link to="/sign-up" className="font-medium text-[--main-color] hover:text-blue-700">
                  Sign Up
                </Link>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
