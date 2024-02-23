"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Image from "next/image";
function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Font End Developer Portfolio
          </h1>
        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)}>
          <div className="flex flex-col gap-6 text-6xl font-bold  text-white max-w-[600px] h-auto w-auto">
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
            </span>
            Project experiences
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              I&apos;m a Font End Developer Portfolio with experience in
              Website, Mobile, and Software development. Check out my projects
              and skills.
            </motion.p>
            {/* <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px] text-2xl"
            >
              Learn more!
            </motion.a> */}
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.9)}
        className="w-full h-full  flex items-center justify-center"
      >
        <Image
          src="assets/social/mainIconsdark.svg"
          alt="work-icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
