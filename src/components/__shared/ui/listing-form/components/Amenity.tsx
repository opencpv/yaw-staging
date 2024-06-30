import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
type AmenityProp = {
  icon: any;
  name: string;
  n?: string | any;
  selected: boolean;
  className?: string;
  onClick: () => void;
};

const Amenity = ({ icon, name, n = 2, selected, className, onClick }: AmenityProp) => {
  const animationDuration = n * 1000;
  return (
    <motion.button
      // initial={{
      //   x: -50 + n,
      // }}
      // animate={{
      //   x: 0,
      // }}
      // transition={{
      //   type: "spring",
      //   stiffness: 25,
      //   damping: 15,
      //   duration: 1000,
      // }}
      onClick={onClick}
      className={cn(`flex aspect-[180/140] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl hover:scale-[1.05] hover:bg-slate-200 lg:aspect-[261/161] 
       px-2 py-4 text-center text-[1rem] capitalize lg:py-0 lg:text-[1.125rem]`, {
"border border-[#a3a3a3]": selected,
        }, className)}
      style={{
        boxShadow: selected
          ? "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          : undefined,
      }}
    >
      {icon}
      {name}
    </motion.button>
  );
};

export default Amenity;
