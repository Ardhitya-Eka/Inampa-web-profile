import AboutLayout from "@/components/layouts/AboutLayouts/AboutLayouts";
import CardLayout from "@/components/layouts/CardLayouts/CardLayouts";
import Navbar from "@/components/layouts/Navbar/Navbar";
import VisiMisi from "@/components/layouts/VisiMisiLayouts/VisiMisi";
import LogoBanner from "@/../public/Banner.jpg";
import { motion } from "framer-motion";
import ProgramKerja from "@/components/layouts/ProgramKerjaLayouts/ProgramKerja";
import Logo from "@/../../public/Logo Inampa.png";
import logoImpa from "@/../../public/LOGO IMPA BARU.png";
import logoJangkar from "@/../../public/JANGKAR PANDU BARU.png";
import Image from "next/image";

const homelayout = () => {
  return (
    <div>
      {/* NAVBAR */}
      <div>
        <section
          id="home"
          className="relative flex items-center justify-center text-center bg-cover bg-center min-h-screen"
          style={{ backgroundImage: `url(${LogoBanner.src})` }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-white text-center px-4"
          >
            <div className="relative z-10 text-white px-4">
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                <Image
                  width={200}
                  height={200}
                  alt="INAMPA Logo"
                  className="object-contain"
                  src={Logo.src}
                />
                <Image
                  width={200}
                  height={200}
                  alt="INAMPA Logo"
                  className="object-contain"
                  src={logoImpa.src}
                />
                <Image
                  width={200}
                  height={200}
                  alt="INAMPA Logo"
                  className="object-contain"
                  src={logoJangkar.src}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to INAMPA
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                Indonesian Maritime Pilot’s Association
              </p>
            </div>
          </motion.div>
        </section>
        <Navbar />
      </div>
      {/* TENTANG KAMI */}
      <div className="mt-9">
        <AboutLayout />
      </div>
      {/* GALERI */}
      <div id="photo" className=" pt-16">
        <div className="flex justify-center pt-5">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            GALERI INAMPA
          </h2>
        </div>
        <div>
          <CardLayout />
        </div>
      </div>
      {/* VISI MISI */}
      <div className="mt-9">
        <div className="flex justify-center">
          <VisiMisi />
        </div>
      </div>
      {/* Program Card */}
      <div>
        <div>
          <ProgramKerja />
        </div>
      </div>
    </div>
  );
};

export default homelayout;
