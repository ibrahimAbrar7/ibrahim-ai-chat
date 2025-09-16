"use client";

import {
  MdOutlineSchool,
  MdWork,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { FaBrain} from "react-icons/fa";
import { GiArtificialIntelligence, GiSkills } from "react-icons/gi";

export default function HeroSection() {
  return (

    <section
      className="relative bg-cover bg-center px-3"// Replace with your background image path
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-600/60 blur-[100px] rounded-full opacity-50"></div>
        <div className="absolute top-64 right-16 w-96 h-96 bg-pink-600/60 blur-[150px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 right-2/4 w-80 h-80 bg-yellow-600/60 blur-[130px] rounded-full opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-36 py-16 text-white">
        {/* Hero Text */}
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-center md:text-left max-w-3xl">
          Your AI-Powered Guide to <br /> Smarter Career Decisions
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {[
            { icon: <GiArtificialIntelligence />, label: "AI Career Assistance" },
            { icon: <MdWork />, label: "Job Pathways" },
            { icon: <GiSkills />, label: "Skill Mapping" },
            { icon: <MdOutlineSchool />, label: "Education Planning" },
            { icon: <FaBrain />, label: "Aptitude Insights" },
            { icon: <MdOutlineTipsAndUpdates />, label: "Expert Guidance" },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-pink-400 hover:bg-[#0a1d44] text-gray-800 px-5 py-4 rounded-lg shadow-md transition-colors duration-300"
            >
              <div className="text-gray-900 group-hover:text-red-900 text-4xl mb-2">
                {item.icon}
              </div>
              <div className="text-sm sm:text-md text-gray-900 group-hover:text-red-900 font-bold text-center leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
