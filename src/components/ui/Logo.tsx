import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/images/trisyntax-logo.png"
        alt={showWordmark ? "" : "TriSyntax"}
        width={64}
        height={64}
        className="h-full w-auto shrink-0 object-contain"
        priority
      />
      {showWordmark && (
        <span className="font-display text-[1.1875rem] font-semibold tracking-tight text-current">
          TriSyntax
        </span>
      )}
    </span>
  );
}
