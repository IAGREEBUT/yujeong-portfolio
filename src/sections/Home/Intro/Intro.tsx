import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "@/sections/Home/Hero/Hero";
import About from "@/sections/Home/About/About";

export default function Intro() {
  const introRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"],
  });

  // Hero: center → left
  const heroX = useTransform(scrollYProgress, [0, 0.5], [0, -300]);
  const heroDescriptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 1],
    [1, 1, 0, 0]
  );
  const headingSize = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["4.5rem", "3rem"]
  );
  const roleSize = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["1.5rem", "1.125rem"]
  );
  const heroHeadingOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 1],
    [1, 1, 0, 0]
  );
  const heroHeadingY = useTransform(scrollYProgress, [0.25, 0.45], [0, -16]);
  const heroRoleOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 1],
    [1, 1, 0, 0]
  );
  const heroRoleY = useTransform(scrollYProgress, [0.25, 0.45], [0, -16]);
  const heroSnsOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 1],
    [1, 1, 0, 0]
  );

  // About: right → center
  const aboutX = useTransform(scrollYProgress, [0, 0.5], [300, 0]);
  const imageX = useTransform(scrollYProgress, [0.15, 0.5], [80, 0]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 1],
    [0, 0, 1, 1]
  );
  const imageScale = useTransform(scrollYProgress, [0.15, 0.5], [0.95, 1]);
  const aboutDescriptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [0, 0, 1, 1]
  );
  const aboutContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0, 0, 1, 1]
  );

  const aboutContentY = useTransform(scrollYProgress, [0.3, 0.5], [16, 0]);

  return (
    <section ref={introRef} className="relative">
      {/* Scroll Space */}
      <div className="relative min-h-[350vh]">
        {/* Viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Shared Background */}
          <div className="pointer-events-none absolute inset-0">
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
          </div>

          {/* Hero */}
          <motion.div className="absolute inset-0 z-10">
            <Hero
              contentX={heroX}
              headingSize={headingSize}
              roleSize={roleSize}
              descriptionOpacity={heroDescriptionOpacity}
              headingOpacity={heroHeadingOpacity}
              headingY={heroHeadingY}
              roleOpacity={heroRoleOpacity}
              roleY={heroRoleY}
              snsOpacity={heroSnsOpacity}
            />
          </motion.div>

          {/* About */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ x: aboutX }}
          >
            <About
              imageX={imageX}
              imageScale={imageScale}
              imageOpacity={imageOpacity}
              aboutDescriptionOpacity={aboutDescriptionOpacity}
              contentOpacity={aboutContentOpacity}
              contentY={aboutContentY}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
