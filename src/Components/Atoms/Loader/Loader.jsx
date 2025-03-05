import React from "react";
import { motion } from "framer-motion";
import { div } from "motion/react-m";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[20%]">
      <motion.div
        className="w-20 h-20 border-8  border-[#343a40] border-t-[#6741d9] rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Loader;
