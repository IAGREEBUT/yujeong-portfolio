import { motion } from "framer-motion";
import ewhaLab from "@/assets/images/logos/ewha_lab.png";
import mireaAsset from "@/assets/images/logos/mirae_asset_securities_sg_logo.jpeg";

const experiences = [
  {
    period: "Jan 2023 – Apr 2026",
    company: "Mirae Asset Securities",
    role: "Mobile Development Team",
    logo: mireaAsset,
    description: null,
    date: null,
    positions: [
      {
        title: "Intern",
        date: "Jan 2023 – Apr 2023",
        description:
          "- Developed React-based WebView screens for a student-focused mock investment and financial education app",
      },
      {
        title: "Manager",
        date: "May 2023 – Apr 2026",
        description: `- Led technical projects while maintaining mobile applications
- Developed internal web tools to improve team workflows`,
      },
    ],
  },
  {
    period: "Jul 2020 – Aug 2020",
    company: "Data WareHousing Lab (Ewha Univ)",
    role: "Research Intern",
    logo: ewhaLab,
    description:
      "- Developed a CNN-based model to classify human activity patterns from 3-axis accelerometer data",
    date: null,
    positions: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full px-6 py-24">
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
          className="mb-20 text-center"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-[var(--accent)]">
            EXPERIENCE
          </p>

          <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Main Timeline */}
          <div className="absolute bottom-0 left-[210px] top-0 hidden w-px bg-[var(--border)] md:block" />

          <div className="flex flex-col gap-16">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-[180px_60px_minmax(0,1fr)]">
                  {/* Period */}
                  <div className="pt-5 text-xs font-semibold text-[var(--accent)] md:pr-6 md:text-right">
                    {experience.period}
                  </div>

                  {/* Main Timeline Marker */}
                  <div className="relative hidden md:block">
                    <span className="absolute left-1/2 top-1/8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[var(--accent)] bg-[var(--surface)]" />
                  </div>

                  {/* Company Content */}
                  <div className="flex gap-6 md:pl-2">
                    {/* Company Logo */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)]">
                      {experience.logo ? (
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="h-full w-full object-contain p-4"
                        />
                      ) : (
                        <span className="text-xs text-[var(--text-muted)]">
                          LOGO
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      {/* Company */}
                      <h3 className="text-lg font-bold tracking-tight text-[var(--text-h)]">
                        {experience.company}
                      </h3>

                      {/* Team / Role */}
                      <p className="pt-2 text-sm font-medium text-[var(--text)]">
                        {experience.role}
                      </p>

                      {/* Company Date */}
                      {experience.date && (
                        <span className="inline-flex pt-4 rounded-lg bg-[var(--surface)] py-1.5 text-xs text-[var(--text-muted)]">
                          {experience.date}
                        </span>
                      )}

                      {/* Company Description */}
                      {experience.description && (
                        <p className="whitespace-pre-line pt-5 text-xs leading-5 text-[var(--text-muted)]">
                          {experience.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Internal Positions */}
                {experience.positions && (
                  <div className="mt-6">
                    {experience.positions.map((position, positionIndex) => (
                      <div
                        key={position.title}
                        className="grid grid-cols-1 md:grid-cols-[180px_60px_minmax(0,1fr)]"
                      >
                        {/* Empty Period Column */}
                        <div />

                        {/* Main Timeline Column */}
                        <div className="relative hidden md:block">
                          <span className="absolute left-1/2 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--accent)]" />

                          {/* Internal Timeline Connector */}
                          {positionIndex < experience.positions!.length - 1 && (
                            <span className="absolute left-1/2 top-5 bottom-0 w-px -translate-x-1/2 bg-[var(--border)]" />
                          )}
                        </div>

                        {/* Position Content */}
                        <div className="pb-8 md:pl-32">
                          {/* Position */}
                          <h4 className="text-md font-medium text-[var(--text-h)]">
                            {position.title}
                          </h4>

                          {/* Position Date */}
                          <span className="inline-flex pt-3 text-xs text-[var(--text-muted)]">
                            {position.date}
                          </span>

                          {/* Position Description */}
                          <p className="mt-2 whitespace-pre-line text-xs leading-5 text-[var(--text-muted)]">
                            {position.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
