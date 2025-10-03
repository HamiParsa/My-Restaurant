"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import Link from "next/link";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  "https://img.freepik.com/free-photo/juicy-cheeseburger-rustic-wooden-board_9975-24623.jpg?semt=ais_incoming&w=740&q=80",
  "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
  "https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=x_3,y_98,h_1684,w_2993,c_crop/h_833,w_1480",
];

export default function Home() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-28 pb-16 relative">
        {/* Text */}
        <div className="text-center mb-10 px-4 relative z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500 drop-shadow-xl">
            Welcome to MyRestaurant
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black drop-shadow-lg">
            Experience the best flavors and unforgettable meals
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition"
              >
                <FaBookOpen /> View Menu
              </motion.button>
            </Link>
            <Link href='/reservation'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-black gap-2 px-6 py-3 border border-gray-200 rounded-xl shadow-lg hover:bg-gray-100 transition"
              >
                <MdTableBar /> Book a Table
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Main Image */}
        <div className="w-[90vw] max-w-3xl h-[400px] md:h-[500px] relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl"></div>{" "}
          {/* Overlay تیره */}
          <AnimatePresence mode="wait">
            <motion.img
              key={images[selected]}
              src={images[selected]}
              alt="food"
              className="w-full h-full object-cover rounded-3xl relative z-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center relative z-20">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setSelected(i)}
              className={`w-20 h-16 md:w-28 md:h-20 object-cover rounded-lg cursor-pointer border-4 transition-all ${
                selected === i
                  ? "border-red-600 scale-105 shadow-lg"
                  : "border-transparent"
              }`}
              whileHover={{
                scale: 1.15,
                rotate: 2,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
