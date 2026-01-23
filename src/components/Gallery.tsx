import { useState, useEffect } from "react";

const Gallery = () => {
  // Generate all image paths - 25 pics
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
    "/gallery/pic25.jpg"
  ];

  const [loadedCount, setLoadedCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    console.log(`Gallery: Total images: ${galleryFiles.length}`);
    console.log(`Gallery: Image list:`, galleryFiles);
  }, []);

  const handleImageLoad = (src: string) => {
    setLoadedCount(prev => {
      const newCount = prev + 1;
      console.log(`Gallery: Loaded ${newCount}/${galleryFiles.length} images - ${src}`);
      return newCount;
    });
  };

  const handleImageError = (src: string) => {
    setFailedImages(prev => new Set([...prev, src]));
    setErrorCount(prev => {
      const newCount = prev + 1;
      console.error(`Gallery: Failed to load image ${newCount}: ${src}`);
      console.warn(`Note: If ${src} is a HEIF/HEIC file, it needs to be converted to JPEG for browser compatibility.`);
      return newCount;
    });
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight max-w-4xl mx-auto">
            Welcome! Discover moments through my lens, where each photo tells a story.
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* 3-Column Grid Layout with Masonry-like effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryFiles.map((src, index) => {
            // Ensure the path is correct - remove any leading issues
            const imagePath = src.startsWith('/') ? src : `/${src}`;
            return (
              <div
                key={`gallery-img-${index}-${imagePath}`}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-1">
                  {failedImages.has(imagePath) ? (
                    <div className="w-full aspect-[4/3] flex items-center justify-center bg-muted/40 rounded-lg">
                      <div className="text-center p-4">
                        <p className="text-sm text-muted-foreground font-medium">Image unavailable</p>
                        <p className="text-xs text-muted-foreground mt-1 opacity-70">({imagePath.split('/').pop()})</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <img
                        src={imagePath}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading={index < 9 ? "eager" : "lazy"}
                        onLoad={() => handleImageLoad(imagePath)}
                        onError={(e) => {
                          handleImageError(imagePath);
                          console.error(`Image failed to load: ${imagePath}`, e);
                          const target = e.target as HTMLImageElement;
                          console.error(`Failed image src: ${target.src}, naturalWidth: ${target.naturalWidth}, naturalHeight: ${target.naturalHeight}`);
                        }}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


