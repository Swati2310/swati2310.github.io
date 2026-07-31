import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useMarquee } from "@/hooks/use-marquee";

interface Project {
  title: string;
  technologies: string[];
  count: string;
  backgroundImage?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  project,
  suppressClick,
}: {
  project: Project;
  suppressClick: () => boolean;
}) => (
  <motion.div
    className="w-[85vw] sm:w-80 lg:w-96 flex-shrink-0 bg-card text-card-foreground shadow-md rounded-lg p-6 flex flex-col hover:shadow-primary"
    whileHover={{ scale: 1.045 }}
    transition={{ type: "spring", stiffness: 300, damping: 22 }}
  >
    {project.backgroundImage && (
      <div className="mb-4 rounded-md overflow-hidden border border-border/40">
        <img
          src={project.backgroundImage}
          alt={project.title}
          className="w-full h-44 object-cover pointer-events-none"
          draggable={false}
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
          onClick={(e) => {
            if (suppressClick()) e.preventDefault();
          }}
          className="inline-flex items-center gap-1 text-primary hover:underline"
        >
          <Github className="w-4 h-4" />
          View on GitHub &rarr;
        </a>
      </div>
    )}
  </motion.div>
);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Cross-Lingual Document Retrieval System with Multimodal AI",
      technologies: ["Python", "Docker", "FastAPI", "LangChain", "EmbeddingGemma", "Weaviate", "OpenWebUI", "Salesforce BLIP", "Qwen 2.5 VLM"],
      count: "9",
      backgroundImage: "/Attached_image.png",
      githubUrl: "https://github.com/Swati2310/unified_multilingual_RAG"
    },
    {
      title: "CustIQ360°: Customer Intelligence Platform",
      technologies: ["Gemini 2.5 Flash", "LangGraph", "RAG", "FAISS", "Gemini Vision AI", "SSE"],
      count: "6",
      backgroundImage: "/custiq360.png",
      githubUrl: "https://github.com/Swati2310/CustIQ-360/tree/main/custiq-360"
    },
    {
      title: "MedDebate-RAG: AI-to-AI Clinical Diagnosis Debate",
      technologies: ["Gemini 2.5 Flash Lite", "LangGraph", "FAISS", "SentenceTransformers", "Streamlit", "Plotly", "fpdf2"],
      count: "7",
      backgroundImage: "/meddebate-rag.png",
      githubUrl: "https://github.com/Swati2310/MedDebateRag"
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

  const { setRef, x, isPausedRef, isDraggingRef, prefersReducedMotion } = useMarquee({
    speed: 40,
    itemCount: visibleProjects.length,
  });

  // A real drag (movement past a small threshold) shouldn't also fire the
  // GitHub link's click — this tracks that and suppresses the next click.
  const dragDistanceRef = useRef(0);
  const suppressNextClick = () => dragDistanceRef.current > 5;

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

        {/* Projects Marquee */}
        {prefersReducedMotion ? (
          // Reduced-motion fallback: no auto-scroll, plain manually-scrollable row.
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} suppressClick={() => false} />
            ))}
          </div>
        ) : (
          <div
            className="overflow-hidden"
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
          >
            <motion.div
              className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragMomentum={false}
              dragElastic={0}
              onDragStart={() => {
                isDraggingRef.current = true;
                dragDistanceRef.current = 0;
              }}
              onDrag={(_, info) => {
                dragDistanceRef.current += Math.abs(info.delta.x);
              }}
              onDragEnd={() => {
                isDraggingRef.current = false;
                // Give the click handler a moment to see the drag distance before resetting.
                setTimeout(() => { dragDistanceRef.current = 0; }, 150);
              }}
            >
              {/* First copy — measured to determine the seamless wrap distance. */}
              <div ref={setRef} className="flex gap-8">
                {visibleProjects.map((project) => (
                  <ProjectCard key={`a-${project.title}`} project={project} suppressClick={suppressNextClick} />
                ))}
              </div>
              {/* Duplicate copy — creates the illusion of an infinite loop. */}
              <div className="flex gap-8" aria-hidden="true">
                {visibleProjects.map((project) => (
                  <ProjectCard key={`b-${project.title}`} project={project} suppressClick={suppressNextClick} />
                ))}
              </div>
            </motion.div>
          </div>
        )}

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
