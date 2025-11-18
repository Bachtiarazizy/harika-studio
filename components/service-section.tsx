"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Expertises = [
  {
    heading: "Brand Identity",
    url: "/images/hero.jpg",
  },
  {
    heading: "Web Design & Development",
    url: "/images/hero.jpg",
  },
  {
    heading: "Packaging & Print",
    url: "/images/hero.jpg",
  },
  {
    heading: "UI & UX Design",
    url: "/images/hero.jpg",
  },
];

export const ServiceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="section" className="overflow-hidden sm:py-24 py-6 relative w-full justify-center flex items-center">
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="text-5xl font-bebas">What We Do</h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons - Lebih ke pinggir */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-black text-white w-14 h-14 rounded-full items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-black text-white w-14 h-14 rounded-full items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Scrollable Container - Optimized for touch swipe */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {Expertises.map((expertise: any, index: number) => {
              return (
                <Link key={index} href="/works" className="shrink-0 w-[85vw] sm:w-[calc(50%-12px)] border-2 border-black p-6 group flex items-center justify-center flex-col snap-start hover:shadow-xl transition-shadow">
                  <span className="text-2xl relative z-10 text-black font-bebas mb-4">{expertise.heading}</span>
                  <div className="h-64 sm:h-[60vh] w-full overflow-hidden relative">
                    <Image src={expertise.url} alt={expertise.heading} fill sizes="(max-width: 640px) 85vw, 50vw" className="group-hover:scale-105 duration-300 object-cover" quality={90} priority={index < 2} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hide scrollbar globally for this section */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
