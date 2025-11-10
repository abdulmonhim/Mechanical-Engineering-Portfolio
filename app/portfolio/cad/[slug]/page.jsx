"use client";
import { useParams } from "next/navigation";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default function CADProjectDetail() {
  const { slug } = useParams();

  const projects = {
    "engine-model": {
      title: "Engine CAD Model",
      description: "This is a detailed CAD model of an internal combustion engine...",
      img: "/enginexvw.png",
      math: "\\frac{dW}{dt} = T \\cdot \\omega", // Example torque equation
    },
    "gearbox-design": {
      title: "Gearbox Assembly",
      description: "Designed a gearbox system with optimized gear ratios...",
      img: "/gearboxXvw.png",
      math: "G = \\frac{N_{output}}{N_{input}}", // Gear ratio formula
    },
  };

  const project = projects[slug] || {};

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <img src={project.img} alt={project.title} className="w-full rounded-lg shadow-lg mb-6" />
        <p className="text-lg leading-relaxed mb-6">{project.description}</p>

        {/* Math Formula */}
        <div className="bg-black p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Key Formula</h2>
          <BlockMath>{project.math}</BlockMath>
        </div>
      </div>
    </div>
  );
}
