import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            List Your Business for
            <span className="text-[--second-color]"> Free Today</span>
          </h2>

          <p className="mb-8 text-base sm:text-lg md:text-xl text-gray-200">
            Join thousands of Punjabi businesses already connecting with their community. Showcase your services and
            grow your customer base.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/sign-up"}>
              <button className="bg-[--second-color] hover:bg-orange-600 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md text-base font-medium transition-all duration-200">
                <Plus className="w-5 h-5" />
                Add Your Business
              </button>
            </Link>

            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 rounded-md text-base font-medium transition-all duration-200">
              Learn More
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            No setup fees • No monthly charges • Start getting customers today
          </p>
        </div>
      </div>
    </section>
  );
}
