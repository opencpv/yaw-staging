import { cn } from "@/lib/utils";

function Skeleton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-fit animate-pulse rounded-md bg-neutral-200", className)}
      {...props}
    >
      <div className="invisible">{children}</div>
    </div>
  );
}

export { Skeleton };
