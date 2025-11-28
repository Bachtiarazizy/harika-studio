"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Navigation links data
const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact", label: "CONTACT" },
];

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Animation variants
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  const buttonVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: navLinks.length * 0.1,
        duration: 0.4,
      },
    },
  };

  return (
    <>
      {/* Navbar - Floating overlay yang tidak mempengaruhi layout */}
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none ">
        <div className="pointer-events-auto bg-[#131313]/80 backdrop-blur-md text-white">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4 sm:py-6">
            {/* Logo */}

            <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight leading-tight">
              <Image src="/logo-harika-studio-1.png" alt="Logo" width={150} height={60} />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm hover:text-[#E59156] transition-colors">
                  {link.label}
                </a>
              ))}
              <button className="px-4 py-2 border border-white/30 rounded hover:bg-white/10 transition-colors text-sm whitespace-nowrap">GET A QUOTE ✦</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div className="fixed inset-0 bg-black/50 z-60 lg:hidden" initial="closed" animate="open" exit="closed" variants={overlayVariants} onClick={closeMenu} />

            {/* Sliding Menu Panel */}
            <motion.div className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-[#131313] z-70 lg:hidden overflow-y-auto" initial="closed" animate="open" exit="closed" variants={menuVariants}>
              {/* Close button */}
              <button onClick={closeMenu} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded transition-colors text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>

              {/* Menu content */}
              <div className="flex flex-col items-center justify-center min-h-full gap-8 px-6 py-20 text-white">
                {navLinks.map((link, i) => (
                  <motion.a key={link.href} href={link.href} onClick={closeMenu} className="text-3xl font-light hover:text-[#E59156] transition-colors" custom={i} variants={menuItemVariants} initial="closed" animate="open" exit="closed">
                    {link.label}
                  </motion.a>
                ))}
                <motion.button onClick={closeMenu} className="px-8 py-3 border border-white/30 rounded hover:bg-white/10 transition-colors text-lg mt-4" variants={buttonVariants} initial="closed" animate="open" exit="closed">
                  GET A QUOTE ✦
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
