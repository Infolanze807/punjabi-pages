import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Checkbox,
  Button,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react"
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid"
import logo from "../../assets/logo.jpeg"

export function SignUp() {
  const [passwordShown, setPasswordShown] = useState(false)
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)
  const toggleConfirmPasswordVisiblity = () => setConfirmPasswordShown((cur) => !cur)

  const handleInputChange = () => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = () => {
    setFormData((prev) => ({
      ...prev,
      userType: value || "",
    }))
  }

  const handleSubmit = () => {
    e.preventDefault()
    console.log("Signup form submitted:", formData)
    // Add your signup logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Logo Section */}

        {/* Signup Card */}
        <Card className="shadow-2xl border-0">
        <div className="text-center pt-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Punjabi Pages" className="w-12 h-12" />
            <Typography variant="h4" className="font-poppins font-bold text-[--second-color]">
              Punjabi Pages
            </Typography>
          </div>
          <Typography variant="paragraph" className="text-gray-600 font-inter">
            Join our community and grow your business
          </Typography>
        </div>

          <CardBody className="flex flex-col gap-4 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                    First Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="John"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="!border-t-blue-gray-200 focus:!border-t-orange-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                </div>

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                    Last Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Doe"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="!border-t-blue-gray-200 focus:!border-t-orange-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                  />
                </div>
              </div>

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
                  className="!border-t-blue-gray-200 focus:!border-t-orange-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
              </div>

              {/* Phone Input */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                  Phone Number
                </Typography>
                <Input
                  size="lg"
                  placeholder="+61 400 000 000"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="!border-t-blue-gray-200 focus:!border-t-orange-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  crossOrigin={undefined}
                />
              </div>

              {/* User Type Select */}
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                  I am a
                </Typography>
                <Select
                  size="lg"
                  value={formData.userType}
                  onChange={handleSelectChange}
                  className="!border-t-blue-gray-200 focus:!border-t-orange-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                >
                  <Option value="customer">Customer</Option>
                  <Option value="business_owner">Business Owner</Option>
                  <Option value="service_provider">Service Provider</Option>
                </Select>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="!border-t-blue-gray-200 focus:!border-t-orange-500"
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

                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-2 font-inter">
                    Confirm Password
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="********"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="!border-t-blue-gray-200 focus:!border-t-orange-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    type={confirmPasswordShown ? "text" : "password"}
                    icon={
                      <IconButton
                        variant="text"
                        size="sm"
                        onClick={toggleConfirmPasswordVisiblity}
                        className="!absolute right-1 top-1 rounded"
                      >
                        {confirmPasswordShown ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}
                      </IconButton>
                    }
                    crossOrigin={undefined}
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <Checkbox
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                label={
                  <Typography color="blue-gray" className="flex items-center font-medium font-inter text-sm">
                    I agree to the{" "}
                    <Typography as="a" href="#" color="blue" className="font-medium hover:text-blue-700 ml-1">
                      Terms and Conditions
                    </Typography>
                  </Typography>
                }
                crossOrigin={undefined}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="mt-6 bg-[--second-color] hover:bg-orange-600 font-inter"
                fullWidth
              >
                Create Account
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <Typography variant="small" color="gray" className="font-inter">
                  OR
                </Typography>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Login Link */}
              <Typography color="gray" className="mt-4 text-center font-inter">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-[--second-color] hover:text-orange-700">
                  Sign In
                </Link>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
