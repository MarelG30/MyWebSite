// import { Code2, BriefcaseBusiness, GraduationCap } from "lucide-react";

// import TextReveal from "./TextReveal";
// import TypingParagraph from "./TypingParagraph";

// const information = [
//   {
//     icon: Code2,
//     title: "Development",
//     description: "Building modern and responsive web applications.",
//   },
//   {
//     icon: BriefcaseBusiness,
//     title: "Experience",
//     description: "2+ years of experience in web development.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Learning",
//     description: "Always exploring new technologies and solutions.",
//   },
// ];

// export default function About() {
//   return (
//     <section id="about" className="bg-[#0b1220] px-6 py-28">
//       <div className="mx-auto max-w-7xl">
//         {/* Section Heading */}
//         <div className="mb-14 text-center">
//           <p className="mb-3 font-semibold uppercase tracking-[4px] text-blue-400">
//             Get To Know Me
//           </p>

//           <TextReveal>
//             <h2 className="text-4xl font-bold text-white md:text-5xl">
//               About <span className="text-blue-500">Me</span>
//             </h2>
//           </TextReveal>
//         </div>

//         {/* About Content */}
//         <div className="grid items-center gap-14 md:grid-cols-2">
//           {/* Left Content */}
//           <div>
//             <TextReveal>
//               <h3 className="text-2xl font-bold leading-relaxed text-white md:text-3xl">
//                 Creating digital solutions through code and creativity.
//               </h3>
//             </TextReveal>

//             {/* <p className="mt-6 leading-8 text-gray-400">
//               I'm a Full Stack Developer with experience in
//               developing websites and web applications. I enjoy
//               building user-friendly interfaces, designing
//               efficient backend systems, and creating solutions
//               that solve real-world problems.
//             </p> */}

//             <TypingParagraph />

//           </div>

//           {/* Right Information Cards */}
//           <div className="grid gap-5">
//             {information.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <TextReveal key={item.title}>
//                   <div className="group flex gap-5 rounded-2xl border border-white/10 bg-[#111b2d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-[#15223a]">
//                     {/* Icon */}
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
//                       <Icon size={25} />
//                     </div>

//                     {/* Information */}
//                     <div>
//                       <h4 className="font-bold text-white">{item.title}</h4>

//                       <p className="mt-2 text-sm leading-6 text-gray-400">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </TextReveal>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Code2, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";
import TypingParagraph from "./TypingParagraph";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
});

const information = [
  {
    icon: Code2,
    title: "Development",
    description: "Building modern and responsive web applications.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experience",
    description: "2+ years of experience in web development.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description: "Always exploring new technologies and solutions.",
  },
];

// Satu reveal saat section masuk layar
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className={`${display.variable} relative isolate overflow-hidden bg-[#0A0F1C] px-6 py-28 text-[#E8ECF4] md:py-36`}
    >
      {/* Grid titik yang sama dengan Hero, memudar ke bawah */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.25] bg-[radial-gradient(#2A3552_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-20"
      >
        {/* ---------- Kiri: pernyataan + cerita ---------- */}
        <div>
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-lg text-[#8A94A8]"
          >
            <span className="h-px w-10 bg-[#5B8CFF]" aria-hidden />
            About me
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-6 max-w-[16ch] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] [font-family:var(--font-display)] md:max-w-[18ch]"
          >
            Creating digital solutions through code and creativity.
          </motion.h2>

          {/* <motion.p
            variants={item}
            className="mt-8 max-w-136 text-base leading-8 text-[#8A94A8] md:text-lg"
          >
            I&apos;m a Full Stack Developer with experience in building websites
            and web applications. I enjoy crafting user-friendly interfaces,
            designing efficient backend systems, and creating solutions that
            solve real-world problems.
          </motion.p> */}
          <TypingParagraph/>
        </div>

        {/* ---------- Kanan: daftar fakta ---------- */}
        <motion.ul
          variants={item}
          className="self-end border-t border-[#1B2540]"
        >
          {information.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group flex gap-5 border-b border-[#1B2540] py-7 transition-colors hover:border-[#5B8CFF]/60"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2A3552] text-[#8DB0FF] transition-colors duration-300 group-hover:border-[#5B8CFF] group-hover:bg-[#5B8CFF] group-hover:text-[#0A0F1C]">
                <Icon size={22} aria-hidden />
              </div>

              <div>
                <h3 className="text-xl font-bold [font-family:var(--font-display)]">
                  {title}
                </h3>
                <p className="mt-1.5 max-w-104 text-sm leading-6 text-[#8A94A8]">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
