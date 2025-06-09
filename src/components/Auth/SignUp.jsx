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
    name: "",
    email: "",
    phone: "",
    bussinessName: "",
    password: "",
    category: null,
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
              <div>
                <Typography variant="h6" color="gray" className="font-inter">
                  Name
                </Typography>
                <Input
                  size="md"
                  placeholder="John Deo"
                  name="name"
                  variant="static"
                  // value={formData.name}
                  // onChange={handleInputChange}
                  className=""
                  crossOrigin={undefined}
                />
              </div>

              <div>
                <Typography variant="h6" color="gray" className="font-inter">
                  Email Address
                </Typography>
                <Input
                  size="md"
                  placeholder="name@mail.com"
                  name="email"
                  variant="static"
                  // value={formData.email}
                  // onChange={handleInputChange}
                  className=""
                  crossOrigin={undefined}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography variant="h6" color="gray" className="font-inter">
                    Bussiness Name
                  </Typography>
                  <Input
                    size="md"
                    placeholder="Bussiness Name"
                    name="bussinessName"
                    variant="static"
                    // value={formData.bussinessName}
                    // onChange={handleInputChange}
                    className=""
                    crossOrigin={undefined}
                  />
                </div>
                <div>
                  <Typography variant="h6" color="gray" className="font-inter">
                    Bussiness Category
                  </Typography>
                  <Select
                    size="md"
                    variant="static"
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
                <Typography variant="h6" color="gray" className="font-inter">
                  Phone Number
                </Typography>
                <Input
                  size="md"
                  placeholder="+61 400 000 000"
                  name="phone"
                  variant="static"
                  type="number"
                  // value={formData.phone}
                  // onChange={handleInputChange}
                  crossOrigin={undefined}
                />
              </div>

                <div>
                  {/* <Typography variant="h6" color="gray" className="font-inter">
                    Password
                  </Typography> */}
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
                        className="!absolute right-1 -top-2 rounded"
                      >
                        {passwordShown ? <EyeIcon className="h-4 w-4" /> : <EyeSlashIcon className="h-4 w-4" />}
                      </IconButton>
                    }
                    crossOrigin={undefined}
                  />
                </div>

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
