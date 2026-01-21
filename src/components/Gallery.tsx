import { useState, useEffect } from "react";

const Gallery = () => {
  // Generate all image paths - 25 pics + profile
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

  const [loadedCount, setLoadedCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    console.log(`Gallery: Total images: ${galleryFiles.length}`);
  }, []);

  const handleImageLoad = () => {
    setLoadedCount(prev => {
      const newCount = prev + 1;
      console.log(`Gallery: Loaded ${newCount}/${galleryFiles.length} images`);
      return newCount;
    });
  };

  const handleImageError = (src: string) => {
    setErrorCount(prev => {
      const newCount = prev + 1;
      console.error(`Gallery: Failed to load image ${newCount}: ${src}`);
      return newCount;
    });
  };

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
          {/* Debug info - remove in production if needed */}
          <p className="text-sm text-muted-foreground mt-2">
            Showing {galleryFiles.length} images ({loadedCount} loaded, {errorCount} errors)
          </p>
        </div>

        {/* Full-Width Photo Grid - Show all images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {galleryFiles.map((src, index) => {
            // Ensure the path is correct - remove any leading issues
            const imagePath = src.startsWith('/') ? src : `/${src}`;
            return (
              <div
                key={`gallery-img-${index}-${imagePath}`}
                className="group animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-muted/20 aspect-square">
                  <img
                    src={imagePath}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading={index < 10 ? "eager" : "lazy"}
                    onLoad={handleImageLoad}
                    onError={(e) => {
                      handleImageError(imagePath);
                      console.error(`Image failed to load: ${imagePath}`, e);
                      // Log the actual error details
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed image src: ${target.src}, naturalWidth: ${target.naturalWidth}, naturalHeight: ${target.naturalHeight}`);
                    }}
                  />
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


