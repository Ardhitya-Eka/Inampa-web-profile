import Card from "@/components/ui/Card/card";
import card1 from "@/../../public/card1.jpeg";
const galeri = () => {
  return (
    <div>
      <div className="mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card key="ad" description="ini photo" url={card1.src} />
          <Card key="ad" description="ini photo" url={card1.src} />
          <Card key="ad" description="ini photo" url={card1.src} />
          <Card key="ad" description="ini photo" url={card1.src} />
          <Card key="ad" description="ini photo" url={card1.src} />
          <Card key="ad" description="ini photo" url={card1.src} />
          <Card key="ad" description="ini photo" url={card1.src} />
        </div>
      </div>
    </div>
  );
};

export default galeri;
