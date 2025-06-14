import AboutLayout from "@/components/layouts/AboutLayouts/AboutLayouts";
import CardLayout from "@/components/layouts/CardLayouts/CardLayouts";
import Navbar from "@/components/layouts/Navbar/Navbar";
const homelayout = () => {
  return (
    <div>
      {/* NAVBAR */}
      <div>
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
