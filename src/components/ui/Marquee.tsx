import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  speedClassName = "[animation-duration:32s]",
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speedClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 animate-marquee",
          speedClassName,
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 animate-marquee",
          speedClassName,
          reverse && "[animation-direction:reverse]"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
