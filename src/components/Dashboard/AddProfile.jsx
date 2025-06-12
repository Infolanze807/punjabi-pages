import React, { useState } from "react";
import { Building2, Phone, Globe, CreditCard, Upload, Clock, Tag, X, Plus, MapPin, Share2, Megaphone, Award, Info, Briefcase } from "lucide-react";
import SideBar from "./SideBar";
import { addProfile } from "../../redux/features/dashboardSlice";
import { useDispatch } from "react-redux";

const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];

const hoursInit = daysOfWeek.reduce((acc, day) => {
    acc[day] = { open: "", close: "" };
    return acc;
}, { publicHolidayNotes: "", is24x7: false });

const AddProfile = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        businessName: "",
        category: "",
        phone: "",
        website: "",
        description: "",
        street: "",
        city: "",
        stateName: "",
        country: "",
        postalCode: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        certifications: [""],
        promotions: "",
        keywords: [""],
        services: [""],
        others: [""],
        hours: hoursInit,
        selectedPayments: ["Cash", "Credit Card", "EFTPOS", "Apple Pay"],
    });

    const [paymentMethods, setPaymentMethods] = useState([
        "Cash",
        "Credit Card",
        "Bank Transfer",
        "EFTPOS",
        "Google Pay",
        "Apple Pay",
    ]);

    const [selectedPayments, setSelectedPayments] = useState([
        "Cash",
        "Credit Card",
        "EFTPOS",
        "Apple Pay",
    ]);




    const togglePayment = (method) => {
        const updated = formData.selectedPayments.includes(method)
            ? formData.selectedPayments.filter((m) => m !== method)
            : [...formData.selectedPayments, method];
        setFormData({ ...formData, selectedPayments: updated });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const updateArrayField = (field, index, value) => {
        const updated = [...formData[field]];
        updated[index] = value;
        setFormData({ ...formData, [field]: updated });
    };

    const addArrayItem = (field) => {
        setFormData({ ...formData, [field]: [...formData[field], ""] });
    };

    const removeArrayItem = (field, index) => {
        const updated = formData[field].filter((_, i) => i !== index);
        setFormData({ ...formData, [field]: updated });
    };

    const handleHoursChange = (day, field, value) => {
        setFormData((prev) => ({
            ...prev,
            hours: {
                ...prev.hours,
                [day]: {
                    ...prev.hours[day],
                    [field]: value,
                },
            },
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const profileData = {
            // ...formData,
            businessName: formData.businessName,
            abn: "12345678901",
            category: formData.category,
            subCategory: "Food & Dining",
            description: formData.description,
            establishedYear: 2015,
            contactPerson: "John Doe",
            phone: formData.phone,
            email: "contact@tastybites.com.au",
            website: formData.website,
            alternateContacts: {
                phone: "+61 412 999 999",
                email: "support@tastybites.com.au",
            },
            address: {
                street: formData.street,
                suburb: formData.city,
                state: formData.stateName,
                postcode: formData.postalCode,
            },
            location: {
                type: "Point",
                coordinates: [144.9631, -37.8136],
            },
            serviceAreas: ["Melbourne CBD", "Docklands"],
            hours: {
                ...formData.hours,
                publicHolidayNotes: formData.hours.publicHolidayNotes,
                is24x7: formData.hours.is24x7,
            },
            // hours: {
            //     monday: { open: "09:00", close: "21:00" },
            //     tuesday: { open: "09:00", close: "21:00" },
            //     wednesday: { open: "09:00", close: "21:00" },
            //     thursday: { open: "09:00", close: "21:00" },
            //     friday: { open: "09:00", close: "22:00" },
            //     saturday: { open: "10:00", close: "22:00" },
            //     sunday: { open: "10:00", close: "20:00" },
            //     publicHolidayNotes: "Closed on public holidays",
            //     is24x7: false,
            // },
            logoUrl: "https://www.tastybites.com.au/logo.png",
            gallery: [
                "https://www.tastybites.com.au/gallery1.jpg",
            ],
            introVideo: "https://www.youtube.com/watch?v=example",
            socialLinks: {
                facebook: formData.facebook,
                instagram: formData.instagram,
                linkedin: formData.linkedin,
                others: formData.others.filter((link) => link.trim() !== ""),
            },
            keywords: formData.keywords.filter((k) => k.trim() !== ""),
            services: formData.services.filter((s) => s.trim() !== ""),
            paymentMethods: formData.selectedPayments,
            certifications: formData.certifications,
            promotions: formData.promotions,
        };

        dispatch(addProfile(profileData));
    };


    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <SideBar />
            <main className="flex-1 p-6 md:p-10 border-l border-gray-200">
                <div className="max-w-5xl mx-auto bg-white p-8 shadow-xl rounded-3xl">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <Building2 className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl font-extrabold text-gray-800">
                                Create Business Profile
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Share your business details and grow your reach.
                        </p>
                    </div>

                    <form className="space-y-12">
                        <section className="border rounded-xl shadow p-6">
                            <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                                <span>Business Information</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Business Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                                        placeholder="e.g. Royal Flow Plumbing Pty Ltd"
                                    />

                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Business Category <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm transition-all">
                                        <option value="">Select a category</option>
                                        <option value="Plumbers & Gas Fitters">Plumbers & Gas Fitters</option>
                                        <option value="Electricians">Electricians</option>
                                        <option value="Restaurants">Restaurants</option>
                                        <option value="Real Estate">Real Estate</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm"
                                            placeholder="e.g. 0499 986 698"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Website (optional)
                                    </label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm"
                                            placeholder="https://example.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="border rounded-xl shadow p-6">
                            <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                <Info className="w-5 h-5 text-blue-600" />
                                <span>About Your Business</span>
                            </div>

                            <textarea
                                rows={5}
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                placeholder="Write about your business, specialties, service areas, etc."
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Minimum 50 characters recommended
                            </p>
                        </section>



                        <section>
                            <div className="border rounded-xl shadow p-6">
                                <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                    <span>Address Information</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label htmlFor="street" className="block font-medium text-gray-700 mb-1">
                                            Street Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="street"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block font-medium text-gray-700 mb-1">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block font-medium text-gray-700 mb-1">
                                            State/Province <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="stateName"
                                            value={formData.stateName}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                    {/* <div>
                                        <label htmlFor="country" className="block font-medium text-gray-700 mb-1">
                                            Country <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            name=""
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div> */}
                                    <div>
                                        <label htmlFor="postalCode" className="block font-medium text-gray-700 mb-1">
                                            Postal Code <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="border rounded-xl shadow p-6">
                                <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                    <Clock className="w-5 h-5 text-purple-600" />
                                    <span>Business Hours</span>
                                </div>
                                <div className="space-y-4">
                                    {daysOfWeek.map((day) => (
                                        <div
                                            key={day}
                                            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
                                        >
                                            <label htmlFor={day} className="capitalize font-medium">
                                                {day}
                                            </label>
                                            <input
                                                type="time"
                                                id={`${day}-open`}
                                                value={formData.hours[day]?.open}
                                                onChange={(e) => handleHoursChange(day, "open", e.target.value)}
                                                className="border border-gray-300 rounded-lg p-2"
                                            />
                                            <input
                                                type="time"
                                                id={`${day}-close`}
                                                value={formData.hours[day]?.close}
                                                onChange={(e) => handleHoursChange(day, "close", e.target.value)}
                                                className="border border-gray-300 rounded-lg p-2"
                                            />
                                        </div>
                                    ))}

                                </div>
                                <div className="mt-4">
                                    <label className="block font-medium text-gray-700 mb-1">
                                        Public Holiday Notes
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.hours.publicHolidayNotes}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                hours: {
                                                    ...formData.hours,
                                                    publicHolidayNotes: e.target.value,
                                                },
                                            })
                                        }
                                        className="w-full p-3 border border-gray-300 rounded-xl"
                                    />
                                </div>

                                <div className="mt-4 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.hours.is24x7}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                hours: {
                                                    ...formData.hours,
                                                    is24x7: e.target.checked,
                                                },
                                            })
                                        }
                                    />
                                    <label className="text-sm text-gray-700">Open 24/7</label>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="border rounded-xl shadow p-6">
                                <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                    <Tag className="w-5 h-5 text-orange-600" />
                                    <span>Services Offered</span>
                                </div>

                                <div className="space-y-4">
                                    {formData.services.map((service, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                value={service}
                                                onChange={(e) => updateArrayField("services", index, e.target.value)}
                                                placeholder="Enter service"
                                                className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeArrayItem("services", index)}
                                                className="border border-gray-300 rounded-xl p-3 hover:bg-red-100 transition"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => addArrayItem("services")}
                                        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 text-orange-600 hover:bg-orange-50 transition"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Service
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-6">
                            <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                <Tag className="w-5 h-5 text-pink-600" />
                                Keywords
                            </div>

                            <div className="space-y-4">
                                {formData.keywords.map((service, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            value={service}
                                            onChange={(e) => updateArrayField("keywords", index, e.target.value)}
                                            placeholder="Enter service"
                                            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayItem("keywords", index)}
                                            className="border border-gray-300 rounded-xl p-3 hover:bg-red-100 transition"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addArrayItem("keywords")}
                                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 text-orange-600 hover:bg-orange-50 transition"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add KeyWord
                                </button>
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-6">
                            <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                <CreditCard className="w-5 h-5 text-green-600" />
                                Accepted Payment Methods
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {paymentMethods.map((method) => (
                                    <label key={method} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedPayments.includes(method)}
                                            onChange={() => togglePayment(method)}
                                            className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                                        />
                                        <span className="text-sm font-medium text-gray-700">{method}</span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-6">
                            <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                <Share2 className="w-5 h-5 text-blue-600" />
                                Social Media Links
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook</label>
                                    <input
                                        id="facebook"
                                        type="url"
                                        name="facebook"
                                        value={formData.facebook}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram</label>
                                    <input
                                        id="instagram"
                                        type="url"
                                        name="instagram"
                                        value={formData.instagram}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn</label>
                                    <input
                                        id="linkedin"
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700">Other Social Links</label>
                                {formData.others.map((service, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            value={service}
                                            type="url"
                                            onChange={(e) => updateArrayField("others", index, e.target.value)}
                                            placeholder="Enter social Link"
                                            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayItem("others", index)}
                                            className="border border-gray-300 rounded-xl p-3 hover:bg-red-100 transition"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addArrayItem("others")}
                                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 text-orange-600 hover:bg-orange-50 transition"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Social Links
                                </button>
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2 border-b pb-2">
                                <Upload className="w-5 h-5 text-blue-500" />
                                Upload Photos or Videos
                            </h3>
                            <input
                                type="file"
                                multiple
                                className="block w-full p-3 text-gray-600 border border-gray-300 rounded-xl bg-white shadow-sm"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                You can upload multiple files. Max 10MB each.
                            </p>
                        </section>


                        <section className="border rounded-2xl shadow-sm bg-white p-6 space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-5 h-5 text-yellow-600" />
                                <h2 className="text-lg font-semibold">Additional Information</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Certifications Field */}
                                <section className="border rounded-xl shadow p-6">
                                    <div className="flex items-center gap-2 mb-4 text-xl font-semibold text-gray-800">
                                        <Tag className="w-5 h-5 text-pink-600" />
                                        Certifications
                                    </div>

                                    <div className="space-y-4">
                                        {formData.certifications.map((service, index) => (
                                            <div key={index} className="flex gap-2">
                                                <input
                                                    value={service}
                                                    onChange={(e) => updateArrayField("certifications", index, e.target.value)}
                                                    placeholder="Enter service"
                                                    className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem("certifications", index)}
                                                    className="border border-gray-300 rounded-xl p-3 hover:bg-red-100 transition"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            onClick={() => addArrayItem("certifications")}
                                            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-3 text-orange-600 hover:bg-orange-50 transition"
                                        >
                                            <Plus className="w-4 h-4" />
                                            Add certifications
                                        </button>
                                    </div>
                                </section>

                                {/* Promotions Field */}
                                <div>
                                    <label htmlFor="promotions" className="block text-sm font-medium text-gray-700">
                                        Current Promotions
                                    </label>
                                    <div className="relative mt-1">
                                        <Megaphone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                        <textarea
                                            id="promotions"
                                            rows={3}
                                            name="promotions"
                                            value={formData.promotions}
                                            onChange={handleInputChange}
                                            className="pl-10 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className="pt-6 text-right">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
                            >
                                Submit Profile
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddProfile;