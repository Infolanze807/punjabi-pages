import React, { useEffect, useState } from "react";
import SideBar from "../components/Dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getMyBussiness } from "../redux/features/dashboardSlice";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BadgeCheck, Facebook, Instagram, Link2, Linkedin, Pencil, ArrowRight } from "lucide-react";
import FullPageLoader from "../components/Loader/Loader";


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
    <div className="bg-[#f4f8fe] flex min-h-screen bg-slate-50">
      {/* <SideBar /> */}
      <main className="border-l flex-1 p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {selectedBusiness ? (
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setSelectedBusiness(null)}
                className="text-indigo-600 hover:text-indigo-800 flex items-center bg-white hover:bg-gray-100 rounded-full p-1.5"
              >
                <ArrowLeft className="w-7 h-6" />
              </button>
              <h1 className="text-xl font-extrabold text-gray-900">
                Business Details
              </h1>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-2 px-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                {/* Title & Subtitle */}
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-1">
                    My Business
                  </h2>
                  <p className="text-xs text-gray-400">Manage all registered business records.</p>
                </div>
              </div>
            </div>
          )}
        </h1>
        {loading && myBussiness.length === 0 ? (
          <div className="flex items-center justify-center">
            <FullPageLoader />
          </div>
        ) : !selectedBusiness ? (
          myBussiness.length > 0 ? (
            <div className="grid grid-col-1 md:grid-col-1 lg:grid-cols-2 gap-4">
              {myBussiness.map((biz, i) => (
                <div
                  key={i}
                  onClick={() => handleCardClick(biz)}
                  className="flex items-center bg-white rounded-xl shadow-md hover:shadow-xl transition group border-l-4 border-blue-500 hover:border-indigo-600 p-8 cursor-pointer px-14"
                >
                  <img
                    src={biz.logoUrl}
                    alt={biz.businessName}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow -ml-8 mr-6"
                  />
                  <div className="flex-1 border-l-2 border-l-blue-200">
                    <div className="pl-4">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700">{biz.businessName}</h3>
                      <span className="inline-block text-blue-700 text-xs py-1 rounded-full mt-1">{biz.category}</span>
                      {/* <p className="text-sm text-gray-500 mt-1 line-clamp-1">{biz.description || 'No description'}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center bg-white py-10 rounded-2xl shadow-md">
              {/* <img src="/src/assets/empty-business.svg" alt="No business" className="w-32 mb-6" /> */}
              <h2 className="text-xl font-semibold text-gray-700 mb-2">No Businesses Created Yet</h2>
              <p className="text-gray-500 text-md"> Looks like you haven’t added any businesses yet. </p>
              <p className="text-gray-500 mb-6"> Click “Create Business” to get started and manage your business listings here.</p>
              <button
                onClick={handleCreateBusiness}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition"
              >
                + Create Business
              </button>
            </div>
          )
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
            <div className="flex gap-2 border-b border-indigo-600">
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
                <section className="space-y-8">
                  {/* Hero Header */}
                  {/* <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h2 className="text-3xl font-extrabold text-indigo-800 flex items-center gap-2">
                      <span>🏢</span> {selectedBusiness?.businessName}
                    </h2>
                    {selectedBusiness?.category && (
                      <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs px-4 py-1 rounded-full shadow font-semibold">
                        {selectedBusiness.category}
                      </span>
                    )}
                  </div> */}

                  {/* Description Card */}
                  <div className="rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800 flex items-start gap-4">
                    <span className="text-xl">📝</span>
                    <div>
                      <h3 className="text-lg font-bold text-indigo-700 mb-1 flex items-center gap-2">About Us</h3>
                      <p className="text-gray-700 text-base">{selectedBusiness?.description || "-"}</p>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Subcategory */}
                    <div className="bg-white rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800 flex items-center gap-3">
                      <span className="text-md text-blue-500">🏷️</span>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Subcategory</div>
                        <div className="font-semibold text-gray-700 text-sm">{selectedBusiness?.subCategory || "-"}</div>
                      </div>
                    </div>
                    {/* Established Year */}
                    <div className="bg-white rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800 flex items-center gap-3">
                      <span className="text-md text-green-500">📅</span>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Established Year</div>
                        <div className="font-semibold text-gray-700 text-sm">{selectedBusiness?.establishedYear || "-"}</div>
                      </div>
                    </div>
                    {/* ABN */}
                    <div className="bg-white rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800 flex items-center gap-3">
                      <span className="text-md text-yellow-500">#️⃣</span>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">ABN</div>
                        <div className="font-semibold text-gray-700 text-sm">{selectedBusiness?.abn || "-"}</div>
                      </div>
                    </div>
                    {/* Promotions */}
                    <div className="bg-white rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800 flex items-center gap-3">
                      <span className="text-md text-pink-500">🎁</span>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Promotions</div>
                        <div className="font-semibold text-gray-700 text-sm">{selectedBusiness?.promotions || "-"}</div>
                      </div>
                    </div>
                    {/* Service Areas */}
                    <div className="bg-white rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800 flex items-center gap-3">
                      <span className="text-md text-indigo-500">📍</span>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Service Areas</div>
                        <div className="font-semibold text-gray-700 break-words text-sm">{selectedBusiness?.serviceAreas?.join(", ") || "-"}</div>
                      </div>
                    </div>
                    {/* Keywords */}
                    <div className="bg-white rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800 flex items-center gap-3">
                      <span className="text-md text-purple-500">🔑</span>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Keywords</div>
                        <div className="flex flex-wrap gap-1">
                          {(selectedBusiness?.keywords || []).length > 0 ? (
                            selectedBusiness.keywords.map((kw, i) => (
                              <span key={i} className="text-indigo-700 px-2 py-0.5 rounded-full text-xs font-medium">{kw}</span>
                            ))
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Details */}
              {activeTab === "details" && (
                <section className="space-y-8">
                  {/* Hero Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">📋</span>
                    <h2 className="text-xl font-extrabold text-indigo-800">Business Details</h2>
                  </div>
                  {/* Address Card */}
                  <div className="rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800 flex items-start gap-4">
                    <span className="text-md">📍</span>
                    <div>
                      <h3 className="text-md font-bold text-blue-700 mb-1 flex items-center gap-2">Address</h3>
                      <p className="text-gray-700 text-base">
                        {selectedBusiness?.address?.street}, {selectedBusiness?.address?.city || selectedBusiness?.address?.suburb}
, {selectedBusiness?.address?.state} {selectedBusiness?.address?.postcode}
                      </p>
                    </div>
                  </div>
                  {/* Opening Hours Card */}
                  <div className="bg-white rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-md text-green-500">⏰</span>
                      <h3 className="text-md font-bold text-green-700">Opening Hours</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-gray-700 border">
                        <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
                          <tr>
                            <th className="px-4 py-3 border-b border-gray-200">Day</th>
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
                                <td className="capitalize px-4 py-3 border-b border-gray-200 font-medium text-gray-600">{day}</td>
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
                      <p className="mt-2 text-sm italic text-gray-500">{selectedBusiness.hours.publicHolidayNotes}</p>
                    )}
                    {(selectedBusiness?.hours?.is24x7 === true || selectedBusiness?.hours?.is24x7 === "true") && (
                      <p className="mt-2 text-sm font-semibold text-green-600">✅ Open 24 x 7</p>
                    )}
                  </div>
                  {/* Social Links Card */}
                  <div className="rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-md text-blue-500">🔗</span>
                      <h3 className="text-md font-bold text-blue-700">Social Links</h3>
                    </div>
                    {selectedBusiness?.socialLinks &&
                      (selectedBusiness.socialLinks.facebook ||
                        selectedBusiness.socialLinks.instagram ||
                        selectedBusiness.socialLinks.linkedin ||
                        (selectedBusiness.socialLinks.others?.length > 0)) ? (
                      <div className="flex flex-wrap gap-4">
                        {selectedBusiness.socialLinks.facebook && (
                          <a href={selectedBusiness.socialLinks.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg hover:bg-blue-100 transition"><Facebook className="w-5 h-5" /><span>Facebook</span></a>
                        )}
                        {selectedBusiness.socialLinks.instagram && (
                          <a href={selectedBusiness.socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 border border-pink-100 rounded-lg hover:bg-pink-100 transition"><Instagram className="w-5 h-5" /><span>Instagram</span></a>
                        )}
                        {selectedBusiness.socialLinks.linkedin && (
                          <a href={selectedBusiness.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg hover:bg-blue-100 transition"><Linkedin className="w-5 h-5" /><span>LinkedIn</span></a>
                        )}
                        {selectedBusiness.socialLinks.others?.map((url, i) => (
                          <a key={i} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-100 transition"><Link2 className="w-5 h-5" /><span>Other {i + 1}</span></a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No social links available.</p>
                    )}
                  </div>
                  {/* Certifications Card */}
                  <div className="rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-md text-green-600">🎓</span>
                      <h3 className="text-md font-bold text-green-700">Certifications</h3>
                    </div>
                    {selectedBusiness?.certifications?.length > 0 ? (
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {selectedBusiness.certifications.map((cert, i) => (
                          <li key={i} className="flex items-start gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition text-sm"><span className="mt-1 w-2 h-2 bg-green-500 rounded-full"></span><p className="text-sm text-gray-700 font-medium leading-snug">{cert}</p></li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500">No certifications listed.</p>
                    )}
                  </div>
                </section>
              )}

              {/* Services */}
              {activeTab === "services" && (
                <section className="space-y-8">
                  {/* Hero Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg">🛠️</span>
                    <h2 className="text-lg font-extrabold text-indigo-800">Our Services</h2>
                  </div>
                  {/* Services List */}
                  <div className="rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800">
                    {selectedBusiness?.services?.length > 0 ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-base">
                        {selectedBusiness.services.map((service, i) => (
                          <li key={i} className="flex items-center gap-2 bg-white rounded-lg p-1 border shadow-sm px-5 text-sm">{service}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No services listed.</p>
                    )}
                  </div>
                  {/* Payment Methods */}
                  <div className="rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800">
                    <h3 className="text-md font-bold text-green-700 mb-4 flex items-center gap-2"><span>💳</span> Accepted Payment Methods</h3>
                    {selectedBusiness?.paymentMethods?.length > 0 ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-base">
                        {selectedBusiness.paymentMethods.map((method, i) => (
                          <li key={i} className="flex items-center gap-2 bg-white rounded-lg p-1 border shadow-sm px-5 text-sm">{method}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 italic">No payment methods listed.</p>
                    )}
                  </div>
                </section>
              )}

              {/* Media */}
              {activeTab === "media" && (
                <section className="space-y-8">
                  {/* Hero Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg">🖼️</span>
                    <h2 className="text-lg font-extrabold text-indigo-800">Gallery</h2>
                  </div>
                  {/* Gallery Section */}
                  <div className="rounded-xl p-5 border hover:shadow-lg hover:border-indigo-800">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
                      {selectedBusiness?.gallery?.length > 0 ? (
                        selectedBusiness.gallery.map((img, i) => (
                          <div key={i} className="relative overflow-hidden rounded-xl group shadow hover:shadow-lg transition-all duration-300 border">
                            <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-44 object-cover transform group-hover:scale-105 transition-all duration-300" />
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 italic">No images available.</p>
                      )}
                    </div>
                  </div>
                  {/* Intro Video Section */}
                  <div className="rounded-xl p-6 border hover:shadow-lg hover:border-indigo-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg text-pink-500">🎬</span>
                      <h3 className="text-lg font-bold text-pink-700">Intro Video</h3>
                    </div>
                    {selectedBusiness?.introVideo ? (
                      <div className="relative w-full h-0 pb-[32.25%] rounded-xl overflow-hidden shadow-lg">
                        <video
                          src={selectedBusiness.introVideo}
                          controls
                          className="absolute top-0 left-0 w-full h-full rounded-xl border"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">No intro video available.</p>
                    )}  
                  </div>
                </section>
              )}

              {/* Contact */}
              {activeTab === "contact" && (
                <section className="space-y-8">
                  {/* Hero Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">📞</span>
                    <h2 className="text-lg font-extrabold text-indigo-800">Contact Information</h2>
                  </div>
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 border hover:shadow-lg hover:border-indigo-800 rounded-xl">
                    {/* Left Column */}
                    <div className="space-y-4 p-6">
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">👤</span><p><strong>Primary Contact:</strong> {selectedBusiness?.contactPerson || "-"}</p></div>
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">📱</span><p><strong>Phone:</strong> {selectedBusiness?.phone || "-"}</p></div>
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">✉️</span><p><strong>Email:</strong> <a href={`mailto:${selectedBusiness?.email}`} className="text-indigo-600 underline">{selectedBusiness?.email || "-"}</a></p></div>
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">🌐</span><p><strong>Website:</strong> <a href={selectedBusiness?.website} target="_blank" rel="noreferrer" className="text-indigo-600 underline">{selectedBusiness?.website || "-"}</a></p></div>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-4 p-6">
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">📞</span><p><strong>Alt. Phone:</strong> {selectedBusiness?.alternateContacts?.phone || "-"}</p></div>
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">📧</span><p><strong>Alt. Email:</strong> <a href={`mailto:${selectedBusiness?.alternateContacts?.email}`} className="text-indigo-600 underline">{selectedBusiness?.alternateContacts?.email || "-"}</a></p></div>
                      <div className="flex items-center gap-3"><span className="text-indigo-500 text-lg">📍</span><p><strong>Address:</strong> {selectedBusiness?.address ? `${selectedBusiness?.address?.street}, ${selectedBusiness?.address?.city || selectedBusiness?.address?.suburb}
, ${selectedBusiness?.address?.state} ${selectedBusiness?.address?.postcode}` : "-"}</p></div>
                    </div>
                  </div>
                </section>
              )}
            </section>
          </>
        )}
      </main>
    </div >
  );
};


export default Dashboard
