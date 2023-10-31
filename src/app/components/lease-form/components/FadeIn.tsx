import { motion } from "framer-motion";

export default function FadeIn({ children }) {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type:"spring",
        stiffness:5,
        damping:5,
        duration: 1200,
      }}>
      {children}
    </motion.div>
  );
}
