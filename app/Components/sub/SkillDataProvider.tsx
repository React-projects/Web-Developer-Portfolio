"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface props {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkillsDataProvider = ({ src, width, height, index }: props) => {
  const [ref, inview] = useInView({
    triggerOnce: true,
  });
  const ImagsVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animatedDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={ImagsVariants}
      animate={inview ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animatedDelay }}
    >
      <Image src={src} width={width} height={height} alt="skills image" />
    </motion.div>
  );
};

export default SkillsDataProvider;
