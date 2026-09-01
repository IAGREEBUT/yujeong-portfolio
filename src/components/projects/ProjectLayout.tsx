import { motion } from "framer-motion";
import Badge from "@/components/common/Badge";
import { SiGithub } from "react-icons/si";
// import { Github, ExternalLink } from "lucide-react";

interface ProjectLayoutProps {
  title: string;
  type: "Personal" | "Company";
  visibility: "Public" | "Case Study" | "Rebuilt";
  description: string;
  technologies: string[];
  image: string[];
  github?: string;
  demo?: string;
}

export default function ProjectLayout({
  title,
  type,
  visibility,
  description,
  technologies,
  image,
  github,
  demo,
}: ProjectLayoutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="w-full px-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
    >
      {/* Project Image */}
      <div
        className={
          image.length === 1
            ? "aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
            : "flex items-center justify-center gap-4"
        }
      >
        {image.map((src, index) => (
          <div
            key={src}
            className={`
        overflow-hidden rounded-2xl border border-[var(--border)] bg-white
        ${index > 0 ? "hidden md:block" : ""}
        ${image.length === 1 ? "h-full w-full" : ""}
      `}
          >
            <img
              src={src}
              alt={`${title} preview ${index + 1}`}
              className={
                image.length === 1
                  ? "h-full w-full object-cover"
                  : "h-[420px] w-auto object-contain"
              }
            />
          </div>
        ))}
      </div>

      {/* Project Information */}
      <div className="flex flex-col items-start gap-5">
        {/* Title / Type / Visibility */}
        <div className="flex flex-col items-start gap-3">
          {/* Title */}
          <h3 className="text-3xl font-bold tracking-tight text-[var(--text-h)]">
            {title}
          </h3>

          {/* Type / Visibility */}
          <div className="flex items-center gap-2">
            <Badge label={type} />
            <Badge label={visibility} />
          </div>
        </div>

        {/* Description */}
        <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {technologies.map((technology, index) => (
            <span
              key={technology}
              className="text-sm font-medium text-[var(--text)]"
            >
              {technology}
              {index < technologies.length - 1 && (
                <span className="ml-3 text-[var(--text-muted)]">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-h)] transition-colors hover:text-[var(--accent)]"
            >
              <SiGithub className="h-5 w-5" />
              <span>↗</span>
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--text-h)] transition-colors hover:text-[var(--accent)]"
            >
              <span>Live Demo ↗ </span>
              {/* <ExternalLink className="h-5 w-5" /> */}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
