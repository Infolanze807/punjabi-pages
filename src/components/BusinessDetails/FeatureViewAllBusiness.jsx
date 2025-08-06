import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFeatureBusiness } from '../../redux/features/businessSlice';
import { useNavigate } from 'react-router-dom';

const FeatureViewAllBusiness = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { featureBusiness, loading } = useSelector((state) => state.business);

    useEffect(() => {
        dispatch(getFeatureBusiness());
    }, [])

    console.log("featureBusiness", featureBusiness);

    return (
        <div className="bg-gradient-to-b from-gray-50 to-[--main-color]/5 py-8 sm:py-12 md:py-16 font-inter">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-[--main-color] text-center mb-8 md:mb-12 tracking-wide">
                    Discover Our Featured Businesses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-16">
                    {featureBusiness?.map((business) => (
                        <div
                            key={business.id}
                            className="relative bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border hover:border-blue-300"
                        >
                            {/* Image Section */}
                            <div className="relative border-b border-blue-300">
                                <img
                                    src={business.logoUrl || "/placeholder.svg"}
                                    alt={business.businessName}
                                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[--main-color]/30 to-transparent opacity-0  transition-opacity duration-300"></div>
                            </div>
                            {/* Content Section */}
                            <div className="p-3 sm:p-4">
                                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-[--main-color] mb-1 line-clamp-2">
                                    {business.businessName}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                                    {business.description}
                                </p>
                                <p className="text-xs text-[--second-color] uppercase tracking-wider mb-3">
                                    {business.category}
                                </p>
                                <button
                                    onClick={() =>
                                        navigate('/business-details-data', {
                                            state: {
                                                businessId: business._id,
                                            },
                                        })
                                    }
                                    className="inline-block bg-[--main-color] text-white px-3 sm:px-4 py-1.5 rounded-full font-poppins font-medium text-sm hover:bg-[#2b81d6] focus:outline-none focus:ring-2 focus:ring-[--main-color] transition-all duration-200"
                                >
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureViewAllBusiness