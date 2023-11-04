import {motion } from 'framer-motion'
type AmenityProp = {
    icon: any;
    name: string;
    n?: string | any;
    selected :boolean
  };
  
const Amenity = ({ icon, name, n = 2, selected }: AmenityProp) => {
  const animationDuration = n * 1000;
  return (
    <motion.div
      initial={{
        x: -50 + n,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 25,
        damping: 15,
        duration: 1000,
      }}
      className={`flex flex-col aspect-[261/161] w-full gap-4 items-center justify-center hover:bg-slate-200 hover:scale-[1.05] cursor-pointer rounded-xl ${selected && "border-[1px] border-[#073B3A"} capitalize`}
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


export default Amenity