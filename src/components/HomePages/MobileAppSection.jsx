import { Smartphone } from "lucide-react"

export function MobileAppSection() {
  return (
    <section className="bg-gradient-to-r from-[--main-color] to-[#0d4b8c] py-12 sm:py-16 md:py-14">
      <div className="container mx-auto px-4 md:px-10 lg:px-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mobile Phones Mockup */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone 1 */}
              <div className="relative z-10 bg-black rounded-[2.5rem] p-2 shadow-2xl transform rotate-6">
                <div className="bg-white rounded-[2rem] overflow-hidden w-60 md:w-64 h-[480px] md:h-[520px]">
                  {/* Phone Screen Content */}
                  <div className="p-4 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-center mb-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-4 text-[--main-color]">Awesome!</h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Now that you've built an awesome page, let's get you connected with the best local businesses.
                      </p>

                      {/* Categories */}
                      <div className="space-y-3">
                        <div className="bg-[--main-color] text-white px-4 py-3 rounded-lg font-medium">Salons</div>
                        <div className="bg-[--main-color] text-white px-4 py-3 rounded-lg font-medium">Restaurants</div>
                        <div className="bg-[--main-color] text-white px-4 py-3 rounded-lg font-medium">Education</div>
                        <div className="bg-[--main-color] text-white px-4 py-3 rounded-lg font-medium">Car Services</div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex justify-around py-4 border-t">
                      <div className="w-6 h-6 bg-[--main-color] rounded"></div>
                      <div className="w-6 h-6 bg-[--main-color] rounded"></div>
                      <div className="w-6 h-6 bg-[--main-color] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="absolute top-8 -right-10 md:-right-16 bg-black rounded-[2.5rem] p-2 shadow-2xl transform -rotate-6">
                <div className="bg-white rounded-[2rem] overflow-hidden w-60 md:w-64 h-[480px] md:h-[520px]">
                  <div className="p-4 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-center mb-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-[--second-color] rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-4 text-[--main-color]">All done!</h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Now that you've built an awesome page, let's get you connected with the best local businesses.
                    </p>

                    {/* Illustration */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-32 h-32 bg-[#e6f0f9] rounded-lg flex items-center justify-center">
                        <Smartphone className="w-16 h-16 text-[--main-color]" />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[--main-color] text-white px-6 py-3 rounded-lg font-medium mb-4">
                      Let's do it!
                    </button>

                    {/* Bottom Navigation */}
                    <div className="flex justify-around py-4 border-t">
                      <div className="w-6 h-6 bg-[--main-color] rounded"></div>
                      <div className="w-6 h-6 bg-[--main-color] rounded"></div>
                      <div className="w-6 h-6 bg-[--main-color] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              Discover <span className="text-[--second-color]">Punjabi</span>
              <br />
              Businesses And
              <br />
              Pages!
            </h2>

            <p className="text-lg sm:text-xl mb-8 text-[#e6f0f9] max-w-2xl">
              Download the Punjabi Pages app to explore and connect with trusted businesses, services, and community
              resources in your area.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
