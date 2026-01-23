import { useState, useEffect } from "react";

const Gallery = () => {
  // Generate all image paths - includes pic26, pic27, pic28, pic29, pic30
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
    "/gallery/pic26.jpg",
    "/gallery/pic27.jpg",
    "/gallery/pic28.jpg",
    "/gallery/pic29.jpg",
    "/gallery/pic30.jpg"
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

  // Layout pattern: Full-width images alternating with 3-column grids
  // Based on reference: pic1 (full), pic2-4 (grid), pic5-7 (grid), pic8-10 (grid), pic9 (full), etc.
  const renderImage = (src: string, index: number, isFullWidth: boolean = false) => {
    const imagePath = src.startsWith('/') ? src : `/${src}`;
    
    if (failedImages.has(imagePath)) {
      return (
        <div className="w-full flex items-center justify-center bg-muted/40 rounded-lg p-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium">Image unavailable</p>
            <p className="text-xs text-muted-foreground mt-1 opacity-70">({imagePath.split('/').pop()})</p>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full group animate-fade-in-up" style={{ animationDelay: `${index * 0.03}s` }}>
        <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-1">
          <img
            src={imagePath}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            loading={index < 9 ? "eager" : "lazy"}
            onLoad={() => handleImageLoad(imagePath)}
            onError={(e) => {
              handleImageError(imagePath);
              console.error(`Image failed to load: ${imagePath}`, e);
              const target = e.target as HTMLImageElement;
              console.error(`Failed image src: ${target.src}, naturalWidth: ${target.naturalWidth}, naturalHeight: ${target.naturalHeight}`);
            }}
          />
        </div>
      </div>
    );
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

        {/* Gallery Layout - Alternating full-width and 3-column grids */}
        <div className="space-y-6 md:space-y-8">
          {/* Full-width image: pic1 */}
          {renderImage(galleryFiles[0], 0, true)}
          
          {/* 3-column grid: pic2, pic3, pic4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryFiles.slice(1, 4).map((src, idx) => renderImage(src, idx + 1))}
          </div>
          
          {/* 3-column grid: pic5, pic6, pic7 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryFiles.slice(4, 7).map((src, idx) => renderImage(src, idx + 4))}
          </div>
          
          {/* 3-column grid: pic8, pic19, pic10 (matching reference pattern) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[galleryFiles[7], galleryFiles[18], galleryFiles[9]].map((src, idx) => renderImage(src, idx + 7))}
          </div>
          
          {/* Full-width image: pic9 */}
          {renderImage(galleryFiles[8], 8, true)}
          
          {/* 3-column grid: pic20, pic11, pic12 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[galleryFiles[19], galleryFiles[10], galleryFiles[11]].map((src, idx) => renderImage(src, idx + 10))}
          </div>
          
          {/* 3-column grid: pic13, pic14, pic15 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryFiles.slice(12, 15).map((src, idx) => renderImage(src, idx + 12))}
          </div>
          
          {/* 3-column grid: pic16, pic17, pic18 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryFiles.slice(15, 18).map((src, idx) => renderImage(src, idx + 15))}
          </div>
          
          {/* Full-width image: pic21 */}
          {renderImage(galleryFiles[20], 20, true)}
          
          {/* 3-column grid: pic27, pic23, pic24 (replacing pic22 with pic27) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[galleryFiles[26], galleryFiles[22], galleryFiles[23]].map((src, idx) => renderImage(src, idx + 21))}
          </div>
          
          {/* 3-column grid: pic28, pic29, pic30 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryFiles.slice(27, 30).map((src, idx) => renderImage(src, idx + 27))}
          </div>
          
          {/* Full-width image: pic26 (like pic9) */}
          {renderImage(galleryFiles[25], 25, true)}
          
          {/* Full-width image: pic25 */}
          {renderImage(galleryFiles[24], 24, true)}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


