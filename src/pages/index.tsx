import AboutLayout from "@/components/layouts/AboutLayouts/AboutLayouts";
import CardLayout from "@/components/layouts/CardLayouts/CardLayouts";
import Navbar from "@/components/layouts/Navbar/Navbar";
import VisiMisi from "@/components/layouts/VisiMisiLayouts/VisiMisi";
import Head from "next/head";

import ProgramKerja from "@/components/layouts/ProgramKerjaLayouts/ProgramKerja";

import BannerLayouts from "@/components/layouts/Banner/BannerLayouts";

const Home = () => {
  return (
    <div>
      <Head>
        <title>INAMPA - Indonesian Maritime Pilot’s Association</title>
        <meta name="description" content="INDONESIAN MARITIME PILOTS ASSOCIATION (INAMPA) - Berdiri sejak tanggal 11 Maret 2003 dan merupakan organisasi profesi Perwira Pandu Maritim Indonesia" />
        <link rel="canonical" href="https://inampa.org" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      {/* NAVBAR */}
      <div className="">
        <BannerLayouts />
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
      <div className="">
        <ProgramKerja />
      </div>
    </div>
  );
};

export default Home;
