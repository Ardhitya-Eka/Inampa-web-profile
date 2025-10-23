import React from "react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#002d6b] to-[#001a40] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          {/* <Image
            src={logoInampa} // ganti dengan path logo kamu di public/
            alt="Inampa Logo"
            width={150}
            height={80}
            className="mb-4"
          /> */}
          <p className="text-center md:text-left text-sm">
            Indonesia Maritime Pilot's Association
          </p>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Alamat</h3>
          <p className="text-sm leading-relaxed">
            Indonesia Maritime Pilot's Association (INAMPA)
            <br />
            Jl. Matahari No. 10, RT.01/RW.013
            <br />
            Kelurahan: Rawabadak Utara, Kecamatan: Koja
            <br />
            DKI Jakarta 14230 - Indonesia.
          </p>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontak</h3>
          <ul className="space-y-1 text-sm">
            <li>Telp. 021-43900975</li>
            <li>
              Email:{" "}
              <a
                href="mailto:sekretariat@abupi.or.id"
                className="text-blue-300 hover:text-blue-400 underline"
              >
                dppinampa10@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Garis pemisah */}
      <div className="border-t border-white/20"></div>

      {/* Bawah footer */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <p>© 2025 Indonesia Maritime Pilot's Association</p>
        <div className="flex space-x-4 mt-3 md:mt-0 text-lg">
          <Link
            href="https://wa.me/+6281398347370"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href="https://www.instagram.com/inampa_dpp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
