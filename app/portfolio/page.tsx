"use client";

import React, { useState } from "react";
import { ArrowRight, X, Filter, Clock, TrendingUp, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import { categories, Project, projects } from "@/lib/data/portfolioData";

export default function HarikaPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          {/* Floating Badge */}
          <div className="flex justify-start mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E59156] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E59156]"></span>
              </span>
              <span className="text-sm text-[#F6F6F6]/80">Selected Work</span>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-start mb-8">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.1]">
              <span className="inline-block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">PROJECTS THAT</span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1]">
              <span className="inline-block bg-linear-to-r from-[#E59156] via-[#D97D4A] to-[#E59156] bg-clip-text text-transparent">MOVE BRANDS FORWARD</span>
            </div>
          </h1>

          <p className="text-start text-lg sm:text-xl lg:text-2xl text-[#F6F6F6]/70 max-w-3xl">
            A curated selection of transformation-driven work — from brand identities and websites to digital products — focused on measurable outcomes and clean, timeless design.{" "}
          </p>

          {/* Stats Overview */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <div className="border-l-2 border-[#E59156] pl-4">
              <div className="text-3xl font-light text-white mb-1">15+</div>
              <div className="text-sm text-[#F6F6F6]/60">Strategic Projects</div>
            </div>
            <div className="border-l-2 border-[#E59156] pl-4">
              <div className="text-3xl font-light text-white mb-1">+180%</div>
              <div className="text-sm text-[#F6F6F6]/60">Avg. Growth Impact</div>
            </div>
            <div className="border-l-2 border-[#E59156] pl-4">
              <div className="text-3xl font-light text-white mb-1">8+</div>
              <div className="text-sm text-[#F6F6F6]/60">Industries Served</div>
            </div>
            <div className="border-l-2 border-[#E59156] pl-4">
              <div className="text-3xl font-light text-white mb-1">100%</div>
              <div className="text-sm text-[#F6F6F6]/60">Client Satisfaction</div>
            </div>
          </div> */}
        </div>

        {/* Decorative Elements */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div> */}
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#E59156]" />
              <h3 className="text-lg font-medium">Filter by Category</h3>
            </div>
            <div className="text-sm text-[#F6F6F6]/60">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm transition-all ${selectedCategory === category ? "bg-[#E59156] text-white" : "bg-white/5 hover:bg-white/10 text-[#F6F6F6]/70"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-8 gap-y-10">
            {filteredProjects.map((project) => (
              <div key={project.id} onClick={() => setSelectedProject(project)} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-4/3 bg-[#131313]">
                  <Image fill src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                  {/* linear Overlay - Always visible */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Bottom Info - Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Top Metric - Highlighted outcome */}
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#E59156]/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">
                        {project.metrics[0].value} {project.metrics[0].label}
                      </span>
                    </div>

                    {/* Project Title & Client */}
                    <h3 className="text-xl font-medium text-white mb-1 group-hover:text-[#E59156] transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/80 mb-3">{project.client}</p>

                    {/* View Case Study CTA */}
                    <div className="flex items-center gap-2 text-sm text-[#E59156] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="space-y-3">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#E59156]">{project.category}</span>
                    <span className="text-[#F6F6F6]/60">{project.year}</span>
                  </div>

                  {/* Challenge Preview */}
                  <p className="text-sm text-[#F6F6F6]/70 line-clamp-2 leading-relaxed">{project.challenge}</p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[#F6F6F6]/70">
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && <span className="text-xs px-2.5 py-1 text-[#F6F6F6]/50">+{project.services.length - 3}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal/Detail */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedProject(null)}>
          <div className="min-h-screen px-4 py-12 sm:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button onClick={() => setSelectedProject(null)} className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10">
                <X className="w-6 h-6" />
              </button>

              {/* Project Header */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 bg-[#E59156] rounded-full"></span>
                  <span className="text-sm uppercase tracking-wider text-[#F6F6F6]/60">Case Study</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-6 text-sm text-[#F6F6F6]/60 mb-8">
                  <div>
                    <span className="text-[#F6F6F6]/40">Client:</span> {selectedProject.client}
                  </div>
                  <div>
                    <span className="text-[#F6F6F6]/40">Year:</span> {selectedProject.year}
                  </div>
                  <div>
                    <span className="text-[#F6F6F6]/40">Duration:</span> {selectedProject.duration}
                  </div>
                  <div>
                    <span className="text-[#F6F6F6]/40">Category:</span> {selectedProject.category}
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mb-16 rounded-2xl overflow-hidden aspect-video">
                <Image fill src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              {/* Project Overview */}
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                {/* Left Column - Challenge */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#E59156]/10 flex items-center justify-center">
                        <span className="text-[#E59156] text-xl">⚡</span>
                      </div>
                      <h3 className="text-2xl font-light text-[#E59156]">The Challenge</h3>
                    </div>
                    <p className="text-[#F6F6F6]/80 leading-relaxed text-lg">{selectedProject.challenge}</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="p-6 bg-[#131313] rounded-xl border border-white/5">
                    <h4 className="text-sm uppercase tracking-wider text-[#F6F6F6]/50 mb-4">Project Scope</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#F6F6F6]/70">Duration</span>
                        <span className="text-sm font-medium">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#F6F6F6]/70">Industry</span>
                        <span className="text-sm font-medium">{selectedProject.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#F6F6F6]/70">Services</span>
                        <span className="text-sm font-medium">{selectedProject.services.length} Areas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Solution & Approach */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#E59156]/10 flex items-center justify-center">
                        <span className="text-[#E59156] text-xl">💡</span>
                      </div>
                      <h3 className="text-2xl font-light text-[#E59156]">Our Solution</h3>
                    </div>
                    <p className="text-[#F6F6F6]/80 leading-relaxed text-lg mb-6">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#E59156] rounded-full"></span>
                      Strategic Approach
                    </h4>
                    <p className="text-[#F6F6F6]/70 leading-relaxed">{selectedProject.approach}</p>
                  </div>

                  {/* Services Grid */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-[#F6F6F6]/50 mb-4">Services Delivered</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-[#F6F6F6]/80">
                          <CheckCircle2 className="w-4 h-4 text-[#E59156] shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl sm:text-4xl font-light mb-4">
                    Measurable <span className="text-[#E59156]">Impact</span>
                  </h3>
                  <p className="text-[#F6F6F6]/60">Real results that matter to business growth</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedProject.metrics.map((metric, idx) => (
                    <div key={idx} className="group relative p-8 bg-linear-to-br from-[#131313] to-[#0A0A0A] rounded-2xl border border-white/5 hover:border-[#E59156]/30 transition-all duration-300">
                      {/* Decorative element */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#E59156]/50 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#E59156]/10 flex items-center justify-center group-hover:bg-[#E59156]/20 transition-colors">
                          <TrendingUp className="w-5 h-5 text-[#E59156]" />
                        </div>
                      </div>

                      <div className="text-4xl sm:text-5xl font-light mb-2 text-white group-hover:text-[#E59156] transition-colors">{metric.value}</div>

                      <div className="text-sm text-[#F6F6F6]/70 mb-2">{metric.label}</div>

                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#E59156]/10 rounded-full">
                        <span className="text-xs text-[#E59156] font-medium">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Timeline */}
              <div className="mb-16">
                <h3 className="text-3xl font-light mb-8 text-center">Our Process</h3>
                <div className="space-y-4">
                  {selectedProject.process.map((phase, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-6 bg-[#131313] rounded-xl border border-white/5 hover:border-[#E59156]/30 transition-colors">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-[#E59156]/10 flex items-center justify-center text-[#E59156] font-medium">{idx + 1}</div>
                      <div className="grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-medium">{phase.phase}</h4>
                          <div className="flex items-center gap-1 text-sm text-[#F6F6F6]/60">
                            <Clock className="w-4 h-4" />
                            {phase.duration}
                          </div>
                        </div>
                        <p className="text-[#F6F6F6]/70 leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before & After */}
              {selectedProject.beforeAfter && (
                <div className="mb-16">
                  <h3 className="text-3xl font-light mb-8 text-center">Before & After</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 bg-[#131313] rounded-xl border border-white/5">
                      <h4 className="text-xl font-medium mb-6 text-red-400">Before</h4>
                      <ul className="space-y-3">
                        {selectedProject.beforeAfter.before.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#F6F6F6]/70">
                            <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-8 bg-[#131313] rounded-xl border border-[#E59156]/20">
                      <h4 className="text-xl font-medium mb-6 text-[#E59156]">After</h4>
                      <ul className="space-y-3">
                        {selectedProject.beforeAfter.after.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[#F6F6F6]/70">
                            <CheckCircle2 className="w-5 h-5 text-[#E59156] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedProject.techStack && (
                <div className="mb-16">
                  <h3 className="text-3xl font-light mb-8 text-center">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-sm border border-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              <div className="p-8 sm:p-12 bg-linear-to-br from-[#E59156]/10 to-[#131313] rounded-2xl mb-16 border border-[#E59156]/20">
                <h3 className="text-3xl font-light mb-8 text-center">The Results</h3>
                <div className="grid sm:grid-cols-3 gap-8">
                  {selectedProject.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E59156]/20 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-[#E59156]" />
                      </div>
                      <p className="text-[#F6F6F6]/90 leading-relaxed font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedProject.testimonial && (
                <div className="mb-16">
                  <div className="p-8 sm:p-12 bg-[#131313] rounded-2xl border border-white/5 relative">
                    <Quote className="w-12 h-12 text-[#E59156]/20 absolute top-8 left-8" />
                    <div className="relative z-10">
                      <p className="text-xl sm:text-2xl text-[#F6F6F6]/90 leading-relaxed mb-8 italic">&ldquo;{selectedProject.testimonial.quote}&rdquo;</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#E59156]/20 flex items-center justify-center text-[#E59156] font-medium text-lg">{selectedProject.testimonial.author.charAt(0)}</div>
                        <div>
                          <div className="font-medium">{selectedProject.testimonial.author}</div>
                          <div className="text-sm text-[#F6F6F6]/60">
                            {selectedProject.testimonial.role}, {selectedProject.testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center">
                <p className="text-lg text-[#F6F6F6]/70 mb-6">Interested in similar results for your business?</p>
                <button className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E59156] hover:bg-[#E59156]/90 rounded-full transition-colors">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#131313]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            Let&apos;s Create Your
            <br />
            Success Story
          </h2>
          <p className="text-lg text-[#F6F6F6]/70 mb-8 max-w-2xl mx-auto">Ready to see your brand featured in our next case study?</p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#131313] rounded-full hover:bg-[#E59156] hover:text-white transition-all duration-300 text-lg font-medium">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
