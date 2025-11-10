"use client";
import { useParams } from "next/navigation";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

export default function FEAProjectDetail() {
  const { slug } = useParams();

  const projects = {
    "beam-analysis": {
      title: "Beam Structural Analysis",
      description:
        "This project involves the finite element analysis of a simply supported beam under uniform loading. The objective was to determine displacement, stress distribution, and validate results with theoretical calculations.",
      img: "/beam.png",
      math: "\\sigma = \\frac{M y}{I}", // bending stress formula
    },
    "thermal-analysis": {
      title: "Thermal Stress Simulation",
      description:
        "Performed thermal-structural coupling to evaluate expansion and stress due to temperature rise. Simulation helps predict component failure under high-heat conditions.",
      img: "/thermal2.png",
      math: "\\sigma_{thermal} = E \\alpha \\Delta T", // thermal stress
    },
    "chassis-analysis": {
      title: "Automotive Chassis FEA",
      description:
        "Conducted structural analysis of a car chassis under static and dynamic loads. Simulation results identified high-stress zones for design optimization.",
      img: "/fea3.jpg",
      math: "\\sigma_{von\\ Mises} = \\sqrt{\\sigma_x^2 + \\sigma_y^2 - \\sigma_x \\sigma_y + 3 \\tau_{xy}^2}",
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
