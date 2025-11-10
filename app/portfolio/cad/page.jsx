"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const cadProjects = [
  { slug: "engine-model", title: "Engine CAD Model", img: "/engine.png" },
  { slug: "gearbox-design", title: "Gearbox Assembly", img: "/gearbox.png" },
];

export default function CADPortfolio() {
  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <h1 className="text-3xl font-bold text-center mb-12">CAD Models</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {cadProjects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Link href={`/portfolio/cad/${p.slug}`}>
              <div className="bg-black rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
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
