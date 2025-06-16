import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categories from "../../redux/features/enum";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessCategory } from "../../redux/features/businessSlice";

console.log(categories);

export default function CategoriesSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { BusinessCategory, loading } = useSelector((state) => state.business);

  const [hoveredIndex, setHoveredIndex] = useState(null);


   const handleCategoryClick = async (categoryName) => {
    await dispatch(getBusinessCategory({ category: categoryName }));
    navigate("/business-details", { state: { selectedCategory: categoryName } });
  };

  return (
    <>
      <section className="relative py-14 overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[--main-color] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[--main-color] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-spin-slow z-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[--main-color] rounded-full mix-blend-multiply filter blur-2xl opacity-10 z-0"></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-2xl md:text-4xl font-semibold text-[--main-color] mb-6 tracking-tight">
                Browse by Category
              </h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                onClick={() => handleCategoryClick(category.category)}
              >
                {/* Background hover layer */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02] border border-[--main-color]/20 group-hover:border-[--main-color]/50">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e6f0f9]/50 via-white/30 to-[#e6f0f9]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[--main-color]/20 via-[--main-color]/20 to-[--main-color]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-px">
                  <div className="w-full h-full bg-white/90 rounded-3xl"></div>
                </div>

                {/* Card Content */}
                <Link to={"/business-details"}>
                  <div className="relative p-8 text-center h-full flex flex-col justify-center min-h-[200px] z-10">
                    <div className="relative mb-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e6f0f9] to-[#e6f0f9] rounded-2xl transform group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100 -m-3"></div>
                        <div className="text-4xl transform group-hover:scale-110 transition-all duration-500 relative z-10 group-hover:-translate-y-1">
                          {category.icon}
                        </div>
                      </div>
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 -m-4">
                          <div className="w-full h-full border border-[--main-color]/30 rounded-full animate-ping opacity-40"></div>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-medium text-[--main-color] group-hover:text-[#0d4b8c] transition-all duration-500 mb-3 leading-tight">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500 leading-relaxed font-medium">
                      {category.subcategories.join(", ")}
                    </p>

                    {/* Bottom hover bar */}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[--main-color] to-[#4a90e2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
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
