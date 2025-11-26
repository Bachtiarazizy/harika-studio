"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, Instagram, Youtube, Linkedin, Dribbble } from "lucide-react";

export default function HarikaContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    agreed: false,
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    if (!formData.agreed) {
      alert("Please accept the privacy policy");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      agreed: false,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@harikastudio.com",
      subcontent: "info@harikastudio.com",
      link: "mailto:hello@harikastudio.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+62 812 3456 7890",
      subcontent: "+62 821 9876 5432",
      link: "tel:+6281234567890",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Jl. Sudirman No. 123",
      subcontent: "Jakarta Selatan, Indonesia 12190",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Monday - Friday: 9AM - 6PM",
      subcontent: "Saturday: 10AM - 4PM",
      link: null,
    },
  ];

  const services = ["Brand Identity Design", "Web Development", "UI/UX Design", "Digital Marketing", "Content Creation", "Full Package"];

  const budgets = ["Less than $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"];

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
              <span className="text-sm text-[#F6F6F6]/80">Get In Touch</span>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-start mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="inline-block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Let&apos;s Start</span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block bg-linear-to-r from-[#E59156] via-[#D97D4A] to-[#E59156] bg-clip-text text-transparent">Something Great</span>
            </div>
          </h1>

          <p className="text-start text-lg sm:text-xl lg:text-2xl text-[#F6F6F6]/70 max-w-3xl">We&apos;re here to help bring your vision to life. Reach out and let&apos;s create something amazing together.</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-6 sm:p-8 bg-[#131313] rounded-xl hover:bg-[#1a1a1a] transition-all group border border-transparent hover:border-[#E59156]/30">
                <div className="w-14 h-14 rounded-full bg-[#E59156]/10 flex items-center justify-center mb-6 group-hover:bg-[#E59156]/20 transition-colors">
                  <div className="text-[#E59156]">{info.icon}</div>
                </div>
                <h3 className="text-lg font-medium mb-3">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="block text-[#F6F6F6]/70 hover:text-[#E59156] transition-colors mb-1">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-[#F6F6F6]/70 mb-1">{info.content}</p>
                )}
                <p className="text-sm text-[#F6F6F6]/50">{info.subcontent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Form */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
                  <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Send us a message</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
                  Tell Us About
                  <br />
                  Your Project
                </h2>
                <p className="text-[#F6F6F6]/70">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#F6F6F6]/60 mb-2">
                      Your Name <span className="text-[#E59156]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#F6F6F6]/60 mb-2">
                      Email Address <span className="text-[#E59156]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#F6F6F6]/60 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+62 812 3456 7890"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#F6F6F6]/60 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      placeholder="Your Company"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Service & Budget Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm text-[#F6F6F6]/60 mb-2">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#131313]">
                        Select a service
                      </option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service} className="bg-[#131313]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#F6F6F6]/60 mb-2">Project Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#131313]">
                        Select budget range
                      </option>
                      {budgets.map((budget, idx) => (
                        <option key={idx} value={budget} className="bg-[#131313]">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-[#F6F6F6]/60 mb-2">
                    Project Details <span className="text-[#E59156]">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your project, goals, timeline, and any other relevant details..."
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#E59156] py-3 px-4 rounded-lg text-white placeholder-white/40 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={formData.agreed}
                    onChange={(e) => setFormData((prev) => ({ ...prev, agreed: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded border-white/30 bg-transparent checked:bg-[#E59156] checked:border-[#E59156] focus:ring-[#E59156] focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-[#F6F6F6]/60 leading-relaxed cursor-pointer">
                    I agree to the privacy policy and consent to the processing of personal data. <span className="text-[#E59156]">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button onClick={handleSubmit} className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#E59156] hover:bg-[#E59156]/90 rounded-full transition-colors text-lg font-medium">
                  <Send className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right - Additional Info */}
            <div className="lg:pt-32">
              {/* FAQ Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-light mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-[#E59156]">How long does a typical project take?</h4>
                    <p className="text-[#F6F6F6]/70 text-sm leading-relaxed">Project timelines vary based on scope and complexity. A typical brand identity project takes 4-6 weeks, while a complete website can take 8-12 weeks.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-[#E59156]">Do you work with international clients?</h4>
                    <p className="text-[#F6F6F6]/70 text-sm leading-relaxed">Absolutely! We work with clients worldwide and have experience collaborating across different time zones through video calls and project management tools.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-[#E59156]">What&apos;s your payment structure?</h4>
                    <p className="text-[#F6F6F6]/70 text-sm leading-relaxed">
                      We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-8 bg-[#131313] rounded-xl">
                <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                <p className="text-[#F6F6F6]/70 mb-6 text-sm">Stay updated with our latest projects and insights</p>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors">
                    <Dribbble className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#E59156] flex items-center justify-center transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 sm:h-[500px] lg:h-[600px] bg-[#131313] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#E59156] mx-auto mb-4" />
            <p className="text-xl text-[#F6F6F6]/70">Map Integration</p>
            <p className="text-sm text-[#F6F6F6]/50 mt-2">Jl. Sudirman No. 123, Jakarta Selatan</p>
          </div>
        </div>
      </section>
    </div>
  );
}
