import { ReactNode } from "react";
import { motion } from "framer-motion";

// Variants for tile animation
const variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Tile component with animation
type TileProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

export const Tile = ({ children, index, className }: TileProps) => (
  <motion.div
    className={`flex-1 max-w-full max-h-full rounded-3xl bg-white ${className}`}
    initial="hidden"
    animate="visible"
    variants={variants}
    custom={index}
  >
    {children}
  </motion.div>
);

export default Tile;
