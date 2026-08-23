/**
 * ----------------------------------------------------------------------------
 * ABOUT PAGE - Art Deco Luxury Edition
 * ----------------------------------------------------------------------------
 * A premium about page with brand story, timeline, features, and
 * team showcase. Features glass-morphism cards, gold accents,
 * and sophisticated animations befitting a luxury establishment.
 *
 * @page
 * @returns {JSX.Element} The fully animated Art Deco about page
 */

"use client";

import { motion } from "framer-motion";
import { 
  FaLeaf, 
  FaClock, 
  FaSmile, 
  FaCrown, 
  FaGem,
  FaStar,
  FaChevronRight,
  FaUsers,
  FaTrophy,
  FaAward,
  FaQuoteLeft,
  FaQuoteRight,
  FaWineGlassAlt
} from "react-icons/fa";
import { 
  GiKnifeFork, 
  GiOlive,
  GiWineBottle,
  GiChefToque
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdTableBar } from "react-icons/md";
import Link from "next/link";
import { JSX } from "react";

/**
 * ----------------------------------------------------------------------------
 * FEATURES CONFIGURATION
 * ----------------------------------------------------------------------------
 * Core values and unique selling points of the restaurant
 */

const FEATURES = [
  { 
    title: "Fresh Ingredients", 
    icon: <FaLeaf />, 
    description: "We source only the finest seasonal ingredients from local farms and artisanal producers.",
    color: "from-emerald-600 to-green-500"
  },
  { 
    title: "Cozy Atmosphere", 
    icon: <FaSmile />, 
    description: "A warm, inviting space designed for intimate dinners and joyful celebrations alike.",
    color: "from-amber-600 to-yellow-500"
  },
  { 
    title: "Fast Service", 
    icon: <FaClock />, 
    description: "Our dedicated team ensures prompt, attentive service without compromising excellence.",
    color: "from-blue-600 to-cyan-500"
  },
];

/**
 * ----------------------------------------------------------------------------
 * TIMELINE CONFIGURATION
 * ----------------------------------------------------------------------------
 * Brand history and milestone achievements
 */

const TIMELINE = [
  { year: "2024", title: "Grand Opening", description: "MyRestaurant opens its doors to the public" },
  { year: "2025", title: "First Michelin Star", description: "Awarded for culinary excellence and innovation" },
  { year: "2026", title: "Global Recognition", description: "Featured in top international culinary guides" },
];

/**
 * ----------------------------------------------------------------------------
 * STATS CONFIGURATION
 * ----------------------------------------------------------------------------
 * Key performance indicators and trust metrics
 */

const STATS = [
  { value: "500+", label: "Happy Guests Daily", icon: FaUsers },
  { value: "4.9", label: "Average Rating", icon: FaStar },
  { value: "15+", label: "Award-Winning Dishes", icon: FaTrophy },
  { value: "100%", label: "Fresh Ingredients", icon: FaLeaf },
];

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: DecorativeDivider
 * ----------------------------------------------------------------------------
 * Elegant Art Deco divider with diamond accent
 */

const DecorativeDivider = (): JSX.Element => (
  <div className="flex items-center justify-center gap-4 py-2">
    <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-600/30" />
    <IoDiamond className="text-yellow-500/30 text-sm" />
    <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-600/30" />
  </div>
);

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: FeatureCard
 * ----------------------------------------------------------------------------
 * Premium feature card with glass-morphism and hover effects
 */

const FeatureCard = ({ 
  feature, 
  index 
}: { 
  feature: typeof FEATURES[0]; 
  index: number;
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 60px rgba(234, 179, 8, 0.1)"
      }}
      className="group relative bg-gradient-to-br from-white/5 to-white/2 border border-yellow-600/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500"
    >
      {/* Icon container */}
      <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${feature.color} shadow-lg shadow-yellow-600/20 mb-5 group-hover:scale-110 transition-transform duration-500`}>
        <span className="text-2xl text-white">
          {feature.icon}
        </span>
      </div>

      <h3 className="text-xl font-serif font-light text-white/90 tracking-[0.05em] mb-2">
        {feature.title}
      </h3>
      
      <p className="text-sm text-gray-400 font-light leading-relaxed">
        {feature.description}
      </p>

      {/* Decorative corner accent */}
      <div className="absolute top-4 right-4 opacity-20">
        <IoDiamond className="text-yellow-400/30 text-xs" />
      </div>
    </motion.div>
  );
};

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: TimelineItem
 * ----------------------------------------------------------------------------
 * Animated timeline entry with gold accents
 */

const TimelineItem = ({ 
  item, 
  index 
}: { 
  item: typeof TIMELINE[0]; 
  index: number;
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      className="flex items-start gap-6 group"
    >
      {/* Year badge */}
      <div className="flex-shrink-0 w-24 pt-1">
        <span className="text-2xl font-serif font-light text-yellow-400/60 tracking-[0.1em]">
          {item.year}
        </span>
      </div>

      {/* Timeline line and dot */}
      <div className="flex-shrink-0 relative flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-yellow-500/50 bg-black z-10" />
        {index < TIMELINE.length - 1 && (
          <div className="absolute top-3 w-px h-16 bg-gradient-to-b from-yellow-500/30 to-yellow-500/5" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <h4 className="text-lg font-serif text-white/80 tracking-[0.05em]">
          {item.title}
        </h4>
        <p className="text-sm text-gray-400 font-light">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: StatCard
 * ----------------------------------------------------------------------------
 * Animated stat counter with icon
 */

const StatCard = ({ 
  stat, 
  index 
}: { 
  stat: typeof STATS[0]; 
  index: number;
}): JSX.Element => {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.6 + index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="text-center group"
    >
      <div className="flex items-center justify-center mb-2">
        <Icon className="text-yellow-400/30 text-xl group-hover:text-yellow-400/50 transition-colors duration-300" />
      </div>
      <p className="text-3xl md:text-4xl font-serif text-white/90 tracking-[0.05em]">
        {stat.value}
      </p>
      <p className="text-[10px] text-yellow-400/30 tracking-[0.15em] uppercase font-light mt-1">
        {stat.label}
      </p>
    </motion.div>
  );
};

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: AboutPage
 * ----------------------------------------------------------------------------
 * The complete Art Deco about page with story, timeline, features,
 * and brand statistics.
 *
 * @returns {JSX.Element} The fully animated about page
 */

export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* ------------------------------------------------------------------------
          BACKGROUND EFFECTS
          ------------------------------------------------------------------------ */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f0a] to-black" />
        
        {/* Gold dust */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[120px]" />
        
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 80px, 
              rgba(255,215,0,0.1) 80px, rgba(255,215,0,0.1) 82px),
              repeating-linear-gradient(-45deg, transparent, transparent 80px, 
              rgba(255,215,0,0.1) 80px, rgba(255,215,0,0.1) 82px)
            `
          }} />
        </div>
      </div>

      {/* ------------------------------------------------------------------------
          MAIN CONTENT
          ------------------------------------------------------------------------ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-28">
        
        {/* --- Hero Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Crown decoration */}
          <FaCrown className="text-yellow-500/20 text-4xl mx-auto mb-4" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.2em]">
            <span className="text-white/80">OUR</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">
              LEGACY
            </span>
          </h1>
          
          <DecorativeDivider />
          
          <p className="mt-4 text-sm text-yellow-400/40 tracking-[0.3em] uppercase font-light">
            ★ Where Art Meets Flavor ★
          </p>
        </motion.div>

        {/* --- Story Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-white/5 to-white/2 border border-yellow-600/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            {/* Decorative quote marks */}
            <FaQuoteLeft className="absolute top-6 left-6 text-yellow-500/10 text-6xl" />
            <FaQuoteRight className="absolute bottom-6 right-6 text-yellow-500/10 text-6xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <GiChefToque className="text-yellow-400/40 text-2xl" />
                <span className="text-xs text-yellow-400/30 tracking-[0.2em] uppercase font-light">
                  Our Philosophy
                </span>
                <GiWineBottle className="text-yellow-400/40 text-2xl" />
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                At MyRestaurant, we believe that dining is not just about food — 
                its about <span className="text-yellow-400/60">creating memories</span>. 
                Our chefs craft every dish with <span className="text-yellow-400/60">passion and precision</span>, 
                using only the freshest seasonal ingredients. 
                Step into our world where <span className="text-yellow-400/60">culinary artistry</span> 
                meets warm hospitality.
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-4">
                <GiOlive className="text-yellow-500/20 text-sm" />
                <span className="text-[10px] text-yellow-400/20 tracking-[0.2em] uppercase font-light">
                  Est. 2024
                </span>
                <GiOlive className="text-yellow-500/20 text-sm" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Stats Section --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* --- Features Grid --- */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3">
              <FaGem className="text-yellow-500/20 text-sm" />
              <h2 className="text-2xl md:text-3xl font-serif font-light text-white/80 tracking-[0.15em]">
                WHY CHOOSE US
              </h2>
              <FaGem className="text-yellow-500/20 text-sm" />
            </div>
            <DecorativeDivider />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* --- Timeline Section --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3">
              <FaAward className="text-yellow-500/20 text-sm" />
              <h2 className="text-2xl md:text-3xl font-serif font-light text-white/80 tracking-[0.15em]">
                OUR JOURNEY
              </h2>
              <FaAward className="text-yellow-500/20 text-sm" />
            </div>
            <DecorativeDivider />
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-yellow-600/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {TIMELINE.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* --- Team / CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-yellow-600/10 via-yellow-500/5 to-yellow-600/10 border border-yellow-600/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-600/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <FaWineGlassAlt className="text-yellow-400/20 text-4xl mx-auto mb-4" />
              
              <h3 className="text-2xl md:text-3xl font-serif font-light text-white/80 tracking-[0.1em]">
                Ready to Experience{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                  Culinary Excellence
                </span>
                ?
              </h3>
              
              <p className="mt-3 text-gray-400 font-light text-sm tracking-wide max-w-lg mx-auto">
                Join us for an unforgettable dining journey.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <Link href="/menu">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(234, 179, 8, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-medium tracking-[0.1em] rounded-full shadow-2xl shadow-yellow-600/20"
                  >
                    <GiKnifeFork className="text-sm" />
                    Explore Menu
                    <FaChevronRight className="text-xs" />
                  </motion.button>
                </Link>
                
                <Link href="/reservation">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(234, 179, 8, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-3.5 border border-yellow-600/40 text-yellow-400/80 font-medium tracking-[0.1em] rounded-full hover:bg-yellow-600/10 transition-all duration-300"
                  >
                    <MdTableBar className="text-sm" />
                    Book a Table
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Bottom Decoration --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-600/20" />
          <div className="flex items-center gap-2">
            <GiOlive className="text-yellow-500/20 text-sm" />
            <span className="text-[8px] text-yellow-400/20 tracking-[0.3em] uppercase font-light">
              Bon appétit
            </span>
            <GiOlive className="text-yellow-500/20 text-sm" />
          </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-600/20" />
        </motion.div>
      </div>
    </div>
  );
}