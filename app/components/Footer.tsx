import {  ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d19] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <a href="#home" className="text-xl font-bold text-white">
          Marel<span className="text-blue-500">.</span>
        </a>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Marel Gultom. All rights reserved.
        </p>

        {/* <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition hover:text-white"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition hover:text-blue-400"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-500"
          >
            <ArrowUp size={18} />
          </a>
        </div> */}
      </div>
    </footer>
  );
}