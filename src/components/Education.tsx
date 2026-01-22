import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Stony Brook University (SUNY), New York",
      period: "August 2024 – May 2026",
      location: "New York, USA",
      type: "master",
      current: true,
      image: "/sbu-university.jpg"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Chitkara Institute of Science and Technology, India",
      period: "July 2015 – May 2019",
      location: "India",
      gpa: "8.97/10.00",
      type: "bachelor",
      current: false,
      image: "/chitkara-university.jpg"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in Data Science and Computer Science
          </p>
        </div>
        
        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group animate-slide-in-right ${
                edu.image ? '' : 'gradient-card'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background image for each institution */}
              {edu.image && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.78] group-hover:opacity-80 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${edu.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/78 via-background/72 to-background/78" />
                </>
              )}

              <CardContent className="relative z-10 p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Education Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${edu.type === 'master' ? 'bg-primary/25 text-white' : 'bg-accent/25 text-white'} group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md group-hover:text-primary-foreground transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-white/90 font-medium mb-4 drop-shadow-sm">
                        {edu.institution}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-3 text-white/90 drop-shadow-sm">
                          <Calendar className="w-4 h-4 text-primary/90" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 drop-shadow-sm">
                          <MapPin className="w-4 h-4 text-accent/90" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-3 text-white/90 drop-shadow-sm">
                            <Award className="w-4 h-4 text-primary/90" />
                            <span className="text-sm">GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  {edu.current && (
                    <div className="flex-shrink-0">
                      <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full backdrop-blur-sm bg-background/80 border border-border/50 shadow-sm">
                        Current
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;