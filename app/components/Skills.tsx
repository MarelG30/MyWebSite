// "use client";

// import {
//   Code2,
//   Database,
//   Layers,
//   Palette,
//   Server,
//   Terminal,
// } from "lucide-react";

// import { motion } from "framer-motion";

// const skills = [
//   {
//     name: "Next.js",
//     icon: Layers,
//     category: "Frontend Framework",
//   },
//   {
//     name: "React.js",
//     icon: Code2,
//     category: "Frontend Library",
//   },
//   {
//     name: "TypeScript",
//     icon: Terminal,
//     category: "Programming Language",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: Palette,
//     category: "CSS Framework",
//   },
//   {
//     name: "Node.js",
//     icon: Server,
//     category: "Backend Runtime",
//   },
//   {
//     name: "Prisma ORM",
//     icon: Database,
//     category: "Database ORM",
//   },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-[#080d19] px-6 py-28"
//     >
//       {/* Background Decoration */}
//       <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

//       <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl">

//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mb-14 text-center"
//         >
//           <p className="mb-3 font-semibold uppercase tracking-[4px] text-blue-400">
//             My Expertise
//           </p>

//           <h2 className="text-4xl font-bold text-white md:text-5xl">
//             Technical{" "}
//             <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Skills
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
//             Technologies and tools I use to build modern, responsive,
//             and scalable web applications.
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

//           {skills.map((skill, index) => {
//             const Icon = skill.icon;

//             return (
//               <motion.div
//                 key={skill.name}
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                   scale: 0.95,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.12,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 whileHover={{
//                   y: -8,
//                   scale: 1.02,
//                   transition: {
//                     duration: 0.25,
//                   },
//                 }}
//                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-6 transition-colors duration-300 hover:border-blue-500/50 hover:bg-[#14213a] md:p-8"
//               >
//                 {/* Hover Glow */}
//                 <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/15" />

//                 {/* Icon */}
//                 <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/20">
//                   <Icon
//                     size={30}
//                     strokeWidth={1.8}
//                     className="text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300"
//                   />
//                 </div>

//                 {/* Skill Name */}
//                 <h3 className="relative text-lg font-bold text-white transition-colors duration-300 group-hover:text-blue-300 md:text-xl">
//                   {skill.name}
//                 </h3>

//                 {/* Category */}
//                 <p className="relative mt-2 text-xs text-gray-500 md:text-sm">
//                   {skill.category}
//                 </p>

//                 {/* Bottom Decoration */}
//                 <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import {
  Code2,
  Database,
  Layers,
  Palette,
  Server,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
});

const skills = [
  { name: "Next.js", icon: Layers, category: "Frontend Framework" },
  { name: "React.js", icon: Code2, category: "Frontend Library" },
  { name: "TypeScript", icon: Terminal, category: "Programming Language" },
  { name: "Tailwind CSS", icon: Palette, category: "CSS Framework" },
  { name: "Node.js", icon: Server, category: "Backend Runtime" },
  { name: "Prisma ORM", icon: Database, category: "Database ORM" },
];

// Satu reveal bertahap saat section masuk layar
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      className={`${display.variable} relative isolate overflow-hidden bg-[#0A0F1C] px-6 py-28 text-[#E8ECF4] md:py-36`}
    >
      {/* Satu cahaya biru di sisi kanan, grid titik memudar ke atas */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.25] [background-image:radial-gradient(#2A3552_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_top,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[#3B6BFF]/15 blur-[140px]"
      />

      <motion.div
        variants={container}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20"
      >
        {/* ---------- Kiri: judul (menempel saat scroll di desktop) ---------- */}
        <div className="md:sticky md:top-28 md:self-start">
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-lg text-[#8A94A8]"
          >
            <span className="h-px w-10 bg-[#5B8CFF]" aria-hidden />
            My expertise
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] [font-family:var(--font-display)]"
          >
            Technical skills
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-8 max-w-[28rem] text-base leading-8 text-[#8A94A8] md:text-lg"
          >
            Technologies and tools I use to build modern, responsive, and
            scalable web applications.
          </motion.p>
        </div>

        {/* ---------- Kanan: daftar tipografi besar ---------- */}
        <ul className="border-t border-[#1B2540]">
          {skills.map(({ name, icon: Icon, category }) => (
            <motion.li
              key={name}
              variants={item}
              className="group flex items-center justify-between gap-6 border-b border-[#1B2540] py-6 transition-colors duration-300 hover:border-[#5B8CFF]/60 md:py-8"
            >
              <div className="min-w-0">
                <h3
                  className="text-3xl font-extrabold tracking-[-0.02em] transition-all duration-300 [font-family:var(--font-display)] group-hover:translate-x-2 group-hover:text-transparent md:text-5xl"
                  style={{ WebkitTextStrokeColor: "#5B8CFF" }}
                >
                  <span className="[-webkit-text-stroke-width:0] group-hover:[-webkit-text-stroke-width:1.5px]">
                    {name}
                  </span>
                </h3>
                <p className="mt-2 text-sm text-[#8A94A8]">{category}</p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A3552] text-[#8DB0FF] transition-colors duration-300 group-hover:border-[#5B8CFF] group-hover:bg-[#5B8CFF] group-hover:text-[#0A0F1C] md:h-14 md:w-14">
                <Icon size={24} strokeWidth={1.8} aria-hidden />
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}