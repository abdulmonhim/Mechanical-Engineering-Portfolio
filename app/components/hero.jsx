"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Texts to cycle
const texts = [
  "Mechanical Design Engineer",
  "CAD Specialist (SolidWorks, Fusion 360)",
  "FEA & CFD Simulation Expert",
  "Turning Ideas into Products 🚀",
];

// Images to cycle
const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing speed controls
  const typingSpeed = 100; // ms per letter
  const deletingSpeed = 50; // ms per letter
  const pauseTime = 10000; // ms pause when full text is shown

  // cycle through texts
  useEffect(() => {
    if (textIndex >= texts.length) return;

    if (!deleting && subIndex === texts[textIndex].length) {
      // pause after typing full text
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      // move to next text after deleting
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, textIndex]);

  return (
    <section className="mt-12 w-5/6 text-center md:text-left h-full flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-6xl mx-auto ">
      {/* Text Section */}
      <div className="flex-1 z-10">
        <motion.h1
          key={textIndex}
          className="text-4xl md:text-5xl font-bold text-brand min-h-[3rem] pr-gradient bg-clip-text text-transparent"
        >
          {texts[textIndex].substring(0, subIndex)}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <p className="mt-6 text-lg text-slate-700 dark:text-gray-200">
          Transforming complex ideas into tangible, high-performance mechanical solutions through innovative design, analysis, and simulation.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                    <a href="#portfolio" onClick={() => handleNavClick('portfolio')} className="inline-block bg-pr-gradient text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">View My Work</a>
                                    <a href="#contact" onClick={() => handleNavClick('contact')} className="inline-block bg-white  text-blue-600 dark:text-blue-400 font-semibold px-8 py-3 rounded-lg shadow-lg hover:ring-2 ring-blue-500 transition-all duration-300">Get in Touch</a>
                                </div>
      </div>

      {/* Image Section */}
      <div className="fixed inset-0 opacity-10 md:opacity-100 animate-float  md:flex-1 md:relative w-full h-full md:h-96 mt-12 md:mt-0">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === textIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={src}
              alt={`Hero ${i}`}
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
