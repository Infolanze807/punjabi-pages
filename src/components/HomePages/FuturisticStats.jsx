import { useEffect, useState } from "react"

function StatItem({ value, label, delay }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 group hover:bg-white/15 hover:scale-[1.03] transition duration-300 shadow-lg">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500"></div>

        <h3 className="text-4xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-500 relative">
          {value}
          <span className="absolute inset-0 text-cyan-400 blur-sm opacity-0 group-hover:opacity-50 transition duration-300">
            {value}
          </span>
        </h3>
        <p className="text-blue-100 text-lg font-medium group-hover:text-white transition duration-300">
          {label}
        </p>
      </div>
    </div>
  )
}

export function FuturisticStats() {
  return (
    <section className="relative py-16 md:py-14 bg-[#0a2540] overflow-hidden px-4 md:px-10 lg:px-16">
      {/* Background Grid and Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-cyan-300/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-blue-300/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Platform <span className="text-cyan-300">Statistics</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <StatItem value="500+" label="Businesses" delay={200} />
          <StatItem value="40K" label="Users" delay={400} />
          <StatItem value="200+" label="Premium Users" delay={600} />
          <StatItem value="16+" label="Listings Daily" delay={800} />
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping delay-200"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-400"></div>
        </div>
      </div>
    </section>
  )
}
