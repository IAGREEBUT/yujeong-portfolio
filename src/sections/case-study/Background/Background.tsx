import { motion } from "framer-motion";
import { SiAndroid } from "react-icons/si";
import MireaNpay1 from "@/assets/images/captures/mirae_npay_1.jpg";
import MireaNpay3 from "@/assets/images/captures/mirae_npay_3.jpg";
import {
  ArrowRight,
  ArrowRightLeft,
  LayoutGrid,
  Zap,
  FileCode2,
  LayoutTemplate,
  MousePointer2,
} from "lucide-react";

export default function Background() {
  return (
    <section className="relative px-6 py-24">
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
        className="mt-14 flex flex-col items-center"
      >
        <div className="flex w-full max-w-[950px] flex-col items-center gap-30">
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
            WHY THIS POC?
            <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)]" />
          </motion.p>

          {/* Existing Mobile App */}
          <div className="flex w-full max-w-[950px] flex-col items-center gap-15 px-10">
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
              ❶ Existing Mobile App
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="w-full max-w-5xl"
            >
              <div className="flex flex-col items-center">
                {/* Architecture Diagram */}
                <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center">
                  {/* Native */}
                  <div className="flex-1 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg-muted)] to-[var(--bg)] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-muted)] text-[var(--text-strong)]">
                        <SiAndroid className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-lg font-bold text-[var(--text-h)]">
                          Native
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          iOS / Android
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-muted)] px-4 py-3">
                        <LayoutGrid className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                        <span className="text-sm text-[var(--text)]">
                          Native UI Components
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-muted)] px-4 py-3">
                        <Zap className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                        <span className="text-sm text-[var(--text)]">
                          Native Functions
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex shrink-0 flex-col items-center justify-center gap-3 text-[var(--accent)]">
                    <span className="text-sm">bridge</span>

                    <ArrowRightLeft
                      className="h-6 w-6 rotate-90 md:rotate-0"
                      strokeWidth={1.5}
                    />

                    <span className="text-sm">call</span>
                  </div>

                  {/* Lua Layer */}
                  <div className="flex-1 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg-muted)] to-[var(--bg)] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-muted)] text-[var(--text-strong)]">
                        <FileCode2 className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-lg font-bold text-[var(--text-h)]">
                          Lua Layer
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          Lua Script
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-muted)] px-4 py-3">
                        <LayoutTemplate className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                        <span className="text-sm text-[var(--text)]">
                          Screen Layout
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-[var(--bg-muted)] px-4 py-3">
                        <MousePointer2 className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                        <span className="text-sm text-[var(--text)]">
                          Screen Logic / Event
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Architecture Description */}
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
              className="mt-10 max-w-2xl text-center text-sm leading-7 text-[var(--text-muted)] sm:text-base"
            >
              This architecture enabled fast screen development and updates
              without a full app release. However, new development needs
              introduced three key challenges.
            </motion.p>
          </div>

          {/* Three Key Challenges */}
          <div className="flex w-full max-w-[950px] flex-col items-center gap-15 px-10">
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
              ❷ Three Key Challenges
            </motion.p>

            {/* Three Needs Cards */}
            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
              {/* DESIGN */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
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
                className="
        group relative flex aspect-square flex-col items-center justify-center
        overflow-hidden rounded-full
        border border-blue-200
        bg-gradient-to-br from-blue-50 via-white to-sky-50
        px-10 text-center
        shadow-[0_20px_60px_rgba(37,99,235,0.08)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
      "
              >
                {/* Decorative glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />

                {/* Step */}
                <span className="absolute top-[18%] text-[10px] font-medium tracking-[0.25em] text-[var(--accent)]">
                  ❶ DESIGN
                </span>

                {/* Main Concept */}
                <div className="relative mt-4">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-h)]">
                    DESIGN → CODE
                  </h3>
                </div>

                {/* Details */}
                <div className="relative mt-6 flex flex-col items-center gap-3 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <span>Figma</span>
                    <span className="text-[var(--accent)]">→</span>
                    <span>React</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>Design consistency</span>
                  </div>
                </div>
              </motion.div>

              {/* AI DEVELOPMENT */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
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
                className="
        group relative flex aspect-square flex-col items-center justify-center
        overflow-hidden rounded-full
        border border-blue-200
        bg-gradient-to-br from-blue-50 via-white to-sky-50
        px-10 text-center
        shadow-[0_20px_60px_rgba(37,99,235,0.08)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
      "
              >
                {/* Decorative glow */}
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />

                {/* Step */}
                <span className="absolute top-[18%] text-[10px] font-medium tracking-[0.25em] text-[var(--accent)]">
                  ❷ AI DEVELOPMENT
                </span>

                {/* Main Concept */}
                <div className="relative mt-4">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-h)]">
                    AI-ASSISTED
                  </h3>
                </div>

                {/* Details */}
                <div className="relative mt-6 flex flex-col items-center gap-3 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <span>AI-ready workflow</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>Reusable components</span>
                  </div>
                </div>
              </motion.div>

              {/* ARCHITECTURE */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="
        group relative flex aspect-square flex-col items-center justify-center
        overflow-hidden rounded-full
        border border-blue-200
        bg-gradient-to-br from-blue-50 via-white to-sky-50
        px-10 text-center
        shadow-[0_20px_60px_rgba(37,99,235,0.08)]
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
      "
              >
                {/* Decorative glow */}
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl transition-all duration-500 group-hover:bg-blue-400/20" />

                {/* Step */}
                <span className="absolute top-[18%] text-[10px] font-medium tracking-[0.25em] text-[var(--accent)]">
                  ❸ ARCHITECTURE
                </span>

                {/* Main Concept */}
                <div className="relative mt-4">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--text-h)]">
                    WEB-BASED
                  </h3>
                </div>

                {/* Details */}
                <div className="relative mt-6 flex flex-col items-center gap-3 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <span>Native</span>
                    <span className="text-[var(--accent)]">→</span>
                    <span>Web</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>Reuse trading services</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Existing Trading Infrastructure */}
          <div className="flex w-full max-w-[950px] flex-col items-center gap-15">
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
              ❸ Existing Trading Infrastructure
            </motion.p>

            {/* Existing Service */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="w-full max-w-5xl"
            >
              <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
                {/* Screenshots */}
                <div className="grid grid-cols-2 gap-4">
                  {[MireaNpay1, MireaNpay3].map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)]"
                    >
                      <img
                        src={image}
                        alt={`Mirae Asset Securities Naver Securities simple order ${
                          index + 1
                        }`}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="flex flex-col items-start text-left">
                  {/* Existing */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                      Existing Web Service
                    </p>

                    <p className="mt-2 text-lg font-semibold text-[var(--text-h)]">
                      Mirae Asset × Naver Securities "Simple Order" Service
                    </p>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                      Using Vanilla Js, WebSocket, Rest API
                    </p>
                  </div>

                  {/* Transition */}
                  <div className="my-7 flex w-full justify-center text-[var(--accent)]">
                    <ArrowRight
                      className="h-6 w-6 rotate-90"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Rebuilt */}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                      Rebuilt
                    </p>

                    <p className="mt-2 text-lg font-semibold text-[var(--text-h)]">
                      React-based Trading App PoC
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                      Reusing existing trading services
                      <br />
                      (WebSocket + REST API)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
