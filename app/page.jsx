"use client"; 

import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

import { motion } from "framer-motion";
// {Component}
import Social from "@/components/social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const texts = ["Software Developer", "IoT Engineer","Android Developers", "IT Engineer",];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 2000);
    return () => clearInterval(id);
    }, []);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,transition:.4,ease:"easeIn"}}
    >
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl relative glitch-container">
          <span className="glitch glitch-text " data-text={texts[index]}>
            {texts[index]}
          </span>
        </span>
            <h1 className="h1 mb-6 ">
              Hello I`m <br /> <span className="text-accent">Reyvans Pahlevi,S.Kom</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80">
              I`m an expert in IoT engineering and software development, with a
              strong focus on IoT engineering. I have a deep understanding of the
              latest technologies and trends in the field, and I`m always looking
              for new challenges to push my skills to the next level. Whether it`s
              developing custom IoT solutions or working on large-scale projects,
              I`m always up for a challenge.
            </p>
           <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-3 w-[150px]">
              <span>Download Cv</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6" 
            iconStyles="w-9 h-9 border border-accent rounded-full flex 
            justify-center items-center text-accent text-base hover:bg-accent
            hover:text-primary hover:transition-all duration-500"/>
            </div>
           </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />  
          </div> 
        </div>
      </div>
      <Stats />
    </section>
    </motion.div>
  );
};

export default Home;
