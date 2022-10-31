import React from "react";
import { motion } from "framer-motion";
import logo from "../../Resources/logo.png";
import { NameSvg } from "./NameSvg";

const getAnimation = (delay) => {
  return {
    initial: {
      y: "50px",
      opacity: 0,
    },
    animate: {
      y: "0px",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        easeIn: [0.34, 1.56, 0.64, 1],
        type: "tween",
        stiffness: 100,
      },
    },
  };
};

export const MainHeader = () => {
  return (
    <motion.div
      className="main-header"
      initial={{ height: "100vh" }}
      animate={{ height: "85vh" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="header-main-text">
        <NameSvg />

        <motion.h2
          variants={getAnimation(1.3)}
          initial="initial"
          animate="animate"
          style={{ fontWeight: 700, fontSize: "22px", color: "lightblue" }}
        >
          {"< Front-end Developer />"}
        </motion.h2>
      </div>
    </motion.div>
  );
};
