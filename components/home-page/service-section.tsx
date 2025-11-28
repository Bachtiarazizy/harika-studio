"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HarikaServicesSection() {
  const [currentService, setCurrentService] = useState(0);
  const [direction, setDirection] = useState(0);

  const services = [
    {
      title: "BRAND IDENTITY",
      subtitle: "DESIGN SYSTEM",
      description: "Strategic brand identity crafted with clarity and intention — from logo to complete visual systems designed to elevate your presence.",
      mainImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
      category: "Branding",
      features: ["Logo Design", "Visual Identity System", "Brand Guidelines", "Typography & Color System", "Brand Strategy Essentials"],
    },
    {
      title: "WEBSITE DESIGN",
      subtitle: "UI/UX EXPERIENCE",
      description: "Modern, intuitive, and conversion-focused website design built to deliver clarity, usability, and a strong digital presence.",
      mainImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      category: "Design",
      features: ["UI/UX Design", "Landing Pages", "Corporate Websites", "Design Systems", "Wireframes & Prototypes"],
    },
    {
      title: "WEB DEVELOPMENT",
      subtitle: "DIGITAL BUILD",
      description: "Fast, scalable, and modern websites built with cutting-edge technologies — from custom static sites to full-featured digital platforms.",
      mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      category: "Development",
      features: ["Next.js / React Development", "Custom Websites", "CMS Integration", "E-commerce Platforms", "Performance Optimization"],
    },
    {
      title: "GRAPHIC DESIGN",
      subtitle: "DIGITAL CONTENT",
      description: "Visual communication crafted for modern brands — from engaging social media content to high-quality marketing assets designed for clarity and impact.",
      mainImage: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
      category: "Content",
      features: ["Social Media Design (Feed & Carousel)", "Digital Posters & Campaign Visuals", "Marketing Materials", "Product Mockups", "Brand Content Pack"],
    },
  ];

  const nextService = () => {
    setDirection(1);
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setDirection(-1);
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const contentVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.95,
      opacity: 0,
    },
  };

  return (
    <section className="relative bg-[#EFEFEF] text-[#131313] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <motion.div className="flex items-start justify-between mb-12 sm:mb-16 lg:mb-20" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {/* Zoom Icon */}
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#131313]/20 flex items-center justify-center hover:border-[#E59156] hover:rotate-90 transition-all cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>

          {/* Title */}
          <div className="text-center flex-1 px-4">
            <motion.div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#E59156] rounded-full"></span>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#131313]/60">Our Services</p>
            </motion.div>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              Everything You Need to Build
              <br />
              <span className="text-[#E59156]">a Modern Digital Brand</span>
            </motion.h2>
          </div>

          {/* Counter */}
          <motion.div className="text-right" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xl sm:text-2xl font-light">
              <span className="text-[#131313]/40">0{currentService + 1}</span>
              <span className="text-[#131313]/20 mx-1">/</span>
              <span className="text-[#131313]/40">0{services.length}</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <motion.button
                onClick={prevService}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#131313]/20 hover:bg-[#131313] hover:border-[#131313] hover:text-white flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={nextService}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#131313] text-white hover:bg-[#E59156] flex items-center justify-center transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>

            {/* Service Content with Animation */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={currentService} custom={direction} variants={contentVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} className="mb-8 sm:mb-10">
                {/* Category Badge */}
                <motion.div className="inline-block px-4 py-1.5 bg-[#E59156]/10 rounded-full mb-4 sm:mb-6" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                  <p className="text-xs sm:text-sm text-[#E59156] font-medium uppercase tracking-wide">{services[currentService].category}</p>
                </motion.div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 leading-tight">{services[currentService].title}</h3>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight text-[#131313]/50">{services[currentService].subtitle}</h3>

                <p className="text-base sm:text-lg text-[#131313]/70 leading-relaxed mb-6 sm:mb-8 max-w-lg">{services[currentService].description}</p>

                {/* Features List */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                  {services[currentService].features.map((feature, index) => (
                    <motion.span
                      key={feature}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm text-[#131313]/70 border border-[#131313]/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail and CTA Button */}
            <div className="flex items-end gap-4 sm:gap-6">
              {/* Thumbnail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService}
                  className="relative group shrink-0 overflow-hidden rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                    <Image src={services[currentService].thumbnailImage} alt="Service thumbnail" fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </AnimatePresence>

              {/* Explore Button */}
              <motion.button className="group shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-[#E59156] hover:bg-[#131313] flex flex-col items-center justify-center transition-all text-white shadow-lg">
                  <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 mb-1 group-hover:rotate-45 transition-transform" />
                  <span className="text-xs sm:text-sm font-medium">Explore</span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div key={currentService} variants={imageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="relative group">
                <div className="aspect-4/3 rounded-2xl lg:rounded-3xl overflow-hidden bg-[#34373A] shadow-2xl">
                  <Image src={services[currentService].mainImage} alt={services[currentService].title} fill className="object-cover rounded-2xl lg:rounded-3xl group-hover:scale-105 transition-transform duration-700" priority />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-2xl lg:rounded-3xl pointer-events-none"></div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xs sm:text-sm font-medium text-[#131313]">{services[currentService].category}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div className="flex items-center justify-center gap-2 sm:gap-3 mt-12 sm:mt-16 lg:mt-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {services.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentService ? 1 : -1);
                setCurrentService(index);
              }}
              className={`transition-all duration-300 rounded-full ${index === currentService ? "w-16 sm:w-20 h-1.5 bg-[#E59156]" : "w-16 sm:w-20 h-1 bg-[#131313]/20 hover:bg-[#131313]/40"}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements with Animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-[#E59156]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-[#131313]/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </section>
  );
}
