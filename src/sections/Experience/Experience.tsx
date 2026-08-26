import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jan 2023 – Apr 2026",
    company: "Mirae Asset Securities",
    role: "Mobile Development Team",
    logo: "",
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
        description: `- Led technical projects while maintaining mobile applications \n- Developed internal web tools to improve team workflows`,
      },
    ],
  },
  {
    period: "Jul 2020 – Aug 2020",
    company: "Data WareHousing Lab (Ewha Univ)",
    role: "Research Intern",
    description:
      "- Developed a CNN-based model to classify human activity patterns from 3-axis accelerometer data",
    date: null,
    positions: null,
  },
];

export default function Experience() {
  return (
    <section className="relative w-full px-6 py-24">
      <div className="mx-auto max-w-[var(--content-width)]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-[var(--accent)]">
            EXPERIENCE
          </p>

          <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Main Timeline Line */}
          <div className="absolute bottom-0 left-[210px] top-0 hidden w-px bg-[var(--border)] md:block" />

          <div className="flex flex-col gap-16">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative grid grid-cols-1 gap-6 md:grid-cols-[180px_60px_minmax(0,1fr)] md:gap-0"
              >
                {/* Period */}
                <div className="pt-5 text-xs font-semibold text-[var(--accent)] md:pr-6 md:text-right">
                  {experience.period}
                </div>

                {/* Timeline Marker */}
                <div className="relative hidden md:block">
                  <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[var(--accent)] bg-[var(--surface)]" />
                </div>

                {/* Company Content */}
                <div className="flex gap-6 md:pl-2">
                  {/* Temporary Logo */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-muted)]">
                    LOGO
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

                    {/* Date */}
                    {experience.date && (
                      <span className="pt-4 inline-flex rounded-lg bg-[var(--surface)] py-1.5 text-xs text-[var(--text-muted)]">
                        {experience.date}
                      </span>
                    )}

                    {/* Description */}
                    {experience.description && (
                      <p className="pt-5 text-xs leading-5 text-[var(--text-muted)] whitespace-pre-line">
                        {experience.description}
                      </p>
                    )}

                    {/* Internal Positions */}
                    {experience.positions && (
                      <div className="relative mt-8 ml-1 border-l border-[var(--border)] pl-7">
                        {experience.positions.map((position) => (
                          <div
                            key={position.title}
                            className="relative pb-8 last:pb-0"
                          >
                            {/* Position Marker */}
                            <span className="absolute -left-[36.5px] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />

                            {/* Position */}
                            <h4 className="text-md font-medium text-[var(--text-h)]">
                              {position.title}
                            </h4>

                            {/* Position Date */}
                            <span className="pt-3 inline-flex rounded-lg bg-[var(--surface)]  py-1.5 text-xs text-[var(--text-muted)]">
                              {position.date}
                            </span>

                            {/* Position Description */}
                            <p className="mt-2 text-xs leading-5 text-[var(--text-muted)] whitespace-pre-line">
                              {position.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
