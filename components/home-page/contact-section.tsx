"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function HarikaContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreed: false,
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }
    if (!formData.agreed) {
      alert("Please accept the privacy policy");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    // Reset form
    setFormData({ name: "", email: "", phone: "", agreed: false });
  };

  return (
    <section className="relative min-h-screen bg-[#131313] text-white overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/60 to-[#0A0A0A]"></div>
        </div>

        {/* Decorative Brackets */}
        <div className="absolute left-4 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl lg:text-6xl text-white/20 font-thin">[</div>
        <div className="absolute right-4 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 text-4xl sm:text-5xl lg:text-6xl text-white/20 font-thin">]</div>

        {/* Cursor Icon and Title */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-white">
            READY TO DISCUSS
            <br />
            YOUR NEXT PROJECT?
          </h2>
        </div>

        {/* Floating Elements - Only in hero section */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-[#E59156]/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-[#F6F6F6]/5 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none"></div>
      </div>

      {/* Form Section with Dark Background */}
      <div className="relative bg-[#0A0A0A] py-12 sm:py-16 lg:py-20">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-sm sm:text-base text-[#F6F6F6]/70 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12 text-center">
            Have a project in mind? Our expert design team will be happy to discuss your vision, understand your goals, and help bring your brand to life through exceptional web design, UI/UX, and brand identity.{" "}
          </p>

          {/* Form */}
          <div className="space-y-4 sm:space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="YOUR NAME"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#E59156] py-3 sm:py-4 px-0 text-sm sm:text-base text-white placeholder-white/40 outline-none transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#E59156] py-3 sm:py-4 px-0 text-sm sm:text-base text-white placeholder-white/40 outline-none transition-colors"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="+62 000 000 00 00"
                className="w-full bg-transparent border-b border-white/20 focus:border-[#E59156] py-3 sm:py-4 px-0 text-sm sm:text-base text-white placeholder-white/40 outline-none transition-colors"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 pt-4 sm:pt-6">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={formData.agreed}
                onChange={(e) => setFormData((prev) => ({ ...prev, agreed: e.target.checked }))}
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded border-white/30 bg-transparent checked:bg-[#E59156] checked:border-[#E59156] focus:ring-[#E59156] focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="privacy-policy" className="text-xs sm:text-sm text-[#F6F6F6]/60 leading-relaxed cursor-pointer">
                By clicking the button, you accept the privacy
                <br className="hidden sm:block" />
                policy and consent to the processing of personal data.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6 flex justify-center">
              <button
                onClick={handleSubmit}
                className="group flex items-center justify-center gap-3 px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#131313] rounded-full hover:bg-[#E59156] hover:text-white transition-all duration-300 text-sm sm:text-base font-medium"
              >
                Get A Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
