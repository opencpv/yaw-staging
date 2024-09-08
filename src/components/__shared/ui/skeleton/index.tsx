import { cn } from "@/lib/utils";

/**
 * Use to show a placeholder while content is loading.
 */
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
