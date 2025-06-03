import { useEffect, useState } from "react"

function StatItem({ value, label, delay }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`relative group transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

      {/* Main content */}
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-7 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

        {/* Number with glow effect */}
        <div className="relative">
          <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-500">
            <span className="relative">
              {value}
              {/* Glow effect */}
              <span className="absolute inset-0 text-cyan-400 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                {value}
              </span>
            </span>
          </h3>

          {/* Label */}
          <p className="text-blue-100 text-lg md:text-lg font-medium group-hover:text-white transition-colors duration-500">
            {label}
          </p>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping"></div>
      </div>
    </div>
  )
}

export function FuturisticStats() {
  return (
    <section className="relative py-10 md:py-12 overflow-hidden" style={{ backgroundColor: "#1867b2" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 border border-blue-300/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-16 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4">
            Platform <span className="text-cyan-300">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatItem value="500+" label="Businesses" delay={200} />
          <StatItem value="40K" label="Users" delay={400} />
          <StatItem value="200+" label="Premium Users" delay={600} />
          <StatItem value="16+" label="Business Listings Daily" delay={800} />
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-10 md:mt-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
