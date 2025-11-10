"use client"
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Advanced CAD Modeling Techniques",
      date: "Sept 20, 2025",
      description:
        "Explore best practices in Fusion 360 and SolidWorks to create parametric, complex mechanical designs efficiently.",
      image: "https://source.unsplash.com/800x600/?cad,engineering",
      link: "#",
    },
    {
      title: "Finite Element Analysis (FEA) in Aerospace",
      date: "Aug 10, 2025",
      description:
        "A deep dive into static structural FEA projects — stress, strain, fatigue, and optimization in aerospace applications.",
      image: "https://source.unsplash.com/800x600/?fea,aerospace",
      link: "#",
    },
    {
      title: "CFD for Turbojet Engines",
      date: "Jul 5, 2025",
      description:
        "Learn how to simulate intake flow, afterburner exhaust, and thrust vectoring using ANSYS Fluent and OpenFOAM.",
      image: "https://source.unsplash.com/800x600/?cfd,jet",
      link: "#",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences in CAD, FEA, CFD, and
            aerospace engineering.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import React, { useState, useEffect } from 'react';

// // FAKE DATA for blog posts. In a real app, you'd fetch this from a CMS or API.
// const blogPosts = [
//     {
//         id: 1,
//         title: "Optimizing Gear Ratios for High-Torque Applications",
//         date: "October 03, 2025",
//         author: "Johnathan Doe",
//         tags: ["CAD", "Transmission", "Mechanical Design"],
//         excerpt: "A deep dive into the process of selecting and optimizing gear ratios for industrial machinery. We'll explore the trade-offs between speed, torque, and efficiency using advanced simulation tools.",
//         imageUrl: "https://placehold.co/600x400/1e40af/ffffff?text=Gear+Analysis",
//         content: `
//             <p class="mb-4">In the realm of mechanical design, particularly for high-torque applications like industrial gearboxes or vehicle transmissions, the selection of gear ratios is a critical design decision. It's a delicate balance that directly impacts performance, efficiency, and the overall longevity of the system.</p>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">The Fundamentals of Gear Ratios</h3>
//             <p class="mb-4">The gear ratio is fundamentally the ratio of the number of teeth on the output gear to the number of teeth on the input gear. A ratio greater than 1 provides a mechanical advantage, increasing torque but reducing output speed. Conversely, a ratio less than 1 increases speed at the expense of torque. This fundamental principle governs every geared system.</p>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Simulation with FEA</h3>
//             <p class="mb-4">Before any metal is cut, we leverage Finite Element Analysis (FEA) to simulate the stresses and strains on each gear tooth under various load conditions. Using software like ANSYS or Abaqus, we can predict points of failure, analyze heat generation, and optimize tooth profiles for maximum durability. This virtual testing phase is invaluable, saving countless hours and significant cost in physical prototyping.</p>
//             <img src="https://placehold.co/600x400/4f46e5/ffffff?text=FEA+Simulation" alt="FEA Simulation" class="rounded-lg my-4 w-full h-auto"/>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Material Selection and Manufacturing</h3>
//             <p>The theoretical design is only as good as the materials and manufacturing processes used. For high-torque gears, hardened alloy steels like AISI 4140 or 4340 are common choices due to their excellent strength and wear resistance. Precision manufacturing through CNC hobbing and grinding ensures tight tolerances and smooth, efficient operation.</p>
//         `
//     },
//     {
//         id: 2,
//         title: "The Rise of Generative Design in Component Manufacturing",
//         date: "September 15, 2025",
//         author: "Johnathan Doe",
//         tags: ["Generative Design", "3D Printing", "Fusion 360"],
//         excerpt: "Generative design is revolutionizing how we approach component creation. By defining constraints and letting algorithms explore solutions, we can create lighter, stronger, and more efficient parts.",
//         imageUrl: "https://placehold.co/600x400/166534/ffffff?text=Generative+Design",
//         content: `
//             <p class="mb-4">Generative design represents a paradigm shift in the engineering design process. Instead of a human designer creating a component based on experience and intuition, the designer sets the goals and constraints, and the software explores thousands of potential solutions to find the best fit.</p>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">How It Works</h3>
//             <p class="mb-4">The process begins by defining the problem. We specify functional requirements, material types, manufacturing methods (e.g., 3D printing, 5-axis milling), and keep-out zones. The AI-powered algorithm then generates designs that meet these criteria, often resulting in organic, lattice-like structures that are impossible to conceive with traditional methods.</p>
//             <img src="https://placehold.co/600x400/854d0e/ffffff?text=Algorithm+Output" alt="Algorithm Output" class="rounded-lg my-4 w-full h-auto"/>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Benefits and Applications</h3>
//             <p>The primary benefits are part consolidation and weight reduction. A complex assembly of 10 parts might be redesigned into a single, stronger, and lighter component. This is particularly valuable in the aerospace and automotive industries where every gram counts. The resulting components are not only lighter but often stiffer and more durable than their traditionally designed counterparts.</p>
//         `
//     },
//     {
//         id: 3,
//         title: "Navigating GD&T for Complex Assemblies",
//         date: "August 28, 2025",
//         author: "Johnathan Doe",
//         tags: ["GD&T", "Manufacturing", "Quality Control"],
//         excerpt: "Geometric Dimensioning and Tolerancing (GD&T) is the language of modern manufacturing. This post breaks down key concepts and their application in ensuring part interchangeability.",
//         imageUrl: "https://placehold.co/600x400/7f1d1d/ffffff?text=GD&T+Blueprint",
//         content: `
//             <p class="mb-4">Geometric Dimensioning and Tolerancing (GD&T) is a symbolic language used on engineering drawings and 3D models to explicitly describe nominal geometry and its allowable variation. It tells the manufacturing team and inspectors precisely what is important about a part and how to check it.</p>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Why GD&T is Crucial</h3>
//             <p class="mb-4">Without GD&T, traditional plus/minus tolerancing can be ambiguous, leading to interpretation errors, incorrect parts, and assembly issues. GD&T clarifies design intent, ensuring that parts from different suppliers or manufacturing runs will fit together seamlessly. This is the key to mass production and interchangeability.</p>
//             <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Key Concepts: Datums and Feature Control Frames</h3>
//             <p>The foundation of GD&T is the datum reference frame, a theoretical framework of three perfect, mutually perpendicular planes. All tolerances are specified relative to this frame. The feature control frame is the primary tool for communicating a tolerance. It contains the geometric characteristic symbol (like flatness or position), the tolerance value, and the relevant datum references.</p>
//         `
//     }
// ];

// // Individual Blog Post Card Component
// const BlogPostCard = ({ post, onSelectPost }) => {
//     return (
//         <div 
//             className="bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden group border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-400/50 transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-teal-400/10 hover:-translate-y-2"
//             onClick={() => onSelectPost(post)}
//         >
//             <div className="overflow-hidden">
//                 <img className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={post.imageUrl} alt={post.title} />
//             </div>
//             <div className="p-6">
//                 <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
//                     <time>{post.date}</time>
//                 </div>
//                 <h3 className="mt-2 text-xl font-bold text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{post.title}</h3>
//                 <p className="mt-2 text-slate-600 dark:text-slate-300 text-base leading-relaxed">{post.excerpt}</p>
//                 <div className="mt-4">
//                      <div className="inline-flex items-center text-teal-600 dark:text-teal-400 font-semibold transition-colors duration-200 cursor-pointer">
//                         Read More 
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Full Blog Post Detail View
// const BlogPostDetail = ({ post, onBack }) => {
//     return (
//         <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 animate-fade-in-up">
//             <button
//                 onClick={onBack}
//                 className="mb-8 group flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-800 dark:hover:text-teal-200 transition-colors duration-200"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
//                 Back to Blog
//             </button>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">{post.title}</h1>
//             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
//                  <div className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
//                     <span>{post.author}</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
//                     <time>{post.date}</time>
//                 </div>
//             </div>
//             <div className="overflow-hidden rounded-xl mb-8 shadow-md">
//                 <img className="w-full h-auto max-h-[500px] object-cover" src={post.imageUrl} alt={post.title} />
//             </div>
//             <div
//                 className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 prose-h3:text-slate-800 dark:prose-h3:text-slate-200 prose-p:leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: post.content }}
//             />
//              <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
//                 <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Tags</h4>
//                 <div className="flex flex-wrap gap-2">
//                     {post.tags.map(tag => (
//                         <span key={tag} className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full dark:bg-teal-900/50 dark:text-teal-300">{tag}</span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };


// // Main App Component
// export default function App() {
//     const [selectedPost, setSelectedPost] = useState(null);

//     // Scroll to top when a post is selected or when returning to the list
//     useEffect(() => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }, [selectedPost]);


//     return (
//         <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-slate-800 dark:text-slate-200">
//              <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
//                 body { font-family: 'Inter', sans-serif; }
//                 .prose strong { color: inherit; }

//                 @keyframes fade-in-up {
//                     from { opacity: 0; transform: translateY(20px); }
//                     to { opacity: 1; transform: translateY(0); }
//                 }
//                 .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
                
//                 .animate-header {
//                     animation: fade-in-up 0.6s ease-out forwards;
//                 }
                
//                 .animate-card {
//                     animation: fade-in-up 0.6s ease-out forwards;
//                 }
                
//                 .bg-gradient-radial-light {
//                     background-image: radial-gradient(circle at top, #ffffff, #f0f4f8);
//                 }
                
//                 .dark .bg-gradient-radial-dark {
//                     background-image: radial-gradient(circle at top, #1e293b, #0f172a);
//                 }

//             `}</style>
//             <div className="min-h-screen bg-gradient-radial-light dark:bg-gradient-radial-dark">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
//                     {selectedPost ? (
//                         <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
//                     ) : (
//                         <>
//                             <header className="text-center mb-16 animate-header">
//                                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
//                                     Engineer's Log
//                                 </h1>
//                                 <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
//                                     Insights, analyses, and deep dives into the world of mechanical design and innovation.
//                                 </p>
//                             </header>

//                             <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
//                                 {blogPosts.map((post, index) => (
//                                     <div key={post.id} style={{animationDelay: `${index * 150}ms`}} className="animate-card opacity-0">
//                                         <BlogPostCard post={post} onSelectPost={setSelectedPost} />
//                                     </div>
//                                 ))}
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

