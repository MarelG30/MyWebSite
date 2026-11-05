"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "School Management Website",
    category: "Education Platform",
    description:
      "A modern school website featuring school information, facilities, achievements, galleries, news, and an admin dashboard.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
    image: "/projects/school.jpg",
    demo: "#",
    github: "#",
  },
  {
    number: "02",
    title: "Booking Management System",
    category: "Booking Platform",
    description:
      "A web-based booking application with reservation management, user authentication, and a responsive interface.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Prisma"],
    image: "/projects/booking.jpg",
    demo: "#",
    github: "#",
  },
  {
    number: "03",
    title: "School Payment System",
    category: "Payment Platform",
    description:
      "A school payment platform designed to manage student payments and transaction records efficiently.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Midtrans"],
    image: "/projects/payment.jpg",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b1220] px-6 py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[4px] text-blue-400">
              My Portfolio
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            Some projects that represent my experience and passion for
            developing digital products.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-colors duration-300 hover:border-blue-500/50"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-[#18243a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#080d19]/70 via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#080d19]/80 px-4 py-2 text-xs font-semibold text-blue-300 backdrop-blur-md">
                  {project.category}
                </span>

                {/* Project Number */}
                <span className="absolute bottom-4 right-5 text-4xl font-black text-white/20">
                  {project.number}
                </span>
              </div>

              {/* Project Content */}
              <div className="relative p-6">

                {/* Project Number */}
                <p className="text-sm font-semibold tracking-wider text-blue-400">
                  PROJECT {project.number}
                </p>

                {/* Project Title */}
                <h3 className="mt-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-24 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + techIndex * 0.08,
                      }}
                      className="rounded-md border border-blue-500/10 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300 transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                {/* 
                <div className="mt-7 flex items-center gap-5 border-t border-white/10 pt-5">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
                  >
                    Live Demo
                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                  >
                    <Github size={17} />
                    Source Code
                  </a>
                </div>
                */}

              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}