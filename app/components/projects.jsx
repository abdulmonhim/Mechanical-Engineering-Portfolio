"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Jet Engine CFD Simulation",
    category: "CFD",
    description:
      "Simulated supersonic airflow through a turbojet intake and nozzle with afterburner modeling.",
    // image: "/projects/jet-engine.jpg",
    image: "/Project1.png",
    link: "/projects/jet-engine",
  },
  {
    title: "Automotive Suspension FEA",
    category: "FEA",
    description:
      "Stress and durability analysis of an independent suspension system using ANSYS.",
    // image: "/projects/suspension.jpg",
    image: "/Project2.png",
    link: "/projects/suspension",
  },
  {
    title: "Mechanical Arm CAD Design",
    category: "CAD",
    description:
      "Designed and optimized a robotic arm for pick-and-place operations in Fusion 360.",
    // image: "/projects/robotic-arm.jpg",
    image: "/Project3.png",
    link: "/projects/robotic-arm",
  },
  {
    title: "Aerospace Wing Optimization",
    category: "Aerospace",
    description:
      "Parametric CAD + CFD study to optimize lift-to-drag ratio for UAV wings.",
    // image: "/projects/wing.jpg",
    image: "/Project4.png",
    link: "/projects/wing",
  },
];

export default function Projects() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand"
      >
        Projects
      </motion.h1>

      {/* Project Grid */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            {/* Project Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center text-white p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <li className="mt-8 bg-brand text-black rounded-xl text-center mx-auto bg-gray-100 opacity-50 w-35 p-2 shadow hover:opacity-95 transition ease-in cursor-pointer list-none" >
         <a href="./portfolio" className="inline-block bg-brand text-black rounded-xl" >View Details</a> 
        </li>
            </div>

            {/* Footer Tag */}
            <div className="absolute top-4 left-4 text-gray-700 bg-white/90 text-brand text-xs px-3 py-1 rounded-full shadow">
              {project.category}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
