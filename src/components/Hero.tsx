import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/lovable-uploads/FnuSwati_Resume.pdf';
    link.download = 'FnuSwati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Main content - centered card like the reference */}
      <div className="container mx-auto px-6 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Main card */}
          <div className="relative gradient-card border border-border/50 rounded-2xl p-10 text-center shadow-glow animate-pop-up overflow-hidden hover:animate-pop-up-hover aspect-[3/4] flex flex-col">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-75 group-hover:opacity-80 transition-opacity duration-500"
              style={{ backgroundImage: 'url(/Profile_grad.jpg)' }}
            />
            {/* Light overlay to keep text readable while showing skyline */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/22 via-background/18 to-background/22" />

            {/* Content - name/title pinned to top, contact/social/CTA pinned to bottom so the photo shows through the middle */}
            <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="-mt-10 pt-3">
            <div className="animate-pop-up" style={{ animationDelay: '0.05s' }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-none inline-block px-4 py-1 rounded-xl bg-background/80 backdrop-blur-sm">
              SWATI
            </h1>
            </div>
            <p className="text-lg md:text-xl text-foreground font-medium inline-block px-4 py-1.5 rounded-xl bg-background/80 backdrop-blur-sm">
            Gen AI Engineer | Software Engineer | DS Grad @Stony Brook University
            </p>
            </div>

            <div>
            {/* Contact */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-foreground/90 drop-shadow-md">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur-md border border-white/40 shadow-lg">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-medium text-primary">swati.guleria2319@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/swati-swati-eng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-pointer relative z-10"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.linkedin.com/in/swati-swati-eng/', '_blank', 'noopener,noreferrer');
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Swati2310"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-pointer relative z-10"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/Swati2310', '_blank', 'noopener,noreferrer');
                }}
              >
                <Github className="w-5 h-5" />
              </a>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.location.href = 'tel:646-729-6173'}
                className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </Button>
            </div>

            {/* Download Resume Button */}
            <Button
              variant="hero"
              size="lg"
              onClick={downloadResume}
              className="group shadow-primary"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;