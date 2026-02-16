"use client";

import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const words = text.split(" ");
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div className={`flex flex-wrap ${className}`} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
