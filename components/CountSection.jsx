"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "motion/react";
import { animate } from "motion"; 

const AnimatedCounter = ({ target = 0, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, count, target, duration]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
};

const CountSection = () => {
  return (
    <div className="bg-slate-700 py-20">
      <div className="flex flex-col md:flex-row items-center mx-auto container justify-center md:justify-between gap-10 md:gap-4">
        <div className="space-y-2 text-white flex flex-col items-center md:items-start">
          <h1 className="font-bold text-5xl">
            <AnimatedCounter target={8} duration={2} /> +
          </h1>
          <p className="font-semibold text-xl">Years of Experience</p>
          <p>Providing compassionate and effective Individual and Couples Therapy</p>
        </div>

        <div className="space-y-2 text-white flex flex-col items-center md:items-start">
          <h1 className="font-bold text-5xl">
            <AnimatedCounter target={500} duration={3} /> +
          </h1>
          <p className="font-semibold text-xl">Individual Client Sessions</p>
          <p>Helping individuals and couples heal, grow, and find purpose</p>
        </div>
      </div>
    </div>
  );
};

export default CountSection;
