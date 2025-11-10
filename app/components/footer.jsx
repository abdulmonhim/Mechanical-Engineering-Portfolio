// import Image from "next/image";

// export default function Footer() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <p className="font-sans bg-primary text-white">Footer</p>

//     </div>
//   );
// }
"use client";

import { Facebook, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white">Mechanical Design Engineer</h3>
          <p className="mt-4 text-sm leading-relaxed">
            Designing innovative mechanical systems, performing simulations,
            and delivering optimized engineering solutions for real-world challenges.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand transition">About</Link></li>
            <li><Link href="/services" className="hover:text-brand transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-brand transition">Projects</Link></li>
            <li><Link href="/skills" className="hover:text-brand transition">Skills</Link></li>
            <li><Link href="/contact" className="hover:text-brand transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
          <p className="mt-4 text-sm">Islamabad, Pakistan</p>
          <p className="text-sm">your.email@example.com</p>
          <p className="text-sm">+92 300 1234567</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" className="hover:text-brand">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-brand">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-brand">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-brand">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
}
