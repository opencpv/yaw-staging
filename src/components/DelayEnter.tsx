import { motion } from "framer-motion";

type Props = {
    index: number, 
    children :React.ReactNode
}
function DelayEnter({index, children} : Props) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1000,
        delay: index / 4,
        type: "spring",
        stiffness: 50,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
}

export default DelayEnter;
