import Link from "next/link";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-500">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-ink-300" aria-hidden>
                /
              </span>
            )}
            {i === items.length - 1 ? (
              <span className="font-medium text-ink-700" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="transition-colors hover:text-brand-blue-700">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
