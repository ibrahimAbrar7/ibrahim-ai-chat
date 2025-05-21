'use client';
import Link from 'next/link';
import React from "react";
import { FaFacebookF, FaYoutube, FaAngleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-10 border-t bg-[#0a1d44]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-gray-100">About</h2>
            <p className="text-gray-100 hover:text-gray-100 mb-4">
              Espros is a trusted leader in electrical, fire protection, and safety solutions, delivering reliable systems for homes, businesses, and industries.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#0a1d44] bg-white p-2 rounded-full hover:bg-[#0a1d44] transition-colors"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="text-[#0a1d44] bg-white p-2 rounded-full hover:bg-[#0a1d44] transition-colors"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="#"
                className="text-[#0a1d44] bg-white p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-gray-100">Services</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="#" className="text-gray-100 hover:text-[#B22234]">
                  Fire Alarm Systems
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="#" className="text-gray-100 hover:text-[#B22234]">
                  Electrical Installations
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="#" className="text-gray-100 hover:text-[#B22234]">
                  Safety Equipment Supply
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="#" className="text-gray-100 hover:text-[#B22234]">
                  Emergency Lighting
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="#" className="text-gray-100 hover:text-[#B22234]">
                  Annual Maintenance Contracts
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-gray-100">Quick Links</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="/" className="text-gray-100 hover:text-gray-100">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="/about" className="text-gray-100 hover:text-gray-100">
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="/services" className="text-gray-100 hover:text-gray-100">
                  Our Services
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="/projects" className="text-gray-100 hover:text-gray-100">
                  Projects
                </Link>
              </li>
              <li className="flex items-center">
                <FaAngleRight className="text-gray-100 mr-2" />
                <Link href="/contact" className="text-gray-100 hover:text-gray-100">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4 text-gray-100">Contact</h2>
            <Link
              href="tel:6507704101"
              className="text-gray-100 hover:text-[#B22234]"
            >
              Call Us :
              <p className="text-gray-100 mb-2"><Phone className="text-gray-100 text-xl inline mr-2" />
                650-770-4101</p> </Link>
            <Link
              href="mailto:info@espros.in"
              className="text-gray-100 hover:text-[#B22234]"
            > 
              Mail Us :
              <p className="text-gray-100 mb-2"><FaEnvelope className="text-gray-100 text-xl inline mr-2" />
              info@espros.in</p> </Link>
            <Link
              href="#"
              className="text-gray-100 hover:text-[#B22234]"
            >
              Address :
            </Link>
            <p className="text-gray-100 mb-2"><FaMapMarkerAlt className="text-gray-100 text-xl inline mr-2" />California</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-white text-sm bg-[#8b0000] w-full py-4">
        © COPYRIGHT 2025 ESPROS FIRE & SAFETY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
