"use client";

/**
 * ----------------------------------------------------------------------------
 * IMPORTS
 * ----------------------------------------------------------------------------
 * - React hooks for state and effect management
 * - Framer Motion for premium animations
 * - React Icons for luxury iconography
 * - Next.js Link & Image for optimized navigation
 */

import { useState, useEffect, useRef, useCallback, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBookOpen, 
  FaStar, 
  FaGem, 
  FaChevronLeft, 
  FaChevronRight,
  FaCrown,
  FaWineGlassAlt,
  FaConciergeBell
} from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { GiKnifeFork, GiSpoon, GiCookingPot } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

/**
 * ----------------------------------------------------------------------------
 * STATIC ASSETS & CONFIGURATION
 * ----------------------------------------------------------------------------
 * Art Deco inspired hero imagery with luxury dining presentation
 */

const HERO_IMAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    alt: "Artisanal wood-fired pizza with premium truffle oil and fresh basil",
    title: "TRUFFLE PIZZA",
    subtitle: "Hand-stretched • 48-hour proof • Gold leaf finish",
    price: "$48"
  },
  {
    src: "https://img.freepik.com/free-photo/juicy-cheeseburger-rustic-wooden-board_9975-24623.jpg?semt=ais_incoming&w=740&q=80",
    alt: "Wagyu beef burger with caramelized onions and foie gras",
    title: "WAGYU BURGER",
    subtitle: "Japanese beef • Black truffle • Brioche doré",
    price: "$62"
  },
  {
    src: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
    alt: "Lobster tagliatelle with saffron cream and caviar",
    title: "LOBSTER TAGLIATELLE",
    subtitle: "Fresh pasta • Saffron • Ossetra caviar",
    price: "$78"
  },
  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=x_3,y_98,h_1684,w_2993,c_crop/h_833,w_1480",
    alt: "Imperial hotdog with champagne mustard and gold flakes",
    title: "IMPERIAL HOTDOG",
    subtitle: "Artisan sausage • Champagne mustard • 24k gold",
    price: "$55"
  }
];

/**
 * ----------------------------------------------------------------------------
 * DECORATIVE DIVIDER PATTERN
 * ----------------------------------------------------------------------------
 * Generates an elegant Art Deco geometric pattern for section dividers
 */

const ArtDecoDivider = (): JSX.Element => (
  <div className="flex items-center justify-center gap-3 py-4">
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-600/60" />
    <IoDiamond className="text-yellow-500/60 text-lg" />
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-600/60" />
  </div>
);

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: Home
 * ----------------------------------------------------------------------------
 * Art Deco luxury dining landing page with geometric patterns, gold accents,
 * and sophisticated animations befitting a Michelin-starred establishment.
 *
 * @returns {JSX.Element} The fully animated Art Deco homepage
 */

export default function Home(): JSX.Element {
  // --- State Management ---
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // --- Refs ---
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Navigate to the previous slide in the carousel
   */
  const prevSlide = useCallback((): void => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  }, []);

  /**
   * Navigate to the next slide in the carousel
   */
  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  }, []);

  /**
   * Navigate to a specific slide by index
   */
  const goToSlide = useCallback((index: number): void => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  }, []);

  /**
   * Auto-play carousel logic with pause on hover
   */
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    if (isAutoPlaying && !isHovering) {
      autoplayRef.current = setInterval(nextSlide, 5500);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide, isHovering]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black overflow-hidden"
    >
      {/* ------------------------------------------------------------------------
          LUXURY TEXTURED BACKGROUND
          ------------------------------------------------------------------------ */}
      <div className="fixed inset-0 z-0">
        {/* Primary dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f0a] to-black" />
        
        {/* Gold dust overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[120px]" />
        </div>

        {/* Geometric Art Deco pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 100px, 
              rgba(255,215,0,0.1) 100px, rgba(255,215,0,0.1) 102px),
              repeating-linear-gradient(-45deg, transparent, transparent 100px, 
              rgba(255,215,0,0.1) 100px, rgba(255,215,0,0.1) 102px)
            `
          }} />
        </div>
      </div>

      {/* ------------------------------------------------------------------------
          HERO SECTION
          ------------------------------------------------------------------------ */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
        
        {/* --- Art Deco Top Decoration --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-600/40" />
            <FaCrown className="text-yellow-500/40 text-2xl" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-600/40" />
          </div>
        </motion.div>

        {/* --- Decorative Border Frame --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-7xl border border-yellow-600/20 rounded-2xl p-6 md:p-10 relative"
        >
          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-yellow-500/40" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-yellow-500/40" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-yellow-500/40" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-yellow-500/40" />

          {/* --- Main Content --- */}
          <div className="flex flex-col items-center">
            
            {/* --- Badge --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 flex items-center gap-3 px-6 py-2.5 border border-yellow-600/30 bg-black/50 backdrop-blur-sm rounded-full"
            >
              <GiKnifeFork className="text-yellow-400 text-sm" />
              <span className="text-xs tracking-[0.3em] text-yellow-400/80 font-light uppercase">
                ★ Michelin ★ 2026
              </span>
              <GiSpoon className="text-yellow-400 text-sm" />
            </motion.div>

            {/* --- Headline with Art Deco typography --- */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-4xl md:text-7xl lg:text-8xl font-light text-center leading-[0.95] tracking-wider"
            >
              <span className="text-white/90 font-thin tracking-[0.2em] block mb-2">
                CULINARY
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 font-serif">
                MASTERPIECE
              </span>
              <ArtDecoDivider />
              <span className="text-white/60 text-sm md:text-base font-light tracking-[0.4em] block mt-2">
                WHERE ART MEETS FLAVOR
              </span>
            </motion.h1>

            {/* --- CTA Buttons --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-5 justify-center"
            >
              {/* View Menu - Gold CTA */}
              <Link href="/menu">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-medium tracking-[0.15em] rounded-full shadow-2xl shadow-yellow-600/20"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaBookOpen className="text-lg" />
                    DISCOVER MENU
                    <IoDiamond className="text-sm opacity-60" />
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </Link>

              {/* Book a Table - Ghost CTA */}
              <Link href="/reservation">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(234, 179, 8, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-10 py-4 border border-yellow-600/40 text-yellow-400/90 font-medium tracking-[0.15em] rounded-full hover:bg-yellow-600/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <MdTableBar className="text-lg" />
                  RESERVE TABLE
                </motion.button>
              </Link>
            </motion.div>

            {/* --- Carousel --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="w-full max-w-5xl mt-14"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-yellow-600/20 shadow-2xl shadow-black/80">
                
                {/* Image Carousel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={HERO_IMAGES[currentSlide].src}
                      alt={HERO_IMAGES[currentSlide].alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 90vw"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Bottom-left content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <motion.div
                        key={`content-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                      >
                        <div>
                          <h2 className="text-2xl md:text-4xl font-serif text-white tracking-[0.15em]">
                            {HERO_IMAGES[currentSlide].title}
                          </h2>
                          <p className="text-sm md:text-base text-yellow-400/70 font-light tracking-[0.2em]">
                            {HERO_IMAGES[currentSlide].subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl md:text-3xl font-serif text-yellow-400">
                            {HERO_IMAGES[currentSlide].price}
                          </span>
                          <FaWineGlassAlt className="text-yellow-500/40 text-xl" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-600/20 text-yellow-400/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft className="text-sm md:text-base" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-600/20 text-yellow-400/60 hover:text-yellow-400 hover:border-yellow-400/50 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <FaChevronRight className="text-sm md:text-base" />
                </button>
              </div>

              {/* --- Art Deco Dots --- */}
              <div className="flex justify-center gap-3 mt-6">
                {HERO_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-500 rounded-full ${
                      currentSlide === index
                        ? "w-12 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 shadow-lg shadow-yellow-500/30"
                        : "w-1 h-1 bg-yellow-600/30 hover:bg-yellow-500/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* --- Trust Indicators with Art Deco Style --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-12 flex flex-wrap gap-8 md:gap-14 justify-center"
            >
              {[
                { icon: FaStar, value: "★ 4.9", label: "GUEST RATING" },
                { icon: FaGem, value: "500+", label: "DAILY GUESTS" },
                { icon: GiCookingPot, value: "15+", label: "AWARD-WINNING" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="text-yellow-500/40 text-xl mb-1" />
                  <span className="text-2xl md:text-3xl font-serif text-white tracking-wider">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-yellow-400/40 tracking-[0.25em] uppercase mt-0.5">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* --- Bottom Decorative Line --- */}
            <div className="mt-10 flex items-center gap-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-yellow-600/30" />
              <FaConciergeBell className="text-yellow-500/20 text-lg" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-yellow-600/30" />
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}