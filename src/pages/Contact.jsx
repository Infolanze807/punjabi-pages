import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-[#f4f7fb] min-h-screen py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">
          Have questions or want to learn more? We’re here to help. Reach out to our team and we’ll get back to you shortly.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-10 space-y-6 relative">
          {/* Bottom-left SVG */}
          <div className="absolute bottom-0 left-0">
            <svg width="100" height="100" viewBox="30 0 90 90" fill="none">
              <circle cx="50" cy="50" r="50" fill="#ffffff" fillOpacity="0.08" />
            </svg>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1" />
                <div>
                  <p className="font-medium">Our Location</p>
                  <p className="text-sm">123 Blue Street, Ocean City, IN</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1" />
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <p className="text-sm">contact@yourcompany.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Connect With Us</p>
            <div className="flex space-x-4">
              <Facebook className="hover:text-blue-300 cursor-pointer" />
              <Twitter className="hover:text-blue-300 cursor-pointer" />
              <Instagram className="hover:text-blue-300 cursor-pointer" />
              <Linkedin className="hover:text-blue-300 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-8 md:p-10 relative">
       
          <div className="absolute top-0 right-0">
            <svg width="120" height="120" viewBox="0 20 40 130" fill="none">
              <circle cx="60" cy="60" r="60" fill="#e0e7ff" fillOpacity="0.5" />
            </svg>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="bg-green-100 rounded-full p-6 mb-6">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent!</h3>
              <p className="text-slate-600 max-w-md mb-6">
                Thank you for reaching out. We’ll be in touch as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl py-3 px-6 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-slate-700 font-medium">Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-slate-700 font-medium">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-700 font-medium">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-2 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-slate-700 font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 min-h-[150px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <p className="text-slate-600 text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to being contacted.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 px-8 font-medium transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-6">
          Frequently Asked Questions
        </h3>
        <p className="text-slate-600 text-center mb-10">
          Find quick answers to common questions about our services and support.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "How quickly will you respond to my inquiry?",
              a: "We typically respond to all inquiries within 24–48 business hours. For urgent matters, please indicate in your message.",
            },
            {
              q: "Do you offer technical support on weekends?",
              a: "Yes, we offer limited support on weekends for emergency issues. Regular support hours are Mon–Fri, 9AM to 6PM.",
            },
            {
              q: "Can I schedule a consultation call?",
              a: "Please mention your availability in your message. Our team will reach out to schedule a call at a convenient time.",
            },
            {
              q: "How do I report a technical issue?",
              a: "Use this contact form and select 'Technical Support' as the subject. Include as many details as possible.",
            },
          ].map(({ q, a }, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-2">{q}</h4>
              <p className="text-slate-600 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}