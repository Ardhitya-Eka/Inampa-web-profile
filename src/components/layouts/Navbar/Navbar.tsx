"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          INAMPA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            Tentang Kami
          </a>
          <a href="#photo" className="hover:text-blue-600 transition">
            Galeri
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-2 space-y-2 text-gray-700">
            <a
              href="#home"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Tentang Kami
            </a>
            <a
              href="#photo"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Galeri
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
