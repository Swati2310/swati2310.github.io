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
      current: true
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Chitkara Institute of Science and Technology, India",
      period: "July 2015 – May 2019",
      location: "India",
      gpa: "8.97/10.00",
      type: "bachelor",
      current: false
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
              className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Education Info */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg ${edu.type === 'master' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'} group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-4">
                        {edu.institution}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-sm">GPA: {edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  {edu.current && (
                    <div className="flex-shrink-0">
                      <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
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