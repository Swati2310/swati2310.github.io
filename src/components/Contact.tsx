import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "swati.swati@stonybrook.edu",
      href: "mailto:swati.swati@stonybrook.edu",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "646-729-6173",
      href: "tel:646-729-6173",
      color: "accent"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/swati-swati-eng/",
      color: "primary"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/Swati2310",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary';
      case 'accent':
        return 'bg-accent/20 text-accent';
      default:
        return 'bg-primary/20 text-primary';
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-glow">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities in Data Science, AI, or Software Engineering
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's discuss opportunities"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Swati, I'd like to discuss..."
                    required
                    rows={6}
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation. 
                Whether you're looking for a data scientist, AI engineer, or want to explore potential partnerships, I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group cursor-pointer"
                  onClick={() => {
                    if (method.href.startsWith('tel:')) {
                      // For phone numbers, use window.location.href
                      window.location.href = method.href;
                    } else if (method.href.startsWith('mailto:')) {
                      // For email, use window.location.href
                      window.location.href = method.href;
                    } else if (method.href.startsWith('http')) {
                      // For web links, open in new tab
                      window.open(method.href, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${getColorClasses(method.color)} group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="gradient-card border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary/40 text-secondary-foreground">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Current Location</h4>
                    <p className="text-muted-foreground text-sm">New York, United States</p>
                    <p className="text-muted-foreground text-xs">Open to remote opportunities worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;