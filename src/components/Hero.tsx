import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, MapPin } from "lucide-react";

const Hero = () => {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Swati_Resume.pdf';
    link.download = 'Swati_Resume.pdf';
    link.click();
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
        <div className="max-w-2xl w-full">
          {/* Main card */}
          <div className="gradient-card border border-border/50 rounded-2xl p-12 text-center shadow-glow animate-fade-in-up">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <img 
                    src="/ProfilePicture.png" 
                    alt="Swati - AI Software Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow">
              SWATI
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-6">
              AI Software Engineer & Data Science Expert
            </p>
            
            {/* Location and Contact */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>swati.swati@stonybrook.edu</span>
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