import { JangkaPendekCard } from "@/components/ui/Card/ProgramCard/JangkaPendek";

import { JangkaMenengah } from "@/components/ui/Card/ProgramCard/JangkaMenengah";
import { JangkaPanjang } from "@/components/ui/Card/ProgramCard/JangkaPanjang";

const ProgramKerja = () => {
  // const programJangkaPendek = useTranslations("ProgramJangkaPendek");
  // const programJangkaMenengah = useTranslations("ProgramJangkaMenengah");
  // const programJangkaPanjang = useTranslations("ProgramJangkaPanjang");

  // const cards = [
  //   {
  //     title: programJangkaPendek("title"),
  //     description: [
  //       programJangkaPendek("paragraph1"),
  //       programJangkaPendek("paragraph2"),
  //       programJangkaPendek("paragraph3"),
  //       programJangkaPendek("paragraph4"),
  //     ],
  //     textDeskripsi: [
  //       programJangkaPendek("text1Paraghraph1"),
  //       programJangkaPendek("text1Paraghraph2"),
  //       programJangkaPendek("text1Paraghraph3"),
  //     ],
  //   },
  //   {
  //     title: programJangkaMenengah("title"),
  //     description: [
  //       programJangkaMenengah("paragraph1"),
  //       programJangkaMenengah("paragraph2"),
  //       programJangkaMenengah("paragraph3"),
  //       programJangkaMenengah("paragraph4"),
  //       programJangkaMenengah("paragraph5"),
  //       programJangkaMenengah("paragraph6"),
  //       programJangkaMenengah("paragraph7"),
  //     ],
  //     textDeskripsi1: [
  //       programJangkaPendek("text1Paraghraph1"),
  //       programJangkaPendek("text1Paraghraph2"),
  //       programJangkaPendek("text1Paraghraph3"),
  //     ],
  //     textDeskripsi2: [
  //       programJangkaPendek("text2Paraghraph1"),
  //       programJangkaPendek("text2Paraghraph2"),
  //       programJangkaPendek("text2Paraghraph3"),
  //     ],
  //     textDeskripsi3: [
  //       programJangkaPendek("text3Paraghraph1"),
  //       programJangkaPendek("text3Paraghraph2"),
  //       programJangkaPendek("text3Paraghraph3"),
  //     ],
  //   },
  //   {
  //     title: programJangkaPanjang("title"),
  //     description: [programJangkaPanjang("paragraph1")],
  //     textDeskripsi: [
  //       programJangkaPendek("text1Paraghraph1"),
  //       programJangkaPendek("text1Paraghraph2"),
  //       programJangkaPendek("text1Paraghraph3"),
  //     ],
  //   },
  // ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10 ">
        <JangkaPendekCard />
        <JangkaMenengah />
        <JangkaPanjang />
      </div>
    </section>
  );
};

export default ProgramKerja;
