"use client";
import { useParams } from "next/navigation";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const projectDetails = {
        "matlab-ode-solver": {
      title: "MATLAB ODE Solver",
      description:
        "Developed a MATLAB script to solve ordinary differential equations (ODEs) using built-in solvers like ode45. Verified results with analytical solutions.",
      img: "/prog1.jpg",
      math: "\\frac{dy}{dt} = f(t, y), \\quad y(t_0) = y_0",
      code: `
% Example MATLAB code
f = @(t,y) -2*y + t; 
[t, y] = ode45(f, [0 5], 1);
plot(t,y);
title('ODE Solution using ode45');
      `,
    },
        "python-automation": {
      title: "Python Automation for CAD",
      description:
        "Automated CAD workflows using Python and the Fusion 360 API. Generated parametric models programmatically.",
      img: "/prog2.jpg",
      math: "V = L \\times W \\times H", // parametric CAD formula
      code: `
# Example Python code
import adsk.core, adsk.fusion, adsk.cam, traceback
# Automate a simple extrusion
# (placeholder for Fusion 360 API usage)
      `,
    },
  "vibration-analysis": {
    title: "Vibration Analysis of a Mass-Spring-Damper System",
    description:
      "Simulated using MATLAB, Python (SciPy), and C++ (ODE solvers). This project models free and forced vibrations using numerical integration (Runge-Kutta, ODE45 equivalent).",
    // equations: [
    //   "m * d²x/dt² + c * dx/dt + kx = F(t)",
    //   "ω_n = sqrt(k/m), ζ = c / (2 * sqrt(mk))",
    // ],
    img: "/images/projects/vibration.png",
     math: "\\frac{dy}{dt} = f(t, y), \\quad y(t_0) = y_0",
      code: `
% Example MATLAB code
f = @(t,y) -2*y + t; 
[t, y] = ode45(f, [0 5], 1);
plot(t,y);
title('ODE Solution using ode45');
      `,
  },
  "heat-conduction": {
    title: "Heat Conduction in a Rod (1D Heat Equation)",
    description:
      "Implemented with Finite Difference Method (FDM) in MATLAB, Python (NumPy), and C++. Solves transient heat conduction in a rod numerically.",
    // equations: ["∂T/∂t = α ∂²T/∂x²"],
    image: "/images/projects/heat.png",
      math: "X(k) = \\sum_{n=0}^{N-1} x(n) e^{-j 2 \\pi kn/N}",
      code: `
% Example FFT in MATLAB
Fs = 1000; 
t = 0:1/Fs:1-1/Fs;
x = sin(2*pi*50*t) + sin(2*pi*120*t);
Y = fft(x);
plot(abs(Y));
title('FFT of Signal');
      `,
  },
  "projectile-motion": {
    title: "Projectile Motion with Drag",
    description:
      "Projectile trajectory simulation with air resistance using MATLAB ODE solvers, Python SciPy, and C++ custom integrators.",
    equations: ["m * d²x/dt² = -c_d * v", "m * d²y/dt² = -mg - c_d * v"],
    image: "/images/projects/projectile.png",
  },
  "plate-stress": {
    title: "Plate Stress Distribution (2D FEA Approximation)",
    description:
      "FEA-style stress analysis using stiffness matrices. Implemented in MATLAB, Python (NumPy), and C++ (Eigen).",
    equations: ["[K]{u} = {F}"],
    image: "/images/projects/plate.png",
  },
  "fluid-flow": {
    title: "Fluid Flow in a Pipe",
    description:
      "Velocity profile simulation using MATLAB PDE solver, Python (FEniCS), and C++ CFD libraries. Compared against Hagen–Poiseuille theory.",
    equations: ["ΔP = (8μLQ) / (πR⁴)"],
    image: "/images/projects/pipe.png",
  },
  "four-bar": {
    title: "Dynamic Simulation of a 4-Bar Mechanism",
    description:
      "Simulated kinematics of a 4-bar linkage. MATLAB (Simulink), Python (SymPy), and C++ ODE solvers were used for velocities and accelerations.",
    equations: ["Loop closure equations", "dx/dt, d²x/dt² relations"],
    image: "/images/projects/fourbar.png",
  },
  "numerical-methods": {
    title: "Numerical Methods for Mechanical Systems",
    description:
      "Collection of numerical methods for mechanical engineering problems including stiffness matrices, root finding, and integration. Implemented across MATLAB, Python, and C++.",
    equations: ["Newton–Raphson", "Trapezoidal Integration"],
    image: "/images/projects/numerical.png",
  },
};


export default function ProgrammingProjectDetail() {
  const { slug } = useParams();
    
  const project = projectDetails[slug];
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
        <div className="bg-gray-700 p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Formula</h2>
          <BlockMath>{project.math}</BlockMath>
        </div>

        {/* Code Example */}
        {project.code && (
          <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-xl shadow-md overflow-x-auto">
            <pre>{project.code}</pre>
          </div>
        )}
      </div>
    </div>
  );
}


