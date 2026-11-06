// "use client";

// import { useState } from "react";
// import { Menu, X, Code2 } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080d19]/90 backdrop-blur-xl">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
//         <a href="#home" className="flex items-center gap-2">
//           <Code2 className="text-blue-500" size={27} />
//           <span className="text-xl font-bold text-white">
//             Marel<span className="text-blue-500">.</span>
//           </span>
//         </a>

//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm text-gray-400 transition hover:text-blue-400"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         <a
//           href="#contact"
//           className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 md:block"
//         >
//           Let's Talk
//         </a>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-white md:hidden"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="border-t border-white/10 bg-[#080d19] px-6 py-5 md:hidden">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block py-3 text-gray-300 transition hover:text-blue-400"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });
  const [ready, setReady] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  /* ---------- Scroll state: shrink into a floating pill + progress ---------- */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      // Edge cases the observer can't catch: very top and very bottom
      if (y < 80) setActive("#home");
      else if (max > 0 && y >= max - 4) setActive("#contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Active section tracking ---------- */
  useEffect(() => {
    const elements = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- Sliding indicator position ---------- */
  const target = hovered ?? active;

  const measure = useCallback(() => {
    const index = navLinks.findIndex((l) => l.href === target);
    const el = linkRefs.current[index];
    if (!el) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
  }, [target]);

  useEffect(() => {
    measure();
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* ---------- Mobile menu behaviour ---------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    const onResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const focusRing =
    "outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d19]";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className={[
          "pointer-events-auto relative mx-auto border transition-all duration-500 ease-out motion-reduce:transition-none",
          scrolled || isOpen
            ? "max-w-5xl border-white/10 bg-[#0a1020]/75 shadow-[0_10px_40px_-12px_rgba(37,99,235,0.45)] backdrop-blur-xl"
            : "max-w-7xl border-transparent bg-transparent",
          isOpen ? "rounded-3xl" : scrolled ? "rounded-full" : "rounded-2xl",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between pl-4 pr-2.5 transition-all duration-500 motion-reduce:transition-none md:pl-5",
            scrolled ? "py-2" : "py-3",
          ].join(" ")}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className={`group flex items-center gap-2.5 rounded-full ${focusRing}`}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-blue-500 to-blue-700 shadow-[0_0_20px_-2px_rgba(59,130,246,0.7)] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105 motion-reduce:transition-none">
              <Code2 className="text-white" size={20} strokeWidth={2.4} />
            </span>
            <span className="text-xl font-bold tracking-tight text-white">
              Marel Gultom<span className="text-blue-500"></span>
            </span>
          </a>

          {/* Desktop links with sliding indicator */}
          <div
            ref={listRef}
            onMouseLeave={() => setHovered(null)}
            className="relative hidden items-center rounded-full border border-white/5 bg-white/3 p-1 md:flex"
          >
            <span
              aria-hidden
              className={[
                "absolute bottom-1 top-1 rounded-full bg-blue-500/15 ring-1 ring-inset ring-blue-400/30",
                ready ? "transition-all duration-300 ease-out motion-reduce:transition-none" : "",
                indicator.visible ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{ left: indicator.left, width: indicator.width }}
            />
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.name}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => setHovered(link.href)}
                  onFocus={() => setHovered(link.href)}
                  onBlur={() => setHovered(null)}
                  className={[
                    "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive ? "text-white" : "text-gray-400 hover:text-white",
                    focusRing,
                  ].join(" ")}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={`group hidden items-center gap-3 rounded-full bg-blue-600 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white shadow-[0_6px_24px_-6px_rgba(37,99,235,0.8)] transition duration-300 hover:bg-blue-500 hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.9)] md:flex ${focusRing}`}
          >
            Let&apos;s Talk
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-blue-600 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none">
              <ArrowUpRight size={16} strokeWidth={2.6} />
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={`relative grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden ${focusRing}`}
          >
            <Menu
              size={20}
              className={`absolute transition-all duration-300 motion-reduce:transition-none ${
                isOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              size={20}
              className={`absolute transition-all duration-300 motion-reduce:transition-none ${
                isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none md:hidden ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 px-4 pb-5 pt-3">
              {navLinks.map((link, i) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={isActive ? "page" : undefined}
                    style={{ transitionDelay: isOpen ? `${120 + i * 50}ms` : "0ms" }}
                    className={[
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium transition-all duration-500 motion-reduce:transition-none",
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                      isActive
                        ? "bg-blue-500/10 text-white ring-1 ring-inset ring-blue-400/25"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      focusRing,
                    ].join(" ")}
                  >
                    {link.name}
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        isActive ? "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]" : "bg-white/10"
                      }`}
                    />
                  </a>
                );
              })}

              <div
                style={{ transitionDelay: isOpen ? `${120 + navLinks.length * 50}ms` : "0ms" }}
                className={`mt-4 flex flex-col gap-3 transition-all duration-500 motion-reduce:transition-none ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className={`flex items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500 ${focusRing}`}
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </a>
                <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open for new projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll progress */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-x-8 -bottom-px h-0.5 origin-left rounded-full bg-linear-to-r from-blue-600 via-blue-400 to-sky-300 transition-opacity duration-300 ${
            scrolled && !isOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `scaleX(${progress})` }}
        />
      </nav>
    </header>
  );
}