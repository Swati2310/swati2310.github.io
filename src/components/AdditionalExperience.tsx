import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Shield } from "lucide-react";

const AdditionalExperience = () => {
  const additionalExperiences = [
    {
      title: "Residential Safety Program (RSP) - Early Shift Student Assistant",
      company: "Stony Brook University",
      location: "Stony Brook, United States",
      period: "November 2025 – Present",
      type: "Part-time",
      current: true,
      image: "/campus_rsp.jpg",
      achievements: [
        "Served as a front-facing campus representative providing walk-escort services, coordinating dispatch operations, and maintaining incident documentation while ensuring facility safety compliance through routine inspections of residential halls and safety equipment"
      ],
      skills: ["Communication", "Administrative Support", "Safety Compliance", "Documentation", "Customer Service", "Emergency Response", "Campus Operations"]
    }
  ];

  return (
    <section id="additional-experience" className="py-20 px-6">
      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 animate-pop-up">
          <h2 className="text-2xl font-bold mb-2 text-primary">Additional Experience</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Campus involvement and professional development
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {additionalExperiences.map((exp, index) => (
            <div
              key={index}
              className="relative animate-pop-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Content Card */}
              <div className="gradient-card rounded-lg border border-border/50 p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group animate-pop-up hover:animate-pop-up-hover"
                style={{ animationDelay: `${index * 0.3 + 0.1}s` }}
              >
                {/* Date and Title */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-muted-foreground text-xs mb-1.5 font-medium flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-semibold rounded-full ml-2">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-start gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-primary mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-foreground font-semibold text-xs mb-1">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          <span>{exp.location}</span>
                          <span className="mx-1">•</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-1.5 mb-3">
                  {typeof exp.achievements === 'string' ? (
                    <p className="text-muted-foreground leading-relaxed text-xs">{exp.achievements}</p>
                  ) : (
                    exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed text-xs">{achievement}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Experience Image */}
                {exp.images && Array.isArray(exp.images) && exp.images.length > 0 && (
                  <div className="w-[calc(100%+2rem)] -mx-4 mb-3 grid grid-cols-2 gap-2">
                    {exp.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="overflow-hidden border-x-0 border-y border-border/60 bg-card h-32">
                        <img
                          src={img}
                          alt={`${exp.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {exp.image && !exp.images && (
                  <div className="w-[calc(100%+2rem)] -mx-4 overflow-hidden border-x-0 border-y border-border/60 bg-card mb-3 h-32">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-xs py-0.5 px-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalExperience;
