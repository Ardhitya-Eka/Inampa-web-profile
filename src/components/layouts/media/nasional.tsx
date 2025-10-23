import Card from "@/components/ui/Card/card";

import Card1 from "@/../../public/card1.jpeg";

const MediaNasional = () => {
  return (
    <div>
      <div className="text-center mt-29 mb-20  text-3xl font-bold">
        Nasional Event
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
          <Card url={Card1.src} />
        </div>
      </div>
    </div>
  );
};

export default MediaNasional;
