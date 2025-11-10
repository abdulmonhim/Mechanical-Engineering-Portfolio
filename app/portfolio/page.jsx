"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Portfolio() {
  const categories = [
    { name: "CAD Models", path: "/portfolio/cad", color: "from-blue-500 to-blue-700" },
    { name: "FEA Analysis", path: "/portfolio/fea", color: "from-purple-500 to-purple-700" },
    { name: "CFD Simulations", path: "/portfolio/cfd", color: "from-green-500 to-green-700" },
    { name: "MATLAB / Programming", path: "/portfolio/programming", color: "from-red-500 to-red-700" },
  ];

  return (
    <div className="min-h-screen bg-black-50 py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Link href={cat.path}>
              <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-10 text-white text-center cursor-pointer shadow-lg hover:scale-105 transition`}>
                <h2 className="text-2xl font-semibold">{cat.name}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
