'use client';

import Link from 'next/link';
import { FaStar, FaSearch } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
        {/* Desktop View */}
        <div className="hidden sm:flex w-full items-center justify-between">
          {/* Left: Stars & Reviews */}
          <div className="flex items-center space-x-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="ml-2 font-medium">2,500+ Reviews</span>
          </div>

          {/* Center: Search */}
          <div className="flex items-center space-x-2">
            <FaSearch className="text-white h-4 w-4" />
            <span>Search</span>
          </div>

          {/* Right: Links */}
          <div className="flex items-center space-x-6">
            <Link
            href="#"
            className=" text-white font-bold px-2 py-1 rounded hover:bg-blue-900"
          >
            Electrical
          </Link><Link
            href="#"
            className=" text-white font-bold px-2 py-1 rounded hover:bg-blue-900"
          >
            Security
          </Link>
          <Link
            href="#"
            className=" text-white font-bold px-2 py-1 rounded hover:bg-blue-900"
          >
            Fire
          </Link>
           
          </div>
        </div>

        {/* Mobile View: Social Media Only */}
        <div className="flex items-center justify-center space-x-3 sm:hidden w-full">
      
    </div>
      </div>
    </div>
  );
}
