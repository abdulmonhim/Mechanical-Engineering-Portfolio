"use client";
import { useParams } from "next/navigation";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

export default function CFDProjectDetail() {
  const { slug } = useParams();

  const projects = {
    "airfoil-simulation": {
      title: "Airfoil Aerodynamics",
      description:
        "Simulated airflow over an airfoil at various angles of attack. Extracted lift and drag coefficients and compared with theoretical predictions.",
      img: "/cfd1.jpg",
      math: "C_L = \\frac{L}{0.5 \\rho V^2 A}, \\quad C_D = \\frac{D}{0.5 \\rho V^2 A}",
    },
    "pipe-flow": {
      title: "Pipe Flow Pressure Drop",
      description:
        "Performed CFD analysis of laminar and turbulent flow inside a circular pipe. Calculated pressure drop and validated with Darcy–Weisbach equation.",
      img: "/cfd2.jpg",
      math: "\\Delta P = f \\cdot \\frac{L}{D} \\cdot \\frac{\\rho V^2}{2}",
    },
    "car-external-flow": {
      title: "Automotive Aerodynamics",
      description:
        "External flow simulation around a passenger car model to determine drag coefficient. Identified flow separation zones and optimized geometry.",
      img: "/cfd3.jpg",
      math: "C_D = \\frac{F_D}{0.5 \\rho V^2 A}",
    },
  };

  const project = projects[slug] || {};

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

        {/* Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-lg shadow-lg mb-6"
        />

        {/* Description */}
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
