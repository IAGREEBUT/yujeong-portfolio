import { motion } from "framer-motion";
import AICodeBefore from "@/assets/videos/react-poc/ai-code-before.gif";
import AICodeAfter from "@/assets/videos/react-poc/ai-code-after.gif";
import AIBefore from "@/assets/videos/react-poc/ai-before.gif";
import AIAfter from "@/assets/videos/react-poc/ai-after.gif";
import DesignGuide from "@/assets/images/react-poc/design-guide.png";
import BuyScreen from "@/assets/videos/react-poc/buy.gif";
import TransactionScreen from "@/assets/videos/react-poc/transactions.gif";
import MyStockScreen from "@/assets/videos/react-poc/my-stocks.gif";

export default function Outcome() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-[950px] flex-col items-center">
        {/* Section Title */}

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
            OUTCOME
            <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)] " />
          </motion.p>
        </motion.div>

        <div>
          <div>
            {/* 1. CONSISTENT UI */}
            <div className="mt-10 mb-8 flex flex-col items-center justify-center gap-4">
              <div className="mx-auto mt-10 w-full">
                {/* Title */}
                <div className="mb-8 flex flex-col items-center pb-10">
                  <span className="mb-3 text-lg font-medium text-[var(--accent)]">
                    ❶
                  </span>

                  <div className="flex w-full items-center justify-center gap-4">
                    <div className="h-px w-8 bg-[var(--accent)]" />

                    <p className="text-lg font-medium tracking-tight text-[var(--text-h)] sm:text-xl">
                      CONSISTENT UI
                    </p>

                    <div className="h-px w-8 bg-[var(--accent)]" />
                  </div>
                </div>

                {/* Design Source */}
                <div className="mb-16 w-full">
                  <div className="mb-6 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                      01 · DESIGN SOURCE
                    </p>

                    <p className="pt-2 text-sm text-[var(--text-muted)]">
                      Figma Design Guide
                    </p>
                  </div>

                  <div className="mx-auto w-[80%] max-w-[320px]  overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                    <img
                      src={DesignGuide}
                      alt="Figma design guide"
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                {/* Same Design Input */}
                <div className="mb-8 flex items-center justify-center gap-4">
                  <div className="h-px flex-1 bg-[var(--border)]" />

                  <span className="text-xs font-semibold tracking-[0.2em] text-[var(--text-subtle)]">
                    SAME DESIGN INPUT
                  </span>

                  <div className="h-px flex-1 bg-[var(--border)]" />
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  {/* BEFORE */}
                  <div>
                    <div className="mb-5 text-center">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                        02 · BEFORE
                      </p>

                      <p className="pt-2 text-sm font-medium text-[var(--text-h)]">
                        IMAGE ONLY
                      </p>

                      <p className="pt-1 text-xs text-[var(--text-subtle)]">
                        Figma Screenshot → AI
                      </p>
                    </div>

                    <div className="mx-auto w-[80%] max-w-[350px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                      <img
                        src={AIBefore}
                        alt="AI-assisted development before"
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <p className="text-sm font-medium text-[var(--text-h)]">
                        Looks right, but...
                      </p>

                      <div className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-muted)]">
                        <p>
                          <span className="text-[var(--text-subtle)]">✕</span>{" "}
                          Inconsistent sizing
                        </p>
                        <p>
                          <span className="text-[var(--text-subtle)]">✕</span>{" "}
                          Visual-only interactions
                        </p>
                        <p>
                          <span className="text-[var(--text-subtle)]">✕</span>{" "}
                          Individual implementation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AFTER */}
                  <div>
                    <div className="mb-5 text-center">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                        03 · AFTER
                      </p>

                      <p className="pt-2 text-sm font-medium text-[var(--text-h)]">
                        COMPONENTS + RULES + IMAGE
                      </p>

                      <p className="pt-1 text-xs text-[var(--text-subtle)]">
                        Figma Code Connect + Components + Rules
                      </p>
                    </div>

                    <div className="mx-auto w-[80%] max-w-[350px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                      <img
                        src={AIAfter}
                        alt="AI-assisted development after"
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <p className="text-sm font-medium text-[var(--text-h)]">
                        Looks right + works right
                      </p>
                      <div className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-muted)]">
                        <p>
                          <span className="text-[var(--accent)]">✓</span>{" "}
                          Design-aligned sizing
                        </p>
                        <p>
                          <span className="text-[var(--accent)]">✓</span>{" "}
                          Functional interactions
                        </p>
                        <p>
                          <span className="text-[var(--accent)]">✓</span> Shared
                          components
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. CODE REUSE */}
              <div className="mt-30 w-full">
                {/* Title */}
                <div className="mb-8 flex flex-col items-center pb-10">
                  <span className="mb-3 text-lg font-medium text-[var(--accent)]">
                    ❷
                  </span>

                  <div className="flex w-full items-center justify-center gap-4">
                    <div className="h-px w-8 bg-[var(--accent)]" />

                    <p className="text-lg font-medium tracking-tight text-[var(--text-h)] sm:text-xl">
                      CLEANER, REUSABLE CODE
                    </p>

                    <div className="h-px w-8 bg-[var(--accent)]" />
                  </div>
                </div>

                {/* Code Reduction */}
                <div className="mt-12 text-center">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[var(--text-subtle)]">
                    CODE REDUCTION
                  </p>

                  <p className="pt-5 text-5xl font-medium tracking-tight text-[var(--text-h)] sm:text-5xl">
                    160 <span className="text-[var(--text-subtle)]">→</span> 80
                    <span className="ml-2 text-xl font-normal text-[var(--text-muted)]">
                      lines
                    </span>
                  </p>
                </div>

                {/* Before / After */}
                <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
                  {/* BEFORE */}
                  <div>
                    <div className="mb-5 text-center">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                        01 · BEFORE
                      </p>

                      <p className="pt-2 text-sm font-medium text-[var(--text-h)]">
                        INDIVIDUAL IMPLEMENTATION
                      </p>

                      <p className="pt-1 text-xs text-[var(--text-subtle)]">
                        Components not defined
                      </p>
                    </div>

                    <div className="mx-auto w-[80%] max-w-[350px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                      <img
                        src={AICodeBefore}
                        alt="AI-generated code before reusable components"
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <p className="text-sm font-medium text-[var(--text-h)]">
                        Similar UI, but...
                      </p>

                      <div className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-muted)]">
                        <p>
                          <span className="text-[var(--text-subtle)]">✕</span>{" "}
                          Components built as individual divs
                        </p>
                        <p>
                          <span className="text-[var(--text-subtle)]">✕</span>{" "}
                          No reusable components
                        </p>
                        <p>
                          <span className="text-[var(--text-subtle)]">✕</span>{" "}
                          160 lines of code
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AFTER */}
                  <div>
                    <div className="mb-5 text-center">
                      <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                        02 · AFTER
                      </p>

                      <p className="pt-2 text-sm font-medium text-[var(--text-h)]">
                        REUSABLE COMPONENTS
                      </p>

                      <p className="pt-1 text-xs text-[var(--text-subtle)]">
                        Figma Code Connect + Components + Rules
                      </p>
                    </div>

                    <div className="mx-auto w-[80%] max-w-[350px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                      <img
                        src={AICodeAfter}
                        alt="AI-generated code after reusable components"
                        className="h-auto w-full"
                      />
                    </div>

                    <div className="mt-5 text-center">
                      <p className="text-sm font-medium text-[var(--text-h)]">
                        Shorter, reusable code
                      </p>

                      <div className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--text-muted)]">
                        <p>
                          <span className="text-[var(--accent)]">✓</span> Use
                          shared components
                        </p>
                        <p>
                          <span className="text-[var(--accent)]">✓</span>{" "}
                          Consistent behavior across screens
                        </p>
                        <p>
                          <span className="text-[var(--accent)]">✓</span> Under
                          80 lines of code
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. PRODUCTIVITY */}
              <div className="mt-30 w-full">
                {/* Title */}
                <div className="mb-8 flex flex-col items-center pb-10">
                  <span className="mb-3 text-lg font-medium text-[var(--accent)]">
                    ❸
                  </span>

                  <div className="flex w-full items-center justify-center gap-4">
                    <div className="h-px w-8 bg-[var(--accent)]" />

                    <p className="text-lg font-medium tracking-tight text-[var(--text-h)] sm:text-xl">
                      FASTER DEVELOPMENT WITH AI
                    </p>

                    <div className="h-px w-8 bg-[var(--accent)]" />
                  </div>
                </div>

                {/* Trading Screens + Development Summary */}
                <div className="mt-14 w-full">
                  <div className="w-full">
                    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0">
                      {/* BUY */}
                      <div className="border-b border-[var(--border)] pb-10 md:border-b-0 md:border-r md:pb-0">
                        <div className="px-5 text-center">
                          <p className="pb-4 text-xs font-semibold tracking-[0.15em] text-[var(--text-h)]">
                            BUY
                          </p>

                          <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                            <img
                              src={BuyScreen}
                              alt="Buy screen"
                              className="h-auto w-full"
                            />
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="mt-8 border-t border-[var(--border)] px-5 py-5 text-center">
                          <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-muted)]">
                            EXPERIENCE
                          </p>

                          <p className="mt-2 text-sm text-[var(--text)]">
                            TypeScript only
                          </p>
                        </div>

                        {/* Development Time */}
                        <div className="border-t border-[var(--border)] px-5 py-5 text-center">
                          <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-muted)]">
                            DEVELOPMENT TIME
                          </p>

                          <p className="mt-2 text-sm font-medium text-[var(--text-h)]">
                            3 days
                          </p>
                        </div>
                      </div>

                      {/* TRANSACTION */}
                      <div className="border-b border-[var(--border)] py-10 md:border-b-0 md:border-r md:py-0">
                        <div className="px-5 text-center">
                          <p className="pb-4 text-xs font-semibold tracking-[0.15em] text-[var(--text-h)]">
                            TRANSACTION
                          </p>

                          <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                            <img
                              src={TransactionScreen}
                              alt="Transaction screen"
                              className="h-auto w-full"
                            />
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="mt-8 border-t border-[var(--border)] px-5 py-5 text-center">
                          <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-muted)]">
                            EXPERIENCE
                          </p>

                          <p className="mt-2 text-sm text-[var(--text)]">
                            No React / TypeScript
                          </p>
                        </div>

                        {/* Development Time */}
                        <div className="border-t border-[var(--border)] px-5 py-5 text-center">
                          <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-muted)]">
                            DEVELOPMENT TIME
                          </p>

                          <p className="mt-2 text-sm font-medium text-[var(--text-h)]">
                            2 days
                          </p>
                        </div>
                      </div>

                      {/* MY STOCK */}
                      <div className="pt-10 md:pt-0">
                        <div className="px-5 text-center">
                          <p className="pb-4 text-xs font-semibold tracking-[0.15em] text-[var(--text-h)]">
                            MY STOCK
                          </p>

                          <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)]">
                            <img
                              src={MyStockScreen}
                              alt="My stock screen"
                              className="h-auto w-full"
                            />
                          </div>
                        </div>

                        {/* Experience */}
                        <div className="mt-8 border-t border-[var(--border)] px-5 py-5 text-center">
                          <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-muted)]">
                            EXPERIENCE
                          </p>

                          <p className="mt-2 text-sm text-[var(--text)]">
                            No React / TypeScript
                          </p>
                        </div>

                        {/* Development Time */}
                        <div className="border-t border-[var(--border)] px-5 py-5 text-center">
                          <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-muted)]">
                            DEVELOPMENT TIME
                          </p>

                          <p className="mt-2 text-sm font-medium text-[var(--text-h)]">
                            1 day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
