import React from 'react';
import AboutImage from "../assets/AboutImage.jpeg"
import Img1 from "../assets/About01.jpeg"
import { Globe, Users, Building, Award, Mail, Phone, MapPin, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url("${AboutImage}")`, }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
        <div className="relative max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg leading-tight mb-6">
            Discover & Empower the Global Punjabi Community
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Bridging cultures, connecting businesses, and preserving our heritage worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        <div className="md:w-1/2">
          <img
            src={Img1}
            alt="Community"
            className="rounded-lg shadow-lg object-cover w-full h-96"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            We are committed to empowering Punjabi entrepreneurs globally by creating a vibrant platform that nurtures business growth while preserving cultural identity.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong className="font-semibold">Mission:</strong> To connect and support Punjabi businesses worldwide.
            </li>
            <li>
              <strong className="font-semibold">Vision:</strong> A flourishing Punjabi business community united across continents.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Why Punjabi Pages?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with Punjabi businesses across multiple countries worldwide.",
              },
              {
                icon: Users,
                title: "Trusted Community",
                description: "Verified businesses reviewed by the Punjabi community.",
              },
              {
                icon: Building,
                title: "Business Growth",
                description: "Increase your visibility and grow your customer base.",
              },
              {
                icon: Award,
                title: "Cultural Preservation",
                description: "Celebrate and preserve our Punjabi heritage abroad.",
              },
            ].map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-gray-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                name: "Harpreet Singh",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Simran Kaur",
                role: "Chief Operating Officer",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Gurpreet Dhillon",
                role: "Head of Business Development",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Manpreet Kaur",
                role: "Community Relations",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-14 text-gray-900">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                initials: "JS",
                name: "Jagjit Singh",
                role: "Restaurant Owner, Melbourne",
                testimonial:
                  "Punjabi Pages transformed my business. Since listing my restaurant, I’ve seen a 40% increase in Punjabi customers. A great way to connect with authentic community.",
              },
              {
                initials: "RK",
                name: "Ravinder Kaur",
                role: "User, Sydney",
                testimonial:
                  "Finding services that understood my culture was hard. Punjabi Pages made it easy to connect to grocery stores, Gurdwaras, and cultural events. A true lifeline.",
              },
            ].map(({ initials, name, role, testimonial }, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-8 rounded-xl shadow-md text-left"
              >
                <div className="flex items-center mb-6 gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
                    {initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{name}</h4>
                    <p className="text-blue-600 text-sm">{role}</p>
                  </div>
                </div>
                <p className="italic text-gray-700 text-lg leading-relaxed">“{testimonial}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-tr from-[#e0f2fe] via-[#f5f3ff] to-[#fff7ed] py-28 overflow-hidden">
        <svg
          className="absolute -top-40 -left-40 w-[80rem] opacity-20 -z-10"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#grad)"
            d="M640,400Q640,560,480,640Q320,720,200,600Q80,480,120,320Q160,160,320,120Q480,80,600,200Q720,320,640,400Z"
          />
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black text-gray-900 leading-tight mb-6">
                Launch Your Career <br />
                from Anywhere.
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-xl">
                We’re more than a job board—we’re your Punjabi career ecosystem. Grow, connect, and thrive globally with our
                curated opportunities.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button className="bg-indigo-600 text-white px-7 py-3 rounded-full font-semibold shadow-xl hover:scale-105 transition-all flex items-center">
                  <Users className="mr-2 w-5 h-5" />
                  Join Network
                </button>
                <button className="bg-white border border-indigo-300 text-indigo-600 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-50 transition-all flex items-center">
                  <Briefcase className="mr-2 w-5 h-5" />
                  Post Opportunities
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-gray-500">careers@punjabipages.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-sm text-gray-500">+1 (647) 555-0123</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:w-1/2 grid grid-cols-2 gap-6 place-items-center">
              {[
                { name: "Canada", top: "0", rotate: "-rotate-2" },
                { name: "United Kingdom", top: "16", rotate: "rotate-1" },
                { name: "Australia", top: "0", rotate: "rotate-2" },
                { name: "United States", top: "16", rotate: "-rotate-1" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-white/70 backdrop-blur-md border border-indigo-200 p-6 w-52 h-40 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 ${item.rotate}`}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <MapPin className="w-8 h-8 text-indigo-500 mb-2" />
                    <div className="text-lg font-bold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-500 mt-1">Active Market</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;