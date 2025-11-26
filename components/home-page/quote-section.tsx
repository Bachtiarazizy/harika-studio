"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HarikaQuoteSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
      quote: "Sometimes the most valuable things are the ones you don't notice at first — a design, a concept, the harmony between elements. This is where creativity flows down, and starts to feel like yours.",
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080&fit=crop",
      quote: "Great design is not just what looks good, it's what works perfectly — where innovation meets functionality, creating experiences that truly resonate.",
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=1080&fit=crop",
      quote: "Every brand has a story waiting to be told — we craft the narrative that connects your vision with your audience's hearts.",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <section className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Slider Section */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-screen">
        {/* Background Images with AnimatePresence */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 1.2, ease: "easeInOut" },
            }}
            className="absolute inset-0"
          >
            <Image src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay - Fixed Position */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Quote Text with Fixed Height Container */}
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 min-h-[200px] sm:min-h-60 lg:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={currentSlide}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[#F6F6F6]"
              >
                {slides[currentSlide].quote}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Get Consultation Button - Fixed Position */}
          <div className="mb-8 sm:mb-12">
            <button className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-white/30 rounded-full hover:bg-white/10 hover:border-[#E59156] transition-all duration-300 text-sm sm:text-base">
              Get A Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slider Dots - Fixed Position */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`transition-all duration-300 rounded-full ${index === currentSlide ? "w-8 sm:w-10 h-1.5 sm:h-2 bg-[#E59156]" : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/30 hover:bg-white/50"}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </motion.button>

        {/* Zoom Icon */}
        <motion.div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-20" whileHover={{ scale: 1.1, rotate: 90 }} transition={{ duration: 0.3 }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
            <span className="text-lg sm:text-xl">⊕</span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Text Section */}
      <div className="relative bg-[#0A0A0A] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="relative">
          {/* Marquee Animation */}
          <div className="flex whitespace-nowrap">
            <motion.div
              className="flex items-center gap-8 sm:gap-12 lg:gap-16"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(3)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter text-white/90">WHERE CREATIVITY MEETS PRECISION</span>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#E59156]">•</span>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tighter text-white/90">CRAFTING DIGITAL EXCELLENCE</span>
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#E59156]">•</span>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Gradient Fade Effects on Both Sides */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 bg-linear-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 bg-linear-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Subtitle */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-sm sm:text-base lg:text-lg text-[#F6F6F6]/70 leading-relaxed">Elevate your brand beyond the ordinary. We create digital experiences that stand out, inspire action, and leave lasting impressions.</p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-[#E59156]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-56 sm:h-56 bg-[#F6F6F6]/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
      </div>
    </section>
  );
}
