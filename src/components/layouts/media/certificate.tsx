import Card from "@/components/ui/Card/card";
import serti1 from "@/../../public/sertifikat/serti1.jpg";
import serti2 from "@/../../public/sertifikat/serti2.jpg";
import serti3 from "@/../../public/sertifikat/serti3.jpg";
import serti4 from "@/../../public/sertifikat/serti4.jpg";
import serti5 from "@/../../public/sertifikat/serti5.jpg";
import serti6 from "@/../../public/sertifikat/serti6.jpg";
import serti7 from "@/../../public/sertifikat/serti7.jpg";
import serti8 from "@/../../public/sertifikat/serti8.jpg";
import serti9 from "@/../../public/sertifikat/serti9.jpg";
import serti10 from "@/../../public/sertifikat/serti10.jpg";
import serti11 from "@/../../public/sertifikat/serti11.jpg";
import serti13 from "@/../../public/sertifikat/serti13.jpg";

const MediaCertificate = () => {
  return (
    <div>
      <div className="text-center mt-29 mb-20 text-3xl font-bold">
        Certificate of IMPA
      </div>
      <div className="text-center mb-5">
        {/* <Link
          href="/"
          className="text-blue-700 hover:underline hover:text-blue-500"
        >
          back to home
        </Link> */}
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card url={serti1.src} />
          <Card url={serti2.src} />
          <Card url={serti3.src} />
          <Card url={serti4.src} />
          <Card url={serti5.src} />
          <Card url={serti6.src} />
          <Card url={serti7.src} />
          <Card url={serti8.src} />
          <Card url={serti9.src} />
          <Card url={serti10.src} />
          <Card url={serti11.src} />
          <Card url={serti13.src} />
        </div>
      </div>
    </div>
  );
};

export default MediaCertificate;
