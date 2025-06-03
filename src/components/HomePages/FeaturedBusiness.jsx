import React from 'react'
import { Star } from "lucide-react"

const featuredBusinesses = [
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
  },
]

const FeaturedBusiness = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10 lg:px-24 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Fetured Businesses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most trusted and highly-rated businesses in our community
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBusinesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {business.isPremium && (
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                  {business.isVerified && (
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      ✓ Verified
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Business Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {business.name}
                </h3>

                {/* Category and Location */}
                <p className="text-gray-600 text-sm mb-3">
                  {business.category} • {business.location}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-blue-500 fill-blue-500" />
                    <span className="font-semibold text-gray-900">{business.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({business.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedBusiness
