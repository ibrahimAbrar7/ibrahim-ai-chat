"use client";
import Link from "next/link"; // Import Link from next/link for internal navigation
import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-12 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              <span className="text-pink-400">AI</span> Career Guidance
            </h2>
            <p className="text-md md:text-lg text-gray-200 leading-relaxed">
  With deep expertise in AI-driven career solutions, AI Career Guide is dedicated to helping students and professionals make informed, confident career decisions backed by data and technology.
</p>
<p className="text-gray-200 leading-relaxed">
  My intelligent tools analyze your interests, skills, and goals to provide personalized guidance—from academic planning to job readiness—empowering your journey toward a successful future.
</p>

            <Link
              href="/chatboot"
              className="inline-block px-6 py-3 bg-pink-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/Picture1.png"
                alt="About Hero"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            {/* Decorative Circles */}
            <div className="absolute top-0 -left-12 w-32 h-32 bg-pink-400 opacity-30 rounded-full"></div>
            <div className="absolute bottom-0 -right-8 w-24 h-24 bg-pink-400 opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
