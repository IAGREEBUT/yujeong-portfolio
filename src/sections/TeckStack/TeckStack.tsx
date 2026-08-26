import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNestjs,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function TeckStack() {
  return (
    <section>
      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="mt-14 flex flex-col items-center gap-20"
      >
        {/* Section Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="pb-2 text-sm font-medium tracking-[0.3em] text-[var(--accent)]"
        >
          TECH STACK
        </motion.p>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="flex flex-col items-center gap-6"
        >
          {/* Frontend Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-[var(--text-muted)] opacity-40" />

            <p className="text-xs font-medium tracking-[0.25em] text-[var(--text-muted)]">
              FRONTEND
            </p>

            <span className="h-px w-8 bg-[var(--text-muted)] opacity-40" />
          </motion.div>

          <div className="flex flex-col items-center gap-5">
            {/* React / TypeScript */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="flex items-end justify-center gap-8"
            >
              {/* React */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center gap-2"
              >
                <SiReact className="h-10 w-10 text-[#61DAFB]" />

                <span className="text-sm font-medium text-[var(--text-muted)]">
                  React
                </span>
              </motion.div>

              {/* TypeScript */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center gap-2"
              >
                <SiTypescript className="h-10 w-10 text-[#3178C6]" />

                <span className="text-sm font-medium text-[var(--text-muted)]">
                  TypeScript
                </span>
              </motion.div>
            </motion.div>

            {/* Next.js / Tailwind CSS / Vite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="flex items-end justify-center gap-8"
            >
              {/* Next.js */}
              <div className="group flex flex-col items-center gap-2 opacity-70">
                <SiNextdotjs className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#000000] dark:group-hover:text-[#ffffff]" />

                <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                  Next.js
                </span>
              </div>

              {/* Tailwind CSS */}
              <div className="group flex flex-col items-center gap-2 opacity-70">
                <SiTailwindcss className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#38BDF8]" />

                <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                  Tailwind CSS
                </span>
              </div>

              {/* Vite */}
              <div className="group flex flex-col items-center gap-2 opacity-70">
                <SiVite className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#646CFF]" />

                <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                  Vite
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col items-center gap-6"
        >
          {/* Backend Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              ease: "easeOut",
            }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-[var(--text-muted)] opacity-40" />

            <p className="text-xs font-medium tracking-[0.25em] text-[var(--text-muted)]">
              BACKEND
            </p>

            <span className="h-px w-8 bg-[var(--text-muted)] opacity-40" />
          </motion.div>

          {/* Backend Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
              ease: "easeOut",
            }}
            className="flex flex-wrap items-end justify-center gap-8"
          >
            {/* NestJS */}
            <div className="group flex flex-col items-center gap-2 opacity-70">
              <SiNestjs className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#E0234E]" />

              <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                NestJS
              </span>
            </div>

            {/* Spring Boot */}
            <div className="group flex flex-col items-center gap-2 opacity-70">
              <SiSpringboot className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#6DB33F]" />

              <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                Spring Boot
              </span>
            </div>

            {/* PostgreSQL */}
            <div className="group flex flex-col items-center gap-2 opacity-70">
              <SiPostgresql className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#4169E1]" />

              <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                PostgreSQL
              </span>
            </div>

            {/* MongoDB */}
            <div className="group flex flex-col items-center gap-2 opacity-70">
              <SiMongodb className="h-7 w-7 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[#47A248]" />

              <span className="text-xs text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-h)]">
                MongoDB
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
