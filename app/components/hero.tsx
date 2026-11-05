// "use client";
// import { ArrowUpRight, Download } from "lucide-react";
// import TextReveal from "./TextReveal";
// import RoleAnimation from "./RoleAnimation";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// const roles = [
//   "Full Stack Developer",
//   "Backend Developer",
//   "Frontend Developer",
// ];
// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center overflow-hidden bg-[#080d19] px-6 pt-24"
//     >
//       {/* Background decoration */}
//       <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
//       <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

//       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 md:grid-cols-2">
//         <div>
//           <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
//             <span className="text-sm text-blue-300">
//               Available for opportunities
//             </span>
//           </div>

//           <TextReveal>
//             <p className="mb-4 text-lg font-medium text-gray-400">Hello, I'm</p>
//           </TextReveal>
//           <TextReveal>
//             <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
//               Marel
//               <span className="ml-3 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                 Gultom.
//               </span>
//             </h1>
//           </TextReveal>

//           {/* <h2 className="mt-6 text-2xl font-semibold text-gray-200 md:text-3xl">
//             Full Stack Developer
//           </h2> */}

//           <RoleAnimation />

//           <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
//             I build modern, responsive, and scalable web applications.
//             Passionate about turning ideas into meaningful digital experiences
//             using modern technologies.
//           </p>

//           <div className="mt-9 flex flex-wrap gap-4">
//             {/* <a
//               href="#projects"
//               className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
//             >
//               View My Work
//               <ArrowUpRight size={19} />
//             </a> */}

//             <a
//               href="/MyResume.pdf"
//               download="Marel-Gultom-Resume.pdf"
//               className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
//             >
//               Download Resume
//               <Download size={18} />
//             </a>
//           </div>

//           {/* <div className="mt-10 flex items-center gap-5">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="text-gray-400 transition hover:text-white"
//             >
//               <Github size={23} />
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="text-gray-400 transition hover:text-blue-400"
//             >
//               <Linkedin size={23} />
//             </a>
//           </div> */}
//         </div>

//         {/* Profile image */}
//         <div className="flex justify-center">
//           <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-blue-500/30 bg-linear-to-br from-blue-600/20 to-purple-600/20 p-3 shadow-2xl shadow-blue-500/10 md:h-105 md:w-105">
//             <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#111827]">
//               <img
//                 src="/Profile.jpeg"
//                 alt="Profile"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-3 right-0 rounded-xl border border-white/10 bg-[#151d2e] px-5 py-3 shadow-xl">
//               <p className="text-sm font-semibold text-white">
//                 2+ Years Experience
//               </p>
//               <p className="text-xs text-gray-400">Web Development</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowDownRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Frontend Developer",
];

// Ganti sesuai stack aslimu
const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "REST API",
  "Git",
];

// Satu rangkaian animasi saat halaman dimuat
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className={`${display.variable} ${mono.variable} relative isolate flex min-h-screen flex-col overflow-hidden bg-[#0A0F1C] text-[#E8ECF4]`}
    >
      {/* Latar: grid titik halus + satu cahaya di belakang foto */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] bg-[radial-gradient(#2A3552_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute right-[8%] top-1/2 -z-10 h-136 w-136 -translate-y-1/2 rounded-full bg-[#3B6BFF]/20 blur-[140px]"
      />

      <motion.div
        variants={container}
        initial={reduce ? "show" : "hidden"}
        animate="show"
        className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pb-16 pt-32 md:grid-cols-[1.15fr_0.85fr] md:gap-8"
      >
        {/* ---------- Kiri: teks ---------- */}
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#FFB454]/30 bg-[#FFB454]/10 py-1.5 pl-3 pr-4"
          >
            {/* <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFB454] opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFB454]" />
            </span> */}
            {/* <span className="text-sm text-[#FFD596]">
              Available for opportunities
            </span> */}
          </motion.div>

          <motion.p variants={item} className="mt-8 text-lg text-[#8A94A8]">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 text-[clamp(3.5rem,11vw,8.5rem)] font-extrabold leading-[0.88] tracking-[-0.04em] [font-family:var(--font-display)]"
          >
            <span className="block">Marel</span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "2px #5B8CFF" }}
            >
              Gultom.
            </span>
          </motion.h1>

          {/* Role bergantian — slot vertikal */}
          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-3 text-xl font-medium md:text-2xl [font-family:var(--font-display)]"
            aria-live="polite"
          >
            <span className="h-px w-10 bg-[#5B8CFF]" aria-hidden />
            <span className="relative block h-9 overflow-hidden md:h-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={roles[index]}
                  initial={reduce ? false : { y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? undefined : { y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block whitespace-nowrap"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-136 text-base leading-8 text-[#8A94A8] md:text-lg"
          >
            I build modern, responsive, and scalable web applications — turning
            ideas into digital products people actually enjoy using.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <a
              href="/MyResume.pdf"
              download="Marel-Gultom-Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-[#E8ECF4] px-7 py-3.5 font-semibold text-[#0A0F1C] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B8CFF]"
            >
              Download Resume
              <Download
                size={18}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* ---------- Kanan: foto berbentuk lengkung ---------- */}
        <motion.div
          variants={item}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 sm:w-72 md:w-88">
            {/* Bingkai outline yang bergeser */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-4xl border border-[#5B8CFF]/50"
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-t-[999px] rounded-b-4xl border border-white/10 bg-[#111A2E]">
              <img
                src="/MyProfile.jpeg"
                alt="Marel Gultom"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-[#0A0F1C]/60 via-transparent to-transparent"
              />
            </div>

            {/* Kartu kode */}
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl border border-white/10 bg-[#0F1627]/95 p-4 shadow-2xl backdrop-blur sm:block md:-left-12">
              <div className="mb-3 flex gap-1.5" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-[#2A3552]" />
                <span className="h-2 w-2 rounded-full bg-[#2A3552]" />
                <span className="h-2 w-2 rounded-full bg-[#2A3552]" />
              </div>
              <pre className="text-[12px] leading-5 text-[#8A94A8] font-mono">
                <span className="text-[#C792EA]">const</span>{" "}
                <span className="text-[#E8ECF4]">marel</span> = {"{"}
                {"\n  "}stack:{" "}
                <span className="text-[#FFB454]">&quot;fullstack&quot;</span>,
                {"\n  "}open: <span className="text-[#7FD1AE]">true</span>,
                {"\n"}
                {"}"}
              </pre>
            </div>

            {/* Pengalaman */}
            {/* <div className="absolute -right-3 top-10 rounded-xl border border-white/10 bg-[#0F1627]/95 px-5 py-3 shadow-xl backdrop-blur md:-right-8">
              <p className="text-3xl font-extrabold leading-none [font-family:var(--font-display)]">
                2+
              </p>
              <p className="mt-1 text-xs text-[#8A94A8]">
                years in web development
              </p>
            </div> */}
          </div>
        </motion.div>
      </motion.div>

      {/* ---------- Bawah: marquee tech stack ---------- */}
      <div className="relative border-t border-[#1B2540] py-5 mask-[linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-12 pr-12"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...stack, ...stack].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-12 whitespace-nowrap text-sm text-[#8A94A8] font-mono"
            >
              {name}
              <span className="h-1 w-1 rounded-full bg-[#2A3552]" aria-hidden />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
