    import React from "react";
    import { MessageSquareQuote } from "lucide-react";

    const testimonials = [
        {
            quote: "Punjabi Pages has a depth of knowledge and years of experience.",
            name: "Elvis Sinosic",
            title: "Director & Owner",
            company: "Kings Academy of Martial Arts",
            position: "left",
        },
        {
            quote: "Punjabi Pages' support has been amazing.",
            name: "Liz Trinadi",
            title: "",
            company: "",
            image:
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            position: "left",
        },
        {
            quote:
                "We had new sales that exceeded our commitment to Punjabi Pages three fold.",
            name: "Tim Hewitt",
            title: "",
            company: "",
            position: "center",
            video: "https://www.youtube.com/embed/QTQfGd3G6dg",
        },
        {
            quote: "Punjabi Pages has helped put our name out there.",
            name: "Mark Hobden",
            title: "CEO",
            company: "Advanced Heavy Vehicle Driver Training Centre",
            image:
                "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            position: "right",
        },
        {
            quote:
                "Punjabi Pages are responsive, they get things done really, really quickly.",
            name: "Vasili Tsoutouras",
            title: "CEO",
            company: "Allstate Pest Control & Hygiene Services",
            position: "right",
        },
    ];

    export default function TestimonialsSection() {
        return (
            <div className="bg-[#e6f0f9] py-16 px-6">
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[--main-color]">Trusted by Our Businesses</h2>
                </div>
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-6 px-1 md:px-4 lg:px-8">
                    {/* Left column */}
                    <div className="flex flex-col gap-6">
                        {testimonials
                            .filter((t) => t.position === "left")
                            .map((t, idx) => (
                                <div key={idx} className="bg-white border-b-2 border-[--main-color] rounded-xl shadow p-4 relative">
                                    {t.image && (
                                        <img
                                            src={t.image}
                                            alt="testimonial"
                                            className="rounded-md w-full h-40 object-cover mb-3"
                                        />
                                    )}
                                    <p className="text-gray-800 italic mb-3">{t.quote}</p>
                                    <div className="text-sm text-[--main-color] font-semibold">{t.name}</div>
                                    <div className="text-xs text-gray-600">{t.title}</div>
                                    <div className="text-xs text-gray-600">{t.company}</div>
                                </div>
                            ))}
                    </div>

                    {/* Center column (Video or big quote) */}
                    <div className="flex flex-col justify-center items-center">
                        {testimonials
                            .filter((t) => t.position === "center")
                            .map((t, idx) => (
                                <div key={idx} className="bg-white border-b-2 border-[--main-color] rounded-xl shadow overflow-hidden">
                                    {t.video ? (
                                        <iframe
                                            className="w-full h-64 md:h-80"
                                            src={t.video}
                                            title="testimonial video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : null}
                                    <div className="p-4">
                                        <p className="text-gray-800 text-lg italic mb-3">{t.quote}</p>
                                        <div className="text-sm text-[--main-color] font-semibold">{t.name}</div>
                                        <div className="text-xs text-gray-600">{t.title}</div>
                                        <div className="text-xs text-gray-600">{t.company}</div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6">
                        {testimonials
                            .filter((t) => t.position === "right")
                            .map((t, idx) => (
                                <div key={idx} className="bg-white border-b-2 border-[--main-color] rounded-xl shadow p-4 relative">
                                    {t.image && (
                                        <img
                                            src={t.image}
                                            alt="testimonial"
                                            className="rounded-md w-full h-40 object-cover mb-3"
                                        />
                                    )}
                                    <p className="text-gray-800 italic mb-3">{t.quote}</p>
                                    <div className="text-sm text-[--main-color] font-semibold">{t.name}</div>
                                    <div className="text-xs text-gray-600">{t.title}</div>
                                    <div className="text-xs text-gray-600">{t.company}</div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    }
