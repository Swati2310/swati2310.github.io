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
      achievements: [
        "Built XGBoost regression models for demand forecasting achieving 85% R² accuracy and 7.2 MAE while handling 121-day dataset with 66.9% missing data through advanced interpolation strategies",
        "Engineered comprehensive feature pipeline creating 15+ features including time-series lags (3, 5, 7 days), rolling statistics, weather correlations, and temporal indicators for ML model training",
        "Implemented advanced data preprocessing handling missing values, outlier detection using IQR methodology, and automated feature engineering pipeline for real-time inference",
        "Constructed production ML infrastructure exporting models to ONNX format, implementing model serialization with metadata management, and deploying live forecasting API with configurable horizons (1-30 days)",
        "Maximized model performance through hyperparameter tuning, cross-validation strategies, and feature selection achieving improved accuracy over baseline models (Prophet R² = -229 vs XGBoost R² = 0.85)"
      ],
      skills: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "ONNX", "FastAPI", "Time Series", "Feature Engineering", "Model Deployment"]
    },
    {
      title: "Senior Software Engineer",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "August 2021 – July 2024",
      type: "Full-time",
      current: false,
      achievements: [
        "Installed Finacle Core Banking on OpenShift and AWS clusters, establishing and managing environments for 20+ applications, with 5 installations annually to address new functional business requirements and updates",
        "Built and deployed JFrog and ECR images in Kubernetes namespaces and AWS, automating patch deployments and managing deliverables, resulting in a 85% reduction in deployment time and an 80% increase in deployment accuracy",
        "Deployed and managed Dockerized applications on AWS EKS, using Kubernetes, Docker, Ansible, and GitLab to create 15+ CI/CD pipelines, achieving a 40% reduction in infrastructure costs through optimized resource allocation and scalability",
        "Led a DevOps team of 3 in managing end-to-end development and operations for projects in SEPA and APAC region, overseeing CI/CD, E2E, and production environments for 50+ integrations, driving efficiency for client (BOFFA)",
        "Hosted and managed Escrow deposit deployments for Finacle applications across 3+ versions with NCC Group in the UK region for Bank of America as a third-party client"
      ],
      skills: ["OpenShift", "AWS", "Kubernetes", "Docker", "Ansible", "GitLab", "Python", "SQL", "PL/SQL", "JavaScript", "Jenkins", "Finacle"]
    },
    {
      title: "Software Engineer",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "August 2019 – July 2021",
      type: "Full-time",
      current: false,
      achievements: [
        "Maintained OLAP data and production environment reliability for Finacle e-banking by replicating and creating 50+ databases across multiple accounts to support application structure changes in the APAC region",
        "Managed and optimized 10+ cloud servers by configuring crontab jobs, archiving logs, ensuring efficient disk management, and using Jenkins CI/CD pipelines for source code deployment, backups, and memory alerts",
        "Generated 20+ detailed reports with RReport, optimizing backend processes through complex SQL and PL/SQL queries",
        "Enhanced Finacle's functionality for an investment banking firm by customizing 100+ web pages and menus using JavaScript and JSPs"
      ],
      skills: ["SQL", "PL/SQL", "JavaScript", "Jenkins", "Finacle", "RReport", "JSP"]
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
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Experience Image (optional) - between achievements and skills */}
                  {exp.image && (
                    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-border/60 shadow-md bg-card mb-6">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-auto max-h-64 object-contain"
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