import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "green";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.8125rem] font-medium tracking-wide",
        tone === "blue"
          ? "border-brand-blue-200 bg-brand-blue-50 text-brand-blue-700"
          : "border-brand-green-200 bg-brand-green-50 text-brand-green-700",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          tone === "blue" ? "bg-brand-blue-600" : "bg-brand-green-600"
        )}
      />
      {children}
    </span>
  );
}
