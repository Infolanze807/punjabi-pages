import React, { useEffect, useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getMyBussiness } from "../redux/features/dashboardSlice";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BadgeCheck, Facebook, Instagram, Link2, Linkedin, Pencil } from "lucide-react";


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
    <div className="bg-[#f9fafb] flex min-h-screen bg-slate-50">
      {/* <SideBar /> */}
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
              <h1 className="text-xl font-extrabold text-gray-900">
                Business Details
              </h1>
            </div>
          ) : (
            <h1 className="text-xl font-extrabold text-gray-900 mb-4">
              My Businesses
            </h1>
          )}
        </h1>
        {!selectedBusiness ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Loading Placeholder (you can enhance this with a skeleton loader)
              <div className="col-span-full text-center py-16 shadow-lg">
                <p className="text-gray-500 text-lg animate-pulse">Loading businesses...</p>
              </div>
            ) : myBussiness?.length > 0 ? (
              myBussiness.map((biz, i) => (
                <div
                  key={i}
                  onClick={() => handleCardClick(biz)}
                  className="bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden hover:ring-2 hover:ring-blue-500 hover:scale-[1.02] transition-transform duration-300"
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
                  <h1 className="text-2xl font-extrabold text-gray-900">
                    {selectedBusiness?.businessName}
                  </h1>
                  <p className="text-base text-gray-600">
                    {selectedBusiness?.category}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={handleUpdateClick}
                  className="inline-flex items-center gap-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition duration-200"
                >
                  <Pencil className="w-4 h-4" />
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
                <section className="">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-1">About Us</h2>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold">Description:</span><br />
                    {selectedBusiness?.description || "-"}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Category :</span>
                      <span className="font-medium">{selectedBusiness?.category || "-"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Subcategory :</span>
                      <span className="font-medium">{selectedBusiness?.subCategory || "-"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Established Year :</span>
                      <span className="font-medium">{selectedBusiness?.establishedYear || "-"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">ABN :</span>
                      <span className="font-medium">{selectedBusiness?.abn || "-"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Promotions :</span>
                      <span className="font-medium">{selectedBusiness?.promotions || "-"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Service Areas :</span>
                      <span className="font-medium break-words">
                        {selectedBusiness?.serviceAreas?.join(", ") || "-"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Keyword :</span>
                      <span className="font-medium break-words">
                        {selectedBusiness?.keywords?.join(", ") || "-"}
                      </span>
                    </div>
                  </div>
                </section>
              )}

              {/* Details */}
              {activeTab === "details" && (
                <>
                  <section className="space-y-10">

                    {/* Business Details Header */}
                    <div>
                      <h2 className="text-2xl font-extrabold text-gray-800 border-b pb-2 mb-4">
                        Business Details
                      </h2>
                    </div>

                    {/* Address */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {selectedBusiness?.address?.street}, {selectedBusiness?.address?.suburb},{" "}
                        {selectedBusiness?.address?.state} {selectedBusiness?.address?.postcode}
                      </p>
                    </div>

                    {/* Opening Hours */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">Opening Hours</h3>
                      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
                        <table className="w-full text-left text-sm text-gray-700">
                          <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
                            <tr>
                              <th className="px-4 py-3 border-b border-gray-200">Day</th>
                              <th className="px-4 py-3 border-b border-gray-200"></th>
                              <th className="px-4 py-3 border-b border-gray-200">Hours</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(selectedBusiness?.hours || {})
                              .filter(([key]) =>
                                ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].includes(key)
                              )
                              .map(([day, time]) => (
                                <tr key={day} className="hover:bg-gray-50 transition">
                                  <td className="capitalize px-4 py-3 border-b border-gray-200 font-medium text-gray-600">
                                    {day}
                                  </td>
                                  <td className="capitalize px-4 py-3 border-b border-gray-200 font-medium text-gray-600"></td>
                                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                                    {time.open === "00:00" && time.close === "00:00"
                                      ? "Closed"
                                      : `${formatTime(time.open)} - ${formatTime(time.close)}`}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>


                      {selectedBusiness?.hours?.publicHolidayNotes && (
                        <p className="mt-2 text-sm italic text-gray-500">
                          {selectedBusiness.hours.publicHolidayNotes}
                        </p>
                      )}

                      {(selectedBusiness?.hours?.is24x7 === true || selectedBusiness?.hours?.is24x7 === "true") && (
                        <p className="mt-2 text-sm font-semibold text-green-600">
                          ✅ Open 24 x 7
                        </p>
                      )}
                    </div>

                    {/* Social Links */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">Social Links</h3>

                      {selectedBusiness?.socialLinks &&
                        (selectedBusiness.socialLinks.facebook ||
                          selectedBusiness.socialLinks.instagram ||
                          selectedBusiness.socialLinks.linkedin ||
                          (selectedBusiness.socialLinks.others?.length > 0)) ? (
                        <div className="flex flex-wrap gap-4">
                          {selectedBusiness.socialLinks.facebook && (
                            <a
                              href={selectedBusiness.socialLinks.facebook}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg hover:bg-blue-100 transition"
                            >
                              <Facebook className="w-5 h-5" />
                              <span>Facebook</span>
                            </a>
                          )}
                          {selectedBusiness.socialLinks.instagram && (
                            <a
                              href={selectedBusiness.socialLinks.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 border border-pink-100 rounded-lg hover:bg-pink-100 transition"
                            >
                              <Instagram className="w-5 h-5" />
                              <span>Instagram</span>
                            </a>
                          )}
                          {selectedBusiness.socialLinks.linkedin && (
                            <a
                              href={selectedBusiness.socialLinks.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg hover:bg-blue-100 transition"
                            >
                              <Linkedin className="w-5 h-5" />
                              <span>LinkedIn</span>
                            </a>
                          )}
                          {selectedBusiness.socialLinks.others?.map((url, i) => (
                            <a
                              key={i}
                              href={url}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
                            >
                              <Link2 className="w-5 h-5" />
                              <span>Other {i + 1}</span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No social links available.</p>
                      )}
                    </div>



                    {/* Certifications */}

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <BadgeCheck className="w-5 h-5 text-green-600" />
                        Certifications
                      </h3>

                      {selectedBusiness?.certifications?.length > 0 ? (
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {selectedBusiness.certifications.map((cert, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                            >
                              <span className="mt-1 w-2 h-2 bg-green-500 rounded-full"></span>
                              <p className="text-sm text-gray-700 font-medium leading-snug">{cert}</p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">No certifications listed.</p>
                      )}
                    </div>
                  </section>
                </>
              )}

              {/* Services */}
              {activeTab === "services" && (
                <>
                  <section>
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-2">Our Services</h2>

                    {selectedBusiness?.services?.length > 0 ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-disc px-6 text-gray-700 text-sm leading-relaxed">
                        {selectedBusiness.services.map((service, i) => (
                          <li key={i}>{service}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No services listed.</p>
                    )}

                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-1">Accepted Payment Methods</h3>

                      {selectedBusiness?.paymentMethods?.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-disc pl-6 space-y-2 text-gray-700 text-sm leading-relaxed">
                          {selectedBusiness.paymentMethods.map((method, i) => (
                            <li key={i}>{method}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic">No payment methods listed.</p>
                      )}
                    </div>
                  </section>
                </>
              )}


              {/* Media */}
              {activeTab === "media" && (
                <>
                  <section className="">

                    {/* Gallery Section */}
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-2">Gallery</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                      {selectedBusiness?.gallery?.length > 0 ? (
                        selectedBusiness.gallery.map((img, i) => (
                          <div
                            key={i}
                            className="relative overflow-hidden rounded-xl group shadow hover:shadow-lg transition-all duration-300 border"
                          >
                            <img
                              src={img}
                              alt={`Gallery ${i + 1}`}
                              className="w-full h-52 object-cover transform group-hover:scale-105 transition-all duration-300"
                            />
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 italic">No images available.</p>
                      )}
                    </div>

                    {/* Intro Video Section */}
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-4 border-b pb-2">Intro Video</h2>

                    {selectedBusiness?.introVideo ? (
                      <div className="relative w-full h-0 pb-[35.25%] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src={selectedBusiness.introVideo}
                          title="Intro Video"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full rounded-xl border"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">No intro video available.</p>
                    )}
                  </section>
                </>
              )}


              {/* Contact */}
              {activeTab === "contact" && (
                <>
                  <section className="">
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-2">Contact Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-sm leading-relaxed">

                      {/* Left Column */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-user-circle"></i></span>
                          <p><strong>Primary Contact:</strong> {selectedBusiness?.contactPerson || "-"}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-phone"></i></span>
                          <p><strong>Phone:</strong> {selectedBusiness?.phone || "-"}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-envelope"></i></span>
                          <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${selectedBusiness?.email}`} className="text-indigo-600 underline">
                              {selectedBusiness?.email || "-"}
                            </a>
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-globe"></i></span>
                          <p>
                            <strong>Website:</strong>{" "}
                            <a href={selectedBusiness?.website} target="_blank" rel="noreferrer" className="text-indigo-600 underline">
                              {selectedBusiness?.website || "-"}
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-phone-alt"></i></span>
                          <p><strong>Alt. Phone:</strong> {selectedBusiness?.alternateContacts?.phone || "-"}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-envelope-open-text"></i></span>
                          <p>
                            <strong>Alt. Email:</strong>{" "}
                            <a href={`mailto:${selectedBusiness?.alternateContacts?.email}`} className="text-indigo-600 underline">
                              {selectedBusiness?.alternateContacts?.email || "-"}
                            </a>
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-indigo-500 mt-1"><i className="fas fa-map-marker-alt"></i></span>
                          <p>
                            <strong>Address:</strong>{" "}
                            {selectedBusiness?.address
                              ? `${selectedBusiness?.address?.street}, ${selectedBusiness?.address?.suburb}, ${selectedBusiness?.address?.state} ${selectedBusiness?.address?.postcode}`
                              : "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
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
