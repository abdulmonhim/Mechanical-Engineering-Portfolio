"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto text-gray-600">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand"
      >
        Contact Me
      </motion.h1>

      {/* Contact Info */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <Mail className="w-8 h-8 text-brand mx-auto" />
          <h3 className="mt-4 font-semibold text-gray-800">Email</h3>
          <p className="mt-2 text-gray-600">your.email@example.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <Phone className="w-8 h-8 text-brand mx-auto" />
          <h3 className="mt-4 font-semibold text-gray-800">Phone</h3>
          <p className="mt-2 text-gray-600">+92 300 1234567</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-6"
        >
          <MapPin className="w-8 h-8 text-brand mx-auto" />
          <h3 className="mt-4 font-semibold text-gray-800">Location</h3>
          <p className="mt-2 text-gray-600">Islamabad, Pakistan</p>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-brand outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-brand outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-brand outline-none"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-brand outline-none"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 bg-brand text-white rounded-xl shadow hover:opacity-90 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
