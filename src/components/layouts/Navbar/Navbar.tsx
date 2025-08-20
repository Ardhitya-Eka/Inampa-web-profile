"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/../../public/Logo Inampa.png";
import TogleLanguage from "@/components/ui/button/TogleLanguage";
import { useTranslations } from "next-intl";

import { useRouter } from "next/router";
import { FiSettings } from "react-icons/fi";
const Navbar = () => {
  const pdfUrl = "/pdf/Inampa.pdf";
  const pdfName = "Download pdf";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = useTranslations("Navbar");
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin");
  };
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
            {t("Gallery")}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            {t("contact")}
          </a>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1"
            >
              {t("organization")}
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={
                    scrolled
                      ? `absolute  top-full w-40  overflow-hidden shadow-xl border-t border-gray-700 bg-white backdrop-blur-md rounded-md`
                      : `absolute  top-full w-40  overflow-hidden shadow-2xl border-t border-gray-700 bg-white/20 backdrop-blur-md rounded-md`
                  }
                >
                  <motion.a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-2 text-sm text-gray-700 rounded-md mx-auto hover:text-gray-500"
                  >
                    {pdfName}
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <TogleLanguage />
          <button
            onClick={handleClick}
            className="flex items-center space-x-2 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded transition cursor-pointer"
          >
            <FiSettings className="w-5 h-5" />
          </button>
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
              {t("Gallery")}
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {t("contact")}
            </a>
            <a
              href={pdfUrl}
              className="hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {t("organization")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
