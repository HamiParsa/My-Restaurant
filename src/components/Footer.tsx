// components/Footer.tsx
"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">MyRestaurant</h3>
          <p className="text-gray-400 max-w-sm">
            Experience the best flavors and unforgettable meals with us. Our passion is to provide a cozy and modern dining experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/menu" className="hover:text-red-600 transition">Menu</Link></li>
            <li><Link href="/reservation" className="hover:text-red-600 transition">Reservation</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition">About</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © 2025 MyRestaurant | All rights reserved
      </div>
    </footer>
  );
}
