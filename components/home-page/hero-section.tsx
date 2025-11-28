import React from "react";

export default function HarikaStudioHero() {
  return (
    <div className="relative h-screen bg-[#131313] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 w-full">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 sm:mb-6 leading-tight">
              crafting digital
              <br />
              experiences
            </h1>

            <p className="text-[#F6F6F6] text-sm sm:text-base max-w-md mb-6 sm:mb-8 leading-relaxed">
              We help brands turn ideas into powerful
              <br className="hidden sm:block" />
              digital products — blending strategic design,
              <br className="hidden sm:block" />
              clear thinking, and modern development.
            </p>

            <button className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full hover:bg-[#E59156] hover:text-white transition-all duration-300 text-sm sm:text-base">
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Content - Desktop Only */}
          <div className="hidden lg:flex flex-col items-end text-right space-y-8 xl:space-y-12">
            <div>
              <p className="text-xs text-[#F6F6F6]/60 mb-1">FULL-SERVICE</p>
              <p className="text-xs text-[#F6F6F6]/60">DIGITAL STUDIO</p>
            </div>

            <div>
              <p className="text-sm xl:text-base mb-1">DEDICATED TO ELEVATING BRANDS</p>
              <p className="text-sm xl:text-base">INTO DIGITAL EXCELLENCE</p>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-xs text-[#F6F6F6]/60 mb-1">CLIENT</p>
                <p className="text-xs text-[#F6F6F6]/60">SATISFACTION</p>
              </div>
              <div>
                <div className="flex items-center justify-end gap-3 mb-1">
                  <span className="text-xs text-[#F6F6F6]/60">Success Rate</span>
                  <span className="text-sm">98%</span>
                </div>
                <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-[#E59156] rounded-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 text-xs sm:text-sm space-y-1">
              <p className="text-[#F6F6F6]">Branding • Web Design • Development</p>
              <p className="text-[#F6F6F6]/60">Based in Jakarta, Serving Worldwide</p>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="lg:hidden mt-8 sm:mt-12 grid grid-cols-2 gap-6 sm:gap-8 max-w-md">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-light text-[#E59156] mb-1">98%</p>
              <p className="text-xs text-[#F6F6F6]/60">Success Rate</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-light text-[#E59156] mb-1">50+</p>
              <p className="text-xs text-[#F6F6F6]/60">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
