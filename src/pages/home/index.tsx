import card1 from "@/../../public/assets/card1.jpeg";
import Image from "next/image";
import Card from "@/components/ui/Card/card";
import CardLayout from "@/components/layouts/CardLayouts/CardLayouts";
const homelayout = () => {
  return (
    <div>
      <div
        className="m
      -2 bg-amber-700"
      >
        <div className="flex gap-5 bg-amber-600 justify-end mx-7 py-6">
          <div>beranda</div>
          <div>organisasi</div>
          <div>regulasi</div>
          <div>Galeri</div>
          <div>Contacct</div>
        </div>
      </div>
      {/* TENTANG KAMI */}
      <div className="mt-9">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-slate-600 py-3">
            TENTANG KAMI
          </div>
        </div>
        <div className="-300 m-auto w-3/4">
          <div>
            **INDONESIAN MARITIME PILOT'S ASSOCIATION** – Pengurus Asosiasi dan
            seluruh Anggotanya merupakan Teamwork yang senantiasa bahu membahu
            dalam upaya meningkatkan kinerja Asosiasi. Sebagai satu Team Work,
            kami memiliki komitmen yang tinggi menjadikan Asosiasi INAMPA
            senantiasa sehat, tumbuh, dan berkembang secara berkelanjutan serta
            mampu memberikan nilai tambah bagi para Pemangku Kepentingan
            (Stakeholders). Keberhasilan Asosiasi berpangkal dari Visi, Misi dan
            Nilai Asosiasi yang tertuang dalam komitmen kepada semua pihak yang
            terkait dengan Asosiasi (Stakeholders) yaitu Mitra, pelanggan dan
            kepentingan Nasional, masyarakat Kepelabuhanan dan Anggota Asosiasi
            serta Visi untuk memberikan Pelayanan Jasa Pemanduan dan Penundaan
            Kapal secara handal & maksimal dengan Mutu Pelayanan Kelas Dunia.
            Komitmen ini menuntut Asosiasi untuk dapat melakukan yang terbaik
            bagi Pengguna Jasa, serta peningkatan kualitas pelayanan demi
            kepuasan pelanggan. Oleh karena itu, Asosiasi INAMPA mengundang
            partisipasi semua pihak untuk berinvestasi di sektor Kepelabuhanan.
            Peningkatan volume perdagangan telah melahirkan kebutuhan baru dalam
            Manajemen Pelabuhan, yaitu Keamanan, Keselamatan, Pengelolaan
            Risiko, Akselerasi Informasi, Harmoni antara Operasi Pelabuhan
            dengan Lingkungan Alam dan Sosial serta Inovasi Teknologi.
            Keseluruhan kebutuhan tersebut menghendaki untuk dilaksanakan dalam
            suatu tata kelola Asosiasi yang baik (Good Association Governance
            Systems). Untuk dapat lebih memperkenalkan dan mendekatkan Asosiasi
            kepada Pengguna Jasa, Mitra Usaha, Mitra Kerja serta masyarakat
            luas, kami sajikan Profil Asosiasi INAMPA yang memuat berbagai
            informasi aktual mengenai asosiasi. Kami berharap uraian ini dapat
            menjadi referensi yang bermanfaat baik bagi mitra maupun calon
            investor dalam membangun kerjasama yang saling menguntungkan dengan
            Asosiasi INAMPA di masa mendatang.
          </div>
        </div>
      </div>
      {/* GALERI */}
      <div className="mt-9">
        <div className="flex justify-center">
          <div className="text-4xl font-bold text-slate-600 py-3">
            GALERI INAMPA
          </div>
        </div>
        <div>
          <CardLayout />
        </div>
      </div>
      {/* VISI MISI */}
      <div className="mt-9">
        <div className="flex justify-center">
          <div>VISI MISI</div>
        </div>
        <div className="m-auto w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, a aut
          non incidunt magni sequi consequuntur nostrum suscipit natus iste nemo
          sunt. Error temporibus nostrum, illum obcaecati doloribus distinctio
          consequuntur quaerat maiores assumenda sit voluptate soluta. Quisquam
          ea alias vero eius ipsam error, nemo minus, maxime ratione, vitae
          debitis quae dicta. Blanditiis quaerat assumenda, tenetur, ea tempore
          eligendi pariatur consectetur enim totam minima mollitia tempora!
          Earum voluptate, sint quasi dolores, maxime quam repudiandae iure
          praesentium nisi modi, eveniet repellendus. Aperiam accusantium
          tempora pariatur, tenetur laboriosam vitae mollitia ratione culpa
          minus illo et totam, possimus voluptatum, aspernatur cum soluta. Unde
          vitae nemo perferendis deserunt voluptates ab, obcaecati odio aut
          deleniti corrupti laborum provident modi enim, error sed suscipit.
          Aliquam nihil esse incidunt ducimus voluptates optio debitis saepe
          eligendi ipsa beatae dolorum aspernatur nesciunt cumque dolor ea atque
          dolorem ipsum odio asperiores, rerum quisquam assumenda dolores iusto
          repellat. Aperiam, eum tenetur. Ullam aspernatur enim quas impedit
          porro asperiores. Enim aliquid eligendi voluptatum beatae dignissimos
          neque illum ipsum necessitatibus quisquam rerum nam itaque, deserunt
          pariatur libero commodi facilis. Doloribus temporibus cumque sit nemo
          id placeat, dignissimos, vero, deleniti ad itaque mollitia illum
          repellendus at repellat. Blanditiis impedit vero ullam minima
          recusandae ab delectus aperiam soluta cum at omnis nostrum quas illo,
          quam ipsam facere tempora porro quo molestias error. Ea esse non
          accusantium officia molestiae, mollitia, ipsam deserunt incidunt
          commodi fugiat cum earum soluta quia iste, dolorem corrupti ad quas
          reiciendis! Debitis et corrupti nulla quisquam, atque quos mollitia
          eum doloribus ipsam deserunt fugit velit suscipit assumenda minima sed
          officia, doloremque id voluptatem qui vel illo est maiores! Iure,
          dolores ipsum? Debitis soluta libero necessitatibus non deleniti
          aliquid suscipit facere, tempora rem, quo doloribus sapiente dolores
          minus odio. Vero alias adipisci provident minus iste sequi labore
          dignissimos. Quo ratione ad minima aliquid autem.
        </div>
      </div>
    </div>
  );
};

export default homelayout;
