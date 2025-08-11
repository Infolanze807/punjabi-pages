import { useState } from "react";
import { Filter, Star, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FullPageLoader from "../Loader/Loader";

const SearchDetails = () => {
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory;

  const { BusinessCategory, loading } = useSelector((state) => state.business);

  const [showFilters, setShowFilters] = useState(false);

  const businesses = BusinessCategory?.businesses || [];
  console.log("business", businesses);


  return (
    <div className="min-h-screen bg-gray-50">
      {loading ?
        <div><FullPageLoader /></div> :
        (<div>
          {/* Breadcrumb */}
          <div className="bg-white border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link to={"/"} className="hover:text-blue-600">
                  Home
                </Link>
                <span>›</span>
                <a href="#" className="hover:text-blue-600">
                  {selectedCategory}
                </a>
                <span>›</span>
                <span className="text-gray-800">All States</span>
              </nav>
            </div>
          </div>

          <div className="container mx-auto px-7 py-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main Content - Left Side (3/4) */}
              <div className="w-full lg:flex-1">
                {/* Header */}
                <div className="mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    BEST local {selectedCategory} in location {businesses?.address?.city || businesses?.address?.suburb} | Punjabi Pages®
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
                      {businesses.length} Results for {selectedCategory} Near You
                    </span>
                  </div>
                </div>

                {/* Business Listings */}
                <div className="space-y-6">
                  {businesses.length > 0 ? (businesses.map((business) => (
                    <div
                      key={business.id}
                      className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg transition-shadow duration-300"
                    >
                      <Link to="/business-details-data" state={{ businessId: business._id }}>
                        <div className="flex gap-4">
                          {/* Business Logo */}
                          <div className="flex-shrink-0">
                            <img
                              src={business.logoUrl}
                              alt={business.businessName}
                              className="w-20 h-20 rounded-xl object-cover border"
                            />
                          </div>

                          {/* Main Business Info */}
                          <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                  {business.businessName}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {business.category} • {business.address?.street}
                                </p>
                              </div>
                              {/* Featured Badge */}
                              {business.isFeature && (
                                <span className="text-xs bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full">
                                  FEATURED
                                </span>
                              )}
                            </div>

                            {/* Rating & Hours */}
                            {/* <div className="flex flex-wrap items-center gap-3">
                              <div className="flex items-center">
                                <span className="text-sm font-semibold mr-1">{business.rating}</span>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(business.rating)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                      }`}
                                  />
                                ))}
                                <span className="text-sm text-gray-500 ml-2">({business.reviews})</span>
                              </div>
                              {business.hours?.is24x7 && (
                                <div className="flex items-center text-sm text-green-600 gap-1">
                                  <Clock className="w-4 h-4" />
                                  Open 24 Hours
                                </div>
                              )}
                            </div> */}

                            {/* Description */}
                            <p className="text-sm text-gray-700">{business.description}</p>

                            {/* Services */}
                            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                              {business.services.map((service, i) => (
                                <div key={i} className="flex items-center gap-1">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  {service}
                                </div>
                              ))}
                            </div>

                            {/* Certifications */}
                            <div className="flex flex-wrap gap-2 mt-1">
                              {business.certifications.map((cert, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center gap-1 text-gray-700"
                                >
                                  <CheckCircle className="w-3 h-3 text-blue-500" />
                                  {cert}
                                </span>
                              ))}
                            </div>

                            {/* Contact & Actions */}
                            <div className="flex flex-wrap items-center gap-3 border-t pt-4 mt-4">
                              <button className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:underline">
                                <Phone className="w-4 h-4" />
                                {business.phone}
                              </button>
                              {business.website && (
                                <a
                                  href={business.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold text-black rounded-md"
                                >
                                  Visit Website
                                </a>
                              )}
                              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                                Get Quote
                              </button>
                              <span className="text-xs text-gray-500">Calls only, no SMS</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                  ) : (
                    <div className="text-center text-gray-500 py-12">
                      <h2 className="text-xl font-semibold">No businesses found</h2>
                      <p className="mt-2">Try adjusting your search or choose another category.</p>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Sidebar (1/4) */}
              <div className="w-full lg:w-80 space-y-7">
                {/* Sponsored Businesses */}
                <div className="bg-white rounded-xl shadow-md border p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-semibold text-lg text-gray-800">Sponsored Businesses</h3>
                    <span className="text-xs text-gray-500 cursor-help">ⓘ</span>
                  </div>

                  {businesses.filter((biz) => biz.isFeature === true).length > 0 ? (
                    <div className="space-y-4">
                      {businesses
                        .filter((business) => business.isFeature === true)
                        .map((business) => (
                          <div
                            key={business.id}
                            className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                          >
                            {/* Top Section */}
                            <div className="flex items-start gap-4 mb-3">
                              <img
                                src={business.logoUrl}
                                alt={business.businessName}
                                className="w-14 h-14 rounded-md object-cover border"
                              />
                              <div className="flex-1">
                                <h4 className="text-base font-semibold text-gray-900">
                                  {business.contactPerson}
                                </h4>
                                <div className="flex items-center gap-1 flex-wrap text-sm text-gray-600 mt-1">
                                  <span className="text-xs text-gray-600 ml-2">
                                    • {business.category}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-700 mb-4">{business.description}</p>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                              <button className="flex-1 sm:flex-initial px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                                {business.phone}
                              </button>
                              {business.website && (
                                <a
                                  href={business.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 sm:flex-initial px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 font-medium text-sm text-center"
                                >
                                  Visit Website
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 text-center py-8">
                      No sponsored businesses at this time.
                    </div>
                  )}
                </div>


                {/* Related Articles */}
                {/* <div className="bg-white rounded-xl shadow-md border p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Articles</h3>

                  <div className="space-y-4">
                    {businesses.map((article) => (
                      <a
                        key={article.id}
                        href="#"
                        className="flex items-start gap-4 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                      >
                        <img
                          src={article.logoUrl}
                          alt={article.title}
                          className="w-16 h-16 rounded-md object-cover flex-shrink-0 border"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 leading-snug">
                            {article.description}
                          </h4>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 border-t pt-4 text-right">
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View all articles
                    </a>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default SearchDetails;
