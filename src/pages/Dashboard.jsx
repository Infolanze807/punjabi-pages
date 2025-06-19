import React, { useEffect, useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getMyBussiness } from "../redux/features/dashboardSlice";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


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
  const navigate = useNavigate();


  console.log("myBussiness", myBussiness);

  useEffect(() => {
    dispatch(getMyBussiness())
  }, [])


  const [activeTab, setActiveTab] = useState("overview");


  const handleCardClick = (business) => {
    setSelectedBusiness(business);
  };

  const handleUpdateClick = () => {
    if (myBussiness && myBussiness.length > 0) {
      navigate("/addProfile", { state: { existingBusiness: selectedBusiness, isEdit: true } });
    }
  };

  const handleCreateBusiness = () => {
    navigate("/addProfile");
  };


  return (
    <div className="flex min-h-screen bg-slate-50">
      <SideBar />
      <main className="border-l flex-1 p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {selectedBusiness ? (
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setSelectedBusiness(null)}
                className="text-indigo-600 hover:text-indigo-800 flex items-center bg-gray-200 hover:bg-gray-100 rounded-full p-1.5"
              >
                <ArrowLeft className="w-7 h-6" />
              </button>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Business Details
              </h1>
            </div>
          ) : (
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              My Businesses
            </h1>
          )}
        </h1>
        {!selectedBusiness ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Loading Placeholder (you can enhance this with a skeleton loader)
              <div className="col-span-full text-center py-16">
                <p className="text-gray-500 text-lg animate-pulse">Loading businesses...</p>
              </div>
            ) : myBussiness?.length > 0 ? (
              myBussiness.map((biz, i) => (
                <div
                  key={i}
                  onClick={() => handleCardClick(biz)}
                  className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden hover:ring-2 hover:ring-blue-500 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="h-48 flex items-center justify-center bg-white">
                    <img
                      src={biz.logoUrl}
                      alt={biz.businessName}
                      className="object-contain h-36 w-36"
                    />
                  </div>
                  <div className="p-4 border-t border-blue-600">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                      {biz.businessName}
                    </h2>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span className="text-blue-700 px-2 py-1 rounded-full">
                        {biz.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center bg-white py-12 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  No Business Created Yet
                </h2>
                <p className="text-gray-500 mb-6">
                  Looks like you haven’t added any businesses yet.
                  <br />
                  Click “Create Business” to get started and manage your business listings here.
                </p>
                <button
                  onClick={handleCreateBusiness}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-xl transition"
                >
                  Create Business
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={selectedBusiness?.logoUrl}
                  alt="Logo"
                  className="w-24 h-24 rounded-full border border-gray-300 object-cover"
                />
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900">
                    {selectedBusiness?.businessName}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {selectedBusiness?.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedBusiness?.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="bg-indigo-500 text-white px-3 py-1 rounded-xl text-xs font-semibold"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleUpdateClick}
                  className="inline-flex items-center gap-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition duration-200"
                >
                  Update Business Profile
                </button>
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
                  <h2 className="text-xl font-bold mb-4">About Us</h2>
                  <p className="text-gray-700 leading-relaxed">{selectedBusiness?.description}</p>
                  <div className="mt-4 text-gray-600">
                    <p>
                      <strong>Established:</strong> {selectedBusiness?.establishedYear}
                    </p>
                    <p>
                      <strong>ABN:</strong> {selectedBusiness?.abn}
                    </p>
                    <p>
                      <strong>Promotions:</strong> {selectedBusiness?.promotions}
                    </p>
                    <p>
                      <strong>Service Areas:</strong> {selectedBusiness?.serviceAreas.join(", ")}
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
                      {selectedBusiness?.address?.street}, {selectedBusiness?.address?.suburb},{" "}
                      {selectedBusiness?.address?.state} {selectedBusiness?.address?.postcode}
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <table className="w-full text-left text-gray-700">
                      <tbody>
                        {Object.entries(selectedBusiness?.hours || {})
                          .filter(([key]) =>
                            ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].includes(key)
                          )
                          .map(([day, time]) => (
                            <tr key={day} className="border-b border-gray-200">
                              <td className="capitalize py-1 font-medium">{day}</td>
                              <td className="py-1">
                                {time.open === "00:00" && time.close === "00:00"
                                  ? "Closed"
                                  : `${formatTime(time.open)} - ${formatTime(time.close)}`}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    {selectedBusiness?.hours?.publicHolidayNotes && (
                      <p className="mt-2 text-sm italic text-gray-500">
                        {selectedBusiness?.hours?.publicHolidayNotes}
                      </p>
                    )}

                    {selectedBusiness?.hours?.is24x7 && (
                      <p className="mt-2 text-sm italic text-green-600 font-semibold">
                        Open 24 x 7
                      </p>
                    )}

                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Social Links</h3>
                    <ul className="flex flex-wrap gap-4 text-indigo-600">
                      {selectedBusiness?.socialLinks.facebook && (
                        <li>
                          <a
                            href={selectedBusiness?.socialLinks.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            Facebook
                          </a>
                        </li>
                      )}
                      {selectedBusiness?.socialLinks.instagram && (
                        <li>
                          <a
                            href={selectedBusiness?.socialLinks.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            Instagram
                          </a>
                        </li>
                      )}
                      {selectedBusiness?.socialLinks.linkedin && (
                        <li>
                          <a
                            href={selectedBusiness?.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                          >
                            LinkedIn
                          </a>
                        </li>
                      )}
                      {selectedBusiness?.socialLinks.others.length > 0 &&
                        selectedBusiness?.socialLinks.others.map((url, i) => (
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
                      {selectedBusiness?.certifications.map((cert, i) => (
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
                    {selectedBusiness?.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Payment Methods</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                      {selectedBusiness?.paymentMethods.map((method, i) => (
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
                    {selectedBusiness?.gallery.map((img, i) => (
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
                      src={selectedBusiness?.introVideo}
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
                        <strong>Primary Contact Person:</strong> {selectedBusiness?.contactPerson}
                      </p>
                      <p>
                        <strong>Phone:</strong> {selectedBusiness?.phone}
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href={`mailto:${selectedBusiness?.email}`}
                          className="text-indigo-600 underline"
                        >
                          {selectedBusiness?.email}
                        </a>
                      </p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a
                          href={selectedBusiness?.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 underline"
                        >
                          {selectedBusiness?.website}
                        </a>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p>
                        <strong>Alternate Phone:</strong> {selectedBusiness?.alternateContacts?.phone}
                      </p>
                      <p>
                        <strong>Alternate Email:</strong>{" "}
                        <a
                          href={`mailto:${selectedBusiness?.alternateContacts?.email}`}
                          className="text-indigo-600 underline"
                        >
                          {selectedBusiness?.alternateContacts?.email}
                        </a>
                      </p>
                      <p>
                        <strong>Address:</strong>{" "}
                        {selectedBusiness?.address?.street}, {selectedBusiness?.address?.suburb},{" "}
                        {selectedBusiness?.address?.state} {selectedBusiness?.address?.postcode}
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
