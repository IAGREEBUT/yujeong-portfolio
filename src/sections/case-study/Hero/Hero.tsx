import { motion } from "framer-motion";
import ReactPocImg1 from "@/assets/images/projects/react_trading_poc_1.png";
import ReactPocImg2 from "@/assets/images/projects/react_trading_poc_2.png";
import Badge from "@/components/common/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500">
      {/* Blue glow */}
      <div
        className="
          pointer-events-none absolute
          -top-40 left-1/2
          h-[700px] w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-300/25
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 top-1/3
          h-[500px] w-[500px]
          rounded-full
          bg-sky-300/20
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.18]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Grid center focus */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 38%, rgba(15, 23, 42, 0.18) 62%, rgba(15, 23, 42, 0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[var(--content-width)] items-center px-6 py-24 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-start gap-2"
          >
            <p className="mb-6 text-sm font-medium tracking-[0.28em] text-blue-100/80">
              CASE STUDY · TECHNICAL PoC
            </p>

            <p className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              React-Based
              <br />
              Trading App PoC
            </p>

            <div className="mt-6 mb-6 flex max-w-xl flex-wrap gap-2">
              <Badge label="React" />
              <Badge label="TypeScript" />
              <Badge label="Cursor" />
              <Badge label="figma-code-connect" />
              <Badge label="WebSocket" />
            </div>

            <p className="mt-7 max-w-lg text-base leading-8 text-blue-100/70 sm:text-lg">
              Exploring a modern web-based
              <br />
              development approach for
              <br />
              financial trading applications.
            </p>
          </motion.div>

          {/* Right — Phones */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto h-[620px] w-full max-w-[620px]"
          >
            {/* Phone A */}
            <div
              className="
                absolute left-[8%] top-[7%]
                h-[540px] w-[270px]
                rounded-[42px]
                border-[7px] border-slate-900
                bg-slate-950
                p-[5px]
                shadow-[0_35px_80px_rgba(0,0,0,0.45)]
                [transform:perspective(1200px)_rotateY(-14deg)_rotateZ(-7deg)]
              "
            >
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white pt-12">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

                <img
                  src={ReactPocImg1}
                  alt="React trading app screen"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Phone B */}
            <div
              className="
                absolute right-[4%] top-[16%]
                h-[540px] w-[270px]
                rounded-[42px]
                border-[7px] border-slate-900
                bg-slate-950
                p-[5px]
                shadow-[0_35px_80px_rgba(0,0,0,0.45)]
                [transform:perspective(1200px)_rotateY(16deg)_rotateZ(6deg)]
              "
            >
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white pt-12">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

                <img
                  src={ReactPocImg2}
                  alt="React trading app screen"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
