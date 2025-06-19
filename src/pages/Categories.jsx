import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { getBusinessCategory } from "../redux/features/businessSlice";
import { unwrapResult } from "@reduxjs/toolkit";

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


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);

    try {
      const actionResult = await dispatch(getBusinessCategory({ keyword: searchTerm }));
      const data = unwrapResult(actionResult);
      console.log("Search Success:", data);

      navigate(`/business-details?keyword=${encodeURIComponent(searchTerm)}`);
    } catch (err) {
      console.error("Search failed", err);
    }
    finally {
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
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sydney">Sydney, NSW</SelectItem>
                      <SelectItem value="melbourne">Melbourne, VIC</SelectItem>
                      <SelectItem value="brisbane">Brisbane, QLD</SelectItem>
                      <SelectItem value="adelaide">Adelaide, SA</SelectItem>
                      <SelectItem value="perth">Perth, WA</SelectItem>
                    </SelectContent>
                  </Select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <Link>
                <Button
                  onClick={handleSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-8 py-3 rounded-md transition-colors w-full md:w-auto font-medium disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span>Search</span>
                    </>
                  )}
                </Button>
              </Link>
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
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 text-sm"
                    >
                      {category}
                    </a>
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
              {[
                "Restaurants",
                "Beauty Salons",
                "Grocery Stores",
                "Driving Schools",
                "Real Estate",
                "Photography",
                "Event Planning",
                "Tutoring",
                "Cleaning Services",
                "IT Services",
                "Travel Agents",
                "Insurance",
                "Dentists",
                "Physiotherapy",
                "Optometrists",
                "Veterinarians",
                "Jewelers",
                "Clothing Stores",
                "Car Dealers",
                "Florists",
                "Bakeries",
                "Catering",
                "DJ Services",
                "Wedding Planners",
              ].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white text-center py-3 px-4 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
