import { useState } from "react";
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

const businessData = {
  id: 1,
  name: "Royal Flow Plumbing Pty Ltd",
  category: "Plumbers & Gas Fitters",
  address: "Glenmore Park, NSW",
  phone: "0499 986 698",
  email: "info@royalflowplumbing.com.au",
  website: "www.royalflowplumbing.com.au",
  rating: 4.7,
  reviews: 44,
  description: "Professional, Honest, Courteous & Reliable Plumbing Services",
  logo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  isOpen: true,
  openingHours: "Open Today 24 hours",
  serviceArea: "Mobile business servicing Glenmore Park",

  highlights: [
    {
      title: "PROFESSIONAL & HONEST PLUMBING",
      subtitle: "Professional & Honest Plumbing",
    },
    {
      title: "COURTEOUS & RELIABLE PLUMBING",
      subtitle: "Courteous & Reliable Plumbing",
    },
    {
      title: "24/7 AVAILABILITY",
      subtitle: "24/7 Availability",
    },
  ],

  accreditations: [
    "All Residential & Commercial Plumbing Services",
    "Blocked Drains Cleared Quickly & Affordably",
    "Professional, Honest & Reliable Licensed & Insured Plumbers",
  ],

  gallery: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  ],

  videos: [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Professional Plumbing Services",
    },
  ],

  aboutUs: `At Royal Flow Plumbing Pty Ltd, we are a team of Qualified & Highly Skilled Plumbers.

• Fair Pricing On Quality Plumbing Works
• 24/7 Emergency Service Always Available  
• Complete & Commercial Plumbing, Hot Water & Gas Fitting
• Servicing All Of Sydney & Surrounding Areas

We are a friendly and experienced team of fully local plumbers, serving all of Sydney for over 10 years.

From general maintenance to renovations and construction, we aim to help you with your plumbing needs! Big job too small, give us a call today!

About Royal Flow Plumbing Pty Ltd:

We pride ourselves on our consistently high quality of work. We develop strong relationships with our clients through honesty and integrity. At Royal Flow Plumbing Pty Ltd, our work is always delivered on time, every time, with great care and at a fair price.`,

  paymentMethods: ["EFT", "MasterCard", "Visa"],

  services: [
    "Emergency Plumbing",
    "Hot Water Repairs",
    "Blocked Drains",
    "All General Plumbing",
  ],
};

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
  const { state } = useLocation();
  const business = state?.business;

  console.log("Received business:", business);

  const [activeTab, setActiveTab] = useState("about");
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const coordinates = business?.location?.coordinates || [];
  const [longitude, latitude] = coordinates;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-400 px-4 py-3">
        <div className="container mx-auto max-w-7xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-black hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">
              Search Plumbers & Gas Fitters in Glenmore Park, NSW
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
                  src={business.logoUrl}
                  alt={business.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    {business.businessName}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    {business.category}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{business.description}</p>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-lg">{business.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(business.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({business.reviews})</span>
              </div>

              <div className="text-blue-600 text-sm mb-4 cursor-pointer">
                Write a review
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <MapPin className="h-4 w-4" />
                <span>{business.serviceAreas?.join(",")}</span>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                  <Phone className="h-4 w-4" />
                  <span>{business.phone}</span>
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
            <div className="bg-white rounded-lg shadow-sm border lg:h-[650px] h-96">
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

        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="text-green-600 font-semibold text-base">
              {business?.hours?.is24x7 ? "Open 24/7" : "Opening Hours"}
            </span>
          </div>

          {business?.hours &&
            ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].some(
              (day) =>
                business.hours[day]?.open !== "00:00" || business.hours[day]?.close !== "00:00"
            ) && (
              <ul className="text-sm text-gray-800 divide-y divide-gray-200 rounded-md border border-gray-200 overflow-hidden">
                {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(
                  (day) => {
                    const open = business?.hours?.[day]?.open;
                    const close = business?.hours?.[day]?.close;

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
                        <span>{isClosed ? "Closed" : `${open} - ${close}`}</span>
                      </li>
                    );
                  }
                )}
              </ul>
            )}

          {/* Optional Public Holiday Note */}
          {business?.hours?.publicHolidayNotes && (
            <p className="text-yellow-600 text-xs mt-3 mb-2 italic">
              Public Holiday Info: {business.hours.publicHolidayNotes}
            </p>
          )}
        </div>




        {/* Accreditations */}
        {/* <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
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
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="font-bold text-lg mb-4">Photos & Videos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {/* Video Thumbnail */}
            {/* {businessData.videos.map((video) => (
              <div key={video.id} className="relative cursor-pointer group">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-20 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
            ))} */}

            {/* Photo Thumbnails */}
            {business.gallery.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-80"
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        {/* <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="border-b">
            <nav className="flex">
              {["about", "services", "locations", "faqs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium capitalize ${activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {tab === "about" ? "About Us" : tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "about" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="font-bold text-lg mb-4">
                    About {businessData.name}
                  </h3>
                  <div className="text-gray-700 whitespace-pre-line">
                    {businessData.aboutUs}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Payment Methods</h4>
                  <div className="flex gap-2 mb-6">
                    {businessData.paymentMethods.map((method, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-bold mb-4">Services</h4>
                  <div className="space-y-2">
                    {businessData.services.map((service, index) => (
                      <div key={index} className="text-gray-700">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div> */}

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
  );
};

export default BusinessDetailData;
