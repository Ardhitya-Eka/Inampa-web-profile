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
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import Footer from "@/components/layouts/Footer/Footer";
import GetConnected from "@/components/layouts/Contact/ContactLayout";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const selectedLocale = locale ?? "id";
  return {
    props: {
      messages: (await import(`../../messages/${selectedLocale}.json`)).default,
    },
  };
}

const Home = () => {
  const t = useTranslations("Banner");

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
                  src={logoJangkar.src}
                />
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
              </div>
              <h1 className="text-4xl font-bold">{t("title")}</h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto">
                {t("subtitle")}
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
        <CardLayout />
      </div>
      {/* VISI MISI */}
      <div className="mt-9">
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2023/07/12/18/21/croatia-8123037_1280.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-0 " />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <VisiMisi />
          </div>
        </div>
      </div>
      {/* Program Card */}
      <div className="md:-mt-96">
        <ProgramKerja />
      </div>
      <GetConnected />
      {/* FOOTER Slogan */}
      <div className="mt-1">
        <div className="flex justify-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Inampa
          </h3>
        </div>
        <div className="flex justify-center -mt-5">
          <p className="px-4">
            ZERO WAITING TIME | ZERO ACCIDENT | CUSTOMER FOCUS | HIGH LEVEL OF
            SERVICES | NO COMPLAINT
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
