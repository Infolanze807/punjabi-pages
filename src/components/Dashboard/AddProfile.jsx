import React, { useEffect, useState } from "react";
import { Building2, Phone, Globe, CreditCard, Upload, Clock, Tag, X, Plus, MapPin, Share2, Megaphone, Award, Info, Briefcase, Mail } from "lucide-react";
import SideBar from "./SideBar";
import { addProfile, updateMyBussiness } from "../../redux/features/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCategoryDropdown } from "../../redux/features/businessSlice";

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
    const navigate = useNavigate();
    const location = useLocation();
    const { existingBusiness, isEdit } = location.state || {};
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { categoriesDropdown } = useSelector((state) => state.business);
    console.log("categoriesDropdown", categoriesDropdown);

    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        businessName: "",
        category: "",
        phone: "",
        establishedYear: "",
        subCategory: "",
        contactPerson: user?.name || "",
        email: user?.email || "",
        website: "",
        alternateContacts: {
            phone: "",
            email: "",
        },
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
        serviceAreas: [""],
        others: [""],
        hours: hoursInit,
        selectedPayments: [],
        location: {
            type: "Point",
            coordinates: [0, 0],
        },
    });

    const [paymentMethods, setPaymentMethods] = useState([
        "Cash",
        "Credit Card",
        "Bank Transfer",
        "EFTPOS",
        "Google Pay",
        "Apple Pay",
    ]);

    const [selectedPayments, setSelectedPayments] = useState([]);

    useEffect(() => {
        dispatch(getCategoryDropdown());

    }, [])

    const togglePayment = (method) => {
        const updated = formData.selectedPayments.includes(method)
            ? formData.selectedPayments.filter((m) => m !== method)
            : [...formData.selectedPayments, method];

        console.log("Updated selectedPayments:", updated); // ✅ console log here

        setFormData({ ...formData, selectedPayments: updated });
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes(".")) {
            const [parentKey, childKey] = name.split(".");

            setFormData((prev) => ({
                ...prev,
                [parentKey]: {
                    ...prev[parentKey],
                    [childKey]: value,
                },
            }));

            setFormErrors((prevErrors) => {
                const newErrors = { ...prevErrors };

                if (newErrors[parentKey]?.[childKey] && value.trim()) {
                    const updatedChildErrors = {
                        ...newErrors[parentKey],
                        [childKey]: "",
                    };

                    if (!updatedChildErrors.phone && !updatedChildErrors.email) {
                        delete newErrors[parentKey];
                    } else {
                        newErrors[parentKey] = updatedChildErrors;
                    }
                }

                return newErrors;
            });
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));

            setFormErrors((prevErrors) => {
                const newErrors = { ...prevErrors };
                if (newErrors[name] && value.trim()) {
                    delete newErrors[name];
                }
                return newErrors;
            });
        }
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

    const validateForm = () => {
        const errors = {};

        if (!formData.businessName.trim()) errors.businessName = "Business name is required.";
        if (!formData.category.trim()) errors.category = "Category is required.";
        if (!formData.phone.trim()) errors.phone = "Phone number is required.";
        if (!formData.contactPerson.trim()) errors.contactPerson = "ContactPerson Name is required.";
        if (!formData.email.trim()) errors.email = "Email number is required.";
        if (!String(formData.establishedYear).trim()) {
            errors.establishedYear = "Established year is required.";
        }
        if (!formData.subCategory.trim()) errors.subCategory = "Sub-category is required.";

        if (!formData.description.trim()) errors.description = "Description is required.";
        if (!formData.street.trim()) errors.street = "Street address is required.";
        if (!formData.city.trim()) errors.city = "City is required.";
        if (!formData.stateName.trim()) errors.stateName = "State is required.";
        if (!formData.postalCode.trim()) errors.postalCode = "Postal code is required.";

        if (formData.services.filter((s) => s.trim() !== "").length === 0)
            errors.services = "At least one service is required.";

        if (formData.serviceAreas.filter((sa) => sa.trim() !== "").length === 0)
            errors.serviceAreas = "At least one service area is required.";

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleCoordinateChange = (type, value) => {
        const coord = [...(formData.location?.coordinates || ["", ""])];

        if (type === "latitude") {
            coord[1] = value;
        } else {
            coord[0] = value;
        }

        setFormData((prev) => ({
            ...prev,
            location: {
                ...prev.location,
                coordinates: coord,
            },
        }));
    };



    useEffect(() => {
        if (isEdit && existingBusiness) {
            setFormData({
                businessName: existingBusiness.businessName || "",
                category: existingBusiness.category || "",
                subCategory: existingBusiness.subCategory || "",
                establishedYear: existingBusiness.establishedYear || "",
                contactPerson: existingBusiness.contactPerson || "",
                email: existingBusiness.email || "",
                phone: existingBusiness.phone || "",
                alternateContacts: {
                    phone: existingBusiness.alternateContacts?.phone || "",
                    email: existingBusiness.alternateContacts?.email || "",
                },
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
                serviceAreas: existingBusiness.serviceAreas || [""],
                others: existingBusiness.socialLinks?.others || [""],
                location: {
                    type: "Point",
                    coordinates: [
                        parseFloat(existingBusiness.location?.coordinates?.[0]) || 0,
                        parseFloat(existingBusiness.location?.coordinates?.[1]) || 0,
                    ],
                },
                hours: existingBusiness.hours || hoursInit,
                selectedPayments: existingBusiness.paymentMethods || [],
            });
        }
    }, [existingBusiness, isEdit]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const isValid = validateForm();
        if (!isValid) {
            setLoading(false);
            return
        };

        const profileData = {
            // ...formData,
            businessName: formData.businessName,
            // abn: "12345678901",
            category: formData.category,
            subCategory: formData.subCategory,
            description: formData.description,
            establishedYear: formData.establishedYear,
            contactPerson: formData.contactPerson,
            phone: formData.phone,
            email: formData.email,
            website: formData.website,
            alternateContacts: {
                phone: formData.alternateContacts.phone,
                email: formData.alternateContacts.email,
            },
            address: {
                street: formData.street,
                suburb: formData.city,
                state: formData.stateName,
                postcode: formData.postalCode,
            },
            location: {
                type: "Point",
                coordinates: formData.location.coordinates,
            },
            serviceAreas: formData.serviceAreas.filter((k) => k.trim() !== ""),
            hours: {
                ...formData.hours,
                publicHolidayNotes: formData.hours.publicHolidayNotes,
                is24x7: formData.hours.is24x7,
            },
            // logoUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcDCAL/xAA7EAABAwMDAQYEAwYFBQAAAAABAAIDBAURBhIhMQcTQVFhcSKBkaEUMkIjM1JiwdFDcrHh8BUXJJLx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAIxEBAAICAgEDBQAAAAAAAAAAAAECAxEEISITMWESMjNBUf/aAAwDAQACEQMRAD8A7iiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLzmnjgjMkrwxjericAL0VP17WOhjgp9xax+XHHiQuqV+q2leXJ6dJsy5tcWWCbu5Hzhucd53Xw/3+y31HV09bTx1FJKyWGQbmPYcghcLuVQCTh2FaexmumNTdKDLjAAyZoPRruQfqMfRXZMUVjcMvH5VsltWdSRQFKztwiIgIiICIiAiIgIiICIiAiIgIiICIo8UBMqHOwCSq9c7y5zjFSna0HBePH2XVKTaVObNXFG7N+6VjfzOaPcrS6psjb9bxFHII52HdC88jPkfRVyWV+7dvdu88rWXC+3CyTw1VFL+zkcWywv5Y5w8fTI8lf6Fq9xLJHNrk8bR00tVojU8k5hbRM/zmVuz6romgtKs0tbpWyyietqXB08g/KMfla30GT7kk+ixbf2g2yaEGujlppccgNMjT7Ec/ULR3/tDrGVTZbPGz8PFw6OduTL74/L9Vzb1L9LKTgx9xLp4KlVPSuubdqAtpyDSV+OYJHcO/yu/V7dfRWtpyqZiYnUtdbRaNwlERQ6EREBERAREQEREBERAREQEREBQpUFBqNRVn4enbEx2Hy5HyHVVZ0gxjPCztT1O66uiz+7Y0fXJ/qFpnScLdhrqrw+XebZZ+H7e/J6quasmAoqZo6mYkD0wty+QKp6nqe9uMFPnPdR5d7n/wCD6ru3spxx28WP4AXlIe83N8B4LzMga3J8llUdM40/ev4dJ0Hp/v8A2XOlvs15Y5jg9hc1zeWuacFp8MLrXZ3q913YbbcXj8dE3LHn/GYOCfceP1XM5ISMr8UdRNbq6nraY7ZaeQPaR6dR7EZHsSuclNwtwZppb4fRAUrHt9XHXUMFXD+SZgePmFkLE9eBEREiIiAiIgIiICIiAiIgIiIChSoQc81Y/utRTZ4Baw/Yf2WrdItx2iwmK40tT+mSIsPu0/2d9lVWVGRyvQxT4Q8LkV1lszS/c4Nz1OFRZav8ZXT1Y5bI8lmf4fD7YVkudSYrdVPH5mwvx77SP6qnxuDIfYfdTYxw2dvpnXCujpRnYBukOejR6+qtc1MwcNaAPDHkvLR9t7i0tq5G4mrP2nsz9I+fX5hbOePqpq4vPemhmj6jC188WOQFu6lmFrZ28fVJRWXVOzeczaUpgf8ACe+MewP+6tCq/ZvCYdLQk9JJHvHsSrQvPv8AdL3cP44ERFysEREBERAREQEREBERAREQERQg0Os7Y66WSVkQzNCe9j9SOo+YJC5GZP8AhXeSCuVa/wBOSWyofcqRhNFKcyY6ROP9FowXiPGWHl4fq84VWsLqiingby+SJzW++OPuqY+cuoX7XfEWcFWrvvJ3zVdu9L3UjqiJp7iQku2/od/zlX3ZMX8dojji/Cw/h/3Ijb3eP4dox9sLEqG8e6pmj9bU9JQx2u9vMbYW7IKnBI2eAOBnjwKss9+spZvF5txb5/imZ+mc/ZTW8aUXw5It7PCrbxnzU2Oxz3y4CCLLIGEGom/gb5D+Y/bqtRBeI9QX6ks1jdvfUybXVLxhsbQCXEA8k4BXa7TbKa00LKSjZhjOricuefEk+JKry5tdQ18bizPlZqa3VOm9OSQ2uoro4HMaA2Nsb3hjfDcWghvuVYYpGSxskic18bxua5pyCD4hcxv+i66a81c0cBmbUSF7XjHj5+Xlyr9pq3PtVio6CVwc+GPacHgc5wPQdPks9qxERO23Fe02mJjUQ2iIiraBERAREQEREBERAREQERQUEooymUEryliZLG+OVgexww5rhkEL0zyo3fVBzbU/ZmJXOqLDIyInk00p+HP8rvBc7udgv1teW1lrrABxujiMjSPPLcj6r6O8F+R81ZGWYZrcalp3D5RkoO8kc1lLMJCeWtidz8sLZWnQOoLu8CktU7GE/valnctH/tyfkCvpzAz0H0U4Cmcm/wBJrg17y53oPsvptOVUdyuFQaq4x8x7CWxxZ68eJ910UBQOOFOVXM7XxERHRhBwFG4Kc8ZwVCUoo3cJlBKIiAiIgIiICIiAiIgLm/bbVVFLZ7c6lnkhc6pILo3FpPw9OF0hc87ZrbX3O02+O3UVRVPZUFzmwRl5A29ThBzSsqIoLHSV1Fq+smukgjMtEHOBicR8QDt36T445W+1/cL7DojTUtyqZ4LhI2YymN5aXN/Rux47dufXKwaykvVVp2mtLNDzRTQsjaa1tM/vHloxk8dT4+63160Rfq3s3s9NKwzXShkke+n3guMT3OIYDnGWgt8fAgZ4QWDtCqZ6fss76CeSOYNpP2jHkHmRgPIVZF5vFF2OU1ZRVU4nfWPjmqQ4l8ce9/OfDkNbnwBPRY14uOsdQach00/TNWwtMYkmML279hBb1ADeWjJzhWt1h1HYuzqkoLGYZbjC8yVMJa1wka7cXNbu4JBIPrgoOb22amqKeGoh1jVUN5LsyitdIyAD0lGR5dfsrp2n1d0ptI2KSeuaax0uJ56SQhsnwnkHA69eiql0oLndqWCmj0PPS3MPHe1cFO9gk88twGjPHirDq3TF3p+z7Ttriop6uqppSZY6dhk7vIJxx4DOMoPHXVfVwdm+ipYqueOWaCEySNkIc/8A8fPJ6leFs17NW6FvFouVQ9txp6R5pagOIdK0DoT/ABj7jHjnOXruy3er7OdIUlHbayaqpqeITQxwOL4yKfaQRjjnhT2gdn9RNS0t5sdK985iYKyiYz4i7A+Nreu7zHzHOchjNr6w9iUtUKuo/EC4gCXvDvx+IAxnr0Vftn4eromT12vZrfMc76d1NLLt54+ISAH6Kztsd3/7MS2422sFc6vDxTdw7vNvfg529cYGcrVWanulvt8dLUdnf46RpOZ6ikeXOyc88IN/raru2m9BWWC23SapimP7auawsc9hG5vUktznzVVtTo3ijmsmtZaO6uAE8dyL44w7+R2HB3PGDnP2V8vk2ra/RlDPaLYykmaHR1FufACQwDDdrX9ceX0VEu9ouV/dBDbNDS22qz+2dHG5kcmfMOADeeeTlBZe169XujdaaUVL6WmngLqh9MTtkl4yAfIDkDIzn0Wp05ht6oX6X1lkuc3vaa6F8TpDn4mgYIcMdP8AUqyaqt2rLXaLLSUFPFd6GmoooKyEwCRxkYBl2D8RDhxxyMKnS6duWob3S/8ASNJz2WNrm96XBzYxzku+IDHsBn36oPoHPopXnC0sja1ztxaAM+a9EBERAREQEREBERATCIgjaPEIApRBp6a/0lVd57bDHO6WCQxyP2DY1waHdc+RCybxc6azW2e5VznNpoGh0ha3JAzjosSl07S0l6qLpBJN31RIXytdsLSS0N4O3cBho4Bxwsy72+nu9umoavd3E2A7acHgg/0Qfi13ajupnNDJ3jYXNa54Hwuy0OBB8RgheN4vkFolp456aslNQ7ZGYIdwLvLr1wCV+rNY6CyvrDbojG2rnM8rAfhDiOcDwHjj1WRWUENZLSSTbt1LL3se04G7BHPpyUGUPiaOoPqsS119PdaCOtpdxhlzjc3B4JB/0WaVg2i3QWm3xUNNv7qLO3ccnkk9fclBjSX6mjvjLOaerNTIwyNIiywsBALs56AuH1Wbcq2O20M9ZO2R0UDC+Tu25O0dTjxwOfkvJ9sgdeIrq7eamOmfTN5+HY5zXHjzywLMIBaRgYI5QYlsuVNdI5JaJ5lgY/Z3w/I8452nxHhlZowRnOVh2S101mtdNbqIOEFOzYzd1ws5BGAmBlSiCMBSiICIiAiIgIiICIiAiIgIiIIwPJSiIIwPJSiICYCIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z",
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
        try {
            if (isEdit && existingBusiness?._id) {
                await dispatch(updateMyBussiness({ bussinessId: existingBusiness._id, bussinessData: profileData })).unwrap();
            } else {
                await dispatch(addProfile(profileData)).unwrap();
            }

            navigate("/dashboard");
        } catch (error) {
            console.error("Submit failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <SideBar />
            <main className="flex-1 border-l border-gray-200">
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Business Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            className="w-full p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                            placeholder="Royal Flow Plumbing Pty Ltd"
                                        />
                                        {formErrors.businessName && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.businessName}
                                            </p>
                                        )}
                                    </div>

                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Contact Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-2.5 top-1.5 text-gray-400 h-4 w-4" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                            placeholder="0499 986 698"
                                        />
                                        {formErrors.phone && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Contact Person Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs bg-gray-100"
                                            placeholder="Enter your Name"
                                            disabled
                                        />
                                        {formErrors.contactPerson && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.contactPerson}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-2.5 top-2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 pl-8 pr-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs bg-gray-100"
                                            placeholder="contact@tastybites.com.au"
                                            disabled
                                        />
                                        {formErrors.email && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Business Category <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                        >
                                            <option value="">Select a category</option>
                                            {categoriesDropdown?.categories?.map((cat, idx) => (
                                                <option key={idx} value={cat.category}>
                                                    {cat.category}
                                                </option>
                                            ))}
                                        </select>
                                        {formErrors.category && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.category}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Business SubCategory <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="subCategory"
                                            value={formData.subCategory}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                        >
                                            <option value="">Select a SubCategory</option>
                                            {categoriesDropdown?.categories
                                                ?.find((cat) => cat.category === formData.category)
                                                ?.subcategories?.map((sub, idx) => (
                                                    <option key={idx} value={sub}>
                                                        {sub}
                                                    </option>
                                                ))}
                                        </select>
                                        {formErrors.subCategory && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.subCategory}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Website (optional)
                                    </label>
                                    <div className="relative">
                                        <Globe className="absolute left-2.5 top-2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="url"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 pl-8 pr-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                            placeholder="https://example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Established Year <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="establishedYear"
                                            value={formData.establishedYear}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                        >
                                            <option value="">Select an Established Year</option>
                                            {Array.from({ length: 2028 - 2000 + 1 }, (_, i) => (
                                                <option key={i} value={2000 + i}>
                                                    {2000 + i}
                                                </option>
                                            ))}
                                        </select>
                                        {formErrors.establishedYear && (
                                            <p className="absolute text-red-500 text-[12px] top-7 right-0">
                                                {formErrors.establishedYear}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="border rounded-xl shadow p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                <Info className="w-5 h-5 text-blue-600" />
                                <span>About Your Alternate Contacts</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-2.5 top-2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="email"
                                            name="alternateContacts.email"
                                            value={formData?.alternateContacts?.email}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 pl-8 pr-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                            placeholder="contact@tastybites.com.au"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1 text-sm">
                                        Contact Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-2.5 top-2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="tel"
                                            name="alternateContacts.phone"
                                            value={formData.alternateContacts.phone}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 pl-8 pr-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                            placeholder="0499 986 698"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="border rounded-xl shadow p-5">
                            <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                <Info className="w-5 h-5 text-blue-600" />
                                <span>About Your Business <span className="text-red-500">*</span></span>
                            </div>

                            <div className="relative">
                                <textarea
                                    rows={4}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full py-2 px-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                    placeholder="Write about your business, specialties, service areas, etc."
                                />

                                <p className="text-xs text-gray-500 mt-1">
                                    Minimum 50 characters recommended
                                </p>

                                {formErrors.description && (
                                    <p className="absolute text-red-500 text-[12px] top-[110px] right-0">
                                        {formErrors.description}
                                    </p>
                                )}
                            </div>
                        </section>
                        <section>
                            <div className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                    <span>Address Information</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2 relative">
                                        <label htmlFor="street" className="block font-medium text-gray-700 mb-1 text-sm">
                                            Street Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="street"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleInputChange}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all text-xs"
                                        />
                                        {formErrors.street && (
                                            <p className="absolute text-red-500 text-[12px] right-0">
                                                {formErrors.street}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block font-medium text-gray-700 mb-1 text-sm">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all text-xs"
                                            />
                                            {formErrors.city && (
                                                <p className="absolute text-red-500 text-[12px] right-0">
                                                    {formErrors.city}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block font-medium text-gray-700 mb-1 text-sm">
                                            State/Province <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="state"
                                                name="stateName"
                                                value={formData.stateName}
                                                onChange={handleInputChange}
                                                className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all text-xs"
                                            />
                                            {formErrors.stateName && (
                                                <p className="absolute text-red-500 text-[12px] right-0">
                                                    {formErrors.stateName}
                                                </p>
                                            )}
                                        </div>
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
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="postalCode"
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleInputChange}
                                                className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all text-xs"
                                            />
                                            {formErrors.postalCode && (
                                                <p className="absolute text-red-500 text-[12px] right-0">
                                                    {formErrors.postalCode}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <MapPin className="w-5 h-5 text-green-600" />
                                    <span>Location</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="latitude" className="block font-medium text-gray-700 mb-1 text-sm">
                                            Latitude
                                        </label>
                                        <input
                                            type="number"
                                            id="latitude"
                                            name="latitude"
                                            value={formData.location?.coordinates?.[1] || ""}
                                            onChange={(e) => handleCoordinateChange("latitude", e.target.value)}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all text-xs"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="longitude" className="block font-medium text-gray-700 mb-1 text-sm">
                                            Longitude
                                        </label>
                                        <input
                                            type="number"
                                            id="longitude"
                                            name="longitude"
                                            value={formData.location?.coordinates?.[0] || ""}
                                            onChange={(e) => handleCoordinateChange("longitude", e.target.value)}
                                            className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm transition-all text-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                            <div className="border rounded-xl shadow p-4 sm:p-5 bg-white">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <Clock className="w-5 h-5 text-purple-600" />
                                    <span>Business Hours</span>
                                </div>
                                <div className="space-y-4">
                                    {daysOfWeek.map((day) => (
                                        <div
                                            key={day}
                                            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
                                        >
                                            <label htmlFor={day} className="capitalize font-medium text-gray-700 text-xs">
                                                {day}
                                            </label>

                                            <input
                                                type="time"
                                                id={`${day}-open`}
                                                value={formData.hours[day]?.open}
                                                onChange={(e) => handleHoursChange(day, "open", e.target.value)}
                                                className="border border-gray-300 rounded-md py-1 px-2 text-xs shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                            />

                                            <input
                                                type="time"
                                                id={`${day}-close`}
                                                value={formData.hours[day]?.close}
                                                onChange={(e) => handleHoursChange(day, "close", e.target.value)}
                                                className="border border-gray-300 rounded-md py-1.5 px-2 text-xs shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
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
                                        className="w-full py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm transition-all text-xs"
                                        placeholder="Closed on public holidays"
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
                            <section className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <CreditCard className="w-5 h-5 text-green-600" />
                                    Accepted Payment Methods
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-10">
                                    {paymentMethods.map((method) => (
                                        <label key={method} className="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.selectedPayments.includes(method)}
                                                onChange={() => togglePayment(method)}
                                                className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                                            />
                                            <span className="text-xs font-medium text-gray-700">{method}</span>
                                        </label>
                                    ))}
                                </div>

                            </section>
                        </section>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
                            <section>
                                <div className="border rounded-xl shadow p-5">
                                    <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                        <Tag className="w-5 h-5 text-orange-600" />
                                        <span>Services Offered<span className="text-red-500">*</span></span>
                                    </div>

                                    <div className="relative space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                                            {formData.services.map((service, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <input
                                                        value={service}
                                                        onChange={(e) => updateArrayField("services", index, e.target.value)}
                                                        placeholder="Enter service"
                                                        className="flex-1 py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:outline-none shadow-sm text-xs"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeArrayItem("services", index)}
                                                        className="p-1 border border-gray-300 rounded-md hover:bg-red-100 transition"
                                                    >
                                                        <X className="w-4 h-4 text-gray-600" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => addArrayItem("services")}
                                            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-orange-600 rounded-md p-1.5 hover:bg-orange-50 text-sm"
                                        >
                                            <Plus className="w-4 h-4" />
                                            Add Service
                                        </button>

                                        {formErrors.services && (
                                            <p className="absolute text-red-500 text-xs right-0 top-[40px]">{formErrors.services}</p>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <Tag className="w-5 h-5 text-pink-600" />
                                    <span>Keywords</span>
                                </div>

                                <div className="relative space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                                        {formData.keywords.map((keyword, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    value={keyword}
                                                    onChange={(e) => updateArrayField("keywords", index, e.target.value)}
                                                    placeholder="Enter keyword"
                                                    className="flex-1 py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:outline-none shadow-sm text-xs"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem("keywords", index)}
                                                    className="p-1 border border-gray-300 rounded-md hover:bg-red-100 transition"
                                                >
                                                    <X className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => addArrayItem("keywords")}
                                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-orange-600 rounded-md p-1.5 hover:bg-orange-50 text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Keyword
                                    </button>
                                </div>
                            </section>

                            <section className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <Tag className="w-5 h-5 text-pink-600" />
                                    <span>ServiceAreas<span className="text-red-500">*</span></span>
                                </div>

                                <div className="relative space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                                        {formData.serviceAreas.map((area, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    value={area}
                                                    onChange={(e) => updateArrayField("serviceAreas", index, e.target.value)}
                                                    placeholder="Enter service area"
                                                    className="flex-1 py-1.5 px-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:outline-none shadow-sm text-xs"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem("serviceAreas", index)}
                                                    className="p-1 border border-gray-300 rounded-md hover:bg-red-100 transition"
                                                >
                                                    <X className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => addArrayItem("serviceAreas")}
                                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-orange-600 rounded-md p-1.5 hover:bg-orange-50 text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Service Area
                                    </button>

                                    {formErrors.serviceAreas && (
                                        <p className="absolute text-red-500 text-xs top-[40px] right-0">{formErrors.serviceAreas}</p>
                                    )}
                                </div>
                            </section>

                            <section className="border rounded-xl shadow p-6">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <Tag className="w-5 h-5 text-pink-600" />
                                    Certifications
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                        {formData.certifications.map((cert, index) => (
                                            <div key={index} className="flex gap-2 items-center">
                                                <input
                                                    value={cert}
                                                    onChange={(e) => updateArrayField("certifications", index, e.target.value)}
                                                    placeholder="Enter certification"
                                                    className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:outline-none shadow-sm transition-all text-xs"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem("certifications", index)}
                                                    className="border border-gray-300 rounded-md p-1 hover:bg-red-100 transition"
                                                    aria-label="Remove certification"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => addArrayItem("certifications")}
                                        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md p-1.5 text-orange-600 hover:bg-orange-50 transition text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Certification
                                    </button>
                                </div>
                            </section>

                        </div>
                        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-2">
                            <section className="border rounded-xl shadow p-5">
                                <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-gray-800">
                                    <Share2 className="w-5 h-5 text-blue-600" />
                                    Social Media Links
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="facebook"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Facebook
                                        </label>
                                        <input
                                            id="facebook"
                                            type="url"
                                            name="facebook"
                                            value={formData.facebook}
                                            onChange={handleInputChange}
                                            placeholder="https://facebook.com/yourpage"
                                            className="block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="instagram"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Instagram
                                        </label>
                                        <input
                                            id="instagram"
                                            type="url"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleInputChange}
                                            placeholder="https://instagram.com/yourprofile"
                                            className="block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="linkedin"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            LinkedIn
                                        </label>
                                        <input
                                            id="linkedin"
                                            type="url"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            className="block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Other Social Links</label>

                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                        {formData.others.map((link, index) => (
                                            <div key={index} className="flex gap-2 items-center">
                                                <input
                                                    type="url"
                                                    value={link}
                                                    onChange={(e) => updateArrayField("others", index, e.target.value)}
                                                    placeholder="https://example.com/your-link"
                                                    className="flex-1 p-1.5 border border-gray-300 rounded-md focus:ring-2 focus:outline-none shadow-sm transition-all text-xs"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem("others", index)}
                                                    className="border border-gray-300 rounded-md p-1 hover:bg-red-100 transition"
                                                    aria-label="Remove social link"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => addArrayItem("others")}
                                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-orange-600 rounded-md p-1.5 hover:bg-orange-50 text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Social Link
                                    </button>
                                </div>
                            </section>
                            <div className="space-y-2">
                                <section className="border rounded-xl shadow p-5">
                                    <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2 border-b pb-2">
                                        <Upload className="w-5 h-5 text-blue-500" />
                                        Upload Photos or Videos
                                    </h3>
                                    <input
                                        type="file"
                                        multiple
                                        className="block w-full p-1.5 text-gray-600 border border-gray-300 rounded-md bg-white shadow-sm text-xs"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        You can upload multiple files. Max 10MB each.
                                    </p>
                                </section>
                                <section className="border rounded-2xl shadow-sm bg-white p-5">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Award className="w-5 h-5 text-yellow-600" />
                                        <h2 className="text-lg font-semibold">Additional Information</h2>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Promotions Field */}
                                        <div>
                                            <label htmlFor="promotions" className="block text-sm font-medium text-gray-700">
                                                Current Promotions
                                            </label>
                                            <div className="relative mt-1">
                                                <Megaphone className="absolute left-3 top-2 w-4 h-4 text-gray-400" />
                                                <textarea
                                                    id="promotions"
                                                    name="promotions"
                                                    rows={4}
                                                    placeholder="Describe any ongoing deals, discounts or offers"
                                                    value={formData.promotions}
                                                    onChange={handleInputChange}
                                                    className="pl-10 pr-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 text-xs"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="pt-6 md:pt-8 text-right">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                // disabled={loading}
                                className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 ${loading ? "opacity-70" : ""}`}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                                        </svg>
                                        {isEdit ? "Updating..." : "Creating..."}
                                    </>
                                ) : (
                                    isEdit ? "Update Business" : "Create Business"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddProfile;