const Gallery = () => {
  // Photos live in /public/gallery – you can freely add/remove files there (pic1.jpg, pic2.jpg, ...)
  const galleryFiles = [
    ...Array.from({ length: 25 }, (_, i) => `/gallery/pic${i + 1}.jpg`),
    "/gallery/profile.jpg"
  ];

  const photos = galleryFiles.map((src, index) => ({
    src,
    title: `Glimpse ${index + 1}`,
    description: "A small moment captured from my journey."
  }));

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
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 aspect-square"
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


