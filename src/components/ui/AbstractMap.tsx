import { siteConfig } from "@/lib/site-config";

export function AbstractMap() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-200 bg-ink-50">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-ink-300) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(45% 55% at 55% 45%, color-mix(in oklab, var(--color-brand-blue-300) 60%, transparent), transparent)",
        }}
        aria-hidden
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex size-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-500 opacity-60" />
          <span className="relative inline-flex size-5 items-center justify-center rounded-full border-2 border-white bg-brand-green-600 shadow-lg" />
        </span>
      </div>
      <div className="absolute bottom-4 left-4 rounded-xl border border-ink-200 bg-white/90 px-4 py-3 text-sm shadow-premium backdrop-blur">
        <p className="font-medium text-ink-900">TriSyntax HQ</p>
        <p className="text-ink-500">
          {siteConfig.address.city}, {siteConfig.address.country}
        </p>
      </div>
    </div>
  );
}
