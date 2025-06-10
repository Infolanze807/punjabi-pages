import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Check,
  Phone,
  MessageCircle,
  Mail,
  Star,
  Users,
  MapPin,
} from "lucide-react";
import { Button } from "@material-tailwind/react";

export function Business() {
  const features = [
    "Free business listings",
    "Australian based support team",
    "Trusted by thousands of businesses",
    "The directory customers know and trust",
    "Target specific locations",
    "Supporting 'near me' searches",
  ];

  const benefits = [
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Thousands of monthly visits to advertiser websites",
      description:
        "Your listing is the beginning of the path to purchase for potential customers.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-green-600" />,
      title: "Get local or expand your reach",
      description:
        "Connect with customers in your area, or expand to new postcodes as you grow.",
    },
    {
      icon: <Phone className="w-12 h-12 text-orange-600" />,
      title: "Direct customer connections",
      description:
        "We track thousands of direct calls each year, keeping your phones ringing.",
    },
  ];

  const contactOptions = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Give us a call",
      action: "Call 1800 670 722",
      href: "tel:1800670722",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat with us",
      action: "Start Live Chat",
      href: "#chat",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Send us an enquiry",
      action: "Product enquiry",
      href: "#enquiry",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-4 md:px-10 lg:px-24 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The platform where more customers
                <span className="text-blue-600"> discover businesses</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each month our platform receives over a million business
                searches and appears in around 42 million Google results each
                week, connecting customers with local businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                  Get Started Free
                </Button>
                <Button variant="outline" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    <span className="font-semibold">1M+ Monthly Searches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6" />
                    <span className="font-semibold">
                      42M Google Results Weekly
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <span className="font-semibold">Local Business Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-10 lg:px-24 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why businesses choose our platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful businesses that trust us to connect
              them with their ideal customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features List */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Everything you need to succeed
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 md:px-10 lg:px-24 py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              Plans & Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plans to suit every business
            </h2>
            <p className="text-lg text-gray-600">
              From free listings to premium features, find the perfect plan for
              your needs
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-xl">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-6 text-white relative rounded-t-lg">
                <Badge className="absolute -top-2 right-4 bg-gray-900 text-white px-3 py-1">
                  FREE
                </Badge>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-xl font-bold">Free Listing</h4>
                    <p className="text-yellow-100">Get started today</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">$0</div>
                    <div className="text-yellow-100 text-sm">/month</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                <p className="text-gray-600">
                  Get your business listed on Australia's trusted directory at
                  no cost.
                </p>

                <hr className="border-gray-200" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Complete business details and description
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Contact information (address, phone, email, website)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Opening hours and service information
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Mobile-friendly listing page
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-10 lg:px-24 py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need help choosing the right plan?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team to discuss digital marketing solutions
              that suit your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-blue-600">{option.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {option.title}
                  </h3>
                  <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3"
                    onClick={() => (window.location.href = option.href)}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
