import { Button } from "@material-tailwind/react";
import { Search } from "lucide-react";
import heroimage from "../../assets/architecture-ancient-monument-world-heritage-day-celebration.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getBusinessCategory } from "../../redux/features/businessSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export function HeroSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState(false);


  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);

    try {
      const actionResult = await dispatch(getBusinessCategory({ keyword: searchTerm }));
      const data = unwrapResult(actionResult);
      console.log("xdcfvgbhnjmk", data);
      navigate(`/business-details?keyword=${encodeURIComponent(searchTerm)}`);
    } catch (err) {
      console.error("search failed", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimage})`,
      }}
    >
      <div className="container mx-auto px-4 text-center text-white max-w-7xl">
        <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
          Discover Punjab's
          <span className="text-[--second-color]"> Business Community</span>
        </h1>

        <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-lg max-w-3xl mx-auto">
          Connect with authentic Punjabi businesses in your area. From
          traditional restaurants to modern services, find trusted businesses
          that understand your culture and values.
        </p>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-4 sm:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 block text-left">
                What are you looking for?
              </label>
              <input
                type="text"
                placeholder="Search for businesses, services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 text-black bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex-1 w-full">
              <label className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 block text-left">
                Location
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  //   defaultValue=""
                  placeholder="Select"
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option value="melbourne">Melbourne, VIC</option>
                  <option value="sydney">Sydney, NSW</option>
                  <option value="brisbane">Brisbane, QLD</option>
                  <option value="perth">Perth, WA</option>
                  <option value="adelaide">Adelaide, SA</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
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
  );
}
