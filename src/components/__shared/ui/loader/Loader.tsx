import { cn } from "@/lib/utils";
import "./main.css";

const Loader = ({
  className,
  position = "default",
}: {
  className?: string;
  position?: "default" | "center";
}) => {
  if (position === "center") {
    return (
      <div className={cn("grid h-40 place-items-center", className)}>
        <span className="loader"></span>
      </div>
    );
  }
  return <span className={cn("loader", className)}></span>;
};

export default Loader;
