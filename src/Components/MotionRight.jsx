// components/MotionRight.jsx
import { motion } from "framer-motion";

const MotionRight = ({ children, delay = 0, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionRight;
