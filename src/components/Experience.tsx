import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      current: true,
      achievements: [
        "Spearheading the development of a Sales Analytical Tool (MVP) for Get Up and Go Kayaking, enabling data-driven business insights from real-time weather and booking data",
        "Designed a React + TypeScript frontend and deployed secure backend APIs using Python, Supabase, and PostgreSQL to serve filtered booking and weather data to the frontend",
        "Integrated OpenWeather API to collect real-time weather metrics and correlate them with booking trends for predictive insights",
        "Implemented visual dashboards using D3.js-style charts and deployed scalable infrastructure via Cloudflare and Vercel",
        "Applied EDA and ML techniques, including time-series forecasting and customer segmentation, to support predictive analytics and strategic decisions"
      ],
      skills: ["Python", "React", "TypeScript", "Supabase", "PostgreSQL", "D3.js", "OpenWeather API", "Cloudflare", "Vercel", "Machine Learning"]
    },
    {
      title: "Senior Software Engineer",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "August 2019 – July 2024",
      type: "Full-time",
      current: false,
      achievements: [
        "Installed Finacle Core Banking on OpenShift and AWS clusters, establishing and managing environments for 20+ applications, with 5 installations annually to address new functional business requirements and updates",
        "Built and deployed JFrog and ECR images in Kubernetes namespaces and AWS, automating patch deployments and managing deliverables, resulting in a 85% reduction in deployment time and an 80% increase in deployment accuracy",
        "Deployed and managed Dockerized applications on AWS EKS, using Kubernetes, Docker, Ansible, and GitLab to create 15+ CI/CD pipelines, achieving a 40% reduction in infrastructure costs through optimized resource allocation and scalability",
        "Led a DevOps team of 3 in managing end-to-end development and operations for projects in SEPA and APAC region, overseeing CI/CD, E2E, and production environments for 50+ integrations, driving efficiency for client (BOFFA)",
        "Hosted and managed Escrow deposit deployments for Finacle applications across 3+ versions with NCC Group in the UK region for Bank of America as a third-party client",
        "Maintained OLAP data and production environment reliability for Finacle e-banking by replicating and creating 50+ databases across multiple accounts to support application structure changes in the APAC region",
        "Managed and optimized 10+ cloud servers by configuring crontab jobs, archiving logs, ensuring efficient disk management, and using Jenkins CI/CD pipelines for source code deployment, backups, and memory alerts",
        "Generated 20+ detailed reports with RReport, optimizing backend processes through complex SQL and PL/SQL queries",
        "Enhanced Finacle's functionality for an investment banking firm by customizing 100+ web pages and menus using JavaScript and JSPs"
      ],
      skills: ["OpenShift", "AWS", "Kubernetes", "Docker", "Ansible", "GitLab", "Python", "SQL", "PL/SQL", "JavaScript", "Jenkins", "Finacle"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey through various roles in AI/ML, software development, and technical leadership positions
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${exp.type === 'Internship' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'} group-hover:scale-110 transition-transform duration-300`}>
                      {exp.type === 'Internship' ? <Code className="w-6 h-6" /> : <Building className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        {exp.current && (
                          <div className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                            Current
                          </div>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-accent mb-2">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row gap-2 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm font-medium text-muted-foreground lg:text-right">
                    {exp.type}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;