import Link from "next/link";
import React from "react";

const Content = {
  heading: "An Identity-Driven Creative Partner",
  tagline: "We combine strategy, design, and storytelling to help brands stand out. Our work is built on clarity, intention, and emotional connection.",
  excerpt: "From visual branding to digital design, we create meaningful solutions for thinkers, builders, and dreamers. Every detail matters — from typography to micro-interactions — because great design is felt, not just seen.",
};

export const AboutSection = () => {
  return (
    <section id="section" className="py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center">
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="flex xl:flex-row xl:gap-64 flex-col h-full justify-center xl:items-center">
          <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
            <p className="uppercase text-4xl leading-normal">{Content.heading}</p>
            <p>{Content.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-3/4">
            <p className="text-lg">{Content.excerpt}</p>
            <Link href="/works">
              <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
