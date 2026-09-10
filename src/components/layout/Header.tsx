export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[var(--container)] px-6 py-6">
        <a
          href="/"
          className="
              text-sm
              font-semibold
              tracking-[0.18em]
              text-[var(--text-h)]
              transition-colors
              hover:text-[var(--accent)]
            "
          aria-label="Yujeong home"
        >
          YUJEONG.DEV
        </a>
      </div>
    </header>
  );
}
