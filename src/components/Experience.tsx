import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
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
    },
    {
      title: "AI Software Engineer Intern",
      company: "Volithost LLC",
      location: "Florida, United States",
      period: "May 2025 – August 2025",
      type: "Internship",
      current: false,
      image: "/Voltihost_Image.png",
      achievements: "Developed XGBoost demand forecasting models achieving 85% R² accuracy and 7.2 MAE on 121-day dataset with 66.9% missing data. Engineered feature pipeline with 15+ time-series features (lags, rolling statistics, weather correlations) and deployed production ML infrastructure with ONNX export and FastAPI forecasting service supporting 1-30 day horizons. Optimized performance through hyperparameter tuning, improving from Prophet R² = -229 to XGBoost R² = 0.85.",
      skills: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "ONNX", "FastAPI", "Time Series", "Feature Engineering", "Model Deployment"]
    },
    {
      title: "Senior Software Engineer",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "August 2021 – July 2024",
      type: "Full-time",
      current: false,
      images: ["/infosys.jpg", "/BOFA.webp"],
      achievements: "Installed and managed Finacle Core Banking on OpenShift and AWS clusters for 20+ applications with 5 annual installations. Built and deployed JFrog and ECR images in Kubernetes, automating patch deployments to achieve 85% reduction in deployment time and 80% increase in accuracy. Deployed Dockerized applications on AWS EKS using Kubernetes, Docker, Ansible, and GitLab, creating 15+ CI/CD pipelines and achieving 40% reduction in infrastructure costs. Led DevOps team of 3 managing end-to-end operations for SEPA and APAC projects, overseeing 50+ integrations for BOFFA client. Managed Escrow deposit deployments for Finacle applications across 3+ versions with NCC Group for Bank of America.",
      skills: ["OpenShift", "AWS", "Kubernetes", "Docker", "Ansible", "GitLab", "Python", "SQL", "PL/SQL", "JavaScript", "Jenkins", "Finacle"]
    },
    {
      title: "Software Engineer",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "August 2019 – July 2021",
      type: "Full-time",
      current: false,
      image: "/InfosysPune.jpg",
      achievements: "Maintained OLAP data and production environment reliability for Finacle e-banking by replicating and creating 50+ databases across multiple accounts to support application structure changes in the APAC region. Managed and optimized 10+ cloud servers using Jenkins CI/CD pipelines for source code deployment, backups, and memory alerts. Generated 20+ detailed reports with RReport, optimizing backend processes through complex SQL and PL/SQL queries. Enhanced Finacle's functionality for an investment banking firm by customizing 100+ web pages and menus using JavaScript and JSPs.",
      skills: ["SQL", "PL/SQL", "JavaScript", "Jenkins", "Finacle", "RReport", "JSP"]
    },
    {
      title: "Software Engineer Intern",
      company: "Infosys Ltd.",
      location: "Mysore, Karnataka, India",
      period: "January 2019 – July 2019",
      type: "Internship",
      current: false,
      image: "/mysore.jpg",
      achievements: "Completed comprehensive internship training program at Infosys, gaining hands-on experience in software development and enterprise technologies. Worked on real-world projects involving database management, backend development, and system integration. Participated in training modules covering software engineering best practices, development methodologies, and industry-standard tools and frameworks.",
      skills: ["Software Development", "Database Management", "Backend Development", "System Integration", "Training & Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-40"></div>
          
          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-0">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/60 bg-card flex items-center justify-center shadow-lg shadow-primary/30">
                    {exp.type === 'Internship' ? (
                      <Code className="w-7 h-7 text-primary" />
                    ) : (
                      <Building className="w-7 h-7 text-primary" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="gradient-card rounded-xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group">
                  {/* Date and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-muted-foreground text-sm mb-2 font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full ml-2">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-foreground font-semibold mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{exp.location}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {typeof exp.achievements === 'string' ? (
                      <p className="text-muted-foreground leading-relaxed text-sm">{exp.achievements}</p>
                    ) : (
                      exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Experience Image(s) (optional) - between achievements and skills */}
                  {exp.images && Array.isArray(exp.images) && exp.images.length > 0 && (
                    <div className="w-[calc(100%+3rem)] -mx-6 mb-6 grid grid-cols-2 gap-2">
                      {exp.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="overflow-hidden border-x-0 border-y border-border/60 bg-card h-64">
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
                    <div className="w-[calc(100%+3rem)] -mx-6 overflow-hidden border-x-0 border-y border-border/60 bg-card mb-6 h-64">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-xs"
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
      </div>
    </section>
  );
};

export default Experience;