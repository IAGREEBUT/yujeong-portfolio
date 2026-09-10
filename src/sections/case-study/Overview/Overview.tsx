import { motion } from "framer-motion";

export default function Overview() {
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
          PROJECT OVERVIEW
          <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)] " />
        </motion.p>

        {/* Description */}
        <motion.p
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
          className="max-w-2xl text-center text-sm leading-7 text-[var(--text-muted)] sm:text-base px-10"
        >
          A technical PoC exploring whether a React-based web architecture could
          support modern trading UI/UX while integrating existing trading
          services.
        </motion.p>
      </motion.div>
    </section>
  );
}
