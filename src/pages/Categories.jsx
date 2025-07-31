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
      <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Businesses by Category
            </h1>
            <p className="text-lg text-white">
              Search for trusted Punjabi businesses in your area
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4 items-end">
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
              <Button
                onClick={handleSearch}
                className="p-0"
              >
                <Link to={"/business-details"}>
                  <div
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-8 py-3 rounded-md transition-colors w-full md:w-auto font-medium"
                  >
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
            {Object.entries(cityCategories).map(([city, categories]) => (
              <div key={city} className="bg-white">
                {/* City Header */}
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-100">
                  {city}
                </h3>
                {/* Categories List */}
                <div className="space-y-3">
                  {categories.map((subCategory, index) => (
                    <button
                      key={index}
                      onClick={() => handleCityCategoryClick(city, subCategory)}
                      className="block w-full text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 text-sm"
                    >
                      {subCategory}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Categories Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              More Business Categories
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {uniqueSubcategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleClickCategoryOnly(category)}
                  className="bg-white text-center py-3 px-4 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
