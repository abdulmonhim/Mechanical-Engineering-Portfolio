"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const feaProjects = [
  { slug: "beam-analysis", title: "Beam Structural Analysis", img: "/beam.png" },
  { slug: "thermal-analysis", title: "Thermal Stress Simulation", img: "/thermal.png" },
  { slug: "chassis-analysis", title: "Automotive Chassis FEA", img: "/fea3.jpg" },
];

export default function FEAProjects() {
  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand">
        FEA Analysis Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {feaProjects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Link href={`/portfolio/fea/${p.slug}`}>
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
