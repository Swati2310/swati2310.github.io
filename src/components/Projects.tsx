import { useRef, useState } from "react";
import { Github } from "lucide-react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Cross-Lingual Document Retrieval System with Multimodal AI",
      technologies: ["Python", "Docker", "FastAPI", "LangChain", "EmbeddingGemma", "Weaviate", "OpenWebUI", "Salesforce BLIP", "Qwen 2.5 VLM"],
      count: "9",
      backgroundImage: "/Attached_image.png",
      githubUrl: "https://github.com/Swati2310/unified_multilingual_RAG"
    },
    {
      title: "Netflix Recommender System at Scale",
      technologies: ["Python", "PySpark", "Spark MLlib ALS", "MPI", "Slurm", "SeaWulf HPC", "NeuMF", "Parquet", "Numba", "PyTorch", "AWS/GPFS"],
      count: "11",
      backgroundImage: "/Netflix-Recommendation-Engine-Working-StartupTalky.jpg",
      githubUrl: "https://github.com/Swati2310/NetflixRecommenderSystem"
    },
    {
      title: "Real-Time Demand Forecasting with Advanced ML Pipeline",
      technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "ONNX", "FastAPI"],
      count: "7",
      backgroundImage: "/demand-forecasting.jpg"
    },
    {
      title: "NYC Crime Pattern Analysis & Predictive Modeling",
      technologies: ["R", "Statistics", "Machine Learning", "EDA", "Data Visualization", "Random Forest", "SVM", "Decision Trees"],
      count: "8",
      backgroundImage: "/nyccrime.jpeg",
      githubUrl: "https://github.com/Swati2310/NYC_Crime_Analysis_in_R"
    },
    {
      title: "Enterprise Fitness Center Database Management System",
      technologies: ["Python", "MySQL", "Streamlit", "SQL/PL-SQL", "Database Design", "EER Diagrams", "Data Modeling"],
      count: "7",
      backgroundImage: "/database_fitness.png",
      githubUrl: "https://github.com/Swati2310/Fitness_database_system"
    }
  ];

  const visibleCount = 3;
  const hasMore = projects.length > visibleCount;
  const visibleProjects = showAll ? projects : projects.slice(0, visibleCount);

  const toggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-pop-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning Data Science, Machine Learning, and Software Engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card text-card-foreground shadow-md rounded-lg p-6 flex flex-col transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.03] animate-pop-up"
              style={{ animationDelay: `${(index % visibleCount) * 0.1}s` }}
            >
              {project.backgroundImage && (
                <div className="mb-4 rounded-md overflow-hidden border border-border/40">
                  <img
                    src={project.backgroundImage}
                    alt={project.title}
                    className="w-full h-44 object-cover"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="flex-grow mb-4 text-sm text-muted-foreground">
                {project.count}+ Technologies
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-muted text-muted-foreground px-2 py-1 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <div className="mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={toggleShowAll}
              className="bg-primary text-primary-foreground font-bold px-6 py-3 rounded-md transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
