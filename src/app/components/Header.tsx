'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white py-4 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:pb-2 relative">
        {/* Mobile: Hamburger menu */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="lg:hidden z-10"
        >
          <FaBars className="h-6 w-6 text-gray-800" />
        </button>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
          <Link href="/">
            <Image
              src="/logo-new.png"
              alt="Company Logo"
              width={130}
              height={40}
              className="lg:hidden"
            />
          </Link>
        </div>

        {/* Logo */}
        

        {/* Mobile: Call button */}
        <a
          href="tel:+13019703007"
          className="lg:hidden text-white bg-[#d5a32d] p-2 rounded z-10"
          aria-label="Call now"
        >
          <FaPhoneAlt className="h-5 w-5" />
        </a>

        {/* Desktop: Contact info and CTA */}
        <div className="hidden lg:flex flex-row gap-8 items-center ml-auto">
          <Link
            href="tel:+13019703007"
            className="text-xl font-semibold text-gray-800 flex items-center hover:underline"
          >
            <FaPhoneAlt className="h-5 w-5 mr-2 text-black" />
            <span>650-770-4101</span>
          </Link>
          <button className="bg-[#d5a32d] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-red-700">
            Request A Quote
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block border-t relative">
  {/* Logo absolutely positioned inside nav */}
  <div className="absolute right-1/2 md:mr-55 xl:mr-85 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
    <Link href="/">
      <Image
        src="/logo-new.png"
        alt="Company Logo"
        width={190}
        height={50}
      />
    </Link>
  </div>

  {/* Nav links with left padding so they don't overlap the logo */}
  <div className="max-w-7xl mx-auto px-4 py-2">
    <ul className="flex justify-end gap-6 text-md font-medium text-gray-800 pl-[200px]">
      <li><Link href="/" className="hover:text-[#d80000]">Home</Link></li>
      <li><Link href="/about-us" className="hover:text-[#d80000]">About Us</Link></li>
      <li><Link href="/services" className="hover:text-[#d80000]">Services</Link></li>
      <li><Link href="/industries" className="hover:text-[#d80000]">Industries We Serve</Link></li>
      <li><Link href="/careers" className="hover:text-[#d80000]">Careers</Link></li>
      <li><Link href="/resources" className="hover:text-[#d80000]">Resources</Link></li>
      <li><Link href="/contact" className="hover:text-[#d80000]">Contact Us</Link></li>
    </ul>
  </div>
</nav>


      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-4">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <FaTimes className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <ul className="mt-6 space-y-4 text-lg font-medium text-gray-900">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries We Serve</Link></li>
            <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
            <li><Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
          <div className="mt-6 space-y-4">
            <a
              href="tel:+13019703007"
              className="flex items-center text-gray-800 hover:underline"
            >
              <FaPhoneAlt className="mr-2" /> 650-770-4101
            </a>
            <button className="w-full bg-[#d80000] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-red-700">
              Request A Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
