"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// const programmingProjects = [
//   { slug: "matlab-ode-solver", title: "MATLAB ODE Solver", img: "/prog1.jpg" },
//   { slug: "python-automation", title: "Python Automation for CAD", img: "/prog2.jpg" },
//   { slug: "signal-processing", title: "MATLAB Signal Processing", img: "/prog3.jpg" },
// ];

  const programmingProjects = [
      { 
        slug: "matlab-ode-solver",
         title: "MATLAB ODE Solver",
          img: "/prog1.jpg" 
        },
  { 
    slug: "python-automation",
     title: "Python Automation for CAD",
      img: "/prog2.jpg" 
    },
    {
      slug: "vibration-analysis",
      title: "Vibration Analysis of a Mass-Spring-Damper System",
      img: "/vibration.png",
    },
    {
      slug: "heat-conduction",
      title: "Heat Conduction in a Rod (1D Heat Equation)",
      img: "/heat.png",
    },
    {
      slug: "projectile-motion",
      title: "Projectile Motion with Drag",
      img: "/projectile.png",
    },
    {
      slug: "plate-stress",
      title: "Plate Stress Distribution (2D FEA Approximation)",
      img: "/plate.png",
    },
    {
      slug: "fluid-flow",
      title: "Fluid Flow in a Pipe",
      img: "/pipe.png",
    },
    {
      slug: "four-bar",
      title: "Dynamic Simulation of a 4-Bar Mechanism",
      img: "/fourbar.png",
    },
    {
      slug: "numerical-methods",
      title: "Numerical Methods for Mechanical Systems",
      img: "/numerical.png",
    },
  ];


export default function ProgrammingProjects() {
  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand">
        MATLAB / Programming Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programmingProjects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Link href={`/portfolio/programming/${p.slug}`}>
              <div className="bg-black rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition cursor-pointer">
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

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function ProgrammingPortfolioPage() {
//   const projects = [
//     { id: "vibration-analysis", title: "1. Vibration Analysis of a Mass-Spring-Damper System" },
//     { id: "heat-conduction", title: "2. Heat Conduction in a Rod (1D Heat Equation)" },
//     { id: "projectile-motion", title: "3. Projectile Motion with Drag" },
//     { id: "plate-stress", title: "4. Plate Stress Distribution (2D FEA Approximation)" },
//     { id: "fluid-flow", title: "5. Fluid Flow in a Pipe" },
//     { id: "four-bar", title: "6. Dynamic Simulation of a 4-Bar Mechanism" },
//     { id: "numerical-methods", title: "7. Numerical Methods for Mechanical Systems" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-8 py-20">
//       <motion.h1
//         className="text-5xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         MATLAB / Python / C++ Projects
//       </motion.h1>

//       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-700 transition"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
//             <p className="text-gray-300 mb-4">
//               {`Implemented using MATLAB, Python, and C++ for mechanical simulations.`}
//             </p>
//             <Link
//               href={`/portfolio/programming/${project.id}`}
//               className="text-blue-400 hover:text-blue-300 font-medium"
//             >
//               View Details →
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function ProgrammingPortfolioPage() {
//   const projects = [
//     {
//       slug: "vibration-analysis",
//       title: "Vibration Analysis of a Mass-Spring-Damper System",
//       image: "/images/projects/vibration.png",
//     },
//     {
//       slug: "heat-conduction",
//       title: "Heat Conduction in a Rod (1D Heat Equation)",
//       image: "/images/projects/heat.png",
//     },
//     {
//       slug: "projectile-motion",
//       title: "Projectile Motion with Drag",
//       image: "/images/projects/projectile.png",
//     },
//     {
//       slug: "plate-stress",
//       title: "Plate Stress Distribution (2D FEA Approximation)",
//       image: "/images/projects/plate.png",
//     },
//     {
//       slug: "fluid-flow",
//       title: "Fluid Flow in a Pipe",
//       image: "/images/projects/pipe.png",
//     },
//     {
//       slug: "four-bar",
//       title: "Dynamic Simulation of a 4-Bar Mechanism",
//       image: "/images/projects/fourbar.png",
//     },
//     {
//       slug: "numerical-methods",
//       title: "Numerical Methods for Mechanical Systems",
//       image: "/images/projects/numerical.png",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-8 py-20">
//       <motion.h1
//         className="text-5xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         MATLAB / Python / C++ Projects
//       </motion.h1>

//       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.slug}
//             className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gray-700 transition overflow-hidden"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
//               <p className="text-gray-300 mb-4">
//                 Implemented using MATLAB, Python, and C++ for mechanical
//                 simulations.
//               </p>
//               <Link
//                 href={`/portfolio/programming/${project.slug}`}
//                 className="text-blue-400 hover:text-blue-300 font-medium"
//               >
//                 View Details →
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
