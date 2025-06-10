import { Briefcase, Star, ChartBar, Megaphone } from "lucide-react";

export default function SignIn02() {
  return (
    <section className="py-16 px-6 text-center bg-gray-50">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        We Provide The Best Business Tools
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
        Discover powerful tools designed to help your business grow and thrive in today's competitive market.
      </p>

      <div className="flex justify-center mb-10">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2.5 px-6 rounded-full shadow-lg relative font-medium">
          Get to know our business tools
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-orange-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <ToolCard icon={<Briefcase size={36} />} title="Add Your Business" />
        <ToolCard icon={<Star size={36} />} title="Manage Customer Reviews" />
        <ToolCard icon={<ChartBar size={36} />} title="Performance Insights" />
        <ToolCard icon={<Megaphone size={36} />} title="Advertising Tools" />
      </div>
    </section>
  );
}

function ToolCard({ icon, title }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">
      <div className="flex items-center justify-center w-14 h-14 bg-blue-gray-100 text-[--second-color] rounded-full mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
    </div>
  );
}
