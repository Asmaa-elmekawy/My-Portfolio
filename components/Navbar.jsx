"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0e0d0c] fixed text-white lg:w-[80%] sm:w-full mx-auto left-0 right-0 z-1 rounded-md shadow-[#0e0d0c] -lg">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <Link href="#home" className="text-2xl font-semibold hover:text-[#c3995b] transition">
              𝐴𝑠𝑚𝑎𝑎 𝐸𝑙𝑚𝑒𝑘𝑎𝑤𝑦
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex mr-5 text-lg items-center gap-8">
            <Link href="#home" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#c3995b] transition">
              About
            </Link>
            <Link href="#projects" className="hover:text-[#c3995b] transition">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-[#c3995b] transition">
              Contact
            </Link>

            <a
              href="/AsmaaElmekawyCV.pdf"
              download="AsmaaElmekawyCV"
              className="ml-2 px-3 py-1 rounded-md bg-[#c3995b] text-black font-bold hover:brightness-75 transition"
            >
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-max-height duration-300 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-2 pb-2 space-y-1 flex flex-col">
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-white/5 transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-white/5 transition"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-white/5 transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-white/5 transition"
          >
            Contact
          </Link>
          <a
            href="/AsmaaElmekawyCV.pdf"
            download="AsmaaElmekawyCV"
            className="mt-2 px-3 py-2 rounded-md bg-[#c3995b] text-black font-medium text-center hover:brightness-95 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
