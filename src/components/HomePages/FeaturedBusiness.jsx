import React from 'react'
import { CheckCircle, Star } from "lucide-react"
import { Link } from 'react-router-dom'

const businesses = [
  {
    id: 1,
    name: "Singh's Authentic Kitchen",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Restaurant",
    location: "Melbourne, VIC",
    rating: 4.8,
    reviews: 124,
    isPremium: true,
    isVerified: true,
    location: "Melbourne, VIC",
  },
  {
    id: 2,
    name: "Kaur Beauty Salon",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Beauty & Wellness",
    location: "Sydney, NSW",
    rating: 4.9,
    reviews: 89,
    isPremium: true,
    isVerified: true,
    location: "Sydney, NSW",
  },
  {
    id: 3,
    name: "Punjab Grocery Store",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Grocery",
    location: "Brisbane, QLD",
    rating: 4.7,
    reviews: 156,
    isPremium: false,
    isVerified: true,
    location: "Brisbane, QLD",
  },
  {
    id: 4,
    name: "Guru Nanak Driving School",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Education",
    location: "Perth, WA",
    rating: 4.6,
    reviews: 78,
    isPremium: true,
    isVerified: true,
    location: "Perth, WA",
  },
]

const FeaturedBusiness = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#e6f0f9]">
    <div className="container mx-auto px-4 md:px-10 lg:px-24 max-w-7xl">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[--main-color]">Featured Businesses</h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Discover the most trusted and highly-rated businesses in our community
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {businesses.map((business) => (
          <Link to={"/business-details-data"} key={business.id}>
            <div
              className="rounded-lg border bg-white text-gray-800 shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1 sm:gap-2">
                  {business.isPremium && (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[--second-color] text-white">
                      Premium
                    </span>
                  )}
                  {business.isVerified && (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[--main-color] text-white">
                      <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 mr-1" /> Verified
                    </span>
                  )}
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="mb-1 sm:mb-2 font-medium text-sm sm:text-base text-[--main-color] truncate">
                  {business.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 truncate">
                  {business.category} • {business.location}
                </p>

                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-[--main-color] mr-1 fill-[--main-color]" />
                    <span className="text-xs sm:text-sm font-medium">{business.rating}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">({business.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeaturedBusiness
