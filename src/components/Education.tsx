import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Stony Brook University (SUNY), New York",
      period: "August 2024 – May 2026",
      location: "New York, USA",
      type: "master",
      current: false,
      status: "Graduated",
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
      image: "/chitkara.jpg"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-pop-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in Data Science and Computer Science
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-primary group animate-pop-up hover:animate-pop-up-hover flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Institution Image - At the top */}
              {edu.image && (
                <div className="w-full overflow-hidden bg-card h-52">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{edu.period}</span>
                  {(edu.current || edu.status) && (
                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-semibold rounded-full ml-2">
                      {edu.current ? "Current" : edu.status}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${edu.type === "master" ? "bg-primary/30" : "bg-accent/30"} group-hover:scale-110 transition-transform duration-300 border border-primary/30`}>
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-foreground font-semibold text-sm">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3 border-t border-border/50 mt-auto text-muted-foreground text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-accent" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
