"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Palette, Code, Megaphone, Smartphone, Package, CheckCircle2, Play, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HarikaServicesPage() {
  const [selectedService, setSelectedService] = useState(0);
  const [direction, setDirection] = useState(0);

  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Brand Identity Design",
      shortDesc: "Creating timeless visual identities that represent your brand with clarity, character, and confidence.",
      fullDesc: "We craft cohesive brand identities that tell your story and connect with the right audience. From logo exploration to complete brand systems, we ensure consistency across every touchpoint.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      features: ["Logo Design & Exploration", "Complete Brand Style Guidelines", "Color Palette & Typography System", "Business Card & Stationery", "Brand Positioning Essentials"],
      price: "Starting from $2,500",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "UI/UX Design",
      shortDesc: "Designing intuitive digital interfaces that feel natural to use and beautiful to experience.",
      fullDesc: "Our UI/UX process focuses on clarity, usability, and visual craft. We translate ideas into structured flows, wireframes, and high-fidelity interfaces that make every interaction feel effortless.",
      image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&q=80",
      features: ["User Flows & Journeys", "Wireframing & Prototyping", "Interface & Layout Design", "Design Systems & Components", "Usability Review & Refinement"],
      price: "Starting from $3,500",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      shortDesc: "Building fast, scalable, and modern websites using best-in-class technologies.",
      fullDesc: "We develop high-performance websites with clean, modern code. From marketing sites to content-driven platforms, our builds are responsive, secure, and optimized for real-world use.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      features: ["Custom Website Development", "Next.js / React Frontend", "CMS Integration (WordPress / Headless)", "E-commerce Implementation", "Performance & SEO-friendly Setup"],
      price: "Starting from $5,000",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Content & Graphic Design",
      shortDesc: "Designing visual assets for social media and campaigns that keep your brand consistent and memorable.",
      fullDesc: "We create digital content that extends your brand identity across channels — from social media visuals to campaign graphics, decks, and marketing materials.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
      features: ["Social Media Posts & Carousels", "Digital Posters & Campaign Visuals", "Banners & Display Assets", "Pitch Decks & Presentations", "Launch & Content Asset Packs"],
      price: "Starting from $800",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Full Creative Package",
      shortDesc: "End-to-end branding and digital execution for businesses ready to launch or level up.",
      fullDesc: "For brands that want a complete, unified presence. We handle your visual identity, website, and key content assets so you can go to market with confidence.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
      features: ["Complete Brand Identity System", "Website Design & Development", "Core Content & Visual Asset Pack", "Basic Analytics & Tracking Setup", "Post-launch Support & Refinements"],
      price: "Starting from $15,000",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "We dive into your brand, goals, and audience to understand what truly matters.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "We define a clear direction and roadmap that aligns design, content, and technology.",
    },
    {
      step: "03",
      title: "Design",
      desc: "We translate strategy into visuals and interfaces crafted with intention and precision.",
    },
    {
      step: "04",
      title: "Development",
      desc: "We bring the experience to life with clean, modern, and scalable code.",
    },
    {
      step: "05",
      title: "Launch",
      desc: "We deploy, test, and fine-tune to ensure everything works smoothly in the real world.",
    },
    {
      step: "06",
      title: "Support",
      desc: "We stay with you for ongoing improvements, updates, and new opportunities.",
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const contentVariants = {
    enter: {
      x: 30,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -30,
      opacity: 0,
    },
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setSelectedService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    } else {
      setSelectedService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <section className="relative min-h-screen flex items-center pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem]"
            style={{
              maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl">
          {/* Floating Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E59156] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E59156]"></span>
              </span>
              <span className="text-sm text-[#F6F6F6]/80">Our Services</span>
            </div>
          </motion.div>

          {/* Main Heading with Gradient */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-start mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="inline-block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">What We </span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block bg-linear-to-r from-[#E59156] via-[#D97D4A] to-[#E59156] bg-clip-text text-transparent">Do Best</span>
            </div>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-start text-lg sm:text-xl lg:text-2xl text-[#F6F6F6]/70 max-w-3xl">
            Digital-first creative solutions built to elevate your brand and drive meaningful results.
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setDirection(index > selectedService ? 1 : -1);
                  setSelectedService(index);
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 sm:p-8 bg-[#131313] rounded-xl hover:bg-[#1a1a1a] transition-all cursor-pointer border border-transparent hover:border-[#E59156]/30"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="w-16 h-16 rounded-full bg-[#E59156]/10 flex items-center justify-center mb-6 group-hover:bg-[#E59156]/20 transition-colors">
                  <div className="text-[#E59156]">{service.icon}</div>
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-light mb-3">{service.title}</h3>
                <p className="text-sm text-[#F6F6F6]/60 mb-4 leading-relaxed">{service.shortDesc}</p>
                <div className="flex items-center gap-2 text-[#E59156] text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Detail */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#131313] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section - Left */}
            <div className="relative group">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={selectedService}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 400, damping: 40 },
                      opacity: { duration: 0.3 },
                    }}
                    className="absolute inset-0"
                  >
                    <Image src={services[selectedService].image} alt={services[selectedService].title} fill className="object-cover rounded-2xl" priority quality={85} />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/50 to-transparent rounded-2xl"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Play Button Overlay */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileHover={{ opacity: 1, scale: 1 }} className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                  <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-8 h-8 ml-1" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Navigation Arrows - Always Visible */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content Section - Right */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 400, damping: 40 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
                    <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Featured Service</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">{services[selectedService].title}</h2>
                  <p className="text-base sm:text-lg text-[#F6F6F6]/70 mb-8 leading-relaxed">{services[selectedService].fullDesc}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">What&apos;s Included:</h3>
                    <ul className="space-y-3">
                      {services[selectedService].features.map((feature, idx) => (
                        <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#E59156] shrink-0 mt-0.5" />
                          <span className="text-[#F6F6F6]/70">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                    <div className="text-xl font-bold text-[#F6F6F6]">*Let&apos;s discuss what works best for your brand.</div>
                  </div>

                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E59156] hover:bg-[#E59156]/90 rounded-full transition-colors text-lg">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Service Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > selectedService ? 1 : -1);
                  setSelectedService(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 rounded-full ${index === selectedService ? "w-12 h-2 bg-[#E59156]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
              <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Our Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">How We Work</h2>
            <p className="text-lg text-[#F6F6F6]/70 max-w-3xl mx-auto">A proven methodology that delivers exceptional results every time</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-8 bg-[#131313] rounded-xl group hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="text-6xl font-light text-[#E59156]/20 mb-4 group-hover:text-[#E59156]/30 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                <p className="text-sm text-[#F6F6F6]/60 leading-relaxed">{item.desc}</p>

                {/* Connecting Line */}
                {index < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#E59156]/30"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#131313]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Ready to Transform
            <br />
            Your Digital Presence?
          </h2>
          <p className="text-lg text-[#F6F6F6]/70 mb-8 max-w-2xl mx-auto">Let&apos;s build a digital experience that elevates your brand and moves your audience.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#131313] rounded-full hover:bg-[#E59156] hover:text-white transition-all duration-300 text-lg font-medium"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group inline-flex items-center gap-2 px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-colors text-lg">
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
