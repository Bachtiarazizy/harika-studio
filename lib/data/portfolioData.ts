export interface ProjectProcess {
  phase: string;
  duration: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  image: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  approach: string;
  results: string[];
  services: string[];
  tags: string[];
  process: ProjectProcess[];
  metrics: Metric[];
  techStack?: string[];
  testimonial?: Testimonial;
  beforeAfter?: {
    before: string[];
    after: string[];
  };
}

export const projects: Project[] = [
  // 1 — JAVELL FURNITURE (Rebranding + Website Revamp)
  {
    id: 1,
    title: "Javell Furniture",
    category: "Brand Identity",
    client: "Javell Furniture",
    year: "2024",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    challenge: "Javell Furniture wanted to modernize their brand and update their outdated WordPress website. Their identity lacked consistency and their website didn't communicate the premium quality of their handmade furniture.",
    solution: "We refreshed the complete brand identity — from logo refinement to visual style — and redesigned the entire website to reflect Javell's craftsmanship, collections, and story in a more modern and structured way.",
    approach: "We created new banner materials, opening videos, and a full visual direction for social media and Facebook cover assets. The website was restructured with clearer navigation, product storytelling, and a warmer brand tone.",
    results: ["Stronger visual identity across social platforms", "Better brand perception and higher customer engagement", "Consistent brand presence across website and media assets"],
    services: ["Brand Refresh", "Website Revamp (WordPress)", "Banner & Video Content", "Social Media Visuals"],
    tags: ["Brand Identity", "WordPress", "Furniture"],
    process: [
      { phase: "Discovery", duration: "1 week", description: "Brand audit and client workshops to understand vision and values" },
      { phase: "Design", duration: "3 weeks", description: "Logo refinement, visual identity system, and website mockups" },
      { phase: "Development", duration: "3 weeks", description: "WordPress website build with custom theme and banner content" },
      { phase: "Launch", duration: "1 week", description: "Final testing, content population, and social media rollout" },
    ],
    metrics: [
      { label: "Social Engagement", value: "+85%", change: "increase" },
      { label: "Website Traffic", value: "+120%", change: "increase" },
      { label: "Brand Consistency", value: "95%", change: "improved" },
    ],
  },

  // 2 — BABA LIVING (Branding + Website Base)
  {
    id: 2,
    title: "BABA Living",
    category: "Web Development",
    client: "BABA Living",
    year: "2024",
    duration: "1.5 months",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    challenge: "A new home & living brand needed a clean, modern website to establish their presence online. As a new brand, BABA Living lacked structure, visuals, and a proper platform to share their catalog.",
    solution: "We designed and built a WordPress website that blends soft visuals with modern minimalism. The site provides an easy-to-navigate experience for customers exploring furniture, décor, and lifestyle collections.",
    approach: "Working closely with the founders, we developed the brand tone, selected hero visuals, designed category structures, and implemented a clean, modern layout optimized for both desktop and mobile.",
    results: ["Successful online launch for a new brand", "Consistent visual tone across website and social media assets", "Easy catalog browsing and improved customer engagement"],
    services: ["Website Design", "WordPress Development", "Visual Direction", "Launch Support"],
    tags: ["Web Development", "WordPress", "Retail"],
    process: [
      { phase: "Strategy", duration: "1 week", description: "Brand positioning and website structure planning" },
      { phase: "Design", duration: "2 weeks", description: "Visual design, category layouts, and mobile optimization" },
      { phase: "Development", duration: "3 weeks", description: "WordPress build with product catalog integration" },
      { phase: "Launch", duration: "1 week", description: "Testing and deployment with social media coordination" },
    ],
    metrics: [
      { label: "Launch Success", value: "100%", change: "on-time" },
      { label: "User Engagement", value: "+150%", change: "increase" },
      { label: "Catalog Views", value: "+200%", change: "increase" },
    ],
  },

  // 3 — ARTA GLOBALINK (Exporter Website — Next.js)
  {
    id: 3,
    title: "Arta Globalink Exporter",
    category: "Web Development",
    client: "Arta Globalink",
    year: "2024",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    challenge: "Arta Globalink needed a professional exporter website to showcase their Indonesian cacao, coffee, and spices. Their old presence lacked credibility for international buyers.",
    solution: "We built a modern Next.js website that communicates trust, professionalism, and product clarity — tailored for B2B buyers globally.",
    approach: "We structured the site with clear product sections, export documents, certifications, and company highlights. Subtle animations and clean layout improved clarity and conversion.",
    results: ["Better international buyer engagement", "Clearer product presentation and export credibility", "Improved brand trust for B2B partners"],
    services: ["Next.js Development", "Web Design", "Content Structuring", "Export-Focused UX"],
    tags: ["Next.js", "Export", "Web Development"],
    process: [
      { phase: "Research", duration: "1 week", description: "Export market analysis and buyer persona research" },
      { phase: "Design", duration: "2 weeks", description: "UI/UX design with B2B focus and trust signals" },
      { phase: "Development", duration: "4 weeks", description: "Next.js build with product catalog and certification section" },
      { phase: "Testing", duration: "1 week", description: "Quality assurance and international buyer feedback" },
    ],
    metrics: [
      { label: "Buyer Inquiries", value: "+180%", change: "increase" },
      { label: "Page Load Speed", value: "1.2s", change: "improved" },
      { label: "Export Credibility", value: "+95%", change: "increase" },
    ],
  },

  // 4 — BUMI TEAK FURNITURE (Brand + Next.js + Sanity)
  {
    id: 4,
    title: "Bumi Teak Furniture",
    category: "Brand Identity",
    client: "Bumi Teak",
    year: "2025",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1585559605151-63cd9e9f8f8d?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1585559605151-63cd9e9f8f8d?w=600&q=80",
    challenge: "Bumi Teak, a new sustainable furniture brand, needed a full identity and a premium website to represent Indonesian craftsmanship and ethical production.",
    solution: "We created a calm, earthy brand identity and designed a custom website using Next.js, Sanity CMS, and Framer Motion — blending storytelling, product display, and modern interaction design.",
    approach: "We delivered logo exploration, palette & typography system, a modular design system, and a clean website built for scalability and future product expansion.",
    results: ["A complete brand launch system", "Stronger online presence with smooth animations", "Flexible CMS for product/content updates"],
    services: ["Brand Identity", "UI/UX Design", "Next.js Development", "Sanity CMS Integration"],
    tags: ["Brand Identity", "Next.js", "Furniture"],
    process: [
      { phase: "Brand Discovery", duration: "2 weeks", description: "Values workshop, sustainability storytelling, and visual direction" },
      { phase: "Identity Design", duration: "3 weeks", description: "Logo creation, color system, typography, and brand guidelines" },
      { phase: "Web Design", duration: "3 weeks", description: "UI/UX design with modular components and animation planning" },
      { phase: "Development", duration: "4 weeks", description: "Next.js build with Sanity CMS and Framer Motion integration" },
    ],
    metrics: [
      { label: "Brand Recognition", value: "+200%", change: "increase" },
      { label: "CMS Flexibility", value: "100%", change: "achieved" },
      { label: "Animation Quality", value: "60fps", change: "smooth" },
    ],
  },

  // 5 — HARIKA SPICES (Brand + Website — Next.js)
  {
    id: 5,
    title: "Harika Spices",
    category: "Web Development",
    client: "Harika Spices",
    year: "2024",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80",
    challenge: "Harika Spices needed a strong B2B digital presence to attract global buyers for cloves, nutmeg, cinnamon, black pepper, and more.",
    solution: "We designed a structured, credible website with clear product categories, export specs, packaging details, certification sections, and country-targeted content.",
    approach: "We used Next.js, modern UI, clean typography, and smooth motion to create a professional exporter website tailored for global importers and wholesale markets.",
    results: ["Higher inquiry rate from international buyers", "Better product clarity & perceived quality", "Consistent branding across multiple pages"],
    services: ["Web Design", "Next.js Development", "Product Catalog Structuring"],
    tags: ["Next.js", "Spices", "Export"],
    process: [
      { phase: "Planning", duration: "1 week", description: "Export requirements gathering and competitor analysis" },
      { phase: "Design", duration: "2 weeks", description: "Product catalog design with specifications and certifications" },
      { phase: "Development", duration: "4 weeks", description: "Next.js development with optimized performance" },
      { phase: "Launch", duration: "1 week", description: "SEO optimization and international market rollout" },
    ],
    metrics: [
      { label: "Buyer Inquiries", value: "+220%", change: "increase" },
      { label: "Product Clarity", value: "+95%", change: "improved" },
      { label: "International Reach", value: "35 countries", change: "expanded" },
    ],
  },

  // 6 — HARIKA NUSANTARA (Brand + Export Website)
  {
    id: 6,
    title: "Harika Nusantara",
    category: "Brand Identity",
    client: "Harika Nusantara",
    year: "2024",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    challenge: "As a new export trading brand, Harika Nusantara needed a complete identity and digital foundation to enter the global market.",
    solution: "We created a strong brand identity — warm, trustworthy, and distinctly Indonesian. Then we built a clean, fast Next.js website showcasing products, origins, and export capabilities.",
    approach: "We focused on authenticity, clean UI, and clear storytelling that highlights Indonesia's agricultural value and Harika's role as a reliable export partner.",
    results: ["Full brand creation from zero to launch", "Professional website ready for international buyers", "Clear positioning for export market expansion"],
    services: ["Brand Identity", "UI/UX Web Design", "Next.js Development"],
    tags: ["Brand Identity", "Next.js", "Export"],
    process: [
      { phase: "Brand Strategy", duration: "1 week", description: "Market positioning and Indonesian heritage storytelling" },
      { phase: "Identity Design", duration: "2 weeks", description: "Logo, typography, color system, and brand guidelines" },
      { phase: "Web Design", duration: "2 weeks", description: "Export-focused website design with trust elements" },
      { phase: "Development", duration: "3 weeks", description: "Next.js build with product showcase and inquiry system" },
    ],
    metrics: [
      { label: "Brand Launch", value: "100%", change: "complete" },
      { label: "Export Inquiries", value: "+250%", change: "increase" },
      { label: "Market Positioning", value: "Top 10", change: "achieved" },
    ],
  },

  // 7 — NeuraSync SaaS Rebrand
  {
    id: 7,
    title: "NeuraSync SaaS Rebrand",
    category: "Branding",
    client: "NeuraSync Technologies",
    year: "2024",
    duration: "3 months",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200",
    challenge: "NeuraSync struggled with an outdated brand identity that didn't reflect their modern AI-driven SaaS tooling. Their visual system lacked consistency across digital platforms.",
    solution: "We built a new brand identity including logo, visual framework, typography system, and messaging narrative designed to position NeuraSync as a modern, trustworthy AI leader.",
    approach: "Through discovery workshops, competitor benchmarking, and iterative visual exploration, we created a cohesive identity system delivered via a comprehensive brand guidelines document.",
    results: ["120% increase in brand recall", "Stronger positioning in AI SaaS category", "Consistent visual system across all channels"],
    services: ["Brand Strategy", "Logo Design", "Visual Identity System", "Brand Guidelines", "Marketing Materials"],
    tags: ["Branding", "SaaS", "Technology"],
    process: [
      { phase: "Discovery", duration: "2 weeks", description: "Brand audit, competitor analysis, and stakeholder workshops" },
      { phase: "Strategy", duration: "2 weeks", description: "Positioning development and messaging framework" },
      { phase: "Design", duration: "5 weeks", description: "Logo design, visual system, and brand guidelines creation" },
      { phase: "Implementation", duration: "3 weeks", description: "Marketing materials and digital asset rollout" },
    ],
    metrics: [
      { label: "Brand Recall", value: "+120%", change: "increase" },
      { label: "Visual Consistency", value: "98%", change: "achieved" },
      { label: "Market Position", value: "Top 5", change: "improved" },
    ],
    beforeAfter: {
      before: ["Outdated visuals", "Weak digital presence", "Unclear messaging structure"],
      after: ["Modern modular identity", "Full brand consistency", "Clear, strong positioning"],
    },
  },

  // 8 — PulseWell Health App
  {
    id: 8,
    title: "PulseWell Health App",
    category: "UI/UX",
    client: "PulseWell Corp.",
    year: "2024",
    duration: "4 months",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
    challenge: "The existing app had low engagement due to complex navigation, confusing data visualization, and lack of motivation-driven features.",
    solution: "We redesigned the app with clear navigation, simplified health metrics, behavioral psychology-based motivation, and personalized dashboards.",
    approach: "User interviews → journey mapping → wireframing → UI design → prototype testing with 40+ users.",
    results: ["200% increase in daily active users", "4.8/5 user satisfaction", "60% improvement in week-1 retention"],
    services: ["User Research", "UX Strategy", "UI Design", "Prototyping"],
    tags: ["UI/UX", "Mobile App", "Healthcare"],
    process: [
      { phase: "Research", duration: "3 weeks", description: "User interviews, behavior analysis, and journey mapping" },
      { phase: "Design", duration: "5 weeks", description: "Wireframing, UI design, and behavioral psychology integration" },
      { phase: "Prototyping", duration: "3 weeks", description: "Interactive prototype and user testing with 40+ participants" },
      { phase: "Refinement", duration: "5 weeks", description: "Feedback implementation and final UI polish" },
    ],
    metrics: [
      { label: "Daily Active Users", value: "+200%", change: "increase" },
      { label: "User Satisfaction", value: "4.8/5", change: "rating" },
      { label: "Week-1 Retention", value: "+60%", change: "improvement" },
    ],
    beforeAfter: {
      before: ["Complex UI", "Low engagement", "Poor retention"],
      after: ["Clean navigation", "High engagement", "Motivation-focused UX"],
    },
  },

  // 9 — NordCraft Furniture Branding
  {
    id: 9,
    title: "NordCraft Furniture Branding",
    category: "Branding",
    client: "NordCraft Studio",
    year: "2024",
    duration: "2.5 months",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    challenge: "NordCraft needed a distinctive brand identity that conveyed craftsmanship, Scandinavian warmth, and premium quality.",
    solution: "We developed a sophisticated brand system combining earthy color palettes, minimalist typography, and a refined logo inspired by woodworking geometry.",
    approach: "Material research → moodboards → typography pairing → logo explorations → catalog and social template design.",
    results: ["Brand perceived as more premium", "Stronger engagement on social media", "Consistent product catalog visuals"],
    services: ["Brand Identity", "Logo Design", "Product Catalog Design", "Social Content Kit"],
    tags: ["Branding", "Furniture", "Design"],
    process: [
      { phase: "Research", duration: "2 weeks", description: "Material study, Scandinavian design research, and moodboarding" },
      { phase: "Identity", duration: "3 weeks", description: "Logo design, color palette, and typography system" },
      { phase: "Application", duration: "4 weeks", description: "Catalog design and social media template creation" },
      { phase: "Launch", duration: "1 week", description: "Brand rollout and asset delivery" },
    ],
    metrics: [
      { label: "Premium Perception", value: "+140%", change: "increase" },
      { label: "Social Engagement", value: "+185%", change: "growth" },
      { label: "Brand Consistency", value: "96%", change: "achieved" },
    ],
    beforeAfter: {
      before: ["Generic identity", "No visual consistency"],
      after: ["Premium modern look", "Cohesive visual ecosystem"],
    },
  },

  // 10 — Veloura Fashion E-commerce
  {
    id: 10,
    title: "Veloura Fashion E-commerce",
    category: "E-commerce",
    client: "Veloura Apparel",
    year: "2023",
    duration: "4 months",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
    challenge: "Veloura wanted a high-end digital storefront with luxurious feel and seamless mobile shopping experience.",
    solution: "We created an elegant, conversion-driven e-commerce website with immersive product storytelling, motion transitions, and optimized checkout.",
    approach: "We focused on luxury visual direction with fast, optimized flow and seamless mobile experience.",
    results: ["3.2x increase in online revenue", "47% faster navigation flow", "68% boost in mobile conversions"],
    services: ["UX/UI Design", "E-commerce Development", "Performance Optimization"],
    tags: ["E-commerce", "Fashion", "Luxury"],
    process: [
      { phase: "Strategy", duration: "2 weeks", description: "E-commerce strategy and luxury brand positioning" },
      { phase: "Design", duration: "6 weeks", description: "Visual design with immersive product storytelling" },
      { phase: "Development", duration: "8 weeks", description: "E-commerce build with checkout optimization" },
      { phase: "Optimization", duration: "4 weeks", description: "Performance tuning and mobile enhancement" },
    ],
    metrics: [
      { label: "Online Revenue", value: "+320%", change: "increase" },
      { label: "Navigation Speed", value: "+47%", change: "faster" },
      { label: "Mobile Conversions", value: "+68%", change: "boost" },
    ],
    beforeAfter: {
      before: ["Slow checkout", "Plain visuals"],
      after: ["Luxury visual direction", "Fast, optimized flow"],
    },
  },

  // 11 — NovaCore Industrial Website
  {
    id: 11,
    title: "NovaCore Industrial Website",
    category: "Web Development",
    client: "NovaCore Industries",
    year: "2024",
    duration: "6 weeks",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    challenge: "Their outdated corporate website failed to showcase capabilities or generate international trust.",
    solution: "We built a bold, modern website with strong visuals, clear structure, animation, and industry-focused positioning.",
    approach: "We focused on bold modern design with strong visuals and clear structure for better navigation.",
    results: ["2.7x increase in international inquiries", "Stronger brand credibility", "Faster and cleaner navigation"],
    services: ["Web Design", "Web Development", "Content Architecture"],
    tags: ["Web Development", "Corporate", "B2B"],
    process: [
      { phase: "Analysis", duration: "1 week", description: "Stakeholder interviews and capability assessment" },
      { phase: "Design", duration: "2 weeks", description: "Bold visual design with industry-focused positioning" },
      { phase: "Development", duration: "2 weeks", description: "Website build with animation and structured content" },
      { phase: "Launch", duration: "1 week", description: "Testing and international market deployment" },
    ],
    metrics: [
      { label: "International Inquiries", value: "+270%", change: "increase" },
      { label: "Brand Credibility", value: "+88%", change: "stronger" },
      { label: "Navigation Speed", value: "2.1s", change: "faster" },
    ],
  },

  // 12 — EchoBlend Digital Content Pack
  {
    id: 12,
    title: "EchoBlend Digital Content Pack",
    category: "Content",
    client: "EchoBlend Coffee",
    year: "2024",
    duration: "5 weeks",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200",
    challenge: "The brand lacked cohesive content for social platforms and struggled with low engagement.",
    solution: "We designed a content pack including Instagram carousels, product imagery, short motion videos, and brand templates.",
    approach: "We created comprehensive social media content pack with cohesive visual direction and motion elements.",
    results: ["400% increase in social engagement", "Stronger visual identity presence", "Growth in organic reach"],
    services: ["Graphic Design", "Motion Content", "Social Media Kit"],
    tags: ["Content", "Graphic Design", "Social Media"],
    process: [
      { phase: "Planning", duration: "1 week", description: "Content strategy and visual direction planning" },
      { phase: "Design", duration: "2 weeks", description: "Instagram carousels, product imagery, and template creation" },
      { phase: "Motion", duration: "1.5 weeks", description: "Short motion videos and animated content" },
      { phase: "Delivery", duration: "0.5 weeks", description: "Asset delivery and usage guidelines" },
    ],
    metrics: [
      { label: "Social Engagement", value: "+400%", change: "increase" },
      { label: "Visual Identity", value: "+92%", change: "stronger" },
      { label: "Organic Reach", value: "+235%", change: "growth" },
    ],
  },

  // 13 — IndoHarvest Export Platform
  {
    id: 13,
    title: "IndoHarvest Export Platform",
    category: "Web Development",
    client: "IndoHarvest Exports",
    year: "2024",
    duration: "7 weeks",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    challenge: "Export buyers require a credible, transparent website with clear specifications, certifications, and inquiry pathways.",
    solution: "We built a modern export-focused website featuring product specs, downloadable documents, global buyer trust signals, and clean UI components.",
    approach: "We created export-focused platform with clear specifications, certifications, and transparent buyer pathways.",
    results: ["2.5x increase in buyer inquiries", "Clearer product information structure", "Higher trust from international buyers"],
    services: ["Web Development", "Information Architecture", "Spec Sheet Design"],
    tags: ["Export", "Web Development", "B2B"],
    process: [
      { phase: "Research", duration: "1 week", description: "Export buyer requirements and compliance research" },
      { phase: "Architecture", duration: "1 week", description: "Information architecture and spec sheet planning" },
      { phase: "Design", duration: "2 weeks", description: "Trust-focused design with certification highlights" },
      { phase: "Development", duration: "3 weeks", description: "Platform build with document download system" },
    ],
    metrics: [
      { label: "Buyer Inquiries", value: "+250%", change: "increase" },
      { label: "Information Clarity", value: "+94%", change: "improved" },
      { label: "Trust Score", value: "4.7/5", change: "rating" },
    ],
  },

  // 14 — FlowMetrics Analytics Dashboard
  {
    id: 14,
    title: "FlowMetrics Analytics Dashboard",
    category: "UI/UX",
    client: "FlowMetrics Ltd.",
    year: "2024",
    duration: "3 months",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200",
    challenge: "The previous dashboard overwhelmed users with complex charts and lacked a clear hierarchy.",
    solution: "We redesigned the dashboard with optimized data hierarchy, simplified charting, modular design components, and dark/light theme support.",
    approach: "We created optimized data hierarchy with simplified charting and modular design system.",
    results: ["75% faster insight discovery", "Higher usability rating", "Reduced onboarding time"],
    services: ["UI/UX Design", "Design System", "Data Visualization"],
    tags: ["UI/UX", "Dashboard", "SaaS"],
    process: [
      { phase: "Research", duration: "2 weeks", description: "User analytics review and pain point identification" },
      { phase: "Information Design", duration: "3 weeks", description: "Data hierarchy optimization and chart simplification" },
      { phase: "UI Design", duration: "4 weeks", description: "Modular component design with dark/light themes" },
      { phase: "Testing", duration: "3 weeks", description: "Usability testing and refinement" },
    ],
    metrics: [
      { label: "Insight Discovery", value: "+75%", change: "faster" },
      { label: "Usability Rating", value: "4.6/5", change: "improved" },
      { label: "Onboarding Time", value: "-50%", change: "reduced" },
    ],
  },

  // 15 — MoveUp Lifestyle App
  {
    id: 15,
    title: "MoveUp Lifestyle App",
    category: "UI/UX",
    client: "MoveUp Fitness",
    year: "2023",
    duration: "3.5 months",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200",
    challenge: "MoveUp wanted a digital product that combines workouts, community features, and challenges in one seamless app.",
    solution: "We designed a modern app with gamified challenges, badges, personalized workout plans, and social community integration.",
    approach: "We created gamified experience with personalized workout plans and social community integration.",
    results: ["3x increase in user engagement", "Better retention & daily usage", "High app store rating"],
    services: ["UX Strategy", "UI Design", "Prototyping", "Feature Mapping"],
    tags: ["UI/UX", "Lifestyle", "Mobile App"],
    process: [
      { phase: "Strategy", duration: "2 weeks", description: "Feature mapping and gamification strategy planning" },
      { phase: "Design", duration: "5 weeks", description: "UI design with community features and workout flows" },
      { phase: "Prototyping", duration: "4 weeks", description: "Interactive prototype with gamification mechanics" },
      { phase: "Testing", duration: "3 weeks", description: "User testing and engagement optimization" },
    ],
    metrics: [
      { label: "User Engagement", value: "+300%", change: "increase" },
      { label: "Daily Usage", value: "+175%", change: "better" },
      { label: "App Store Rating", value: "4.7/5", change: "high" },
    ],
  },
];

export const categories = ["All", "Brand Identity", "Web Development", "UI/UX", "E-commerce", "Platforms", "Content", "SaaS"];
