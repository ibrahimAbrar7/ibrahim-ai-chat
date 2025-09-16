import Image from "next/image";
import React from "react";
import { FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdLocationOn, MdEmail } from "react-icons/md";

export default function HeaderOne() {
  return (
    <div className="w-full bg-[#0f172a] shadow-sm px-4 py-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/swift-logo.png"
            alt="Swift Copy Printing"
            width={500}
            height={200}
            className="h-16 xl:h-24 w-auto object-contain" style={{ borderRadius: '20px' }}
          />
        </div>

        {/* Main Info Section */}
        <div className="flex max-[400px]:flex-col flex-row gap-8 justify-evenly md:justify-center w-full">

          {/* Location & Contact */}
          <div className="flex flex-col lg:flex-row items-start gap-6 text-sm text-blue-900 dark:text-blue-100 text-left">
            
            {/* Location */}
            <div className="flex items-start gap-2 max-w-xs px-2">
              <MdLocationOn className="text-red-600 dark:text-red-400 text-lg mt-1" />
              <div>
                <p>
                  10 East 36th Street <br />
                  (between Fifth Ave & Madison <br />
                  Ave.) New York, NY 10016
                </p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="flex flex-col gap-1 items-start px-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className=" text-gray-300 text-lg" />
                <span className="text-lg">212-683-4900</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-gray-300 text-lg" />
                <span className="text-lg">info@swiftcopy.com</span>
              </div>
            </div>
          </div>

          {/* Social + Button */}
          <div className="flex flex-col lg:flex-row sm:items-center justify-evenly lg:justify-normal gap-6">
            
            {/* Social Media */}
            <div className="flex flex-col items-start gap-1 px-2">
              <div className="flex items-center gap-2">
                <FaSquareFacebook className=" text-blue-400 text-xl" />
                <span className="text-md text-gray-200">Facebook</span>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagramSquare className=" text-pink-400 text-xl" />
                <span className="text-md text-gray-200">SwiftCopy</span>
              </div>
            </div>

            {/* Quote Button */}
            <div>
              <button className=" bg-red-500 hover:bg-red-400 text-white text-sm font-semibold px-4 py-2 rounded shadow-md transition">
                GET A QUOTE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
