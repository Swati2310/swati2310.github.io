import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Code } from "lucide-react";

const Experience = () => {
  const experiences = [
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
      achievements: "Developed and deployed a Railway Transportation Ticket Management System using Java, Spring Boot, and Angular 4, ensuring system reliability and scalability for customer operations. Designed and implemented RESTful APIs for seamless frontend-backend integration and optimized SQL queries for efficient database operations. Collaborated with cross-functional teams to resolve industry-based customer complaint queries, applying data structures and Python for data analysis and problem-solving. Completed comprehensive training in enterprise software development, full-stack technologies, and agile methodologies.",
      skills: ["Java", "Spring Boot", "REST APIs", "Angular 4", "SQL", "Python", "Data Structures", "Full-Stack Development", "System Design", "Agile Methodologies"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-pop-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </div>
        
        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-40"></div>
          
          {/* Experience Timeline - Horizontal Scroll */}
          <div className="overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
            <div className="flex lg:flex-row flex-col gap-8 lg:min-w-max">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 lg:w-96 w-full animate-pop-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Icon - Above card on desktop, left on mobile */}
                  <div className="absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-6 left-0 top-6 lg:top-0 z-20">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-primary/60 bg-card flex items-center justify-center shadow-lg shadow-primary/30">
                      {exp.type === 'Internship' ? (
                        <Code className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
                      ) : (
                        <Building className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Connecting Line - Only on desktop */}
                  {index < experiences.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-8 h-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
                  )}

                  {/* Content Card */}
                  <div className="gradient-card rounded-xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-primary group hover:animate-pop-up-hover lg:mt-16 mt-0 lg:ml-0 ml-12 h-full flex flex-col">
                    {/* Date and Title */}
                    <div className="mb-4">
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
                    
                    {/* Achievements */}
                    <div className="space-y-3 mb-6 flex-grow">
                      {typeof exp.achievements === 'string' ? (
                        <p className="text-muted-foreground leading-relaxed text-sm">{exp.achievements}</p>
                      ) : (
                        (exp.achievements as string[]).map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Experience Image(s) */}
                    {exp.images && Array.isArray(exp.images) && exp.images.length > 0 && (
                      <div className="w-full mb-6 grid grid-cols-2 gap-2">
                        {exp.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="overflow-hidden border border-border/60 bg-card h-32 rounded-lg">
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
                      <div className="w-full overflow-hidden border border-border/60 bg-card mb-6 h-48 rounded-lg">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
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
      </div>
    </section>
  );
};

export default Experience;