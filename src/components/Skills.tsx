import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Brain, Award, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "primary",
      count: "7+",
      skills: ["Python", "R", "C++", "Shell Scripting", "Bash", "SQL/PL-SQL", "Linux", "UNIX"]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="w-6 h-6" />,
      color: "accent",
      count: "8+",
      skills: ["Pandas", "NumPy", "Exploratory Data Analysis (EDA)", "Statistical Learning", "Statistical Computing", "Probability", "Scikit-Learn", "PyTorch", "Tableau"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "secondary",
      count: "14+",
      skills: ["Kubernetes", "Docker", "Git", "Ansible", "AWS", "OpenShift", "Jenkins", "GitLab", "Tortoise SVN", "JIRA", "WinSCP", "RabbitMQ"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "primary",
      count: "5+",
      skills: ["Relational DBMS", "Excel", "Oracle 11g/12c/19c", "MySQL", "Data Warehousing"]
    }
  ];

  const awards = [
    "Insta Award (Infosys)",
    "Constant Contributor Badge (Infosys)"
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
    <section id="skills" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise spanning multiple domains including AI/ML, software development, and various programming languages
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary group animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)} group-hover:scale-110 transition-transform duration-300 border`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{category.count}</div>
                    <div className="text-xs text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={`transition-colors cursor-default text-xs ${getBadgeColor(category.color)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Awards Section */}
        <Card className="gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/20 text-accent border border-accent/30">
                <Award className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Awards & Recognition</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {awards.map((award, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {award}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground text-sm">Years Experience</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-accent mb-2">30+</div>
            <div className="text-muted-foreground text-sm">Technologies</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground text-sm">Projects Delivered</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground text-sm">Major Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;