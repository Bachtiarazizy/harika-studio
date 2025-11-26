"use client";

import React, { useState } from "react";
import { ArrowRight, X, Filter } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  tags: string[];
}

export default function HarikaPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Branding", "Web Design", "UI/UX", "Marketing", "E-commerce"];

  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "Branding",
      client: "TechFlow Inc.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      challenge: "TechFlow needed a complete rebrand to position themselves as an innovative B2B SaaS company in a competitive market.",
      solution: "We created a modern, tech-forward brand identity with a vibrant color palette and clean typography that reflects their innovative approach.",
      results: ["150% increase in brand recognition", "40% growth in qualified leads", "Featured in 3 major tech publications"],
      services: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Marketing Collateral"],
      tags: ["Branding", "Tech", "B2B"],
    },
    {
      id: 2,
      title: "Artisan Coffee Co.",
      category: "Web Design",
      client: "Artisan Coffee",
      year: "2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      challenge: "A premium coffee roaster needed an e-commerce platform that showcases their artisanal products and tells their story.",
      solution: "We designed and developed a beautiful, immersive website with a custom e-commerce solution, subscription management, and engaging storytelling.",
      results: ["300% increase in online sales", "85% customer retention rate", "2.5x growth in email subscribers"],
      services: ["Web Design", "E-commerce Development", "UX Strategy", "Content Creation"],
      tags: ["Web Design", "E-commerce", "Food & Beverage"],
    },
    {
      id: 3,
      title: "HealthHub App",
      category: "UI/UX",
      client: "HealthHub Technologies",
      year: "2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
      challenge: "HealthHub's existing app had low user engagement and poor retention rates due to complex navigation and cluttered interface.",
      solution: "We redesigned the entire user experience with a focus on simplicity, personalization, and motivational design patterns.",
      results: ["200% increase in daily active users", "60% improvement in user retention", "4.8/5 star rating on app stores"],
      services: ["User Research", "UX/UI Design", "Prototyping", "Usability Testing"],
      tags: ["UI/UX", "Mobile App", "Healthcare"],
    },
    {
      id: 4,
      title: "GreenEarth Initiative",
      category: "Marketing",
      client: "GreenEarth Foundation",
      year: "2023",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
      challenge: "An environmental nonprofit needed to increase awareness and drive donations for their climate action programs.",
      solution: "We developed a comprehensive digital marketing strategy including social media campaigns, content marketing, and email automation.",
      results: ["500% increase in social media engagement", "250% growth in monthly donations", "Reached 2M+ people organically"],
      services: ["Digital Strategy", "Social Media Marketing", "Content Creation", "Email Marketing"],
      tags: ["Marketing", "Nonprofit", "Social Impact"],
    },
    {
      id: 5,
      title: "LuxeStyle Boutique",
      category: "E-commerce",
      client: "LuxeStyle Fashion",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
      challenge: "A luxury fashion retailer wanted to expand online while maintaining their high-end brand experience.",
      solution: "We created a sophisticated e-commerce platform with immersive product galleries, virtual try-on features, and personalized shopping experiences.",
      results: ["400% increase in online revenue", "50% reduction in return rates", "90% customer satisfaction score"],
      services: ["E-commerce Design", "Custom Development", "Payment Integration", "AR Features"],
      tags: ["E-commerce", "Fashion", "Luxury"],
    },
    {
      id: 6,
      title: "EduLearn Platform",
      category: "Web Design",
      client: "EduLearn Inc.",
      year: "2023",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
      challenge: "An online education platform needed to redesign their learning management system to improve student engagement.",
      solution: "We created an intuitive, gamified learning experience with progress tracking, interactive content, and social features.",
      results: ["180% increase in course completion", "3x improvement in student engagement", "95% positive feedback from educators"],
      services: ["Platform Design", "User Experience", "Interactive Features", "Analytics Integration"],
      tags: ["Web Design", "Education", "SaaS"],
    },
  ];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory);

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
              <span className="text-sm text-[#F6F6F6]/80">Our Work</span>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-start mb-6">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="inline-block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Projects That</span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block bg-linear-to-r from-[#E59156] via-[#D97D4A] to-[#E59156] bg-clip-text text-transparent">Make Impact</span>
            </div>
          </h1>

          <p className="text-start text-lg sm:text-xl lg:text-2xl text-[#F6F6F6]/70 max-w-3xl">Explore our portfolio of successful projects and the results we have delivered for our clients</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
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
      <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} onClick={() => setSelectedProject(project)} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-4/3">
                  <Image fill src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-sm text-[#E59156] mb-2">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-light group-hover:text-[#E59156] transition-colors">{project.title}</h3>
                  <span className="text-sm text-[#F6F6F6]/60">{project.year}</span>
                </div>
                <p className="text-sm text-[#F6F6F6]/60 mb-2">{project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded-full text-[#F6F6F6]/60">
                      {tag}
                    </span>
                  ))}
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
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-6 text-sm text-[#F6F6F6]/60">
                  <div>
                    <span className="text-[#F6F6F6]/40">Client:</span> {selectedProject.client}
                  </div>
                  <div>
                    <span className="text-[#F6F6F6]/40">Year:</span> {selectedProject.year}
                  </div>
                  <div>
                    <span className="text-[#F6F6F6]/40">Category:</span> {selectedProject.category}
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mb-12 rounded-2xl overflow-hidden aspect-video">
                <Image fill src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-3 gap-12 mb-12">
                {/* Challenge */}
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-light mb-4 text-[#E59156]">The Challenge</h3>
                  <p className="text-[#F6F6F6]/70 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-light mb-4 text-[#E59156]">Our Solution</h3>
                  <p className="text-[#F6F6F6]/70 leading-relaxed mb-6">{selectedProject.solution}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-4">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/5 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="p-8 sm:p-12 bg-[#131313] rounded-2xl mb-12">
                <h3 className="text-3xl font-light mb-8 text-center">The Results</h3>
                <div className="grid sm:grid-cols-3 gap-8">
                  {selectedProject.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#E59156]/10 flex items-center justify-center">
                        <span className="text-2xl">✓</span>
                      </div>
                      <p className="text-[#F6F6F6]/80 leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

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
