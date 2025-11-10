"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const cfdProjects = [
  { slug: "airfoil-simulation", title: "Airfoil Aerodynamics", img: "/cfd1.jpg" },
  { slug: "pipe-flow", title: "Pipe Flow Pressure Drop", img: "/cfd2.jpg" },
  { slug: "car-external-flow", title: "Automotive Aerodynamics", img: "/cfd3.jpg" },
];

export default function CFDProjects() {
  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand">
        CFD Simulation Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cfdProjects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Link href={`/portfolio/cfd/${p.slug}`}>
              <div className="bg-black rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition cursor-pointer">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{p.title}</h2>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
