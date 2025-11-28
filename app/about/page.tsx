"use client";

import React from "react";
import { ArrowRight, Users, Target, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function HarikaAboutPage() {
  const quotes = ["CREATIVITY WITH PURPOSE", "DESIGN WITH INTENTION", "BUILT FOR IMPACT ", "CRAFTED WITH PRECISION", "THINKING MEETS HUMAN EXPERIENCE"];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purposeful Design",
      description: "Every decision is intentional — we design with meaning, clarity, and user impact in mind.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We combine creativity with modern technology to build solutions that stay ahead of the curve.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We believe in collaboration. Your goals become our goals, and together we create exceptional outcomes.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Craft Excellence",
      description: "We maintain high standards in every detail, delivering work that is refined, thoughtful, and built to last.",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl">
          {/* Floating Badge */}
          <div className="flex justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E59156] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E59156]"></span>
              </span>
              <span className="text-sm text-[#F6F6F6]/80">Available for new projects</span>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-start mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="inline-block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">BUILDING BRANDS</span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block bg-linear-to-r from-[#E59156] via-[#D97D4A] to-[#E59156] bg-clip-text text-transparent">THAT MATTER</span>
            </div>
          </h1>

          <p className="text-start text-lg sm:text-xl lg:text-2xl text-[#F6F6F6]/70 max-w-3xl">We craft digital experiences that connect with people and elevate brands with clarity, purpose, and precision.</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Marquee Quotes Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#131313] overflow-hidden border-y border-white/5">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center">
                {quotes.map((quote, index) => (
                  <div key={`${setIndex}-${index}`} className="inline-flex items-center mx-8">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/80 italic">&quot;{quote}&quot;</span>
                    <span className="text-4xl text-[#E59156]/40 mx-8">★</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
                <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Our Story</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight uppercase">
                From Vision to
                <br />
                Creative Impact
              </h2>
              <p className="text-base sm:text-lg text-[#F6F6F6]/70 mb-6 leading-relaxed">
                We started Harika Studio with one belief: great design is built on clarity and purpose. Today, we partner with ambitious businesses to create brand identities, intuitive websites, and crafted digital experiences that inspire
                action.{" "}
              </p>
              <p className="text-base sm:text-lg text-[#F6F6F6]/70 mb-8 leading-relaxed">Grounded in creativity and guided by strategy, we build work that doesn’t just look good — it works beautifully.</p>
              <button className="group flex items-center gap-2 px-6 py-3 bg-[#E59156] hover:bg-[#E59156]/90 rounded-full transition-colors">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image fill src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-16 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
              <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Our Values</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">What Drives Our Work</h2>
            <p className="text-lg text-[#F6F6F6]/70 max-w-3xl mx-auto">Our principles define how we create, collaborate, and deliver value through every project.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 sm:p-8 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-[#E59156]/10 flex items-center justify-center mb-6 group-hover:bg-[#E59156]/20 transition-colors">
                  <div className="text-[#E59156]">{value.icon}</div>
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-[#F6F6F6]/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Ready to Build
            <br />
            Something Great?
          </h2>
          <p className="text-lg text-[#F6F6F6]/70 mb-8 max-w-2xl mx-auto">Let’s work together to bring your brand to life through design, strategy, and digital craftsmanship.</p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#131313] rounded-full hover:bg-[#E59156] hover:text-white transition-all duration-300 text-lg font-medium">
            Let’s Collaborate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
