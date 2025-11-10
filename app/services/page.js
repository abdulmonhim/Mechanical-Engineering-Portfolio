"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Cpu, Wind, Rocket } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 p-10 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-8"
      >
        My Services
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-2xl text-center text-lg text-gray-600 mb-12"
      >
        I offer a wide range of mechanical engineering and design services, from concept to simulation, ensuring innovation, precision, and real-world performance.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl"
      >
        {/* CAD Design */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center text-center">
            <Wrench className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">3D CAD Design</h3>
            <p className="text-gray-600">
              Detailed and optimized 3D models using Fusion 360 & SolidWorks, tailored for prototyping and manufacturing.
            </p>
          </CardContent>
        </Card>

        {/* FEA Simulation */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center text-center">
            <Cpu className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">FEA Structural Analysis</h3>
            <p className="text-gray-600">
              Advanced static, modal, and thermal simulations to validate designs under real-world conditions using ANSYS.
            </p>
          </CardContent>
        </Card>

        {/* CFD Simulation */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center text-center">
            <Wind className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">CFD Aerodynamics</h3>
            <p className="text-gray-600">
              Flow analysis and optimization of systems for aerospace, automotive, and industrial applications.
            </p>
          </CardContent>
        </Card>

        {/* Aerospace Design */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center text-center">
            <Rocket className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Aerospace & Automotive Systems</h3>
            <p className="text-gray-600">
              Specialized design and simulation for aircraft components, turbojet engines, and vehicle optimization.
            </p>
          </CardContent>
        </Card>

        {/* Product Development */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Product Development</h3>
            <p className="text-gray-600">
              End-to-end design solutions from concept sketches to manufacturable 3D models and simulation-backed validation.
            </p>
          </CardContent>
        </Card>

        {/* Consultation */}
        <Card className="shadow-lg rounded-2xl p-6 bg-white hover:shadow-2xl transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2">Engineering Consultation</h3>
            <p className="text-gray-600">
              Professional guidance on CAD workflows, simulation strategies, and optimization techniques to improve performance.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
