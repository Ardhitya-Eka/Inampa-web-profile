import BaliForm from "@/components/forms/internasionalForm/Bali/BaliForm";


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
        <BaliForm />
      </div>
    </div>
  );
};

export default MediaCertificate;
