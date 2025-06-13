import {
  Mail,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  ChevronsRight,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="bg-gradient-to-r from-[--main-color] to-[#0d4b8c] relative border-b">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-white rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-24 py-12 md:py-16 max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Yourself Discovered!
            </h2>
            <p className="text-base text-white max-w-2xl mx-auto">
              Join the largest Punjabi business community and connect with
              thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Pages Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 pl-6">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      About Us
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      Featured Businesses
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      Explore Categories
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      How It Works
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      Success Stories
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      Community Events
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 pl-6">Business</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>
                    <span className="hover:underline underline-offset-3">
                      Add Your Business
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>{" "}
                    <span className="hover:underline underline-offset-3">
                      Business Directory
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>{" "}
                    <span className="hover:underline underline-offset-3">
                      Premium Listings
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>{" "}
                    <span className="hover:underline underline-offset-3">
                      Why Choose Us
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>{" "}
                    <span className="hover:underline underline-offset-3">
                      Pricing Plans
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center text-white font-medium transition-all duration-300"
                  >
                    <span className="opacity-0 transform -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ChevronsRight />
                    </span>{" "}
                    <span className="hover:underline underline-offset-3">
                      Business Resources
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Contact Column */}
            <div> 
              <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors font-medium flex items-center gap-2"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors font-medium flex items-center gap-2"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors font-medium flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-white transition-colors font-medium flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </li>
              </ul>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">1800 PUNJABI</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@punjabipages.com</span>
                </div>
              </div>
            </div>

            {/* Subscribe Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Subscribe</h3>
              <p className="text-white mb-4 text-sm">
                Get the latest updates on new businesses and community events
              </p>
              <div className="flex flex-col sm:flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 rounded-lg border-0 bg-white/90 backdrop-blur-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-white hover:bg-white/80 text-[--main-color] px-6 py-2 text-sm rounded-lg transition-colors flex items-center justify-center gap-2 font-medium">
                  <Send className="w-3 h-3" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>

              {/* App Download Links */}
              <div className="mt-6">
                <p className="text-sm text-white mb-3 font-medium">
                  Download Our App
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-xs"
                  >
                    <div className="mr-2">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-xs"
                  >
                    <div className="mr-2">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gradient-to-r from-[--main-color] to-[#0d4b8c] text-white py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Punjabi Pages"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">Punjabi Pages</span>
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                Copyright © 2025, Punjabipages.in | Designed & Developed by{" "}
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  www.punjabipages.in
                </a>
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
