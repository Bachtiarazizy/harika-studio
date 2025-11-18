import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section id="section" className="py-6 sm:py-24 max-h-[1120px] h-screen sm:max-h-screen relative w-full justify-center flex items-center">
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.jpg" alt="Hero Background cover" fill className="w-full h-full object-cover absolute" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-12 sm:justify-between w-full relative bottom-0 h-full">
          <button className="border-2 font-bebas tracking-wide text-white uppercase hover:bg-white hover:text-black text-2xl duration-300 border-white rounded-full px-9 py-2">Explore</button>
          <div className="flex flex-col max-w-2xl">
            <h1 className="leading-none tracking-tighter uppercase font-bebas text-white">Design Made Timeless.</h1>
            <p className="text-white text-2xl">We craft visual identities, websites, and digital experiences that blend aesthetic clarity with business purpose.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
