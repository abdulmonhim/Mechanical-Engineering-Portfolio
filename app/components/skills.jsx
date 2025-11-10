"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Layers, Wind } from "lucide-react";

const skills = [
  {
    name: "CAD Design",
    description: "3D modeling and product design using SolidWorks, Fusion 360, and AutoCAD.",
    icon: <Wrench className="w-8 h-8 text-brand fill-primary" />,
  },
  {
    name: "FEA Simulation",
    description: "Structural, thermal, and stress analysis with ANSYS and SolidWorks Simulation.",
    icon: <Layers className="w-8 h-8 text-brand fill-primary" />,
  },
  {
    name: "CFD Analysis",
    description: "Fluid flow and aerodynamics simulations for automotive and aerospace projects.",
    icon: <Wind className="w-8 h-8 text-brand fill-primary" />,
  },
  {
    name: "Programming",
    description: "Python & MATLAB for automation, data analysis, and custom engineering tools.",
    icon: <Cpu className="w-8 h-8 text-brand  fill-primary" />,
  },
];

export default function SkillsPage() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand"
      >
        Skills
      </motion.h1>

      {/* Skills Grid */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            <p className="mt-3 text-gray-600 text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
