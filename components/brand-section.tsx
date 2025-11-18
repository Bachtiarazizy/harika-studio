import Image from "next/image";
import React from "react";

const SectionImageOverlay = {
  heading: "HARIKA",
  imageOverlay: "/images/hero.jpg",
};

export const BrandSection = () => {
  return (
    <section id="section" className=" overflow-hidden h-fit relative w-full justify-center flex items-center">
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="w-full h-fit">
          <p className="text-[100vh] leading-none font-bebas tracking-tighter">{SectionImageOverlay.heading}</p>
          <div className="absolute top-[25%] aspect-square w-[88vw] sm:w-[30vw] left-0">
            <Image src={SectionImageOverlay.imageOverlay} alt="Hero Background cover" fill className="w-full h-full object-cover absolute" />
          </div>
        </div>
      </div>
    </section>
  );
};
