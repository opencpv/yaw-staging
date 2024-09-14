import { cn } from "@/lib/utils";
import "./main.css";
import { LuLoader2 } from "react-icons/lu";

const Loader = ({
  className,
  position = "center",
  size = "default",
}: {
  className?: string;
  position?: "default" | "center";
  size?: "default" | "sm";
}) => {
  if (position === "center") {
    return (
      <div className={cn("grid h-40 place-items-center", className)}>
        {/* <span className="loader"></span>*/}
        <LuLoader2
          size={size === "sm" ? 20 : 60}
          className={cn("animate-spin text-accent", className)}
        />
      </div>
    );
  }
  return (
    <LuLoader2
      size={size === "sm" ? 20 : 60}
      className={cn("animate-spin text-accent", className)}
    />
  );
};

export default Loader;
