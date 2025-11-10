"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Box,
  GitBranch,
  BarChart2,
  Download,
  Search,
} from "lucide-react";

// Note: This component uses TailwindCSS (utility classes) and Framer Motion.
// It also references shadcn/ui style components as optional — you can replace them
// with your own design system. Drop this file into a React app that has Tailwind
// configured (e.g., create-react-app + Tailwind or Next.js + Tailwind).

export default function SkillsPage() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const skills = [
    { id: 1, name: "SolidWorks", cat: "CAD", level: 92, tags: ["CAD", "3D"] },
    { id: 2, name: "Fusion 360", cat: "CAD", level: 88, tags: ["CAD", "Parametric"] },
    { id: 3, name: "ANSYS (Static FEA)", cat: "FEA", level: 90, tags: ["FEA", "Static"] },
    { id: 4, name: "Abaqus", cat: "FEA", level: 78, tags: ["FEA"] },
    { id: 5, name: "OpenFOAM", cat: "CFD", level: 75, tags: ["CFD"] },
    { id: 6, name: "Fluent", cat: "CFD", level: 82, tags: ["CFD"] },
    { id: 7, name: "Python (NumPy, pyBullet)", cat: "Scripting", level: 89, tags: ["Python", "Automation"] },
    { id: 8, name: "MATLAB / Simulink", cat: "Scripting", level: 85, tags: ["Math"] },
    { id: 9, name: "FEA Workflow", cat: "Process", level: 90, tags: ["Analysis", "Mesh"] },
    { id: 10, name: "CFD Workflow", cat: "Process", level: 86, tags: ["Mesh", "Solver"] },
  ];

  const projects = [
    {
      id: "p1",
      title: "Supersonic Fighter Body CFD",
      desc: "Full-aircraft external aerodynamics study (RANS + Schlieren visualizations).",
      tags: ["CFD", "Aerospace"],
    },
    {
      id: "p2",
      title: "Intake–Nozzle Propulsion Interaction",
      desc: "Inlet distortion and afterburner plume integration study with thrust vectoring.",
      tags: ["CFD", "Propulsion"],
    },
    {
      id: "p3",
      title: "Lightweight Bracket (Topology Opt)",
      desc: "Topology optimization + static FEA to reduce mass while meeting constraints.",
      tags: ["FEA", "Optimization"],
    },
    {
      id: "p4",
      title: "Intake Manifold Transient Flow",
      desc: "Transient CFD capturing runner pulsations and mass flow uniformity.",
      tags: ["CFD", "ICE"],
    },
  ];

  const categories = ["all", "CAD", "FEA", "CFD", "Scripting", "Process"];

  const filteredSkills = skills.filter((s) => (filter === "all" ? true : s.cat === filter) && s.name.toLowerCase().includes(query.toLowerCase()));
  const filteredProjects = projects.filter(
    (p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.tags.join(" ").toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 p-6">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 shadow-lg">
            <Cpu className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Mechanical Design — Skills</h1>
            <p className="text-sm text-slate-600">Portfolio & capabilities — CAD · FEA · CFD · Simulation · Automation</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm hover:scale-102 transition-transform">
            <Download size={16} />
            <span className="text-sm font-medium">Download CV</span>
          </button>

          <div className="rounded-lg bg-white p-2 border border-slate-100 shadow-sm">
            <BarChart2 />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: skills & filters */}
        <section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Skills & Proficiency</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search skills or projects..."
                  className="w-56 md:w-80 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <Search className="absolute right-2 top-2 text-slate-400" size={16} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${filter === c ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-700 border-slate-200"}`}
              >
                {c === "all" ? "All" : c}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {filteredSkills.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="p-4 rounded-xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="text-xs text-slate-500">{s.tags.join(" • ")}</p>
                  </div>
                  <div className="text-sm text-slate-500">{s.level}%</div>
                </div>

                <div className="mt-3">
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>

                  <div className="mt-2 text-[12px] text-slate-400">Proficiency</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Right column: projects & highlights */}
        <aside className="space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">Featured Projects</h3>
            <p className="text-sm text-slate-500 mt-1">Select case studies showing end-to-end simulation & design.</p>

            <div className="mt-4 grid grid-cols-1 gap-3">
              {filteredProjects.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className="p-3 rounded-lg border border-slate-100 bg-gradient-to-br from-white to-slate-50 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50">
                      <Box className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{p.title}</h4>
                      <p className="text-sm text-slate-500">{p.desc}</p>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-lg px-4 py-2 bg-indigo-600 text-white font-semibold">View Full Case Studies</button>
              <button className="rounded-lg px-4 py-2 border border-slate-200">Contact</button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">Tools & Workflow</h3>
            <p className="text-sm text-slate-500 mt-1">Typical stack used in projects</p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> CAD: SolidWorks / Fusion 360
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> FEA: ANSYS / Abaqus
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> CFD: Fluent / OpenFOAM
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-400" /> Scripting: Python / MATLAB
              </li>
            </ul>

            <div className="mt-4 text-xs text-slate-400">Pro tip: include mesh studies, BC justification and validation plots in every case study.</div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">Contact & Availability</h3>
            <p className="text-sm text-slate-500 mt-1">Open to freelance & full-time roles. Available for CFD / FEA / CAD contracts.</p>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-lg px-4 py-2 bg-gradient-to-br from-indigo-600 to-blue-500 text-white">Hire Me</button>
              <button className="rounded-lg px-4 py-2 border">Schedule Call</button>
            </div>
          </div>
        </aside>
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-center text-sm text-slate-500">Made with care — mechanical design portfolio • include per-project downloads in case study pages</footer>
    </div>
  );
}
