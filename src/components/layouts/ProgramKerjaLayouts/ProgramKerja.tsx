import { JangkaPendekCard } from "@/components/ui/Card/ProgramCard/JangkaPendek";

import { JangkaMenengah } from "@/components/ui/Card/ProgramCard/JangkaMenengah";
import { JangkaPanjang } from "@/components/ui/Card/ProgramCard/JangkaPanjang";

const ProgramKerja = () => {
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
