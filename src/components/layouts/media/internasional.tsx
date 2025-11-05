import BaliForm from "@/components/forms/internasionalForm/Bali/BaliForm";
const MediaInternasional = () => {
  return (
    <div>
      <div className="text-center mt-29  text-3xl font-bold">
        Internasional Event
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-blue-900 p-8">
        <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold">
            THE 1st ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) BALI - INDONESIA 2017
          </div>
          <BaliForm />
        </div>
        {/* ALbum 2 inter */}
        {/* <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 2nd ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) SYDNEY - AUSTRALIA 2019
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {internasional2.map((index) => (
              <div key={index.id}>
                <Card
                  key={index.id}
                  url={index.url}
                  onClick={() => openModal(index.id)}
                />
                {isOpen && (
                  <ModalCarousel
                    isOpen={isOpen}
                    currentIndex={currentIndex}
                    onClose={() => setIsOpen(false)}
                    images={internasional2.map((photo) => ({
                      url: photo.url,
                      title: photo.id.toString(),
                      imageUrl: photo.url,
                    }))}
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}
        {/* album Seoul */}
        {/* <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 3rd ASIA PACIFI MARITIME PILOTS' FORUM (APMPF) SEOUL - KOREA - 2023
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {albumSeoul.map((index) => (
              <div key={index.id}>
                <Card
                  key={index.id}
                  url={index.url}
                  onClick={() => openModal(index.id)}
                />
                {isOpen && (
                  <ModalCarousel
                    isOpen={isOpen}
                    currentIndex={currentIndex-1}
                    onClose={() => setIsOpen(false)}
                    images={albumSeoul.map((photo) => ({
                      url: photo.url,
                      title: photo.id.toString(),
                      imageUrl: photo.url,
                    }))}
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}
        {/* album syedney */}
        {/* <div>
          <div className="text-center mb-10 py-6 text-2xl font-bold mt-5">
            THE 4th ASIA PACIFIC MARITIME PILOTS FORUM (APMPF) MEETING Da Nang VIETNAM 2025
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {albulmSydney.map((index) => (
              <div key={index.id}>
                <Card
                  key={index.id}
                  url={index.url}
                  onClick={() => openModal(index.id)}
                />
                {isOpen && (
                  <ModalCarousel
                    isOpen={isOpen}
                    currentIndex={currentIndex-1}
                    onClose={() => setIsOpen(false)}
                    images={albulmSydney.map((photo) => ({
                      url: photo.url,
                      title: photo.id.toString(),
                      imageUrl: photo.url,
                    }))}
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MediaInternasional;
