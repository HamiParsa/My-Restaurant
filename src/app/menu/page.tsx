/**
 * ----------------------------------------------------------------------------
 * MENU PAGE - Art Deco Luxury Edition
 * ----------------------------------------------------------------------------
 * A premium menu page with glass-morphism cards, gold accents, 
 * animated category filters, and a sophisticated culinary showcase.
 * Features search functionality, category filtering, and elegant
 * hover effects befitting a Michelin-starred establishment.
 *
 * @page
 * @returns {JSX.Element} The fully animated Art Deco menu page
 */

"use client";

import { useState, useMemo, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShoppingCart, 
  FaSearch, 
  FaHamburger, 
  FaStar, 
  FaCrown,
  FaArrowRight,
  FaClock
} from "react-icons/fa";
import { 
  GiPizzaSlice, 
  GiNoodles, 
  GiKnifeFork, 
  GiSpoon,
  GiCookingPot,
  GiOlive
} from "react-icons/gi";
import { LiaHotdogSolid } from "react-icons/lia";
import { IoDiamond } from "react-icons/io5";
import Image from "next/image";

/**
 * ----------------------------------------------------------------------------
 * MENU DATA CONFIGURATION
 * ----------------------------------------------------------------------------
 * Extended menu items with additional metadata for luxury presentation
 */

const MENU_ITEMS = [
  { 
    id: 1,
    name: "Truffle Margherita", 
    price: "$38", 
    category: "Pizza", 
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    description: "San Marzano tomato, buffalo mozzarella, black truffle",
    rating: 4.9,
    prepTime: "20 min",
    isSignature: true
  },
  { 
    id: 2,
    name: "Wagyu Burger", 
    price: "$42", 
    category: "Burger", 
    img: "https://img.freepik.com/free-photo/juicy-cheeseburger-rustic-wooden-board_9975-24623.jpg?semt=ais_incoming&w=740&q=80",
    description: "Japanese A5 wagyu, foie gras, truffle aioli, brioche",
    rating: 4.8,
    prepTime: "25 min",
    isSignature: true
  },
  { 
    id: 3,
    name: "Lobster Tagliatelle", 
    price: "$48", 
    category: "Pasta", 
    img: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
    description: "Fresh pasta, Atlantic lobster, saffron cream, caviar",
    rating: 4.9,
    prepTime: "30 min",
    isSignature: true
  },
  { 
    id: 4,
    name: "Imperial Hotdog", 
    price: "$35", 
    category: "Hotdog", 
    img: "https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=x_3,y_98,h_1684,w_2993,c_crop/h_833,w_1480",
    description: "Artisan sausage, champagne mustard, 24k gold flakes",
    rating: 4.7,
    prepTime: "15 min",
    isSignature: false
  },
];

/**
 * ----------------------------------------------------------------------------
 * CATEGORY CONFIGURATION
 * ----------------------------------------------------------------------------
 * Menu categories with icons and visual styling
 */

const CATEGORIES = [
  { name: "All", icon: <FaSearch className="text-xs" />, color: "from-yellow-600 to-yellow-500" },
  { name: "Pizza", icon: <GiPizzaSlice className="text-xs" />, color: "from-red-600 to-orange-500" },
  { name: "Burger", icon: <FaHamburger className="text-xs" />, color: "from-amber-600 to-yellow-500" },
  { name: "Pasta", icon: <GiNoodles className="text-xs" />, color: "from-green-600 to-emerald-500" },
  { name: "Hotdog", icon: <LiaHotdogSolid className="text-xs" />, color: "from-orange-600 to-red-500" },
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
 * SUB-COMPONENT: MenuCard
 * ----------------------------------------------------------------------------
 * Premium menu item card with glass-morphism, hover effects,
 * and interactive elements
 */

const MenuCard = ({ 
  item, 
  index 
}: { 
  item: typeof MENU_ITEMS[0]; 
  index: number;
}): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white/5 to-white/2 border border-yellow-600/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-yellow-600/10 transition-all duration-500"
    >
      {/* --- Image Container --- */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Signature badge */}
        {item.isSignature && (
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-[8px] tracking-[0.15em] uppercase font-bold shadow-lg"
          >
            <FaCrown className="text-[10px]" />
            Signature
          </motion.div>
        )}

        {/* Rating badge */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-600/20"
        >
          <FaStar className="text-yellow-400 text-[10px]" />
          <span className="text-xs text-white/80 font-light">{item.rating}</span>
        </motion.div>

        {/* Hover overlay - Add to Cart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-medium tracking-[0.1em] rounded-full shadow-2xl shadow-yellow-600/30"
          >
            <FaShoppingCart className="text-sm" />
            Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* --- Content --- */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-serif font-light text-white/90 tracking-[0.05em]">
              {item.name}
            </h3>
            <p className="text-[10px] text-yellow-400/40 tracking-[0.1em] uppercase font-light mt-0.5">
              {item.category}
            </p>
          </div>
          <span className="text-lg font-serif text-yellow-400 font-light">
            {item.price}
          </span>
        </div>

        <p className="text-xs text-gray-400 font-light leading-relaxed tracking-wide">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-yellow-600/10">
          <div className="flex items-center gap-2">
            <FaClock className="text-yellow-400/30 text-[10px]" />
            <span className="text-[10px] text-gray-500 font-light tracking-wide">
              {item.prepTime}
            </span>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-[10px] text-yellow-400/50 hover:text-yellow-400 transition-colors tracking-[0.1em] uppercase font-light"
          >
            Order Now
            <FaArrowRight className="text-[8px]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * ----------------------------------------------------------------------------
 * SUB-COMPONENT: CategoryFilter
 * ----------------------------------------------------------------------------
 * Animated category filter buttons with gold accent and hover effects
 */

const CategoryFilter = ({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: typeof CATEGORIES[0];
  isActive: boolean;
  onClick: () => void;
}): JSX.Element => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-300 ${
        isActive
          ? `bg-gradient-to-r ${category.color} text-black shadow-lg shadow-yellow-600/30`
          : "bg-black/30 backdrop-blur-sm border border-yellow-600/20 text-white/60 hover:border-yellow-400/50 hover:text-white"
      }`}
    >
      <span className="text-sm">{category.icon}</span>
      <span className="text-xs tracking-[0.1em] font-light">
        {category.name}
      </span>
      
      {isActive && (
        <motion.span
          layoutId="activeCategory"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-px bg-gradient-to-r from-yellow-500 to-yellow-300"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: MenuPage
 * ----------------------------------------------------------------------------
 * The complete Art Deco menu page with filtering, search, and
 * premium dish presentation.
 *
 * @returns {JSX.Element} The fully animated menu page
 */

export default function MenuPage(): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  /**
   * Filter menu items based on search query and selected category
   */
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                           item.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

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
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          {/* Crown decoration */}
          <FaCrown className="text-yellow-500/20 text-3xl mx-auto mb-3" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.2em]">
            <span className="text-white/80">CULINARY</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300">
              COLLECTION
            </span>
          </h1>
          
          <DecorativeDivider />
          
          <p className="mt-4 text-sm text-yellow-400/40 tracking-[0.3em] uppercase font-light">
            ★ Michelin Guide 2026 ★
          </p>
        </motion.div>

        {/* --- Filters --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        >
          {/* Search */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400/30 text-sm" />
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full px-12 py-3 bg-black/40 backdrop-blur-sm border border-yellow-600/20 rounded-full text-white/80 placeholder:text-gray-500 text-sm tracking-wide focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-600/20 transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <GiKnifeFork className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400/20 text-sm" />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <CategoryFilter
                key={cat.name}
                category={cat}
                isActive={selectedCategory === cat.name}
                onClick={() => setSelectedCategory(cat.name)}
              />
            ))}
          </div>
        </motion.div>

        {/* --- Results Count --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between mb-8 px-1"
        >
          <div className="flex items-center gap-2">
            <GiSpoon className="text-yellow-400/20 text-sm" />
            <span className="text-xs text-yellow-400/30 tracking-[0.15em] uppercase font-light">
              {filteredItems.length} dishes available
            </span>
            <GiKnifeFork className="text-yellow-400/20 text-sm" />
          </div>
          {selectedCategory !== "All" && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedCategory("All")}
              className="text-[10px] text-yellow-400/40 hover:text-yellow-400 transition-colors tracking-[0.1em] uppercase font-light"
            >
              Clear filter ✕
            </motion.button>
          )}
        </motion.div>

        {/* --- Menu Grid --- */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="inline-block p-8 rounded-full border border-yellow-600/10 bg-black/30 backdrop-blur-sm mb-4">
                <GiCookingPot className="text-yellow-400/20 text-5xl" />
              </div>
              <p className="text-yellow-400/30 text-lg font-light tracking-[0.1em]">
                No dishes found
              </p>
              <p className="text-gray-500 text-sm font-light mt-1">
                Try adjusting your search or filter
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Bottom Decoration --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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