"use client";

import React, { useState } from "react";
import { ArrowRight, Instagram, Youtube, Dribbble, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HarikaFooter() {
  const [email, setEmail] = useState("");

  const handleNewsletter = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    console.log("Newsletter signup:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden border-t border-[#1a1a1a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Left - Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 leading-tight">
              Let&apos;s Keep in Touch – Be
              <br />
              the First to Know What&apos;s Coming
            </h3>

            {/* Newsletter Form */}
            <div className="space-y-4">
              <p className="text-sm text-[#F6F6F6]/60">Sign up for our newsletter (No spam)</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 bg-white/5 border w border-white/10 focus:border-[#E59156] py-3 px-4 rounded text-sm text-white placeholder-white/40 outline-none transition-colors"
                />
                <button onClick={handleNewsletter} className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#E59156] hover:bg-[#E59156]/90 rounded transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
            {/* Menu Column */}
            <div>
              <h4 className="text-sm font-medium mb-4 sm:mb-6 text-[#F6F6F6]/80">Menu</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#home" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-sm font-medium mb-4 sm:mb-6 text-[#F6F6F6]/80">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#web-design" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#ui-ux" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#branding" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a href="#mobile" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Mobile Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-sm font-medium mb-4 sm:mb-6 text-[#F6F6F6]/80">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#blog" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-sm font-medium mb-4 sm:mb-6 text-[#F6F6F6]/80">Get in Touch</h4>
              <div className="space-y-2 sm:space-y-3">
                <Link href="mailto:hello@harikastudio.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                  hello@harikastudio.com
                </Link>
                <Link href="https://wa.me/905421793483" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#F6F6F6]/60 hover:text-[#E59156] transition-colors">
                  +90 542 179 34 83
                </Link>

                {/* Social Icons */}
                <div className="flex items-center gap-3 pt-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors" aria-label="Dribbble">
                    <Dribbble className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors" aria-label="YouTube">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs sm:text-sm text-[#F6F6F6]/40">© 2025 Harika Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#privacy" className="text-xs sm:text-sm text-[#F6F6F6]/40 hover:text-[#E59156] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-xs sm:text-sm text-[#F6F6F6]/40 hover:text-[#E59156] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-[#E59156]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-[#F6F6F6]/3 rounded-full blur-3xl"></div>
    </footer>
  );
}
