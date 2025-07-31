import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, BarChart3, Music, Dumbbell } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NYC Crime Report Analysis in R",
      category: "R | Statistics | Machine Learning Algorithms | Exploratory Data Analysis | Data Visualization",
      description: "Led borough-level crime pattern prediction in NYC using R, implementing advanced machine learning models (Random Forest, SVM, Decision Trees) with Random Forest achieving 97.24% test accuracy.",
      technologies: ["R", "Statistics", "Machine Learning", "Random Forest", "SVM", "Decision Trees"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Sparkify: Music App Churn Prediction",
      category: "Python | PySpark | Scikit-learn | Apache Kafka",
      description: "Developed a data streaming pipeline from Kafka cluster and Hadoop Distributed File System (HDFS) as a data store. Predicted customer churn with an F1 score of 0.8996 for the fictitious music streaming service using PySpark.",
      technologies: ["Python", "PySpark", "Scikit-learn", "Apache Kafka", "Hadoop", "Machine Learning"],
      icon: <Music className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "Fitness Center Database Management System",
      category: "Python | MySQL | Streamlit",
      description: "Designed and implemented database system for a fitness center, incorporating over 10 entities and relationships with 45+ tuples using EER diagrams and applying agile methodologies throughout the development phase with targeted business queries for data insights.",
      technologies: ["Python", "MySQL", "Streamlit", "Database Design", "SQL", "Data Modeling"],
      icon: <Dumbbell className="w-6 h-6" />,
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary';
      case 'accent':
        return 'bg-accent/20 text-accent';
      case 'secondary':
        return 'bg-secondary/40 text-secondary-foreground';
      default:
        return 'bg-primary/20 text-primary';
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning Data Science, Machine Learning, and Software Engineering
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(project.color)} group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-accent font-medium mb-3">
                      {project.category}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group hover:bg-primary hover:border-primary"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group hover:bg-accent hover:border-accent"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
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