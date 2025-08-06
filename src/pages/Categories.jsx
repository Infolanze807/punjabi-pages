import { Search, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessCategory, getCities } from "../redux/features/businessSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import categories from "../redux/features/enum";

const cityCategories = {
  Sydney: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
  ],
  Melbourne: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
  ],
  Brisbane: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
  ],
  Adelaide: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
  ],
  Perth: [
    "Plumbers",
    "Electricians",
    "Locksmiths",
    "Lawyers",
    "Mechanics",
    "Pest Control",
    "Auto Electricians",
    "Accountants",
    "Doctors",
    "Builders",
  ],
};

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { cities } = useSelector((state) => state.business);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    dispatch(getCities());
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim() && !selectedCity.trim()) return;
    await dispatch(
      getBusinessCategory({
        keyword: searchTerm,
        city: selectedCity,
      })
    );
    navigate("/business-details", {
      state: {
        selectedCategory: searchTerm,
        location: selectedCity
      }
    });
  };

  const uniqueSubcategories = Array.from(
    new Set(categories.flatMap(cat => cat.category))
  );

  const handleClickCategoryOnly = async (category) => {
    if (!category.trim()) return;

    try {
      setLoading(true);
      const resultAction = await dispatch(
        getBusinessCategory({
          keyword: "", // You can leave this empty or use category if needed
          city: selectedCity,
          category: category, // explicitly pass category
        })
      );
      unwrapResult(resultAction);

      navigate("/business-details", {
        state: {
          selectedCategory: category,
          location: selectedCity,
        },
      });
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCityCategoryClick = async (city, subCategory) => {
    if (!subCategory.trim() || !city.trim()) return;

    try {
      setLoading(true);
      const resultAction = await dispatch(
        getBusinessCategory({
          keyword: "", // optional
          city: city,
          subCategory: subCategory,
        })
      );
      unwrapResult(resultAction);

      navigate("/business-details", {
        state: {
          selectedCategory: subCategory,
          location: city,
        },
      });
    } catch (error) {
      console.error("Error fetching businesses:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Search Section */}
      <section className="relative py-16 bg-[--main-color] overflow-hidden text-white border-b">
        {/* Decorative SVG Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 w-full h-32 md:h-40 lg:h-48"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff22"
              fillOpacity="1"
              d="M0,160L48,154.7C96,149,192,139,288,144C384,149,480,171,576,165.3C672,160,768,128,864,128C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 max-w-4xl z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find Businesses by Category
            </h1>
            <p className="text-lg text-white/90">
              Search for trusted Punjabi businesses in your area
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg text-black">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              {/* Search input */}
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-2 block text-left">
                  What are you looking for?
                </label>
                <Input
                  type="text"
                  placeholder="Search for businesses, services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* City Dropdown */}
              <div className="flex-1">
                <label className="text-sm text-gray-600 mb-2 block text-left">
                  Location
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Location
                    </option>

                    {Array.isArray(cities) &&
                      cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <Button onClick={handleSearch} className="p-0">
                <Link to={"/business-details"}>
                  <div className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-8 py-3 rounded-md transition-colors w-full md:w-auto font-medium">
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Categories by City Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-10 lg:px-24 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--main-color] mb-4">
              Popular categories on Punjabi Pages
            </h2>
          </div>

          {/* City Categories Grid */}
          <div className="relative bg-white min-h-screen overflow-hidden">
            {/* Full Page Decorative SVG Background (Top Edge Wave) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#e0f2fe"
                  d="M0,96L40,101.3C80,107,160,117,240,117.3C320,117,400,107,480,101.3C560,96,640,96,720,122.7C800,149,880,203,960,229.3C1040,256,1120,256,1200,245.3C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
              </svg>
            </div>

            {/* Foreground Grid Content */}
            <div className="relative z-10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {Object.entries(cityCategories).map(([city, categories]) => (
                <div
                  key={city}
                  className="bg-white border rounded-xl shadow-lg p-6 transition hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">{city}</h3>
                  <ul className="space-y-2">
                    {categories.map((subCategory, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleCityCategoryClick(city, subCategory)}
                          className="text-sm text-gray-700 hover:text-blue-600"
                        >
                          {subCategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Categories Section */}
          <div className="relative mt-6 rounded-3xl  p-10 overflow-hidden border border-blue-100">
            {/* Soft decorative SVG circles in background */}
            <svg
              className="absolute -top-10 -left-10 w-60 h-60 text-blue-100 opacity-30"
              fill="currentColor"
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="100" />
            </svg>
            <svg
              className="absolute -bottom-10 -right-10 w-72 h-72 text-blue-200 opacity-20"
              fill="currentColor"
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="100" />
            </svg>

            {/* Title */}
            <h3 className="relative z-10 text-3xl font-extrabold text-blue-900 text-center mb-8 tracking-tight">
              More Business Categories
            </h3>

            {/* Grid Buttons */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {uniqueSubcategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleClickCategoryOnly(category)}
                  className="bg-white/80 backdrop-blur-sm hover:bg-blue-100 hover:text-blue-800 border border-blue-100 text-gray-800 font-medium py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-sm text-center"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Optional "View All" Button */}
            {uniqueSubcategories.length > 12 && (
              <div className="relative z-10 mt-8 text-center">
                <button
                  onClick={handleViewAll}
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-semibold"
                >
                  View All Categories →
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Categories;
