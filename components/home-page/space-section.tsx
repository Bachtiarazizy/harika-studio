import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HarikaSpaceSection() {
  return (
    <section className="relative min-h-screen bg-[#131313] text-white overflow-hidden flex items-center justify-center py-12 sm:py-16 lg:py-20">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Title */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-2 sm:mb-4">DIGITAL CRAFT</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight">
              MEETS<span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#E59156] rounded-full mx-2 sm:mx-3 align-middle"></span>VISION
            </h2>
          </div>

          {/* Center Image with Side Text and Brackets */}
          <div className="relative max-w-4xl lg:max-w-2xl xl:max-w-3xl mx-auto">
            {/* Left Bracket + Text - Desktop Only */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full items-center gap-4 xl:gap-6 pr-16">
              <div className="text-5xl lg:text-6xl xl:text-7xl text-white/20 font-thin -mt-2">[</div>
              <div className="text-left">
                <p className="text-xs text-[#F6F6F6]/60 uppercase tracking-wider mb-2">Where innovative</p>
                <p className="text-xs text-[#F6F6F6]/60 uppercase tracking-wider mb-2">design meets</p>
                <p className="text-xs text-[#F6F6F6]/60 uppercase tracking-wider">development</p>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative group">
              <div className="aspect-4/3 lg:aspect-video rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-[#34373A]">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop"
                  alt="Creative workspace at Harika Studio"
                  className="w-full h-full object-cover transform group-hover:scale-105 rounded-lg sm:rounded-xl lg:rounded-2xl transition-transform duration-700"
                />
              </div>

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
            </div>

            {/* Right Text + Bracket - Desktop Only */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full items-center gap-4 xl:gap-6 pl-16">
              <div className="text-right">
                <p className="text-xs text-[#F6F6F6]/60 uppercase tracking-wider mb-2">Delivering brand</p>
                <p className="text-xs text-[#F6F6F6]/60 uppercase tracking-wider mb-2">identities that</p>
                <p className="text-xs text-[#F6F6F6]/60 uppercase tracking-wider">resonate</p>
              </div>
              <div className="text-5xl lg:text-6xl xl:text-7xl text-white/20 font-thin -mt-2">]</div>
            </div>

            {/* Mobile Brackets */}
            <div className="lg:hidden">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl text-white/20 font-thin">[</div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl text-white/20 font-thin">]</div>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-[#F6F6F6]/80 leading-relaxed">
              Transforming brands into digital excellence through creative design,
              <br className="hidden sm:block" />
              strategic development, and compelling brand identities.
            </p>
          </div>

          {/* Scroll to Explore */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 pt-4 sm:pt-8">
            <button className="group flex items-center gap-2 text-xs sm:text-sm text-[#F6F6F6]/80 hover:text-[#E59156] transition-colors duration-300">
              Scroll to Explore
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Right Icon */}
      <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#E59156] hover:rotate-90 transition-all duration-300 cursor-pointer">
          <span className="text-xs sm:text-sm">⊕</span>
        </div>
      </div>
    </section>
  );
}
