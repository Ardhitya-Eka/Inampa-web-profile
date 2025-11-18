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
  const organisasi = [
    {
      id: 1,
      name: "Sejarah Inampa",
      link: "/organisasi/sejarah-inampa",
    },
    {
      id: 2,
      name: "Struktur Organisasi",
      link: "/organisasi/struktur-organisasi",
    },
    ,
    {
      id: 3,
      name: "Dewan Pembina",
      link: "/organisasi/dewan-pembina",
    },
    {
      id: 4,
      name: "Pengurus Pusat",
      link: "/organisasi/pengurus-pusat",
    },

    {
      id: 5,
      name: "Staf Ahli",
      link: "/organisasi/staff-ahli",
    },
    {
      id: 6,
      name: "DPW INAMPA",
      link: "/organisasi/dpw-inampa",
    },
    {
      id: 7,
      name: "IMPA",
      link: "/organisasi/impa",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMediaOpen, setIsMediaOpen] = useState<boolean>(false);
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
                : "text-xl font-bold text-blue-600"
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
              : "hidden md:flex space-x-6 text-slate-700 font-medium items-center"
          }
        >
          <a href="/" className="hover:text-blue-600 transition">
            {t("home")}
          </a>

          {/* ORGANISASI DROPDOWN */}

          <div>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (!isOpen) setIsMediaOpen(false); // Close  dropdown when opening another dropdown
              }}
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
                  className="absolute  top-full w-40  overflow-hidden shadow-xl border-t border-gray-700 bg-white backdrop-blur-md rounded-md mt-1"
                >
                  {organisasi.map((item) => (
                    <motion.a
                      key={item?.name}
                      href={item?.link}
                      rel="noopener noreferrer"
                      className="block px-2 py-2 text-sm text-gray-700 rounded-md mx-auto hover:text-gray-500"
                    >
                      {item?.name}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Media Dropwown pakai motion.div dan motion.a */}
          <div>
            <button
              onClick={() => {
                setIsMediaOpen(!isMediaOpen);
                if (!isMediaOpen) setIsOpen(false); // Close  dropdown when opening another dropwdown
              }}
              className="flex items-center gap-1"
            >
              {t("media")}
              {isMediaOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <AnimatePresence>
              {isMediaOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute  top-full w-40  overflow-hidden shadow-xl border-t border-gray-700 bg-white backdrop-blur-md rounded-md mt-1"
                >
                  <motion.a
                    href="/media/nasional"
                    className="block px-2 py-2 text-sm text-gray-700 rounded-md mx-auto hover:text-gray-500"
                  >
                    {t("nasional")}
                  </motion.a>
                  <motion.a
                    href="/media/internasional"
                    className="block px-2 py-2 text-sm text-gray-700 rounded-md mx-auto hover:text-gray-500"
                  >
                    {t("internasional")}
                  </motion.a>
                  <motion.a
                    href="/media/certificate"
                    className="block px-2 py-2 text-sm text-gray-700 rounded-md mx-auto hover:text-gray-500"
                  >
                    {t("certificate")}
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* s Dropwown pakai motion.div dan motion.a */}

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
            <div>
              <div className="mt-2">
                <a href="/" className="block hover:text-blue-600">
                  Beranda
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">
                  {t("organization")}
                </div>
                {organisasi.map((item) => (
                  <motion.a
                    key={item?.id}
                    href={item?.link}
                    className="block py-1 pl-4 text-sm hover:text-blue-600"
                  >
                    {item?.name}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="text-sm font-medium text-gray-500 mb-2">
                {t("media")}
              </div>
              <a
                href="/media/nasional"
                className="block py-1 pl-4 text-sm hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {t("nasional")}
              </a>
              <a
                href="/media/internasional"
                className="block py-1 pl-4 text-sm hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {t("internasional")}
              </a>
              <a
                href="/media/certificate"
                className="block py-1 pl-4 text-sm hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {t("certificate")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
