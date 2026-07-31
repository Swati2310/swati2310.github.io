import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Code } from "lucide-react";

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId: number;
    let direction = 1;
    let lastTime: number | null = null;
    const speed = 0.03; // pixels per millisecond

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPausedRef.current) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 0) {
          let next = el.scrollLeft + direction * speed * delta;
          if (next >= maxScroll) {
            next = maxScroll;
            direction = -1;
          } else if (next <= 0) {
            next = 0;
            direction = 1;
          }
          el.scrollLeft = next;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const experiences = [
    {
      title: "AI Research Assistant",
      company: "Stony Brook University",
      location: "New York, United States",
      period: "May 2026 – Present",
      type: "Part-time",
      current: true,
      image: "/ceas.jpg",
      achievements: "Building an LLM simulation and causal inference pipeline to benchmark how well GPT, Claude, and Centaur replicate human survey responses against 144 real respondents.",
      skills: ["Python", "LLM Evaluation", "GPT", "Claude", "SQLite", "Causal Inference", "Anthropic API", "OpenAI API"]
    },
    {
      title: "AI Software Engineer Intern",
      company: "Voltihost LLC",
      location: "New York, United States",
      period: "May 2025 – August 2025",
      type: "Internship",
      current: false,
      image: "/Voltihost_Image.png",
      achievements: "Built an ML demand forecasting pipeline (91% accuracy) and an agentic GPT-4o text-to-SQL system enabling sales teams to query forecasting data in natural language.",
      skills: ["Python", "ONNX", "Vercel", "GPT-4o", "Function Calling", "Time Series Forecasting", "Feature Engineering", "Text-to-SQL"]
    },
    {
      title: "Senior Software Engineer (ML)",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "January 2022 – May 2024",
      type: "Full-time",
      current: false,
      image: "/InfosysPune.jpg",
      achievements: "Built and deployed ML-powered support automation for Finacle e-banking — ticket classification, LLM-based summarization/retrieval, and document classification — cutting SLA times and saving $0.6M annually.",
      skills: ["DistilBERT", "MLflow", "AWS SageMaker", "CodePipeline", "QLoRA", "Llama 2", "LangChain", "FAISS", "AWS Textract", "AWS Lambda", "Finacle"]
    },
    {
      title: "Software Engineer",
      company: "Infosys Ltd.",
      location: "Pune, India",
      period: "August 2019 – December 2021",
      type: "Full-time",
      current: false,
      images: ["/infosys.jpg", "/BOFA.jpg"],
      achievements: "Led DevOps for Bank of America's Finacle banking integrations — building CI/CD pipelines, Kubernetes deployments, and cloud infrastructure supporting $3M in annual client revenue.",
      skills: ["DevOps", "AWS EKS", "Kubernetes", "JFrog", "ECR", "CI/CD", "GitLab", "Ansible", "OpenShift", "Finacle", "Cron Automation"]
    },
    {
      title: "Software Engineer Intern",
      company: "Infosys Ltd.",
      location: "Mysore, Karnataka, India",
      period: "January 2019 – July 2019",
      type: "Internship",
      current: false,
      image: "/mysore.jpg",
      achievements: "Developed and deployed Railway Transportation Ticket Management System using Java, Spring Boot, and Angular 4. Designed RESTful APIs and optimized SQL queries for efficient database operations.",
      skills: ["Java", "Spring Boot", "REST APIs", "Angular 4", "SQL", "Python", "Data Structures", "Full-Stack Development", "System Design", "Agile Methodologies"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5 relative overflow-hidden">
      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-6 animate-pop-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </div>
        
        {/* Horizontal Timeline Container - Full Width */}
        <div className="relative w-full">
          {/* Horizontal Timeline Line - Full Width */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-40"></div>
          
          {/* Experience Timeline - Horizontal Scroll - Full Width */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-8 pt-8 scrollbar-hide w-full"
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
            onTouchStart={() => { isPausedRef.current = true; }}
            onTouchEnd={() => { isPausedRef.current = false; }}
          >
            <div className="flex lg:flex-row flex-col gap-8 lg:min-w-max px-6 lg:px-12 lg:pr-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 lg:w-96 w-full animate-pop-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Icon - Above card on desktop, left on mobile */}
                  <div className="absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-8 left-0 top-6 lg:top-0 z-20">
                    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-4 border-primary/60 bg-card flex items-center justify-center shadow-lg shadow-primary/30">
                      {exp.type === 'Internship' ? (
                        <Code className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                      ) : (
                        <Building className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Connecting Line - Only on desktop */}
                  {index < experiences.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-8 h-1 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40"></div>
                  )}

                  {/* Content Card */}
                  <div className="gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-primary group hover:animate-pop-up-hover lg:mt-20 mt-0 lg:ml-0 ml-12 h-full flex flex-col shadow-lg">
                    {/* Experience Image(s) - At the top */}
                    {exp.images && Array.isArray(exp.images) && exp.images.length > 0 && (
                      <div className="w-full grid grid-cols-2 gap-0">
                        {exp.images.map((img, imgIndex) => (
                          <div key={imgIndex} className="overflow-hidden bg-card h-52">
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
                      <div className="w-full overflow-hidden bg-card h-52">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Date and Title */}
                      <div className="mb-3">
                        <div className="text-muted-foreground text-xs mb-1.5 font-medium flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{exp.period}</span>
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-semibold rounded-full ml-2">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-foreground font-semibold text-sm mb-1.5">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          <span>{exp.location}</span>
                          <span className="mx-1">•</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>

                      {/* Achievements - Condensed */}
                      <div className="mb-3 flex-grow">
                        <div className="flex gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed text-xs">{exp.achievements}</p>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50 mt-auto">
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