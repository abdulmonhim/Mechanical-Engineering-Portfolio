

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Skills", href: "/skills" },
//     { name: "Services", href: "/services" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50  backdrop-blur-sm border-b border-gray-300">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-400">
//           MechPortfolio
//         </Link>
//  <nav className="hidden md:flex space-x-8 ">
//   {navLinks.map((link) => (
//     <Link
//       key={link.name}
//       href={link.href}
//       className="relative group text-gray-600 font-medium hover:text-blue-400 transition"
//     >
//       {link.name}
//       {/* Underline animation */}
//       <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-400 ease-out group-hover:w-full"></span>
//     </Link>
//   ))}
// </nav> 

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-gray-300 cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//        <AnimatePresence>
//         {isOpen && (
//           <motion.nav
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 80, damping: 20 }}
//             className="fixed w-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center space-y-8 py-4 text-2xl font-semibold text-gray-200 z-40"
//           >
//             {navLinks.map((link, index) => (
//               <motion.div
//                 key={link.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="hover:text-blue-400 transition"
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.nav>
//         )} 
//       </AnimatePresence> 
//     </header>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme to <html> when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed bg-pr-gradient   top-0 left-0 w-full z-50 backdrop-blur-sm border-b   ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
<div>
<div className="font-semibold ">Abdul Monhim</div>
<div className="text-xs text-slate-100">Mechanical Design Engineer</div>
</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8  items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group text-gray-200 dark:text-gray-100 font-medium  transition"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-400 ease-out group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 cursor-pointer transition-colors shadow"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}

        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed w-full bg-pr-gradient flex flex-col items-center justify-center space-y-8 py-4 text-2xl font-semibold text-gray-200 z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-400 transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors shadow"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Moon className="w-6 h-6 text-blue-400" />
                )}
              </button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
