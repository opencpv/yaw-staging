import { cn } from "@/lib/utils";
import "./main.css";

const Loader = ({ className }: { className?: string }) => {
  return <span className={cn("loader", className)}></span>;
};

export default Loader;
