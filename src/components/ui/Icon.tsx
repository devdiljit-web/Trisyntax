export type IconName =
  | "layout"
  | "figma"
  | "code"
  | "server"
  | "layers"
  | "cart"
  | "search"
  | "gauge"
  | "wrench"
  | "cube"
  | "api"
  | "brain"
  | "workflow";

const paths: Record<IconName, React.ReactNode> = {
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9.5H21" />
      <path d="M9 9.5V20" />
    </>
  ),
  figma: (
    <>
      <path d="M9 2h4a3 3 0 0 1 0 6H9V2Z" />
      <path d="M9 8h4a3 3 0 0 1 0 6H9V8Z" />
      <path d="M9 14h3a3 3 0 1 1-3 3v-3Z" />
      <path d="M9 8a3 3 0 1 0 0 6" />
    </>
  ),
  code: (
    <>
      <path d="M9 6 3 12l6 6" />
      <path d="M15 6l6 6-6 6" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01" />
      <path d="M7 16.5h.01" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M2 13l10 5 10-5" />
      <path d="M2 17.5l10 5 10-5" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3h2.4l2.2 12.2a2 2 0 0 0 2 1.65h8.7a2 2 0 0 0 2-1.6L21.5 8H6" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15l3.5-4.5" />
      <path d="M12 15h.01" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </>
  ),
  cube: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5" />
      <path d="M12 12v10" />
    </>
  ),
  api: (
    <>
      <rect x="3" y="9" width="6" height="6" rx="1.5" />
      <rect x="15" y="9" width="6" height="6" rx="1.5" />
      <path d="M9 12h6" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3v.3A3.5 3.5 0 0 0 4 10.5 3.5 3.5 0 0 0 6.2 13.7 3 3 0 0 0 9 18" />
      <path d="M15 4a3 3 0 0 1 3 3v.3a3.5 3.5 0 0 1 2 3.2 3.5 3.5 0 0 1-2.2 3.2A3 3 0 0 1 15 18" />
      <path d="M9 4v14" />
      <path d="M15 4v14" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M6.5 10v4a2 2 0 0 0 2 2H14" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
