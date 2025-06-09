import React from 'react'

const Registration04 = () => {
    const faqs = [
        {
            question: "Q. Lorem ipsum dolor sit amet ?",
            answer:
                "Lorem ipsum dolor sit amet consectetur. Pulvinar ultrices adipiscing aliquam risus quam sem eu eget non. Nisi donec donec eu feugiat porta tempus donec.",
        },
        {
            question: "Q. Lorem ipsum dolor sit amet ?",
            answer:
                "Lorem ipsum dolor sit amet consectetur. Pulvinar ultrices adipiscing aliquam risus quam sem eu eget non. Nisi donec donec eu feugiat porta tempus donec.",
        },
        {
            question: "Q. Lorem ipsum dolor sit amet ?",
            answer:
                "Lorem ipsum dolor sit amet consectetur. Pulvinar ultrices adipiscing aliquam risus quam sem eu eget non. Nisi donec donec eu feugiat porta tempus donec.",
        },
        {
            question: "Q. Lorem ipsum dolor sit amet ?",
            answer:
                "Lorem ipsum dolor sit amet consectetur. Pulvinar ultrices adipiscing aliquam risus quam sem eu eget non. Nisi donec donec eu feugiat porta tempus donec.",
        },
    ];


    return (
        <div className="bg-white py-16 px-4 md:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-[--second-color] mb-10">
                    Explore answers to your <span className="font-bold">Question!</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Registration04