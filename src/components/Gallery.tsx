import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  // You can add/remove images here – they should live in the /public folder
  const photos = [
    {
      src: "/nyc-skyline-bg.jpg",
      title: "New York Skyline",
      description: "Everyday inspiration from the city I call home"
    },
    {
      src: "/demand-forecasting.jpg",
      title: "Data in Motion",
      description: "Visualization of patterns that drive decisions"
    },
    {
      src: "/nyccrime.jpeg",
      title: "City Stories in Data",
      description: "Exploring patterns hidden in real-world maps"
    },
    {
      src: "/database_fitness.png",
      title: "Fitness & Systems",
      description: "Balancing performance – in code and in life"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
            <ImageIcon className="w-7 h-7 text-accent" />
            <span>Gallery – Through My Eyes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A small visual journal of places, moments, and ideas that shape how I think about
            data, design, and impact.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border/60 hover:border-primary/60 transition-all duration-300 hover:shadow-primary group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-90" />
              </div>
              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold mb-1 text-foreground">
                  {photo.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {photo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


