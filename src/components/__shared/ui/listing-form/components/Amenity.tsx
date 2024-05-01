import { motion } from "framer-motion";
type AmenityProp = {
  icon: any;
  name: string;
  n?: string | any;
  selected: boolean;
};

const Amenity = ({ icon, name, n = 2, selected }: AmenityProp) => {
  const animationDuration = n * 1000;
  return (
    <motion.div
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
      className={`flex aspect-[180/140] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl hover:scale-[1.05] hover:bg-slate-200 lg:aspect-[261/161] ${
        selected && "border border-[#a3a3a3]"
      } px-2 py-4 text-center text-[1rem] capitalize lg:py-0 lg:text-[1.125rem]`}
      style={{
        boxShadow: selected
          ? "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          : undefined,
      }}
    >
      {icon}
      {name}
    </motion.div>
  );
};

export default Amenity;
