"use client";
import Link from "next/link"; // Import Link from next/link for internal navigation
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative bg-white py-16 lg:py-12 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d44] leading-tight">
              <span className="text-[#d80000]">Espros</span> Electrical & Safety
              Solutions
            </h2>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              With years of expertise in electrical, fire, and safety systems,
              Espros is committed to delivering reliable, code-compliant
              solutions for residential, commercial, and industrial spaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of certified professionals ensures precision, safety, and
              performance at every stage. From fire alarm installations to
              complete electrical system upgrades, we’re your trusted partner in
              protection and power.
            </p>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-[#d80000] text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/electric.jpg"
                alt="About Hero"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            {/* Decorative Circles */}
            <div className="absolute top-0 -left-8 w-32 h-32 bg-blue-600 opacity-30 rounded-full"></div>
            <div className="absolute bottom-0 -right-8 w-24 h-24 bg-blue-600 opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
