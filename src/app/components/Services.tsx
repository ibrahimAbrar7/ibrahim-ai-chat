"use client";
import React from "react";
import {
  FaBolt,
  FaFireExtinguisher,
  FaShieldAlt,
  FaTools,
  FaHardHat,
  FaPlug,
} from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1d44] mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Electrical Installations */}
          <div className="w-full p-6 bg-gradient-to-r from-[#0a1d44] via-[#1c3a6b] to-[#8b0000] hover:from-[#8b0000] hover:via-[#1c3a6b] hover:to-[#0a1d44] text-white text-center rounded-lg shadow-md transition-all duration-500">
            <FaBolt className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Electrical Installations</h3>
            <p className="mt-4 text-lg">
              Safe and code-compliant electrical systems for residential,
              commercial, and industrial needs.
            </p>
          </div>

          {/* Fire Alarm Systems */}
          <div className="w-full p-6 bg-gradient-to-r from-[#0a1d44] via-[#1c3a6b] to-[#8b0000] hover:from-[#8b0000] hover:via-[#1c3a6b] hover:to-[#0a1d44] text-white text-center rounded-lg shadow-md transition-all duration-500">
            <FaFireExtinguisher className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Fire Alarm Systems</h3>
            <p className="mt-4 text-lg">
              Advanced fire detection and alarm solutions ensuring life and
              property safety.
            </p>
          </div>

          {/* Security Systems */}
          <div className="w-full p-6 bg-gradient-to-r from-[#0a1d44] via-[#1c3a6b] to-[#8b0000] hover:from-[#8b0000] hover:via-[#1c3a6b] hover:to-[#0a1d44] text-white text-center rounded-lg shadow-md transition-all duration-500">
            <FaShieldAlt className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Security Systems</h3>
            <p className="mt-4 text-lg">
              Customized CCTV and access control systems to protect your space
              24/7.
            </p>
          </div>

          {/* Maintenance & Repairs */}
          <div className="w-full p-6 bg-gradient-to-r from-[#0a1d44] via-[#1c3a6b] to-[#8b0000] hover:from-[#8b0000] hover:via-[#1c3a6b] hover:to-[#0a1d44] text-white text-center rounded-lg shadow-md transition-all duration-500">
            <FaTools className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Maintenance & Repairs</h3>
            <p className="mt-4 text-lg">
              Reliable and timely maintenance to prevent issues and reduce
              downtime.
            </p>
          </div>

          {/* Safety Compliance Audits */}
          <div className="w-full p-6 bg-gradient-to-r from-[#0a1d44] via-[#1c3a6b] to-[#8b0000] hover:from-[#8b0000] hover:via-[#1c3a6b] hover:to-[#0a1d44] text-white text-center rounded-lg shadow-md transition-all duration-500">
            <FaHardHat className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Safety Compliance Audits</h3>
            <p className="mt-4 text-lg">
              Thorough inspections to meet fire and electrical safety codes and
              standards.
            </p>
          </div>

          {/* Generator & Backup Systems */}
          <div className="w-full p-6 bg-gradient-to-r from-[#0a1d44] via-[#1c3a6b] to-[#8b0000] hover:from-[#8b0000] hover:via-[#1c3a6b] hover:to-[#0a1d44] text-white text-center rounded-lg shadow-md transition-all duration-500">
            <FaPlug className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Backup Power Solutions</h3>
            <p className="mt-4 text-lg">
              Generator and UPS installations to ensure uninterrupted power
              supply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
