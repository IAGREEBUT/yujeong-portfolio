import profileImg from "@/assets/images/profile/profile_img.jpeg";
import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";

// profile image animation props
interface AboutProps {
  imageX?: MotionValue<number>;
  imageOpacity?: MotionValue<number>;
  imageScale?: MotionValue<number>;
  aboutDescriptionOpacity?: MotionValue<number>;
  contentOpacity?: MotionValue<number>;
  contentY?: MotionValue<number>;
}

export default function About({
  imageX,
  imageScale,
  imageOpacity,
  aboutDescriptionOpacity,
  contentOpacity,
  contentY,
}: AboutProps) {
  return (
    <section
      id="about"
      className="relative h-full overflow-hidden bg-transparent"
    >
      <div className="mx-auto grid h-full max-w-[var(--content-width)] grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="flex flex-col items-start text-left"
        >
          <p className="mb-4 text-sm font-medium text-[var(--accent)]">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-[0.08em] text-[var(--text-h)] sm:text-5xl">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
              YUJEONG
            </span>
          </h2>

          <p className="mt-6 text-xl font-medium text-[var(--text-strong)] sm:text-lg">
            Software Engineer | Frontend-focused
          </p>

          <motion.div
            style={{ opacity: aboutDescriptionOpacity }}
            className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[var(--text-muted)] sm:text-sm"
          >
            <p>
              I’m a frontend-focused software engineer who enjoys turning
              complex ideas into simple, maintainable products.
            </p>

            <p>
              With experience in financial services and React-based development,
              I care about both how products work and how they’re built.
            </p>

            <p>
              I like taking ownership beyond my code — from solving technical
              problems to improving development workflows.
            </p>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        {/* Profile Image */}
        <motion.div
          style={{
            x: imageX,
            opacity: imageOpacity,
            scale: imageScale,
          }}
          className="relative h-[520px] w-[460px] rotate-[-8deg]"
        >
          {/* Blue Blob */}
          <motion.div
            animate={{
              borderRadius: [
                "35% 65% 60% 40%",
                "55% 45% 35% 65%",
                "65% 35% 55% 45%",
                "40% 60% 65% 35%",
                "35% 65% 60% 40%",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-400 to-blue-300 p-[2px]"
          >
            {/* White Blob */}
            <motion.div
              animate={{
                borderRadius: [
                  "35% 65% 60% 40%",
                  "55% 45% 35% 65%",
                  "65% 35% 55% 45%",
                  "40% 60% 65% 35%",
                  "35% 65% 60% 40%",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-full w-full items-end justify-center overflow-hidden bg-white"
            >
              {/* Profile Image */}
              <img
                src={profileImg}
                alt="profile_img"
                className="h-full w-full object-cover object-top rotate-[8deg]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
