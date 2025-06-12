import React, { useEffect, useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getMyBussiness } from "../redux/features/dashboardSlice";

const data = {
  businessName: "Tasty Bites Restaurant",
  abn: "12345678901",
  category: "Restaurants",
  categoryGroup: "Food & Dining",
  description: "Delicious homemade meals with fresh ingredients.",
  establishedYear: 2015,

  contactPerson: "John Doe",
  phone: "+61 412 345 678",
  email: "contact@tastybites.com.au",
  website: "https://www.tastybites.com.au",
  alternateContacts: {
    phone: "+61 412 999 999",
    email: "support@tastybites.com.au",
  },

  address: {
    street: "123 Foodie Lane",
    suburb: "Melbourne",
    state: "VIC",
    postcode: "3000",
  },
  geocode: {
    coordinates: [-37.8136, 144.9631],
  },
  serviceAreas: ["Melbourne CBD", "Docklands"],

  hours: {
    monday: { open: "09:00", close: "21:00" },
    tuesday: { open: "09:00", close: "21:00" },
    wednesday: { open: "09:00", close: "21:00" },
    thursday: { open: "09:00", close: "21:00" },
    friday: { open: "09:00", close: "22:00" },
    saturday: { open: "10:00", close: "22:00" },
    sunday: { open: "10:00", close: "20:00" },
    publicHolidayNotes: "Closed on public holidays",
    is24x7: false,
  },

  logoUrl: "https://www.tastybites.com.au/logo.png",
  gallery: [
    "https://www.tastybites.com.au/gallery1.jpg",
    "https://www.tastybites.com.au/gallery2.jpg",
  ],
  introVideo: "https://www.youtube.com/embed/example",

  socialLinks: {
    facebook: "https://www.facebook.com/tastybites",
    instagram: "https://www.instagram.com/tastybites",
    linkedin: "",
    others: ["https://www.tiktok.com/@tastybites"],
  },

  keywords: ["restaurant", "homemade", "fresh food", "family friendly"],
  services: ["Dine-in", "Takeaway", "Catering"],
  paymentMethods: ["Cash", "Credit Card", "EFTPOS", "Apple Pay"],
  certifications: ["Food Safety Certified"],
  promotions: "Happy hour from 5pm to 7pm every Friday!",
};

const formatTime = (time) => {
  // Simple 24h to 12h format (e.g. "21:00" → "9:00 PM")
  if (!time) return "";
  const [hour, min] = time.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${min.toString().padStart(2, "0")} ${ampm}`;
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const { myBussiness, loading } = useSelector((state) => state.dashboard);

  console.log("myBussiness", myBussiness);

  useEffect(() => {
    dispatch(getMyBussiness())
  }, [])


  const [activeTab, setActiveTab] = useState("overview");


  const handleCardClick = (business) => {
    setSelectedBusiness(business);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <SideBar />
      <main className="border-l flex-1 p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {selectedBusiness ? "Business Details" : "My Businesses"}
        </h1>
        {!selectedBusiness ? (
          // 🟦 List View
          <div className="grid gap-6">
            {myBussiness?.length > 0 ? (
              myBussiness.map((biz, i) => (
                <div
                  key={i}
                  onClick={() => handleCardClick(biz)}
                  className="bg-white p-4 rounded-xl shadow cursor-pointer hover:ring-2 hover:ring-indigo-500 transition"
                >
                  <img
                    src={biz.logoUrl}
                    alt={biz.businessName}
                    className="w-40 h-40 object-cover rounded-lg mb-3"
                  />
                  <h2 className="text-xl font-bold">{biz.businessName}</h2>
                  <p className="text-sm text-gray-600">
                    {biz.categoryGroup} / {biz.category}
                  </p>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={() => setSelectedBusiness(null)}
              className="text-sm text-indigo-600 underline mb-4"
            >
              ← Back to Business List
            </button>
            <div className="flex items-center gap-6">
              <img
                src={myBussiness[0]?.logoUrl}
                alt="Logo"
                className="w-24 h-24 rounded-full border border-gray-300 object-cover"
              />
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {myBussiness[0]?.businessName}
                </h1>
                <p className="text-lg text-gray-600">
                 {myBussiness[0]?.category}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {myBussiness[0]?.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-[#135e63]">
              {["overview", "details", "services", "media", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize px-5 py-3 font-semibold rounded-t-md transition-colors duration-200 ${activeTab === tab
                    ? "bg-white border border-b-0 border-gray-300 text-indigo-700 shadow"
                    : "text-gray-600 hover:text-indigo-700"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <section className="bg-white p-6 rounded-xl shadow border min-h-[300px]">
              {/* Overview */}
              {activeTab === "overview" && (
                <>
                  <h2 className="text-2xl font-bold mb-4">About Us</h2>
                  <p className="text-gray-700 leading-relaxed">{myBussiness[0]?.description}</p>
                  <div className="mt-4 space-y-1 text-gray-600">
                    <p>
                      <strong>Established:</strong> {myBussiness[0]?.establishedYear}
                    </p>
                    <p>
                      <strong>ABN:</strong> {myBussiness[0]?.abn}
                    </p>
                    <p>
                      <strong>Promotions:</strong> {myBussiness[0]?.promotions}
                    </p>
                    <p>
                      <strong>Service Areas:</strong> {myBussiness[0]?.serviceAreas.join(", ")}
                    </p>
                  </div>
                </>
              )}

              {/* Details */}
              {activeTab === "details" && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Business Details</h2>

                  {/* Address */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-700">
                      {myBussiness[0]?.address?.street}, {myBussiness[0]?.address?.suburb},{" "}
                      {myBussiness[0]?.address?.state} {myBussiness[0]?.address?.postcode}
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <table className="w-full text-left text-gray-700">
                      <tbody>
                        {[
                          "monday",
                          "tuesday",
                          "wednesday",
                          "thursday",
                          "friday",
                          "saturday",
                          "sunday",
                        ].map((day) => (
                          <tr key={day} className="border-b border-gray-200">
                            <td className="capitalize py-1 font-medium">
                              {day}
                            </td>
                            <td className="py-1">
                              {data.hours[day].open === "00:00" &&
                                data.hours[day].close === "00:00"
                                ? "Closed"
                                : `${formatTime(data.hours[day].open)} - ${formatTime(
                                  data.hours[day].close
                                )}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {data.hours.publicHolidayNotes && (
                      <p className="mt-2 text-sm italic text-gray-500">
                        {data.hours.publicHolidayNotes}
                      </p>
                    )}
                    {data.hours.is24x7 && (
                      <p className="mt-2 text-sm italic text-green-600 font-semibold">
                        Open 24 x 7
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Social Links</h3>
                    <ul className="flex flex-wrap gap-4 text-indigo-600">
                      {myBussiness[0]?.socialLinks.facebook && (
                        <li>
                          <a
                            href={myBussiness[0]?.socialLinks.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            Facebook
                          </a>
                        </li>
                      )}
                      {myBussiness[0]?.socialLinks.instagram && (
                        <li>
                          <a
                            href={myBussiness[0]?.socialLinks.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            Instagram
                          </a>
                        </li>
                      )}
                      {myBussiness[0]?.socialLinks.linkedin && (
                        <li>
                          <a
                            href={myBussiness[0]?.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            LinkedIn
                          </a>
                        </li>
                      )}
                      {myBussiness[0]?.socialLinks.others.length > 0 &&
                        myBussiness[0]?.socialLinks.others.map((url, i) => (
                          <li key={i}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              className="underline"
                            >
                              Other {i + 1}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {myBussiness[0]?.certifications.map((cert, i) => (
                        <li key={i}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Services */}
              {activeTab === "services" && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    {myBussiness[0]?.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Payment Methods</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {myBussiness[0]?.paymentMethods.map((method, i) => (
                        <li key={i}>{method}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* Media */}
              {activeTab === "media" && (
                <>
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {myBussiness[0]?.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        className="rounded-lg object-cover w-full h-48 shadow-sm border"
                      />
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Intro Video</h2>
                  <div className="aspect-w-16 aspect-h-9 max-w-4xl">
                    <iframe
                      src={myBussiness[0]?.introVideo}
                      title="Intro Video"
                      allowFullScreen
                      className="w-full h-64 rounded-lg shadow"
                    />
                  </div>
                </>
              )}

              {/* Contact */}
              {activeTab === "contact" && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p>
                        <strong>Primary Contact Person:</strong> {myBussiness[0]?.contactPerson}
                      </p>
                      <p>
                        <strong>Phone:</strong> {myBussiness[0]?.phone}
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href={`mailto:${myBussiness[0]?.email}`}
                          className="text-indigo-600 underline"
                        >
                          {myBussiness[0]?.email}
                        </a>
                      </p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a
                          href={myBussiness[0]?.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 underline"
                        >
                          {myBussiness[0]?.website}
                        </a>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p>
                        <strong>Alternate Phone:</strong> {myBussiness[0]?.alternateContacts?.phone}
                      </p>
                      <p>
                        <strong>Alternate Email:</strong>{" "}
                        <a
                          href={`mailto:${myBussiness[0]?.alternateContacts?.email}`}
                          className="text-indigo-600 underline"
                        >
                          {myBussiness[0]?.alternateContacts?.email}
                        </a>
                      </p>
                      <p>
                        <strong>Address:</strong>{" "}
                        {myBussiness[0]?.address?.street}, {myBussiness[0]?.address?.suburb},{" "}
                        {myBussiness[0]?.address?.state} {myBussiness[0]?.address?.postcode}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </section>
          </>
        )}
      </main>
    </div >
  );
};


export default Dashboard
