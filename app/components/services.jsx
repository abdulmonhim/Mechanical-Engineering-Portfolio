"use client";

import { motion } from "framer-motion";
import { Cog, PenTool, Wind, Layers } from "lucide-react";

const services = [
  {
    title: "CAD Design & Modeling",
    description:
      "Professional 3D modeling and product design using SolidWorks, Fusion 360, and AutoCAD with a focus on precision and manufacturability.",
    icon: <PenTool className="w-10 h-10 text-brand" />,
  },
  {
    title: "FEA (Finite Element Analysis)",
    description:
      "Structural, thermal, and stress analysis using ANSYS and SolidWorks Simulation to ensure durability and safety of components.",
    icon: <Layers className="w-10 h-10 text-brand" />,
  },
  {
    title: "CFD (Computational Fluid Dynamics)",
    description:
      "Aerodynamic and thermal fluid simulations for aerospace, automotive, and industrial applications to optimize performance.",
    icon: <Wind className="w-10 h-10 text-brand" />,
  },
  {
    title: "Engineering Consultation",
    description:
      "Providing insights and solutions for mechanical product development, from concept to prototype and production support.",
    icon: <Cog color="light blue" className="w-10 h-10 text-brand " />,
  },
];

export default function Services() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand"
      >
        My Services
      </motion.h1>

      {/* Services Grid */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-4 text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
