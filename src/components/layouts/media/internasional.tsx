import BaliForm from "@/components/forms/internasionalForm/Bali/BaliForm";
import KoreaForm from "@/components/forms/internasionalForm/Korea/KoreaForm";
import SydneyForm from "@/components/forms/internasionalForm/Sydney/SydneyForm";
import VietnamForm from "@/components/forms/internasionalForm/Vietnam/VietnamForm";
const MediaInternasional = () => {
  return (
    <div>
      <div className="text-center mt-29  text-3xl font-bold">
        Internasional Event
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8 mt-10">
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold">
            THE 1st ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) BALI - INDONESIA 2017
          </div>
          <BaliForm />
        </div>
        {/* ALbum 2 inter */}
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 2nd ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) SYDNEY - AUSTRALIA 2019
          </div>
          <SydneyForm />
        </div>
        {/* album Seoul */}
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 3rd ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) SEOUL - KOREA - 2023
          </div>
          <KoreaForm />
        </div>
        {/* album Vietnam */}
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 4th ASIA PACIFIC MARITIME PILOTS FORUM (APMPF) MEETING Da Nang VIETNAM 2025
          </div>
          <VietnamForm />
        </div>
      </div>
    </div>
  );
};

export default MediaInternasional;
