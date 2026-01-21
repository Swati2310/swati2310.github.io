const Gallery = () => {
  // Photos live in /public/gallery – explicitly list all 25 pictures + profile
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

        {/* Full-Width Photo Grid - Show all 26 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {galleryFiles.map((src, index) => (
            <div
              key={src}
              className="group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-muted/20">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 aspect-square"
                  loading="lazy"
                  onError={(e) => {
                    // Log error for debugging but don't hide the image
                    console.warn(`Failed to load image: ${src}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


