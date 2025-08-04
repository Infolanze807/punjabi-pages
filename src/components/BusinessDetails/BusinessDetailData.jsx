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
                    Search {business?.category} in Location
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
                  <p className="text-yellow-600 text-xs mt-3 mb-2 italic">
                    Public Holiday Info: {business?.hours?.publicHolidayNotes}
                  </p>
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
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">About</h3>
                        <p className="text-gray-700 whitespace-pre-line">
                          {business?.description || "No description available."}
                        </p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border p-4 rounded-lg bg-gray-50">
                          <strong className="block text-gray-700">Subcategory:</strong>
                          <span className="text-gray-900">{business?.subCategory || "-"}</span>
                        </div>
                        <div className="border p-4 rounded-lg bg-gray-50">
                          <strong className="block text-gray-700">Established Year:</strong>
                          <span className="text-gray-900">{business?.establishedYear || "-"}</span>
                        </div>
                        <div className="border p-4 rounded-lg bg-gray-50">
                          <strong className="block text-gray-700">ABN:</strong>
                          <span className="text-gray-900">{business?.abn || "-"}</span>
                        </div>
                        <div className="border p-4 rounded-lg bg-gray-50">
                          <strong className="block text-gray-700">Promotion:</strong>
                          <span className="text-gray-900">{business?.promotions || "-"}</span>
                        </div>
                        <div className="border p-4 rounded-lg bg-gray-50 md:col-span-2">
                          <strong className="block text-gray-700">Service Area:</strong>
                          <span className="text-gray-900">
                            {business?.serviceAreas?.length ? business.serviceAreas.join(", ") : "-"}
                          </span>
                        </div>
                      </div>

                      {/* Keywords */}
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Keywords</h3>
                        {business?.keywords?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {business.keywords.map((kw, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
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
                      {business?.address ? (
                        <div className="bg-gray-50 border rounded-lg p-4">
                          <h4 className="text-lg font-medium text-gray-700 mb-1">Address</h4>
                          <p className="text-gray-700">
                            {business.address.street}, {business.address.suburb},<br />
                            {business.address.state}, {business.address.postcode}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">No address available.</p>
                      )}

                      {/* Social Links */}
                      {business?.socialLinks && Object.keys(business.socialLinks).length > 0 && (
                        <div className="bg-gray-50 border rounded-lg p-4">
                          <h4 className="text-lg font-medium text-gray-700 mb-1">Social Links</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            {Object.entries(business.socialLinks).map(
                              ([key, value]) =>
                                value && (
                                  <li key={key}>
                                    {key}:{" "}
                                    <a
                                      href={value}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 underline break-all"
                                    >
                                      {value}
                                    </a>
                                  </li>
                                )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Certifications */}
                      {business?.certifications?.length > 0 ? (
                        <div className="bg-gray-50 border rounded-lg p-4">
                          <h4 className="text-lg font-medium text-gray-700 mb-1">Certifications</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {business.certifications.map((cert, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">No certifications listed.</p>
                      )}
                    </div>
                  )}


                  {activeTab === "services" && (
                    <div className="space-y-6">

                      {/* Our Services */}
                      {business?.services?.length ? (
                        <div className="bg-gray-50 border rounded-lg p-4">
                          <h4 className="text-lg font-medium text-gray-700 mb-2">Our Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {business.services.map((service, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">No services listed.</p>
                      )}

                      {/* Payment Methods */}
                      {business?.paymentMethods?.length ? (
                        <div className="bg-gray-50 border rounded-lg p-4">
                          <h4 className="text-lg font-medium text-gray-700 mb-2">Payment Methods</h4>
                          <div className="flex flex-wrap gap-2">
                            {business.paymentMethods.map((method, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm"
                              >
                                {method}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">No payment methods listed.</p>
                      )}
                    </div>
                  )}


                  {activeTab === "contact" && (
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border p-4 rounded-md">
                          <strong>Contact Person:</strong> {business?.contactPerson || "-"}
                        </div>
                        <div className="border p-4 rounded-md">
                          <strong>Phone:</strong> {business?.phone || "-"}
                        </div>
                        <div className="border p-4 rounded-md">
                          <strong>Alternate Phone:</strong> {business?.alternateContacts?.phone || "-"}
                        </div>
                        <div className="border p-4 rounded-md">
                          <strong>Email:</strong> {business?.email || "-"}
                        </div>
                        <div className="border p-4 rounded-md">
                          <strong>Alternate Email:</strong> {business?.alternateContacts?.email || "-"}
                        </div>
                        <div className="border p-4 rounded-md">
                          <strong>Website:</strong> <a href={business?.website} target="_blank" className="text-blue-600 underline">{business?.website || "-"}</a>
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
