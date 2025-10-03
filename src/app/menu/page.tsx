"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaSearch, FaHamburger } from "react-icons/fa";
import { GiPizzaSlice, GiNoodles } from "react-icons/gi";
import { LiaHotdogSolid } from "react-icons/lia";

import Image from "next/image";

const dishes = [
  { name: "Margherita Pizza", price: "$12", category: "Pizza", img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" },
  { name: "Cheeseburger", price: "$10", category: "Burger", img: "https://img.freepik.com/free-photo/juicy-cheeseburger-rustic-wooden-board_9975-24623.jpg?semt=ais_incoming&w=740&q=80" },
  { name: "Spicy Penne Pasta", price: "$11", category: "Pasta", img: "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png" },
  { name: "Classic Hotdog", price: "$9", category: "Hotdog", img: "https://media.cnn.com/api/v1/images/stellar/prod/210826215046-hotdog-stock.jpg?q=x_3,y_98,h_1684,w_2993,c_crop/h_833,w_1480" },
];

const categories = [
  { name: "All", icon: <FaSearch /> },
  { name: "Pizza", icon: <GiPizzaSlice /> },
  { name: "Burger", icon: <FaHamburger /> },
  { name: "Pasta", icon: <GiNoodles /> },
  { name: "Hotdog", icon: <LiaHotdogSolid /> },
];

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-red-50 py-20 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-8 drop-shadow-lg">
        Our Menu
      </h1>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
        {/* Search Box */}
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search your favorite dish..."
            className="p-3 text-black pl-10 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition ${
                selectedCategory === cat.name
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-100"
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative w-full h-52">
                <Image width={1000} height={1000} src={dish.img} alt={dish.name} className="w-full h-full object-cover rounded-t-3xl" />
                <div className="absolute inset-0 bg-black/25 rounded-t-3xl transition opacity-0 hover:opacity-100 flex items-center justify-center">
                  <FaShoppingCart className="text-white text-3xl" />
                </div>
              </div>
              <div className="p-4 flex flex-col items-center gap-2">
                <h2 className="text-xl font-semibold">{dish.name}</h2>
                <p className="text-gray-600">{dish.price}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 mt-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-lg"
                >
                  <FaShoppingCart /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No dishes found.</p>
        )}
      </div>
    </div>
  );
}
