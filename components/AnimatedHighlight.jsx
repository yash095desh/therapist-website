import React, { useState } from "react";
import { motion } from "motion/react";

const AnimatedHighlight = ({ items, duration = 3000 }) => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, duration);
    return () => clearInterval(interval);
  }, [items.length, duration]);

  return (
    <div className="mb-8 h-6 text-lg text-cyan-200 font-bolder flex items-center justify-center min-h-[24px]">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        {items[index].icon}
        <span>{items[index].text}</span>
      </motion.div>
    </div>
  );
};

export default AnimatedHighlight;
