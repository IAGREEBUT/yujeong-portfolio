type BadgeLabel = "Public" | "Rebuilt" | "Case Study" | "Company" | "Personal";

interface BadgeProps {
  label: BadgeLabel;
}

const BADGE_STYLES: Record<
  BadgeLabel,
  {
    background: string;
    color: string;
  }
> = {
  Public: {
    background: "#ecfdf3",
    color: "#15803d",
  },

  Rebuilt: {
    background: "#eff6ff",
    color: "#2563eb",
  },

  "Case Study": {
    background: "#f5f3ff",
    color: "#7c3aed",
  },

  Company: {
    background: "#fff7ed",
    color: "#c2410c",
  },

  Personal: {
    background: "#f4f4f5",
    color: "#52525b",
  },
};

export default function Badge({ label }: BadgeProps) {
  const style = BADGE_STYLES[label];

  return (
    <span
      className="inline-flex items-center rounded-[7px] px-3 py-1 text-xs font-medium"
      style={{
        backgroundColor: style.background,
        color: style.color,
      }}
    >
      {label}
    </span>
  );
}
