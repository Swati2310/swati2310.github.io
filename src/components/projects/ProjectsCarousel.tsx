import { useRef, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import ProjectCard, { type Project } from "./ProjectCard";
import CarouselControls from "./CarouselControls";

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

const ProjectsCarousel = () => {
  const dragDistanceRef = useRef(0);

  const {
    viewportRef,
    setRef,
    x,
    activeIndex,
    isPausedRef,
    isInteractingRef,
    prefersReducedMotion,
    goToNext,
    goToPrev,
    registerCardRef,
  } = useInfiniteCarousel({ itemCount: projects.length, speed: 35 });

  const suppressClick = () => dragDistanceRef.current > 5;

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
  };

  const renderCopy = (copy: 0 | 1) =>
    projects.map((project, i) => {
      const renderIndex = copy * projects.length + i;
      return (
        <ProjectCard
          key={`${copy}-${project.title}`}
          ref={registerCardRef(renderIndex)}
          project={project}
          renderIndex={renderIndex}
          isActive={renderIndex === activeIndex}
          isNeighbor={Math.abs(renderIndex - activeIndex) === 1}
          prefersReducedMotion={prefersReducedMotion}
          suppressClick={suppressClick}
        />
      );
    });

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-pop-up">
          <h2 className="text-4xl font-bold mb-4 text-primary">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning Data Science, Machine Learning, and Software Engineering
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={viewportRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          onKeyDown={handleKeyDown}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          className="relative overflow-x-hidden overflow-y-visible py-8 rounded-2xl carousel-edge-fade focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <motion.div
            className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
            style={{ x, willChange: "transform" }}
            drag="x"
            dragMomentum={false}
            dragElastic={0}
            onDragStart={() => {
              isInteractingRef.current = true;
              dragDistanceRef.current = 0;
            }}
            onDrag={(_, info) => {
              dragDistanceRef.current += Math.abs(info.delta.x);
            }}
            onDragEnd={() => {
              isInteractingRef.current = false;
              window.setTimeout(() => { dragDistanceRef.current = 0; }, 150);
            }}
          >
            {/* First copy — measured to determine the seamless wrap distance and card step. */}
            <div ref={setRef} className="flex gap-8">
              {renderCopy(0)}
            </div>
            {/* Duplicate copy — creates the illusion of an infinite loop. */}
            <div className="flex gap-8" aria-hidden="true">
              {renderCopy(1)}
            </div>
          </motion.div>

          <CarouselControls onPrev={goToPrev} onNext={goToNext} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
