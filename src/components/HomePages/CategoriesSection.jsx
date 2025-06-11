import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { icon: "🍽", title: "Food & Dining", description: "Restaurants, caterers, tiffin services" },
  { icon: "🧰", title: "Home & Trades", description: "Electricians, plumbers, cleaners" },
  { icon: "🩺", title: "Health & Wellness", description: "GPs, dentists, physiotherapists" },
  { icon: "🛒", title: "Shops & Groceries", description: "Indian stores, clothing, jewelry" },
  { icon: "📖", title: "Education & Coaching", description: "Tutors, driving schools, language classes" },
  { icon: "🕌", title: "Faith & Culture", description: "Gurdwaras, cultural groups, community halls" },
  { icon: "📷", title: "Media & Events", description: "Photographers, DJs, decorators" },
  { icon: "🚘", title: "Auto Services", description: "Mechanics, car dealers, detailing" },
  { icon: "📑", title: "Finance & Legal", description: "Accountants, migration agents, lawyers" },
  { icon: "🏘", title: "Real Estate", description: "Agents, mortgage brokers, property managers" },
];

export default function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-blue-100">
        {/* Abstract Background Blobs */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-spin-slow z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 z-0"></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
                Browse by Category
              </h2>
            </div>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover premium community services with trusted professionals worldwide
            </p>
          </div>


          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background hover layer */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02] border border-slate-200/50 group-hover:border-blue-200/50">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-px">
                  <div className="w-full h-full bg-white/90 rounded-3xl"></div>
                </div>

                {/* Card Content */}
                <Link to={"/categories"}>
                  <div className="relative p-8 text-center h-full flex flex-col justify-center min-h-[200px] z-10">
                    <div className="relative mb-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100 -m-3"></div>
                        <div className="text-5xl transform group-hover:scale-110 transition-all duration-500 relative z-10 group-hover:-translate-y-1">
                          {category.icon}
                        </div>
                      </div>
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 -m-4">
                          <div className="w-full h-full border border-blue-300/30 rounded-full animate-ping opacity-40"></div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-medium text-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-indigo-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 mb-3 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-relaxed font-medium">
                      {category.description}
                    </p>

                    {/* Bottom hover bar */}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Floating Animation Keyframes */}
      <style>
        {`
          @keyframes professionalFloat {
            0%, 100% {
              transform: translateY(0px) translateX(0px) rotate(0deg);
              opacity: 0.1;
            }
            25% {
              transform: translateY(-8px) translateX(4px) rotate(90deg);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-4px) translateX(-4px) rotate(180deg);
              opacity: 0.15;
            }
            75% {
              transform: translateY(4px) translateX(2px) rotate(270deg);
              opacity: 0.25;
            }
          }
        `}
      </style>
    </>
  );
}
