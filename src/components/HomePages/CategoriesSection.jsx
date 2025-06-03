const categories = [
  {
    icon: "🍽️",
    title: "Food & Dining",
    description: "Restaurants, caterers, tiffin services",
    color: "bg-red-50 hover:bg-red-100",
  },
  {
    icon: "🧰",
    title: "Home & Trades",
    description: "Electricians, plumbers, cleaners",
    color: "bg-blue-50 hover:bg-blue-100",
  },
  {
    icon: "🩺",
    title: "Health & Wellness",
    description: "GPs, dentists, physiotherapists",
    color: "bg-green-50 hover:bg-green-100",
  },
  {
    icon: "🛒",
    title: "Shops & Groceries",
    description: "Indian stores, clothing, jewelry",
    color: "bg-purple-50 hover:bg-purple-100",
  },
  {
    icon: "📖",
    title: "Education & Coaching",
    description: "Tutors, driving schools, language classes",
    color: "bg-yellow-50 hover:bg-yellow-100",
  },
  {
    icon: "🕌",
    title: "Faith & Culture",
    description: "Gurdwaras, cultural groups, community halls",
    color: "bg-orange-50 hover:bg-orange-100",
  },
  {
    icon: "📷",
    title: "Media & Events",
    description: "Photographers, DJs, decorators",
    color: "bg-pink-50 hover:bg-pink-100",
  },
  {
    icon: "🚘",
    title: "Auto Services",
    description: "Mechanics, car dealers, detailing",
    color: "bg-indigo-50 hover:bg-indigo-100",
  },
  {
    icon: "📑",
    title: "Finance & Legal",
    description: "Accountants, migration agents, lawyers",
    color: "bg-teal-50 hover:bg-teal-100",
  },
  {
    icon: "🏘️",
    title: "Real Estate",
    description: "Agents, mortgage brokers, property managers",
    color: "bg-cyan-50 hover:bg-cyan-100",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10 lg:px-24 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Browse by Category</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Find the perfect business for your needs from our comprehensive categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${category.color}`}
            >
              <div className="text-center p-3 sm:p-4 md:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">{category.icon}</div>
                <h3 className="mb-1 sm:mb-2 text-sm sm:text-base text-gray-800 font-medium">{category.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
