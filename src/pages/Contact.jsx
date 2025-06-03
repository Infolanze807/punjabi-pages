import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <div className="min-h-screen flex flex-col py-5 md:py-10 lg:py-24 md:flex-row font-sans bg-[#0B0F1C] px-5 md:px-10 lg:px-24 text-white overflow-hidden relative">
      {/* Cosmic Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600 opacity-20 blur-3xl rounded-full animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400 opacity-20 blur-3xl rounded-full animate-blob animation-delay-2000" />
      {/* Left Side - Cosmic Info */}
      <div className="md:w-1/2 flex flex-col justify-center py-16 z-10 space-y-10">
        <h1 className="text-5xl font-extrabold leading-tight tracking-wide bg-gradient-to-r from-white white to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          Reach Out <br /> To PunjabiPages
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          Our galaxy of businesses is waiting to hear from you. Collaborate,
          list, or simply say hello.
        </p>
        <div className="space-y-4 text-base">
          <p>
            <strong>Email:</strong> help@punjabipages.com
          </p>
          <p>
            <strong>Phone:</strong> 1800-PUNJABI
          </p>
          <p>
            <strong>Location:</strong> Melbourne, VIC
          </p>
        </div>
      </div>
      {/* Right Side - Form Card */}
      <div className="md:w-1/2 flex items-center justify-center relative z-10">
        <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <h3 className="text-3xl font-bold mb-6 text-center text-white drop-shadow">
            Send Your Message
          </h3>
          {submitted && (
            <div className="bg-green-400/10 border border-green-300/30 text-green-200 p-4 rounded-xl text-center mb-6">
              Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-white/30 p-4 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-white/30 p-4 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-white/30 p-4 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-white/30 p-4 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-yellow-300 text-black font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
            >
              Blast Off
            </button>
          </form>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(20px, -20px); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Contact;
