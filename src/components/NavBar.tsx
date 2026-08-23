/**
 * ----------------------------------------------------------------------------
 * NAVBAR COMPONENT - Art Deco Luxury Edition
 * ----------------------------------------------------------------------------
 * A premium navigation bar with glass-morphism effects, gold accents,
 * animated hover states, and a sophisticated Art Deco aesthetic.
 * Features responsive design with animated mobile menu.
 *
 * @component
 * @returns {JSX.Element} The fully animated Art Deco navbar
 */

"use client";

import Link from "next/link";
import { useState, useEffect, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBookOpen, 
  FaConciergeBell, 
  FaBars, 
  FaTimes,
} from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { GiKnifeFork, GiSpoon } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { usePathname } from "next/navigation";

/**
 * ----------------------------------------------------------------------------
 * NAVIGATION CONFIGURATION
 * ----------------------------------------------------------------------------
 * Defines the main navigation links with their respective paths and icons
 */

const NAV_LINKS = [
  { 
    name: "Menu", 
    path: "/menu", 
    icon: <FaBookOpen className="text-xs" />,
    description: "Culinary creations"
  },
  { 
    name: "Reservations", 
    path: "/reservation", 
    icon: <MdTableBar className="text-xs" />,
    description: "Secure your table"
  },
  { 
    name: "About", 
    path: "/about", 
    icon: <FaConciergeBell className="text-xs" />,
    description: "Our story"
  },
];

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: NavLink
 * ----------------------------------------------------------------------------
 * Animated navigation link with gold underline hover effect and
 * active state indicator
 *
 * @param {Object} props - Component props
 * @param {string} props.href - Link destination
 * @param {string} props.name - Display name
 * @param {React.ReactNode} props.icon - Icon component
 * @param {string} props.description - Subtle description text
 * @param {boolean} props.isActive - Whether the link is currently active
 * @param {() => void} props.onClick - Click handler for mobile
 * @returns {JSX.Element} Animated navigation link
 */

const NavLink = ({ 
  href, 
  name, 
  icon, 
  description, 
  isActive,
  onClick 
}: { 
  href: string; 
  name: string; 
  icon: React.ReactNode; 
  description: string;
  isActive: boolean;
  onClick?: () => void;
}): JSX.Element => {
  return (
    <Link href={href} onClick={onClick} className="block">
      <motion.div
        className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${
          isActive 
            ? "bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 shadow-lg shadow-yellow-600/10" 
            : "hover:bg-white/5"
        }`}
        whileHover={{ 
          x: 5,
          transition: { type: "spring", stiffness: 400, damping: 20 }
        }}
      >
        {/* Icon with gold accent */}
        <span className={`text-sm ${isActive ? 'text-yellow-400' : 'text-yellow-400/50 group-hover:text-yellow-400'}`}>
          {icon}
        </span>
        
        {/* Link text */}
        <div className="flex flex-col">
          <span className={`text-sm tracking-[0.08em] font-light ${
            isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
          }`}>
            {name}
          </span>
          <span className="text-[8px] text-yellow-400/30 tracking-[0.15em] uppercase font-light">
            {description}
          </span>
        </div>

        {/* Active indicator line */}
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-yellow-600 to-yellow-400"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}

        {/* Hover glow effect */}
        {!isActive && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-600/0 via-yellow-500/5 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </motion.div>
    </Link>
  );
};

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: Navbar
 * ----------------------------------------------------------------------------
 * Art Deco luxury navigation bar with glass-morphism, gold accents,
 * and responsive mobile menu with premium animations.
 *
 * @returns {JSX.Element} The complete Art Deco navbar
 */

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /**
   * Handle scroll event to change navbar appearance
   */
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Close mobile menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  /**
   * Prevent body scroll when mobile menu is open
   */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  /**
   * Toggle mobile menu
   */
  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  /**
   * Close mobile menu
   */
  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ------------------------------------------------------------------------
          NAVBAR CONTAINER
          ------------------------------------------------------------------------ */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-yellow-600/10 shadow-2xl shadow-black/50" 
            : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* --- Logo --- */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link 
                href="/" 
                className="flex items-center gap-3 group"
              >
                {/* Logo icon with gold ring */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md group-hover:blur-xl transition-all duration-500" />
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-yellow-600/30 bg-black/50 backdrop-blur-sm">
                    <GiKnifeFork className="text-yellow-400/80 text-lg group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Logo text */}
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-serif font-light tracking-[0.15em] text-white/90">
                    MY<span className="text-yellow-400">RESTAURANT</span>
                  </span>
                  <IoDiamond className="text-yellow-500/30 text-xs ml-1" />
                </div>
              </Link>
            </motion.div>

            {/* --- Desktop Navigation --- */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  href={link.path}
                  name={link.name}
                  icon={link.icon}
                  description={link.description}
                  isActive={pathname === link.path}
                />
              ))}
            </div>

            {/* --- Right Side: Status Indicator + Hamburger --- */}
            <div className="flex items-center gap-4">
              {/* Status indicator (desktop) */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-600/20 bg-yellow-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
                </span>
                <span className="text-[8px] text-yellow-400/60 tracking-[0.15em] uppercase font-light">
                  Open Now
                </span>
              </div>

              {/* --- Mobile Hamburger --- */}
              <motion.button
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-yellow-600/20 hover:border-yellow-500/50 transition-colors duration-300 bg-black/30 backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaTimes className="text-yellow-400 text-lg" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaBars className="text-yellow-400 text-lg" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* --- Decorative bottom line --- */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />
      </motion.nav>

      {/* ------------------------------------------------------------------------
          MOBILE MENU OVERLAY
          ------------------------------------------------------------------------ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.3 }
              }}
              className="fixed top-0 right-0 z-40 w-[85%] max-w-sm h-screen bg-black/95 backdrop-blur-xl border-l border-yellow-600/20 md:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-yellow-600/10">
                <div className="flex items-center gap-2">
                  <GiSpoon className="text-yellow-400/60 text-lg" />
                  <span className="text-sm font-serif font-light tracking-[0.1em] text-white/60">
                    NAVIGATION
                  </span>
                  <GiKnifeFork className="text-yellow-400/60 text-lg" />
                </div>
                <motion.button
                  onClick={closeMenu}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-yellow-600/20 hover:border-yellow-400/50 transition-colors"
                >
                  <FaTimes className="text-yellow-400 text-sm" />
                </motion.button>
              </div>

              {/* Menu Links */}
              <div className="p-6 space-y-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <NavLink
                      href={link.path}
                      name={link.name}
                      icon={link.icon}
                      description={link.description}
                      isActive={pathname === link.path}
                      onClick={closeMenu}
                    />
                  </motion.div>
                ))}

                {/* Decorative divider */}
                <div className="my-6 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-yellow-600/20" />
                  <IoDiamond className="text-yellow-500/20 text-xs" />
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-yellow-600/20" />
                </div>

                {/* Status indicator (mobile) */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-yellow-600/20 bg-yellow-500/5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500" />
                  </span>
                  <span className="text-xs text-yellow-400/60 tracking-[0.1em] uppercase font-light">
                    Open Now — Reserve Your Table
                  </span>
                </div>

                {/* Contact info (mobile) */}
                <div className="pt-4 border-t border-yellow-600/10">
                  <p className="text-[10px] text-yellow-400/30 tracking-[0.15em] uppercase font-light">
                    Reservations
                  </p>
                  <p className="text-sm text-white/60 font-light mt-1">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}