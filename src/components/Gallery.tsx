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

  // Organize images according to the reference layout pattern
  // Pattern: Large image -> 3x3 grid -> Large image -> 3x3 grid
  const featuredImages = ["/gallery/pic1.jpg", "/gallery/pic9.jpg"];
  const grid1Images = [
    "/gallery/pic2.jpg", "/gallery/pic3.jpg", "/gallery/pic4.jpg",
    "/gallery/pic5.jpg", "/gallery/pic6.jpg", "/gallery/pic7.jpg",
    "/gallery/pic8.jpg", "/gallery/pic19.jpg", "/gallery/pic10.jpg"
  ];
  const grid2Images = [
    "/gallery/pic20.jpg", "/gallery/pic11.jpg", "/gallery/pic12.jpg",
    "/gallery/pic13.jpg", "/gallery/pic14.jpg", "/gallery/pic15.jpg",
    "/gallery/pic16.jpg", "/gallery/pic17.jpg", "/gallery/pic18.jpg"
  ];
  const remainingImages = [
    "/gallery/pic21.jpg", "/gallery/pic22.jpg", "/gallery/pic23.jpg",
    "/gallery/pic24.jpg", "/gallery/pic25.jpg"
  ];

  const renderImage = (imagePath: string, index: number, isLarge: boolean = false) => {
    const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    return (
      <div
        key={`gallery-img-${index}-${path}`}
        className={`group animate-fade-in-up ${isLarge ? 'mb-8' : ''}`}
        style={{ animationDelay: `${index * 0.03}s` }}
      >
        <div className={`relative overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group-hover:-translate-y-1 ${isLarge ? 'rounded-xl' : 'rounded-lg'}`}>
          {failedImages.has(path) ? (
            <div className={`w-full ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'} flex items-center justify-center bg-muted/40 ${isLarge ? 'rounded-xl' : 'rounded-lg'}`}>
              <div className="text-center p-4">
                <p className="text-sm text-muted-foreground font-medium">Image unavailable</p>
                <p className="text-xs text-muted-foreground mt-1 opacity-70">({path.split('/').pop()})</p>
              </div>
            </div>
          ) : (
            <div className={`relative w-full overflow-hidden ${isLarge ? 'rounded-xl' : 'rounded-lg'}`}>
              <img
                src={path}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading={index < 9 ? "eager" : "lazy"}
                onLoad={() => handleImageLoad(path)}
                onError={(e) => {
                  handleImageError(path);
                  console.error(`Image failed to load: ${path}`, e);
                  const target = e.target as HTMLImageElement;
                  console.error(`Failed image src: ${target.src}, naturalWidth: ${target.naturalWidth}, naturalHeight: ${target.naturalHeight}`);
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/5 to-background min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
            A GLIMPSE <br />
            FROM MY EYES
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            Moments captured through photos from my past experiences and adventures
          </p>
        </div>

        {/* Gallery Layout: Large image -> 3x3 grid -> Large image -> 3x3 grid -> remaining */}
        <div className="space-y-8">
          {/* First Featured Image */}
          {renderImage(featuredImages[0], 0, true)}

          {/* First 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {grid1Images.map((src, index) => renderImage(src, index + 1))}
          </div>

          {/* Second Featured Image */}
          {renderImage(featuredImages[1], 10, true)}

          {/* Second 3x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {grid2Images.map((src, index) => renderImage(src, index + 11))}
          </div>

          {/* Remaining Images in Grid */}
          {remainingImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {remainingImages.map((src, index) => renderImage(src, index + 20))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


