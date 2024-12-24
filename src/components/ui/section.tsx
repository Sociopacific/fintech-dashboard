import { ReactNode } from "react";
import { motion } from "framer-motion";

// Variants for section animation
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

type SectionProps = {
  title: ReactNode;
  children: ReactNode;
  index: number;
  className?: string;
};

export const Section = ({
  title,
  children,
  index,
  className,
}: SectionProps) => (
  <div className={`flex flex-col gap-[15px] ${className || ""}`}>
    <motion.h2
      className="text-text-accent text-2xl font-semibold"
      initial="hidden"
      animate="visible"
      variants={variants}
      custom={index}
    >
      {title}
    </motion.h2>
    {children}
  </div>
);

export default Section;
