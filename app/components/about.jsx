"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand"
      >
        About Me
      </motion.h1>

      {/* Content Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 md:h-[450px]"
        >
          <Image
            src="/hero1.png"
            alt="Profile"
            fill
            className="object-cover rounded-2xl shadow-xl border-4 border-brand/50"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            I’m a Mechanical Design Engineer
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            With expertise in{" "}
            <span className="font-semibold text-brand">
              CAD (SolidWorks, Fusion 360)
            </span>
            , FEA, and CFD simulations, I specialize in transforming ideas into
            working prototypes and optimized engineering solutions. My work
            ranges from product design to aerospace and automotive projects,
            always aiming for efficiency, durability, and innovation.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Beyond technical skills, I focus on effective collaboration,
            problem-solving, and delivering high-quality results on time. I
            believe engineering is not just about designing parts, but about
            shaping the future through creativity and precision.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-brand text-slate-600 rounded-xl shadow hover:opacity-70 transition"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-brand text-brand rounded-xl shadow hover:bg-brand hover:text-slate-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
