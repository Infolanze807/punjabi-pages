import React, { useEffect } from 'react'
import { CheckCircle, Star } from "lucide-react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFeatureBusiness } from '../../redux/features/businessSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const FeaturedBusiness = () => {
  const dispatch = useDispatch();

  const { featureBusiness, loading } = useSelector((state) => state.business);

  useEffect(() => {
    dispatch(getFeatureBusiness());
  }, [])

  // console.log("featureBusiness", featureBusiness);


  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#e6f0f9]">
      <div className="container mx-auto px-4 md:px-10 lg:px-24 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[--main-color]">Featured Businesses</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Discover the most trusted and highly-rated businesses in our community
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // ✅ add here
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true, el: '.custom-swiper-pagination', }}
        >
          {featureBusiness?.map((business) => (
            <SwiperSlide key={business.id}>
              <Link to="/business-details-data" state={{ businessId: business._id }}>
                <div className="rounded-lg border bg-white text-gray-800 shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={business.logoUrl || "/placeholder.svg"}
                      alt={business.businessName}
                      className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1 sm:gap-2">
                      {business.isFeature && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[--second-color] text-white">
                          Featured
                        </span>
                      )}
                      {business.status && (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[--main-color] text-white">
                          <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 mr-1" /> Verified
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="mb-1 sm:mb-2 font-medium text-sm sm:text-base text-[--main-color] truncate">
                      {business.businessName}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 truncate">
                      {business.category} • {business?.address?.city || business?.address?.suburb}
                      , {business.address?.state}
                    </p>

                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-[--main-color] mr-1 fill-[--main-color]" />
                        <span className="text-xs sm:text-sm font-medium">4.9</span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">(120+ reviews)</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="custom-swiper-pagination mt-5 flex justify-center"></div>
        </Swiper>
        <div className="mt-10 flex justify-center">
          <Link to="/featured-businesses">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-sm hover:rounded-full bg-[--main-color] text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-75">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBusiness
