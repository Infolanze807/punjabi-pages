"use client"

import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardBody, CardHeader, Typography, Input, Checkbox, Button, IconButton } from "@material-tailwind/react"
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"
import logo from "../../assets/logo.jpeg"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/features/authSlice"

export function Login() {
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
      // You can show this in the UI if needed
    }
  };



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
            <button onClick={() => navigate("/")}>click</button>
          </div>

          <CardBody className="flex flex-col gap-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <Typography variant="h6" color="gray" className="font-inter">
                  Email Address
                </Typography>
                <Input
                  size="md"
                  placeholder="name@mail.com"
                  name="email"
                  variant="static"
                  value={formData.email}
                  onChange={handleInputChange}
                  crossOrigin={undefined}
                />
              </div>

              {/* Password Input */}
              <div>
                <Typography variant="h6" color="gray" className="font-inter">
                  Password
                </Typography>
                <Input
                  size="md"
                  placeholder="********"
                  name="password"
                  variant="static"
                  value={formData.password}
                  onChange={handleInputChange}
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <IconButton
                      variant="text"
                      size="sm"
                      onClick={togglePasswordVisiblity}
                      className="!absolute right-1 -top-2 rounded"
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
                >
                  Forgot password?
                </Typography>
              </div>

              {/* Submit Button */}
              <Button
                type="submit" // ✅ important fix
                className="mt-6 bg-[--main-color] hover:bg-blue-700 font-inter"
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
