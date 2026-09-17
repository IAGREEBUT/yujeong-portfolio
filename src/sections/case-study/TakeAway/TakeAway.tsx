import { motion } from "framer-motion";

export default function TakeAway() {
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
        className="mt-40 flex flex-col items-center gap-8"
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
          TAKE AWAY
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
          className="flex w-full max-w-3xl flex-col items-center px-6 text-center"
        >
          <p className="text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            This PoC showed that a reusable, AI-assisted React workflow can
            improve{" "}
            <span className="font-medium text-[var(--text-h)]">
              consistency
            </span>
            ,
            <span className="font-medium text-[var(--text-h)]">
              {" "}
              maintainability
            </span>
            , and{" "}
            <span className="font-medium text-[var(--accent)]">
              development speed
            </span>
            .
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-4 py-2 text-xs text-[var(--text-muted)]">
              React
            </span>

            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-4 py-2 text-xs text-[var(--text-muted)]">
              Figma Code Connect
            </span>

            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-4 py-2 text-xs text-[var(--text-muted)]">
              AI-Assisted Development
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
