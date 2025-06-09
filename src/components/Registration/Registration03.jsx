import React from 'react'
import { RocketLaunchIcon, UsersIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Registration03 = () => {
    const features = [
        {
            icon: <MapPinIcon className="h-10 w-10 text-white" />,
            title: "Reach Local Customers",
            desc: "List your business in Australia to attract nearby Punjabi audiences.",
        },
        {
            icon: <RocketLaunchIcon className="h-10 w-10 text-white" />,
            title: "Boost Online Presence",
            desc: "Enhance visibility with verified listings on Punjab Pages.",
        },
        {
            icon: <UsersIcon className="h-10 w-10 text-white" />,
            title: "Targeted Audience",
            desc: "Connect with Punjabi customers actively seeking your service.",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 md:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why List Your <span className="text-[--second-color]">Business</span> with Us?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                    Are you a Punjabi business owner in Australia? Increase your visibility and attract more
                    customers by listing your business on Punjab Pages – the leading directory for
                    Punjabi-owned businesses across Australia.
                </p>

                <div className="grid gap-10 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative">
                            <div className="rounded-full border-2 border-white p-8 w-32 h-32 flex items-center justify-center relative z-10">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white mt-6">{feature.title}</h3>
                            <p className="text-gray-300 mt-2 px-4">{feature.desc}</p>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-40 h-40 border-2 border-white rounded-full animate-ping opacity-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Registration03