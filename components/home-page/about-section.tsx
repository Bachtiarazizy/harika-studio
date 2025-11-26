"use client";

import React, { useEffect, useRef, useState } from "react";
import { ZoomIn, ArrowRight, Play } from "lucide-react";
import Image from "next/image";

// Simple counter animation hook
function useCountAnimation(end: number, duration: number = 2000): [number, React.RefObject<HTMLDivElement | null>] {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return [count, ref];
}

export default function HarikaAboutSection() {
  const [projectsCount, projectsRef] = useCountAnimation(150);
  const [clientsCount, clientsRef] = useCountAnimation(98);
  const [awardsCount, awardsRef] = useCountAnimation(25);

  return (
    <section className="relative bg-[#0A0A0A] text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-16 sm:mb-20 lg:mb-24">
          {/* Left - Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative aspect-4/3 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-[#1a1a1a]">
              <Image fill src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" alt="Harika Studio workspace" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

              {/* Zoom Icon */}
              <div className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <p className="text-[#F6F6F6] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              We&apos;re a creative digital studio dedicated to crafting exceptional brand experiences and innovative solutions, creating digital products{" "}
              <span className="inline-block w-2 h-2 bg-[#E59156] rounded-full mx-1 align-middle"></span> you&apos;ll love to engage with
            </p>

            {/* Brand Title */}
            <div className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm text-[#F6F6F6]/60 mb-2 sm:mb-3 uppercase tracking-wider">About us</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none mb-4 sm:mb-6">HARIKA STUDIO</h2>

              {/* Play Video Button */}
              <button className="group flex items-center gap-3 text-xs sm:text-sm text-[#F6F6F6]/80 hover:text-[#E59156] transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 group-hover:border-[#E59156] flex items-center justify-center transition-colors relative">
                  <div className="absolute inset-0 rounded-full bg-[#E59156]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-base sm:text-lg relative z-10">
                    <Play />
                  </span>
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-[#F6F6F6]/70 leading-relaxed">
                Based in Jakarta, we blend creativity and strategic thinking to deliver premium digital solutions that elevate brands. Our comprehensive approach combines design excellence with user-centric methodology, crafting experiences
                where innovation meets exceptional execution.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="relative">
          {/* Current Focus Header */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">Our Impact:</h3>
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#E59156] flex items-center justify-center transition-colors group">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Progress Bars */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm text-[#F6F6F6]/60 uppercase tracking-wider">Project Delivery Rate</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-[#E59156] rounded-full transition-all duration-1000"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm text-[#F6F6F6]/60 uppercase tracking-wider">Client Retention</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-[#E59156] rounded-full transition-all duration-1000"></div>
              </div>
            </div>
          </div>

          {/* Stats Grid with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12">
            {/* Stat 1 - Projects Completed */}
            <div className="text-center sm:text-left" ref={projectsRef}>
              <div className="mb-3 sm:mb-4">
                <p className="text-xs text-[#F6F6F6]/50 mb-2 uppercase tracking-wider">Projects Completed</p>
                <p className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#F6F6F6]">
                  {projectsCount}
                  <span className="text-[#E59156]">+</span>
                </p>
              </div>
              <div className="w-8 h-px bg-[#E59156] mx-auto sm:mx-0"></div>
            </div>

            {/* Stat 2 - Client Satisfaction */}
            <div className="text-center sm:text-left" ref={clientsRef}>
              <div className="mb-3 sm:mb-4">
                <p className="text-xs text-[#F6F6F6]/50 mb-2 uppercase tracking-wider">Client Satisfaction</p>
                <p className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#F6F6F6]">
                  {clientsCount}
                  <span className="text-[#E59156]">%</span>
                </p>
              </div>
              <div className="w-8 h-px bg-[#E59156] mx-auto sm:mx-0"></div>
            </div>

            {/* Stat 3 - Design Awards */}
            <div className="text-center sm:text-left" ref={awardsRef}>
              <div className="mb-3 sm:mb-4">
                <p className="text-xs text-[#F6F6F6]/50 mb-2 uppercase tracking-wider">Design Awards</p>
                <p className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#F6F6F6]">
                  {awardsCount}
                  <span className="text-[#E59156]">+</span>
                </p>
              </div>
              <div className="w-8 h-px bg-[#E59156] mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-[#E59156]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 sm:w-56 sm:h-56 bg-[#F6F6F6]/3 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
}
