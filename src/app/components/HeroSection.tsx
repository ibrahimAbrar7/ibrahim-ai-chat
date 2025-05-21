"use client";

import Image from "next/image";
import {
  MdElectricBolt,
  MdLocalFireDepartment,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FaPlug } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { GiFireExtinguisher, GiCctvCamera } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center px-3"
      style={{ backgroundImage: "url('/newone.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 text-white">
        {/* Left: Services */}
        <div className="w-full md:px-10">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-8 text-center md:text-left">
            Your Single Source for <br /> All Safety Solutions
          </h1>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <BsFire />, label: "Ultra-Fire Protection" },
              { icon: <GiCctvCamera />, label: "ProShield Security" },
              { icon: <MdElectricBolt />, label: "Electrical Systems" },
              { icon: <GiFireExtinguisher />, label: "Fire Extinguishers" },
              { icon: <MdLocalFireDepartment />, label: "Fire Quick Response" },
              { icon: <GiCctvCamera />, label: "Advance Security" },
              { icon: <MdOutlineReportProblem />, label: "Emergency Alerts" },
              { icon: <FaPlug />, label: "Ultra-Power Supply" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-center sm:items-start justify-start bg-white hover:bg-[#0a1d44] text-gray-800 px-5 py-4 rounded-lg shadow-md transition-colors duration-300"
              >
                <div className="text-[#0a1d44] group-hover:text-white text-3xl md:text-5xl sm:text-6xl mb-2 sm:mb-0 sm:mr-3">
                  {item.icon}
                </div>
                <div className="text-md sm:text-lg text-[#0a1d44] group-hover:text-white font-bold text-center sm:text-left leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-8 text-center md:text-left md:hidden pt-4 ">
            Electrical - Fire - Security <br />
            Reliable Services
          </h1>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded shadow-lg p-6 text-gray-900 w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center mb-4">
            <Image src="/logo-new.png" alt="Logo" width={150} height={50} />
            <h2 className="text-2xl font-semibold mt-2">Let us help.</h2>
          </div>

          <p className="text-sm font-semibold mb-6 text-center">
            Complete the form to connect with our Fire, Electrical, and Safety service specialists.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Company Name *"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Street Address *"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="City *"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="State *"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Zip Code *"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <button
              type="submit"
              className="w-full bg-[#d80000] text-white font-semibold py-2 rounded hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
