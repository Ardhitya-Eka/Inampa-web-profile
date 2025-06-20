"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/../../public/Logo Inampa.png";
import TogleLanguage from "@/components/ui/button/TogleLanguage";
import { useTranslations } from "next-intl";
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

  const t = useTranslations("Navbar");
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-sm  ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <Image
            src={Logo}
            alt="INAMPA Logo"
            width={40}
            height={40}
            priority
            className="mr-3"
          />
          <a
            href="/"
            className={
              scrolled
                ? "text-xl font-bold text-blue-600"
                : "text-xl font-bold text-white"
            }
          >
            INAMPA
          </a>
        </div>

        {/* Desktop nav */}
        <nav
          className={
            scrolled
              ? "hidden md:flex space-x-6 text-gray-900 font-medium items-center"
              : "hidden md:flex space-x-6 text-white font-medium items-center"
          }
        >
          <a href="#home" className="hover:text-blue-600 transition">
            {t("home")}
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            {t("about")}
          </a>
          <a href="#photo" className="hover:text-blue-600 transition">
            {t("gallery")}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            {t("contact")}
          </a>
          <TogleLanguage />
        </nav>
        <div className="md:hidden">
          <TogleLanguage />
        </div>
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
              {t("home")}
            </a>
            <a
              href="#about"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {t("about")}
            </a>
            <a
              href="#photo"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {t("gallery")}
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {t("contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
