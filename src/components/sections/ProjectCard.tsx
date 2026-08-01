import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  // show full tech stack and apply consistent pill styling
  const visibleTechStack = project.techStack;

  return (
    <motion.div
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden hover:border-signal/40">
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden bg-ink">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.categories.slice(0, 2).map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </div>

          <Link to={`/projects/${project.slug}`}>
            <h3 className="font-display text-lg font-semibold text-paper transition-colors group-hover:text-signal">
              {project.title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-fog">
            {project.description}
          </p>

          <div className="mt-auto">
            <div className="mt-4 flex flex-wrap gap-2 items-center min-h-[48px]">
              {visibleTechStack.map((tech) => (
                <Badge
                  key={tech}
                  className="shadow-sm transition-transform duration-150 hover:scale-105"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="my-5" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }} />

            <div className="pt-4">
            <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-signal">
              <Link
                to={`/projects/${project.slug}`}
                className="transition-colors hover:text-paper"
              >
                View Details
              </Link>

              {project.sourceUrl ? (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link flex items-center gap-1.5 transition-colors hover:text-paper"
                >
                  <Github
                    size={14}
                    className="text-signal transition-transform duration-200 group-hover/link:-translate-y-0.5"
                  />
                  GitHub
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-fog/60">
                  <Github size={14} className="text-fog/60" />
                  GitHub
                </span>
              )}

              <span className="text-line">|</span>

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link flex items-center gap-1.5 transition-colors hover:text-paper"
                >
                  <ArrowUpRight
                    size={14}
                    className="text-signal transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-1.5 text-fog/60">
                  <ArrowUpRight size={14} className="text-fog/60" />
                  Live Demo
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      </Card>
    </motion.div>
  );
}