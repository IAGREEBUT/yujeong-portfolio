export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container)] px-6 py-1">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Identity */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text-h)]">
              Yujeong Lee
            </h2>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Frontend Developer · React & TypeScript
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm text-[var(--text-muted)]">
            <a
              href="#about"
              className="transition-colors hover:text-[var(--accent)]"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-6 text-xs text-[var(--text-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Yujeong Lee. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              GitHub ↗
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
