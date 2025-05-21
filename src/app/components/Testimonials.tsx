"use client";

import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const reviews = [
  {
    name: "Jessica Morgan",
    content:
      "Excellent service from start to finish. The electrical team was punctual and very professional.",
  },
  {
    name: "David Thompson",
    content:
      "ESFPros did a flawless job installing our fire alarm system. Highly reliable and responsive.",
  },
  {
    name: "Emily Parker",
    content:
      "They upgraded our office with new safety lights. Clean work and quick turnaround.",
  },
  {
    name: "Michael Reed",
    content:
      "Very impressed with the emergency electrical repair. The technician explained everything clearly.",
  },
  {
    name: "Samantha Hayes",
    content:
      "Quick and professional fire extinguisher inspection. They made the process easy and stress-free.",
  },
  {
    name: "James Carter",
    content:
      "We had them install a new surge protection system. Great communication and execution.",
  },
  {
    name: "Lauren Bennett",
    content:
      "The team was friendly and thorough during our safety audit. Highly recommend their service.",
  },
  {
    name: "Brian Scott",
    content:
      "Smooth installation of smoke detectors in our facility. Everything was tested and verified.",
  },
  {
    name: "Megan Russell",
    content:
      "They handled our fire drill training very professionally. Our staff learned a lot.",
  },
  {
    name: "Christopher Adams",
    content:
      "Had a short circuit emergency and they arrived fast. Efficient and trustworthy service.",
  },
  {
    name: "Ashley Coleman",
    content:
      "The fire panel upgrade went smoothly. Everything was labeled and explained clearly.",
  },
  {
    name: "Brandon Lewis",
    content:
      "Installed our emergency exit signs and tested them fully. Great job and attention to detail.",
  },
  {
    name: "Hannah Peterson",
    content:
      "Very clean and organized work during the electrical rewiring. The team was respectful and on time.",
  },
  {
    name: "Matthew Bryant",
    content:
      "They inspected our entire fire suppression system. Good value and clear documentation provided.",
  },
  {
    name: "Natalie Foster",
    content:
      "Extremely professional staff. They handled our smoke alarm upgrades.",
  },
  {
    name: "Tyler Jameson",
    content:
      "Great work on our power backup installation. The technician walked us through everything.",
  },
  {
    name: "Olivia Simmons",
    content:
      "The team was knowledgeable and fast. Fire safety checks were done thoroughly.",
  },
  {
    name: "Ethan Walsh",
    content:
      "Top-quality electrical panel replacement. The work was neat and completed on time.",
  },
  {
    name: "Chloe Brooks",
    content:
      "Happy with their full building safety inspection. Everything was documented and compliant.",
  },
  {
    name: "Logan Mitchell",
    content:
      "Called for urgent fire alarm service. They were at our location within the hour and fixed it.",
  },
];


export default function Testimonials() {
  return (
    <section className="bg-white py-8 text-center md:px-3 xl:px-12">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a1d44] mb-6">
          Testimonials
        </h2>
          <Image
            src="/google-logo.webp"
            alt="Google Logo"
            width={60}
            height={60}
            className="mb-2"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d44]">5.0</h2>
          <div className="flex justify-center text-yellow-400 my-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <IoIosStar
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current"
                />
              ))}
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            540: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 rounded-xl bg-white shadow-md h-[160px] sm:h-[160px] lg:h-[190px] flex flex-col justify-between mb-16">
                <div className="text-[#0a1d44] text-2xl mb-2">
                  <RiDoubleQuotesR />
                </div>
                <div className="text-sm text-gray-800 pb-4 leading-relaxed text-center">
                  {review.content}
                </div>
                <p className="font-semibold text-gray-900 mt-auto">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}