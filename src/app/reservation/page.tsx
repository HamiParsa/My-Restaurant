"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b text-black from-red-50 to-white flex justify-center items-start pt-28 px-4 md:px-16">
      <motion.form
        className="bg-white mt-15 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-red-600 drop-shadow-lg mb-6">Book a Table</h1>

        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Date */}
        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="date"
            className="w-full p-3 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Time */}
        <div className="relative">
          <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="time"
            className="w-full p-3 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Guests */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full p-3 pl-10 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            min={1}
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition font-semibold"
        >
          Reserve Now
        </motion.button>
      </motion.form>
    </div>
  );
}
