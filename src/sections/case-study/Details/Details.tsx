import { motion } from "framer-motion";
import figmaCodeVideo from "@/assets/videos/react-poc/code-connect-demo.MOV";
import realTimePrice from "@/assets/videos/react-poc/buy.gif";
import { SiCursor } from "react-icons/si";

export default function Details() {
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
          className="mt-1 flex flex-col items-center gap-8"
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
            className=" text-sm font-medium tracking-[0.3em] text-[var(--accent)]"
          >
            THE POC
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
            className="max-w-2xl text-center text-sm text-[var(--text-muted)] sm:text-base px-10"
          >
            A React-based trading experience built on existing trading services.
          </motion.p>
        </motion.div>

        {/* 01 DESIGN → CODE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
          className="mt-24 w-full"
        >
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <p className="text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl">
              01
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl">
              DESIGN → CODE
            </h2>
          </div>
          {/* Introduction */}
          <p className="pt-4 max-w-2xl text-base leading-5 text-[var(--text)] sm:text-sm ">
            Created a consistent design-to-code workflow and enabled the team to
            reuse shared components across screens.
          </p>

          <div className="mt-12">
            {/* Figma → React Video */}
            <div className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
              <video
                src={figmaCodeVideo}
                controls
                playsInline
                className="h-auto w-full"
              />
            </div>
            {/* Description */}
            <div className="mx-auto mt-12 max-w-3xl ">
              {/* WHY */}
              <div className="flex items-start pb-5">
                <span className="rounded-full bg-[var(--accent-bg)] px-3 py-1 text-xs font-semibold tracking-[0.15em] text-[var(--accent)]">
                  WHAT
                </span>
              </div>

              <p className="text-base leading-8 text-[var(--text)] sm:text-lg">
                Connected Figma components to reusable React components using
                Figma Code Connect, with component properties mapped to their
                React props.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 02 AI-ASSISTED DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
          className="mt-32 w-full"
        >
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <p className="text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl">
              02
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl">
              AI-ASSISTED DEVELOPMENT
            </h2>
          </div>

          {/* Introduction */}
          <p className="pt-4 max-w-2xl text-base leading-5 text-[var(--text)] sm:text-sm ">
            AI-assisted development initially produced visually similar screens,
            but implementations and interactions varied between developers.
          </p>

          {/* 3. SCALED AI-ASSISTED DEVELOPMENT */}
          <div className="mt-24 w-full">
            <div className="mx-auto max-w-3xl">
              <p className="text-center text-xs font-semibold tracking-[0.25em] text-[var(--accent)] pb-5">
                AI-ASSISTED DEVELOPMENT WORKFLOW
              </p>
              {/* 4 Developers + Cursor + Design Guide */}
              <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-3">
                {/* Developers */}
                <div className=" p-6">
                  <p className="mt-4 text-center text-3xl font-semibold tracking-tight text-[var(--text-h)]">
                    4
                  </p>

                  <p className="mt-1 text-center text-sm font-medium text-[var(--text-h)]">
                    Junior Developers
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                      <span>A </span>
                      <span>TS + React</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                      <span>B</span>
                      <span>No React experience</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
                      <span>C</span>
                      <span>No React/TS experience</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>D</span>
                      <span>No React/TS experience</span>
                    </div>
                  </div>
                </div>

                {/* + */}
                <div className="hidden items-center justify-center text-2xl font-light text-[var(--text-subtle)] sm:flex">
                  +
                </div>

                {/* Cursor */}
                <div className="flex flex-col items-center justify-center p-6 gap-3">
                  <SiCursor
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    style={{ color: "#111111" }}
                  />

                  <p className="mt-3 text-sm font-semibold text-[var(--text-h)]">
                    Cursor AI
                  </p>

                  <p className="mt-1 text-center text-xs leading-5 text-[var(--text-muted)]">
                    AI-assisted development
                  </p>
                </div>

                {/* + */}
                <div className="hidden items-center justify-center text-2xl font-light text-[var(--text-subtle)] sm:flex">
                  +
                </div>

                {/* Design Guide */}
                <div className="flex flex-col items-center justify-center p-6 gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent-border)] bg-white text-sm font-semibold text-[var(--accent)]">
                    .md
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[var(--text-h)]">
                    AI dev Rules
                  </p>

                  <p className="mt-1 text-center text-xs leading-5 text-[var(--text-muted)]">
                    Component rules + guidelines
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-30">
            {/* 02 AI-ASSISTED DEVELOPMENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
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
              className="mt-20 w-full"
            >
              <div className="flex flex-col items-center">
                {/* HOW */}
                <div className="w-full pb-20">
                  <p className="text-center text-xs font-semibold tracking-[0.25em] text-[var(--accent)] pb-5">
                    APPROCH
                  </p>

                  <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-0">
                    {/* 01 Figma Code Connect */}
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--accent-bg)] text-sm font-semibold text-[var(--accent)]">
                        01
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm font-semibold text-[var(--text-h)] sm:text-base">
                          FIGMA CODE CONNECT
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          Figma → React
                        </p>
                      </div>

                      <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-[var(--border-accent)] sm:block" />
                    </div>

                    {/* 02 Reusable Components */}
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--accent-bg)] text-sm font-semibold text-[var(--accent)]">
                        02
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm font-semibold text-[var(--text-h)] sm:text-base">
                          REUSABLE COMPONENTS
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          Design System
                        </p>
                      </div>

                      <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-[var(--border-accent)] sm:block" />
                    </div>

                    {/* 03 Development Guidelines */}
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--accent-bg)] text-sm font-semibold text-[var(--accent)]">
                        03
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm font-semibold text-[var(--text-h)] sm:text-base">
                          DEVELOPMENT GUIDELINES
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          .md + Component Rules
                        </p>
                      </div>

                      <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] bg-[var(--border-accent)] sm:block" />
                    </div>

                    {/* 04 AI-Assisted Development */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--accent-bg)] text-sm font-semibold text-[var(--accent)]">
                        04
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm font-semibold text-[var(--text-h)] sm:text-base">
                          AI-ASSISTED DEVELOPMENT
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          Cursor + Guidelines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 03 WEB-BASED INTEGRATION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
          className="mt-24 w-full"
        >
          {/* Section Header */}
          <div className="border-l-2 border-[var(--accent)] pl-6">
            <p className="text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl">
              03
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--accent)] sm:text-3xl">
              WEB-BASED INTEGRATION
            </h2>
          </div>
          {/* Introduction */}
          <p className="pt-4 max-w-2xl text-base leading-5 text-[var(--text)] sm:text-sm ">
            AI-assisted development initially produced visually similar screens,
            but implementations and interactions varied between developers.
          </p>

          {/* Architecture Flow */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
              {/* Existing Services */}
              <div className="w-full max-w-xs rounded-2xl border border-[var(--border)] bg-[var(--bg-muted)] p-6 text-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                  EXISTING
                </p>

                <p className="mt-3 text-lg font-semibold text-[var(--text-h)]">
                  Trading Services
                </p>

                <div className="mt-3 flex justify-center gap-2">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text-muted)]">
                    REST API
                  </span>

                  <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--text-muted)]">
                    WebSocket
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-2xl font-light text-[var(--text-subtle)]">
                →
              </div>

              {/* React */}
              <div className="w-full max-w-xs rounded-2xl border border-[var(--border-accent)] bg-[var(--accent-bg)] p-6 text-center">
                <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)]">
                  FRONTEND
                </p>

                <p className="mt-3 text-lg font-semibold text-[var(--text-h)]">
                  React
                </p>

                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Web-based Trading UI
                </p>
              </div>
            </div>
          </div>
          {/* Real-time WebSocket Demo + Implementation */}
          <div className="mx-auto mt-20 w-full max-w-5xl">
            <div className="mb-6">
              <p className="text-center text-xs font-semibold tracking-[0.25em] text-[var(--accent)] pb-5">
                REAL TIME DATA USING WEBSOCKET
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)] text-center">
                Connected the React frontend to the existing WebSocket service
                to receive real-time market prices, order book data, and
                execution updates.
              </p>
            </div>
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[350px_1fr] md:gap-16">
              {/* Real-time WebSocket Demo */}
              <div className="w-full">
                {/* GIF */}
                <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-black shadow-[0_20px_50px_rgba(15,23,42,0.5)]">
                  <img
                    src={realTimePrice}
                    alt="Real-time market price updates through WebSocket"
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* WebSocket Implementation */}
              <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[#111827] shadow-[var(--shadow)]">
                <div className="border-b border-white/10 px-5 py-3">
                  <span className="text-xs text-white/40">
                    socketHelpers.tsx
                  </span>
                </div>

                <pre className="overflow-x-auto p-6 text-sm leading-7 text-white/90">
                  <code>{`globalSocket = io(serverUrl, {
  transports: ["websocket"],
  secure: true,
});

globalSocket.on("connect", () => {
  globalSocket?.emit("loginId", loginId);
});

globalSocket?.on(eventName, handler);`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
