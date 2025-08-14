import Image from "next/image";
import { motion } from "framer-motion";
import LogoBanner from "@/../public/Banner.jpg";
import logoJangkar from "@/../../public/JANGKAR PANDU BARU.png";
import Logo from "@/../../public/Logo Inampa.png";
import logoImpa from "@/../../public/LOGO IMPA BARU.png";
import { useTranslations } from "next-intl";
const BannerLayouts = () => {
  const h = useTranslations("banner");
  return (
    <div
      id="home"
      className="relative flex items-center justify-center text-center bg-cover bg-center min-h-screen max-h-full"
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
          <div className="flex max-lg:flex-wrap justify-center items-center gap-6 mt-8">
            <Image
              width="400"
              height="400"
              alt="INAMPA Logo"
              className="object-contain"
              src={logoJangkar.src}
            />
            <div className="object-contain">
              <Image
                width="400"
                height="400"
                alt="INAMPA Logo"
                className="object-contain opacity-100"
                src={Logo.src}
              />
            </div>
            <Image
              width="400"
              height="400"
              alt="INAMPA Logo"
              className="object-contain"
              src={logoImpa.src}
            />
          </div>
          <h1 className="text-4xl font-bold">{h("title")}</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">{h("subtitle")}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerLayouts;
