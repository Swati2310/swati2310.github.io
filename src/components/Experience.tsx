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
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Cosmic Background with Particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: Math.random() > 0.5 ? '#a855f7' : '#3b82f6',
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey through various roles in AI/ML, software development, and technical leadership positions
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-blue-500 opacity-60"></div>
          
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
                  <div className="w-16 h-16 rounded-full border-4 border-purple-500/80 bg-[#0f0f1a] flex items-center justify-center shadow-lg shadow-purple-500/50">
                    {exp.type === 'Internship' ? (
                      <Code className="w-7 h-7 text-purple-400" />
                    ) : (
                      <Building className="w-7 h-7 text-purple-400" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-[#1a1a2e]/80 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Date and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-white/70 text-sm mb-2 font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full ml-2">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-white/90 font-semibold mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                        <MapPin className="w-4 h-4 text-purple-400" />
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
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <p className="text-white/90 leading-relaxed text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/20">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30 transition-colors cursor-default text-xs"
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