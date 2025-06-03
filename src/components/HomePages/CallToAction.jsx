import { Plus } from "lucide-react"

export function CallToAction() {
  return (
    <section
      className="relative py-10 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
      }}
    >
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            List Your Business for
            <span className="text-[--second-color]"> Free Today</span>
          </h2>

          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl">
            Join thousands of Punjabi businesses already connecting with their community. Showcase your services and
            grow your customer base.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-[--second-color] hover:bg-orange-600 text-white flex items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-6 rounded-md text-sm sm:text-base font-medium">
              <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
              Add Your Business
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-gray-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-6 rounded-md text-sm sm:text-base font-medium transition-colors">
              Learn More
            </button>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-200">
            No setup fees • No monthly charges • Start getting customers today
          </p>
        </div>
      </div>
    </section>
  )
}
