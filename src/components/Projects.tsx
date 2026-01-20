import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, Globe, Film, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cross-Lingual Document Retrieval System with Multimodal AI",
      technologies: ["Python", "Docker", "FastAPI", "LangChain", "EmbeddingGemma", "Weaviate", "OpenWebUI", "Salesforce BLIP", "Qwen 2.5 VLM"],
      icon: <Globe className="w-6 h-6" />,
      color: "primary",
      count: "9",
      backgroundImage: "/Attached_image.png"
    },
    {
      title: "Netflix Recommender System at Scale",
      technologies: ["Python", "PySpark", "Spark MLlib ALS", "MPI", "Slurm", "SeaWulf HPC", "NeuMF", "Parquet", "Numba", "PyTorch", "AWS/GPFS"],
      icon: <Film className="w-6 h-6" />,
      color: "accent",
      count: "11"
    },
    {
      title: "Real-Time Demand Forecasting with Advanced ML Pipeline",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "ONNX", "FastAPI"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "primary",
      count: "7"
    },
    {
      title: "NYC Crime Pattern Analysis & Predictive Modeling",
      technologies: ["R", "Statistics", "Machine Learning", "EDA", "Data Visualization", "Random Forest", "SVM", "Decision Trees"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "secondary",
      count: "8"
    },
    {
      title: "Enterprise Fitness Center Database Management System",
      technologies: ["Python", "MySQL", "Streamlit", "SQL/PL-SQL", "Database Design", "EER Diagrams", "Data Modeling"],
      icon: <Database className="w-6 h-6" />,
      color: "accent",
      count: "7"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'accent':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'secondary':
        return 'bg-secondary/40 text-secondary-foreground border-secondary/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'hover:bg-primary hover:text-primary-foreground';
      case 'accent':
        return 'hover:bg-accent hover:text-accent-foreground';
      case 'secondary':
        return 'hover:bg-secondary hover:text-secondary-foreground';
      default:
        return 'hover:bg-primary hover:text-primary-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning Data Science, Machine Learning, and Software Engineering
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary group animate-slide-in-right ${
                project.backgroundImage ? '' : 'gradient-card'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image with Overlay */}
              {project.backgroundImage && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${project.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background/80" />
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/50 transition-colors duration-500" />
                </>
              )}
              
              {/* Content */}
              <div className="relative z-10">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${getColorClasses(project.color)} group-hover:scale-110 transition-transform duration-300 border backdrop-blur-sm bg-background/80`}>
                        {project.icon}
                      </div>
                      <CardTitle className={`text-lg group-hover:text-primary transition-colors ${project.backgroundImage ? 'text-foreground drop-shadow-sm' : ''}`}>
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${project.backgroundImage ? 'text-primary drop-shadow-sm' : 'text-primary'}`}>
                        {project.count}+
                      </div>
                      <div className={`text-xs ${project.backgroundImage ? 'text-foreground/80 drop-shadow-sm' : 'text-muted-foreground'}`}>
                        Technologies
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className={`transition-colors cursor-default text-xs backdrop-blur-sm bg-background/80 border-border/50 ${getBadgeColor(project.color)}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;