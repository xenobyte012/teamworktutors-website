import React from "react";
import facebook from "../images/facebook.png";
import mobile from "../images/mobile.png";
import gmail from "../images/gmail.png";

function CTASection() {
  const phoneNumber = "27763095346";

  // This message will auto-fill in WhatsApp chat
  const message = "Hello, I am interested in your service.";
  const encodedMessage = encodeURIComponent(message);

  return (
    <section className="p-6 bg-blue-50">

      {/* Heading */}
      <h1 className="text-center font-bold text-3xl md:text-4xl py-6 text-slate-800">
        Contact Us
      </h1>

      {/* WhatsApp Section */}
      <div className="space-y-4">

        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-semibold">WhatsApp</h2>
          <img src={mobile} alt="mobile icon" className="h-5" />
        </div>

        <div className="pl-4 text-gray-600 space-y-1">
          <p>Tshepo: <span className="text-black">076 309 5346</span></p>
          <p>Ephraim: <span className="text-black">078 469 6232</span></p>
        </div>

        {/* CTA Button */}
        <div className="pl-4">
          <p className="italic text-gray-500 mb-2">
            Click below to start chatting on WhatsApp
          </p>

          <a
            href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 px-5 py-2 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Email Section */}
        <div className="pt-6">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-semibold">Email Us</h2>
            <img src={gmail} alt="gmail icon" className="h-5" />
          </div>

          <div className="pl-4 text-gray-700">
            <p>teamworktutors126@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTASection;