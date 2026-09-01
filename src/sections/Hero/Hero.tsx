import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { SiGithub, SiGmail } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";

interface HeroProps {
  contentX?: MotionValue<number>;
  headingSize?: MotionValue<string>;
  roleSize?: MotionValue<string>;
  descriptionOpacity?: MotionValue<number>;
  headingOpacity?: MotionValue<number>;
  headingY?: MotionValue<number>;
  roleOpacity?: MotionValue<number>;
  roleY?: MotionValue<number>;
  snsOpacity?: MotionValue<number>;
}

export default function Hero({
  contentX,
  headingSize,
  roleSize,
  descriptionOpacity,
  headingOpacity,
  headingY,
  roleOpacity,
  roleY,
  snsOpacity,
}: HeroProps) {
  return (
    <section className="relative flex h-full items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 w-full px-6">
        <motion.div
          style={contentX ? { x: contentX } : undefined}
          className="mx-auto flex max-w-[var(--content-width)] flex-col items-center gap-5 text-center"
        >
          {/* Heading */}
          <motion.h1
            style={{
              fontSize: headingSize,
              opacity: headingOpacity,
              y: headingY,
            }}
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
            max-[767px]:!text-[clamp(2.75rem,12vw,4.5rem)]
            text-5xl
            font-bold
            tracking-[0.1em]
            text-[var(--text-h)]
          "
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
              YUJEONG
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            style={{
              fontSize: roleSize,
              opacity: roleOpacity,
              y: roleY,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 text-2xl font-medium text-[var(--text-strong)]"
          >
            Software Engineer | Frontend-focused
          </motion.p>

          {/* Description */}
          <motion.p
            style={{ opacity: descriptionOpacity }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base text-[var(--text-muted)] sm:text-md"
          >
            I build user-focused web products with React and TypeScript,
            combining hands-on development with technical ownership.
          </motion.p>

          {/* Social */}
          <motion.div
            style={{ opacity: snsOpacity }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-2 flex items-center gap-8"
          >
            <a
              href="https://github.com/IAGREEBUT"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <SiGithub className="h-7 w-7 text-[#181717] transition-transform duration-200 hover:scale-110 dark:text-[#ffffff]" />
            </a>

            <a
              href="https://www.linkedin.com/in/yujeong-lee-au"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <TiSocialLinkedin className="h-7 w-7 text-[#0A66C2] transition-transform duration-200 hover:scale-110" />
            </a>
            <a href="mailto:lyujeong.dev@gmail.com">
              <SiGmail className="h-7 w-7 text-[#EA4335] transition-transform duration-200 hover:scale-110" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
