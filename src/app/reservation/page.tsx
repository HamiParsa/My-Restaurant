/**
 * ----------------------------------------------------------------------------
 * RESERVATION FORM - Art Deco (Simple & Clean)
 * ----------------------------------------------------------------------------
 * A clean, minimal reservation form with gold-black Art Deco aesthetics.
 * Just essential fields with premium look.
 *
 * @page
 * @returns {JSX.Element} Clean Art Deco reservation form
 */

"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaClock, 
  FaUsers,
  FaCheckCircle,
  FaPhone
} from "react-icons/fa";
import { GiKnifeFork, GiSpoon } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdTableBar } from "react-icons/md";

/**
 * ----------------------------------------------------------------------------
 * MAIN COMPONENT: ReservationPage
 * ----------------------------------------------------------------------------
 * Clean Art Deco reservation form with minimal fields
 */

export default function ReservationPage(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
  ];

  /**
   * Handle input change
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  /**
   * Validate form
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Guests required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle submit
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: ''
        });
      }, 2500);
    }, 1200);
  };

  // --- Success State ---
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f0a] to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center bg-gradient-to-br from-white/5 to-white/2 border border-yellow-600/20 rounded-2xl p-10 backdrop-blur-sm max-w-sm w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 shadow-2xl shadow-yellow-600/30 mb-5"
          >
            <FaCheckCircle className="text-2xl text-black" />
          </motion.div>
          
          <h2 className="text-xl font-serif text-white/90 tracking-[0.1em]">
            RESERVATION CONFIRMED
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-600/30" />
            <span className="text-[10px] text-yellow-400/30 tracking-[0.2em] uppercase font-light">
              Thank You
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-600/30" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center p-4">
      {/* ------------------------------------------------------------------------
          BACKGROUND
          ------------------------------------------------------------------------ */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f0a] to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />
        
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
          FORM
          ------------------------------------------------------------------------ */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <GiKnifeFork className="text-yellow-500/30 text-lg" />
            <span className="text-[10px] text-yellow-400/30 tracking-[0.3em] uppercase font-light">
              Reserve Your Table
            </span>
            <GiSpoon className="text-yellow-500/30 text-lg" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white/90 tracking-[0.15em]">
            BOOK A TABLE
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-yellow-600/30" />
            <IoDiamond className="text-yellow-500/30 text-xs" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-600/30" />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-yellow-600/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative">
            
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-yellow-500/20" />
            <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-yellow-500/20" />
            <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-yellow-500/20" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-yellow-500/20" />

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3.5 text-yellow-400/30 text-sm" />
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-sm border rounded-xl text-white/90 placeholder:text-gray-500 transition-all duration-300 ${
                  errors.name 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-yellow-600/20 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-600/20 focus:outline-none'
                }`}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[10px] text-red-400/60 mt-1 ml-3"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-yellow-400/30 text-sm" />
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-sm border rounded-xl text-white/90 placeholder:text-gray-500 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-yellow-600/20 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-600/20 focus:outline-none'
                }`}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[10px] text-red-400/60 mt-1 ml-3"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-3.5 text-yellow-400/30 text-sm" />
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-sm border border-yellow-600/20 rounded-xl text-white/90 placeholder:text-gray-500 transition-all duration-300 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-600/20 focus:outline-none"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              {/* Date */}
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-3.5 text-yellow-400/30 text-sm" />
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-3 py-3 bg-black/40 backdrop-blur-sm border rounded-xl text-white/90 transition-all duration-300 ${
                    errors.date 
                      ? 'border-red-500/50 ring-2 ring-red-500/20' 
                      : 'border-yellow-600/20 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-600/20 focus:outline-none'
                  }`}
                />
                <AnimatePresence>
                  {errors.date && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[10px] text-red-400/60 mt-1 ml-1"
                    >
                      {errors.date}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Time */}
              <div className="relative">
                <FaClock className="absolute left-3 top-3.5 text-yellow-400/30 text-sm" />
                <select
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full pl-9 pr-3 py-3 bg-black/40 backdrop-blur-sm border rounded-xl text-white/90 transition-all duration-300 appearance-none ${
                    errors.time 
                      ? 'border-red-500/50 ring-2 ring-red-500/20' 
                      : 'border-yellow-600/20 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-600/20 focus:outline-none'
                  }`}
                >
                  <option value="" className="bg-black text-gray-500">Time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-black text-white/90">{t}</option>
                  ))}
                </select>
                <AnimatePresence>
                  {errors.time && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[10px] text-red-400/60 mt-1 ml-1"
                    >
                      {errors.time}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <FaUsers className="absolute left-3 top-3.5 text-yellow-400/30 text-sm" />
              <select
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-black/40 backdrop-blur-sm border rounded-xl text-white/90 transition-all duration-300 appearance-none ${
                  errors.guests 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-yellow-600/20 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-600/20 focus:outline-none'
                }`}
              >
                <option value="" className="bg-black text-gray-500">Number of Guests</option>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                  <option key={n} value={n} className="bg-black text-white/90">
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
              <AnimatePresence>
                {errors.guests && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-[10px] text-red-400/60 mt-1 ml-3"
                  >
                    {errors.guests}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-medium tracking-[0.15em] rounded-xl shadow-2xl shadow-yellow-600/30 overflow-hidden transition-all duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-yellow-600/50'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>
                    <MdTableBar className="text-lg" />
                    RESERVE NOW
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </motion.form>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-4"
        >
          <span className="text-[8px] text-yellow-400/20 tracking-[0.2em] uppercase font-light">
            ★ Michelin Guide 2026
          </span>
          <span className="w-px h-3 bg-yellow-600/10" />
          <span className="text-[8px] text-yellow-400/20 tracking-[0.2em] uppercase font-light">
            ★ 4.9 Rating
          </span>
        </motion.div>
      </div>
    </div>
  );
}