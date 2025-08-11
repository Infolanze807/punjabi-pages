import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Star,
  Phone,
  Mail,
  Globe,
  MapPin,
  Clock,
  CheckCircle,
  Play,
  ThumbsUp,
  ThumbsDown,
  Flag,
  User,
  CreditCard,
  Wrench,
  Award,
  Share2,
  FileText,
  Calendar,
  Briefcase,
  Tag,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById } from "../../redux/features/businessSlice";
import FullPageLoader from "../Loader/Loader";


const reviewsData = [
  {
    id: 1,
    author: "Rosario",
    rating: 5,
    date: "4 months ago",
    title: "Quick, Affordable Service",
    content:
      "Came out quickly, solved the problem, and advised of next steps if problem persisted.",
    helpful: { yes: 3, no: 1 },
    recommended: true,
  },
  {
    id: 2,
    author: "RP",
    rating: 5,
    date: "6 months ago",
    title: "Royal Flow Plumbing - Great Service!",
    content:
      "We were very happy with Royal Flow Plumbing. They were prompt, clean and completed work with great workmanship!",
    helpful: { yes: 2, no: 0 },
    recommended: true,
  },
  {
    id: 3,
    author: "Antonio",
    rating: 5,
    date: "8 months ago",
    title: "Fantastic Plumber",
    content:
      "Professional service, fair pricing, and excellent workmanship. Highly recommended!",
    helpful: { yes: 4, no: 0 },
    recommended: true,
  },
];

const BusinessDetailData = () => {
  const location = useLocation();
  const businessId = location.state?.businessId;
  // const { state } = useLocation();
  // const business = state?.business;
  const dispatch = useDispatch();
  const { businessById, loading } = useSelector((state) => state.business);

  useEffect(() => {
    if (businessId) {
      dispatch(getBusinessById(businessId));
    }
  }, [businessId, dispatch]);

  const business = businessById;

  console.log("Received business:", business);

  const [activeTab, setActiveTab] = useState("about");
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if (business?.gallery?.length > 0) {
      setGalleryImages(business.gallery);
    }
  }, [business]);


  const onBack = () => {
    navigate(-1);
  };

  const coordinates = business?.location?.coordinates || [];
  const [longitude, latitude] = coordinates;

  return (
    <div>
      {loading ?
        <div><FullPageLoader /></div> :
        (
          <div className="min-h-screen bg-gray-50">
            <div className="bg-yellow-400 px-4 py-3">
              <div className="container mx-auto max-w-7xl">
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 text-black hover:text-gray-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm">
                    Search {business?.category} in Location {business?.address?.city || business?.address?.suburb}
                  </span>
                </button>
              </div>
            </div>

            <div className="container mx-auto px-7 py-6 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={business?.logoUrl}
                        alt={business?.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h1 className="text-xl font-bold text-gray-800">
                          {business?.businessName}
                        </h1>
                        <p className="text-gray-600 text-sm">
                          {business?.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{business?.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-bold text-lg">{business?.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(business?.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">({business?.reviews})</span>
                    </div>

                    <div className="text-blue-600 text-sm mb-4 cursor-pointer">
                      Write a review
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                      <MapPin className="h-4 w-4" />
                      <span>{business?.serviceAreas?.join(",")}</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                        <Phone className="h-4 w-4" />
                        <span>{business?.phone}</span>
                      </button>

                      <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                        <Mail className="h-4 w-4" />
                        <span>Send Email</span>
                      </button>

                      <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                        <Globe className="h-4 w-4" />
                        <span>Website</span>
                      </button>
                    </div>

                    <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500">
                      Request Quote
                    </button>

                    <div className="mt-6 pt-6 border-t">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-medium">
                          {business?.hours?.is24x7 ? "Open 24x7" : "Closed"}
                        </span>

                      </div>
                      <button className="text-blue-600 text-sm">
                        Additional Contacts
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm border lg:h-[600px] h-96">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={`https://www.google.com/maps?q=${latitude && longitude ? `${latitude},${longitude}` : "28.6139,77.2090"}&z=15&output=embed`}
                      allowFullScreen
                      title="Business Location"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-semibold text-base">
                    Opening Hours
                  </span>
                </div>

                {business?.hours && (
                  <ul className="text-sm text-gray-800 divide-y divide-gray-200 rounded-md border border-gray-200 overflow-hidden">
                    {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(
                      (day) => {
                        const open = business?.hours?.[day]?.open || "00:00";
                        const close = business?.hours?.[day]?.close || "00:00";

                        const isClosed = open === "00:00" && close === "00:00";
                        const today = new Date().toLocaleDateString("en-US", {
                          weekday: "long",
                        }).toLowerCase();
                        const isToday = today === day;

                        return (
                          <li
                            key={day}
                            className={`flex justify-around px-4 py-2 ${isToday ? "bg-green-50 font-medium" : "bg-white"
                              }`}
                          >
                            <span className="capitalize">{day}</span>
                            <span>{isClosed ? "-" : `${open} - ${close}`}</span>
                          </li>
                        );
                      }
                    )}
                  </ul>
                )}

                {/* Optional Public Holiday Note */}
                {business?.hours?.publicHolidayNotes && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 text-sm italic">
                    📅 Public Holiday Info: {business?.hours?.publicHolidayNotes}
                  </div>
                )}
              </div>




              {/* Accreditations */}
              {/* <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 mt-5">
          <h3 className="font-bold text-lg mb-4">Accreditations</h3>
          <div className="space-y-2">
            {businessData.accreditations.map((accreditation, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span className="text-gray-700">{accreditation}</span>
              </div>
            ))}
          </div>
        </div> */}

              {/* Photo & Video Gallery */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 mt-2">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Photos & Videos</h3>

                {/* Large Video Section */}
                {business?.introVideo && (
                  <div className="mb-6">
                    <video
                      src={business.introVideo}
                      controls
                      className="w-full h-[300px] object-cover rounded-xl shadow-md"
                    />
                  </div>
                )}

                {/* Gallery Grid */}
                {/* Gallery Grid */}
                <div className="w-full">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {galleryImages?.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Optional hover overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Tabs Navigation */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 mb-10 overflow-hidden">
                {/* Tabs Navigation */}
                <div className="border-b bg-white">
                  <nav className="flex flex-wrap justify-start lg:justify-center">
                    {["about", "details", "services", "contact"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 text-sm font-medium capitalize transition-all duration-200 ${activeTab === tab
                          ? "border-b-2 border-blue-500 text-blue-600 bg-white"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                          }`}
                      >
                        {tab === "about" ? "About Us" : tab}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="p-6 lg:p-8">
                  {activeTab === "about" && (
                    <div className="lg:col-span-2 space-y-6">

                      {/* About Description */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">About</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {business?.description || "No description available."}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Subcategory */}
                        <div className="flex items-start gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                          <Briefcase className="w-5 h-5 text-blue-600 mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Subcategory</p>
                            <p className="text-gray-900 font-medium">{business?.subCategory || "-"}</p>
                          </div>
                        </div>

                        {/* Established Year */}
                        <div className="flex items-start gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                          <Calendar className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Established Year</p>
                            <p className="text-gray-900 font-medium">{business?.establishedYear || "-"}</p>
                          </div>
                        </div>

                        {/* ABN */}
                        <div className="flex items-start gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                          <FileText className="w-5 h-5 text-purple-600 mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">ABN</p>
                            <p className="text-gray-900 font-medium">{business?.abn || "-"}</p>
                          </div>
                        </div>

                        {/* Promotion */}
                        <div className="flex items-start gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
                          <Award className="w-5 h-5 text-yellow-600 mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Promotion</p>
                            <p className="text-gray-900 font-medium">{business?.promotions || "-"}</p>
                          </div>
                        </div>

                        {/* Service Area */}
                        <div className="flex items-start gap-3 p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition md:col-span-2">
                          <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Service Area</p>
                            <p className="text-gray-900 font-medium">
                              {business?.serviceAreas?.length ? business.serviceAreas.join(", ") : "-"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Keywords */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-800">Keywords</h3>
                        </div>
                        {business?.keywords?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {business.keywords.map((kw, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full shadow-sm"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">No keywords listed.</p>
                        )}
                      </div>

                    </div>
                  )}

                  {activeTab === "details" && (
                    <div className="space-y-6">

                      {/* Address */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-red-600" />
                          <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                        </div>
                        {business?.address ? (
                          <p className="text-gray-700 leading-relaxed">
                            {business.address.street}, {business?.address?.city || business?.address?.suburb},<br />
                            {business.address.state}, {business.address.postcode}
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm">No address available.</p>
                        )}
                      </div>

                      {/* Social Links */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-2">
                          <Share2 className="w-5 h-5 text-blue-600" />
                          <h4 className="text-lg font-semibold text-gray-800">Social Links</h4>
                        </div>
                        {business?.socialLinks && Object.keys(business.socialLinks).length > 0 ? (
                          <ul className="space-y-1 text-sm">
                            {Object.entries(business.socialLinks).map(
                              ([key, value]) =>
                                value && (
                                  <li key={key} className="flex items-center gap-2">
                                    <span className="capitalize font-medium text-gray-700">{key}:</span>
                                    <a
                                      href={value}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:underline break-all"
                                    >
                                      {value}
                                    </a>
                                  </li>
                                )
                            )}
                          </ul>
                        ) : (
                          <p className="text-gray-500 text-sm">No social links available.</p>
                        )}
                      </div>

                      {/* Certifications */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-yellow-600" />
                          <h4 className="text-lg font-semibold text-gray-800">Certifications</h4>
                        </div>
                        {business?.certifications?.length > 0 ? (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {business.certifications.map((cert, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full shadow-sm"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">No certifications listed.</p>
                        )}
                      </div>

                    </div>
                  )}

                  {activeTab === "services" && (
                    <div className="space-y-6">

                      {/* Our Services */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-3">
                          <Wrench className="w-5 h-5 text-blue-600" />
                          <h4 className="text-lg font-semibold text-gray-800">Our Services</h4>
                        </div>
                        {business?.services?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {business.services.map((service, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium shadow-sm"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">No services listed.</p>
                        )}
                      </div>

                      {/* Payment Methods */}
                      <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-2 mb-3">
                          <CreditCard className="w-5 h-5 text-green-600" />
                          <h4 className="text-lg font-semibold text-gray-800">Payment Methods</h4>
                        </div>
                        {business?.paymentMethods?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {business.paymentMethods.map((method, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium shadow-sm"
                              >
                                {method}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-sm">No payment methods listed.</p>
                        )}
                      </div>

                    </div>
                  )}

                  {activeTab === "contact" && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-800 border-b pb-2">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Contact Person */}
                        <div className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border hover:shadow-md transition">
                          <User className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Contact Person</p>
                            <p className="text-gray-800 font-medium">{business?.contactPerson || "-"}</p>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border hover:shadow-md transition">
                          <Phone className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="text-gray-800 font-medium">{business?.phone || "-"}</p>
                          </div>
                        </div>

                        {/* Alternate Phone */}
                        <div className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border hover:shadow-md transition">
                          <Phone className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Alternate Phone</p>
                            <p className="text-gray-800 font-medium">{business?.alternateContacts?.phone || "-"}</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border hover:shadow-md transition">
                          <Mail className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <a
                              href={`mailto:${business?.email}`}
                              className="text-blue-600 font-medium hover:underline"
                            >
                              {business?.email || "-"}
                            </a>
                          </div>
                        </div>

                        {/* Alternate Email */}
                        <div className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border hover:shadow-md transition">
                          <Mail className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Alternate Email</p>
                            <a
                              href={`mailto:${business?.alternateContacts?.email}`}
                              className="text-blue-600 font-medium hover:underline"
                            >
                              {business?.alternateContacts?.email || "-"}
                            </a>
                          </div>
                        </div>

                        {/* Website */}
                        <div className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border hover:shadow-md transition">
                          <Globe className="w-5 h-5 text-gray-500" />
                          <div>
                            <p className="text-sm text-gray-500">Website</p>
                            {business?.website ? (
                              <a
                                href={business.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium hover:underline"
                              >
                                {business.website}
                              </a>
                            ) : (
                              <span className="text-gray-800 font-medium">-</span>
                            )}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Reviews Section */}
              {/* <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">{businessData.name} Reviews</h3>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500">
              Write a review
            </button>
          </div>

          <div className="mb-4 text-sm text-gray-600">
            1-{reviewsData.length} of {businessData.reviews} Reviews
          </div>

          <div className="space-y-6">
            {reviewsData.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {review.author.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{review.author}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">
                        {review.date}
                      </span>
                    </div>

                    <h4 className="font-medium mb-2">{review.title}</h4>
                    <p className="text-gray-700 mb-3">{review.content}</p>

                    {review.recommended && (
                      <div className="flex items-center gap-1 text-green-600 text-sm mb-3">
                        <CheckCircle className="h-4 w-4" />
                        <span>Recommends this product</span>
                        <span className="text-gray-500">Yes</span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">Helpful?</span>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <ThumbsUp className="h-4 w-4" />
                        <span>Yes {review.helpful.yes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <ThumbsDown className="h-4 w-4" />
                        <span>No {review.helpful.no}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <Flag className="h-4 w-4" />
                        <span>Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
            </div>
          </div>
        )}
    </div>
  );
};

export default BusinessDetailData;
