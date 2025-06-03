import { useState } from "react";
import { Filter, Star, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const searchResults = [
  {
    id: 1,
    to: "/business-details-data",
    name: "Singh's Plumbing Services",
    category: "Plumbers & Gas Fitters",
    address: "Blacktown, NSW 2148",
    phone: "(02) 9876 5432",
    rating: 4.8,
    reviews: 124,
    isFeatured: true,
    isOpen: true,
    logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    services: [
      "Licensed In All Areas",
      "Emergency 24/7 Service",
      "Gas Fitting Specialist",
    ],
    certifications: ["Master Plumbers Association", "Gas Industry Licence"],
    description:
      "Professional Experts For All Your Plumbing And Gas Fitting Needs",
  },
  {
    id: 2,
    to: "/business-details-data",
    name: "Kaur Emergency Plumbing",
    category: "Plumbers & Gas Fitters",
    address: "Parramatta, NSW 2150",
    phone: "(02) 8765 4321",
    rating: 4.9,
    reviews: 89,
    isFeatured: false,
    isOpen: true,
    logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    services: ["24/7 Emergency Service", "Hot Water Systems", "Blocked Drains"],
    certifications: ["Licensed Plumber", "Insurance Covered"],
    description: "Fast, Reliable Plumbing Services Across Sydney",
  },
  {
    id: 3,
    to: "/business-details-data",
    name: "Punjab Gas & Plumbing Co",
    category: "Plumbers & Gas Fitters",
    address: "Liverpool, NSW 2170",
    phone: "(02) 7654 3210",
    rating: 4.7,
    reviews: 156,
    isFeatured: false,
    isOpen: false,
    logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    services: ["Gas Appliance Installation", "Leak Detection", "Pipe Repairs"],
    certifications: ["Gas Safe Certified", "Master Plumbers Member"],
    description: "Trusted Gas and Plumbing Solutions for Your Home",
  },
];

const sponsoredBusinesses = [
  {
    id: 1,
    name: "Rheem",
    rating: 1.0,
    reviews: 1,
    category: "Plumbers & Gas Fitters",
    description: "Comes On Steady, Hot And Strong. Install A Rheem",
    phone: "1300 309 036",
    logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

const relatedArticles = [
  {
    id: 1,
    title: "Solar hot water system price guide in Australia [2025]",
    image:
      "https://images.unsplash.com/photo-1497436072909-f5e4be1713a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    title: "Hot water system prices and installation costs [2025]",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    title: "How much does toilet replacement cost? [2025]",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    title: "Australian Plumbing Cost Guide [2025]",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    title: "How much does a dishwasher installation cost? [2025]",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const SearchDetails = ({ searchTerm = "Plumbers", location = "Sydney" }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 max-w-7xl">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to={"/categories"} className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <a href="#" className="hover:text-blue-600">
              Plumbers & Gas Fitters
            </a>
            <span>›</span>
            <span className="text-gray-800">All States</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-7 py-6 max-w-7xl">
        <div className="flex gap-6">
          {/* Main Content - Left Side (3/4) */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                35 BEST local {searchTerm} in {location} | Punjabi Pages®
              </h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
                <span className="text-gray-600">
                  11433 Results for {searchTerm} Near You
                </span>
              </div>
            </div>

            {/* Business Listings */}
            <div className="space-y-6">
              {searchResults.map((business) => (
                <div
                  key={business.id}
                  className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
                >
                  <Link to={business.to}>
                    {/* Featured Badge */}
                    {business.isFeatured && (
                      <div className="mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                          FEATURED
                        </span>
                      </div>
                    )}

                    <div className="flex gap-4">
                      {/* Business Logo */}
                      <div className="flex-shrink-0">
                        <img
                          src={business.logo || "/placeholder.svg"}
                          alt={business.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>

                      {/* Business Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                              {business.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                              {business.category}, {business.address}
                            </p>
                          </div>

                          {/* Contact Buttons */}
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                              <Phone className="h-4 w-4" />
                              {business.phone}
                            </button>
                            <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 font-medium text-sm">
                              View Website
                            </button>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            <span className="font-semibold mr-1">
                              {business.rating}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(business.rating)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-600 text-sm ml-2">
                              ({business.reviews})
                            </span>
                          </div>

                          {business.isOpen && (
                            <div className="flex items-center gap-1 text-green-600 text-sm">
                              <Clock className="h-4 w-4" />
                              <span>Open 24 hours</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 mb-3 font-medium">
                          {business.description}
                        </p>

                        {/* Services */}
                        <div className="mb-3">
                          {business.services.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm text-gray-600 mb-1"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-2">
                          {business.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              <CheckCircle className="h-3 w-3 text-blue-500" />
                              {cert}
                            </span>
                          ))}
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                            <Mail className="h-4 w-4" />
                          </button>
                          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                            Get quote
                          </button>
                          <span className="text-xs text-gray-500">
                            Calls only, no SMS
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar (1/4) */}
          <div className="w-80 space-y-6">
            {/* Sponsored Businesses */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-gray-800">
                  Sponsored Businesses
                </h3>
                <span className="text-xs text-gray-500">ⓘ</span>
              </div>

              {sponsoredBusinesses.map((business) => (
                <div key={business.id} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={business.logo || "/placeholder.svg"}
                      alt={business.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {business.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {business.rating}
                        </span>
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-500">
                          ({business.reviews})
                        </span>
                        <span className="text-xs text-gray-600 ml-2">
                          {business.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    {business.description}
                  </p>

                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                      {business.phone}
                    </button>
                    <button className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 font-medium text-sm">
                      View Website
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="font-semibold text-gray-800 mb-4">
                Related Articles
              </h3>

              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <a
                    key={article.id}
                    href="#"
                    className="flex gap-3 hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-3 leading-tight">
                        {article.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View all articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetails;
