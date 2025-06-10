import { Button, Step, Stepper, Typography } from '@material-tailwind/react';
import {
    CogIcon,
    UserIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import BussinessMen from '../../assets/BussinessMen.jpg';
import React from 'react';

const Registration02 = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="bg-white py-10 px-4 md:px-10 lg:px-24">
            {/* Stepper Icons */}
            <Stepper
                className="max-w-2xl mx-auto"
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step
                    onClick={() => setActiveStep(0)}
                    className="!h-16 !w-16 !p-4 bg-white rounded-full shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-110"
                >
                    <UserIcon className="h-8 w-8 text-[--second-color]" />
                </Step>
                <Step
                    onClick={() => setActiveStep(1)}
                    className="!h-16 !w-16 !p-4 bg-white rounded-full shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-110"
                >
                    <CogIcon className="h-8 w-8 text-[--second-color]" />
                </Step>
                <Step
                    onClick={() => setActiveStep(2)}
                    className="!h-16 !w-16 !p-4 bg-white rounded-full shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-110"
                >
                    <BuildingLibraryIcon className="h-8 w-8 text-[--second-color]" />
                </Step>
            </Stepper>

            <div className="mt-20 grid md:grid-cols-2 gap-10 items-center transition-all duration-500">
                <div className="rounded-xl p-6 shadow-md bg-gray-50 hover:shadow-xl transition-all duration-300">
                    {activeStep === 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-[--second-color] mb-4">List Your Business Details</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To begin, you need to create an account on Punjab Pages. Simply visit the Sign Up page and enter your
                                details. Once submitted, you'll receive an OTP verification via email. Verify your email, log in to your
                                dashboard, and you're ready to add your business information.
                            </p>
                        </>
                    )}
                    {activeStep === 1 && (
                        <>
                            <h2 className="text-2xl font-bold text-[--second-color] mb-4">Verify Your Business</h2>
                            <p className="text-gray-700 leading-relaxed">
                                After listing your business, you will receive a verification email with an OTP. Enter this OTP in your
                                dashboard to confirm your business details and activate your profile for visibility.
                            </p>
                        </>
                    )}
                    {activeStep === 2 && (
                        <>
                            <h2 className="text-2xl font-bold text-[--second-color] mb-4">Target Your Customers</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Once verified, your business will be listed and discoverable by your target customers across Punjab Pages.
                                Track insights and connect directly with potential leads.
                            </p>
                        </>
                    )}

                    <div className="mt-8 flex gap-4">
                        <Button
                            onClick={handlePrev}
                            disabled={isFirstStep}
                            className="bg-gray-200 text-black shadow-md hover:shadow-lg transition"
                        >
                            Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            disabled={isLastStep}
                            className="bg-[--second-color] text-white shadow-md hover:shadow-lg transition"
                        >
                            Next
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={BussinessMen}
                        alt="Step Visual"
                        className="max-h-80 object-contain rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Registration02;
