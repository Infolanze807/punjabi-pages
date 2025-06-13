import React, { useEffect, useState } from "react";
import { Building2, Phone, Globe, CreditCard, Upload, Clock, Tag, X, Plus, MapPin, Share2, Megaphone, Award, Info, Briefcase } from "lucide-react";
import SideBar from "./SideBar";
import { addProfile, updateMyBussiness } from "../../redux/features/dashboardSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import categories from "../../redux/features/enum";

const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
];

console.log("cat",categories);


const hoursInit = daysOfWeek.reduce((acc, day) => {
    acc[day] = { open: "", close: "" };
    return acc;
}, { publicHolidayNotes: "", is24x7: false });

const AddProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { existingBusiness, isEdit } = location.state || {};
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

    useEffect(() => {
        if (isEdit && existingBusiness) {
            setFormData({
                businessName: existingBusiness.businessName || "",
                category: existingBusiness.category || "",
                phone: existingBusiness.phone || "",
                website: existingBusiness.website || "",
                description: existingBusiness.description || "",
                street: existingBusiness.address?.street || "",
                city: existingBusiness.address?.suburb || "",
                stateName: existingBusiness.address?.state || "",
                // country: "Australia", // or from data
                postalCode: existingBusiness.address?.postcode || "",
                facebook: existingBusiness.socialLinks?.facebook || "",
                instagram: existingBusiness.socialLinks?.instagram || "",
                linkedin: existingBusiness.socialLinks?.linkedin || "",
                certifications: existingBusiness.certifications || [""],
                promotions: existingBusiness.promotions || "",
                keywords: existingBusiness.keywords || [""],
                services: existingBusiness.services || [""],
                others: existingBusiness.socialLinks?.others || [""],
                hours: existingBusiness.hours || hoursInit,
                selectedPayments: existingBusiness.paymentMethods || [],
            });
        }
    }, [existingBusiness, isEdit]);


    const handleSubmit = async (e) => {
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
            logoUrl: "data:image/jpeg;base64,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",
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

        if (isEdit && existingBusiness?._id) {
            await dispatch(updateMyBussiness({ bussinessId: existingBusiness._id, bussinessData: profileData })).unwrap();
        } else {
            await dispatch(addProfile(profileData)).unwrap();
        }

        navigate("/dashboard");
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <SideBar />
            <main className="flex-1 px-4 sm:px-6 md:px-14 py-6 border-l border-gray-200">
                <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 md:p-8 shadow-xl rounded-3xl">
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

                    <form className="space-y-4">
                        <section className="border rounded-xl shadow-sm bg-white p-4 sm:p-5 md:p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                                <span>Business Information</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Business Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                                        placeholder="e.g. Royal Flow Plumbing Pty Ltd"
                                    />

                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Business Category <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((cat, idx) => (
                                            <option key={idx} value={cat.category}>
                                                {cat.category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-2 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm"
                                            placeholder="e.g. 0499 986 698"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Website (optional)
                                    </label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-3 text-gray-400" />
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="w-full p-2 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 shadow-sm"
                                            placeholder="https://example.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="border rounded-xl shadow p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                <Info className="w-5 h-5 text-blue-600" />
                                <span>About Your Business</span>
                            </div>

                            <textarea
                                rows={5}
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                                placeholder="Write about your business, specialties, service areas, etc."
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Minimum 50 characters recommended
                            </p>
                        </section>
                        <section>
                            <div className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                    <span>Address Information</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label htmlFor="street" className="block font-medium text-gray-700 mb-1 text-sm">
                                            Street Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="street"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block font-medium text-gray-700 mb-1 text-sm">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block font-medium text-gray-700 mb-1 text-sm">
                                            State/Province <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="stateName"
                                            value={formData.stateName}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                    {/* <div>
                                        <label htmlFor="country" className="block font-medium text-gray-700 mb-1 text-sm">
                                            Country <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="country"
                                            name=""
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div> */}
                                    <div>
                                        <label htmlFor="postalCode" className="block font-medium text-gray-700 mb-1 text-sm">
                                            Postal Code <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="postalCode"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <Clock className="w-5 h-5 text-purple-600" />
                                    <span>Business Hours</span>
                                </div>
                                <div className="space-y-4">
                                    {daysOfWeek.map((day) => (
                                        <div
                                            key={day}
                                            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
                                        >
                                            <label htmlFor={day} className="capitalize font-medium text-sm">
                                                {day}
                                            </label>
                                            <input
                                                type="time"
                                                id={`${day}-open`}
                                                value={formData.hours[day]?.open}
                                                onChange={(e) => handleHoursChange(day, "open", e.target.value)}
                                                className="border border-gray-300 rounded-lg p-1"
                                            />
                                            <input
                                                type="time"
                                                id={`${day}-close`}
                                                value={formData.hours[day]?.close}
                                                onChange={(e) => handleHoursChange(day, "close", e.target.value)}
                                                className="border border-gray-300 rounded-lg p-1"
                                            />
                                        </div>
                                    ))}

                                </div>
                                <div className="mt-4">
                                    <label className="block font-medium text-gray-700 mb-2 text-sm">
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
                                        className="w-full p-2 border border-gray-300 rounded-xl"
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
                            <div className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
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
                                                className="flex-1 p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeArrayItem("services", index)}
                                                className="border border-gray-300 rounded-xl p-2 hover:bg-red-100 transition"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => addArrayItem("services")}
                                        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-1.5 text-orange-600 hover:bg-orange-50 transition"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Service
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
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
                                            className="flex-1 p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayItem("keywords", index)}
                                            className="border border-gray-300 rounded-xl p-2 hover:bg-red-100 transition"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addArrayItem("keywords")}
                                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-1.5 text-orange-600 hover:bg-orange-50 transition"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add KeyWord
                                </button>
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                <CreditCard className="w-5 h-5 text-green-600" />
                                Accepted Payment Methods
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
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

                        <section className="border rounded-xl shadow p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
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
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                            className="flex-1 p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeArrayItem("others", index)}
                                            className="border border-gray-300 rounded-xl p-2 hover:bg-red-100 transition"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => addArrayItem("others")}
                                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-1.5 text-orange-600 hover:bg-orange-50 transition"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Social Links
                                </button>
                            </div>
                        </section>

                        <section className="border rounded-xl shadow p-5">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2 border-b pb-2">
                                <Upload className="w-5 h-5 text-blue-500" />
                                Upload Photos or Videos
                            </h3>
                            <input
                                type="file"
                                multiple
                                className="block w-full p-1.5 text-gray-600 border border-gray-300 rounded-xl bg-white shadow-sm"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                You can upload multiple files. Max 10MB each.
                            </p>
                        </section>


                        <section className="border rounded-2xl shadow-sm bg-white p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Award className="w-5 h-5 text-yellow-600" />
                                <h2 className="text-lg font-semibold">Additional Information</h2>
                            </div>

                            <div className="space-y-3">
                                {/* Certifications Field */}
                                <section className="border rounded-xl shadow p-6">
                                    <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
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
                                                    className="flex-1 p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 shadow-sm transition-all"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem("certifications", index)}
                                                    className="border border-gray-300 rounded-xl p-2 hover:bg-red-100 transition"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            onClick={() => addArrayItem("certifications")}
                                            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-1.5 text-orange-600 hover:bg-orange-50 transition"
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
                                            className="pl-10 block w-full rounded-xl border border-gray-300 shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className="pt-6 md:pt-8 text-right">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
                            >
                                {isEdit ? "Update Business" : "Create Business"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddProfile;