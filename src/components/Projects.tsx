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
      count: "9"
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
              className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(project.color)} group-hover:scale-110 transition-transform duration-300 border`}>
                      {project.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{project.count}+</div>
                    <div className="text-xs text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className={`transition-colors cursor-default text-xs ${getBadgeColor(project.color)}`}
                    >
                      {tech}
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

export default Projects;