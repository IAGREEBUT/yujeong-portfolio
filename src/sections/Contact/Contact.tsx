import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isEscaped, setIsEscaped] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!isEscaped) return;

    const handleMouseMove = () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }

      resetTimer.current = setTimeout(() => {
        setIsEscaped(false);
        setNoPosition({
          x: 0,
          y: 0,
        });
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, [isEscaped]);

  return (
    <section id="contact" className="relative w-full px-6 py-24">
      <div className="mx-auto max-w-[var(--content-width)]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-[var(--accent)]">
            CONTACT
          </p>

          <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)]" />
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Description */}
          <p className="max-w-lg text-base leading-8 text-[var(--text-muted)]">
            I'm open to software engineering opportunities
            <br />
            in Brisbane or fully remote roles worldwide.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/yujeong-lee-au"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <TiSocialLinkedin className="h-6 w-6 text-[var(--text-muted)] transition-colors hover:text-[#0A66C2] " />
            </a>

            <span className="text-sm text-[var(--text-muted)]">·</span>

            <a
              href="https://github.com/IAGREEBUT"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5 text-[var(--text-muted)] transition-colors hover:text-[#181717]" />
            </a>

            <span className="text-sm text-[var(--text-muted)]">·</span>

            <a href="mailto:lyujeong.dev@gmail.com" aria-label="Email">
              <SiGmail className="h-5 w-5 text-[var(--text-muted)] transition-colors hover:text-[#EA4335]" />
            </a>
          </div>

          {/* Let's Work Together */}
          <div className="mt-10 w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            {/* Question */}
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-6">
              <p className="text-lg font-medium tracking-wide text-white">
                LET'S WORK TOGETHER!
              </p>
            </div>

            {/* Options */}
            <div className="relative flex flex-col gap-3 p-5">
              {/* YES */}
              <motion.a
                href="mailto:lyujeong.dev@gmail.com"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.15 }}
                className="flex min-h-16 items-center rounded-2xl bg-[var(--bg-subtle)] px-6 text-base font-medium text-[var(--text-h)] ring-1 ring-inset ring-[var(--border)] transition-colors hover:bg-[var(--accent)]/20 hover:text-white"
              >
                YES
              </motion.a>

              {/* NO */}
              <motion.a
                type="button"
                animate={
                  isEscaped
                    ? {
                        left: `${noPosition.x}px`,
                        top: `${noPosition.y}px`,
                      }
                    : undefined
                }
                onMouseEnter={() => {
                  const buttonWidth = 100;
                  const buttonHeight = 64;
                  const padding = 20;

                  const x =
                    Math.random() *
                      (window.innerWidth - buttonWidth - padding * 2) +
                    padding;

                  const y =
                    Math.random() *
                      (window.innerHeight - buttonHeight - padding * 2) +
                    padding;

                  setNoPosition({
                    x,
                    y,
                  });

                  setIsEscaped(true);
                }}
                onClick={() => {
                  setShowError(true);
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
                className={
                  isEscaped
                    ? "fixed z-50 flex min-h-16 w-[100px] items-center justify-center rounded-2xl bg-[var(--bg-subtle)] text-base font-medium text-[var(--text-h)] ring-1 ring-inset ring-[var(--border)]"
                    : "flex min-h-16 w-full items-center rounded-2xl bg-[var(--bg-subtle)] px-6 text-base font-medium text-[var(--text-h)] ring-1 ring-inset ring-[var(--border)]"
                }
              >
                NO
              </motion.a>

              {/* Placeholder */}
              {isEscaped && (
                <div className="min-h-16 w-full" aria-hidden="true" />
              )}
            </div>
          </div>
          {/* Error Modal */}
          {showError && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6 backdrop-blur-[2px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-md overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] text-left shadow-2xl"
              >
                {/* Error Window Header */}
                <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3 bg-white/40">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />

                  <span className="ml-2 text-xs text-[var(--text-muted)]">
                    system_error.exe
                  </span>
                </div>

                {/* Error Content */}
                <div className="px-7 py-8 bg-white/40">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-xl text-red-500">
                      !
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-[var(--text-h)]">
                        404: Collaboration Not Found
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[var(--text-h)]">
                        Looks like you rejected the opportunity.
                      </p>
                    </div>
                  </div>

                  {/* Error Details */}
                  <div className="mt-6 rounded-lg bg-[var(--bg-subtle)] px-4 py-3 font-mono text-xs leading-6 text-[var(--text-muted)]">
                    <p>ERROR_CODE: 404</p>
                    <p>STATUS: COLLABORATION_NOT_FOUND</p>
                    <p>CAUSE: USER_CLICKED_NO</p>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    onClick={() => setShowError(false)}
                    className="mt-6 w-full rounded-lg bg-[var(--text-h)] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    TRY AGAIN
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
