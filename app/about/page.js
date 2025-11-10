"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 p-8 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
      >
        About Me
      </motion.h1>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center mb-10"
      >
        <div className="w-40 h-40 md:w-52 md:h-52 relative mb-4 rounded-full overflow-hidden shadow-lg border-4 border-blue-200">
          <Image
            src="/profile.jpg" // replace with your image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-700 text-center max-w-2xl"
        >
          A dedicated <span className="font-semibold text-blue-600">Mechanical Design Engineer</span> passionate about designing, analyzing, and optimizing engineering systems with creativity and precision.
        </motion.p>
      </motion.div>

      {/* Intro Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <Card className="shadow-xl rounded-2xl bg-white">
          <CardContent className="p-6 md:p-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg leading-relaxed mb-4"
            >
              Hi! I'm a passionate <span className="font-semibold text-blue-600">Mechanical Design Engineer</span> with a strong focus on CAD, FEA, and CFD. I love bringing complex engineering concepts to life through 3D modeling, simulation, and analysis.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg leading-relaxed mb-4"
            >
              My work spans across <span className="font-semibold">aerospace, automotive, and industrial design</span>, where I create optimized, efficient, and innovative solutions. With a hands-on approach, I’ve gained expertise in tools like Fusion 360, SolidWorks, and ANSYS.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg leading-relaxed"
            >
              Outside of engineering, I enjoy problem-solving, learning new technologies, and tackling challenging projects that push the boundaries of design and performance.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Highlight Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl"
      >
        <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-blue-100 to-white p-6 text-center">
          <CardContent>
            <h3 className="text-xl font-bold text-blue-700 mb-2">CAD Expertise</h3>
            <p>Advanced 3D modeling with Fusion 360 & SolidWorks.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-blue-100 to-white p-6 text-center">
          <CardContent>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Simulation</h3>
            <p>Structural & CFD simulations using ANSYS for real-world insights.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl bg-gradient-to-br from-blue-100 to-white p-6 text-center">
          <CardContent>
            <h3 className="text-xl font-bold text-blue-700 mb-2">Innovation</h3>
            <p>Creative, optimized solutions for aerospace & automotive systems.</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}