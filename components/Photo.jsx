"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative glitch-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        {/* Main photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          className="w-[300px] xl:w-[586px] h-[300px] xl:h-[506px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Photo"
            className="object-contain"
          />
        </motion.div>

        {/* Glitch effect layers */}
        <div className="glitch-img glitch-img-red absolute">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Photo Red Glitch"
            className="object-contain"   
            draggable={false}

          />
        </div>
        <div className="glitch-img glitch-img-blue absolute">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Photo Blue Glitch"
            className="object-contain"
          />
        </div>

        {/* Animated SVG */}
        <motion.svg
          className="w-[300px] xl:w-[586px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16,25,92,72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
  