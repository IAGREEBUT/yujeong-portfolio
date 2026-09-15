import { motion } from "framer-motion";

export default function MyRole() {
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
        className="mt-14 flex flex-col items-center gap-8"
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
          MY ROLE
          <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)] " />
        </motion.p>

        {/* Description */}
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="grid w-full max-w-4xl grid-cols-1 gap-4 px-6 md:grid-cols-3"
        >
          {/* Frontend Development */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-6 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-accent)] text-sm font-semibold text-[var(--accent)]">
              01
            </div>

            <p className="text-xs font-semibold tracking-[0.12em] text-[var(--text-h)]">
              FRONTEND
            </p>

            <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
              Built the React frontend and integrated existing REST APIs and
              WebSocket services.
            </p>
          </div>

          {/* Design-to-Code Workflow */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-6 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-accent)] text-sm font-semibold text-[var(--accent)]">
              02
            </div>

            <p className="text-xs font-semibold tracking-[0.12em] text-[var(--text-h)]">
              DESIGN → CODE
            </p>

            <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
              Built reusable components with Figma Code Connect and defined AI
              development rules.
            </p>
          </div>

          {/* Technical Leadership */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-6 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-accent)] text-sm font-semibold text-[var(--accent)]">
              03
            </div>

            <p className="text-xs font-semibold tracking-[0.12em] text-[var(--text-h)]">
              TECHNICAL LEAD
            </p>

            <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
              Led 4 junior developers and aligned the team's implementation
              approach.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
