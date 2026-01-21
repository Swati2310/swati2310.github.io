import { useState } from "react";

const Gallery = () => {
  // Photos live in /public/gallery – explicitly list all images
  const galleryFiles = [
    "/gallery/pic1.jpg",
    "/gallery/pic2.jpg",
    "/gallery/pic3.jpg",
    "/gallery/pic4.jpg",
    "/gallery/pic5.jpg",
    "/gallery/pic6.jpg",
    "/gallery/pic7.jpg",
    "/gallery/pic8.jpg",
    "/gallery/pic9.jpg",
    "/gallery/pic10.jpg",
    "/gallery/pic11.jpg",
    "/gallery/pic12.jpg",
    "/gallery/pic13.jpg",
    "/gallery/pic14.jpg",
    "/gallery/pic15.jpg",
    "/gallery/pic16.jpg",
    "/gallery/pic17.jpg",
    "/gallery/pic18.jpg",
    "/gallery/pic19.jpg",
    "/gallery/pic20.jpg",
    "/gallery/pic21.jpg",
    "/gallery/pic22.jpg",
    "/gallery/pic23.jpg",
    "/gallery/pic24.jpg",
    "/gallery/pic25.jpg",
    "/gallery/profile.jpg"
  ];

  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const photos = galleryFiles.map((src, index) => ({
    src,
    title: `Glimpse ${index + 1}`,
    description: "A small moment captured from my journey."
  }));

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

  const handleImageError = (src: string) => {
    setErrorImages(prev => new Set([...prev, src]));
  };

  // Filter out images that failed to load
  const validPhotos = photos.filter(photo => !errorImages.has(photo.src));

  return (
    <section id="gallery" className="py-12 px-4 sm:px-6 bg-secondary/5 min-h-screen">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
            FROM MY EYES
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Moments captured through photos from my past experiences and adventures.
          </p>
        </div>

        {/* Full-Width Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {validPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className="group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-muted/20">
                <img
                  src={photo.src}
                  alt={photo.title}
                  onLoad={() => handleImageLoad(photo.src)}
                  onError={() => handleImageError(photo.src)}
                  className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 aspect-square ${
                    loadedImages.has(photo.src) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
                {!loadedImages.has(photo.src) && !errorImages.has(photo.src) && (
                  <div className="w-full aspect-square bg-muted/30 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


