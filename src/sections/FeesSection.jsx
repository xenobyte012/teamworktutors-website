import React from "react";

function FeesSection() {
  return (
    <div>
      <section className="py-10  from-orange-50 to-white bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 ">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-h1 font-bold text-heading tracking-wide">
              Our Pricing Plans
            </h2>
            <p className="mt-4 text-fainttext text-h3 italic">
              Choose a plan that works best for you
            </p>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hourly Plan */}
            <div
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105
transition duration-300"
            >
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                Hourly Plan
              </h3>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800">R100</span>
                <span className="text-gray-500 text-sm"> / hour</span>
              </div>
              <ul className="mt-6 space-y-3 text-normal">
                <li>✔ One-on-one tutoring</li>
                <li>✔ Flexible schedule</li>
                <li>✔ WhatsApp support</li>
                <li>✔ Exam preparation</li>
              </ul>
            </div>
            {/* Weekly Plan */}
            <div
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105
transition duration-300"
            >
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                Weekly Plan
              </h3>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800">R250</span>
                <span className="text-gray-500 text-sm"> / week</span>
              </div>
              <ul className="mt-6 space-y-3 text-normaltext">
                <li>✔ 3+ sessions per week</li>
                <li>✔ Priority assistance</li>
                <li>✔ WhatsApp support</li>
                <li>✔ Study materials</li>
              </ul>
            </div>
            {/* Monthly Plan (Highlighted) */}
            <div className="relative bg-orange-500 text-secondary rounded-2xl shadow-2xl p-8 scale-105">
              {/* Badge */}
              <span
                className="absolute top-4 right-4 bg-secondary text-orange-500 text-xs font-bold px-3
py-1 rounded-full"
              >
                BEST VALUE
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Monthly Plan
              </h3>
              <div className="mt-6">
                <span className="text-4xl font-bold">R500</span>
                <span className="text-sm opacity-80"> / month</span>
              </div>
              <ul className="mt-6 space-y-3 opacity-95">
                <li>✔ Unlimited consultation</li>
                <li>✔ Priority support</li>
                <li>✔ Free drawing papers</li>
                <li>✔ Full exam preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeesSection;
