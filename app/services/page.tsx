"use client";

import React, { useState } from "react";
import { ArrowRight, Palette, Code, TrendingUp, Megaphone, Smartphone, Package, CheckCircle2, Play } from "lucide-react";
import Image from "next/image";

export default function HarikaServicesPage() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Brand Identity Design",
      shortDesc: "Creating memorable visual identities that resonate",
      fullDesc: "We craft comprehensive brand identities that tell your story and connect with your audience. From logo design to complete brand guidelines, we ensure consistency across all touchpoints.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      features: ["Logo Design & Development", "Brand Style Guides", "Color Palette & Typography", "Business Card & Stationery", "Brand Positioning Strategy"],
      price: "Starting from $2,500",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      shortDesc: "Building responsive, modern websites that perform",
      fullDesc: "We develop high-performance websites using cutting-edge technologies. Our solutions are scalable, secure, and optimized for both user experience and search engines.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      features: ["Custom Website Development", "E-commerce Solutions", "CMS Integration", "Progressive Web Apps", "Performance Optimization"],
      price: "Starting from $5,000",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "UI/UX Design",
      shortDesc: "Designing intuitive experiences users love",
      fullDesc: "Our UI/UX design process focuses on creating interfaces that are not only beautiful but also intuitive and user-friendly. We prioritize user research and testing.",
      image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&q=80",
      features: ["User Research & Testing", "Wireframing & Prototyping", "Interface Design", "Design Systems", "Usability Analysis"],
      price: "Starting from $3,500",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Digital Marketing",
      shortDesc: "Strategic campaigns that drive real results",
      fullDesc: "We create data-driven digital marketing strategies that increase your online visibility and drive conversions. From SEO to social media, we've got you covered.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&q=80",
      features: ["SEO & Content Strategy", "Social Media Marketing", "PPC Campaign Management", "Email Marketing", "Analytics & Reporting"],
      price: "Starting from $1,500/month",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Content Creation",
      shortDesc: "Compelling content that engages audiences",
      fullDesc: "Our content creators develop engaging, SEO-optimized content that tells your brand story and connects with your target audience across all platforms.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
      features: ["Copywriting & Blog Posts", "Video Production", "Photography & Imaging", "Social Media Content", "Content Strategy"],
      price: "Starting from $800",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Full Package",
      shortDesc: "Complete end-to-end digital solutions",
      fullDesc: "Get everything you need in one comprehensive package. We handle your entire digital presence from brand identity to website development and marketing.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
      features: ["Complete Brand Identity", "Website Development", "Digital Marketing Setup", "Content Creation", "Ongoing Support & Maintenance"],
      price: "Starting from $15,000",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience" },
    { step: "02", title: "Strategy", desc: "We develop a comprehensive plan tailored to your needs" },
    { step: "03", title: "Design", desc: "Our team creates stunning visuals and experiences" },
    { step: "04", title: "Development", desc: "We bring designs to life with clean, efficient code" },
    { step: "05", title: "Launch", desc: "We deploy your project and ensure everything runs smoothly" },
    { step: "06", title: "Support", desc: "Ongoing maintenance and optimization for continued success" },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
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
              <span className="text-sm text-[#F6F6F6]/80">Our Services</span>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-start mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="inline-block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">What We </span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block bg-linear-to-r from-[#E59156] via-[#D97D4A] to-[#E59156] bg-clip-text text-transparent">Do Best</span>
            </div>
          </h1>

          <p className="text-start text-lg sm:text-xl lg:text-2xl text-[#F6F6F6]/70 max-w-3xl">Comprehensive digital solutions tailored to elevate your brand and drive growth</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} onClick={() => setSelectedService(index)} className="group p-6 sm:p-8 bg-[#131313] rounded-xl hover:bg-[#1a1a1a] transition-all cursor-pointer border border-transparent hover:border-[#E59156]/30">
                <div className="w-16 h-16 rounded-full bg-[#E59156]/10 flex items-center justify-center mb-6 group-hover:bg-[#E59156]/20 transition-colors">
                  <div className="text-[#E59156]">{service.icon}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-light mb-3">{service.title}</h3>
                <p className="text-sm text-[#F6F6F6]/60 mb-4 leading-relaxed">{service.shortDesc}</p>
                <div className="flex items-center gap-2 text-[#E59156] text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Detail */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
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
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E59156] shrink-0 mt-0.5" />
                      <span className="text-[#F6F6F6]/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                <div className="text-3xl font-light text-[#E59156]">{services[selectedService].price}</div>
              </div>

              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E59156] hover:bg-[#E59156]/90 rounded-full transition-colors text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <Image fill src={services[selectedService].image} alt={services[selectedService].title} className="rounded-2xl w-full" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/50 to-transparent rounded-2xl"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Service Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {services.map((_, index) => (
              <button key={index} onClick={() => setSelectedService(index)} className={`transition-all duration-300 rounded-full ${index === selectedService ? "w-12 h-2 bg-[#E59156]" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
              <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Our Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">How We Work</h2>
            <p className="text-lg text-[#F6F6F6]/70 max-w-3xl mx-auto">A proven methodology that delivers exceptional results every time</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative p-8 bg-[#131313] rounded-xl group hover:bg-[#1a1a1a] transition-colors">
                <div className="text-6xl font-light text-[#E59156]/20 mb-4 group-hover:text-[#E59156]/30 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                <p className="text-sm text-[#F6F6F6]/60 leading-relaxed">{item.desc}</p>

                {/* Connecting Line */}
                {index < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#E59156]/30"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#131313]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Ready to Transform
            <br />
            Your Digital Presence?
          </h2>
          <p className="text-lg text-[#F6F6F6]/70 mb-8 max-w-2xl mx-auto">Let&apos;s discuss your project and create something amazing together</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#131313] rounded-full hover:bg-[#E59156] hover:text-white transition-all duration-300 text-lg font-medium">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group inline-flex items-center gap-2 px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-colors text-lg">
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
