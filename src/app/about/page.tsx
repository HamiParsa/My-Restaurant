"use client";
import { motion } from "framer-motion";
import { FaLeaf, FaClock, FaSmile } from "react-icons/fa";
import Link from "next/link";

const features = [
  { title: "Fresh Ingredients", icon: <FaLeaf />, description: "We use only the freshest ingredients to create our delicious meals." },
  { title: "Cozy Atmosphere", icon: <FaSmile />, description: "Enjoy a warm and welcoming environment with family and friends." },
  { title: "Fast Service", icon: <FaClock />, description: "Our staff ensures you get your food quickly without compromising quality." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-red-50 to-white py-20 px-4 md:px-16 flex flex-col items-center">
      {/* Hero Text */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-gray-700 text-center max-w-3xl text-lg md:text-xl leading-relaxed mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        At MyRestaurant, we are passionate about delivering an unforgettable dining experience. 
        Our chefs craft every dish with care and precision, using only the freshest ingredients. 
        Come and enjoy our signature meals in a cozy, welcoming atmosphere.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-red-600 text-4xl mb-4">{feat.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-gray-600">{feat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link href="/menu">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition font-semibold"
          >
            View Our Menu
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
