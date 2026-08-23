/**
 * ----------------------------------------------------------------------------
 * FOOTER COMPONENT - Art Deco Luxury Edition
 * ----------------------------------------------------------------------------
 * A premium footer with geometric patterns, gold accents, glass-morphism
 * effects, and sophisticated animations befitting a luxury establishment.
 *
 * @component
 * @returns {JSX.Element} The fully animated Art Deco footer
 */

"use client";

import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaArrowUp,
  FaGem,
  FaCrown
} from "react-icons/fa";
import { 
  GiKnifeFork, 
  GiSpoon, 
  GiCookingPot 
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect, JSX } from "react";

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: DecorativeDivider
 * ----------------------------------------------------------------------------
 * Renders an elegant Art Deco geometric divider with diamond accents
 *
 * @returns {JSX.Element} Decorative divider element
 */

const DecorativeDivider = (): JSX.Element => (
  <div className="flex items-center justify-center gap-3 py-2">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600/30" />
    <IoDiamond className="text-yellow-500/30 text-xs" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600/30" />
  </div>
);

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: SocialIcon
 * ----------------------------------------------------------------------------
 * Animated social media icon with hover effects and tooltip
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - The icon component
 * @param {string} props.href - The social media URL
 * @param {string} props.label - Accessibility label
 * @returns {JSX.Element} Animated social icon
 */

const SocialIcon = ({ 
  icon, 
  href, 
  label 
}: { 
  icon: React.ReactNode; 
  href: string; 
  label: string;
}): JSX.Element => (
  <motion.a
    href={href}
    aria-label={label}
    whileHover={{ 
      y: -5, 
      scale: 1.15,
      boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)"
    }}
    whileTap={{ scale: 0.9 }}
    className="w-11 h-11 flex items-center justify-center rounded-full border border-yellow-600/20 text-yellow-400/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300 bg-black/30 backdrop-blur-sm"
  >
    {icon}
  </motion.a>
);

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: FooterLink
 * ----------------------------------------------------------------------------
 * Animated navigation link with gold underline hover effect
 *
 * @param {Object} props - Component props
 * @param {string} props.href - The link destination
 * @param {string} props.children - Link text
 * @returns {JSX.Element} Animated navigation link
 */

const FooterLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}): JSX.Element => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <Link 
      href={href} 
      className="group relative text-gray-400 hover:text-yellow-400 transition-all duration-300 text-sm tracking-[0.05em] font-light"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-yellow-500 to-yellow-300 group-hover:w-full transition-all duration-500" />
    </Link>
  </motion.li>
);

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: Footer
 * ----------------------------------------------------------------------------
 * Art Deco luxury footer with geometric patterns, gold accents, and
 * sophisticated animations. Features a dynamic "Back to Top" button
 * with smooth scrolling behavior.
 *
 * @returns {JSX.Element} The complete Art Deco footer
 */

export default function Footer(): JSX.Element {
  // --- State ---
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  /**
   * Handle scroll event to show/hide "Back to Top" button
   */
  useEffect(() => {
    const handleScroll = (): void => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Smooth scroll to top of the page
   */
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-yellow-600/10 overflow-hidden">
      {/* ------------------------------------------------------------------------
          LUXURY BACKGROUND EFFECTS
          ------------------------------------------------------------------------ */}
      
      {/* Subtle gold dust particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[100px]" />
      </div>

      {/* Geometric Art Deco pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 80px, 
            rgba(255,215,0,0.1) 80px, rgba(255,215,0,0.1) 82px),
            repeating-linear-gradient(-45deg, transparent, transparent 80px, 
            rgba(255,215,0,0.1) 80px, rgba(255,215,0,0.1) 82px)
          `
        }} />
      </div>

      {/* ------------------------------------------------------------------------
          MAIN FOOTER CONTENT
          ------------------------------------------------------------------------ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        
        {/* --- Top Section: Brand & Newsletter --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-yellow-600/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <GiKnifeFork className="text-yellow-400/60 text-2xl" />
              <h2 className="text-2xl md:text-3xl font-serif font-light tracking-[0.2em] text-white/90">
                MY<span className="text-yellow-400">RESTAURANT</span>
              </h2>
              <GiSpoon className="text-yellow-400/60 text-2xl" />
            </div>
            <p className="mt-3 text-gray-500 text-sm font-light tracking-wider max-w-sm">
              Culinary excellence since 2024 • Where art meets flavor
            </p>
          </motion.div>

          {/* CTA - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-yellow-600/20 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400/60 text-xs tracking-[0.15em] uppercase font-light">
                ★ Michelin Guide
              </span>
            </div>
            <motion.a
              href="/reservation"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 40px rgba(234, 179, 8, 0.2)"
              }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-medium text-sm tracking-[0.1em] rounded-full shadow-2xl shadow-yellow-600/20 whitespace-nowrap"
            >
              BOOK A TABLE
            </motion.a>
          </motion.div>
        </div>

        {/* --- Middle Section: Links Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCrown className="text-yellow-500/30 text-sm" />
              <h3 className="text-white/80 font-serif font-light text-lg tracking-[0.1em]">
                ABOUT
              </h3>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed tracking-wide">
              Experience the pinnacle of gastronomy with our curated menu of 
              artisanal dishes, crafted with passion and served with elegance.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <GiCookingPot className="text-yellow-500/20 text-lg" />
              <span className="text-yellow-400/30 text-[10px] tracking-[0.2em] uppercase">
                Est. 2024
              </span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <IoDiamond className="text-yellow-500/30 text-xs" />
              <h3 className="text-white/80 font-serif font-light text-lg tracking-[0.1em]">
                EXPLORE
              </h3>
            </div>
            <ul className="space-y-3">
              <FooterLink href="/menu">Menu</FooterLink>
              <FooterLink href="/reservation">Reservations</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <IoDiamond className="text-yellow-500/30 text-xs" />
              <h3 className="text-white/80 font-serif font-light text-lg tracking-[0.1em]">
                HOURS
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-500 font-light tracking-wide">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span className="text-yellow-400/40">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span className="text-yellow-400/40">11:00 - 01:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-yellow-400/40">12:00 - 22:00</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <FaGem className="text-yellow-500/30 text-sm" />
              <h3 className="text-white/80 font-serif font-light text-lg tracking-[0.1em]">
                CONNECT
              </h3>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <SocialIcon 
                icon={<FaFacebookF />} 
                href="#" 
                label="Facebook" 
              />
              <SocialIcon 
                icon={<FaInstagram />} 
                href="#" 
                label="Instagram" 
              />
              <SocialIcon 
                icon={<FaTwitter />} 
                href="#" 
                label="Twitter" 
              />
              <SocialIcon 
                icon={<FaYoutube />} 
                href="#" 
                label="YouTube" 
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-1 text-sm text-gray-500 font-light">
              <p className="text-yellow-400/30 text-[10px] tracking-[0.15em] uppercase">
                RESERVATIONS
              </p>
              <p className="text-white/60">+1 (555) 123-4567</p>
              <p className="text-white/60 text-xs">reservations@myrestaurant.com</p>
            </div>
          </motion.div>
        </div>

        {/* --- Decorative Divider --- */}
        <DecorativeDivider />

        {/* --- Bottom Section: Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xs tracking-[0.15em] font-light"
          >
            © {new Date().getFullYear()} MyRestaurant. All rights reserved.
            <span className="hidden md:inline mx-2 text-yellow-600/20">|</span>
            <span className="text-yellow-400/20 text-[10px]">
              CULINARY MASTERPIECE
            </span>
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-2xl shadow-yellow-600/30 transition-all duration-500 hover:scale-110 hover:shadow-yellow-600/50 ${
              showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}