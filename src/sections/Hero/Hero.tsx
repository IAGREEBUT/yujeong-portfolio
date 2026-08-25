import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)]">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/25 blur-[100px]"
        animate={{
          scale: [1, 1.08, 1],
          x: ["-50%", "-47%", "-50%"],
          y: ["-50%", "-53%", "-50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        className="absolute left-[58%] top-[42%] h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-[90px]"
        animate={{
          x: [0, 30, -15, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-[var(--content-width)] flex-col items-center px-6 text-center gap-5">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold tracking-[0.1em] text-[var(--text-h)] sm:text-6xl md:text-7xl"
        >
          I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            YUJEONG
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 text-2xl font-medium text-[var(--text-strong)] sm:text-xl"
        >
          Software Engineer | Frontend-focused
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base text-[var(--text-muted)] sm:text-md"
        >
          I build user-focused web products with React and TypeScript, combining
          hands-on development with technical ownership.
        </motion.p>

        {/* Tech Stacks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-2 flex items-center gap-8"
        >
          <SiReact className="h-5 w-5 text-[#61DAFB]" />
          <SiTypescript className="h-5 w-5 text-[#3178C6]" />
          <SiNextdotjs className="h-5 w-5 text-black dark:text-white" />
        </motion.div>
      </div>
    </section>
  );
}
