"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaBookOpen, FaConciergeBell, FaBars, FaTimes } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Menu", path: "/menu", icon: <FaBookOpen /> },
    { name: "Reservation", path: "/reservation", icon: <MdTableBar /> },
    { name: "About", path: "/about", icon: <FaConciergeBell /> },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 text-black bg-white/80 backdrop-blur-md shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-red-600">
        <FaUtensils /> MyRestaurant
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition ${
                pathname === link.path ? "bg-red-600 text-white shadow-lg" : "hover:text-red-600"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-red-600">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
        >
          <ul className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setMenuOpen(false)}>
                <Link
                  href={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    pathname === link.path ? "bg-red-600 text-white shadow-lg" : "hover:text-red-600"
                  }`}
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
