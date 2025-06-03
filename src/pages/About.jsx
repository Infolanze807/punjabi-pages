import { Globe, Users, Building, Award, Mail, Phone, MapPin } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-gradient-to-r from-blue-500 to-blue-700"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Punjabi Pages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting the global Punjabi business community and preserving our cultural heritage abroad
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Punjabi Pages is dedicated to connecting and empowering Punjabi businesses across the globe. We strive
                to create a comprehensive platform that helps Punjabi entrepreneurs thrive in foreign countries while
                maintaining their cultural identity and serving their communities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where Punjabi businesses abroad are easily discoverable, well-connected, and
                prosperous. By bridging geographical gaps, we aim to strengthen the global Punjabi community and
                preserve our rich cultural heritage for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZEjFwSqAGuGJxaRgr4sp3xINFcWU1gxhoA&s"
                  alt="Punjabi community gathering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Punjabi Pages was founded in 2020 by a group of Punjabi entrepreneurs who recognized the challenges
                  faced by community businesses in foreign countries. Despite the growing Punjabi diaspora across
                  Australia, Canada, the United States, the United Kingdom, and beyond, there was no centralized
                  platform to discover and connect with these businesses.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our founders experienced firsthand the difficulty of finding trusted Punjabi services in new countries
                  – whether it was authentic Punjabi restaurants, cultural goods, or professional services that
                  understood their language and customs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What began as a simple directory has grown into a comprehensive platform that not only connects
                  customers with businesses but also helps Punjabi entrepreneurs network, grow, and preserve their
                  cultural identity while thriving in their new homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Punjabi Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Punjabi Pages?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Punjabi Pages is more than just a business directory – it's a platform built specifically for the unique
              needs of the global Punjabi community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Connect with Punjabi businesses across Australia, Canada, USA, UK, and other countries.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Trust</h3>
              <p className="text-gray-600">
                Find businesses verified and reviewed by members of the Punjabi community.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Growth</h3>
              <p className="text-gray-600">
                Help Punjabi entrepreneurs thrive by increasing their visibility and customer base.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Preservation</h3>
              <p className="text-gray-600">
                Maintain our rich Punjabi heritage and traditions while building success abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <p className="text-xl">Punjabi Businesses Listed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15</div>
              <p className="text-xl">Countries Covered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500,000+</div>
              <p className="text-xl">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our diverse team is passionate about connecting the Punjabi community and helping businesses thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden text-center hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jagjit Singh</h4>
                  <p className="text-gray-500 text-sm">Restaurant Owner, Melbourne</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Punjabi Pages has transformed my business. Since listing my restaurant, I've seen a 40% increase in
                customers from the Punjabi community. The platform helped me connect with people who were looking for
                authentic Punjabi cuisine in Melbourne."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  RK
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ravinder Kaur</h4>
                  <p className="text-gray-500 text-sm">User, Sydney</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "When I moved to Sydney, I struggled to find services that understood my cultural needs. Punjabi Pages
                made it easy to find everything from Punjabi grocery stores to Gurdwaras and cultural events. It's been
                a lifeline for staying connected to my community."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions or suggestions? We'd love to hear from you. Reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-blue-600">info@punjabipages.com</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-blue-600">+61 2 8765 4321</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Business Street, Sydney, NSW 2000, Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1596306499317-8490e6e45b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Punjabi Pages Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're a business owner looking to grow or a community member seeking services, Punjabi Pages is
            here to connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium">
              List Your Business
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium">
              Explore Businesses
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
