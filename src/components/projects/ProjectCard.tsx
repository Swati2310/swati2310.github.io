import { forwardRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github } from "lucide-react";

export interface Project {
  title: string;
  technologies: string[];
  count: string;
  backgroundImage?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  renderIndex: number;
  isActive: boolean;
  isNeighbor: boolean;
  prefersReducedMotion: boolean;
  suppressClick: () => boolean;
}

/**
 * A single carousel card. Two independent transform mechanisms are deliberately
 * kept on separate DOM layers so they never fight each other:
 *  - the outer `motion.div` owns every Framer-animated numeric value (scale, lift,
 *    opacity, 3D tilt) — CSS animations are never applied to this element.
 *  - the "float" wrapper and the image's ambient-zoom wrapper each own a plain CSS
 *    keyframe animation on their own transform, composing visually through nesting.
 * Shadow/brightness (the "spotlight" glow) are done as plain Tailwind classes with
 * a CSS transition rather than Framer-animated strings, since interpolating
 * `hsl(var(--primary))`-based box-shadow strings through Framer's JS parser is
 * unreliable — the browser's native CSS transition handles it correctly.
 */
const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, renderIndex, isActive, isNeighbor, prefersReducedMotion, suppressClick }, ref) => {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 18 });
    const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 18 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      rotateY.set((px - 0.5) * 8); // max ~4deg either way
      rotateX.set(-(py - 0.5) * 8);
    };

    const resetTilt = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    const restingScale = isActive ? 1.06 : isNeighbor ? 0.95 : 0.9;
    const restingOpacity = isActive ? 1 : isNeighbor ? 0.9 : 0.65;
    const restingY = isActive ? -10 : 0;

    const shadowClass = isActive
      ? "shadow-[0_24px_60px_-12px_hsl(var(--primary)/0.55)]"
      : "shadow-[0_6px_16px_-6px_hsl(0_0%_0%/0.2)]";
    const brightnessClass = isActive ? "brightness-105" : isNeighbor ? "brightness-95" : "brightness-90";

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        animate={{ scale: restingScale, opacity: restingOpacity, y: restingY }}
        whileHover={
          prefersReducedMotion
            ? undefined
            : { scale: 1.05, y: -10 }
        }
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 900,
          willChange: "transform, opacity",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className={`group relative w-[85vw] sm:w-80 lg:w-96 flex-shrink-0 rounded-lg filter transition-all duration-500 ease-out hover:shadow-[0_26px_64px_-12px_hsl(var(--primary)/0.65)] hover:brightness-110 ${shadowClass} ${brightnessClass}`}
      >
        <div
          className={`bg-card text-card-foreground rounded-lg p-6 flex flex-col h-full ${
            prefersReducedMotion ? "" : "animate-card-float"
          }`}
          style={prefersReducedMotion ? undefined : { animationDelay: `${(renderIndex % 5) * 0.5}s` }}
        >
          {project.backgroundImage && (
            <div className="mb-4 rounded-md overflow-hidden border border-border/40">
              <div
                className={prefersReducedMotion ? "" : "animate-ambient-zoom"}
                style={prefersReducedMotion ? undefined : { animationDelay: `${(renderIndex % 4) * 0.8}s` }}
              >
                <img
                  src={project.backgroundImage}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07] pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          )}

          <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
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
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
